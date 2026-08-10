import { stackGroups } from "@/content/portfolio";
import { Reveal } from "@/components/motion/primitives";

export default function Stack() {
  return (
    <section id="stack" className="section" aria-label="Engineering stack">
      <div className="section-inner">
        <Reveal>
          <p className="kicker">Stack</p>
          <h2 className="headline">How the system is equipped.</h2>
          <p className="lede">Grouped by capability — the way engineers actually think about tools.</p>
        </Reveal>
        <div className="stack-board">
          {stackGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.04}>
              <div className="stack-group">
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
