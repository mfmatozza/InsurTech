# 12 — Glossary (Italian insurance → engineering)

| Term | Meaning | Why devs care |
|---|---|---|
| Broker | Intermediary acting for the client; our customer (= tenant) | Tenant isolation |
| Gestionale | Broker's management software (system of record) | We feed it, don't replace it |
| Polizza / Scheda di polizza | Policy / its front page with key data | Main extraction target |
| Condizioni generali / particolari | General (printed) / special conditions | Precedence |
| Capitolato | Tender specification wording (public tenders) | Replaces insurer text (R2) |
| Appendice | Endorsement: changes a policy from an effective date | Creates new field versions |
| Quietanza | Premium receipt per instalment | High volume; usually structured |
| Titolo | A premium instalment due | Money model |
| Rata / Frazionamento | Instalment / payment frequency | |
| Premio imponibile / imposte / lordo | Net premium / taxes / gross | gross = net + tax (rule) |
| Somma assicurata | Sum insured, per item (partita) | Critical |
| Massimale | Liability limit | Critical, structured `Limit` |
| Sottolimite | Sub-limit inside a limit | "part of" vs "in addition to" |
| Franchigia | Fixed amount borne by insured | Different from scoperto |
| Scoperto | Percentage borne by insured, often with minimum | "10% min €2,500" ≠ franchigia €2,500 |
| Garanzia | Coverage / guarantee | |
| Esclusione | Exclusion | Always human-decided |
| Ramo | Line of business | Premium tax, scope |
| RC / RCT / RCO | General / third-party / employers' liability | Starting lines |
| Multirischi / Incendio | Multi-risk / fire | Starting lines |
| Libro matricola | Vehicle fleet register (Excel) | Deterministic parse; pro-rata 1/360 |
| Contraente / Assicurato | Policyholder / insured (can differ) | `Subject` with roles |
| Coassicurazione / Delegataria | Shared risk across insurers / lead insurer | Several policy numbers |
| Regolazione del premio | End-of-period premium adjustment | RF24 |
| Disdetta / Tacito rinnovo | Cancellation / automatic renewal | Scadenzario dates |
| Scadenzario | Renewal/deadline calendar | RF32 |
| Estratto conto | Insurer's account statement to broker | "Heart of the pain" in money side |
| Rimessa | Broker's remittance of premium to insurer | |
| Provvigione / Ritenuta | Commission / 11.5% withholding | Don't flag gap as error |
| Conto separato | Broker's client-money segregated account | 10-day deposit rule |
| Art. 118 CAP | Discharge effect of paying the broker | Read from CollectionAgreement |
| CBI RH / camt / MT940 | Italian bank reporting formats | Deterministic adapters |
| SDI / FatturaPA | Italian e-invoice system/XML | Deterministic adapter |
| AIBA Digital / SSF | Broker–insurer data flow standards | RF04 Should |
| RUI | Register of intermediaries | Counterparty IDs |
| IVASS | Insurance regulator | Reg. 40/2018 |
| CAP | Codice delle Assicurazioni Private | |
| DIP | Pre-contractual information doc | Outside hierarchy |
| PEC | Certified email | IMAP |
| Claims made / Occurrence | Trigger types for liability | Always-human cases |
| Grande rischio | "Large risk" (lighter disclosure rules) | Flag per line |
| Golden set | Labelled real docs for measurement | TEST-R/DEV-R |
| H1–H4 | Human gates | State machine |
| Tenant | Data owner (broker) | `tenant_id` |
| DPA | Data processing agreement (art. 28) | Before any vendor |
| DPIA | Data protection impact assessment | Before real data |
| LMA / ACORD / Lloyd's | Market wording / data standards | Vocabulary only |
