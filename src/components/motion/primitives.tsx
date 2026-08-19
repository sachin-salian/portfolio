"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Kept for call-site compatibility; animation no longer delays paint. */
  delay?: number;
  y?: number;
};

/**
 * Always-visible section wrapper.
 * Motion whileInView previously left blocks at opacity: 0 on mobile Chrome
 * (empty black gaps with reserved height). No opacity hiding anymore.
 */
export function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
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
  return <Tag className={className}>{text}</Tag>;
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
      const y = window.scrollY;
      setProgress(max > 0 ? y / max : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />;
}
