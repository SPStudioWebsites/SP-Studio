"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { ChevronDown } from "@/lib/icons";

export interface AccordionItem {
  q: string;
  a: string;
}

export function Accordion({
  items,
  className,
}: {
  items: readonly AccordionItem[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <li
            key={i}
            className={cn(
              "group rounded-2xl glass transition-colors duration-300",
              isOpen
                ? "border-white/[0.18] bg-white/[0.045]"
                : "hover:border-white/[0.14] hover:bg-white/[0.035]"
            )}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left md:px-7 md:py-6 cursor-pointer"
            >
              <span className="text-base font-medium text-foreground md:text-lg">
                {it.q}
              </span>
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300",
                  isOpen && "border-pink/50 bg-pink/10 text-pink rotate-180"
                )}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>

            {/*
              grid-template-rows: 0fr → 1fr avoids layout reflow on every frame.
              Browser compositor handles it without touching getBoundingClientRect.
              Supported: Chrome 107+, Safari 16+, Firefox 109+
            */}
            <div
              aria-hidden={!isOpen}
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 0.4s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <div
                style={{
                  minHeight: 0,
                  opacity: isOpen ? 1 : 0,
                  transition: "opacity 0.4s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <p className="px-5 pb-6 pr-14 text-sm leading-relaxed text-muted md:px-7 md:pb-7 md:text-[15px]">
                  {it.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
