import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center bg-paper px-6 text-center">
      <p className="font-display text-7xl sm:text-9xl">404</p>
      <div className="mt-4 -rotate-1 border-[3px] border-ink bg-brand px-4 py-2 shadow-brutal">
        <p className="font-bold">这一页不存在，就像没做过调研的需求。</p>
      </div>
      <Link
        href="/"
        className="mt-8 inline-flex border-[3px] border-ink bg-ink px-6 py-3 font-bold uppercase text-paper shadow-brutal transition-all hover:-translate-y-0.5 hover:shadow-brutal-lg"
      >
        ← 回到首页
      </Link>
    </main>
  );
}
