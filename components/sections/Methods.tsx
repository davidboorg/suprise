"use client";

import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function Methods() {
  const { t } = useI18n();
  const items = t.methods;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-36">
      <Reveal>
        <h2 className="font-serif text-2xl md:text-3xl mb-6">Methods</h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {items.map((m, i) => {
          const expanded = open === i;
          return (
            <div key={i} className="rounded-2xl border border-base-800/20 bg-base-100/50 p-5 md:p-6">
              <h3 className="font-sans text-lg md:text-xl tracking-tight">{m.title}</h3>
              <p className="text-ink-dim text-sm md:text-base mt-2">{m.brief}</p>
              <button
                className="mt-4 text-sm underline underline-offset-4 hover:opacity-80"
                onClick={() => setOpen(expanded ? null : i)}
                aria-expanded={expanded}
                aria-controls={`method-${i}`}
              >
                {expanded ? "Close" : "Learn more"}
              </button>
              <div
                id={`method-${i}`}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm md:text-base mt-3 text-ink">{m.more}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


