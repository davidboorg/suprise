"use client";

import LocaleToggle from "@/components/LocaleToggle";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="max-w-[1280px] mx-auto px-6 md:px-10 py-10 text-xs text-ink-dim flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between">
      <nav className="flex items-center gap-4">
        <Link href="/">{t.ui.navHome}</Link>
        <Link href="/lab">{t.ui.navLab}</Link>
      </nav>
      <div className="flex items-center gap-4">
        <LocaleToggle />
        <span>© {new Date().getFullYear()} Suprise — {t.ui.legal}</span>
      </div>
    </footer>
  );
}


