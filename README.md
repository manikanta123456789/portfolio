# Karibandi Bala Supriya: portfolio

Single-page portfolio built with React, TypeScript, Vite, Tailwind CSS v4 and Framer Motion. No backend.

## Setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve dist/ locally
```

## Editing content

Everything shown on the site comes from `src/data/portfolio.ts`:

| What | Where |
|------|-------|
| Name, positioning line, email, LinkedIn, GitHub, resume path | `profile` |
| About paragraphs | `about` |
| Jobs and internships | `experience` |
| Projects (set `featured: true` for the large cards) | `projects` |
| Skill groups | `skills` |
| Certifications and highlights | `certifications`, `achievements` |
| Schools, years, CGPA | `education` |
| Timeline in the hero profile card | `milestones` |
| "Currently", "Studying", "Status" rows in the hero card | `profile.current`, `profile.studying`, `profile.status` |

Any link or score left as `null` shows a dashed "add link" placeholder on the page, so gaps are easy to spot.

To replace the resume PDF, overwrite `public/Karibandi-Bala-Supriya-Resume.pdf` (or change `profile.resume`).

## Before deploying

- [ ] Add your GitHub URL (`profile.github`) and each project's `github` / `demo` link
- [ ] Add CGPA in `education[0].score`
- [ ] Replace `https://YOUR-DOMAIN` in `index.html` with the real URL
- [ ] Add a 1200×630 `public/og-image.png` for link previews

## Deploy

**Vercel:** import the repo, framework preset "Vite". Build command `npm run build`, output `dist`.

**Netlify:** new site from Git, build command `npm run build`, publish directory `dist`.

Or drag the `dist/` folder onto https://app.netlify.com/drop.

## Structure

```
index.html                 meta, Open Graph, fonts, theme pre-paint script
public/                    favicon, resume PDF, robots.txt
src/
  data/portfolio.ts        all content (edit this)
  index.css                theme tokens (dark/light CSS variables), glass panel + background styles
  App.tsx                  page layout
  components/
    Nav.tsx                sticky nav, active-section highlight, theme toggle, mobile menu
    Hero.tsx               terminal line, name, CTAs, glass profile card
    Sections.tsx           About, Experience, Projects, Skills, Achievements, Education, Contact
    ui.tsx                 Section wrapper, Tag, ProjectLink
    Icons.tsx              inline SVG icons
```
