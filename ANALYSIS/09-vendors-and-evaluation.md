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

## Competitors (BASELINE/COMPETITORS.md: Navisio, Brokerfy, Covera, Equal Parts, Corgi, MoIn; BASELINE 2.12 adds more)

| Product | What | Verified vs marketing | Take-away |
|---|---|---|---|
| **Navisio AI** (Nano i-Tech Srl) — https://navisio.ai/it | Multi-agent platform for intermediaries: portfolio analysis, policy/condition comparison. Pro from €89/mo | Owned by a RUI-registered broker (B000697792); launched Sep–Oct 2025. Claims 74% general accuracy, "up to 90%" time reduction, 200+ intermediaries — no public methodology | Closest competitor. Never upload real client docs to a competitor's platform without DPA + no-training + separation; synthetic-only trials are free |
| **Covera** (YC F26, San Francisco; founders Tiphaine Venet CEO, Thibaut Regerat CTO, ex-Simio sold 2024) — https://www.covera-agents.com | AI workflows that run *inside* the agency's AMS, inbox and carrier portals: intake → portal quoting → side-by-side comparison → bind/AMS sync; renewals (90/60/30 d), Q&A with sources, COI drafts, cross-sell from coverage gaps. US (Epic, AMS360, HawkSoft, EZLynx, Momentum) **and France** (Maia, Modulr, Excalibur, Coorty, IGA, BubbleIn…) | Founded 2026, 2 people (YC profile, Oct 2026); funding $125k–$500k depending on source. Claims 50+ agencies, 5 min lead→quote, +20% new business, 10 h/user/week, 12× ROI in 4 weeks — no methodology. FR site: EU hosting, GDPR/IDD(DDA)/AI Act "by design"; US: dedicated US instance. Names/addresses/policy numbers aliased before the LLM; no training on data. Never submits a quote or sends a message itself: drafts only, actions logged for E&O. No public price; 2-week free trial | Most relevant new entrant: French-founded, already selling to EU brokers, a likely Italian entry later. Same principles as ours (masking, human gate, audit log) — those are table stakes, not a moat. They go wide on workflow (quote/renew/cross-sell); we go deep on extraction quality, citations and precedence |
| **Brokerfy** — https://www.brokerfy.ai | US commercial-lines (trucking/DOT-led, 9 industries) mix: agency CRM + intake + document upload + submission to a placement partner ("ProVida"), plus market directory, trucking lead data, education (Campus, IQ blog), EN/ES | Site is a Replit-built SPA still showing template/placeholder copy and "Live pilot" labels; no legal entity, licence or funding found. Says its agents are "**Covera-powered**"; uploaded files are "stored, not read or extracted" | Not a competitor for us (US, distribution/placement play). Useful only as evidence that Covera also sells as a white-label agent layer to other platforms |
| **Corgi** (YC S24, San Francisco; Nico Laqua, Emily Yuan) — https://www.corgi.insure | Full-stack AI-native **insurer** (admitted US carrier since Jul 2025): D&O, cyber, CGL, tech E&O, AI liability for startups; quotes in minutes. Expanding to trucking | ~$415M raised in 2026 ($108M seed/A at $630M → $160M B → $106M B1 at $2.6B → $40.7M per SEC filing). London office opened Jan 2026; hiring "Country Launchers" for DE/FR/IT/ES/IE/NL (local entity, regulator, country P&L). No EU/IVASS licence found yet. Producer licences in 45 US jurisdictions | Not a competitor: a potential **carrier our brokers place with**. If it enters Italy through brokers, its policy documents and data feeds are a structured input we should ingest well. Open: our call with their French country manager on how they will work with brokers |
| **Equal Parts** (Austin; Mike Witte ex-RigUp, Graham Yennie, Mike Meller) — https://www.equalparts.ai | AI-enabled **roll-up**: buys US independent agencies, keeps the brand, adds shared systems + AI for cross-sell/upsell/acquisition | Founded Mar 2025; $23M Series A Feb 2026 (Inspired Capital), $50M total acquisition capital. ~10 agencies (blog "10 and counting"); target 25 this year and $1B premium in 24 months; claims ~40% revenue growth, ~50% profit uplift at acquired agencies — company-reported | Same model as the broker roll-up thesis in BASELINE, done in the US. Their AI tools aren't public: evidence the edge is the acquisition + integration playbook, with AI as a lever, not the product |
| **MoIn Group** (Modern Insurance Technology GmbH, Cologne; Moritz Delbrück, Dr. Philipp Kanschik ex-Policendirekt, André Hoendgen) | "First AI roll-up" of German brokers: buys profitable brokers (≥10 staff, mainly retail), keeps their identity, moves them to a shared AI-native platform | Launched Jun 2026, backed by a PE house plus Torsten Oletzky and Christian Lindner. Publicly named deals: Compari (Mellrichstadt) and Sünderwald group (Chemnitz); our internal note says 10+ acquisitions, unconfirmed in press | Closest EU analogue to an Italian broker roll-up. Watch which platform they standardise on and whether they buy or build the document layer — a possible buyer/partner profile |
| IAssicurGPT (Diagramma) | Loads policies/receipts from PDF into IAssicur | Integrated in the gestionale; no public metrics | Extraction is becoming a gestionale feature → our moat must be quality, evidence log, precedence, money |
| FurtherAI | Insurer-side AI agents (intake, policy-vs-quote checking) | $25M Series A (a16z), $30M total; claims 95% data accuracy | Policy-vs-quote check is a measurable use case |
| Vantel | Policy reading/comparison for US agencies | YC W25; inconsistent claims | US/ACORD: low transferability |
| Harper | AI-native broker for US SMEs | ~$46.8M raised; pivoted from vendor to broker | Pivot lesson; volume mechanics don't transfer |
| Newfront / Marsh Thrive | Reference points for leverage | Newfront ≈ $186k revenue per employee (est.), in line with traditional brokers; Marsh claims ~20% efficiency | No public evidence of "many-x" leverage |

Practical test ("Allegato D", not yet run): try Navisio, Covera (2-week free trial), IAssicurGPT, FurtherAI, Vantel on **synthetic** policies using our metrics before deciding anything build-vs-buy. Trigger: accuracy of ≥2 vendors on the golden set.

## Ten mistakes to avoid (BASELINE 2.12)

Build OCR in-house · trust vendor accuracy without a golden set · let the model do arithmetic/normalization · show output without verified citation · scrape conditions ignoring reservations · promise "the whole market" · ignore tokenizer/price changes · use costly agentic architectures where a deterministic pipeline suffices · put client data on competitors' tools · start with the solid build without a CTO.
