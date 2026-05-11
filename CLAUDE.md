# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with HMR (Vite)
npm run build    # Type-check (tsc -b) then bundle for production
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

## Architecture

This is a minimal React 19 + TypeScript + Vite app (generated from the official Vite template).

- `src/main.tsx` — entry point; mounts `<App />` into `#root` with React StrictMode
- `src/App.tsx` — single root component; all app logic lives here for now
- `src/index.css` / `src/App.css` — global and component-scoped styles
- `public/icons.svg` — SVG sprite sheet; icons referenced via `<use href="/icons.svg#<id>">` pattern

## TypeScript config

`tsconfig.app.json` targets ES2023 with strict unused-variable checking (`noUnusedLocals`, `noUnusedParameters`). The compiler uses bundler module resolution — import `.tsx` extensions are allowed and required when importing local files.

## ESLint

Configured in `eslint.config.js` with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`. To enable stricter type-aware rules for production, see the README for the `recommendedTypeChecked` upgrade path.
