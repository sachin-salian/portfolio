"use client";

import { useEffect, useState } from "react";
import { nav, person } from "@/content/portfolio";
import { scrollToId } from "@/components/layout/SmoothScroll";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const ids = ["hero", ...nav.map((n) => n.id)];
    const update = () => {
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", update);
    };
  }, []);

  const jump = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <a href="#main" className="skip-link focus-ring">
        Skip to content
      </a>
      <header className={`nav ${solid ? "is-solid" : ""}`} role="banner">
        <button type="button" className="nav-brand focus-ring" onClick={() => jump("hero")}>
          <span className="mark">{person.monogram}</span>
          <span className="pulse" aria-hidden />
          <span className="hidden sm:inline">{person.shortName}</span>
        </button>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`focus-ring ${active === item.id ? "is-active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                jump(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta focus-ring" href={person.resume} target="_blank" rel="noopener noreferrer">
          Resume
        </a>

        <button
          type="button"
          className="nav-mobile-btn focus-ring"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>

      {open ? (
        <div className="nav-drawer" role="dialog" aria-modal="true">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="focus-ring"
              onClick={(e) => {
                e.preventDefault();
                jump(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
          <a className="focus-ring" href={person.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      ) : null}
    </>
  );
}
