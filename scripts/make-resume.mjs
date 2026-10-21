// 生成一个最小合法 PDF 作为简历占位文件（public/resume.pdf）
// 上线前用真实简历 PDF 覆盖 public/resume.pdf 即可，无需再运行本脚本。
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const outPath = "public/resume.pdf";

const lines = [
  "RESUME PLACEHOLDER",
  "Replace public/resume.pdf with your real resume PDF.",
  "",
  "Name: YOUR NAME",
  "Role: Product Manager - Data Platform x AI Agent",
  "Email: your.name@example.com",
];

let contentStream = "BT /F1 24 Tf 72 760 Td 18 TL\n";
lines.forEach((line, i) => {
  const size = i === 0 ? 24 : 13;
  const escaped = line.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  contentStream += i === 0 ? `(${escaped}) Tj T*\n` : `/F2 ${size} Tf (${escaped}) Tj T*\n`;
});
contentStream += "ET";

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>",
  `<< /Length ${Buffer.byteLength(contentStream)} >>\nstream\n${contentStream}\nendstream`,
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
];

let pdf = "%PDF-1.4\n";
const offsets = [];
objects.forEach((body, i) => {
  offsets.push(Buffer.byteLength(pdf));
  pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
});

const xrefStart = Buffer.byteLength(pdf);
const count = objects.length + 1;
pdf += `xref\n0 ${count}\n0000000000 65535 f \n`;
offsets.forEach((off) => {
  pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
});
pdf += `trailer\n<< /Size ${count} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, pdf, "latin1");
console.log(`✓ generated ${outPath}`);
