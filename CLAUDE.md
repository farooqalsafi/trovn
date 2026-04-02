# Trovn — AI Consulting Agency Landing Page

## Project Overview
Single-page landing website for Trovn, an AI consulting agency. Design modeled after fuseva.ai: clean white minimal aesthetic, generous whitespace, content-first hierarchy, scroll-animated sections, 3D hero object.

## About the Client
- Name: Trovn
- Industry: AI Consulting & Agency Services
- Target audience: B2B — CTOs, VPs of Engineering, operations leaders looking for AI strategy, development, and integration partners

## Services (8 offerings)
1. AI Strategy & Discovery
2. Solution Design
3. Custom AI Development
4. Integration & Deployment
5. AI Operations & Support
6. Training & Enablement
7. Bespoke CRM Solutions
8. AI Voice Tools

## Brand Guidelines
- Primary color: #6C3AED (electric blue-purple)
- Gradient: #6C3AED → #3B82F6 (purple to blue)
- Background: #FFFFFF (white)
- Text: #0F172A (near-black navy)
- Muted text: #475569 (slate gray)
- Section alternation: white (#FFFFFF) and light gray (#F8FAFC)
- Label pills: light purple tint bg (#F5F3FF) with purple text
- Tone: professional, innovative, confident, approachable

## Tech Stack
- Framework: Next.js 14 (App Router) with TypeScript
- Styling: Tailwind CSS v3 with CSS custom properties
- Components: shadcn/ui
- Animation: Framer Motion
- Icons: lucide-react
- Deployment: Vercel

## Architecture
- /src/app/ — Next.js App Router (single page.tsx + layout.tsx)
- /src/components/ — Section components + navbar + footer
- /src/components/animations/ — Reusable Framer Motion wrappers
- /src/components/ui/ — shadcn/ui primitives
- /src/lib/ — Utilities (cn helper) + constants (content data)
- /public/images/ — Logo, tech logos, fallback images

## Key Commands
- npm run dev — start dev server (port 3000)
- npm run build — production build
- npm run lint — run ESLint

## Design Rules
- White-first design. Never use dark backgrounds except footer.
- Brand purple is accent only — never as full section background.
- Every section heading has a label pill above it.
- Service cards must include checkmark bullet lists.
- Generous whitespace: py-20 minimum on sections, mb-16 on headings.
- All animations respect prefers-reduced-motion.
- Mobile-first responsive design.
- Sticky nav: transparent at top, white on scroll.
- CTA buttons use rounded-full (pill shape) with gradient background.
- All text content lives in /src/lib/constants.ts for easy editing.
