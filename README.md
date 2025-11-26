# IndieTix monorepo (sprint scaffold)

This repository sets up the IndieTix platform as a Turborepo + pnpm workspace with customer, organizer, admin, and mobile apps plus shared packages. It focuses on transparent pricing, organizer-approved refunds, and India-ready event commerce.

## Structure
- `apps/web` – customer Next.js experience with home, listing, details, checkout, and bookings stubs.
- `apps/organizer` – organizer PWA shell with dashboard, events, payouts, and refund approval queue.
- `apps/admin` – admin console for moderation, verification, and platform overview.
- `apps/mobile` – Expo scaffold (routing/deps declared) for offline tickets and discover feed work.
- `packages/*` – shared libraries (api, database schema, auth, payments, ui, etc.) wired as workspace dependencies.
- `packages/database/schema.prisma` – primary Prisma models for users, organizers, events, bookings, payouts and fee transparency.

## Getting started
1. Install pnpm and Turbo: `npm i -g pnpm turbo`.
2. Install deps: `pnpm install` (packages reference workspace links).
3. Run web apps: `pnpm dev --filter web` (similarly `--filter organizer` or `--filter admin`).
4. Mobile: `pnpm start --filter mobile` (Expo CLI required).

Database: set `DATABASE_URL` for Prisma in `packages/database/schema.prisma`. Migrations/seeds can be added via `pnpm dlx prisma migrate dev` from `packages/database`.

## Feature highlights in this scaffold
- Honest fee breakdown on event detail and checkout (ticket + payment + server + platform components).
- Booking flow stub with Smart Split pay-links and explicit refund policy requiring organizer approval.
- Organizer dashboard includes payouts view and refund approval queue to enforce manual consent.
- Admin console lists users, organizers, and events for verification/moderation.
- Shared API package with demo events/bookings feeding all surfaces.

Extend by replacing stubs with live data sources, Razorpay integration, loyalty/referrals, offline ticket storage, chatbot-led refund requests, and fair-queue controls.
