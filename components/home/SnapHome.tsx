"use client";

import { useEffect, useRef, useState } from "react";
import SiteNav from "@/components/SiteNav";
import ChapterDots, { type ChapterMeta } from "./ChapterDots";
import {
  ContactChapter,
  CoverChapter,
  HomeWorksChapter,
  ResumeChapter,
  WorkTeaserChapter,
} from "./Chapters";

const chapters: ChapterMeta[] = [
  { id: "c0", label: "首页" },
  { id: "c1", label: "履历" },
  { id: "c2", label: "项目经验" },
  { id: "c3", label: "个人作品" },
  { id: "c4", label: "联系方式" },
];

export default function SnapHome() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = chapters.findIndex((c) => c.id === entry.target.id);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { root: container, rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    chapters.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollToIndex = (idx: number) => {
      const container = containerRef.current;
      const clamped = Math.max(0, Math.min(chapters.length - 1, idx));
      const el = document.getElementById(chapters[clamped].id);
      if (!container || !el) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      container.scrollTo({ top: el.offsetTop, behavior: reduce ? "auto" : "smooth" });
    };

    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT", "A", "BUTTON"].includes(target.tagName)) {
        return;
      }
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        scrollToIndex(active + 1);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        scrollToIndex(active - 1);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <SiteNav />
      <ChapterDots chapters={chapters} active={active} containerRef={containerRef} />
      <main
        ref={containerRef}
        className="snap-container relative h-[100svh] overflow-y-scroll overflow-x-hidden"
      >
        <CoverChapter />
        <ResumeChapter />
        <WorkTeaserChapter />
        <HomeWorksChapter />
        <ContactChapter />
      </main>
    </>
  );
}
