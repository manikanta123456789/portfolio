# Portfolio build brief (refined)

Changes from `Intital.md` are marked **[changed]** or **[added]**, with the reason.

You are a senior frontend engineer and product designer. Build a personal portfolio website using ONLY the information in the attached resume. Do not invent projects, metrics, employers, or skills. If something is missing (photo, GitHub, project links, CGPA, screenshots), show a clearly marked placeholder **and list every placeholder in the README checklist** **[added: so nothing ships with a gap unnoticed]**.

## Goal
A recruiter or engineer should understand who I am, what I've built, and how to reach me within 30 seconds. It should feel hand-built, not templated.

## Tech stack
- React + TypeScript + Vite
- Tailwind CSS **v4 via `@tailwindcss/vite` (no config file)** **[changed: pin the version so setup instructions match]**
- Framer Motion, used for **one** load moment only; everything respects `prefers-reduced-motion` **[changed: "subtle" was open-ended; scattered scroll-reveals hurt performance and read as generic]**
- No backend; contact via `mailto:` and a copy-email button **[changed: dropped the "form service placeholder"; a fake form that sends nothing is worse than no form]**
- Static deploy to Vercel or Netlify

## Content structure (pulled from the resume)
1. **Hero:** name, one-line positioning statement from real experience, primary CTA "View projects", secondary "Download resume". GitHub, LinkedIn, email.
2. **About:** 3–4 plain sentences. No "passionate", "innovative", "cutting-edge".
3. **Experience:** timeline with company, location, dates, 2–3 bullets each.
4. **Projects:** every project in the resume. Title, one-line problem, stack tags, key features, GitHub / Live demo. **Feature the strongest 2 as large cards when there are 3 or fewer projects; feature 3 when there are more** **[changed: the resume has 3 projects, so "2–3 featured + rest in grid" left the grid nearly empty]**
5. **Skills:** grouped by category. **Only show groups the resume supports; skip empty ones (e.g. Cloud/DevOps)** **[changed: avoid inventing skills to fill a category]**. **Skills used in projects (Kotlin, Firebase, Gemini API, Ollama) count** **[added]**. Tags, no progress bars.
6. **Achievements and leadership:** certifications, awards, internships, events.
7. **Education:** all schools with years; CGPA for the degree (placeholder if missing).
8. **Contact:** short closing line, email, LinkedIn, copy-to-clipboard button **with screen-reader announcement** **[added]**.

## Design direction
- Dark by default, light toggle, colors as CSS variables, **saved choice applied before first paint (no flash)** **[added]**
- One strong accent, generous whitespace, clear hierarchy
- Distinctive readable pairing: a sans with character for headings, a monospace for small labels/tags
- Developer touches: terminal intro line, visible keyboard focus, faint grid background
- Sticky nav with active-section highlight, smooth scroll, **collapsible menu below 1024px** **[added: 7 links don't fit at 360px]**
- Responsive to 360px, no horizontal scroll, **tap targets ≥ 44px** **[added]**
- **Skip-to-content link** **[added]**

## Quality bar
- Lighthouse 95+ (performance, accessibility, best practices, SEO)
- Semantic HTML, alt text, visible focus, WCAG AA contrast in both themes
- SEO meta, Open Graph, favicon, robots.txt
- All content in one typed file: `src/data/portfolio.ts`

## Output
- File structure, complete code, short README (setup, editing content, deploy, **pre-deploy checklist**)

Before writing code, list the sections and every project extracted from the resume so I can confirm nothing was missed.
