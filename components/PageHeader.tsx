import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  en: string;
  zh: string;
  intro?: ReactNode;
  accent?: string;
  action?: ReactNode;
}

export default function PageHeader({ en, zh, intro, accent = "bg-brand", action }: Props) {
  return (
    <section className="border-b-[3px] border-ink bg-paper pt-24">
      <div className="mx-auto max-w-[1120px] px-6 py-12 lg:py-16">
        <Link
          href="/"
          className="inline-flex items-center border-[2.5px] border-ink bg-card px-3 py-1 font-mono text-[11px] font-bold shadow-brutal-sm transition-all hover:-translate-y-0.5 hover:shadow-brutal"
        >
          ← 返回首页
        </Link>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.25em] text-ink/60">
              {en}
            </p>
            <h1 className="mt-2 inline-block font-display text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              <span className={`${accent} px-2`}>{zh}</span>
            </h1>
            {intro && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/75">
                {intro}
              </p>
            )}
          </div>
          {action}
        </div>
      </div>
    </section>
  );
}
