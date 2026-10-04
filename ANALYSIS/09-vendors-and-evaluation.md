# 09 — Vendors, evaluation, competitors

## Buy vs build (short)

Buy: OCR/layout, LLM APIs (EU endpoints), cloud, e-signature, identity. Build: schema, rules, normalizers, citation verification, precedence/linking, reconciliation, review UI + log, golden set and bench. The defensible asset is **schema + rules + golden set + measured quality**, not client data (not guaranteed) and not vendor access (anyone can buy it).

## Vendor shortlist to *measure* (≥2 per category, on our docs, not brochures)

| Category | Candidates named in BASELINE | Notes (list prices 2026 per BASELINE; **re-verify**) |
|---|---|---|
| OCR / layout | Azure Document Intelligence (EU regions; Read $1.50 / Layout $10 per 1k pages), AWS Textract, Google Document AI, Mistral OCR 4/4.1 ($4/1k pages; confidence + boxes from 4.1), Reducto, LlamaParse, **Docling** (OSS, self-hosted EU; <90% F1 on heterogeneous tables) | Scans with stamps = hard case. Raw OCR text always stored |
| LLM extraction | Claude via Bedrock/API, Azure OpenAI (EU Data Zone), others; ≥2 behind `ModelGateway` | Pricing conflicts: Anthropic says +10% on regional endpoints vs AWS no surcharge; Azure Data Zone +20% on new models from 1 Sep 2026 (secondary source). Ask account managers |
| Masking | Presidio + Italian recognizers; GLiNER_PII_ITA etc. | Measure leaks ourselves |
| Hosting | AWS (see 03) | One provider |

Cost per doc is negligible vs labour (≈ $2–$40/yr for an Alfa-sized client at list). Optimise **review minutes**, not tokens.

## Public benchmark takeaways (ExtractBench, Jul 2026; conflict of interest: written by the winning vendor)

Specialised systems 86.8–95.6% F1; cheap vision models <80%; collapse to 27.9% on >50-page docs; word-level grounding max 46.4%; very long tables (>1,000 rows) <10% for every vision model; agentic coding agents cost 16–28¢/page. **No benchmark on Italian policies exists.** Per-field accuracy hides per-document accuracy (best system 90.42% per object but 62.67% fully-correct records on a claims benchmark). Hence: review **per document**.

Expected accuracy (ESTIMATES, A2): header fields >95% native / 85–95% scan; limit tables 85–95% / 70–90%; lists recall 70–90%; semantics (deductible vs excess, per-claim vs per-year) uncertain; cross-refs & endorsements not estimable. Scans cost 5–15 points.

## Evaluation design (build this first)

Statistical unit = **document package** (policy + endorsements + receipts + conditions), not field: errors within a doc are correlated. 2,000 fields ≈ only 340–580 independent observations. 40 docs, 90% observed ⇒ CI ≈ 77–96%. To compare two versions: ≥60–80 docs, paired per-document comparison.

| Set | Size | Who sees | Use |
|---|---|---|---|
| **TEST-R** | 60–100 real packages (80 recommended), masked, written agreement; double annotation on 25% | Data custodian + annotators only | Measure releases; sealed; run at most once per release; refresh every 6 months |
| **DEV-R** | 20–30 real, different clients/insurers from TEST-R | Dev team | Iterate prompts/pipeline; split by client & template family |
| **SYN** | 300–1,000 generated packages, ground truth from generator, 10–20% injected defects | CI | Regression/stress. **Never** to declare quality |

TEST-R stratification: by line, language, origin (native / good scan / degraded), length, endorsements, insurer; ≥20% scans, ≥20% docs >50 pages, no insurer >20% (the brief says ≥1/3 scans and ≥1/3 with endorsements, ≥5 insurers; use the stricter). Annotation: guidelines first (20–40 pages for ~50 fields); **no model pre-annotation on test set** (anchoring). 280–540 expert hours (≈€14–54k, rate unverified), ~20 weeks, depends on agreements signed by Nov 2026.

Label = field id (versioned schema) · normalized value · original text · page+bbox · typed null · source level · state (current/superseded + date) · language/annotator/manual version/confidence.

### Metrics (A6 proposals; brief thresholds slightly looser)

F1 per field after normalization (micro ≥95%, critical ≥90%) · precision on empty fields ≥98% · list recall ≥95%, precision ≥97% · citation exists ≥98%, supports value ≥95% (sampled) · unsupported claims target 0 (upper bound 3/n via rule of three) · endorsement linking ≥98% & state ≥95% · box grounding IoU≥0.5 ≥80% · review minutes −30% at equal final accuracy · missed injected errors ≤10% critical · exceptions per 100 titles (TBD).

### Synthetic bench

Ground truth from generator code, never from a later extraction. Parametric templates + free clauses (LMA English) + rewrite by a **different model family than the extractor** (LLM judges/extractors favour their own family) + structural variants (endorsements, cross-refs, conflicts) + injected errors. Degrade with Augraphy/DocCreator + 20–30 real photos of prints. Validate realism: 3-expert discrimination test; rank agreement synthetic vs real. Report SYN, DEV-R, TEST-R **separately**. Check **contamination**: public texts may be in model training → compare public vs private performance.

### Review-time study

Counterbalanced crossover (each reviewer sees half the packages manual, half assisted, never the same in both), exclude familiarization, instrument UI, composite outcome (time + final accuracy), 5–10% injected wrong proposals, mixed-effects analysis. 4–6 reviewers × 40 packages = informative; fewer = exploratory. Leverage ≠ margin: partial-process coverage inflates it (include P08 etc. in baseline).

## Competitors (BASELINE/COMPETITORS.md = Navisio only; BASELINE 2.12 adds more)

| Product | What | Verified vs marketing | Take-away |
|---|---|---|---|
| **Navisio AI** (Nano i-Tech Srl) — https://navisio.ai/it | Multi-agent platform for intermediaries: portfolio analysis, policy/condition comparison. Pro from €89/mo | Owned by a RUI-registered broker (B000697792); launched Sep–Oct 2025. Claims 74% general accuracy, "up to 90%" time reduction, 200+ intermediaries — no public methodology | Closest competitor. Never upload real client docs to a competitor's platform without DPA + no-training + separation; synthetic-only trials are free |
| IAssicurGPT (Diagramma) | Loads policies/receipts from PDF into IAssicur | Integrated in the gestionale; no public metrics | Extraction is becoming a gestionale feature → our moat must be quality, evidence log, precedence, money |
| FurtherAI | Insurer-side AI agents (intake, policy-vs-quote checking) | $25M Series A (a16z), $30M total; claims 95% data accuracy | Policy-vs-quote check is a measurable use case |
| Vantel | Policy reading/comparison for US agencies | YC W25; inconsistent claims | US/ACORD: low transferability |
| Harper | AI-native broker for US SMEs | ~$46.8M raised; pivoted from vendor to broker | Pivot lesson; volume mechanics don't transfer |
| Newfront / Marsh Thrive | Reference points for leverage | Newfront ≈ $186k revenue per employee (est.), in line with traditional brokers; Marsh claims ~20% efficiency | No public evidence of "many-x" leverage |

Practical test ("Allegato D", not yet run): try Navisio, IAssicurGPT, FurtherAI, Vantel on **synthetic** policies using our metrics before deciding anything build-vs-buy. Trigger: accuracy of ≥2 vendors on the golden set.

## Ten mistakes to avoid (BASELINE 2.12)

Build OCR in-house · trust vendor accuracy without a golden set · let the model do arithmetic/normalization · show output without verified citation · scrape conditions ignoring reservations · promise "the whole market" · ignore tokenizer/price changes · use costly agentic architectures where a deterministic pipeline suffices · put client data on competitors' tools · start with the solid build without a CTO.
