"use client";

import { useRef, useState, useEffect } from "react";

export default function StickyHeader({ children }: { children: React.ReactNode }) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="h-0 w-0" aria-hidden="true" />
      <div
        className={`sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 transition-[background-color,backdrop-filter] duration-200 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ${
          isStuck ? "bg-background/75 backdrop-blur" : ""
        }`}
      >
        {children}
      </div>
    </>
  );
}
