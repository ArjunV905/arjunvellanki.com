export interface Experience {
  startDate: string;
  endDate?: string;
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
    endDate: "2025",
    title: "Software Developer",
    company: "CACI",
    url: "https://www.caci.com/",
    description:
      "Contributed to the productization of a classification-controlled document management system, resolving production issues and implementing new features in an agile environment. Was responsible for developing a comprehensive unit testing framework, and supported the initial design and development of a full-stack Angular web application.",
    skills: ["Angular", "TypeScript", ".NET", "C#", "PostgreSQL"],
  },
  {
    startDate: "May",
    endDate: "Aug 2023",
    title: "Software Developer Intern",
    company: "CACI",
    url: "https://www.caci.com/",
    description:
      "Researched and documented Elasticsearch capabilities to evaluate its suitability as a database for HighView Lite. Developed a Python app showcasing key features such as full-text search, file parsing, and text highlighting.",
    skills: ["Python", "Elasticsearch", "Logstash", "Kibana"],
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
  profileImage: "/images/profile.jpg",
};

export const aboutParagraphs: string[] = [
  "Detail-oriented Full-Stack Developer with 1 year of professional experience building scalable web applications. Experienced in integrating LLM-powered features into user-facing products. Proficient in JavaScript, Python, and modern DevOps practices, with a track record of owning features from development through deployment. Focused on building intelligent, high-impact technology solutions that combine strong software engineering with practical AI applications.",
  " ",
];
