"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="relative py-24 md:py-32">
      {/* Subtle glow behind the section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(139,92,246,0.08) 0%, transparent 60%)",
        }}
      />
      <Container className="relative">
        <div className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#ff2d8f]/30 bg-[#ff2d8f]/[0.06] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#ff6bb0]">
                <span className="h-1 w-1 rounded-full bg-[#ff2d8f]" />
                Kontakt
              </span>
              <h2 className="mt-4 text-4xl md:text-section-h font-bold tracking-[-1.2px] text-white">
                Lass uns über dein{" "}
                <span className="bg-gradient-to-r from-[#ff2d8f] via-[#ff5fa2] to-[#8b5cf6] bg-clip-text text-transparent">
                  Projekt sprechen.
                </span>
              </h2>
              <p className="mt-6 text-lg text-white/60 leading-[1.5]">
                Beschreibe kurz dein Vorhaben. Wir melden uns innerhalb von 24 Stunden mit
                ersten Gedanken und einem Vorschlag für das nächste Gespräch.
              </p>

              <ul className="mt-10 space-y-4 text-sm">
                <li className="flex items-center gap-3 text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff2d8f]" />
                  Antwort innerhalb von 24 Stunden
                </li>
                <li className="flex items-center gap-3 text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff2d8f]" />
                  Kostenlos & unverbindlich
                </li>
                <li className="flex items-center gap-3 text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff2d8f]" />
                  Festpreisangebot vor Projektstart
                </li>
              </ul>

              <p className="mt-10 text-sm text-white/40">
                Lieber direkt?{" "}
                <a href="mailto:hallo@spstudio.de" className="text-[#ff6bb0] hover:text-[#ff2d8f] transition-colors duration-300">
                  hallo@spstudio.de
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl border border-white/[0.10] bg-white/[0.04] p-8 backdrop-blur-md"
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.25)",
              }}
            >
              <div className="grid gap-5">
                <Field label="Name" id="name" type="text" required />
                <Field label="E-Mail" id="email" type="email" required />
                <Field label="Unternehmen (optional)" id="company" type="text" />
                <div>
                  <label htmlFor="message" className="text-sm text-white/40">
                    Dein Projekt
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="mt-2 block w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/25 focus:border-[#ff2d8f]/40 focus:outline-none focus:shadow-[0_0_0_3px_rgba(255,45,143,0.12)] resize-none transition-all duration-300 backdrop-blur-sm"
                    placeholder="Worum geht's? (Branche, Ziel, Zeitraum)"
                  />
                </div>

                <Button type="submit" className="mt-2 w-full">
                  {sent ? "Danke — wir melden uns bald." : "Anfrage senden"}
                </Button>
                <p className="text-xs text-white/25">
                  Mit dem Absenden stimmst du unserer Datenschutzerklärung zu.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

interface FieldProps {
  label: string;
  id: string;
  type: string;
  required?: boolean;
}

function Field({ label, id, type, required }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm text-white/40">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="mt-2 block w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/25 focus:border-[#ff2d8f]/40 focus:outline-none focus:shadow-[0_0_0_3px_rgba(255,45,143,0.12)] transition-all duration-300 backdrop-blur-sm"
      />
    </div>
  );
}
