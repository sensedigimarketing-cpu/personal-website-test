import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.example.com"),
  title: {
    default: "你的名字 · 产品经理 | 数据平台 × AI Agent",
    template: "%s · 你的名字",
  },
  description:
    "数据平台出身的产品经理，正在把 AI Agent 变成真实可用的产品能力。需求调研、数据分析、产品设计，持续推进 AI 工作流落地。",
  keywords: ["产品经理", "AI Agent", "数据平台", "AI 产品", "作品集"],
  openGraph: {
    title: "你的名字 · 产品经理 | 数据平台 × AI Agent",
    description: "数据平台出身的产品经理，正在把 AI Agent 变成真实可用的产品能力。",
    type: "website",
    locale: "zh_CN",
  },
};

const fontLinks = [
  {
    href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Noto+Sans+SC:wght@400;500;700;900&family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap",
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <head>
        {fontLinks.map((f) => (
          <link key={f.href} rel="stylesheet" href={f.href} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
