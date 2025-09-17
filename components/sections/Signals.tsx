"use client";

import Reveal from "@/components/Reveal";
import { useI18n } from "@/lib/i18n";

export default function SignalsSection() {
  const { t } = useI18n();
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-36">
      <div className="space-y-6 md:space-y-7">
        {t.signals.map((line, idx) => (
          <Reveal key={idx} delay={idx * 0.06}>
            <p className="font-serif text-[1.9rem] md:text-[2.4rem] leading-[1.15] tracking-[-0.01em] text-foreground/95">
              {line}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


