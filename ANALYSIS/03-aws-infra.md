# 03 — AWS infra: as little as possible

**[PROPOSAL]** — BASELINE only says "one enterprise cloud provider with EU processing; multi-cloud adds complexity without reducing a real risk" (2.13) and leaves hosting to the devs. Everything below is our suggestion; AWS service availability per region and prices change, so **verify each item against current AWS docs before committing**.

## Principle

One AWS account (plus a second for prod later), **one EU region**, managed services only, no cluster, no VPC gymnastics beyond defaults. Every extra service must justify itself against a BASELINE requirement.

## Region

- Choose **one** EU region where *all* of Bedrock model access, Textract, SES inbound (if used) and RDS are available. Candidates: `eu-central-1` (Frankfurt) or `eu-west-1` (Ireland). `eu-south-1` (Milan) is attractive for Italian data but has historically had fewer services — check.
- Bedrock "EU cross-region inference profiles" route *within* the EU, not to one region; confirm that's acceptable to the DPA (BASELINE 2.11 flags this nuance). Also check the open conflict on regional-endpoint surcharge (Anthropic says +10%, AWS docs say none).

## The minimal set

| Need (BASELINE req.) | AWS service | Why this and not more |
|---|---|---|
| Relational + bitemporal data, tenant isolation (RNF03, RNF10) | **RDS PostgreSQL** (small Graviton instance, single-AZ in dev, multi-AZ in prod) | One DB for domain data, job queue, audit log. Row-level security for tenants. Plain RDS beats Aurora for cost at this scale |
| Immutable originals; WORM (RNF01, 2.11) | **S3** bucket with **Object Lock** (compliance/governance mode) + versioning, SSE-KMS | Originals never modified; hash-chain anchors can also be dumped here |
| Short-lived derived artifacts (OCR text, prompts), auto-delete (RNF14) | **S3 second bucket** with lifecycle expiry | Separate "custody" vs "derived" data physically, as the schema does logically |
| Run API + worker | **ECS Fargate** *or* **App Runner**: one container image, two commands (`web`, `worker`) | No servers/cluster to manage. Alternative: Lambda if you want zero idle cost, but long OCR/LLM jobs and PDF rendering fit containers better |
| Static React app | **S3 + CloudFront**, or just serve from the API container | The simplest: serve built assets from the API container; add CloudFront only when needed |
| Auth + MFA (RNF11) | **Cognito** user pool with MFA required | Don't write auth. Groups = roles (operator, validator, admin, data custodian) |
| Encryption, EU-held keys (RNF12) | **KMS** customer-managed keys | Separate key per bucket class; key access restricted to the custodian role |
| Secrets | **Secrets Manager** (or SSM Parameter Store for non-rotating) | Vendor keys, DB creds |
| Audit trail of infra access (RNF11) | **CloudTrail** → S3 | Needed for "who accessed what" evidence |
| OCR candidate | **Textract** | One of ≥2 OCR candidates to benchmark (also Azure DI, Google Doc AI, Docling) |
| LLM candidate | **Bedrock** (Claude etc.) | Keeps data inside AWS EU; still wrap behind `ModelGateway` |
| Inbound test mailbox | **SES inbound → S3 → worker**, *or* a plain IMAP poll of a mailbox | PEC (Italian certified email) is ordinary IMAP/SMTP: polling is simpler than SES for it |
| Cost alarms | **AWS Budgets** | A runaway loop on an LLM is the real risk |

That's it. **Do not add**: EKS, MSK/Kafka, OpenSearch, ElastiCache, Step Functions, SQS (queue lives in Postgres), API Gateway, DynamoDB, Glue/Athena, SageMaker, a second cloud.

## Job queue on Postgres

Use `FOR UPDATE SKIP LOCKED` or a small lib (e.g. `pg-boss` / `graphile-worker`) → no SQS needed. One row per document with a status = the state machine. Revisit only if throughput measurably demands it (`ponytail:` comment where it lives).

## Environments

- `dev` (synthetic/public docs only, no personal data ever) and `prod-like` (real masked docs, restricted access). Real docs **never** touch dev, CI, tickets, chat or logs (RNF08).
- Infra as code in the same repo (`infra/`), preferably **AWS CDK in TypeScript** so the team stays single-language. Terraform is the alternative if one of you already knows it better.

## Rough cost shape (**ESTIMATE**, validate)

BASELINE: bridge architecture €100–300/month fixed, lightweight build €150–500/month, solid build €500–1,500/month. Compute for OCR+LLM per document is negligible vs human labour (~$2–$40/yr/client at list prices for Alfa-sized volumes). The real cost is dev time and expert labelling. → Don't optimize infra cost; optimize reviewer minutes.

## Things to decide with the DPA/legal, not by taste

- Whether AWS (as sub-processor) + Bedrock zero-retention terms satisfy the "no training, EU, retention minimal, incident notification ≤72h" bar. Get it in writing.
- Group-level non-EU access (US parent) — "transfer assessment" even for EU-processed data.
- Where masked-vs-original mapping keys live (must stay in EU, restricted).
