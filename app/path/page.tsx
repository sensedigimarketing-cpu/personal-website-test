import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BrutalButton from "@/components/BrutalButton";
import { experiences, education, metrics, artifacts, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "履历",
  description: "完整职业路径、关键指标与可检视产物，简历下载。",
};

export default function PathPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-paper">
        <PageHeader
          en="PATH"
          zh="履历"
          accent="bg-neon"
          intro="数据平台 → AI Agent 的产品路径。完整简历可下载，产物均已脱敏。"
          action={
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center border-[3px] border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal transition-all hover:-translate-y-0.5 hover:shadow-brutal-lg active:shadow-none"
            >
              下载简历 ↓
            </a>
          }
        />

        <div className="mx-auto max-w-[1120px] px-6 py-12">
          {/* 指标条 */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="border-[3px] border-ink bg-brand px-4 py-5 text-center shadow-brutal"
              >
                <p className="font-display text-3xl sm:text-4xl">{m.value}</p>
                <p className="mt-2 text-[11px] font-bold text-ink/70">{m.label}</p>
              </div>
            ))}
          </div>

          {/* 完整时间线 */}
          <h2 className="mt-14 font-display text-2xl sm:text-3xl">经历</h2>
          <div className="mt-6 border-l-[3px] border-ink pl-6 sm:pl-10">
            {experiences.map((e) => (
              <div key={e.period} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[33px] top-1 h-5 w-5 border-[3px] border-ink bg-flame sm:-left-[49px]" />
                <div className="border-[3px] border-ink bg-card p-6 shadow-brutal">
                  <p className="font-mono text-xs font-bold tracking-wider text-ink/60">
                    {e.period}
                  </p>
                  <h3 className="mt-2 text-lg font-bold">
                    {e.company} ·{" "}
                    <span className="font-medium text-ink/70">{e.role}</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/80">
                    {e.achievement}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="border-2 border-ink bg-paper px-2 py-0.5 text-[11px] font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="relative">
              <span className="absolute -left-[33px] top-1 h-5 w-5 border-[3px] border-ink bg-grape sm:-left-[49px]" />
              <div className="border-[3px] border-ink bg-card p-6 shadow-brutal">
                <p className="font-mono text-xs font-bold tracking-wider text-ink/60">
                  EDUCATION
                </p>
                <h3 className="mt-2 text-lg font-bold">
                  {education.degree} ·{" "}
                  <span className="font-medium text-ink/70">{education.school}</span>
                </h3>
                <p className="mt-2 text-sm text-ink/75">{education.highlights}</p>
              </div>
            </div>
          </div>

          {/* 产物架 */}
          <h2 id="artifacts" className="mt-14 scroll-mt-24 font-display text-2xl sm:text-3xl">
            产物陈列
          </h2>
          <p className="mt-2 text-sm text-ink/60">
            以下均为脱敏样例（原型阶段为占位），点击可查看外链或大图。
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {artifacts.map((a) => (
              <a
                key={a.title}
                href={a.href}
                className="group block border-[3px] border-ink bg-card p-3 shadow-brutal transition-all hover:-translate-y-1 hover:shadow-brutal-lg"
              >
                <div className="flex h-32 items-center justify-center border-[2.5px] border-ink bg-paper">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-ink/50">
                    PREVIEW
                  </span>
                </div>
                <span className="mt-3 inline-block border-2 border-ink bg-brand px-1.5 py-0.5 text-[10px] font-bold">
                  {a.type}
                </span>
                <p className="mt-2 text-sm font-bold group-hover:underline">
                  {a.title}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <BrutalButton href={profile.resumeUrl} variant="dark" size="lg">
              下载简历 PDF ↓
            </BrutalButton>
            <BrutalButton href="/contact" variant="white" size="lg">
              联系我
            </BrutalButton>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
