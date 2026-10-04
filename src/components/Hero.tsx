import { motion, useReducedMotion } from "framer-motion";
import { milestones, profile } from "../data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

// Flat baseline with one spike per milestone. Spike centres sit at SPIKES (viewBox x of 1000).
const SPIKES = [210, 550, 845];
const TRACE = `M0 80 ${SPIKES.map((x) => `H${x - 15} L${x - 5} 18 L${x + 5} 110 L${x + 15} 80`).join(" ")} H1000`;
const DRAW = 1.8;

const iconLink =
  "grid size-11 place-items-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-accent-text";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" aria-label="Introduction" className="mx-auto max-w-5xl px-4 pt-16 pb-12 sm:px-6 sm:pt-24">
      <p className="font-mono text-sm text-muted">
        <span className="text-accent-text">$</span> {profile.terminal.command}
        <br />
        <span className="text-text">{profile.terminal.output}</span>
        <span className="cursor ml-1 inline-block h-4 w-2 translate-y-0.5 bg-accent" aria-hidden />
      </p>

      <h1 className="display mt-8 text-[clamp(2.6rem,10vw,6.5rem)]">
        Karibandi
        <br />
        Bala Supriya
      </h1>

      <p className="mt-6 max-w-[38ch] text-lg text-muted sm:text-xl">{profile.positioning}</p>

      {/* Signal trace: the page's one animated moment */}
      <div className="relative mt-12 mb-4" aria-hidden>
        <svg viewBox="0 0 1000 120" preserveAspectRatio="none" className="h-20 w-full sm:h-28">
          <line x1="0" y1="80" x2="1000" y2="80" stroke="var(--line)" vectorEffect="non-scaling-stroke" />
          <motion.path
            d={TRACE}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: DRAW, ease: "easeInOut" }}
          />
        </svg>
        <ol className="hidden sm:block">
          {milestones.map((m, i) => (
            <li
              key={m.when}
              className="label-in absolute top-full max-w-[22ch] -translate-x-1/2 pt-1 text-center text-[0.8125rem] leading-snug text-muted"
              style={{ left: `${SPIKES[i] / 10}%`, animationDelay: `${(SPIKES[i] / 1000) * DRAW}s` }}
            >
              <span className="block font-mono text-accent-text">{m.when}</span>
              {m.what}
            </li>
          ))}
        </ol>
      </div>
      {/* Same milestones as a readable list for small screens and screen readers */}
      <ol className="mt-2 space-y-1 text-sm text-muted sm:sr-only">
        {milestones.map((m) => (
          <li key={m.when}>
            <span className="font-mono text-accent-text">{m.when}</span> {m.what}
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-wrap items-center gap-3 sm:mt-24">
        <a
          href="#projects"
          className="inline-flex min-h-11 items-center rounded-md bg-accent px-5 font-semibold text-on-accent transition-opacity hover:opacity-90"
        >
          View projects
        </a>
        <a
          href={profile.resume}
          download
          className="inline-flex min-h-11 items-center rounded-md border border-line px-5 font-medium transition-colors hover:border-accent hover:text-accent-text"
        >
          Download resume
        </a>
        <span className="mx-1 hidden h-6 w-px bg-line sm:block" aria-hidden />
        {profile.github ? (
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconLink}>
            <GitHubIcon />
          </a>
        ) : (
          <span title="Add GitHub URL in src/data/portfolio.ts" className={`${iconLink} border-dashed opacity-60`}>
            <GitHubIcon />
            <span className="sr-only">GitHub link not added yet</span>
          </span>
        )}
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconLink}>
          <LinkedInIcon />
        </a>
        <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`} className={iconLink}>
          <MailIcon />
        </a>
      </div>
    </section>
  );
}
