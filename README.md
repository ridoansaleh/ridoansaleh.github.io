# Ridoan Saleh — Portfolio

Personal portfolio website for Ridoan Saleh, built with Next.js, React, TypeScript, and Tailwind CSS. The site is configured as a static export and contains an introduction, professional experience, skills, and a photo gallery.

## Pages

- `/` — introduction, skills, and professional experience
- `/photos/` — photo gallery, maintained in `app/photos/page.tsx`

The site also generates `sitemap.xml`, `robots.txt`, and an Open Graph image route as part of the Next.js app.

## Requirements

- Node.js
- pnpm

Install dependencies and start the local development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

Create the production static export:

```bash
pnpm build
```

The exported site is written to `out/`. Serve that directory with a static web host. The Next.js configuration enables static export, trailing slashes, and unoptimized images for static hosting.

## Updating the portfolio

- Edit the homepage content and experience in `app/page.tsx`.
- Edit site metadata, canonical base URL, and social links in `app/config.ts`.
- Update gallery images and captions in `app/photos/page.tsx`; place image files under `public/photos/`.
- Replace profile, logo, and social preview assets in `public/` as needed.

## Tech stack

- [Next.js](https://nextjs.org/) App Router with static export
- [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Geist](https://vercel.com/font) fonts
- [next-themes](https://github.com/pacocoursey/next-themes) for light and dark themes

