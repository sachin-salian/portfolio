"use client";

import { useCallback, useState } from "react";
import CustomCursor from "@/components/layout/CustomCursor";
import Loader from "@/components/layout/Loader";
import Nav from "@/components/layout/Nav";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { ScrollProgress } from "@/components/motion/primitives";
import Contact from "@/components/sections/Contact";
import Dna from "@/components/sections/Dna";
import Focus from "@/components/sections/Focus";
import Hero from "@/components/sections/Hero";
import Lab from "@/components/sections/Lab";
import OmioFocus from "@/components/sections/OmioFocus";
import Outside from "@/components/sections/Outside";
import Principles from "@/components/sections/Principles";
import Stack from "@/components/sections/Stack";
import Story from "@/components/sections/Story";
import Timeline from "@/components/sections/Timeline";
import UnderHood from "@/components/sections/UnderHood";
import { person } from "@/content/portfolio";

export default function SiteShell() {
  const [booted, setBooted] = useState(false);
  const onDone = useCallback(() => setBooted(true), []);

  return (
    <SmoothScroll enabled={booted}>
      <div className={`site-shell ${booted ? "is-ready" : "is-loading"}`}>
        <Loader onDone={onDone} />
        <ScrollProgress />
        <CustomCursor />
        <Nav />
        <main id="main">
          <Hero />
          <Story />
          <Focus />
          <Timeline />
          <OmioFocus />
          <Stack />
          <Dna />
          <UnderHood />
          <Principles />
          <Lab />
          <Outside />
          <Contact />
        </main>
        <footer className="site-footer">
          <p>© 2026 {person.name}</p>
          <p>Product · Mobile · Platform</p>
        </footer>
      </div>
    </SmoothScroll>
  );
}
