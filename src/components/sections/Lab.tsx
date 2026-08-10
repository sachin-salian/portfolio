import { lab } from "@/content/portfolio";
import { Reveal } from "@/components/motion/primitives";

export default function Lab() {
  return (
    <section id="lab" className="section" aria-label="Lab">
      <div className="section-inner">
        <Reveal>
          <p className="kicker">Lab</p>
          <h2 className="headline">Side channels.</h2>
          <p className="lede">
            Explorations beyond the day job — interfaces, mobile sketches, tooling ideas, and
            continuous learning.
          </p>
        </Reveal>
        <div className="card-grid cols-2">
          {lab.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.04}>
              <article className="card">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[var(--accent)]">
                  {item.tag}
                </p>
                <h3 className="mt-2">{item.title}</h3>
                <p>{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
