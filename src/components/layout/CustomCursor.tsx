"use client";

import { useEffect, useRef, useState } from "react";
import { isFinePointer, prefersReducedMotion } from "@/lib/motion";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion() || !isFinePointer()) return;
    setEnabled(true);

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      if (label.current) label.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -140%)`;
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e: Event) => {
      const t = e.target as HTMLElement | null;
      const interactive = t?.closest("a, button, [data-cursor]");
      ring.current?.classList.toggle("is-active", Boolean(interactive));
      const cursor = interactive?.getAttribute("data-cursor");
      if (label.current) {
        if (cursor) {
          label.current.textContent = cursor;
          label.current.classList.add("is-on");
        } else {
          label.current.classList.remove("is-on");
        }
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dot} className="cursor-dot" aria-hidden />
      <div ref={ring} className="cursor-ring" aria-hidden />
      <div ref={label} className="cursor-label" aria-hidden />
    </>
  );
}
