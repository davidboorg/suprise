import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import BackgroundGradient from "@/components/BackgroundGradient";
import KonamiGate from "@/components/KonamiGate";
import Footer from "@/components/Footer";
import NoiseCanvas from "@/components/NoiseCanvas";
import { I18nProvider } from "@/lib/i18n";

const spaceGrotesk = Space_Grotesk({
  weight: ["600", "700"],
  variable: "--font-ui",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["600", "700"],
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Suprise — Creative Tech & Venture Studio",
    template: "%s — Suprise",
  },
  description:
    "A creative tech & engineering studio building products, brands and ventures for the unexpected market.",
  openGraph: {
    title: "Suprise — Creative Tech & Venture Studio",
    description:
      "A creative tech & engineering studio building products, brands and ventures for the unexpected market.",
    url: "/",
    siteName: "Suprise",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Suprise" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suprise — Creative Tech & Venture Studio",
    description:
      "A creative tech & engineering studio building products, brands and ventures for the unexpected market.",
    images: ["/og.png"],
  },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
  authors: [{ name: "Suprise" }],
  applicationName: "Suprise",
  creator: "Suprise",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background text-foreground">
      <body
        className={`${spaceGrotesk.variable} ${playfair.variable} antialiased`}
      >
        <BackgroundGradient />
        <NoiseCanvas opacity={0.08} />
        <I18nProvider>
          {children}
          <Footer />
        </I18nProvider>
        <Analytics />
        <KonamiGate />
      </body>
    </html>
  );
}
