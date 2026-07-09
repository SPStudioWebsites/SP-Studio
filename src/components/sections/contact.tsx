"use client";

import { contact, CTA_LABEL } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { ShinyButton } from "@/components/ui/shiny-button";
import {
  ArrowRight,
  Loader2,
  AlertCircle,
  Phone,
} from "@/lib/icons";
import { brand } from "@/lib/content";
import { useActionState, useState } from "react";
import Image from "next/image";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { cn } from "@/lib/utils";

const initialState: ContactState = { ok: false };

/**
 * Sektion 15 — Abschluss-CTA + Footer-Auftakt (Kern, GROSS). Als dunkle,
 * immersive Sektion gebaut: letzter starker Moment der Seite, spiegelt den
 * Methode-Block und schließt den Rhythmus hell→dunkel. Kanonischer CTA.
 */
export function ContactSection() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const [fields, setFields] = useState({ name: "", company: "", email: "", phone: "", branche: "", message: "" });
  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields(f => ({ ...f, [k]: e.target.value }));

  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-h"
      className="section-dark dark-grid relative overflow-hidden py-24 md:py-32"
    >
      <div className="dark-orb left-[-6%] top-0 h-[420px] w-[420px] bg-[rgba(30,94,255,0.28)]" aria-hidden />
      <div className="dark-orb bottom-[-12%] right-[-6%] h-[460px] w-[460px] bg-[rgba(79,70,229,0.26)]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5b8bff] shadow-[0_0_8px_rgba(91,139,255,0.8)] animate-pulse-soft" />
              {contact.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="kontakt-h"
              className="mt-6 font-display text-4xl font-bold leading-[1.04] tracking-tight text-white md:text-6xl text-balance"
            >
              Lass uns reden.{" "}
              <em className="not-italic bg-gradient-to-r from-[#5b8bff] to-[#a78bfa] bg-clip-text text-transparent">
                Kostenlos.
              </em>{" "}
              Unverbindlich.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/65 md:text-lg text-pretty">
              {contact.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-14 lg:items-start mx-auto max-w-6xl">
          {/* Left: photo + personal text + phone CTA */}
          <Reveal delay={0.2}>
            <div className="flex flex-col gap-6">
              <div className="relative hidden lg:block w-full overflow-hidden rounded-3xl border border-white/12" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/Über-Mich.jpeg"
                  alt="Simon Pöske, Inhaber Schnell-Sichtbar.de"
                  fill
                  className="object-cover object-top"
                  sizes="380px"
                  quality={85}
                />
              </div>

              <div className="flex lg:hidden items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/15">
                  <Image
                    src="/Über-Mich.jpeg"
                    alt="Simon Pöske"
                    fill
                    className="object-cover object-top"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm leading-snug">Du schreibst direkt mit mir.</p>
                  <p className="mt-0.5 text-xs text-white/55">Kein Callcenter. Ich melde mich innerhalb 24h.</p>
                </div>
              </div>

              <div className="hidden lg:block">
                <p className="font-semibold text-white text-lg leading-snug">
                  Du schreibst direkt mit mir.
                </p>
                <p className="mt-1.5 text-sm text-white/60 leading-relaxed">
                  Kein Callcenter, kein Team. Ich persönlich melde mich innerhalb von 24 Stunden bei dir.
                </p>
              </div>

              <a
                href={`tel:${brand.phone}`}
                className="inline-flex h-11 w-fit items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 text-sm font-medium text-white/90 transition-colors hover:border-[rgba(126,166,255,0.5)] hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-[#7ea6ff]" />
                <span className="font-semibold text-white">Lieber anrufen?</span>
              </a>
            </div>
          </Reveal>

          {/* Right: form */}
          <div>
            <Reveal delay={0.15}>
              <div className="dark-card relative overflow-hidden rounded-3xl p-5 md:p-8 lg:p-10">
                {state.ok ? (
                  <SuccessPanel message={state.message} />
                ) : (
                  <form action={formAction} className="grid gap-5" noValidate>
                    {state.message && !state.ok && (
                      <div
                        role="alert"
                        className="flex items-center gap-2 rounded-2xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                      >
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        {state.message}
                      </div>
                    )}
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field
                        name="name"
                        label="Dein Name"
                        autoComplete="name"
                        error={state.errors?.name}
                        required
                        value={fields.name}
                        onChange={set("name")}
                      />
                      <Field
                        name="company"
                        label="Unternehmen"
                        autoComplete="organization"
                        value={fields.company}
                        onChange={set("company")}
                      />
                      <Field
                        name="email"
                        type="email"
                        label="E-Mail"
                        autoComplete="email"
                        error={state.errors?.email}
                        required
                        value={fields.email}
                        onChange={set("email")}
                      />
                      <Field
                        name="phone"
                        type="tel"
                        label="Telefon (optional)"
                        autoComplete="tel"
                        value={fields.phone}
                        onChange={set("phone")}
                      />
                    </div>
                    <SelectField
                      name="branche"
                      label="Branche"
                      options={contact.branchen as unknown as string[]}
                      value={fields.branche}
                      onChange={set("branche")}
                    />
                    <TextareaField
                      name="message"
                      label="Worum geht's?"
                      error={state.errors?.message}
                      required
                      value={fields.message}
                      onChange={set("message")}
                    />
                    <label className="mt-1 flex items-start gap-3 text-xs text-white/60">
                      <input
                        type="checkbox"
                        name="privacy"
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 accent-[#1e5eff]"
                        required
                      />
                      <span>
                        {contact.privacy}{" "}
                        <a href="/datenschutz" className="underline underline-offset-2 hover:text-white">
                          Datenschutz
                        </a>
                        .
                      </span>
                    </label>
                    {state.errors?.privacy && (
                      <p className="-mt-3 text-xs text-red-300">{state.errors.privacy}</p>
                    )}
                    <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 0, height: 0, overflow: "hidden" }}>
                      <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                    </div>
                    <div className="mt-3 flex">
                      <ShinyButton type="submit" disabled={pending} size="md" className="w-full justify-center sm:w-auto sm:ml-auto">
                        {pending ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin-slow" />
                            Senden …
                          </>
                        ) : (
                          <>
                            {CTA_LABEL}
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </ShinyButton>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessPanel({ message }: { message?: string }) {
  return (
    <div className="flex flex-col items-center py-12 text-center">
      <div className="relative mb-6 h-20 w-20 overflow-hidden rounded-full border border-white/15">
        <Image
          src="/simon-danke.jpg"
          alt="Simon — Danke für deine Anfrage!"
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <h3 className="font-display text-3xl font-bold tracking-tight text-white">
        Danke! Anfrage angekommen.
      </h3>
      <p className="mt-3 max-w-sm text-sm text-white/60 text-pretty">
        {message ?? "Ich melde mich innerhalb von 24 Stunden persönlich bei dir."}
      </p>
    </div>
  );
}

const inputBase =
  "w-full rounded-2xl border bg-white/5 text-sm text-white placeholder:text-white/35 transition-colors duration-200 focus:bg-white/10 focus:outline-none";

function Field({
  name, label, type = "text", required, autoComplete, error, value, onChange,
}: {
  name: string; label: string; type?: string; required?: boolean;
  autoComplete?: string; error?: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="group relative block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-white/55">
        {label} {required && <span className="text-[#7ea6ff]">*</span>}
      </span>
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-err` : undefined}
        className={cn(
          inputBase,
          "h-12 px-4",
          error
            ? "border-red-400/50 focus:border-red-400"
            : "border-white/10 hover:border-white/20 focus:border-[#7ea6ff]/60"
        )}
      />
      {error && (
        <span id={`${name}-err`} className="mt-1.5 block text-xs text-red-300">
          {error}
        </span>
      )}
    </label>
  );
}

function TextareaField({
  name, label, required, error, value, onChange,
}: {
  name: string; label: string; required?: boolean; error?: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-white/55">
        {label} {required && <span className="text-[#7ea6ff]">*</span>}
      </span>
      <textarea
        name={name}
        rows={4}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-err` : undefined}
        className={cn(
          inputBase,
          "resize-none px-4 py-3",
          error
            ? "border-red-400/50 focus:border-red-400"
            : "border-white/10 hover:border-white/20 focus:border-[#7ea6ff]/60"
        )}
        placeholder="Erzähl mir kurz von deinem Projekt. Ich höre zu."
      />
      {error && (
        <span id={`${name}-err`} className="mt-1.5 block text-xs text-red-300">
          {error}
        </span>
      )}
    </label>
  );
}

function SelectField({
  name, label, options, value, onChange,
}: {
  name: string; label: string; options: string[];
  value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-white/55">
        {label}
      </span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={cn(inputBase, "h-12 px-4 border-white/10 hover:border-white/20 focus:border-[#7ea6ff]/60 [&>option]:bg-[#0f1420] [&>option]:text-white")}
      >
        <option value="" disabled>Bitte wählen …</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
