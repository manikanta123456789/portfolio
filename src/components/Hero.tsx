import { motion, useReducedMotion } from "framer-motion";
import { milestones, profile } from "../data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const iconLink = "glass grid size-11 place-items-center rounded-xl text-muted transition-colors hover:text-accent-text";

const initials = profile.name
  .split(" ")
  .filter((_, i, a) => i === 0 || i === a.length - 1)
  .map((w) => w[0])
  .join("");

const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="mx-auto grid max-w-5xl items-center gap-12 px-4 pt-16 pb-12 sm:px-6 sm:pt-24 lg:grid-cols-[1.25fr_1fr]"
    >
      <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }}>
        <motion.p variants={item} className="font-mono text-sm text-muted">
          <span className="text-accent-text">$</span> {profile.terminal.command}
          <br />
          <span className="text-text">{profile.terminal.output}</span>
          <span className="cursor ml-1 inline-block h-4 w-2 translate-y-0.5 bg-accent" aria-hidden />
        </motion.p>

        <motion.h1 variants={item} className="display mt-8 text-[clamp(2.3rem,7vw,4rem)]">
          Karibandi
          <br />
          Bala Supriya
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-[40ch] text-lg text-muted sm:text-xl">{profile.positioning}</motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex min-h-11 items-center rounded-xl bg-accent px-5 font-semibold text-on-accent transition hover:-translate-y-0.5 hover:opacity-90"
          >
            View projects
          </a>
          <a
            href={profile.resume}
            download
            className="glass inline-flex min-h-11 items-center rounded-xl px-5 font-medium transition-colors hover:text-accent-text"
          >
            Download resume
          </a>
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
        </motion.div>
      </motion.div>

      {/* Profile card */}
      <motion.aside
        aria-label="At a glance"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="glass rounded-3xl p-6 sm:p-8"
      >
        <div className="flex items-center gap-4">
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={profile.name}
              width={64}
              height={64}
              className="size-16 rounded-2xl object-cover"
            />
          ) : (
            <span
              title="Add a photo in src/data/portfolio.ts"
              className="grid size-16 place-items-center rounded-2xl border border-dashed border-line text-xl font-semibold text-accent-text"
            >
              {initials}
            </span>
          )}
          <div>
            <p className="font-semibold">{profile.shortName}</p>
            <p className="text-sm text-muted">{profile.role}</p>
          </div>
        </div>

        <dl className="mt-6 space-y-3 border-t border-line pt-6 text-[0.9375rem]">
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Currently</dt>
            <dd className="text-right">{profile.current}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Studying</dt>
            <dd className="text-right">{profile.studying}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Based in</dt>
            <dd className="text-right">{profile.location}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Status</dt>
            <dd className="flex items-center gap-2 text-right">
              <span className="size-2 rounded-full bg-accent" aria-hidden />
              {profile.status}
            </dd>
          </div>
        </dl>

        <ol className="mt-6 space-y-2 border-t border-line pt-6 text-sm">
          {milestones.map((m) => (
            <li key={m.when} className="grid grid-cols-[5rem_1fr] gap-2">
              <span className="font-mono text-accent-text">{m.when}</span>
              <span className="text-muted">{m.what}</span>
            </li>
          ))}
        </ol>
      </motion.aside>
    </section>
  );
}
