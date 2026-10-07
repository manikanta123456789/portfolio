import { useEffect, useState } from "react";
import { nav, profile } from "../data/portfolio";
import { MenuIcon, MoonIcon, SunIcon } from "./Icons";

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme ?? "light");
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={() => {
        document.documentElement.dataset.theme = next;
        try {
          localStorage.setItem("theme", next);
        } catch {}
        setTheme(next);
      }}
      aria-label={`Switch to ${next} theme`}
      className="grid size-11 cursor-pointer place-items-center rounded-md text-muted transition-colors hover:text-text"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export function Nav() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  const links = nav.map(({ id, label }) => (
    <li key={id}>
      <a
        href={`#${id}`}
        onClick={() => setOpen(false)}
        aria-current={active === id ? "true" : undefined}
        className={`block rounded-lg px-3 py-2 text-[0.9375rem] transition-colors hover:text-text ${
          active === id ? "text-accent-text" : "text-muted"
        }`}
      >
        {label}
      </a>
    </li>
  ));

  return (
    <header className="sticky top-3 z-50 mx-auto mt-3 max-w-5xl px-3 sm:px-4">
      <div className="glass rounded-2xl">
        <nav aria-label="Main" className="flex h-14 items-center justify-between pr-1 pl-4">
          <a href="#top" className="heading text-lg">
            {profile.shortName}
            <span className="text-accent-text">.</span>
          </a>
          <ul className="hidden items-center lg:flex">{links}</ul>
          <div className="flex items-center">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label="Menu"
              className="grid size-11 cursor-pointer place-items-center rounded-md text-muted hover:text-text lg:hidden"
            >
              <MenuIcon />
            </button>
          </div>
        </nav>
        {open && (
          <ul id="mobile-nav" className="border-t border-line px-2 py-2 lg:hidden">
            {links}
          </ul>
        )}
      </div>
    </header>
  );
}
