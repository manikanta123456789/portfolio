import { useState } from "react";
import {
  about,
  achievements,
  certifications,
  education,
  experience,
  profile,
  projects,
  skills,
  type Project,
} from "../data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import { ProjectLink, Section, Tag } from "./ui";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-[62ch] space-y-4 text-lg">
        {about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative border-l border-line">
        {experience.map((r) => (
          <li key={r.company + r.start} className="relative pb-4 pl-6 sm:pl-8">
            <span className="pulse absolute top-2 -left-[5px] size-[9px] rounded-full bg-accent" aria-hidden />
            <p className="font-mono text-sm text-muted">
              {r.start} to {r.end}
            </p>
            <h3 className="heading mt-1 text-xl sm:text-2xl">{r.title}</h3>
            <p className="text-muted">
              {r.company}, {r.location}
            </p>
            <ul className="mt-4 max-w-[68ch] list-disc space-y-2 pl-5 marker:text-accent-text">
              {r.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function ProjectBody({ p, large }: { p: Project; large: boolean }) {
  return (
    <>
      <div className={large ? "md:col-span-2" : ""}>
        <p className="font-mono text-sm text-muted">{p.year}</p>
        <h3 className={`heading mt-1 ${large ? "text-2xl sm:text-3xl" : "text-xl"}`}>{p.title}</h3>
        <p className="mt-3 text-muted">{p.problem}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
          {p.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </ul>
      </div>
      <div className={large ? "md:col-span-3" : "mt-5"}>
        <ul className="list-disc space-y-1.5 pl-5 marker:text-accent-text">
          {p.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          <ProjectLink href={p.github} label="GitHub" />
          {p.demo !== false && <ProjectLink href={p.demo} label="Live demo" />}
        </div>
      </div>
    </>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-6">
        {featured.map((p) => (
          <article key={p.title} className="glass lift grid gap-6 rounded-3xl p-6 sm:p-8 md:grid-cols-5 md:gap-10">
            <ProjectBody p={p} large />
          </article>
        ))}
      </div>
      {rest.length > 0 && (
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((p) => (
            <article key={p.title} className="glass lift rounded-3xl p-6 sm:p-8">
              <ProjectBody p={p} large={false} />
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="glass divide-y divide-line rounded-3xl px-6 sm:px-8">
        {skills.map((g) => (
          <div key={g.name} className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <dt className="font-semibold">{g.name}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements and leadership">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass lift rounded-3xl p-6 sm:p-8">
          <h3 className="heading mb-4 text-xl">Certifications</h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.name}>
                {c.name}
                <span className="block text-sm text-muted">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass lift rounded-3xl p-6 sm:p-8">
          <h3 className="heading mb-4 text-xl">Highlights</h3>
          <ul className="list-disc space-y-3 pl-5 marker:text-accent-text">
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="space-y-8">
        {education.map((s) => (
          <li key={s.name} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <p className="font-mono text-sm text-muted sm:pt-1">
              {s.start} to {s.end}
            </p>
            <div>
              <h3 className="heading text-xl">{s.course}</h3>
              <p className="text-muted">
                {s.name}, {s.place}
              </p>
              {s.score ? (
                <p className="mt-1 font-mono text-sm">{s.score}</p>
              ) : (
                s === education[0] && (
                  <p className="mt-2 inline-block rounded-lg border border-dashed border-line px-2 font-mono text-[0.8125rem] text-muted">
                    CGPA: add in portfolio.ts
                  </p>
                )
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  return (
    <Section id="contact" title="Contact">
      <div className="glass rounded-3xl p-6 sm:p-10">
        <p className="max-w-[48ch] text-lg text-muted">
          I'm looking for entry-level software and full stack roles. Email is the fastest way to reach me.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="heading mt-6 inline-block text-[clamp(1.4rem,5vw,2.75rem)] break-all underline decoration-accent decoration-2 underline-offset-8 hover:text-accent-text"
        >
          {profile.email}
        </a>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={copy}
            className="inline-flex min-h-11 cursor-pointer items-center rounded-xl bg-accent px-5 font-semibold text-on-accent transition-opacity hover:opacity-90"
          >
            {copied ? "Email copied" : "Copy email"}
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="glass inline-flex min-h-11 items-center gap-2 rounded-xl px-4 transition-colors hover:text-accent-text"
          >
            <MailIcon /> Send email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass inline-flex min-h-11 items-center gap-2 rounded-xl px-4 transition-colors hover:text-accent-text"
          >
            <LinkedInIcon /> LinkedIn
          </a>
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex min-h-11 items-center gap-2 rounded-xl px-4 transition-colors hover:text-accent-text"
            >
              <GitHubIcon /> GitHub
            </a>
          )}
          <span role="status" className="sr-only">
            {copied ? "Email address copied to clipboard" : ""}
          </span>
        </div>
      </div>
    </Section>
  );
}
