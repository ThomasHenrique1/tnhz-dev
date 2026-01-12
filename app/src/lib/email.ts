// src/lib/email.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function sendContactEmail({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject?: string | null;
  message: string;
}) {
  if (!process.env.SENDER_EMAIL || !process.env.RECIPIENT_EMAIL) {
    throw new Error("Missing SENDER_EMAIL or RECIPIENT_EMAIL env variables");
  }

  const subjectLine = subject?.trim()
    ? `Contato do site: ${subject}`
    : `Contato do site: ${name}`;

  const html = `
    <div style="font-family: system-ui, Arial, sans-serif; line-height: 1.4;">
      <h2>Contato do site</h2>
      <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      ${subject ? `<p><strong>Assunto:</strong> ${escapeHtml(subject)}</p>` : ""}
      <hr />
      <div>
        ${escapeHtml(message).replace(/\n/g, "<br/>")}
      </div>
    </div>
  `;

  return resend.emails.send({
    from: process.env.SENDER_EMAIL,
    to: [process.env.RECIPIENT_EMAIL], // ✅ OBRIGATÓRIO
    subject: subjectLine,
    html,
  });
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
