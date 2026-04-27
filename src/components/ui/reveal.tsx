"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const reducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

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
  as?: keyof typeof tags;
  amount?: number;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const Comp = tags[Tag];
  const variants = reduce
    ? reducedVariants
    : { hidden: { opacity: 0, y }, visible: { opacity: 1, y: 0 } };

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </Comp>
  );
}

const tags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  span: motion.span,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  li: motion.li,
  ul: motion.ul,
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
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
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
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={
        reduce
          ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
          : { hidden: { opacity: 0, y }, visible: { opacity: 1, y: 0 } }
      }
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
