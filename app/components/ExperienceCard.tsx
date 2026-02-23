import type { Experience } from "@/app/data/portfolio";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { startDate, endDate, title, company, location, url, description, skills } =
    experience;

  const dateLabel = endDate ? `${startDate} — ${endDate}` : startDate;

  const CompanyContent = (
    <span className="inline-block">
      {company}
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
  );

  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text-secondary sm:col-span-2"
          aria-label={dateLabel}
        >
          {dateLabel}
        </header>

        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-text-primary">
            <div className="text-base font-medium leading-tight">{title}</div>
            <div className="mt-0.5">
              <a
                className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-text-primary hover:text-highlight focus-visible:text-highlight"
                href={url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${company} (opens in a new tab)`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                {CompanyContent}
              </a>
            </div>
          </h3>

          {location && (
            <p className="mt-0.5 text-xs text-text-secondary">{location}</p>
          )}

          <p className="mt-2 text-sm leading-normal">{description}</p>

          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {skills.map((skill) => (
              <li key={skill} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-highlight-bg px-3 py-1 text-xs font-medium leading-5 text-highlight">
                  {skill}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
