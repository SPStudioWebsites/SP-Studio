"use client";

import { contact, brand } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { GlassCard } from "@/components/ui/glass-card";
import { ShinyButton } from "@/components/ui/shiny-button";
import {
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Loader2,
  AlertCircle,
} from "@/lib/icons";
import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const initialState: ContactState = { ok: false };

export function ContactSection() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-h"
      className="relative overflow-hidden py-28 md:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 h-96 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(255,45,143,0.12),transparent)]"
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Pill tone="pink">{contact.eyebrow}</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="kontakt-h"
              className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl text-balance"
            >
              Lass uns reden.{" "}
              <em className="font-serif italic font-normal text-gradient">Kostenlos.</em>{" "}
              Unverbindlich.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg text-pretty">
              {contact.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <Reveal delay={0.15} className="lg:col-span-7">
            <GlassCard variant="strong" className="relative overflow-hidden p-7 md:p-10">
              <AnimatePresence mode="wait">
                {state.ok ? (
                  <SuccessPanel key="ok" message={state.message} />
                ) : (
                  <motion.form
                    key="form"
                    action={formAction}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid gap-5"
                    noValidate
                  >
                    {state.message && !state.ok && (
                      <div
                        role="alert"
                        className="flex items-center gap-2 rounded-2xl border border-red-500/30 bg-red-500/[0.08] px-4 py-3 text-sm text-red-200"
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
                      />
                      <Field
                        name="company"
                        label="Unternehmen"
                        autoComplete="organization"
                      />
                      <Field
                        name="email"
                        type="email"
                        label="E-Mail"
                        autoComplete="email"
                        error={state.errors?.email}
                        required
                      />
                      <Field
                        name="phone"
                        type="tel"
                        label="Telefon (optional)"
                        autoComplete="tel"
                      />
                    </div>
                    <SelectField
                      name="branche"
                      label="Branche"
                      options={contact.branchen as unknown as string[]}
                    />
                    <TextareaField
                      name="message"
                      label="Worum geht's?"
                      error={state.errors?.message}
                      required
                    />
                    <label className="mt-1 flex items-start gap-3 text-xs text-muted">
                      <input
                        type="checkbox"
                        name="privacy"
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/10 bg-white/[0.04] accent-pink"
                        required
                      />
                      <span>
                        {contact.privacy}{" "}
                        <a href="#" className="underline underline-offset-2 hover:text-foreground">
                          Datenschutz
                        </a>
                        .
                      </span>
                    </label>
                    {state.errors?.privacy && (
                      <p className="-mt-3 text-xs text-red-300">{state.errors.privacy}</p>
                    )}
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-xs text-muted">
                        Wir antworten innerhalb von 24 Stunden.
                      </p>
                      <ShinyButton type="submit" disabled={pending} size="md">
                        {pending ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin-slow" />
                            Senden …
                          </>
                        ) : (
                          <>
                            Anfrage senden
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </ShinyButton>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.25} className="lg:col-span-5">
            <GlassCard variant="default" className="flex h-full flex-col justify-between p-7 md:p-9">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  Direkt erreichbar
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Lieber telefonieren oder vorbeikommen? Geht auch.
                </p>

                <ul className="mt-7 space-y-5">
                  <ContactRow
                    icon={<Mail className="h-4 w-4" />}
                    label="E-Mail"
                    value={brand.email}
                    href={`mailto:${brand.email}`}
                  />
                  <ContactRow
                    icon={<Phone className="h-4 w-4" />}
                    label="Telefon"
                    value={brand.phoneDisplay}
                    href={`tel:${brand.phone}`}
                  />
                  <ContactRow
                    icon={<MapPin className="h-4 w-4" />}
                    label="Adresse"
                    value={`${brand.address.street}, ${brand.address.zip} ${brand.address.city}`}
                  />
                  <ContactRow
                    icon={<Clock className="h-4 w-4" />}
                    label="Sprechzeit"
                    value={brand.hours}
                  />
                </ul>
              </div>

              <div className="mt-10 rounded-2xl border border-pink/20 bg-pink/[0.06] p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-pink">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pink" />
                  </span>
                  Aktuell verfügbar
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                  Im April 2026 sind noch <strong>3 Slots</strong> für neue Projekte frei.
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SuccessPanel({ message }: { message?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center py-12 text-center"
    >
      <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-pink/20 ring-2 ring-pink/40">
        <CheckCircle2 className="h-8 w-8 text-pink" />
      </span>
      <h3 className="font-display text-3xl font-semibold tracking-tight">
        Danke! Anfrage angekommen.
      </h3>
      <p className="mt-3 max-w-sm text-sm text-muted text-pretty">
        {message ??
          "Wir melden uns innerhalb von 24 Stunden persönlich bei dir."}
      </p>
    </motion.div>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  autoComplete,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <label className="group relative block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
        {label} {required && <span className="text-pink">*</span>}
      </span>
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-err` : undefined}
        className={cn(
          "h-12 w-full rounded-2xl border bg-white/[0.025] px-4 text-sm text-foreground placeholder:text-muted/50 transition-colors duration-200 focus:bg-white/[0.04] focus:outline-none",
          error
            ? "border-red-400/50 focus:border-red-400/70"
            : "border-white/[0.08] hover:border-white/[0.16] focus:border-pink/60"
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
  name,
  label,
  required,
  error,
}: {
  name: string;
  label: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
        {label} {required && <span className="text-pink">*</span>}
      </span>
      <textarea
        name={name}
        rows={4}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-err` : undefined}
        className={cn(
          "w-full resize-none rounded-2xl border bg-white/[0.025] px-4 py-3 text-sm text-foreground placeholder:text-muted/50 transition-colors duration-200 focus:bg-white/[0.04] focus:outline-none",
          error
            ? "border-red-400/50 focus:border-red-400/70"
            : "border-white/[0.08] hover:border-white/[0.16] focus:border-pink/60"
        )}
        placeholder="Erzähl uns kurz von deinem Projekt — wir hören zu."
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
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="h-12 w-full rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 text-sm text-foreground transition-colors duration-200 hover:border-white/[0.16] focus:border-pink/60 focus:bg-white/[0.04] focus:outline-none"
      >
        <option value="" disabled>Bitte wählen …</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#0a0a0a]">{o}</option>
        ))}
      </select>
    </label>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <li className="group flex items-center gap-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-pink transition-colors group-hover:border-pink/30 group-hover:bg-pink/10">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
          {label}
        </span>
        <span className="text-sm text-foreground">{value}</span>
      </span>
    </li>
  );
  if (href) return <a href={href}>{Inner}</a>;
  return Inner;
}
