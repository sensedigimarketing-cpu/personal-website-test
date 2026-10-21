import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project?.title ?? "案例",
    description: project?.outcome,
  };
}

const toc = [
  { id: "overview", label: "概览" },
  { id: "problem", label: "问题" },
  { id: "approach", label: "决策" },
  { id: "evals", label: "评估" },
  { id: "outcome", label: "结果" },
  { id: "learnings", label: "反思" },
];

const accentBlock: Record<string, string> = {
  yellow: "bg-brand",
  blue: "bg-electric text-paper",
  green: "bg-neon",
};

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const p = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <SiteNav />
      <main className="bg-paper pt-16">
        {/* 案例头 */}
        <section className="border-b-[3px] border-ink">
          <div className="mx-auto max-w-[1120px] px-6 py-12">
            <Link
              href="/work"
              className="inline-flex items-center border-[2.5px] border-ink bg-card px-3 py-1 font-mono text-[11px] font-bold shadow-brutal-sm transition-all hover:-translate-y-0.5 hover:shadow-brutal"
            >
              ← 返回作品
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span
                className={`border-[2.5px] border-ink px-2 py-0.5 text-[11px] font-bold uppercase ${accentBlock[p.accent]}`}
              >
                {p.category}
              </span>
              <span className="font-mono text-xs font-bold text-ink/60">
                CASE {p.index}
              </span>
              {p.tools.map((t) => (
                <span
                  key={t}
                  className="border-2 border-ink bg-card px-2 py-0.5 text-[11px] font-bold"
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="mt-5 max-w-4xl font-display text-3xl leading-tight tracking-tight sm:text-5xl">
              {p.title}
            </h1>

            <div className="mt-6 border-[3px] border-ink bg-brand p-5 shadow-brutal sm:p-6">
              <p className="font-mono text-[11px] font-bold tracking-[0.2em]">
                OUTCOME
              </p>
              <p className="mt-1 text-xl font-bold sm:text-2xl">{p.outcome}</p>
              <p className="mt-3 text-sm font-medium text-ink/80">{p.role}</p>
            </div>
          </div>
        </section>

        {/* 正文：目录 + 六段 */}
        <div className="mx-auto grid max-w-[1120px] gap-10 px-6 py-12 lg:grid-cols-[200px_1fr]">
          <aside className="hidden lg:block">
            <nav className="sticky top-24 flex flex-col gap-1">
              {toc.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className="border-l-[3px] border-ink/20 px-3 py-1.5 text-sm font-bold text-ink/60 transition-colors hover:border-ink hover:bg-brand hover:text-ink"
                >
                  {t.label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="flex flex-col gap-8">
            <section id="overview" className="scroll-mt-24">
              <h2 className="font-display text-2xl">01 · 概览</h2>
              <div className="mt-3 border-[3px] border-ink bg-card p-6 shadow-brutal">
                <p className="leading-relaxed">{p.overview}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.aiPoints.map((ap) => (
                    <span
                      key={ap}
                      className="border-2 border-ink bg-brand px-2 py-0.5 text-[11px] font-bold"
                    >
                      {ap}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section id="problem" className="scroll-mt-24">
              <h2 className="font-display text-2xl">02 · 问题</h2>
              <div className="mt-3 border-[3px] border-ink bg-card p-6 shadow-brutal">
                <p className="leading-relaxed">{p.problem}</p>
              </div>
            </section>

            <section id="approach" className="scroll-mt-24">
              <h2 className="font-display text-2xl">03 · 方案与决策</h2>
              <div className="mt-3 flex flex-col gap-4">
                {p.approach.map((step) => (
                  <div
                    key={step.heading}
                    className="border-[3px] border-ink bg-card p-6 shadow-brutal-sm"
                  >
                    <h3 className="font-bold">{step.heading}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/80">
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="evals" className="scroll-mt-24">
              <h2 className="font-display text-2xl">04 · 如何评估</h2>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                {p.evals.map((ev) => (
                  <div
                    key={ev.heading}
                    className="border-[3px] border-ink bg-neon p-6 shadow-brutal-sm"
                  >
                    <h3 className="font-bold">{ev.heading}</h3>
                    <p className="mt-2 text-sm leading-relaxed">{ev.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="outcome" className="scroll-mt-24">
              <h2 className="font-display text-2xl">05 · 结果与产物</h2>
              <div className="mt-3 border-[3px] border-ink bg-card p-6 shadow-brutal">
                <ul className="flex flex-col gap-2">
                  {p.outcomeDetail.map((o) => (
                    <li key={o} className="flex gap-2 text-sm leading-relaxed">
                      <span className="font-bold text-electric">✳</span>
                      {o}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.artifacts.map((a) => (
                    <span
                      key={a}
                      className="border-[2.5px] border-ink bg-paper px-3 py-1.5 text-xs font-bold"
                    >
                      📎 {a}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section id="learnings" className="scroll-mt-24">
              <h2 className="font-display text-2xl">06 · 反思</h2>
              <div className="mt-3 space-y-3">
                {p.learnings.map((l) => (
                  <blockquote
                    key={l}
                    className="border-l-[6px] border-ink bg-brand px-5 py-4 text-base font-medium leading-relaxed"
                  >
                    {l}
                  </blockquote>
                ))}
              </div>
            </section>

            {/* 上下案例 */}
            <div className="mt-4 grid gap-4 border-t-[3px] border-ink pt-8 sm:grid-cols-2">
              <Link
                href={`/projects/${prev.slug}`}
                className="border-[3px] border-ink bg-card p-5 shadow-brutal-sm transition-all hover:-translate-y-0.5 hover:shadow-brutal"
              >
                <p className="font-mono text-[11px] font-bold text-ink/50">
                  ← 上一个
                </p>
                <p className="mt-1 font-bold">{prev.title}</p>
              </Link>
              <Link
                href={`/projects/${next.slug}`}
                className="border-[3px] border-ink bg-card p-5 text-right shadow-brutal-sm transition-all hover:-translate-y-0.5 hover:shadow-brutal"
              >
                <p className="font-mono text-[11px] font-bold text-ink/50">
                  下一个 →
                </p>
                <p className="mt-1 font-bold">{next.title}</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
