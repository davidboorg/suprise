"use client";

import { useI18n } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import LocaleToggle from "@/components/LocaleToggle";
import SignalsSection from "@/components/sections/Signals";
import WhatWeAre from "@/components/sections/WhatWeAre";
import Methods from "@/components/sections/Methods";
import WorkPreview from "@/components/sections/WorkPreview";
import Principles from "@/components/sections/Principles";
import Founders from "@/components/sections/Founders";
import AccessSection from "@/components/sections/Access";
import SpotlightButton from "@/components/SpotlightButton";

function Hero() {
  const { t } = useI18n();
  return (
    <section className="min-h-[80svh] max-w-[1280px] mx-auto px-6 md:px-10 flex items-center">
      <div className="w-full">
        <Reveal>
          <h1 className="font-serif text-[2.4rem] sm:text-[4rem] md:text-[5.2rem] lg:text-[6.2rem] leading-[1.02] tracking-[-0.02em]">
            {t.hero.h1.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-sans text-base md:text-xl text-ink-dim mt-8 max-w-[56ch]">
            {t.hero.sub}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex gap-4">
            <SpotlightButton>
              {t.hero.ctaPrimary}
            </SpotlightButton>
            <button className="px-6 py-3 rounded-full border border-base-800/20 hover:border-base-800/40 transition-colors">
              {t.hero.ctaSecondary}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="max-w-[1280px] mx-auto px-6 md:px-10 py-8 flex items-center justify-between">
        <span className="text-sm tracking-[0.18em] uppercase">Suprise</span>
        <LocaleToggle />
      </header>
      <main>
        <Hero />
        <SignalsSection />
        <WhatWeAre />
        <Methods />
        <WorkPreview />
        <Principles />
        <Founders />
        <AccessSection />
      </main>
    </div>
  );
}
