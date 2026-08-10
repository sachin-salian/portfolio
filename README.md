# Sachin Kumar K — Portfolio

Premium product-engineer portfolio. Dark editorial UI with restrained motion.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Motion** (`motion/react`) — reveals, micro-interactions
- **Lenis** — desktop smooth scrolling (disabled on touch / reduced-motion)
- **Lucide** — icons
- **next/font** — Space Grotesk, Source Sans 3, Instrument Serif, JetBrains Mono

No Three.js. GSAP removed in this rebuild — Motion + Lenis cover the motion budget.

## Architecture

```
src/
  app/                 # routes, layout, globals, SEO
  content/portfolio.ts # all copy & structured data
  components/
    layout/            # shell, nav, loader, cursor, smooth scroll
    motion/            # Reveal, TextReveal, Magnetic, ScrollProgress
    sections/          # page sections
  lib/                 # cn, motion helpers
public/                # resume PDF, profile image
```

## Content

Edit **`src/content/portfolio.ts`** only for facts and copy.

- Person / hero / nav
- Experience timeline
- Projects (mini case studies)
- Stack groups, DNA, under-the-hood, principles
- Lab, outside, contact

See **`CONTENT_GAPS.md`** for what to add later without inventing claims.

## Add a project

1. Append an object to `projects` in `src/content/portfolio.ts`.
2. Follow the shape: thesis, context, problem, approach, decision, outcome, stack.
3. Prefer a **decision worth knowing** over a technology list.

## Animation system

| Primitive | Use |
| --- | --- |
| `Reveal` | Section blocks enter once |
| `TextReveal` | Word-stagger headlines (optional) |
| `Magnetic` | Subtle CTA pointer pull (fine pointer only) |
| `ScrollProgress` | Top progress bar |
| `CustomCursor` | Desktop-only; disabled on touch / reduced-motion |
| `Loader` | Sub-second boot curtain |

Respects `prefers-reduced-motion`.

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## Deploy

Works on **Vercel** (or any Node host supporting Next.js).

1. Connect the GitHub repo to Vercel.
2. Framework preset: Next.js.
3. Ensure `public/Sachin_Resume.pdf` and `public/profile.png` ship with the build.
4. Set production URL in `src/app/layout.tsx` `metadataBase` / JSON-LD if the domain changes.

## SEO

- Title / description / Open Graph / Twitter in `layout.tsx`
- Person JSON-LD
- Canonical via `metadataBase` + `alternates.canonical`

Add `sitemap.ts` / `robots.ts` when the production domain is final.
