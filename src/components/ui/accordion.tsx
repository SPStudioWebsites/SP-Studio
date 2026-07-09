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
              "group rounded-2xl border bg-white transition-colors duration-300",
              isOpen
                ? "border-[rgba(30,94,255,0.25)]"
                : "border-border hover:border-[rgba(20,24,31,0.16)]"
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
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-[#faf9f6] transition-all duration-300",
                  isOpen && "border-[#1e5eff]/40 bg-[rgba(30,94,255,0.08)] text-[#1e5eff] rotate-180"
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
              className={cn("accordion-panel", isOpen && "accordion-panel-open")}
            >
              <div className="accordion-content">
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
