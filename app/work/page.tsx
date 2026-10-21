import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "作品",
  description: "精选产品案例：Agent 工作流、BI 智能化与 AI side project。",
};

const accentBg: Record<string, string> = {
  yellow: "bg-brand",
  blue: "bg-electric text-paper",
  green: "bg-neon",
};

export default function WorkPage() {
  const [featured, ...rest] = projects;

  return (
    <>
      <SiteNav />
      <main className="bg-paper">
        <PageHeader
          en="WORK"
          zh="作品"
          accent="bg-brand"
          intro="3 个项目，覆盖 Agent 工作流、数据智能化与个人实践。每个案例都讲清问题、决策、评估与结果。"
        />

        <div className="mx-auto max-w-[1120px] px-6 py-12">
          {/* Featured 大卡 */}
          <Link
            href={`/projects/${featured.slug}`}
            className="group grid gap-0 border-[4px] border-ink bg-brand shadow-brutal-lg transition-all hover:-translate-x-1 hover:-translate-y-1 lg:grid-cols-2"
          >
            <div className="flex min-h-64 items-center justify-center border-b-[4px] border-ink lg:border-b-0 lg:border-r-[4px]">
              <span className="font-mono text-sm tracking-[0.2em] text-ink/50">
                FEATURED PROJECT SHOT
              </span>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3">
                <span className="border-[2.5px] border-ink bg-card px-2 py-0.5 text-[11px] font-bold uppercase">
                  {featured.category}
                </span>
                <span className="font-mono text-xs font-bold">FEATURED</span>
              </div>
              <h2 className="mt-4 font-display text-2xl leading-tight sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-lg font-bold">{featured.outcome}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">
                {featured.problem}
              </p>
              <p className="mt-4 font-mono text-[11px] font-bold text-ink/60">
                {featured.role}
              </p>
              <span className="mt-5 inline-block border-[2.5px] border-ink bg-ink px-4 py-2 text-sm font-bold uppercase text-paper">
                阅读案例 →
              </span>
            </div>
          </Link>

          {/* 标准案例卡 */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group flex flex-col border-[3px] border-ink bg-card p-7 shadow-brutal transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg"
              >
                <span
                  className={`w-fit border-[2.5px] border-ink px-2 py-0.5 text-[11px] font-bold uppercase ${accentBg[p.accent]}`}
                >
                  {p.category}
                </span>
                <h3 className="mt-4 text-2xl font-bold leading-snug group-hover:underline">
                  {p.title}
                </h3>
                <p className="mt-2 text-base font-bold">{p.outcome}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {p.problem}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.aiPoints.map((ap) => (
                    <span
                      key={ap}
                      className="border-2 border-ink bg-paper px-2 py-0.5 text-[11px] font-bold"
                    >
                      {ap}
                    </span>
                  ))}
                </div>
                <span className="mt-5 text-sm font-bold underline underline-offset-4">
                  阅读案例 →
                </span>
              </Link>
            ))}
          </div>

          {/* 更多实践 */}
          <div className="mt-12 border-[3px] border-ink bg-card p-7 shadow-brutal">
            <p className="font-mono text-xs font-bold tracking-[0.2em] text-ink/60">
              MORE
            </p>
            <h3 className="mt-2 text-xl font-bold">更多实践（占位，待补充）</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {["产品拆解文章", "Prompt 库", "Demo 集合"].map((m) => (
                <span
                  key={m}
                  className="border-[2.5px] border-ink bg-paper px-3 py-1.5 text-sm font-bold"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
