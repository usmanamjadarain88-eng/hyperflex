# Hyper Flex UI — live demo (client's UI codes)

**Purpose:** run the client's UI prototype locally so we can record a screen recording
for the Phase 1 delivery.

**Source:** client-provided `App.jsx` + `App.css` (full React UI prototype, demo mode).

---

## Run it

```bash
cd "client_work/amazon-flex-platform/ui-demo"
npm install     # first time only
npm run dev     # → http://127.0.0.1:5185/
```

Production build:

```bash
npm run build
npm run preview
```

---

## Deploy to Vercel (ready)

`vercel.json` already includes the SPA rewrite, so all routes (`/signup`, `/login`,
`/dashboard`) work on refresh.

### Option 1 — GitHub + Vercel

```bash
cd ui-demo
git init
git add .
git commit -m "Hyper Flex UI preview"
git remote add origin https://github.com/<you>/hyperflex-ui-demo.git
git branch -M main
git push -u origin main
```

Then: vercel.com → New Project → import the repo → Vercel auto-detects **Vite** →
Deploy.

### Option 2 — Vercel CLI

```bash
cd ui-demo
npm i -g vercel
vercel --prod
```

### Settings (auto-detected)

| Setting | Value |
|---------|-------|
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Environment Variables | **NONE** |
| SPA Routing | `vercel.json` rewrites ✅ |

**After deploy:** test all routes — `/`, `/signup`, `/login`, `/dashboard`.

---

## Screens to record

| # | URL | What to show |
|---|-----|--------------|
| 1 | `/` | Landing page (hero, features, calculator, FAQ) |
| 2 | `/signup` | Create account screen |
| 3 | `/login` | Log in screen |
| 4 | `/dashboard` | Dashboard with 6 cards |
| 5 | `/dashboard` → Instant Offers | Bot toggle, offer view |
| 6 | `/dashboard` → Earnings | Metrics, chart, activity table |
| 7 | `/dashboard` → Requests | Block toggle, schedule, filters, stations |
| 8 | `/dashboard` → Referrals | Code, invite link, metrics |
| 9 | `/dashboard` → Inbox | Notifications |
| 10 | `/dashboard` → Settings | Account link status, security, notifications |

---

## Important for the recording

Every tool is **demo / preview mode** (the code says so). The narration should make that
clear:

> "This is the UI preview from the client's codes. The screens and design are complete;
> the Amazon account connection and live offer data are what we build next in Phase 2."

This is honest and matches the Phase 1 framing (assessment + initial UI).

---

## Structure

```
ui-demo/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx    # React entry
    ├── App.jsx     # client's prototype (landing, auth, dashboard, 6 tools)
    └── App.css     # client's styling (Inter + Space Grotesk, dark purple)
```

---

## Notes

- No backend, no real Amazon connection — UI only.
- Multi-language (EN / ES / RU) is already in the code.
- This is the client's design; we extend it in Phase 2 with real data.
