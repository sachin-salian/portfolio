import { focusAreas } from "@/content/portfolio";
import { Reveal } from "@/components/motion/primitives";

export default function Focus() {
  return (
    <section id="focus" className="section" aria-label="Focus areas">
      <div className="section-inner">
        <Reveal>
          <p className="kicker">Focus</p>
          <h2 className="headline">Where I go deep.</h2>
          <p className="lede">
            Domains — not a project grid. The shape of work a product engineer with strong mobile
            depth actually lives in.
          </p>
        </Reveal>

        <div className="work-list" style={{ marginTop: "2.5rem" }}>
          {focusAreas.map((area, i) => (
            <Reveal key={area.id} delay={i * 0.05}>
              <article className="work-item" style={{ cursor: "default" }}>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-[72px_1.2fr_1.3fr] md:gap-6 md:items-start">
                  <span className="idx">{area.index}</span>
                  <div>
                    <h3>{area.title}</h3>
                    <p className="thesis font-serif italic">{area.thesis}</p>
                  </div>
                  <div>
                    <p className="text-[var(--text-dim)]">{area.body}</p>
                    <div className="chip-row" aria-label="Related skills">
                      {area.topics.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
