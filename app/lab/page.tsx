"use client";

import { useEffect, useState } from "react";

export default function LabPage() {
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    try {
      setAllowed(localStorage.getItem("labAccess") === "1");
    } catch {
      setAllowed(false);
    }
  }, []);

  if (!allowed) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24">
        <div className="rounded-xl border border-base-800/20 p-6">
          <p className="text-sm">Access denied. Unlock via Konami code or ?access=lab.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 space-y-6">
      <div className="rounded-xl border border-base-800/20 bg-base-100/40 p-4 text-sm">
        <strong>Private experiments.</strong> Do not distribute.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-base-800/20 p-6 min-h-[200px]">Shader study placeholder</div>
        <div className="rounded-xl border border-base-800/20 p-6 min-h-[200px]">Prototype reel placeholder</div>
      </div>
    </div>
  );
}


