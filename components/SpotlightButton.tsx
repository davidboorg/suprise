"use client";

import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

export default function SpotlightButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const reduced = useReducedMotion();

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={
        className ??
        "relative overflow-hidden rounded-full bg-foreground text-background"
      }
      onMouseMove={(e) => {
        if (reduced) return;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
      }}
      onMouseLeave={() => {
        const el = ref.current;
        if (!el) return;
        el.style.removeProperty("--mx");
        el.style.removeProperty("--my");
      }}
      style={{
        backgroundImage:
          "radial-gradient(120px 120px at var(--mx, -100px) var(--my, -100px), rgba(255,255,255,0.25), transparent 60%)",
        transition: "background-position 120ms ease-out, opacity 120ms ease-out",
      }}
    >
      <span className="relative z-10 block px-6 py-3">{children}</span>
    </button>
  );
}


