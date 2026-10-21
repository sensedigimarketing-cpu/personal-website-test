"use client";

import type { RefObject } from "react";

export interface ChapterMeta {
  id: string;
  label: string;
}

interface Props {
  chapters: ChapterMeta[];
  active: number;
  containerRef: RefObject<HTMLElement | null>;
}

export default function ChapterDots({ chapters, active, containerRef }: Props) {
  const scrollTo = (id: string) => {
    const container = containerRef.current;
    const el = document.getElementById(id);
    if (!container || !el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    container.scrollTo({
      top: el.offsetTop,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      {chapters.map((c, i) => (
        <button
          key={c.id}
          type="button"
          onClick={() => scrollTo(c.id)}
          aria-label={`跳转到第 ${i + 1} 屏：${c.label}`}
          aria-current={active === i}
          className="group/dot flex items-center justify-end gap-2"
        >
          <span
            className={`whitespace-nowrap border-[2px] border-ink bg-card px-2 py-0.5 font-mono text-[10px] font-bold opacity-0 shadow-brutal-sm transition-opacity group-hover/dot:opacity-100 ${
              active === i ? "!opacity-100" : ""
            }`}
          >
            {c.label}
          </span>
          <span
            className={`block h-4 w-4 border-[2.5px] border-ink transition-colors ${
              active === i ? "bg-brand" : "bg-card"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
