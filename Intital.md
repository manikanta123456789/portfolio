You are a senior frontend engineer and product designer. Build a personal portfolio website using ONLY the information in the resume I've attached. Do not invent projects, metrics, employers, or skills. If something is missing (photo, links, project screenshots), leave a clearly marked placeholder.

## Goal
A recruiter or engineer should understand who I am, what I've built, and how to reach me within 30 seconds. It should feel like a developer built it by hand, not like a template.

## Tech stack
- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion for animation (subtle, purposeful, respects prefers-reduced-motion)
- No backend required; contact via mailto link or a simple form service placeholder
- Deployable to Vercel or Netlify as a static site

## Content structure (pull everything from the resume)
1. Hero: name, one-line positioning statement written from my actual experience, primary CTA (View Projects) and secondary CTA (Resume PDF / Contact). Links to GitHub, LinkedIn, email.
2. About: 3 to 4 sentences in a plain, grounded voice. No buzzwords like "passionate", "innovative", or "cutting-edge".
3. Experience: timeline of internships/roles with company, location, dates, and 2 to 3 concrete bullets each focused on what I built and the outcome.
4. Projects: include EVERY project listed in the resume, not just the top few. Each card shows title, one-line problem statement, tech stack tags, key features, and GitHub / Live Demo buttons. Feature the 2 to 3 strongest as larger cards; the rest in a grid.
5. Skills: grouped by category (Languages, Frontend, Backend, AI/LLM, Cloud/DevOps, Tools). Use clean tags, not progress bars or percentage ratings.
6. Achievements and Leadership: certifications, competitive programming, club leadership, events organized.
7. Education: degree, college, graduation year, CGPA.
8. Contact: short closing line, email, socials, and a copy-email-to-clipboard button.

## Design direction
- Dark theme by default with a light mode toggle; define colors as CSS variables
- One strong accent color, generous whitespace, clear typographic hierarchy
- Distinctive but readable font pairing (e.g. a geometric sans for headings, a monospace for small labels/tags)
- Small developer touches: a terminal-style intro line, keyboard-focus styling, a subtle grid or noise background. Keep it tasteful.
- Sticky nav with active-section highlighting and smooth scroll
- Fully responsive down to 360px wide, no horizontal scroll

## Quality bar
- Lighthouse 95+ on performance, accessibility, best practices, SEO
- Semantic HTML, alt text, visible focus states, AA color contrast
- SEO meta tags, Open Graph tags, favicon
- All resume content stored in a single typed data file (src/data/portfolio.ts) so I can update it without touching components

## Output
- Full project file structure
- Complete code for every file
- A short README with setup, how to edit content, and how to deploy

Before writing code, list the sections and every project you extracted from the resume so I can confirm nothing was missed.