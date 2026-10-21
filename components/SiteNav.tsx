"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/lib/data";

const tabs = [
  { href: "/", label: "首页" },
  { href: "/path", label: "个人履历" },
  { href: "/work", label: "项目经验" },
  { href: "/about", label: "个人作品" },
  { href: "/contact", label: "联系方式" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-[3px] border-ink bg-paper">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-lg tracking-tight hover:bg-brand"
          onClick={() => setOpen(false)}
        >
          {profile.enName}
          <span className="text-flame">.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {tabs.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className={`border-[2.5px] px-3 py-1.5 text-sm font-bold transition-colors ${
                isActive(t.href)
                  ? "border-ink bg-brand text-ink"
                  : "border-transparent text-ink hover:border-ink hover:bg-card"
              }`}
            >
              {t.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="切换菜单"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center border-[2.5px] border-ink bg-brand font-bold shadow-brutal-sm md:hidden"
        >
          <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t-[3px] border-ink bg-paper md:hidden">
          <div className="flex flex-col p-3">
            {tabs.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                onClick={() => setOpen(false)}
                className={`border-[2.5px] px-3 py-3 text-base font-bold ${
                  isActive(t.href)
                    ? "border-ink bg-brand"
                    : "border-transparent hover:border-ink"
                }`}
              >
                {t.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
