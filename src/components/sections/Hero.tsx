"use client";

import { useState } from "react";
import { hero, person } from "@/content/portfolio";
import { Magnetic } from "@/components/motion/primitives";
import { scrollToId } from "@/components/layout/SmoothScroll";

export default function Hero() {
  const [mode, setMode] = useState<(typeof hero.modes)[number]["id"]>("build");
  const active = hero.modes.find((m) => m.id === mode) ?? hero.modes[0];

  const jump = (id: string) => scrollToId(id);

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="hero-grid" aria-hidden />
      <div className="hero-inner">
        <div>
          <h1 className="hero-lines">
            <span>{hero.lines[0]}</span>
            <span>{hero.lines[1]}</span>
            <span className="serif">{hero.lines[2]}</span>
          </h1>
          <p className="hero-support">{hero.support}</p>
          <div className="hero-actions">
            <Magnetic>
              <button type="button" className="btn focus-ring" data-cursor="VIEW" onClick={() => jump("focus")}>
                Explore focus
              </button>
            </Magnetic>
            <Magnetic>
              <a className="btn ghost focus-ring" href={person.resume} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Magnetic>
          </div>
        </div>

        <aside className="hero-panel" aria-label="System status">
          <dl className="hero-status">
            {hero.status.map((row) => (
              <div key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
          <div className="hero-modes" role="tablist" aria-label="Focus modes">
            {hero.modes.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={mode === item.id}
                className={`focus-ring ${mode === item.id ? "is-on" : ""}`}
                onClick={() => {
                  setMode(item.id);
                  if (item.id === "build") jump("focus");
                  if (item.id === "explore") jump("systems");
                  if (item.id === "experience") jump("experience");
                  if (item.id === "systems") jump("principles");
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="hero-mode-hint">{active.hint}</p>
        </aside>
      </div>
    </section>
  );
}
