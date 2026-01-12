// src/components/ContactForm.tsx
"use client";

import { useState } from "react";
import { z } from "zod";

const MAX_MESSAGE = 2000;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "", hp: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setErrorMsg(null);

    // client-side quick validation
    if (values.message.length > MAX_MESSAGE) {
      setErrorMsg("Mensagem muito longa.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setOk(true);
        setValues({ name: "", email: "", subject: "", message: "", hp: "" });
      } else if (res.status === 429) {
        setErrorMsg("Muitas requisições. Tente mais tarde.");
        setOk(false);
      } else {
        const json = await res.json().catch(() => null);
        setErrorMsg(json?.error || "Erro ao enviar.");
        setOk(false);
      }
    } catch (err) {
      setErrorMsg("Erro de conexão.");
      setOk(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl" aria-live="polite">
      <input
        required
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        placeholder="Seu nome"
        className="input w-full"
      />
      <input
        required
        type="email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        placeholder="Seu e-mail"
        className="input w-full"
      />
      <input
        value={values.subject}
        onChange={(e) => setValues({ ...values, subject: e.target.value })}
        placeholder="Assunto (opcional)"
        className="input w-full"
      />

      {/* honeypot field - hide with css, but keep for bots */}
      <div style={{ position: "absolute", left: "-9999px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }} aria-hidden>
        <label htmlFor="hp">Leave empty</label>
        <input id="hp" name="hp" value={values.hp} onChange={(e) => setValues({ ...values, hp: e.target.value })} />
      </div>

      <textarea
        required
        value={values.message}
        onChange={(e) => setValues({ ...values, message: e.target.value })}
        placeholder="Mensagem"
        className="textarea w-full"
        rows={6}
      />

      <div className="flex items-center gap-3">
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
        {ok === true && <span className="text-success">Enviado</span>}
        {ok === false && <span className="text-destructive">Erro</span>}
      </div>

      {errorMsg && <p className="text-sm text-destructive mt-2">{errorMsg}</p>}
    </form>
  );
}
