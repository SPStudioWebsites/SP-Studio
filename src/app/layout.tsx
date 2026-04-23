import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SP Studio — Webdesign & Entwicklung für kleine Unternehmen",
  description:
    "Wir gestalten moderne, schnelle Websites, die für kleine Unternehmen, lokale Betriebe und Kreative Kunden gewinnen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={sans.variable}>
      <body className="font-sans antialiased bg-[#0a0a0a] text-white">{children}</body>
    </html>
  );
}
