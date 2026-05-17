# GeeksCAT Conf 2026 — Web

Official website for GeeksCAT Conf 2026, the geeks' conference for geeks in Catalonia.

## Stack

- [Astro](https://astro.build) v6 (SSG) + TypeScript strict
- [Tailwind CSS](https://tailwindcss.com) v4 via `@tailwindcss/vite`
- [Biome](https://biomejs.dev) for lint + format
- pnpm + Node 22 LTS

## Dev

```sh
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # SSG → dist/
pnpm preview   # serve dist/
pnpm check     # Astro type check + Biome
```

## Deploy

Cloudflare Pages — build command `pnpm build`, output directory `dist/`, Node version `22`.

Canonical domain: `2026.geekscat.org` · Alias: `2026.geeks.cat`
