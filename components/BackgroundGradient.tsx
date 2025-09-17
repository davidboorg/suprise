"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export default function BackgroundGradient() {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      el.style.animation = "none";
      return;
    }
  }, [reduced]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[-2]"
    >
      <div className="absolute inset-0 opacity-[0.35]">
        <div className="absolute -inset-[20%] blur-3xl rounded-full bg-[radial-gradient(100%_100%_at_20%_0%,#B3FFCB_0%,transparent_55%),radial-gradient(100%_140%_at_100%_60%,#F7F5F0_0%,transparent_60%),radial-gradient(140%_120%_at_0%_100%,#7A7A7A_0%,transparent_65%)] animate-[drift_18s_ease-in-out_infinite_alternate]" />
      </div>
      <style jsx global>{`
        @keyframes drift {
          0% { transform: translate3d(-2%, -1%, 0) scale(1.05); }
          50% { transform: translate3d(2%, 1%, 0) scale(1.08); }
          100% { transform: translate3d(-1%, 0%, 0) scale(1.04); }
        }
      `}</style>
    </div>
  );
}


