import { dna } from "@/content/portfolio";
import { Reveal } from "@/components/motion/primitives";

export default function Dna() {
  return (
    <section id="dna" className="section" aria-label="Engineering DNA">
      <div className="section-inner">
        <Reveal>
          <p className="kicker">Engineering DNA</p>
          <h2 className="headline">More than a framework.</h2>
          <p className="lede">
            Product engineer with deep React Native — the instincts that travel between companies.
          </p>
        </Reveal>
        <div className="card-grid cols-3">
          {dna.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.04}>
              <article className="card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
