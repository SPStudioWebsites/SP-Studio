"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="py-24 md:py-32">
      <Container>
        <div className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <div>
              <span className="text-sm text-muted">Kontakt</span>
              <h2 className="mt-4 text-4xl md:text-section-h font-semibold tracking-[-1.2px]">
                Lass uns über dein Projekt sprechen.
              </h2>
              <p className="mt-6 text-lg text-muted leading-[1.5]">
                Beschreibe kurz dein Vorhaben. Wir melden uns innerhalb von 24 Stunden mit
                ersten Gedanken und einem Vorschlag für das nächste Gespräch.
              </p>

              <ul className="mt-10 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-charcoal-40" />
                  Antwort innerhalb von 24 Stunden
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-charcoal-40" />
                  Kostenlos & unverbindlich
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-charcoal-40" />
                  Festpreisangebot vor Projektstart
                </li>
              </ul>

              <p className="mt-10 text-sm text-muted">
                Lieber direkt?{" "}
                <a href="mailto:hallo@spstudio.de" className="underline">
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
              className="rounded-2xl border border-line bg-cream p-8"
            >
              <div className="grid gap-5">
                <Field label="Name" id="name" type="text" required />
                <Field label="E-Mail" id="email" type="email" required />
                <Field label="Unternehmen (optional)" id="company" type="text" />
                <div>
                  <label htmlFor="message" className="text-sm text-muted">
                    Dein Projekt
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="mt-2 block w-full rounded-md border border-line bg-cream px-4 py-3 text-charcoal placeholder:text-muted focus:border-charcoal-40 focus:outline-none focus:shadow-focus resize-none"
                    placeholder="Worum geht's? (Branche, Ziel, Zeitraum)"
                  />
                </div>

                <Button type="submit" className="mt-2 w-full">
                  {sent ? "Danke — wir melden uns bald." : "Anfrage senden"}
                </Button>
                <p className="text-xs text-muted">
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
      <label htmlFor={id} className="text-sm text-muted">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="mt-2 block w-full rounded-md border border-line bg-cream px-4 py-3 text-charcoal placeholder:text-muted focus:border-charcoal-40 focus:outline-none focus:shadow-focus"
      />
    </div>
  );
}
