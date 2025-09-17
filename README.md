Suprise — Creative Tech & Venture Studio site

Stack
- Next.js App Router + TypeScript
- Tailwind CSS v4
- Framer Motion (Reveal)
- Space Grotesk + Playfair Display

Getting started
1. Install deps: `npm i`
2. Dev server: `npm run dev`
3. Visit: `http://localhost:3000`

Content & i18n
- All copy is in `content/copy.ts` with `en` and `sv` locales.
- Locale toggle lives in the footer; `I18nProvider` mounts in `app/page.tsx`.

SEO
- Metadata configured in `app/layout.tsx` (`metadataBase`, Open Graph, Twitter).
- `app/robots.ts` and `app/sitemap.ts` reference `NEXT_PUBLIC_SITE_URL`.

Analytics
- Hook in `lib/analytics.ts` and `components/Analytics.tsx` (no-op by default).

Interactions
- Gradient + animated grain (`BackgroundGradient`, `NoiseCanvas`) with reduced-motion support.
- Reveal on scroll (`components/Reveal`).
- Lab unlock via Konami code or `?access=lab`.

Routes
- `/` main single-page site
- `/lab` hidden experiments (unlocked when `labAccess` set)

A11y & performance
- Respects `prefers-reduced-motion`.
- Keyboard-accessible modal and visible focus states.

Editing
- Sections are in `components/sections/*`.
- Brand tokens in `app/globals.css`.

Deploy
- Set `NEXT_PUBLIC_SITE_URL` and update `metadataBase` to your domain.
