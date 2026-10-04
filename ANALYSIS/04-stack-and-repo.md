# 04 — Stack and repo layout

**[PROPOSAL]** The brief suggests Python + Postgres and explicitly lets us change everything with reasons. You want TypeScript/React/Tailwind plus some Python for data analysis, with as few files and languages as possible. That fits.

## Language split

| Layer | Choice | Reason |
|---|---|---|
| Backend API + workers | **TypeScript (Node 22+)** | One language end-to-end; shared types/schemas with the UI |
| Schemas & validation | **Zod** (single source: validates LLM JSON output, API, DB boundaries; can emit JSON Schema for constrained LLM output) | One definition = DB-adjacent types + LLM output schema + UI forms |
| DB access | **Drizzle** or **Kysely** + plain SQL migrations | Bitemporal queries and RLS are SQL; avoid heavy ORMs that hide them |
| Web UI | **React + Vite + Tailwind** | Review UI with PDF side-by-side. PDF render: `pdf.js` (via `react-pdf`); highlight by bbox/quote |
| HTTP | **Hono** or **Fastify** | Small, typed |
| Eval / data analysis | **Python** (`uv`, pandas/polars, scipy/statsmodels) in `eval/` only | Metrics, confidence intervals, paired comparisons, notebooks; the ecosystem lives there |
| PII masking | TS for regex+checksum rules (CF, P.IVA, IBAN, plates); **Python sidecar only if** we adopt Presidio/GLiNER/spaCy | Don't add a Python service until the NER need is measured. If needed: one container, called by the worker |
| IaC | AWS CDK (TS) | Same language |

Rule: **Python never runs in the request path unless masking forces it.** It runs offline against exported results.

## Repo layout (target)

```
/
├─ AGENTS.md            # rules for AI agents (keep tiny)
├─ ANALYSIS/            # this folder: decisions & guidance (docs only)
├─ BASELINE/            # source research (read-only)
├─ apps/
│  ├─ server/           # API + worker entrypoints (same image)
│  └─ web/              # React + Vite + Tailwind review UI
├─ packages/
│  └─ core/             # domain: schema (zod), normalizers, rules, precedence, citation check, ModelGateway
├─ eval/                # Python: golden-set metrics, reports, notebooks (no prod code)
├─ infra/               # CDK
├─ fixtures/            # SYNTHETIC and PUBLIC docs only
└─ package.json, pnpm-workspace.yaml, tsconfig.base.json
```

Add folders only when there's code for them. `packages/core` is pure (no I/O) so normalizers/rules are trivially unit-testable — that's where most correctness lives. Don't split into more packages until a second consumer exists.

## Testing

- **Vitest** for `core` (normalizers: "1.000.000,00", "€ 1 mln", "10% min. € 2.500", "ore 24.00", 1/360, amounts in words; consistency rules; precedence rules; citation check; masking↔citation map round-trip).
- **Synthetic bench in CI**: on each change run the pipeline against SYN and emit the metrics report (RF31). Quality is a visible number per release.
- Architecture tests: no code path writes custody data into the learning/derived store (RNF09); no gate bypass (RNF02); tenant isolation with two tenants (RNF10).

## Conventions

- One `ModelGateway` interface (`extract(schema, maskedText, task) → {json, modelId, params, usage}`); never import a vendor SDK outside it.
- Money as integer minor units or decimal strings; never float. Dates as ISO with explicit timezone rules; "ore 24.00 del 31/03" ⇒ 00:00 next day.
- Every table has `tenant_id`; every fact has `valid_from/valid_to` and `recorded_at`.
- Migrations are forward-only SQL files.
- Logs never contain document text or personal data.

## Why not Python-only (as the brief suggested)?

Valid choice and the docs/ML ecosystem is better. We prefer TS because the review UI is the daily tool and the schema is shared; Python stays for evaluation where it genuinely wins. If either dev is much stronger in Python, a Python backend + TS web is acceptable — but then generate TS types from the Pydantic/JSON schema rather than duplicating. Record the choice in DECISIONS.md.
