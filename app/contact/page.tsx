import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "联系",
  description: "邮箱、社媒与简历，欢迎交流 AI 产品与合作机会。",
};

const channels = [
  { label: "发邮件", value: profile.email, href: `mailto:${profile.email}`, bg: "bg-brand" },
  ...profile.socials.map((s, i) => ({
    label: s.label,
    value: s.href === "#" ? "链接待替换（占位）" : s.href,
    href: s.href,
    bg: i === 0 ? "bg-card" : i === 1 ? "bg-neon" : "bg-grape text-paper",
  })),
];

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-paper">
        <PageHeader
          en="CONTACT"
          zh="联系"
          accent="bg-electric text-paper"
          intro="有 AI 产品问题想聊，或有合适的机会，欢迎通过下面任一渠道找我。"
        />

        <div className="mx-auto max-w-[1120px] px-6 py-12">
          <div className="mb-8 inline-flex items-center border-[2.5px] border-ink bg-neon px-3 py-1.5 text-xs font-bold uppercase shadow-brutal-sm">
            ● 开放交流 / 看机会中（示例状态）
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`group border-[3px] border-ink p-7 shadow-brutal transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg active:translate-x-0 active:translate-y-0 active:shadow-none ${c.bg}`}
              >
                <p className="font-mono text-[11px] font-bold tracking-[0.2em] opacity-70">
                  CHANNEL
                </p>
                <p className="mt-2 font-display text-2xl">{c.label} →</p>
                <p className="mt-2 break-all text-sm font-medium">{c.value}</p>
              </a>
            ))}

            <div className="border-[3px] border-ink bg-card p-7 shadow-brutal">
              <p className="font-mono text-[11px] font-bold tracking-[0.2em] opacity-70">
                WECHAT
              </p>
              <div className="mt-4 flex h-36 w-36 items-center justify-center border-[3px] border-ink bg-paper">
                <span className="font-mono text-[10px] text-ink/50">二维码位</span>
              </div>
              <p className="mt-3 text-sm font-bold">{profile.wechat}</p>
            </div>
          </div>

          <a
            href={profile.resumeUrl}
            download
            className="mt-8 inline-flex items-center border-[3px] border-ink bg-ink px-7 py-3.5 text-base font-bold uppercase text-paper shadow-brutal transition-all hover:-translate-y-0.5 hover:shadow-brutal-lg active:shadow-none"
          >
            下载简历 PDF ↓
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
