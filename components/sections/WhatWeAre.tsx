"use client";

import { useI18n } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import { useRef } from "react";

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <div
      ref={ref}
      className="group relative rounded-2xl border border-base-800/20 overflow-hidden bg-base-100/40 [transform-style:preserve-3d] will-change-transform transition-transform"
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 3).toFixed(2)}deg)`;
      }}
      onMouseLeave={() => {
        const el = ref.current;
        if (el) el.style.transform = "rotateX(0deg) rotateY(0deg)";
      }}
    >
      {children}
    </div>
  );
}

export default function WhatWeAre() {
  const { t } = useI18n();
  const items = t.whatWeAre;
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <TiltCard>
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl tracking-tight">{it.title}</h3>
                <p className="font-sans text-base md:text-lg text-ink-dim mt-3 md:mt-4">{it.body}</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden>
                <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_-20%,#B3FFCB_0%,transparent_50%)] mix-blend-overlay" />
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


