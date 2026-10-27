# SHASHANK — THE SERIES

A cinematic, streaming-inspired portfolio for **Shashank Singh** — creative developer, designer, and builder. This project preserves the original opening sequence, profile selector, animated project rails, interactive project details, skills, achievements, resume-style profile, and contact section while replacing the original creator's personal content.

## Stack

- React 18 + TypeScript + Vite
- Framer Motion animations
- Lenis smooth scrolling
- Tailwind CSS 4 via Vite
- Original Web Audio API cinematic ambient soundtrack (starts after user interaction)

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Personalization

Portfolio content lives in `src/data/portfolio.ts`. Update the `profile`, `projects`, `achievements`, `skillCategories`, `seasons`, and `introSlides` exports there.

- Main profile and contact links: `profile`
- Project cards and details: `projects`
- Education / experience: `education` and `experience`
- Achievements: `achievements`
- Skill categories: `skillCategories`
- Cinematic opening and Play Intro: `OpeningSequence.tsx` and `PlayIntro.tsx`
- Soundtrack: `src/audio.ts` and `SoundtrackControl.tsx`
- Portrait artwork is a stylized placeholder at `public/assets/shashank-portrait.svg`. Replace it with your own portrait when ready, keeping the same path or updating `profile.portrait`.
- Resume-style profile and download: `src/components/ResumeViewer.tsx`; PDF file: `public/assets/Shashank_Singh_Resume.pdf`.

## Projects featured

- CyberTrace — https://cyber-trace-six.vercel.app/
- CodeQuest — https://code-quest-noir22.vercel.app/
- CricketVerse — https://cricket-verse-tawny.vercel.app/
- AI Emergency Assistant — https://ai-emergency-assistant-zeta.vercel.app/
- Health Monitor — https://github.com/sh4shanks/HealthMonitor
- OBLIVION OS — an experimental digital command center
- iOS Glass Chess — liquid-glass interface experiment

## Contact

- GitHub: https://github.com/sh4shanks
- Instagram: https://www.instagram.com/_shashank2467
- Email: shashank2009s24@gmail.com

The portfolio uses a cinematic, streaming-inspired interface; it is a personal project and is not affiliated with any streaming service.
