import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function BrowserFrame({
  children,
  className,
  url = "schnell-sichtbar.de",
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  url?: string;
  tone?: "default" | "warm" | "italian" | "wood" | "soft";
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0a0a0c] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85)]",
        className
      )}
    >
      {/* Chrome bar */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.025] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        <div className="ml-3 flex h-6 flex-1 items-center justify-center rounded-md bg-white/[0.04] px-3 text-[10px] font-mono tracking-wide text-muted">
          {url}
        </div>
      </div>
      <div className={cn("relative", toneBg[tone])}>{children}</div>
    </div>
  );
}

const toneBg: Record<string, string> = {
  default:
    "bg-gradient-to-br from-[#0f0f12] via-[#16161c] to-[#0a0a0a]",
  warm:
    "bg-gradient-to-br from-[#1a0a14] via-[#0f0f12] to-[#150814]",
  italian:
    "bg-gradient-to-br from-[#0d0a05] via-[#120c08] to-[#0a0808]",
  wood:
    "bg-gradient-to-br from-[#100a06] via-[#15100a] to-[#0a0707]",
  soft:
    "bg-gradient-to-br from-[#0c0d12] via-[#10101a] to-[#0a0a14]",
};
