import Link from "next/link";
import type { LinkProps } from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "white" | "dark" | "green" | "blue" | "pink";

const base =
  "inline-flex items-center justify-center gap-2 border-[3px] border-ink font-bold tracking-wide select-none " +
  "transition-all duration-150 ease-out " +
  "hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-ink shadow-brutal hover:shadow-brutal-lg active:shadow-none",
  white: "bg-card text-ink shadow-brutal hover:shadow-brutal-lg active:shadow-none",
  dark: "bg-ink text-paper border-ink shadow-brutal hover:shadow-brutal-lg active:shadow-none",
  green: "bg-neon text-ink shadow-brutal hover:shadow-brutal-lg active:shadow-none",
  blue: "bg-electric text-paper shadow-brutal hover:shadow-brutal-lg active:shadow-none",
  pink: "bg-hotpink text-ink shadow-brutal hover:shadow-brutal-lg active:shadow-none",
};

const sizes = {
  sm: "px-4 py-2 text-xs uppercase",
  md: "px-5 py-2.5 text-sm uppercase",
  lg: "px-7 py-3.5 text-base uppercase",
};

interface Props extends LinkProps {
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  external?: boolean;
}

export default function BrutalButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  href,
  ...rest
}: Props) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external && typeof href === "string") {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
