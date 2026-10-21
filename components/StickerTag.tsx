import type { ReactNode } from "react";
import type { Accent } from "@/lib/data";

const fills: Record<Accent, string> = {
  yellow: "bg-brand",
  blue: "bg-electric text-paper",
  green: "bg-neon",
  pink: "bg-hotpink",
  purple: "bg-grape text-paper",
};

const sizes = {
  sm: "px-2.5 py-1 text-[11px]",
  md: "px-3 py-1.5 text-xs",
  lg: "px-4 py-2 text-sm",
};

interface Props {
  children: ReactNode;
  accent?: Accent;
  size?: keyof typeof sizes;
  rotate?: boolean;
  className?: string;
}

export default function StickerTag({
  children,
  accent = "yellow",
  size = "md",
  rotate = false,
  className = "",
}: Props) {
  return (
    <span
      className={`inline-flex items-center border-[2.5px] border-ink font-bold uppercase tracking-wide shadow-brutal-sm ${fills[accent]} ${sizes[size]} ${
        rotate ? "-rotate-2" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
}
