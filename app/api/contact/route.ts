// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "@/app/src/lib/email";

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  subject: z.string().max(200).optional().nullable(),
  message: z.string().min(5).max(2000),
  // honeypot must be empty string (bots often fill it)
  hp: z.string().max(0).optional().nullable(),
});

type ContactData = z.infer<typeof ContactSchema>;

/**
 * Simple in-memory rate limiter.
 * Limits per IP: MAX_REQUESTS within WINDOW_MS.
 *
 * Note: In serverless/prod this is per-instance. For critical apps,
 * replace with a distributed limiter (Redis, Upstash, etc).
 */
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 6; // max requests per window per IP

const hitsMap = new Map<string, number[]>();

function getIpFromRequest(req: Request) {
  // prefer x-forwarded-for set by proxies (Vercel)
  const xff = req.headers.get("x-forwarded-for");
  if (xff) {
    // may be comma separated
    return xff.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp;
  return "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const arr = hitsMap.get(ip) ?? [];
  const updated = arr.filter((ts) => ts >= windowStart);
  updated.push(now);
  hitsMap.set(ip, updated);
  return updated.length > RATE_LIMIT_MAX;
}

export async function POST(req: Request) {
  try {
    const ip = getIpFromRequest(req);

    // parse JSON body
    let json: unknown;
    try {
      json = await req.json();
    } catch {
      return NextResponse.json({ error: "invalid_json" }, { status: 400 });
    }

    // basic rate limit check BEFORE heavy validation to mitigate abuse
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "rate_limited" }, { status: 429 });
    }

    // validate payload
    const parseResult = ContactSchema.safeParse(json);
    if (!parseResult.success) {
      return NextResponse.json({ error: "validation_failed", details: parseResult.error.flatten() }, { status: 400 });
    }
    const data: ContactData = parseResult.data;

    // honeypot check (redundant with zod but explicit)
    if (data.hp && data.hp.length > 0) {
      // silent failure for bots
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // send email
    await sendContactEmail({
      name: data.name.trim(),
      email: data.email.trim(),
      subject: data.subject?.trim() ?? null,
      message: data.message.trim(),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
