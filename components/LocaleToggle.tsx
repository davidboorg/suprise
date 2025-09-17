"use client";

import { useI18n } from "@/lib/i18n";

export default function LocaleToggle() {
  const { locale, setLocale } = useI18n();
  return (
    <button
      type="button"
      aria-label="Toggle locale"
      className="text-sm px-3 py-1 rounded-full border border-base-800/20 hover:border-base-800/40 transition-colors"
      onClick={() => setLocale(locale === "en" ? "sv" : "en")}
    >
      {locale.toUpperCase()}
    </button>
  );
}


