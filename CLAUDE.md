# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # Start development server
pnpm build     # TypeScript check + Vite build
pnpm lint      # Run ESLint
pnpm preview   # Preview production build
```

## Architecture

This is a React + TypeScript + Vite application that displays a curated directory of AI coding tools ("Vibe Coding 工具聚合").

### Tech Stack
- React 19 with TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- Vite 7 as build tool
- lucide-react for icons
- clsx for conditional class names

### Data Flow
All tool data is static and defined in `src/data/tools.ts`. The `toolsData` object contains:
- `categories`: Array of tool categories (IDE, Assistant, Platform, Terminal, Review, Other)
- `tools`: Array of tool entries with pricing, features, tags, and metadata
- `lastUpdated`: Date string for display

### Component Structure
- `App.tsx`: Main container with filtering logic (category + search) using `useMemo`
- `components/Header.tsx`: Navigation header
- `components/CategoryFilter.tsx`: Category tab selector
- `components/SearchBar.tsx`: Search input
- `components/ToolCard.tsx`: Individual tool display card with pricing info

### Type Definitions
Types are defined in `src/types/index.ts`:
- `Tool`: Complete tool entry with pricing, features, tags
- `Category`: Tool category with id, name, description, icon
- `Pricing` / `PricingTier`: Pricing structure (free/pro/enterprise tiers)

## Adding New Tools

Add new entries to the `tools` array in `src/data/tools.ts`. Each tool requires:
- Unique `id`
- `category` matching one of the category IDs
- `pricing` object with at least one tier (free, pro, or enterprise)
- `tags` array for filtering (special colors for: popular, open-source, free, agent, enterprise)
