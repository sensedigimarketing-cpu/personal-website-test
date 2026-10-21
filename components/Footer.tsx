import Link from "next/link";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-ink text-paper">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg">{profile.enName}</p>
          <p className="mt-1 text-sm text-paper/70">
            产品经理 · 数据平台 × AI Agent
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-bold">
          <a href={`mailto:${profile.email}`} className="hover:text-brand">
            {profile.email}
          </a>
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand"
            >
              {s.label}
            </a>
          ))}
          <Link href="/" className="border-[2.5px] border-paper px-3 py-1.5 hover:bg-brand hover:text-ink">
            回到首页 ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
