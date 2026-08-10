"use client";

import { useState } from "react";
import { experiences } from "@/content/portfolio";
import { Reveal } from "@/components/motion/primitives";

export default function Timeline() {
  const [active, setActive] = useState(experiences[0]?.id ?? "omio");
  const entry = experiences.find((e) => e.id === active) ?? experiences[0];

  return (
    <section id="experience" className="section" aria-label="Experience">
      <div className="section-inner">
        <Reveal>
          <p className="kicker">Experience</p>
          <h2 className="headline">Career as a changelog.</h2>
          <p className="lede">
            Select a release. Roles are honest to each company — Senior where it was held, Software
            Engineer at Omio.
          </p>
        </Reveal>

        <div className="timeline">
          <div className="timeline-rail" role="tablist" aria-label="Companies">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                type="button"
                role="tab"
                aria-selected={active === exp.id}
                className={`focus-ring ${active === exp.id ? "is-on" : ""}`}
                onClick={() => setActive(exp.id)}
              >
                <span className="y">{exp.year}</span>
                <span className="c">{exp.company}</span>
              </button>
            ))}
          </div>

          {entry ? (
            <article className="timeline-panel" role="tabpanel">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[var(--text-faint)]">
                {entry.duration} · {entry.domain}
              </p>
              <h3>{entry.company}</h3>
              <p className="mt-1 text-[var(--text-dim)]">{entry.role}</p>
              <p className="mt-4 text-[var(--text-dim)]">{entry.context}</p>

              {entry.metrics ? (
                <div className="metrics">
                  {entry.metrics.map((m) => (
                    <div key={m.label} title={m.note}>
                      <strong>{m.value}</strong>
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>
              ) : null}

              <ul className="detail-list">
                <li>
                  <strong>What I built</strong>
                  <ul className="mt-2 space-y-2">
                    {entry.built.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <strong>What changed</strong>
                  <ul className="mt-2 space-y-2">
                    {entry.changed.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </li>
              </ul>

              <div className="chip-row" aria-label="Technologies">
                {entry.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}
