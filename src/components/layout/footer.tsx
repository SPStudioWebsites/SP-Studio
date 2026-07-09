import { brand, footer } from "@/lib/content";
import { getRegionLinks } from "@/lib/region-links";
import { Mail, Phone, MapPin, Heart } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="inline-flex items-center gap-2">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-[9px] font-display text-[14px] font-extrabold text-white"
                style={{ background: "linear-gradient(135deg,#1e5eff,#4f46e5)" }}
                aria-hidden
              >
                S
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
                Schnell<span className="text-[#1e5eff]">-</span>Sichtbar
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {footer.claim}
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted">
              <a href={`mailto:${brand.email}`} className="flex items-center gap-3 hover:text-foreground">
                <Mail className="h-4 w-4 text-[#1e5eff]" />
                {brand.email}
              </a>
              <a href={`tel:${brand.phone}`} className="flex items-center gap-3 hover:text-foreground">
                <Phone className="h-4 w-4 text-[#1e5eff]" />
                {brand.phoneDisplay}
              </a>
              <a
                href="https://maps.app.goo.gl/usAdLbggi5VHqWrR7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-foreground"
              >
                <MapPin className="h-4 w-4 text-[#1e5eff]" />
                {brand.address.zip} {brand.address.city}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Sitemap
            </h3>
            <ul className="space-y-3 text-sm">
              {footer.sitemap.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-foreground/80 transition-colors hover:text-[#1e5eff]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Regionen
            </h3>
            <ul className="space-y-3 text-sm">
              {getRegionLinks().map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-foreground/80 transition-colors hover:text-[#1e5eff]">
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
                  <a href={l.href} className="text-foreground/80 transition-colors hover:text-[#1e5eff]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted md:flex-row md:items-center">
          <p>© 2026 {brand.name} · Alle Rechte vorbehalten.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="h-3 w-3 fill-[#1e5eff] text-[#1e5eff]" aria-hidden /> in {brand.address.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
