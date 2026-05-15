<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may
all differ from your training data. Read the relevant guide in
`node_modules/next/dist/docs/` before writing any code. Heed deprecation
notices.

<!-- END:nextjs-agent-rules -->

# Charity Accounts SaaS

## Stack

- Next.js 16 App Router
- TypeScript strict
- Bun
- Tailwind CSS
- shadcn/ui
- Drizzle ORM
- Neon Postgres
- Vercel
- React Hook Form
- Zod
- Sonner
- TrueLayer integration planned

## Coding Rules

- Preserve strict TypeScript
- Prefer server components
- Use server actions where appropriate
- Avoid unnecessary client components
- Reuse shared UI patterns
- Make minimal changes
- Do not rewrite unrelated files
- Explain all changed files
- Use async route params correctly for Next.js 16

## Authentication

- Use Better Auth v1.6.11
- Use Drizzle adapter with Neon Postgres
- Auth should be server-side by default
- Do not expose auth secrets to the client
- Start with email/password auth
- Add organisation/team membership later
- Protect app routes before building business modules
- Public routes: landing page, sign in, sign up
- Protected routes: dashboard, charities, funds, transactions, reports, settings

## Business Rules

- Journals are immutable after posting
- Corrections use reversal + repost
- Financial years can be OPEN or CLOSED
- CLOSED years are read-only
- Trial balance must always balance
- Auditability is critical

## Banking

- Use TrueLayer for bank feeds
- Initial development uses sandbox mode
- Later production mode will use live feeds
- Bank transactions import into an inbox workflow
- Users review/match/post imported transactions
- Imported bank data must never be silently modified

## Security Rules

- Never expose bank credentials
- Never store raw access tokens in client code
- Use server-side token handling only
- Environment variables must remain server-side
- Sensitive banking operations require auditability

## Database

- Use Drizzle ORM
- Prefer explicit typing
- Use Neon serverless Postgres
- Keep schema modular
- Avoid destructive migrations

## UI

- Use shadcn/ui patterns
- Use Tailwind only
- Prefer responsive layouts
- Keep styling professional and accounting-focused

## Environment Variables

### Local Development

Local development uses `.env.local`.

After adding or changing environment variables:

- restart the dev server
- never commit `.env.local`

### Vercel Deployment

Production deployments require matching environment variables in Vercel Project
Settings.

Required variables currently include:

```env
DATABASE_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
```

### BETTER_AUTH_URL Rules

Local:

```env
BETTER_AUTH_URL=http://localhost:3000
```

Production:

```env
BETTER_AUTH_URL=https://charities-app.vercel.app
```

Always update BETTER_AUTH_URL after:

- changing production domains
- adding custom domains
- cloning projects
- creating preview environments

### Security

- Never expose secrets in client components
- Never commit production secrets
- Use server-side environment variables only
- Keep auth and database credentials private
