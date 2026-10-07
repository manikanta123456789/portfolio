// All site content lives here. Edit this file to update the portfolio;
// components only read from it. Fields set to null render as a visible
// "add link" placeholder so missing info is easy to spot.

export type Link = { label: string; href: string };

export type Role = {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  points: string[];
};

export type Project = {
  title: string;
  year: string;
  problem: string;
  stack: string[];
  features: string[];
  github: string | null;
  demo: string | null | false; // false = no live demo, hides the button
  featured: boolean;
};

export type SkillGroup = { name: string; items: string[] };

export type School = {
  name: string;
  place: string;
  course: string;
  start: string;
  end: string;
  score: string | null;
};

export const profile = {
  name: "Karibandi Bala Supriya",
  shortName: "Supriya",
  role: "Software / Full Stack Developer",
  positioning:
    "I build Node.js backends and Angular and React interfaces, currently for real-time engineering dashboards at Instrutel.",
  terminal: { command: "whoami", output: "cse undergrad, node.js intern at instrutel, open to entry-level roles" },
  location: "Hyderabad, India",
  current: "Node.js Intern, Instrutel",
  studying: "B.E. CSE, MVSR (2027)",
  status: "Open to entry-level roles",
  email: "balasupriyak@gmail.com",
  phone: "+91 9014400816",
  linkedin: "https://www.linkedin.com/in/bala-supriya",
  github: "https://github.com/balasupriyak" as string | null,
  resume: "/Karibandi-Bala-Supriya-Resume.pdf",
  photo: null as string | null, // TODO: optional headshot in /public
};

export const about: string[] = [
  "I'm a Computer Science student at MVSR Engineering College in Hyderabad, graduating in 2027.",
  "Since June 2026 I've been interning at Instrutel, writing Node.js APIs that process real-time data and the Angular dashboards engineers use to read it.",
  "Outside work I build web apps that lean on AI models: a travel planner on the Gemini API and a knowledge-retrieval chatbot running on Ollama.",
  "I'm looking for an entry-level software or full stack developer role.",
];

export const experience: Role[] = [
  {
    title: "Node.js Technology Intern",
    company: "Instrutel Pvt. Ltd.",
    location: "Hyderabad",
    start: "June 2026",
    end: "Present",
    points: [
      "Developed backend applications in Node.js focused on API development and real-time data processing.",
      "Designed and built responsive Angular interfaces for real-time engineering dashboards.",
      "Worked with the development team to build, test and integrate full-stack features in production.",
    ],
  },
  // TODO: the resume mentions an internship at AIMERS under Achievements.
  // Add it here with title, dates and 2–3 bullets once confirmed.
];

export const projects: Project[] = [
  {
    title: "VOYAGE: Smart AI Itinerary Planner",
    year: "2025–2026",
    problem: "Planning a trip means juggling preferences, weather and shared plans across many tabs.",
    stack: ["React.js", "Node.js", "Gemini API", "OpenWeatherMap API"],
    features: [
      "Generates personalized itineraries from user preferences with the Gemini API",
      "Trip planning, live weather updates and trip sharing",
      "Real-time travel information from OpenWeatherMap",
    ],
    github: "https://github.com/balasupriyak/voyage-itinerary",
    demo: "https://voyageitinerary.netlify.app/",
    featured: true,
  },
  {
    title: "AI-Assisted Knowledge Retrieval System",
    year: "2026",
    problem: "Staff need answers from organization-specific documents without digging through them.",
    stack: ["Angular", "Ollama", "REST APIs"],
    features: [
      "Angular chatbot backed by a locally hosted Ollama model",
      "Frontend components wired to backend APIs",
      "Responsive chat interface components",
    ],
    github: null, // TODO
    demo: null, // TODO
    featured: true,
  },
  {
    title: "Programming Quiz Application",
    year: "2025",
    problem: "Students need quick practice on C, C++ and Java concepts with visible progress.",
    stack: ["JavaScript", "Kotlin", "Firebase"],
    features: [
      "Interactive quiz levels for C, C++ and Java",
      "Score tracking, results and progress stored in Firebase",
      "Simple interface built with JavaScript and Kotlin",
    ],
    github: "https://github.com/balasupriyak/quizzapp",
    demo: false,
    featured: false,
  },
];

// No Cloud/DevOps group: the resume lists none. Add one when it does.
export const skills: SkillGroup[] = [
  { name: "Languages", items: ["Python", "JavaScript", "SQL", "C", "Kotlin"] },
  { name: "Frontend", items: ["HTML", "CSS", "React.js", "Angular"] },
  { name: "Backend", items: ["Node.js", "REST APIs", "Firebase"] },
  { name: "AI / LLM", items: ["Gemini API", "Ollama"] },
  { name: "Tools", items: ["Git", "GitHub", "VS Code", "MuleSoft", "Google Workspace"] },
];

export const certifications: { name: string; issuer: string }[] = [
  { name: "Java Full Stack Developer", issuer: "AICTE" },
  { name: "Python Full Stack Developer", issuer: "AICTE" },
  { name: "Database Programming with SQL", issuer: "Oracle Academy" },
  { name: "Artificial Intelligence: Deep Learning", issuer: "AIMER Society" },
];

export const achievements: string[] = [
  "Certificate of Merit for a paper presentation at CSI Fusion",
  "Industry internships at AIMERS and Instrutel Pvt. Ltd.",
  "Took part in hackathons and technical events",
  "Contributed to team technical projects and managed creative projects end to end",
];

export const education: School[] = [
  {
    name: "MVSR Engineering College",
    place: "Hyderabad",
    course: "B.E. Computer Science Engineering",
    start: "2023",
    end: "2027",
    score: null, // TODO: add CGPA, e.g. "CGPA 8.5 / 10"
  },
  {
    name: "Sri Chaitanya Junior College",
    place: "Hyderabad",
    course: "Intermediate (MPC)",
    start: "2021",
    end: "2023",
    score: null,
  },
  {
    name: "Chaitanya Central School",
    place: "Mahabubnagar",
    course: "CBSE",
    start: "2011",
    end: "2021",
    score: null,
  },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

// Timeline rows in the hero profile card (oldest first).
export const milestones = [
  { when: "2023", what: "Started B.E. CSE at MVSR" },
  { when: "2025", what: "Built VOYAGE and the quiz app" },
  { when: "Jun 2026", what: "Joined Instrutel as Node.js intern" },
];
