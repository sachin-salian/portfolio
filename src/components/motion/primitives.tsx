"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

function subscribeCoarse(onChange: () => void) {
  const mq = window.matchMedia("(pointer: coarse)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function useCoarsePointer() {
  return useSyncExternalStore(
    subscribeCoarse,
    () => window.matchMedia("(pointer: coarse)").matches,
    () => false,
  );
}

export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  const reduce = useReducedMotion();
  const coarse = useCoarsePointer();
  // Mobile Chrome + IO quirks: never leave content stuck at opacity 0.
  const skipReveal = Boolean(reduce || coarse);

  return (
    <motion.div
      className={className}
      initial={skipReveal ? false : { opacity: 0, y }}
      whileInView={skipReveal ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({
  text,
  className,
  as: Tag = "p",
}: {
  text: string;
  className?: string;
  as?: "p" | "h1" | "h2" | "h3" | "span";
}) {
  const reduce = useReducedMotion();
  const coarse = useCoarsePointer();
  const skipReveal = Boolean(reduce || coarse);
  const words = text.split(" ");
  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.3em]"
          initial={skipReveal ? false : { opacity: 0, y: "0.55em" }}
          whileInView={skipReveal ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -5% 0px" }}
          transition={{ duration: 0.55, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}

export function Magnetic({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    };
    const onLeave = () => {
      el.style.transform = "translate(0, 0)";
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce]);

  return (
    <div ref={ref} className={className} style={{ transition: "transform 0.25s ease-out" }}>
      {children}
    </div>
  );
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y =
        (window as Window & { __lenis?: { scroll: number } }).__lenis?.scroll ?? window.scrollY;
      setProgress(max > 0 ? y / max : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />;
}
