"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import dynamic from "next/dynamic";
import { useReveal } from "@/hooks/useReveal";

const WorkModal = dynamic(() => import("@/components/WorkModal"), { ssr: false });

export default function WorkPreview() {
  const { t } = useI18n();
  const items = t.work;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <h2 className="font-serif text-2xl md:text-3xl mb-6">Signals / Work</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {items.map((it, i) => {
          const { ref, visible } = useReveal<HTMLButtonElement>({ threshold: 0.15 });
          const style = { transitionDelay: `${i * 120}ms` } as React.CSSProperties;
          return (
            <button
              key={i}
              ref={ref}
              style={style}
              className={`reveal ${visible ? "reveal--in" : ""} group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-base-800/20 bg-base-100/40 text-left`}
              onClick={() => setOpenIdx(i)}
            >
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.2),transparent_40%,rgba(0,0,0,0.25))]" />
              <div className="absolute inset-0 [mask-image:radial-gradient(120%_120%_at_80%_-20%,black,transparent)] group-hover:scale-105 group-hover:skew-y-1 transition-transform duration-300" />
              <span className="absolute bottom-3 left-3 right-3 text-xs md:text-sm text-ink drop-shadow-sm">
                {it.caption}
              </span>
            </button>
          );
        })}
      </div>

      {openIdx !== null && (
        <WorkModal
          open={openIdx !== null}
          onClose={() => setOpenIdx(null)}
          caption={items[openIdx].caption}
          outcomes={items[openIdx].outcomes}
        />
      )}
    </section>
  );
}


