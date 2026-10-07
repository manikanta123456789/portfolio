import { MotionConfig } from "framer-motion";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { About, Achievements, Contact, Education, Experience, Projects, Skills } from "./components/Sections";
import { profile } from "./data/portfolio";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-3 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <footer className="mx-auto max-w-5xl border-t border-line px-4 py-8 text-sm text-muted sm:px-6">
        {profile.name}, {profile.location}. Built with React and Tailwind.
      </footer>
    </MotionConfig>
  );
}
