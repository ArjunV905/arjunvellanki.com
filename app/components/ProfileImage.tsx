"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const IMAGE_SIZE = 96;                              // profile picture size (in pixels)
const GLOW_RADIUS = 150;                            // glow radius (in pixels)
const OUTLINE_OFFSET = 10;                          // line offset from the image
const BASE_COLOR = "rgba(226, 232, 240, 0.25)";    // line color
const GLOW_COLOR = "#4ec1b3";                       // bright outline near cursor on the line color
const BORDER_WIDTH = 2;                             // line thickness

export default function ProfileImage({ src, alt }: { src: string; alt: string }) {
  const size = IMAGE_SIZE;
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outline = outlineRef.current;
    if (!outline) return;

    function onMouseMove(e: MouseEvent) {
      const rect = outline!.getBoundingClientRect();
      outline!.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      outline!.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const maskGradient = `radial-gradient(circle ${GLOW_RADIUS}px at var(--mx, -200px) var(--my, -200px), white 20%, transparent)`;

  return (
    <div
      className="relative mb-4"
      style={{ width: size + OUTLINE_OFFSET, height: size + OUTLINE_OFFSET }}
    >
      <div
        className="absolute inset-0 rounded-sm"
        style={{
          top: OUTLINE_OFFSET,
          left: OUTLINE_OFFSET,
          width: size,
          height: size,
          borderWidth: BORDER_WIDTH,
          borderStyle: "solid",
          borderColor: BASE_COLOR,
        }}
      />
      <div
        ref={outlineRef}
        className="absolute inset-0 rounded-sm"
        style={{
          top: OUTLINE_OFFSET,
          left: OUTLINE_OFFSET,
          width: size,
          height: size,
          borderWidth: BORDER_WIDTH,
          borderStyle: "solid",
          borderColor: GLOW_COLOR,
          maskImage: maskGradient,
          WebkitMaskImage: maskGradient,
        }}
      />
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="relative z-10 rounded-sm object-cover"
        style={{ width: size, height: size }}
        priority
      />
    </div>
  );
}
