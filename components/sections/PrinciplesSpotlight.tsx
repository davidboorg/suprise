"use client";

import { useI18n } from "@/lib/i18n";
import { useInViewOnce } from "@/hooks/useInViewOnce";

export default function PrinciplesSpotlight() {
  const { t } = useI18n();
  return (
    <section aria-labelledby="principles-spotlight" className="principles-spotlight">
      <h2 id="principles-spotlight" className="sr-only">Principles</h2>
      {t.principles.map((p, i) => (
        <SpotlightCard key={i} id={String(i + 1).padStart(2, "0")} title={p.title} sub={p.body} index={i} />
      ))}
    </section>
  );
}

function SpotlightCard({ id, title, sub, index }: { id: string; title: string; sub: string; index: number }) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.5);
  return (
    <div ref={ref} className={`spotlight-card ${inView ? "is-active" : ""}`}>
      <article className="spotlight-inner" style={{ transitionDelay: inView ? `${index * 80}ms` : "0ms" }}>
        <div aria-hidden className="opacity-50 text-sm mb-2">{id}</div>
        <h3 className="spotlight-title">{title}</h3>
        <p className="spotlight-sub">{sub}</p>
      </article>
    </div>
  );
}


