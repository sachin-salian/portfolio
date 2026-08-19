"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

export default function Loader({ onDone }: { onDone: () => void }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = prefersReducedMotion();
    const t = window.setTimeout(
      () => {
        setDone(true);
        onDone();
      },
      reduce ? 40 : 420,
    );
    return () => window.clearTimeout(t);
  }, [onDone]);

  // Fully remove after fade so it cannot block paints on mobile Chrome.
  if (done) return null;

  return (
    <div className="loader" aria-hidden={false}>
      <p className="loader-mark">
        SACHIN <span style={{ color: "var(--accent)" }}>/ 01</span>
      </p>
      <p className="loader-meta">Booting experience</p>
      <div className="loader-bar">
        <span />
      </div>
    </div>
  );
}
