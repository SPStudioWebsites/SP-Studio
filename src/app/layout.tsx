import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/effects/lenis-provider";
import { MobileCtaBar } from "@/components/ui/mobile-cta-bar";
import { ConsentManagerClient } from "@/components/analytics/consent-manager-client";
import { Analytics } from "@vercel/analytics/next";

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

const instrument = Playfair_Display({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://schnell-sichtbar.de"),
  title: {
    default: "Schnell-Sichtbar.de | Webdesign für Handwerker in Franken",
    template: "%s · Schnell-Sichtbar.de",
  },
  description:
    "Webdesign Haßfurt & Region Haßberge – Webseiten für Handwerker, Frisöre & Restaurants. Schnell online, lokal gefunden. Jetzt kostenlos beraten lassen.",
  keywords: [
    "Webagentur Haßberge",
    "Webdesign Haßfurt",
    "Webseite für Restaurant",
    "Local SEO Unterfranken",
    "Webdesign Ebern",
    "Webdesign Hofheim",
  ],
  authors: [{ name: "Schnell-Sichtbar.de" }],
  icons: {
    icon: [
      { url: "/Favicons/favicon.ico" },
      { url: "/Favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/Favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/Favicons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/Favicons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/Favicons/apple-touch-icon.png", sizes: "180x180" },
  },
  openGraph: {
    title: "Schnell-Sichtbar.de | Webdesign für Handwerker in Franken",
    description:
      "Webdesign Haßfurt & Region Haßberge – Webseiten für Handwerker, Frisöre & Restaurants. Schnell online, lokal gefunden. Jetzt kostenlos beraten lassen.",
    type: "website",
    locale: "de_DE",
    siteName: "Schnell-Sichtbar.de",
    images: [
      {
        url: "/laptop-hero-transparent.png",
        width: 2752,
        height: 1536,
        alt: "Schnell-Sichtbar.de – Webdesign für lokale Unternehmen in Franken",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schnell-Sichtbar.de | Webdesign für Handwerker in Franken",
    description:
      "Webdesign Haßfurt & Region Haßberge – Webseiten für Handwerker, Frisöre & Restaurants. Schnell online, lokal gefunden.",
    images: ["/laptop-hero-transparent.png"],
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
        <MobileCtaBar />
        <ConsentManagerClient />
        <Analytics />
      </body>
    </html>
  );
}
