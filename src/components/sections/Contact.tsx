import { contact, person } from "@/content/portfolio";
import { Magnetic, Reveal } from "@/components/motion/primitives";

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-label="Contact">
      <div className="section-inner">
        <Reveal>
          <p className="kicker">{contact.kicker}</p>
          <h2>{contact.headline}</h2>
          <p className="sub">{contact.sub}</p>
          <p className="mt-4 max-w-md text-[var(--text-dim)]">{contact.note}</p>
          <div className="contact-actions">
            <Magnetic>
              <a className="btn focus-ring" href={`mailto:${person.email}`} data-cursor="MAIL">
                {person.email}
              </a>
            </Magnetic>
            <Magnetic>
              <a
                className="btn ghost focus-ring"
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Magnetic>
            <Magnetic>
              <a
                className="btn ghost focus-ring"
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Magnetic>
            <Magnetic>
              <a
                className="btn ghost focus-ring"
                href={person.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Magnetic>
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-faint)]">
            {person.phone} · {person.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
