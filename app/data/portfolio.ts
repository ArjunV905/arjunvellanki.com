export interface Experience {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  location?: string;
  url?: string;
  description: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  url?: string;
  image?: string;
  skills: string[];
}

// ──────────────────────────────────────────────
// Edit these arrays to populate your portfolio.
// ──────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    startDate: "2024",
    endDate: "Present",
    title: "Senior Software Engineer",
    company: "Acme Corp",
    location: "San Francisco, CA",
    url: "https://example.com",
    description:
      "Led development of customer-facing web applications serving millions of users. Architected and implemented new features across the full stack, mentored junior engineers, and drove adoption of modern frontend practices.",
    skills: ["TypeScript", "React", "Next.js", "Node.js", "AWS"],
  },
  {
    startDate: "2022",
    endDate: "2024",
    title: "Software Engineer",
    company: "Startup Inc",
    url: "https://example.com",
    description:
      "Built and shipped core product features from ideation to production. Collaborated closely with design and product teams to deliver polished, accessible user interfaces.",
    skills: ["JavaScript", "React", "Python", "PostgreSQL"],
  },
];

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web application that helps users track and visualize their personal goals. Features real-time updates, interactive charts, and a clean, responsive interface.",
    url: "https://example.com",
    image: "/images/projects/placeholder.svg",
    skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Project Beta",
    description:
      "An open-source CLI tool that automates common development workflows. Supports custom plugins and integrates with popular CI/CD pipelines.",
    image: "/images/projects/placeholder.svg",
    skills: ["TypeScript", "Node.js", "CLI"],
  },
];

// ──────────────────────────────────────────────
// Profile / site-wide info
// ──────────────────────────────────────────────

export const profile = {
  name: "Arjun Vellanki",
  title: "Software Engineer",
  tagline: "Full-Stack Developer",
  email: "arjunv.app@gmail.com",
  githubUrl: "https://github.com/arjunv905",
  linkedinUrl: "https://www.linkedin.com/in/arjun-vellanki/",
  resumePath: "/resume.pdf",
  profileImage: "/images/profile.svg",
};

export const aboutParagraphs: string[] = [
  "Detail-oriented Full-Stack Developer with 1 year of professional experience building scalable web applications. Experienced in integrating LLM-powered features into user-facing products. Proficient in JavaScript, Python, and modern DevOps practices, with a track record of owning features from development through deployment. Focused on building intelligent, high-impact technology solutions that combine strong software engineering with practical AI applications.",
  "new line.",
];
