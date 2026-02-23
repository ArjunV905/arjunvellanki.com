import { ReactNode } from "react";

/**
 * Parses markdown-style links in a string and returns React elements.
 * Supports the pattern: [link text](url)
 */
export function parseMarkdownLinks(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(
      <a
        key={match.index}
        className="font-medium text-text-primary hover:text-highlight focus-visible:text-highlight transition-colors"
        href={match[2]}
        target="_blank"
        rel="noreferrer noopener"
      >
        {match[1]}
      </a>
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}
