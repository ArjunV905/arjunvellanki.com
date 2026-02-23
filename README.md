<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/ArjunV905/arjunvellanki.com/main/public/images/logo.png" width="100" height="100" />
</div>
<h1 align="center">
  arjunvellanki.com
</h1>
<p align="center">
  A portfolio website hosted at <a href="https://arjunvellanki.com" target="_blank">arjunvellanki.com</a>, built with <a href="https://nextjs.org/" target="_blank">Next.js</a>, React, and Tailwind CSS, and deployed on <a href="https://vercel.com/" target="_blank">Vercel</a>.
</p>

![demo](https://raw.githubusercontent.com/ArjunV905/arjunvellanki.com/main/public/images/projects/arjunvellanki-com2.jpg)

## Installation & Set Up

1. Install dependencies

   ```sh
   npm install
   ```

2. Start the development server (runs on [localhost:3000](http://localhost:3000))

   ```sh
   npm run dev
   ```

3. Generate a full static production build

   ```sh
   npx next build
   ```

## How to Edit Content

All portfolio content is centralized in **`app/data/portfolio.ts`**. Edit the exported objects and arrays there — the site renders dynamically from them.

### `profile`

Site-wide identity and links.

| Field          | Type     | Description                                      |
| -------------- | -------- | ------------------------------------------------ |
| `name`         | `string` | Your full name (shown in sidebar heading)        |
| `title`        | `string` | Job title / role                                 |
| `tagline`      | `string` | Short one-liner under your title                 |
| `githubUrl`    | `string` | GitHub profile URL                               |
| `email`        | `string` | Email address (used for mailto: link)            |
| `linkedinUrl`  | `string` | LinkedIn profile URL                             |
| `resumePath`   | `string` | Path to resume PDF (e.g. `"/resume.pdf"`)        |
| `profileImage` | `string` | Path to profile photo (e.g. `"/images/profile.jpg"`) |

### `aboutParagraphs`

An array of strings. Each string becomes a `<p>` element in the About section. Add or remove entries as needed. Supports markdown-style links via `[text](url)` syntax.

```ts
export const aboutParagraphs: string[] = [
  "First paragraph with a link to [My Company](https://example.com).",
  "Second paragraph with more detail.",
];
```

### `footerText`

A single string rendered at the bottom of the page. Supports `[text](url)` markdown links.

```ts
export const footerText =
  "Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/), deployed with [Vercel](https://vercel.com/).";
```

### `experiences`

An array of `Experience` objects rendered in the Experience section. Items appear in array order.

| Field       | Type       | Required | Description                                          |
| ----------- | ---------- | -------- | ---------------------------------------------------- |
| `startDate` | `string`   | Yes      | Start date text (e.g. `"2024"`, `"July 2022"`)      |
| `endDate`   | `string`   | No       | End date text (e.g. `"Present"`, `"2024"`). If omitted, only startDate is shown. |
| `title`     | `string`   | Yes      | Job title                                            |
| `company`   | `string`   | Yes      | Company name                                         |
| `location`  | `string`   | No       | Location (shown below the title if provided)         |
| `url`       | `string`   | No       | Company/role URL. If provided, the card links to it and shows an arrow icon. If omitted, no link or arrow. |
| `description` | `string` | Yes      | Role description / responsibilities                  |
| `skills`    | `string[]` | Yes      | Tech/skill tags shown as pills                       |

**Example:**

```ts
{
  startDate: "2024",
  endDate: "Present",
  title: "Software Engineer",
  company: "Company Name",
  location: "Washington, DC",
  url: "https://example.com",
  description: "Led development of customer-facing web applications...",
  skills: ["TypeScript", "React", "Next.js"],
}
```

### `projects`

An array of `Project` objects rendered in the Projects section.

| Field         | Type       | Required | Description                                          |
| ------------- | ---------- | -------- | ---------------------------------------------------- |
| `title`       | `string`   | Yes      | Project name                                         |
| `description` | `string`   | Yes      | Short project description                            |
| `url`         | `string`   | No       | Project URL. If provided, the card links to it and shows an arrow icon. If omitted, no link or arrow. |
| `image`       | `string`   | No       | Path to thumbnail (e.g. `"/images/projects/myapp.png"`). If omitted, no image is shown and the text spans full width. |
| `skills`      | `string[]` | Yes      | Tech tags shown as pills                             |

**Example:**

```ts
{
  title: "App name",
  description: "A web app that does something.",
  url: "https://exampleapp.com",
  image: "/images/projects/exampleapp.png",
  skills: ["React", "Node.js", "MongoDB"],
}
```

## Project Architecture

```
app/
├── globals.css              # Tailwind v4 theme (color palette, fonts, transitions)
├── layout.tsx               # Root layout (Inter font, metadata, theme-color)
├── page.tsx                 # Main single-page layout (sidebar + content sections)
├── components/
│   ├── SectionNav.tsx       # Sidebar nav with IntersectionObserver active tracking
│   ├── SocialLinks.tsx      # GitHub, LinkedIn & Email icon links
│   ├── ExperienceCard.tsx   # Single experience item (date, title, description, skills)
│   └── ProjectCard.tsx      # Single project item (thumbnail, title, description, skills)
├── data/
│   └── portfolio.ts         # All portfolio content lives here (see below)
└── utils/
    └── parseMarkdownLinks.tsx  # Parses [text](url) syntax into styled React links

public/
├── images/
│   ├── profile.jpg          # Profile photo (replace with your own image)
│   └── projects/            # Project thumbnail images
│       └── placeholder.svg
└── resume.pdf               # Place your resume PDF here
```

**Layout overview:** On desktop (`lg`+), the page is a two-column flex layout. The left column is a sticky sidebar with your photo, name, title, section nav, and social links. The right column scrolls through About, Experience, and Projects sections followed by a footer. On mobile, the sidebar collapses to the top (no longer sticky, nav hidden), and each section gets its own sticky frosted-glass header label.


## Color Palette

| Token            | Hex       | Usage                                |
| ---------------- | --------- | ------------------------------------ |
| `background`     | `#0f172a` | Page background                      |
| `text-primary`   | `#e2e8f0` | Headings, names, hyperlinks          |
| `text-secondary` | `#8492a7` | Body text, dates, secondary labels   |
| `highlight-bg`   | `#122b39` | Skill pill background                |
| `highlight`      | `#4ec1b3` | Accent color (hover states, pills)   |

Colors are defined as Tailwind v4 theme tokens in `app/globals.css` and used throughout via classes like `text-text-primary`, `bg-highlight-bg`, etc.
