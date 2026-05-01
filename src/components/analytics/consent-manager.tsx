"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";

const GA_ID = "G-XXXXXXXXXX"; // ← eure GA-ID eintragen (z.B. G-ABC123DEF4)

export function ConsentManager() {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent") as "accepted" | "declined" | null;
    setConsent(stored);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setConsent("declined");
  }

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="lazyOnload"
          />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {consent === null && (
        <div className="fixed bottom-[72px] left-0 right-0 z-50 p-4 sm:bottom-0 md:p-6">
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-[#111] backdrop-blur-md p-5 shadow-2xl">
            <p className="text-sm text-muted leading-relaxed">
              Wir verwenden Cookies — technisch notwendige und (mit Ihrer Einwilligung) Google
              Analytics zur Reichweitenmessung. Mehr dazu in unserer{" "}
              <Link href="/datenschutz" className="text-pink underline underline-offset-2">
                Datenschutzerklärung
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={accept}
                className="rounded-full bg-pink px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={decline}
                className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                Nur notwendige
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
