import Link from "next/link";
import BrutalButton from "@/components/BrutalButton";
import StickerTag from "@/components/StickerTag";
import Marquee from "@/components/Marquee";
import { education, experiences, homeWorks, photoSlots, profile, projects } from "@/lib/data";

const sectionBase =
  "chapter relative flex min-h-[100svh] flex-col justify-center px-5 pt-24 pb-20 sm:px-8 lg:h-[100svh] lg:min-h-0 lg:px-12";

function ChapterHead({
  index,
  en,
  zh,
  dark = false,
}: {
  index: string;
  en: string;
  zh: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-8 lg:mb-10">
      <p
        className={`font-mono text-xs font-bold tracking-[0.25em] ${
          dark ? "text-brand" : "text-ink/70"
        }`}
      >
        {index} / {en}
      </p>
      <h2 className="mt-2 font-display text-3xl uppercase tracking-tight sm:text-4xl lg:text-5xl">
        {zh}
      </h2>
    </div>
  );
}

const chipAccent: Record<string, string> = {
  yellow: "bg-brand",
  blue: "bg-electric text-paper",
  green: "bg-neon",
  pink: "bg-hotpink",
  purple: "bg-grape text-paper",
};

function buildGeneratedImageUrl(prompt: string) {
  return `https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt
  )}&image_size=square_hd`;
}

export function CoverChapter() {
  return (
    <section id="c0" className={`${sectionBase} paper-grid bg-paper`}>
      <div className="mx-auto grid w-full max-w-chapter items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="font-mono text-xs font-bold tracking-[0.2em] text-ink/70 sm:text-sm">
            PRODUCT MANAGER · DATA PLATFORM → AI AGENT
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            你好，我是
            <br />
            <span className="inline-block border-[3px] border-ink bg-brand px-2 shadow-brutal">
              {profile.name}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed sm:text-xl">
            {profile.roleLine}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {profile.signals.map((s, i) => (
              <StickerTag
                key={s}
                accent={(["yellow", "blue", "green"] as const)[i]}
                rotate={i === 1}
              >
                {s}
              </StickerTag>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <BrutalButton href="/contact" variant="white" size="lg">
              联系我
            </BrutalButton>
          </div>
        </div>

        <div className="hidden justify-center lg:flex">
          <div className="relative">
            <div className="-rotate-2 overflow-hidden border-[4px] border-ink bg-brand shadow-brutal-lg">
              <img
                src="/avatar-pan.png"
                alt="Pan 头像"
                className="block h-72 w-56 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-8 rotate-3 border-[3px] border-ink bg-neon px-3 py-2 font-mono text-xs font-bold shadow-brutal">
              PAN / PM
            </div>
            <div
              aria-hidden
              className="absolute -right-6 -top-6 h-10 w-10 rotate-12 border-[3px] border-ink bg-hotpink shadow-brutal-sm"
            />
          </div>
        </div>
      </div>

      <a
        href="#c1"
        className="absolute bottom-16 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 border-[2.5px] border-ink bg-card px-4 py-1.5 font-mono text-xs font-bold tracking-[0.2em] shadow-brutal-sm md:inline-flex"
      >
        SCROLL ↓
      </a>
      <div className="absolute inset-x-0 bottom-0">
        <Marquee />
      </div>
    </section>
  );
}

export function ResumeChapter() {
  return (
    <section id="c1" className={`${sectionBase} bg-paper`}>
      <div className="mx-auto w-full max-w-chapter">
        <ChapterHead index="01" en="RESUME" zh="个人履历" />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_1.35fr]">
          <div className="border-[3px] border-ink bg-card p-6 shadow-brutal">
            <p className="font-mono text-xs font-bold tracking-[0.2em] text-ink/60">
              EDUCATION
            </p>
            <div className="mt-5 space-y-4">
              <div className="border-[2.5px] border-ink bg-brand p-4 shadow-brutal-sm">
                <p className="text-base font-bold">
                  {education.degree} · {education.school}
                </p>
              </div>
              <div className="border-[2.5px] border-ink bg-card p-4 shadow-brutal-sm">
                <p className="text-base font-bold">{education.highlights}</p>
              </div>
            </div>
          </div>

          <div className="border-[3px] border-ink bg-card shadow-brutal">
            <div className="border-b-[3px] border-ink px-5 py-4 sm:px-7">
              <p className="font-mono text-xs font-bold tracking-[0.2em] text-ink/60">
                EXPERIENCE
              </p>
            </div>
            {experiences.map((e) => (
              <div
                key={e.period}
                className="border-b-[3px] border-ink px-5 py-4 last:border-b-0 sm:px-7"
              >
                <p className="text-base font-bold leading-relaxed">
                  {e.period} {e.company}，{e.role}，{e.achievement}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <BrutalButton href="/path" variant="white">
            查看更多
          </BrutalButton>
        </div>
      </div>
    </section>
  );
}

export function WorkTeaserChapter() {
  return (
    <section id="c2" className={`${sectionBase} bg-brand`}>
      <div className="mx-auto w-full max-w-chapter">
        <ChapterHead index="02" en="PROJECTS" zh="项目经验" />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group flex flex-col border-[3px] border-ink bg-card p-5 shadow-brutal transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`border-2 border-ink px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${chipAccent[p.accent]}`}
                >
                  {p.category}
                </span>
                <span className="font-mono text-xs font-bold text-ink/50">
                  {p.index}
                </span>
              </div>

              <div className="my-4 flex h-28 items-center justify-center border-[2.5px] border-ink bg-paper">
                <img
                  src={buildGeneratedImageUrl(p.imagePrompt)}
                  alt={`${p.title} 项目封面`}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-lg font-bold leading-snug group-hover:underline">
                {p.title}
              </h3>
              <p className="mt-2 text-sm font-bold leading-relaxed">{p.outcome}</p>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/70">
                {p.problem}
              </p>
              <span className="mt-4 text-sm font-bold underline underline-offset-4">
                阅读案例 →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <BrutalButton href="/work" variant="dark">
            查看更多
          </BrutalButton>
        </div>
      </div>
    </section>
  );
}

export function HomeWorksChapter() {
  return (
    <section id="c3" className={`${sectionBase} overflow-hidden bg-card`}>
      <div className="mx-auto w-full max-w-chapter">
        <ChapterHead index="03" en="WORKS" zh="个人作品" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homeWorks.map((item, i) => (
            <div
              key={item.title}
              className={`group flex min-h-56 flex-col justify-between border-[3px] border-ink p-5 shadow-brutal transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg ${chipAccent[item.accent]}`}
            >
              <div className="flex items-center justify-between">
                <span className="border-2 border-ink bg-card px-2 py-0.5 text-[10px] font-bold uppercase">
                  {item.type}
                </span>
                <span className="font-mono text-xs font-bold opacity-60">
                  0{i + 1}
                </span>
              </div>
              <div className="my-5 flex h-24 items-center justify-center border-[2.5px] border-ink bg-paper">
                <span className="font-mono text-[11px] tracking-[0.2em] text-ink/50">
                  {i < 3 ? photoSlots[i] : "WORK CARD"}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <BrutalButton href="/about" variant="white">
            查看更多
          </BrutalButton>
        </div>
      </div>
    </section>
  );
}

export function ContactChapter() {
  return (
    <section id="c4" className={`${sectionBase} bg-ink text-paper`}>
      <div className="mx-auto flex w-full max-w-chapter flex-col items-center text-center">
        <p className="font-mono text-xs font-bold tracking-[0.25em] text-brand">
          04 / CONTACT
        </p>
        <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-6xl">
          联系方式
        </h2>

        <div className="mt-10 flex h-48 w-48 items-center justify-center border-[4px] border-paper bg-card text-ink shadow-brutal-white-lg sm:h-52 sm:w-52">
          <span className="font-mono text-sm font-bold tracking-[0.2em]">
            QR CODE
          </span>
        </div>

        <p className="mt-4 text-sm text-paper/70">{profile.wechat}</p>
      </div>
    </section>
  );
}
