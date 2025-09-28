"use client";

import PrinciplesSpotlight from "@/components/sections/PrinciplesSpotlight";
import Link from "next/link";

export default function PrinciplesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="max-w-[1280px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
        <Link href="/" className="text-sm underline underline-offset-4">Back</Link>
        <span className="text-sm tracking-[0.18em] uppercase">Suprise</span>
      </header>
      <PrinciplesSpotlight />
    </div>
  );
}


