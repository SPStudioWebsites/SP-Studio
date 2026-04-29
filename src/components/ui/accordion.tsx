"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
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
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
              aria-hidden={!isOpen}
            >
              <p className="px-5 pb-6 pr-14 text-sm leading-relaxed text-muted md:px-7 md:pb-7 md:text-[15px]">
                {it.a}
              </p>
            </motion.div>
          </li>
        );
      })}
    </ul>
  );
}
