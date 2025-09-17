"use client";

import { useEffect } from "react";

const SEQ = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function KonamiGate() {
  useEffect(() => {
    let idx = 0;
    const grant = () => {
      try {
        localStorage.setItem("labAccess", "1");
      } catch {}
    };

    const onKey = (e: KeyboardEvent) => {
      const expected = SEQ[idx];
      if (e.key === expected) {
        idx += 1;
        if (idx === SEQ.length) {
          grant();
          idx = 0;
        }
      } else {
        idx = 0;
      }
    };

    const url = new URL(window.location.href);
    if (url.searchParams.get("access") === "lab") grant();

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return null;
}


