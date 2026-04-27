import { brand, footer } from "@/lib/content";
import { Mail, Phone, MapPin, Heart } from "@/lib/icons";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6 1.12 6 0 4.88 0 3.5S1.12 1 2.5 1c1.36 0 2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22zM8.34 8h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.56v-6.6c0-1.57-.03-3.6-2.2-3.6s-2.54 1.72-2.54 3.49V22H8.34z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#070708] pt-20 pb-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,45,143,0.45) 30%, rgba(139,92,246,0.45) 70%, transparent 100%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="inline-flex items-center gap-2">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink to-violet">
                <span className="absolute inset-[2px] rounded-full bg-[#070708]" />
                <span className="relative font-display text-base font-bold text-gradient">S</span>
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                {brand.short}<span className="text-pink">.de</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {footer.claim}
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted">
              <a href={`mailto:${brand.email}`} className="flex items-center gap-3 hover:text-foreground">
                <Mail className="h-4 w-4 text-pink" />
                {brand.email}
              </a>
              <a href={`tel:${brand.phone}`} className="flex items-center gap-3 hover:text-foreground">
                <Phone className="h-4 w-4 text-pink" />
                {brand.phoneDisplay}
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-pink" />
                {brand.address.zip} {brand.address.city}
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Sitemap
            </h3>
            <ul className="space-y-3 text-sm">
              {footer.sitemap.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-foreground/80 transition-colors hover:text-pink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Rechtliches
            </h3>
            <ul className="space-y-3 text-sm">
              {footer.legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-foreground/80 transition-colors hover:text-pink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Folgen
            </h3>
            <div className="flex gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-foreground/80 transition-all hover:border-pink/40 hover:text-pink"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-foreground/80 transition-all hover:border-pink/40 hover:text-pink"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-muted md:flex-row md:items-center">
          <p>© 2026 {brand.name} · Alle Rechte vorbehalten.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="h-3 w-3 fill-pink text-pink" aria-hidden /> in {brand.address.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
