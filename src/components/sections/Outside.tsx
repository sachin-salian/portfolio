import { outside } from "@/content/portfolio";
import { Reveal } from "@/components/motion/primitives";

export default function Outside() {
  return (
    <section id="outside" className="section" aria-label="Outside the code">
      <div className="section-inner">
        <Reveal>
          <p className="kicker">Outside the code</p>
          <h2 className="headline">Human operating system.</h2>
        </Reveal>
        <div className="card-grid cols-2">
          {outside.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <article className="card">
                <h3>{item.title}</h3>
                <p className="mt-2">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
