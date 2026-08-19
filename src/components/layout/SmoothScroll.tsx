"use client";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Kept for SiteShell API compatibility; Lenis is intentionally unused. */
  enabled?: boolean;
};

/**
 * Native scrolling only. Lenis previously left Motion whileInView sections
 * stuck at opacity: 0 on mobile Chrome.
 */
export default function SmoothScroll({ children }: Props) {
  return <>{children}</>;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth" });
}
