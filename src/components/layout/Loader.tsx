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
      reduce ? 80 : 780,
    );
    return () => window.clearTimeout(t);
  }, [onDone]);

  return (
    <div className={`loader ${done ? "is-done" : ""}`} aria-hidden={done}>
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
