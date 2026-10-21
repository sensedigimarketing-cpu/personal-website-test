import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BrutalButton from "@/components/BrutalButton";
import { aboutLong, interests, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "关于",
  description: "我的产品路径、方法论信念，以及摄影、篮球、影视。",
};

const galleryFills = [
  "bg-hotpink",
  "bg-grape",
  "bg-brand",
  "bg-electric",
  "bg-neon",
  "bg-flame",
  "bg-hotpink",
  "bg-brand",
  "bg-grape",
];

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-paper">
        <PageHeader
          en="ABOUT"
          zh="关于我"
          accent="bg-hotpink"
          intro="在证据之外，补完一个完整的人：路径选择、相信什么，以及工作之外如何获得能量。"
        />

        <div className="mx-auto max-w-[1120px] px-6 py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            {/* 长文 */}
            <div className="flex flex-col gap-8">
              {aboutLong.map((s, i) => (
                <section key={s.heading} className="border-[3px] border-ink bg-card p-7 shadow-brutal">
                  <h2 className="font-display text-xl sm:text-2xl">
                    <span className="bg-brand px-1.5">0{i + 1}</span> {s.heading}
                  </h2>
                  <p className="mt-4 max-w-prose text-[15px] leading-[1.9] text-ink/85">
                    {s.body}
                  </p>
                </section>
              ))}
            </div>

            {/* 侧栏：头像位 + 兴趣卡 */}
            <aside className="flex flex-col gap-5">
              <div className="flex h-72 items-center justify-center border-[4px] border-ink bg-brand shadow-brutal-lg">
                <span className="font-display text-lg uppercase tracking-widest">
                  头像位
                </span>
              </div>
              {interests.map((it) => {
                const bg =
                  it.accent === "pink"
                    ? "bg-hotpink"
                    : it.accent === "purple"
                      ? "bg-grape text-paper"
                      : "bg-brand";
                return (
                  <div
                    key={it.title}
                    className={`border-[3px] border-ink p-5 shadow-brutal ${bg}`}
                  >
                    <h3 className="text-lg font-bold">{it.title}</h3>
                    <p className="mt-1 text-sm font-medium">{it.desc}</p>
                  </div>
                );
              })}
            </aside>
          </div>

          {/* 摄影画廊 */}
          <h2 className="mt-16 font-display text-2xl sm:text-3xl">摄影画廊</h2>
          <p className="mt-2 text-sm text-ink/60">
            原型阶段以色块占位，上线前替换为压缩后的真实作品（建议 3:4 或 1:1）。
          </p>
          <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3">
            {Array.from({ length: 9 }, (_, i) => i).map((i) => (
              <div
                key={i}
                className={`flex aspect-[3/4] items-end justify-center border-[3px] border-ink p-3 shadow-brutal ${galleryFills[i]} ${
                  i % 3 === 0 ? "-rotate-1" : i % 3 === 1 ? "rotate-1" : ""
                }`}
              >
                <span className="border-2 border-ink bg-card px-1.5 py-0.5 font-mono text-[10px] font-bold">
                  PHOTO 0{(i % 6) + 1}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <BrutalButton href="/contact" size="lg">
              联系我 →
            </BrutalButton>
            <BrutalButton href={profile.resumeUrl} variant="white" size="lg">
              下载简历 ↓
            </BrutalButton>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
