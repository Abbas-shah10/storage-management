# shadcn/ui Installation & Fix Steps

## [ ] 1. Fix globals.css Import Error

Remove `@import "shadcn/tailwind.css";` from app/globals.css.

## [ ] 2. Re-init shadcn

`npx shadcn@latest init` (use radix-nova, neutral, CSS vars).

## [ ] 3. Add Core Deps

`npx shadcn@latest add button` (installs clsx, cva, etc.).

## [ ] 4. Test

`npm run dev` – verify no errors, Button works.

## [ ] 5. Add More Components

`npx shadcn@latest add [name]`.

Updated: globals.css fixed below.
