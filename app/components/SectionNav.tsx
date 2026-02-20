"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState("about");
  const visibleSections = useRef(new Set<string>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSections.current.add(entry.target.id);
          } else {
            visibleSections.current.delete(entry.target.id);
          }
        }

        const firstVisible = sections.find((s) =>
          visibleSections.current.has(s.id)
        );
        if (firstVisible) {
          setActiveSection(firstVisible.id);
        }
      },
      { rootMargin: "-10% 0px -60% 0px" }
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {sections.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <li key={id}>
              <a
                className="group flex items-center py-3"
                href={`#${id}`}
              >
                <span
                  className={`nav-indicator mr-4 h-px ${
                    isActive ? "w-16 bg-text-primary" : "w-8 bg-text-secondary/60"
                  } group-hover:w-16 group-hover:bg-text-primary group-focus-visible:w-16 group-focus-visible:bg-text-primary`}
                />
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest ${
                    isActive ? "text-text-primary" : "text-text-secondary"
                  } group-hover:text-text-primary group-focus-visible:text-text-primary`}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
