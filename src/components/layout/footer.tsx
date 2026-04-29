import { brand, footer } from "@/lib/content";
import { Mail, Phone, MapPin, Heart } from "@/lib/icons";

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
