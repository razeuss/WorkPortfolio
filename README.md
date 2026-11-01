# Portfolio starter — Attio-inspired (light)

Structure and design system only. All text is placeholder (`[...]`) and lives in `/content`.

## Run
```bash
npm install
npm run dev     # http://localhost:3000
```
Deploy: push to GitHub → import in Vercel.

## Where things are
- `app/globals.css` — design tokens (colors, fonts, animations). Change the look here.
- `content/` — every piece of copy: `site.ts`, `projects.ts`, `experience.ts`, `stack.ts`, `process.ts`.
- `components/layout/Section.tsx` — the framed section with rail lines + corner markers.
- `components/canvas/FlowCanvas.tsx` — the Attio-style node diagram (case-study architecture).
- `components/sections/` — one file per homepage section.
- `app/work/[slug]/page.tsx` — case-study template.

## Next steps
1. Replace placeholders in `/content`.
2. Add project videos/posters to `public/projects/<slug>/` and set `video` / `poster` in `content/projects.ts`.
3. Add `public/resume.pdf`, your photo in `About.tsx`, and real logos in `content/stack.ts`.
