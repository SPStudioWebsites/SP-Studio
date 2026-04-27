import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/effects/lenis-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://schnell-sichtbar.de"),
  title: {
    default: "Schnell-Sichtbar.de — Webseiten für lokale Unternehmen in der Region Haßberge",
    template: "%s · Schnell-Sichtbar.de",
  },
  description:
    "Premium Webseiten für Frisöre, Restaurants, Handwerker und Studios in Haßfurt, Ebern, Hofheim und Umgebung. Schnell. Persönlich. Lokal.",
  keywords: [
    "Webagentur Haßberge",
    "Webdesign Haßfurt",
    "Webseite für Restaurant",
    "Local SEO Unterfranken",
    "Webdesign Ebern",
    "Webdesign Hofheim",
  ],
  authors: [{ name: "Schnell-Sichtbar.de" }],
  openGraph: {
    title: "Schnell-Sichtbar.de — Webseiten für lokale Unternehmen",
    description:
      "Premium Webseiten für KMUs in der Region Haßberge. Schnell. Persönlich. Lokal.",
    type: "website",
    locale: "de_DE",
    siteName: "Schnell-Sichtbar.de",
  },
  twitter: {
    card: "summary_large_image",
    title: "Schnell-Sichtbar.de",
    description: "Premium Webseiten für lokale Unternehmen in der Region Haßberge.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${bricolage.variable} ${instrument.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-pink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Zum Hauptinhalt springen
        </a>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
