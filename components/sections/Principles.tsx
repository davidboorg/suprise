"use client";

import { useI18n } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

export default function Principles() {
  const { t } = useI18n();
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <Reveal>
        <h2 className="font-serif text-2xl md:text-3xl mb-8">Principles</h2>
      </Reveal>
      <ol className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 counter-reset:principle">
        {t.principles.map((p, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <li className="rounded-xl border border-base-800/20 bg-base-100/40 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="font-mono text-sm text-ink-dim">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-sans text-lg md:text-xl tracking-tight">{p.title}</h3>
                  <p className="text-ink-dim mt-2 text-sm md:text-base">{p.body}</p>
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}


