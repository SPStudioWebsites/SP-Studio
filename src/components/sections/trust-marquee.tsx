import { trustPills } from "@/lib/content";
import { Marquee } from "@/components/ui/marquee";
import { Star } from "@/lib/icons";

export function TrustMarquee() {
  return (
    <section
      aria-label="Vertrauen"
      className="relative border-y border-white/[0.05] bg-[#070708]/40 py-10 backdrop-blur-sm"
    >
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Beispiel-Branchen aus der Region
      </p>
      <div className="mask-fade-x">
        <Marquee className="[--duration:50s] [--gap:1rem] py-2">
          {trustPills.map((p) => (
            <Pill key={p}>{p}</Pill>
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:60s] [--gap:1rem] py-2">
          {[...trustPills].reverse().map((p) => (
            <Pill key={p + "-rev"}>{p}</Pill>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function Pill({ children }: { children: string }) {
  return (
    <span className="flex shrink-0 items-center gap-2 rounded-full glass-pill px-5 py-2 text-sm font-medium text-foreground/85">
      <Star className="h-3 w-3 fill-pink text-pink" aria-hidden />
      {children}
    </span>
  );
}
