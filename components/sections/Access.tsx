"use client";

import { useI18n } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import EmailForm from "@/components/EmailForm";

export default function AccessSection() {
  const { t } = useI18n();
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <Reveal>
        <h2 className="font-serif text-2xl md:text-3xl mb-3">{t.access.title}</h2>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="text-ink-dim max-w-[60ch] mb-8">{t.access.prompt}</p>
      </Reveal>
      <div className="mt-6">
        <a
          href="mailto:david@surpriseventures.io?subject=Request%20Access"
          className="inline-block px-6 py-3 rounded-full bg-foreground text-background hover:opacity-90"
        >
          {t.access.submit}
        </a>
      </div>
    </section>
  );
}


