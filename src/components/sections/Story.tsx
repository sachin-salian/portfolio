import Image from "next/image";
import { person, story } from "@/content/portfolio";
import { Reveal } from "@/components/motion/primitives";

export default function Story() {
  return (
    <section id="about" className="section" aria-label="About">
      <div className="section-inner">
        <Reveal>
          <p className="kicker">{story.kicker}</p>
          <h2 className="headline">{story.headline}</h2>
          {story.body.map((p) => (
            <p key={p} className="lede">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.08}>
          <div className="journey" aria-label="Career journey">
            {story.journey.map((step) => (
              <div key={step.year + step.company} className="journey-item">
                <p className="year">{step.year}</p>
                <p className="co">{step.company}</p>
                <p className="dom">{step.domain}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <div className="about-photo">
              <Image
                src="/profile.png"
                alt={`Portrait of ${person.name}`}
                fill
                sizes="(max-width: 960px) 100vw, 420px"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[var(--accent)]">
              EDU · {person.education.degree} · {person.education.year}
            </p>
            <p className="mt-2 text-[var(--text-dim)]">{person.education.school}</p>
            <ul className="mt-6 space-y-3 text-[var(--text-dim)]">
              {person.awards.map((award) => (
                <li key={award.title} className="border-l-2 border-[var(--accent)] pl-3">
                  <strong className="text-[var(--text)]">
                    {award.title} — {award.org}
                  </strong>
                  <br />
                  {award.note}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.12em] text-[var(--text-faint)]">
              Languages · {person.languages.join(" · ")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
