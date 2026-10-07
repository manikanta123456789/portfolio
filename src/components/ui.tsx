import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
      <motion.h2
        id={`${id}-title`}
        className="heading mb-10 text-3xl sm:text-4xl"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {title}
        <motion.span
          aria-hidden
          className="mt-3 block h-1 w-16 origin-left rounded-full bg-accent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        />
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-line bg-glass px-2.5 py-0.5 font-mono text-[0.8125rem] text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent-text">
      {children}
    </li>
  );
}

// Renders a link, or a dashed placeholder when the URL is missing in portfolio.ts.
export function ProjectLink({ href, label }: { href: string | null; label: string }) {
  if (!href)
    return (
      <span className="inline-flex min-h-11 items-center rounded-xl border border-dashed border-line px-3 font-mono text-[0.8125rem] text-muted">
        {label}: add link
      </span>
    );
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="glass inline-flex min-h-11 items-center rounded-xl px-3 text-sm font-medium transition hover:-translate-y-0.5 hover:text-accent-text"
    >
      {label}
    </a>
  );
}
