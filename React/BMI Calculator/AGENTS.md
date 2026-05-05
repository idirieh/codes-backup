# AI Agent Instructions for BMI Calculator

## Purpose

This is a minimal React + TypeScript + Vite application. Agents should focus on small UI improvements, component structure, and standard Vite/TS workflows rather than complex architecture.

## Key project files

- `package.json` — scripts, dependencies, and project commands
- `vite.config.ts` — Vite build/dev configuration
- `tsconfig.app.json` / `tsconfig.node.json` / `tsconfig.json` — TypeScript build configuration
- `src/main.tsx` — app bootstrap and React root mounting
- `src/App.tsx` — application root component
- `src/components/Main.tsx` — main feature component
- `src/App.css`, `src/index.css` — styling for the app

## Recommended commands

- `npm install` — install dependencies
- `npm run dev` — start the development server
- `npm run build` — build for production (`tsc -b && vite build`)
- `npm run lint` — run ESLint across the repository
- `npm run preview` — preview the built production output

## Conventions

- Use React 19 and TypeScript.
- Keep component logic simple and presentational in this repo.
- Use `src/components/` for reusable components and keep `src/App.tsx` as the root app shell.
- No custom routing or state management library is currently used.
- Prefer standard JSX/TSX and keep styling in the existing CSS files unless a new pattern is needed.

## Guidance for code changes

- Preserve the minimal app structure and avoid introducing unnecessary libraries.
- Verify changes with `npm run dev` and `npm run lint`.
- Keep the UI and component tree small and easy to understand.
- If adding new files, place components under `src/components/` and use the existing `src/main.tsx`/`src/App.tsx` entry path.

## Notes

- This repository does not currently have specialized backend code, tests, or custom tooling beyond Vite, TypeScript, and ESLint.
- If documentation or conventions grow, add a `.github/copilot-instructions.md` or expand this `AGENTS.md` with more specific authoring rules.
