"use client";

import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import { z } from "zod";

const Schema = z.object({
  email: z.string().email(),
  note: z.string().min(0).max(1000).optional(),
});

export default function EmailForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">(
    "idle"
  );
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus("sending");
    setMessage(null);
    const raw = {
      email: String(formData.get("email") || ""),
      note: String(formData.get("note") || ""),
    };
    const parsed = Schema.safeParse(raw);
    if (!parsed.success) {
      setStatus("err");
      setMessage(parsed.error.issues[0]?.message || t.access.error);
      return;
    }
    try {
      // Dummy POST
      await fetch("/api/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      setStatus("ok");
      setMessage(t.access.success);
    } catch {
      setStatus("err");
      setMessage(t.access.error);
    }
  }

  return (
    <form action={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-ink-dim mb-1">{t.access.emailLabel}</label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-base-800/20 bg-transparent px-3 py-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-mint)]"
          placeholder="name@company.com"
        />
      </div>
      <div>
        <label className="block text-sm text-ink-dim mb-1">{t.access.noteLabel}</label>
        <textarea
          name="note"
          rows={5}
          className="w-full rounded-lg border border-base-800/20 bg-transparent px-3 py-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-mint)]"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="px-6 py-3 rounded-full bg-foreground text-background hover:opacity-90 disabled:opacity-60"
      >
        {t.access.submit}
      </button>
      {message && (
        <div className="text-sm text-ink mt-1" role="status" aria-live="polite">
          {message}
        </div>
      )}
    </form>
  );
}


