"use client";

import { useI18n } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

export default function Founders() {
  const { t } = useI18n();
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-24">
      <Reveal>
        <h2 className="font-serif text-2xl md:text-3xl mb-4">Founders</h2>
      </Reveal>
      <p className="text-ink-dim max-w-[60ch] mb-8">{t.founders.blurb}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {t.founders.people.map((p, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <a
              href={`mailto:${p.email}`}
              className="flex items-center gap-4 rounded-xl border border-base-800/20 p-5 hover:border-base-800/40 transition-colors"
            >
              <div className="h-12 w-12 shrink-0 rounded-full bg-base-800/10" aria-hidden />
              <div>
                <div className="font-sans text-base md:text-lg">{p.name}</div>
                <div className="text-ink-dim text-sm">{p.role}</div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


