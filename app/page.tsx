import SectionNav from "@/app/components/SectionNav";
import SocialLinks from "@/app/components/SocialLinks";
import StickyHeader from "@/app/components/StickyHeader";
import ProfileImage from "@/app/components/ProfileImage";
import ExperienceCard from "@/app/components/ExperienceCard";
import ProjectCard from "@/app/components/ProjectCard";
import { parseMarkdownLinks } from "@/app/utils/parseMarkdownLinks";
import {
  profile,
  aboutParagraphs,
  footerText,
  experiences,
  projects,
} from "@/app/data/portfolio";

export default function Home() {
  return (
    <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* ── Sidebar / Header ── */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <ProfileImage src={profile.profileImage} alt={profile.name} />

            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              <a href="/">{profile.name}</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-text-primary sm:text-xl">
              {profile.title}
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              {profile.tagline}
            </p>

            <SectionNav />
          </div>

          <SocialLinks
            email={profile.email}
            githubUrl={profile.githubUrl}
            linkedinUrl={profile.linkedinUrl}
          />
        </header>

        {/* ── Main Content ── */}
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
          {/* About */}
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
          >
            <StickyHeader>
              <h2 className="text-sm font-bold uppercase tracking-widest text-text-primary lg:sr-only">
                About
              </h2>
            </StickyHeader>
            <div>
              {aboutParagraphs.map((text, i) => (
                <p key={i} className="mb-4">
                  {parseMarkdownLinks(text)}
                </p>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
          >
            <StickyHeader>
              <h2 className="text-sm font-bold uppercase tracking-widest text-text-primary lg:sr-only">
                Experience
              </h2>
            </StickyHeader>
            <div>
              <ol className="group/list">
                {experiences.map((exp, i) => (
                  <ExperienceCard key={i} experience={exp} />
                ))}
              </ol>

              <div className="mt-12">
                <a
                  className="group/link inline-flex items-baseline text-base font-semibold leading-tight text-text-primary hover:text-highlight focus-visible:text-highlight"
                  href={profile.resumePath}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="View Full Résumé (opens in a new tab)"
                >
                  <span>
                    View Full{" "}
                    <span className="inline-block">
                      Résumé
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Selected projects"
          >
            <StickyHeader>
              <h2 className="text-sm font-bold uppercase tracking-widest text-text-primary lg:sr-only">
                Projects
              </h2>
            </StickyHeader>
            <div>
              <ul className="group/list">
                {projects.map((proj, i) => (
                  <ProjectCard key={i} project={proj} />
                ))}
              </ul>
            </div>
          </section>

          {/* Footer */}
          <footer className="pb-16 text-sm text-text-secondary sm:pb-0">
            <p>{parseMarkdownLinks(footerText)}</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
