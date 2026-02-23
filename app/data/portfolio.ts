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
    title: "Notara",
    description:
      "An AI-powered full-stack desktop application to centralize student course management, scheduling, and document access. Integrated LLM-powered features for syllabus parsing and natural language querying of course materials. Implemented semantic search using embeddings stored in a vector database to enable context-aware document retrieval (RAG pipeline). Deployed locally hosted Gemma 3 embedding and inference models via Ollama for all AI functionality. Leveraged AI-assisted development tools to accelerate feature implementation and iteration.",
    image: "/images/projects/placeholder.svg",
    skills: ["React", "TypeScript", "Rust", "Tauri", "Ollama", "Gemma 3", "Cursor"],
  },
  {
    title: "MyMovieList",
    description:
      "A full-stack project that allows users to view movie information and track their watched movies, while also allowing admin users to moderate content posted to the site.",
    url: "https://github.com/ArjunV905/MyMovieList",
    image: "/images/projects/placeholder.svg",
    skills: ["React", "JavaScript", "Python", "Docker"],
  },
  {
    title: "openDSAVisualizer",
    description:
      "A full-stack project for the Computer Science department in Virginia Tech that provides visualizations of students\’ study sessions for instructors to assess the effectiveness and performance of their courses. It integrates with openDSA to visualize existing student data.",
    url: "https://github.com/egol2/openDSAVisualizer",
    image: "/images/projects/placeholder.svg",
    skills: ["React", "JavaScript", "Python", "Docker"],
  },
  {
    title: "WILTTSpotify",
    description:
      "A Python project which uses Spotify’s API to automatically populate songs read from a .csv file to a playlist. It creates/adds to the current semester’s playlist, and does so by using either Spotify links or Artist Name and Song Title. The program was created for the professor of a music course at Virginia Tech.",
    url: "https://github.com/ArjunV905/WILTTSpotify",
    image: "/images/projects/placeholder.svg",
    skills: ["Python"],
  },
  {
    title: "arjunvellanki.com",
    description:
      "A personal portfolio website built with Next.js, Tailwind CSS, and deployed using Vercel.",
    url: "https://github.com/ArjunV905/arjunvellanki.com",
    image: "/images/projects/arjunvellanki-com.jpg",
    skills: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
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
  "I have previously worked as a Software Developer at CACI where I was responsible for addressing any issues across the full stack system, and for implementing new features such as an Administration website that interfaced with the core stack. Alongside my professional work, I have also worked on various projects to help solve real problems that either myself or people close to me have encountered. These experiences have shaped my ability to quickly identify the underlying issue of a problem, allowing me to design and implement an effective solution that solves the problem.",
];
