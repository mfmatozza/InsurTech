# Agent rules

Keep this repo small, clean and organized.

## Product and MVP

- InsurTech is an AI-native insurance broker for Italian businesses, starting with SMEs and a working target of fewer than 500 employees. The first vertical is open, with broader commercial coverage as the long-term goal.
- The MVP makes quote requests fast and clear. Collect the information our team needs to request quotes from insurers.
- Start website work only when the user explicitly requests it. The first page is the public landing page.
- The customer journey is a short contact and company wizard, sign-in, then a guided chat for risk details and optional policy uploads for coverage-gap review.
- Admin and customer dashboards follow the quote-request flow.

## Public landing

- Use “Assicura la tua azienda in 48h” in the preview hero. The timing is working copy supplied for the draft. Verify it before public launch.
- Use [Jet HR](https://www.jethr.com/) as the quality benchmark for headline clarity, viewport composition and a visible handoff into the next section. Inspect desktop and mobile. Follow the landing art direction in `design.md` with our palette, type and an original composition.
- Use customer-facing sections for exploring risks, understanding the broker’s role, reviewing existing policies and common questions. Tie each image to the specific content it accompanies. Draft plausible copy for sections still being defined. Keep prototype reports and internal workflows out of the landing. Reserve insurer names, customer proof and numeric claims for verified facts.
- The public name and logo are pending. Use a neutral text placeholder in previews. “Attimo”, its mark and any derived favicon are demo assets that require explicit approval for public use.
- **Hero CTA.** “Richiedi una quotazione” opens the company step with the VAT number or website entered in the hero.

## Product principles

Based on the CEO memo *Dal primo strumento al broker del futuro* and its concept video.

- Collect each fact once in a reusable company risk profile. Keep sources and corrections in an append-only record. Link extracted policy facts to the document and page.
- The “cassetto delle polizze” shows coverages, gaps and expiry dates in plain language. AI prepares the analysis, rules flag gaps, an insurance specialist checks critical facts, and an authorized intermediary signs off before sharing it with the client.
- Own the profile, audit trail and insurance workflow. Use replaceable providers for standard services. Measure extraction quality on a held-out benchmark and track human review time.
- Treat uploads as untrusted data. Keep customer data in the EU and redact personal data before sending text to external models.
- Automated carrier submissions, price estimates, offer comparison and signing are future capabilities. Demo prices and response times are illustrative.

## Stack

- The app lives in `app/` at the repository root. Use Next.js App Router and TypeScript. Run `npm run dev` on port `3000`. Vite is prohibited.
- Follow root `design.md` for all interface work.
- Use PostgreSQL. Neon is the preferred initial host, with a later move to AWS. Keep the schema and migrations portable across PostgreSQL hosts.
- Use Resend initially for outbound email only. The AWS email service will be selected during migration.

## Legacy archive

- `legacy/` contains historical material. Exclude it from searches and automatic context. Open or use archived files only when the user explicitly asks. See `legacy/AGENTS.md` for the archive rule.

## Repository hygiene

- Fewest files possible. Edit existing files before creating new ones; delete what you replace.
- Keep the root for agent instructions and app files. Keep scratch scripts and notes out of commits.
- One language per job: TypeScript for app and infra, Python only in `eval/`.
- Do not add yourself as author.
- In commits, use a conventional keyword in the subject and explain the changes in bullets.
- No new dependency if stdlib/platform/existing deps do it.
- Never commit real documents or personal data. Only synthetic or public fixtures. Never put document text in logs, tests or tickets.
- Don't add docs, abstractions or config "for later".

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
