# Nutan Meena — Portfolio

A dark, terminal-styled portfolio: React (Vite) frontend, animated binary-rain
(0/1) background, Node.js + Express API for the contact form, deployed on
Vercel.

## Stack

- **Frontend:** React 19 + Vite
- **Backend:** Node.js + Express (ships as a Vercel serverless function at
  `/api/contact`; also runnable as a standalone server for local dev)
- **Styling:** hand-written CSS with design tokens (no framework), engineering /
  DevOps console theme
- **Deploy target:** Vercel

## Project structure

```
portfolio/
├── api/
│   └── contact.js        # Express app -> Vercel serverless function
├── server/
│   └── index.js          # Standalone Express server for local dev
├── src/
│   ├── components/       # Hero, About, Experience, Projects, Skills, Contact, Nav, Footer, BinaryRain
│   ├── data/resume.js     # All your content lives here — edit this file to update the site
│   ├── App.jsx
│   └── index.css          # Design tokens + all styling
├── vercel.json
└── package.json
```

## Local development

Install dependencies:

```bash
npm install
```

Run the frontend only (contact form calls will fail without the API):

```bash
npm run dev
```

Run frontend **and** the local Express API together (recommended):

```bash
npm run dev:full
```

This starts Vite on `http://localhost:5173` and Express on
`http://localhost:8787`, with Vite proxying `/api/*` requests to Express (see
`vite.config.js`).

## Editing your content

Everything text-based — name, links, experience, projects, skills — lives in
**`src/data/resume.js`**. Update that one file and every section re-renders
with the new content.

Your **Instagram link is currently a placeholder** (`instagram.com/` with
handle `update_me`) since it wasn't in your resume — open `src/data/resume.js`
and update the `instagram` and `instagramHandle` fields with your real
profile.

## Wiring up real email delivery

Right now `api/contact.js` validates submissions and logs them (visible in
Vercel's function logs) but doesn't send an email — there's a `TODO` marker in
that file. To actually receive messages, plug in one of:

- **Resend** (simplest, generous free tier) — `npm install resend`, then call
  their SDK inside the route handler with an API key stored in a Vercel
  environment variable.
- **SendGrid** — similar pattern, different SDK.
- **Nodemailer + SMTP** — works with a Gmail app password or any SMTP
  provider.

Add whichever API key as an environment variable in your Vercel project
settings (Project → Settings → Environment Variables) — never commit it to
the repo.

## Deploying to Vercel

**Option A — Vercel CLI**

```bash
npm install -g vercel
vercel login
vercel        # deploy a preview
vercel --prod # deploy to production
```

**Option B — Git integration (recommended)**

1. Push this project to a GitHub repository.
2. Go to vercel.com/new and import the repo.
3. Vercel auto-detects the Vite frontend and the `api/contact.js` serverless
   function — no extra configuration needed (Framework Preset: Vite, Build
   Command: `vite build`, Output Directory: `dist`).
4. Click **Deploy**. Every future push to your main branch redeploys
   automatically.

`vercel.json` already contains the SPA rewrite rule needed so client-side
anchor navigation works correctly.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (binary rain and boot animation both back
  off).
- All interactive elements have visible focus states.
- Layout is responsive down to small mobile widths.
