"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { prefersReducedMotion } from "@/lib/motion";

type Props = {
  children: React.ReactNode;
  /** Wait until the boot loader finishes so Lenis measures full document height */
  enabled?: boolean;
};

export default function SmoothScroll({ children, enabled = true }: Props) {
  useEffect(() => {
    if (!enabled) return;
    if (prefersReducedMotion()) return;
    // Native touch scrolling is more reliable on mobile Chrome; Lenis can
    // desync IntersectionObserver and leave scroll-reveal sections invisible.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Mac trackpads emit wheel events — Lenis must see full document height.
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.0,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      anchors: true,
    });

    // Expose for nav jump helpers
    (window as Window & { __lenis?: Lenis }).__lenis = lenis;

    const onResize = () => lenis.resize();
    window.addEventListener("resize", onResize);
    // Images / fonts can change layout after first paint
    const t1 = window.setTimeout(onResize, 100);
    const t2 = window.setTimeout(onResize, 600);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("resize", onResize);
      delete (window as Window & { __lenis?: Lenis }).__lenis;
      lenis.destroy();
    };
  }, [enabled]);

  return <>{children}</>;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (window as Window & { __lenis?: Lenis }).__lenis;
  if (lenis) {
    lenis.scrollTo(el, { offset: -8 });
    return;
  }
  el.scrollIntoView({ behavior: "smooth" });
}
