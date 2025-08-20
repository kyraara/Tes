# Kyra Aara Portfolio

Personal portfolio website built with React, Vite, TypeScript and Tailwind CSS.

## Installation

```bash
npm create vite@latest portfolio -- --template react-ts
cd portfolio
npm i react-router-dom react-helmet-async react-hook-form zod clsx @hookform/resolvers
npm i -D tailwindcss postcss autoprefixer eslint prettier @types/node vite-tsconfig-paths vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event
npx tailwindcss init -p
```

## Scripts

- `npm run dev` – start development server
- `npm run build` – build production assets
- `npm run preview` – preview production build
- `npm run test` – run unit tests with Vitest
- `npm run lint` – run ESLint
- `npm run format` – format with Prettier

## Running

```bash
npm run dev
```

## Deploy

Build with `npm run build` then deploy `dist/` to Netlify, Vercel or GitHub Pages.

## Form Submission

The contact form posts to [formsubmit.co](https://formsubmit.co). Replace the URL in `src/routes/Contact.tsx` with your own endpoint.
