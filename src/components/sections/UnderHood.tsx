"use client";

import { useState } from "react";
import { underHood } from "@/content/portfolio";
import { Reveal } from "@/components/motion/primitives";
import { ChevronDown } from "lucide-react";

export default function UnderHood() {
  const [open, setOpen] = useState<string | null>(underHood[0]?.id ?? null);

  return (
    <section id="systems" className="section" aria-label="Technical practice">
      <div className="section-inner">
        <Reveal>
          <p className="kicker">Practice</p>
          <h2 className="headline">Technical depth.</h2>
          <p className="lede">
            The topics a senior React / React Native engineer is expected to reason about — open any
            for a short take.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-2 md:grid-cols-2">
          {underHood.map((item) => {
            const isOpen = open === item.id;
            return (
              <div key={item.id} className="hood-item">
                <button
                  type="button"
                  className="focus-ring"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : item.id)}
                >
                  {item.title}
                  <ChevronDown
                    size={18}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : undefined,
                      transition: "transform 0.25s ease",
                      color: "var(--accent)",
                    }}
                  />
                </button>
                {isOpen ? <p className="body">{item.body}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
