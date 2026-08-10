import { omioFocus } from "@/content/portfolio";
import { Reveal } from "@/components/motion/primitives";

export default function OmioFocus() {
  return (
    <section id="omio" className="section" aria-label="Current role at Omio" style={{ paddingTop: 0 }}>
      <div className="section-inner">
        <Reveal>
          <div
            className="card"
            style={{
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--accent) 8%, var(--surface)), var(--surface))",
            }}
          >
            <p className="kicker">{omioFocus.kicker}</p>
            <h2 className="headline" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              {omioFocus.headline}
            </h2>
            <p className="lede">{omioFocus.body}</p>
            <div className="card-grid cols-3" style={{ marginTop: "1.75rem" }}>
              {omioFocus.pillars.map((pillar) => (
                <div key={pillar.title}>
                  <h3 className="font-display text-xl tracking-tight">{pillar.title}</h3>
                  <ul className="mt-3 space-y-2 text-[var(--text-dim)]">
                    {pillar.items.map((item) => (
                      <li key={item} className="border-l border-[var(--line)] pl-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
