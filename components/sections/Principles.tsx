"use client";

import { useI18n } from "@/lib/i18n";
import { useReveal } from "@/hooks/useReveal";

export default function Principles() {
  const { t } = useI18n();
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28" aria-labelledby="principles-title">
      <div className="flex items-end justify-between mb-8">
        <h2 id="principles-title" className="font-serif text-2xl md:text-3xl">Principles</h2>
        <a href="/principles" className="text-sm underline underline-offset-4 hover:opacity-80">View as Spotlight</a>
      </div>
      <ol className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {t.principles.map((p, i) => (
          <PrincipleItem key={i} index={i} title={p.title} body={p.body} />
        ))}
      </ol>
    </section>
  );
}

function PrincipleItem({ index, title, body }: { index: number; title: string; body: string }) {
  const { ref, visible } = useReveal<HTMLLIElement>({ threshold: 0.15 });
  const style = { transitionDelay: `${index * 120}ms` } as React.CSSProperties;
  return (
    <li ref={ref} className={`reveal ${visible ? "reveal--in" : ""}`} style={style}>
      <div className="rounded-xl border border-base-800/20 bg-base-100/40 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <span className="font-mono text-sm text-ink-dim">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3 className="font-sans text-lg md:text-xl tracking-tight">{title}</h3>
            <p className="text-ink-dim mt-2 text-sm md:text-base">{body}</p>
          </div>
        </div>
      </div>
    </li>
  );
}


