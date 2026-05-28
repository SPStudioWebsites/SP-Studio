import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

type RevealTag = keyof typeof tags;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as: Tag = "div",
  amount = 0.2,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: RevealTag;
  amount?: number;
  once?: boolean;
}) {
  const Comp = tags[Tag] as ElementType;

  return (
    <Comp
      className={cn(
        "reveal-on-scroll",
        yClass(y),
        delayClass(delay),
        !once && "reveal-repeat",
        amount !== 0.2 && amountClass(amount),
        className
      )}
    >
      {children}
    </Comp>
  );
}

const tags = {
  div: "div",
  section: "section",
  article: "article",
  span: "span",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p: "p",
  li: "li",
  ul: "ul",
} as const;

export function RevealStagger({
  children,
  className,
  delay = 0,
  staggerChildren = 0.08,
  amount = 0.2,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  amount?: number;
  once?: boolean;
}) {
  return (
    <div
      className={cn(
        "reveal-stagger",
        delayClass(delay),
        staggerClass(staggerChildren),
        !once && "reveal-repeat",
        amount !== 0.2 && amountClass(amount),
        className
      )}
    >
      {children}
    </div>
  );
}

export function RevealItem({
  children,
  className,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <div
      className={cn("reveal-item", yClass(y), className)}
    >
      {children}
    </div>
  );
}

function delayClass(delay: number) {
  if (delay === 0) return undefined;
  const key = Math.round(delay * 1000);
  return `reveal-delay-${key}`;
}

function staggerClass(stagger: number) {
  if (stagger === 0.08) return undefined;
  const key = Math.round(stagger * 1000);
  return `reveal-stagger-${key}`;
}

function yClass(y: number) {
  if (y === 24) return undefined;
  return `reveal-y-${y}`;
}

function amountClass(amount: number) {
  return `reveal-amount-${Math.round(amount * 100)}`;
}
