# 个人品牌主页（Neo-Brutalism）

新粗野主义风格的产品经理个人主页：首页为 7 屏整屏滑动封面，深度内容由独立 Tab 页承载。

- 技术栈：Next.js 15 (App Router) + TypeScript + Tailwind CSS v3，零额外 UI 依赖
- 首页：CSS scroll-snap 整屏滑动（桌面强制吸附 / 移动与矮屏降级自然滚动），含章节指示点、键盘导航、跑马灯
- 子页：`/work`、`/projects/[slug]`、`/path`、`/about`、`/contact`

## 本地开发

```bash
npm install
npm run dev
# http://localhost:3000
```

构建验证：

```bash
npm run build && npm start
```

## 上线前替换内容（只改一个文件）

所有文案集中在 `lib/data.ts`：

- `profile`：姓名、邮箱、社媒、微信
- `projects`：3 个精选项目（结果 / 问题 / 角色 / AI 设计点 / 评估 / 结果 / 反思）
- `metrics`：指标条数字（当前均为示例，必须替换为真实数据）
- `experiences` / `education`：履历与教育
- `artifacts`：脱敏产物；`aboutLong` / `interests`：关于页文案
- 头像与照片：目前为色块贴纸占位，替换为真实压缩图片并加黑色描边
- `public/resume.pdf`：用真实简历覆盖（占位 PDF 由 `npm run resume` 生成）
- `app/layout.tsx`：`metadataBase` 与 SEO 信息替换为真实域名

## 部署到 Vercel

1. 推送本仓库到 GitHub
2. Vercel → Add New Project → 导入仓库，框架自动识别 Next.js，默认配置直接 Deploy
3. Project Settings → Domains 绑定自定义域名
4. 或使用 CLI：

```bash
npm i -g vercel
vercel        # 预览
vercel --prod # 生产
```

## 设计硬约束（验收用）

- 描边只有 2/3/4px 纯黑实线；硬阴影只有 4/6/8px 两档方向右下，零模糊
- 禁止渐变表面、毛玻璃、大圆角、长时浮动动画
- 首页每章必须一屏放得下，章内不允许滚动；移动端走自然滚动分支
