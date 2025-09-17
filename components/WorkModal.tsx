"use client";

import { useEffect, useRef } from "react";

export default function WorkModal({
  open,
  onClose,
  caption,
  outcomes,
}: {
  open: boolean;
  onClose: () => void;
  caption: string;
  outcomes: readonly string[];
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const onFocus = (e: FocusEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) {
        // keep focus within dialog
        e.stopPropagation();
        ref.current.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("focusin", onFocus);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("focusin", onFocus);
      prev?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={caption}
      className="fixed inset-0 z-50 grid place-items-center p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div
        ref={ref}
        tabIndex={-1}
        className="relative max-w-lg w-full rounded-xl border border-base-800/30 bg-base-100/90 backdrop-blur p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="font-sans text-lg md:text-xl">{caption}</h3>
        <ul className="mt-4 list-disc pl-5 text-ink">
          {outcomes.map((o, i) => (
            <li key={i} className="text-sm md:text-base">{o}</li>
          ))}
        </ul>
        <div className="mt-6 flex justify-end">
          <button
            className="px-4 py-2 rounded-full border border-base-800/20 hover:border-base-800/40 text-sm"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}


