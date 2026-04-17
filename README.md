# Tribal Match Landing

Single-page public website for Tribal Match, built with the Next.js App Router and prepared for Vercel deployment. The site presents the company story, trust thesis, roadmap, and a polished mailto-based contact flow for investors, collaborators, future hires, and serious visitors.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- lucide-react
- react-hook-form
- zod

## Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

- `NEXT_PUBLIC_SITE_URL` is optional for metadata and canonical URL configuration.

## Local Setup

```bash
npm install
cp .env.example .env.local
```

## Run

```bash
npm run dev
```

## Contact Form

- Validates the form on the client with Zod
- Builds a Gmail compose link to `rajendrajfc1021@gmail.com`
- Opens Gmail in a new tab with a prefilled subject and message draft
- Does not require backend email delivery or provider setup

## Build

```bash
npm run build
```

## Local Testing

1. Start the dev server with `npm run dev`.
2. Submit the contact form from the landing page.
3. Confirm Gmail opens in a new tab with a prefilled draft addressed to `rajendrajfc1021@gmail.com`.

## Deploying To Vercel

1. Import the repository into Vercel.
2. Optionally add `NEXT_PUBLIC_SITE_URL` in the Vercel project settings.
3. Redeploy after env changes so metadata uses the updated site URL.
