import type { ReactNode } from "react";

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
      <h2 id={`${id}-title`} className="heading mb-10 text-3xl sm:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-md border border-line bg-bg/60 px-2 py-0.5 font-mono text-[0.8125rem] text-muted">
      {children}
    </li>
  );
}

// Renders a link, or a dashed placeholder when the URL is missing in portfolio.ts.
export function ProjectLink({ href, label }: { href: string | null; label: string }) {
  if (!href)
    return (
      <span className="inline-flex min-h-11 items-center rounded-md border border-dashed border-line px-3 font-mono text-[0.8125rem] text-muted">
        {label}: add link
      </span>
    );
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-11 items-center rounded-md border border-line px-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent-text"
    >
      {label}
    </a>
  );
}
