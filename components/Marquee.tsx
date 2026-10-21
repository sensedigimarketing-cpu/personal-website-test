import { marqueeWords } from "@/lib/data";

export default function Marquee() {
  const sequence = [...marqueeWords, ...marqueeWords];
  return (
    <div className="marquee-paused relative overflow-hidden border-y-[3px] border-ink bg-ink py-2.5">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap pr-8">
        {sequence.map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-mono text-sm font-bold tracking-[0.2em] text-brand">
              {w}
            </span>
            <span aria-hidden className="text-brand">
              ✳
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
