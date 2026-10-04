# Volume 4 – Specifica MVP

Oct 3, 2026 · @l

## Come leggere questo volume

Il Volume 4 dice a un CTO che cosa costruire nella Fase 1 (ottobre 2026 - marzo 2027) e come si dimostra che funziona; lascia a lui architettura e stack, entro vincoli dichiarati. Qui nascono il percorso di costruzione, i suoi nomi (compreso "pilota") e i suoi gate di passaggio (D14). Il volume non aggiunge tesi nuove: traduce in requisiti misurabili ciò che i Volumi 1-3 hanno descritto, e segnala dove le fonti non bastano per fissare una soglia.

**Lettore.** I candidati CTO e il tecnico indipendente che rivede il volume prima della consegna (indice, revisioni). Il CEO lo usa come contratto di lavoro: un requisito che non ha un criterio di accettazione non è un requisito. Termini assicurativi e tecnici sono definiti nei Volumi 0-3; qui si ridefiniscono solo quelli nuovi. I processi si citano con la numerazione P01-P22 (D27), i gate umani come H1-H4 (Volume 2, cap. 2.6), i requisiti di conformità come R01-R24 (Volume 3, cap. 3.5).

**Fonti.** Context v3 (prevale), report A2, A3, A5, A6, A7, A8, A9 e la bozza "BOZZA - PROGETTO TECNOLOGIA.pdf", nei capitoli indicati dall'indice; i Volumi 2, 3 e 5 per le scelte già registrate nell'Allegato A. Il Volume 5 è stato scritto prima di questo (D64): i rinvii incrociati sono allineati qui.

**Etichette.** **\[FATTO, fonte\]** se verificato su una fonte nominata; **\[STIMA, metodo\]** se ricavato con un calcolo esplicito su dati parziali; **\[OPINIONE\]** se è un giudizio da validare. Tutte le soglie di accettazione sono **ipotesi** finché il golden set non esiste: si fissano con il CTO dopo il campione iniziale di 10 pacchetti (cap. 4.5). I vincoli normativi sono requisiti di prodotto, tutti da verificare con un legale.

**Esempio di riferimento.** Alfa Meccanica, PMI ipotetica della libreria (D21): manifattura in Lombardia, 8 milioni di fatturato, 6 milioni di attivo, 42 dipendenti, 5 furgoni (poi 6), 7 polizze con 4 compagnie per 40.000 euro di premi imponibili; Compagnia A diretta con accordo ex art. 118 CAP, Compagnia B diretta senza accordo, Compagnie C e D tramite l'Agenzia X (D28). Il suo broker è Beta Broker, micro-broker ipotetico con il titolare, tre addetti e circa 2.000 polizze (D65). Tutti i dati di Alfa e del broker sono **\[Ipotesi dell'esempio\]**.

### Nuovi termini di questo volume

| Termine | Significato |
| --- | --- |
| MVP | Prodotto minimo che serve a misurare, non a vendere: l'insieme di funzioni necessario a rispondere alle cinque domande della Fase 1 (Context v3) |
| Gate di passaggio (G0-G4) | Criterio misurabile che decide se si passa al passo successivo del percorso di costruzione. Non va confuso con i gate umani H1-H4, che fermano un dato nella pipeline |
| Criterio di accettazione | Test che un requisito deve superare, con metrica, campione e soglia |
| Pilota | Prova d'uso dell'MVP presso almeno due broker reali, sotto accordo scritto, su documenti reali mascherati e senza alcun output verso i loro clienti (passo 4, cap. 4.7) |
| Must, Should, Won't | Priorità dei requisiti: indispensabile per l'MVP; utile se il tempo lo consente; escluso da questa versione, per scelta |
| Studio dei tempi | Misura dei minuti per operazione e delle ore per polizza, manuale e assistita, su processi reali (D35) |

### Correzioni tra fonti adottate in questo volume

| Tema | Conflitto | Scelta del volume | Rif. |
| --- | --- | --- | --- |
| Dimensione del golden set | Context v3 e A2: 30-50 polizze; A6: 60-100 pacchetti di test, 20-30 di sviluppo, 300-1.000 sintetici | Si segue A6, come già deciso | D39 |
| Fase 0 "pilota" della bozza | Bozza 3.3: pilota di otto settimane su un ramo e 20-30 fascicoli all'inizio del percorso | I 20-30 fascicoli sono il set di sviluppo (DEV-R); il nome "pilota" passa alla prova con broker reali del passo 4 | cap. 4.7 |
| Prima fondazione | Bozza 3.3: prima l'estrazione documentale; Context v3: due rami in parallelo | Due rami in parallelo fino allo studio dei tempi | D03, D34, D45 |
| Doppia estrazione | A2 la mette tra le mitigazioni della specifica, ma la colloca nel build solido | Should nell'MVP, Must prima che un output esca verso un cliente | cap. 4.3 |
| Tempo di revisione | Context v3: soglia "da fissare" con il broker dello stage | Si fissa con i broker di test, senza dati dello stage (regola 7 dell'indice) | cap. 4.6 |
| Leva "molte volte" | Context v3 (ipotesi) contro la soglia del trigger (riduzione delle ore per polizza oltre il 40%) | Le due grandezze si dichiarano separate e si misurano entrambe | cap. 4.6 |

## 4.1 Obiettivo e successo

**In sintesi.** L'MVP ha un solo obiettivo: produrre entro marzo 2027 le misure che servono a decidere se la tesi regge, cioè se l'infrastruttura governa dati e documenti di un broker PMI con una qualità accettabile e se riduce in modo misurabile le ore per polizza. Il successo non è "il sistema funziona" ma "sappiamo quanto funziona, su che cosa e con quale incertezza". Le metriche sono di tre famiglie: **qualità** (la macchina legge giusto), **sicurezza** (non fa danni e lo si può provare), **leva** (fa risparmiare lavoro). Ogni soglia è un'ipotesi presa da A6, A7 e A9, da fissare con il CTO dopo il campione iniziale. Un risultato negativo, misurato bene, è un esito valido della Fase 1 **\[OPINIONE\]**.

### Le domande a cui l'MVP risponde

Il Context v3 pone cinque domande alla Fase 1. L'MVP ne affronta direttamente tre e prepara le altre due **\[OPINIONE\]**.

| Domanda del Context v3 | Che cosa la risponde nell'MVP | Metrica principale |
| --- | --- | --- |
| 1. Quali processi si governano e con quale accuratezza | Ramo documento e ramo denaro misurati su golden set e banco sintetico | F1 per campo; eccezioni per 100 titoli |
| 2. Dove l'AI crea leva e dove no | Studio dei tempi con crossover controbilanciato (cap. 4.6) | Ore per polizza, manuale contro assistito, a parità di accuratezza |
| 3. Che cosa serve per ingerire formati eterogenei | Adattatori di sorgente e pipeline con gate (cap. 4.3) | Quota di documenti acquisiti e classificati senza intervento; stessa qualità su scansioni e PDF nativi |
| 4. Quali verticali studiare per primi | Stratificazione del golden set per ramo (cap. 4.5) | Metriche per ramo, con intervalli dichiarati indicativi |
| 5. Forma dell'infrastruttura | Pilota con almeno due broker reali (cap. 4.7) | Le quattro condizioni del trigger (D62) |

### Le metriche e le soglie di partenza

Le soglie della tabella sono gli obiettivi di uscita dalla Fase 1 proposti da A6, coerenti con le ipotesi di partenza del Context v3 (oltre 95% sui campi di testata, 85-95% sui limiti, 70-90% sulla completezza degli elenchi) **\[OPINIONE, A6 4.1\]**. Si misurano sul set di test sigillato, mai sul sintetico, con intervalli di confidenza calcolati ricampionando i documenti e non i campi **\[OPINIONE, A6 1.2\]**.

| Famiglia | Metrica | Come si calcola | Soglia di partenza | Fonte |
| --- | --- | --- | --- | --- |
| Qualità | F1 per campo | Confronto esatto con il valore etichettato, dopo normalizzazione; micro sul totale e per tipo di campo | Micro almeno 95%; nessun campo critico sotto il 90% | A6 4.1 |
| Qualità | Precisione sui campi vuoti | Quota di campi assenti nell'etichetta per cui il sistema restituisce "nessun valore" | Almeno 98% | A6 4.1 |
| Qualità | Recall e precisione sugli elenchi | Elementi corretti su elementi etichettati (ubicazioni, garanzie, veicoli) | Recall almeno 95%, precisione almeno 97% | A6 4.1 |
| Qualità | Abbinamento appendice-polizza madre | Abbinamenti corretti; stato vigente o superato dei campi modificati | Almeno 98%; stato almeno 95% | A6 4.1 |
| Qualità | Eccezioni per 100 titoli | Righe contabili che non chiudono, per 100 titoli lavorati | Linea di base da misurare; obiettivo relativo da fissare | A7 raccomandazione 3 |
| Sicurezza | Citazione verificata | Estratto presente nel testo OCR della pagina indicata; e che contiene il valore | Almeno 98% esistenti; almeno 95% che supportano il valore, a campione | A6 4.1 |
| Sicurezza | Affermazioni senza fonte | Valori o frasi senza citazione verificabile | Obiettivo zero, dichiarato come limite superiore 3/n al 95% | A6 1.2 |
| Sicurezza | Errori della macchina non intercettati | Campi errati accettati dal revisore su campi errati proposti | Al massimo 10% sui campi critici | A6 4.1 |
| Sicurezza | Fughe di dati personali verso i modelli | Dati personali non mascherati per pagina, misurati su DEV-R | Da fissare con il legale | A6 3.2; cap. 4.4 |
| Leva | Minuti di revisione per pacchetto | Tempo attivo strumentato, assistito contro manuale | Riduzione almeno 30% a parità di accuratezza finale | A6 4.1 |
| Leva | Ore per polizza all'anno | Somma dei minuti per operazione sui processi misurati, ricondotta alla polizza (cap. 4.6) | Riduzione oltre il 40% a parità di accuratezza | A9 raccomandazione 3; D62 |
| Leva | Documenti e polizze per addetto; costo per polizza | Derivati dalle ore per polizza (cap. 4.6) | Nessuna soglia: si riportano con il loro intervallo | Context v3 |

**Campo critico.** Nella libreria sono critici massimali, sottolimiti, franchigie, scoperti, esclusioni, date e premi (D43). L'elenco definitivo per ramo va validato con un tecnico assicurativo **\[OPINIONE, A6 1.1\]**.

### Tre regole di lettura

1. **Una metrica senza il suo campione non si comunica.** Ogni numero esce con set, versione, numero di pacchetti, data e intervallo di confidenza (D58). Con 40 documenti un campo al 90% ha un intervallo da circa 77% a 96% **\[STIMA, A6 1.2\]**: non distingue un campo buono da uno mediocre.
2. **Qualità e leva si leggono insieme.** Una riduzione del tempo di revisione con più errori non intercettati è un peggioramento, non un risparmio **\[OPINIONE, A6 4.3\]**.
3. **Il sintetico non dichiara la qualità.** Serve alla regressione: ogni modifica non deve peggiorare nulla. Le metriche sul sintetico e sul reale si riportano separate **\[OPINIONE, A6 2.4\]**.

### Che cosa vuol dire "successo" a marzo 2027

La Fase 1 riesce se a marzo 2027 il team può scrivere tre frasi verificabili **\[OPINIONE\]**: con quale F1 l'MVP estrae ciascun campo critico da polizze PMI italiane reali, su quanti pacchetti e con quale intervallo; di quanto cambiano le ore per polizza sui processi misurati in due broker reali, a parità di accuratezza; quali delle quattro condizioni del trigger della forma (D62) sono vere. Se una delle tre frasi non si può scrivere, la Fase 1 non ha fallito sulla tecnologia ma sulla misura, e va prolungata prima di qualunque decisione di Fase 2.

### Alfa: che cosa si misura su un cliente

Sulle sette polizze di Alfa il sistema estrae circa 40-60 campi per pacchetto contrattuale (il nucleo di A6), cioè alcune centinaia di valori **\[STIMA, A6 1.1 applicato ad Alfa\]**. Di questi, i campi critici sono la somma assicurata del capannone, lo scoperto del 10% con minimo 2.500 euro, i massimali RCT/RCO e RC prodotti, le date e i premi. Per ciascuno il report di misura dice se l'estrazione era corretta, se la citazione esisteva e conteneva il valore, quanti minuti la revisione ha richiesto e se l'errore iniettato sulla franchigia furto è stato intercettato. Sul lato denaro, il bonifico cumulativo di gennaio genera sette titoli e tre controparti: la metrica è quante righe chiudono da sole e quante vanno a H3 **\[Ipotesi dell'esempio\]**.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Limite di accordo tra annotatori umani su polizze PMI | Oltre quel limite non ha senso dichiarare accuratezza | Doppia annotazione sul campione iniziale (cap. 4.5) |
| Correlazione degli errori dentro lo stesso documento | Cambia la dimensione necessaria del set | Statistico, sul campione iniziale |
| Linea di base delle eccezioni per 100 titoli in un broker PMI | Senza, la metrica del ramo denaro non ha riferimento | Amministrazione di due broker PMI |
| Soglia accettabile di fughe di dati personali | Decide se il mascheramento è sufficiente | Avvocato privacy; DPO |
| Elenco definitivo dei campi critici per ramo PMI | Definisce dove vale la soglia del 90% | Tecnico assicurativo senior |

## 4.2 Perimetro

**In sintesi.** Nella Fase 1 l'MVP lavora sui due casi d'uso candidati in parallelo: **dal documento al dato** (processi P02, P09, P12, P13, con le cauzioni P19 come banco di prova) e **dal dato al denaro** (P10, P16 e in parte P11). Lavora su polizze danni di PMI, su dati sintetici, set informativi pubblici e documenti reali mascherati sotto accordo scritto; produce solo esportazioni verso un gestionale di test e report di misura (D56). Fuori restano tutto ciò che raggiunge un cliente reale, i rami vita, i sinistri, la negoziazione e i modelli predittivi. Il perimetro si restringe dopo il passo 3: lo studio dei tempi sceglie quale dei due rami consolidare (D03, D52). Il perimetro non dipende dai dati dello stage, le cui condizioni non sono scritte **\[FATTO, Context v3, rischi\]**.

### Dentro, fuori, dopo

| Dimensione | Dentro l'MVP | Fuori dall'MVP | Dopo la Fase 1 |
| --- | --- | --- | --- |
| Casi d'uso | (a) dal documento al dato; (b) dal dato al denaro; variante "emesso contro negoziato" (P09) come Should | (c) confronto e audit verso clienti reali; gap analysis come prodotto (D46) | (c) con un soggetto abilitato e il gate H4 aperto; kit di due diligence (Volume 5) |
| Processi | P02, P09, P12, P13; P10, P16; P11 per le regolazioni; P19 come banco | P03, P05-P07 (risk assessment e mercato), P14 sinistri, P21 rete | P22 migrazione di portafogli acquisiti |
| Rami di polizza | Multirischi a pacchetto, RCT/RCO, RC prodotti, flotte con libro matricola, infortuni (con oscuramento), tutela legale, Cat Nat, cauzioni | Vita e TCM collettive (D47); D&O e programmi internazionali per il target PMI | Altri rami dopo i primi 30-50 documenti analizzati (verticali, Context v3) |
| Sorgenti in ingresso | Upload; casella email e PEC di test; PDF nativi e scansioni; Excel e CSV; CBI RH; FatturaPA XML | Portali delle compagnie via RPA (D41); Open Banking non verificato (D31) | Flussi AIBA Digital e SSF se le specifiche si ottengono; API dei gestionali |
| Dati | SYN; set informativi pubblici nei limiti di licenza; DEV-R e TEST-R reali mascherati sotto accordo (D12) | Dati dello stage finché le condizioni non sono scritte; dati sanitari e giudiziari ai modelli (D47) | Portafogli dei broker partner con accordo di servizio |
| Uscite | Export verso il gestionale di un broker di test; report di misura; dossier di conformità su sintetico | Qualunque report o raccomandazione a un cliente reale (D06) | Report firmati dal validatore abilitato |
| Utenti | Operatore, amministrazione, custode dei dati, annotatore, amministratore tecnico; validatore solo su sintetico | Cliente | Cliente con accesso al proprio fascicolo |
| Titolari (tenant) | Almeno due broker di test separati, più un tenant sintetico | — | Broker partner, società del gruppo |

La tabella è una proposta del volume **\[OPINIONE, sintesi di D33, D36, D41, D46, D47, D56\]**.

### Perché questi rami

I rami scelti sono quelli dove le PMI hanno set informativi pubblici e struttura ricorrente (multirischi, RCT/RCO, Cat Nat, tutela legale) e quelli che mettono alla prova i punti fragili dell'estrazione: la tabella dei limiti, il libro matricola come Excel, il glossario della polizza **\[OPINIONE, A9 tab. 2.2; Volume 2, cap. 2.7\]**. La RC prodotti è dentro nonostante la bassa standardizzazione: è il ramo dove un massimale sbagliato costa di più per un'azienda come Alfa **\[OPINIONE\]**. La polizza infortuni è dentro solo con oscuramento a monte dei dati che possono essere sanitari (R16). I sinistri restano fuori perché A2 ne stima il ritorno basso per un MVP e contengono dati sanitari **\[OPINIONE, A2 4.2\]**.

### Volumi di lavoro attesi

L'MVP non è dimensionato su un carico di produzione ma su un carico di misura **\[OPINIONE\]**. Il carico minimo è dato dal collaudo: 60-100 pacchetti nel set di test, 20-30 in sviluppo, 300-1.000 sintetici **\[OPINIONE, A6\]**; per il ramo denaro, un banco di titoli e movimenti sintetici la cui dimensione non è fissata da nessuna fonte (cap. 4.5). Per riferimento, un micro-broker con 1.500-4.000 polizze lavora 6-16 scadenze al giorno lavorativo **\[STIMA, A9 mod. 6\]**: è l'ordine di grandezza da reggere nel pilota senza code che si allungano.

### Il perimetro si restringe al passo 3

Dopo lo studio dei tempi uno dei due rami diventa il caso da consolidare e l'altro resta al livello raggiunto, senza essere abbandonato: il modello dati li tiene insieme e la due diligence del Volume 5 li richiede entrambi (D51) **\[OPINIONE\]**. I criteri di scelta sono quelli di D52, nell'ordine: ore risparmiate per polizza, qualità raggiunta, rischio regolatorio residuo, riuso nel consolidamento.

### Alfa nel perimetro

Del fascicolo di Alfa entrano nell'MVP le sette schede e condizioni, le quattordici quietanze, l'appendice del magazzino, la regolazione RCT/RCO, il libro matricola, la disdetta via PEC, il bonifico cumulativo di gennaio e le rimesse alle tre controparti **\[Ipotesi dell'esempio\]**. Restano fuori la denuncia e la perizia dell'incendio della pressa (P14) e qualunque osservazione sul massimale della RC prodotti verso Alfa: la capacità di notarlo esiste, ma l'osservazione non esce (caso c). La polizza infortuni entra solo dopo l'oscuramento dei dati di titolare e dirigenti che possono essere sanitari.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Quale dei due rami rende di più | Restringe il perimetro al passo 3 | Studio dei tempi (cap. 4.6) |
| Quali gestionali usano i broker di test | Decide l'adattatore di uscita | I broker di test; fornitori |
| Condizioni scritte dello stage | Se e quali dati o processi possono entrare | Chi gestisce lo stage; un legale |
| Quota di scansioni e foto nei documenti PMI | Dimensiona OCR e revisione | Back office di un broker |
| Fascia di fatturato del target | Stratificazione del golden set | Primi dati e prove con broker (D02) |

## 4.3 Requisiti funzionali

**In sintesi.** I requisiti funzionali dicono che cosa il sistema fa, non come lo fa. Sono 34, divisi in nove aree che seguono la pipeline del Volume 2: acquisizione, classificazione, estrazione, normalizzazione e coerenza, precedenza e collegamento, denaro, revisione e registro, uscite, banco di prova. Ventisei sono **Must**, otto **Should**; i **Won't** sono raccolti nel capitolo 4.8. Ogni requisito ha un criterio di accettazione con metrica, campione e soglia; le soglie numeriche rinviano al capitolo 4.1 e sono ipotesi. Due principi attraversano tutti i requisiti: la macchina propone e una persona decide sui campi critici (D43, D54), e nessun valore entra senza citazione verificata **\[OPINIONE, A2 KF2\]**.

**Come leggere i criteri.** "Su SYN" vuol dire che il test gira sul banco sintetico, dove la verità è nota per costruzione e i casi difficili si iniettano apposta: lì si chiede il 100% quando il comportamento è deterministico. "Su DEV-R" e "su TEST-R" vogliono dire documenti reali mascherati, di sviluppo o di test sigillato (cap. 4.5). Un criterio "misurato" senza soglia è un requisito di strumentazione: il valore si fissa con il CTO dopo il campione iniziale.

### Acquisizione

| ID | Requisito | Pr. | Criterio di accettazione | Fonte |
| --- | --- | --- | --- | --- |
| RF01 | Acquisire documenti da upload e da una casella email e PEC di test, compresi allegati annidati; calcolare l'hash, eliminare i duplicati, registrare Fonte ed Evento | Must | Su SYN: 100% dei documenti con hash, Fonte ed Evento; 100% dei duplicati identici rilevati | Volume 2, cap. 2.6 fase 1; A7 4.3 |
| RF02 | Controllo di qualità al caricamento (risoluzione, inclinazione, pagine mancanti) con richiesta di ricaricare | Must | Ogni documento ha un esito di qualità registrato; su SYN degradato "forte" la quota segnalata è misurata e riportata | A2 4.3 n. 9 |
| RF03 | Adattatori deterministici per CBI RH, Excel e CSV (libri matricola, estratti conto), FatturaPA XML | Must | Su SYN: righe lette uguali alle righe del file (100%); nessun file strutturato passa da un modello linguistico | Volume 2, cap. 2.2; A5 2.7 |
| RF04 | Adattatore per flussi AIBA Digital o SSF | Should | Solo se la specifica è ottenuta per iscritto; stesso criterio di RF03 | A7 raccomandazione 7 |

### Classificazione

| ID | Requisito | Pr. | Criterio di accettazione | Fonte |
| --- | --- | --- | --- | --- |
| RF05 | Riconoscere il tipo di documento (scheda, condizioni, appendice, quietanza, estratto conto, libro matricola, certificato di cauzione, DIP, PEC di disdetta, altro) | Must | Accuratezza per tipo misurata su DEV-R; 100% dei documenti sotto la soglia di confidenza e un campione casuale vanno a H1 (quota del campione da fissare) | Volume 2, cap. 2.6 |
| RF06 | Segnalare i documenti che possono contenere dati sanitari o giudiziari prima di ogni chiamata a un modello | Must | Su SYN con casi iniettati: 100% segnalati e bloccati fino all'oscuramento; su DEV-R recall misurata | R16; D47 |

### Estrazione

| ID | Requisito | Pr. | Criterio di accettazione | Fonte |
| --- | --- | --- | --- | --- |
| RF07 | Estrarre i campi nello schema canonico versionato (nucleo di 40-60 campi per pacchetto, da adattare ai rami PMI), con valore originale, valore normalizzato e tipo di nullo (assente, non applicabile, illeggibile, rinvio esterno) | Must | Output valido contro lo schema nel 100% dei casi, con nuovo tentativo automatico; F1 e precisione sui vuoti come cap. 4.1 su TEST-R | A6 1.1 e 1.3; A2 4.3 n. 1 e 11 |
| RF08 | Citazione verificata: per ogni valore pagina, riquadro ed estratto letterale; corrispondenza di stringa con il testo OCR della pagina; rifiuto automatico se fallisce | Must | Su SYN con citazioni false iniettate: 100% respinte; su TEST-R le soglie di citazione del cap. 4.1 | A2 KF2; D43 |
| RF09 | Segmentare i documenti lunghi per articolo e controllare la completezza tra indice ed estratti | Must | Su SYN con condizioni oltre 50 pagine: articoli mancanti segnalati nel 100% dei casi iniettati | A2 4.3 n. 2 |
| RF10 | Leggere la tabella dei limiti nell'oggetto Limite (tipo, valore, unità, base, relazione "parte di" o "in aggiunta a"); relazione non dichiarata registrata come tale e inviata a una persona | Must | Su SYN: 100% delle relazioni non dichiarate a revisione; F1 sui limiti come cap. 4.1 | A5 2.0; Volume 2, cap. 2.4 |
| RF11 | Doppia estrazione con due estrattori indipendenti sui campi critici; i disaccordi vanno in testa alla coda con entrambi i valori | Should | Disaccordi misurati per campo; correttezza dei campi concordi riportata a parte | A2 4.3; Volume 3, cap. 3.3 |
| RF12 | Risolvere i rinvii tra articoli in un passaggio separato e citare entrambi gli articoli | Should | Su SYN con rinvii iniettati: quota risolta misurata | A2 4.3 n. 7 |
| RF13 | Conservare il rilievo grafico (grassetto, maiuscoletto) e lo stato di attivazione delle garanzie "operanti se richiamate" | Should | Su SYN: garanzie non acquistate mai proposte come operanti (100%) | Volume 2, cap. 2.7 n. 16-17 |

Una nota sulla doppia estrazione. A2 la indica come una delle cinque tecniche da mettere nella specifica, ma la colloca nel build solido; il Volume 2 la sposta al passo di uscita (D45) **\[FATTO: incoerenza interna ad A2\]**. Questo volume la tiene Should per l'MVP e Must prima che qualunque output raggiunga un cliente: senza di essa la confidenza che ordina la coda poggia solo sull'OCR **\[OPINIONE\]**.

### Normalizzazione e coerenza

| ID | Requisito | Pr. | Criterio di accettazione | Fonte |
| --- | --- | --- | --- | --- |
| RF14 | Normalizzatori in codice per i formati italiani: separatori decimali per documento e lingua, valute, importi in lettere, date gg/mm/aaaa e testuali, "ore 24.00", per mille, scoperti con minimo e massimo, frazioni come 1/360 | Must | Suite di test unitari su casi reali (almeno quelli di A5 4.4 e A2 output 4 punto 6): 100% verdi; nessuna normalizzazione affidata al modello | A5 4.4; A2 7.7 |
| RF15 | Regole di coerenza: sottolimite non superiore al massimale; lordo uguale a imponibile più imposte con l'aliquota del ramo; cifre uguali a lettere; quote di coassicurazione al 100%; date coerenti | Must | Su SYN con incoerenze iniettate (10-20% dei documenti): 100% rilevate e mandate a revisione | A6 2.1; Volume 2, cap. 2.8 |

### Precedenza e collegamento

| ID | Requisito | Pr. | Criterio di accettazione | Fonte |
| --- | --- | --- | --- | --- |
| RF16 | Motore di precedenza configurabile: legge la clausola di prevalenza del contratto, applica le regole R1-R10 o l'ordine di default, registra la regola usata | Must | Stato vigente o superato come cap. 4.1 su TEST-R; ogni decisione è un Evento con le due Evidenze | A5 3.2; Volume 2, cap. 2.5 |
| RF17 | Inviare a una persona (H2) gli undici casi ambigui, compresi "più favorevole al Contraente" ed edizione delle condizioni non indicata | Must | Su SYN: 100% dei casi ambigui iniettati arrivano a H2 e nessuno è deciso dalla macchina | A5 3.4 |
| RF18 | Abbinare appendici e regolazioni alla versione madre con chiavi deterministiche e corrispondenza approssimata; elenco degli orfani; H2 per gli abbinamenti non univoci | Must | Abbinamento come cap. 4.1; 100% dei non univoci a H2 | A2 4.3 n. 8; A6 4.1 |
| RF19 | ContrattoLogico con identificativi esterni multipli (numero della compagnia, dell'agenzia, del gestionale) | Must | Su SYN con polizze via agenzia: 100% dei documenti collegati allo stesso contratto logico | D38 |

### Denaro

| ID | Requisito | Pr. | Criterio di accettazione | Fonte |
| --- | --- | --- | --- | --- |
| RF20 | Costruire le righe attese dai titoli: lordo dovuto, rimessa dovuta, provvigione attesa al netto della ritenuta, retrocessione dovuta | Must | Su SYN: 100% delle attese uguali a quelle calcolate dal generatore | A4 mod. 2; Volume 2, cap. 2.8 |
| RF21 | Leggere il regime di incasso di ogni titolo dall'accordo con la controparte valido alla data del pagamento, mai dedurlo; regime ignoto o periodo non coperto da accordo come eccezione e come pagamento non liberatorio (D74) | Must | Su SYN: 100% dei titoli con regime ignoto in eccezione | R12 |
| RF22 | Abbinamento deterministico; proposta di ripartizione dei bonifici cumulativi e dei pagamenti in tranche; nessuna proposta chiude una partita senza H3 | Must | Eccezioni per 100 titoli misurate; 0 partite chiuse da una proposta senza decisione umana | Volume 2, cap. 2.8; A7 |
| RF23 | Misurare entrambi gli intervalli della regola dei dieci giorni: ricevimento-accredito sul conto separato e incasso-rimessa | Must | 100% dei titoli con date disponibili hanno entrambi gli intervalli calcolati e gli sforamenti in eccezione | D42; R13 |
| RF24 | Calcolo delle regolazioni premio da dichiarazioni a consuntivo | Should | Su SYN: 100% dei calcoli uguali al generatore | A2 4.2 n. 11 |

### Revisione e registro

| ID | Requisito | Pr. | Criterio di accettazione | Fonte |
| --- | --- | --- | --- | --- |
| RF25 | Interfaccia di revisione: valore e pagina affiancati, revisione per documento, disaccordi e conflitti con la regola applicata in evidenza, nessuna conferma in blocco sui campi critici | Must | Prova d'uso con due operatori; un documento si chiude solo quando ogni campo critico ha uno stato (100%) | Volume 3, cap. 3.3; D54 |
| RF26 | Registro della validazione campo per campo: campo e versione, proposta, evidenza mostrata, decisione, valore finale, motivazione obbligatoria se modificato o respinto, azioni di controllo, autore, ruolo, ora | Must | Audit del registro su un campione: 100% degli eventi con tutti gli elementi | A3 output 5; D54 |
| RF27 | Strumentazione: tempo attivo (escluse le pause oltre 60 secondi), citazioni aperte, campi modificati, scorrimento del PDF | Must | Dati presenti per il 100% delle sessioni di revisione | A6 4.3 |
| RF28 | Modalità di misura: stessa interfaccia senza proposte (manuale) e con errori noti iniettati in una quota configurabile dei campi (5-10% nel disegno di A6), con registro di quali | Must | Configurabile per sessione; quota realizzata entro un punto da quella impostata | A6 4.3; D55 |
| RF29 | Gate H4 presente e chiuso: nessun output con raccomandazione può uscire | Must | Test di tentata esportazione di un report: 100% bloccati, con evento registrato | R01; D06 |

### Uscite

| ID | Requisito | Pr. | Criterio di accettazione | Fonte |
| --- | --- | --- | --- | --- |
| RF30 | Esportazione verso il gestionale di un broker di test nel suo formato di import (default CSV o XLS); solo dati validati; registro di che cosa è stato scritto, quando e in quale file | Must | Import senza errori in un ambiente di test di almeno un gestionale (gate G4) | D41; D56; A7 5.3 |
| RF31 | Report di misura automatico per release: metriche del cap. 4.1 con intervalli per documento, separate per SYN, DEV-R e TEST-R | Must | Generato dal banco di prova senza interventi manuali | A6 4.2 |
| RF32 | Scadenzario: scadenze, termini di disdetta e di regolazione derivati dalle date estratte, con doppio controllo delle date | Should | Su SYN: 100% delle scadenze corrette | A2 4.2 n. 12 |
| RF33 | Programma assicurativo per cliente ed elenco delle differenze tra polizza emessa e negoziata (P09) | Should | Su SYN con differenze iniettate: recall misurata | D51 |
| RF34 | Dossier di conformità esportabile per cliente e periodo, su dati sintetici | Should | Contiene informativa, esigenze, registro e versioni di modelli e regole (100% degli elementi) | D56; Volume 3, cap. 3.4 |

Il banco di prova (generatore sintetico, esecutore dei test, integrazione continua) è anch'esso un requisito Must; è descritto con i suoi criteri nel capitolo 4.5 per non separarlo dal collaudo.

### Alfa: tre requisiti al lavoro

Quando arriva il frontespizio rinnovato della multirischi, RF08 respinge un valore del macchinario la cui citazione non compare nel testo OCR; RF11, se attivo, mette in testa alla coda il disaccordo tra 850.000 e 650.000 euro causato dal timbro; RF26 registra che l'operatrice ha aperto la citazione e motivato la scelta con l'importo in lettere. A gennaio RF21 sa che il pagamento alla Compagnia B non è liberatorio e RF23 apre il conto dei dieci giorni su entrambi gli intervalli **\[Ipotesi dell'esempio\]**.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Formati di import dei gestionali dei broker di test | Criterio di RF30 | Fornitori di gestionali; i broker |
| Quota di campionamento casuale a H1 | Costo umano della classificazione | CTO, dopo il campione iniziale |
| Lista definitiva dei campi del nucleo per i rami PMI | Schema di RF07 | Tecnico assicurativo senior |
| Specifiche SSF e formato di uscita di AIBA Digital | Decide se RF04 diventa possibile | Software house socia SHARE; AIBA |
| Recall reale del riconoscimento dei dati sanitari | Criterio di RF06 su documenti veri | Ingegnere ML, su DEV-R |

## 4.4 Requisiti non funzionali

**In sintesi.** I requisiti non funzionali dicono con quali garanzie il sistema lavora: chi può vedere che cosa, che cosa resta scritto per sempre, dove passano i dati, quanto a lungo si conservano. In questo progetto pesano più di quelli funzionali, perché vengono quasi tutti da vincoli normativi che non dipendono dalla strategia (Context v3) e perché sono i più costosi da aggiungere dopo: la separazione per titolare e il registro immutabile, se mancano dal primo giorno, obbligano a riscrivere la persistenza **\[OPINIONE, bozza 3.1\]**. I requisiti sono diciassette, tutti Must salvo due; ciascuno rinvia al requisito di conformità R01-R24 da cui deriva e va verificato con un legale prima del primo documento reale. Le fonti non indicano soglie di latenza o di disponibilità: per un MVP di misura il vincolo è il tempo di revisione umana, non la velocità della macchina **\[OPINIONE\]**.

### Integrità e prova

| ID | Requisito | Pr. | Criterio di accettazione | Deriva da |
| --- | --- | --- | --- | --- |
| RNF01 | Registro degli eventi immutabile: caricamenti, estrazioni, versioni di modelli e prompt, modifiche umane, approvazioni, esportazioni. Solo aggiunta, con hash concatenati o archiviazione WORM | Must | Un tentativo di modificare o cancellare un evento fallisce ed è esso stesso registrato; la catena di hash si verifica da un comando | R10; A3 output 5 |
| RNF02 | I gate H1-H4 sono stati del flusso, non avvisi: un dato non avanza finché il gate non è chiuso | Must | Test di regressione: nessun percorso del codice porta un dato oltre un gate aperto (100%) | R01; bozza 3.1 principio 5 |
| RNF03 | Bitemporalità: ogni fatto ha data di validità e data di registrazione | Must | Il sistema risponde sia a "che cosa valeva al giorno X" sia a "che cosa sapevamo al giorno X" su un caso di SYN con appendice retroattiva | D38; A7 4.2 |
| RNF04 | Riproducibilità: prompt, schemi e regole come codice versionato; testo OCR grezzo salvato; identificativo esatto del modello e dei parametri a ogni esecuzione | Must | Una release si riesegue sullo stesso dataset e dà le stesse metriche entro la varianza misurata (cap. 4.5) | A6 4.2; Context v3, build o buy |

### Dati personali e fornitori

| ID | Requisito | Pr. | Criterio di accettazione | Deriva da |
| --- | --- | --- | --- | --- |
| RNF05 | Mascheramento prima di ogni chiamata a un modello o a un OCR esterno, con la procedura di nove passi del Volume 2 (identificativi con controllo di validità, due riconoscitori di entità italiani, dizionario del documento, oscuramento di firme e timbri, pulizia dei metadati, rasterizzazione) | Must | Fughe misurate su DEV-R per categoria di dato; nessuna chiamata esterna senza l'evento "mascherato" (100%); soglia sulle fughe fissata con il legale | R15; A6 3.2 |
| RNF06 | Documenti reali mascherati trattati come pseudonimizzati, cioè come dati personali, salvo parere legale contrario | Must | Si applicano a DEV-R e TEST-R tutte le regole sui dati personali (accesso, conservazione, cancellazione) | D48; R15 |
| RNF07 | Fornitori di modelli e OCR con elaborazione in UE, nessun addestramento sui dati, conservazione nulla o minima contrattualizzata, accordo di trattamento, elenco dei sub-responsabili, notifica degli incidenti compatibile con le 72 ore | Must | Nessun fornitore attivato senza accordo firmato e verifica della regione effettiva dell'endpoint | R17; A2 7.6 |
| RNF08 | Nessun documento reale in test automatici, set di valutazione non sigillati, ticket, chat o log applicativi | Must | Scansione periodica dei log e dei ticket: zero occorrenze di testo di DEV-R o TEST-R | A3 output 5; A6 5.2 |
| RNF09 | Archivio di apprendimento separato, alimentato solo da output anonimizzati con registro di fonte e base giuridica | Must | Nessun percorso del codice scrive dati in custodia nell'archivio di apprendimento (test di architettura) | R18; D08 |

### Accessi e separazione

| ID | Requisito | Pr. | Criterio di accettazione | Deriva da |
| --- | --- | --- | --- | --- |
| RNF10 | Identificativo di tenant in ogni tabella dei dati in custodia; nessun dato in custodia passa da un tenant all'altro | Must | Test di isolamento con due tenant: zero letture incrociate; le condizioni generali pubbliche vivono nell'area dei dati derivati | D63; Volume 2, cap. 2.4 cardinalità 8 |
| RNF11 | Accessi per ruolo con privilegio minimo (matrice del Volume 3, cap. 3.2), autenticazione a più fattori, ogni accesso ai documenti in chiaro registrato con motivo | Must | Audit degli accessi su un mese di lavoro: 100% degli accessi in chiaro con motivo | D53; A3 output 5 |
| RNF12 | Cifratura a riposo e in transito, chiavi gestite in UE; nessuna copia su dispositivi personali | Must | Verifica della configurazione da parte del tecnico indipendente | A6 5.2 |
| RNF13 | Formazione registrata come condizione per ricevere i permessi di operatore o validatore | Must | Nessun utente operativo senza formazione registrata (100%) | R22; art. 4 AI Act, A3 |

### Conservazione e governo

| ID | Requisito | Pr. | Criterio di accettazione | Deriva da |
| --- | --- | --- | --- | --- |
| RNF14 | Conservazione su tre binari: fascicolo di distribuzione (durata del rapporto più almeno cinque anni); artefatti tecnici intermedi con cancellazione automatica breve; copie di documenti di mercato solo per il tempo necessario | Must | Politiche configurate per classe; cancellazione verificata anche presso i fornitori; durate fissate con il legale | R09; R23; D44 |
| RNF15 | Astrazione sui fornitori di modelli: la logica di business chiama un'interfaccia interna, con instradamento per compito e versioni bloccate; esecuzione settimanale di controllo su SYN per rilevare cambi silenziosi | Must | Cambio di fornitore su un compito senza modifiche al codice di dominio; deriva rilevata entro una settimana | D63; A2 4.3 n. 14 |
| RNF16 | Intestazione e firma dei documenti configurabili, senza codice che dipenda da chi sarà il distributore | Should | Cambio di intestazione per tenant da configurazione | D57; D63 |
| RNF17 | Costo per documento misurato e riportato per release; preferenza per costi a consumo | Should | Costo per pagina e per pacchetto nel report di misura | Volume 2, cap. 2.12; Volume 3, cap. 3.8 |

Un ultimo requisito non è tecnico ma documentale: la **scheda interna del sistema** che registra perché il caso d'uso danni non rientra nell'alto rischio dell'AI Act e che nessuno scoring su vita e salute è previsto (R21). Va scritta prima del pilota e aggiornata a ogni cambio di perimetro **\[OPINIONE, A3 ambito 2\]**.

### Dove i requisiti si toccano

Tre coppie di requisiti vanno progettate insieme, perché l'una può rompere l'altra **\[OPINIONE\]**. Il mascheramento (RNF05) e la citazione verificata (RF08): se il modello vede un testo mascherato, l'estratto citato va ricondotto al testo OCR originale tramite una mappa delle sostituzioni, altrimenti la verifica di stringa fallisce sui nomi. La generalizzazione degli importi prevista dalla procedura di anonimizzazione e la verità di riferimento: perturbare le somme assicurate rompe il golden set, quindi la perturbazione va applicata in modo coerente e registrata nell'etichetta **\[OPINIONE, A6 3.2\]**. Il registro immutabile (RNF01) e la cancellazione (RNF14): il registro deve provare che un controllo è avvenuto senza conservare per sempre il dato personale, quindi registra riferimenti e hash, non il contenuto **\[OPINIONE\]**.

### Alfa: i requisiti invisibili

Nel fascicolo di Alfa i requisiti non funzionali non si vedono, ma decidono che cosa succede. Il nome del responsabile amministrativo nella quietanza della Compagnia B viene sostituito prima dell'estrazione e ricostruito solo nell'interfaccia dell'operatrice (RNF05). Il testo OCR della perizia dell'incendio, artefatto intermedio, viene cancellato secondo la sua politica breve, mentre il registro conserva che l'operatrice l'ha aperto (RNF01, RNF14). Se un secondo broker di test usa lo stesso set informativo della multirischi della Compagnia A, le condizioni generali si leggono una volta nell'area dei dati derivati, ma la scheda di Alfa non è mai visibile all'altro tenant (RNF10) **\[Ipotesi dell'esempio\]**.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Quali artefatti tecnici sono documentazione ex art. 67 | Durate di RNF14 | Avvocato di distribuzione |
| Se le polizze mascherate con la procedura sono anonime o pseudonimizzate | RNF06 | Avvocato privacy; DPO |
| Formato del registro per valere come prova di diligenza | RNF01 | Avvocato; assicuratore della RC professionale |
| Garanzie contrattuali effettive dei fornitori scelti | RNF07 | CTO con il legale |
| Prestazioni dei riconoscitori di dati personali italiani su polizze | Soglia di RNF05 | Ingegnere ML, su DEV-R |

## 4.5 Dati e collaudo

**In sintesi.** Il collaudo poggia su quattro insiemi con regole diverse: **TEST-R**, 60-100 pacchetti reali mascherati e sigillati, che misura le release; **DEV-R**, 20-30 pacchetti reali diversi, su cui si sviluppa; **SYN**, 300-1.000 pacchetti sintetici con verità nota, per la regressione; e un **banco denaro** di titoli e movimenti sintetici, che A6 non dimensiona e che questo volume aggiunge **\[OPINIONE, A6 output 1; aggiunta del volume\]**. Prima di tutto c'è un campione iniziale di 10 pacchetti in doppia annotazione, che misura tempi, accordo tra annotatori e correlazione degli errori e ricalcola le dimensioni. Il golden set v1 costa circa 280-540 ore di esperto ed è pronto a fine febbraio 2027 solo se gli accordi con i clienti test sono firmati entro novembre 2026 **\[STIMA, A6 output 1\]**. Il **custode dei dati**, una persona che non sviluppa, tiene il set di test e le chiavi.

### I quattro insiemi

| Insieme | Composizione | Chi lo vede | Per che cosa | Regole |
| --- | --- | --- | --- | --- |
| TEST-R | 60-100 pacchetti reali (raccomandati 80), sotto accordo scritto, mascherati con procedura documentata; doppia annotazione sul 25% | Custode e annotatori durante l'annotazione | Misurare le release e dichiarare la qualità | Sigillato con manifest e hash; al massimo un'esecuzione per release; solo aggregati agli sviluppatori; rinnovo ogni sei mesi |
| DEV-R | 20-30 pacchetti reali, diversi da TEST-R per cliente e, dove possibile, per compagnia | Team di sviluppo nominato | Iterare prompt, regole, pipeline | Split per cliente e per famiglia di modello di documento |
| SYN | 300 pacchetti nella v1, fino a 1.000; verità scritta dal generatore; difetti iniettati nel 10-20% | Tutti, compreso il tecnico indipendente | Regressione a ogni modifica; prove di resistenza | Mai usato per dichiarare la qualità; riproducibile al byte con seme fisso |
| Banco denaro | Titoli, quietanze, movimenti CBI, estratti conto e fatture sintetici, con abbinamenti noti ed eccezioni iniettate; più file reali anonimizzati per l'adattatore bancario | Team di sviluppo | Misurare eccezioni per 100 titoli e collaudare il motore di riconciliazione | Copre i tre regimi di incasso, i bonifici cumulativi, le tranche, la ritenuta, i due intervalli dei dieci giorni |

Le dimensioni di TEST-R, DEV-R e SYN sono di A6 **\[OPINIONE, A6 1.2, fondata sui suoi calcoli\]**. La loro ragione è statistica: l'unità di misura è il documento, non il campo, perché gli errori di uno stesso documento sono correlati; con 40 documenti non si distingue un campo al 90% da uno all'80%, e per confrontare due fornitori servono almeno 60-80 documenti **\[STIMA, A6 1.2\]**. Per questo il Context v3, che ipotizzava 30-50 polizze, è stato corretto (D39). La dimensione del banco denaro non ha fonte e si fissa con il CTO **\[lacuna\]**.

### Il pacchetto come unità

L'unità di campionamento è il **pacchetto contrattuale**: polizza madre con appendici, allegati e condizioni richiamate, perché un'appendice non ha senso senza la polizza che modifica **\[OPINIONE, A6 1.1\]**. Il Volume 2 suggeriva come unità naturale il fascicolo di un cliente come Alfa, con sette polizze **\[OPINIONE, Volume 2, cap. 2.10\]**. Le due proposte servono a cose diverse e si tengono entrambe: il pacchetto contrattuale è l'unità statistica delle metriche di estrazione; il fascicolo del cliente è l'unità del programma assicurativo e del banco denaro **\[OPINIONE\]**. Un fascicolo come quello di Alfa contribuisce quindi sette pacchetti a TEST-R, e lo split tra sviluppo e test si fa per cliente, così che i sette pacchetti finiscano tutti nello stesso insieme.

### La stratificazione per le PMI

A6 propone strati pensati per il corporate: almeno il 25% di testi inglesi o bilingui, almeno il 20% oltre 50 pagine, rami come D&O e trasporti **\[OPINIONE, A6 1.1\]**. Per un target PMI vanno rivisti **\[OPINIONE\]**.

| Dimensione | Strati proposti per le PMI | Quota minima proposta | Rispetto ad A6 |
| --- | --- | --- | --- |
| Ramo | Multirischi; RCT/RCO; RC prodotti; flotte con libro matricola; infortuni; tutela legale; Cat Nat; cauzioni | Almeno 8 pacchetti per i primi cinque rami | Cambiano i rami; resta la quota |
| Origine | PDF nativo; scansione buona; scansione degradata o foto | Almeno 20% scansioni, almeno 10% degradate | Uguale: gli archivi dei micro-broker hanno scansioni firmate (A9) |
| Lunghezza | Sotto 20 pagine; 20-50; oltre 50 | Almeno 20% oltre 50 pagine con le condizioni richiamate | Uguale: le condizioni PMI vanno da 40 a 150 pagine (A9) |
| Struttura | Senza appendici; 1-2; 3 o più, o regolazioni | Almeno 30% con appendici | Uguale |
| Canale | Diretto con la compagnia; tramite agenzia | Almeno 20% tramite agenzia | Nuovo: 10-15% dei premi PMI passa da broker via agenzia (A9, stima) |
| Lingua | Italiano; inglese o bilingue | Nessuna quota minima; presenti se compaiono | Ridotta rispetto al 25% di A6 |
| Emittente | Almeno 8 compagnie | Nessuna oltre il 20% | Uguale |
| Annata | Prima e dopo le linee guida ANIA 2019 | Entrambe presenti | Nuovo: due generazioni di layout (A5) |

Le quote sono un punto di partenza, da rivedere dopo il campione iniziale e quando la fascia di fatturato del target sarà fissata (D02).

### L'etichetta e l'annotazione

Ogni valore annotato ha la stessa struttura dell'estrazione del modello canonico: identificativo del campo, valore normalizzato, valore originale, pagina e riquadro, tipo di nullo, livello di fonte, stato vigente o superato con data di effetto, lingua, annotatore, versione del manuale, confidenza **\[OPINIONE, A6 1.3\]**. Le regole di annotazione sono queste **\[OPINIONE, A6 1.4-1.6\]**:

1. **Manuale scritto prima di annotare**, versionato, con definizioni, esempi e regole di precedenza; per 50 campi un manuale di 20-40 pagine è un ordine di grandezza ragionevole (stima per analogia con CUAD).
2. **Si annota ciò che è scritto**: se due documenti dicono cose diverse si annotano entrambi con il segno di conflitto.
3. **Nessuna pre-annotazione con un modello sul set di test**: induce ancoraggio verso l'output del modello; ammessa solo su DEV-R e SYN.
4. **Doppia annotazione sul 25% di TEST-R**, stratificata, da due esperti indipendenti che non vedono il lavoro l'uno dell'altro.
5. **Accordo misurato** come accordo esatto sul valore normalizzato e F1 tra annotatori, più kappa sulle decisioni categoriali, sempre riportati insieme all'accordo percentuale. Soglie di partenza: accordo esatto almeno 90% su numeri e date, kappa almeno 0,80 sul tipo di nullo e sul livello di fonte.
6. **Arbitraggio** di un terzo esperto senior con registro motivato; i casi ambigui anche per gli esperti si escludono dal calcolo principale e si riportano a parte.

Servono tre ruoli: un tecnico assicurativo senior che scrive lo schema con il CTO e arbitra; due annotatori con esperienza di polizze, anche junior formati; il custode **\[OPINIONE, A6 1.7\]**. Nessuno di questi ruoli è oggi coperto nel team (Context v3, team) **\[FATTO\]**.

### Tempi e costi

| Voce | Stima | Base |
| --- | --- | --- |
| Ore di esperto per il golden set v1 (80 TEST-R e 20 DEV-R) | 280-540 ore | A6 output 1, ipotesi di 35 pagine medie e 3-6 minuti per pagina |
| Costo a 50-100 euro l'ora | 14.000-54.000 euro | Tariffa ipotizzata da A6, non verificata |
| Banco sintetico v1 | 40-80 ore di esperto più sviluppo software | A6 output 2 |
| Calendario | Circa 20 settimane da ottobre 2026, fine febbraio 2027 | A6 output 1, solo con accordi entro novembre |

Tutta la tabella è **\[STIMA, A6\]**. Per le PMI le 35 pagine medie di A6 sono probabilmente alte per le schede e le appendici ma non per le condizioni richiamate: il costo reale si misura sul campione iniziale **\[OPINIONE\]**. Esclusi costi legali, infrastruttura e tempo del CTO.

### Prima di usare un documento reale

La procedura minima di A6 diventa la checklist del passo 0 **\[OPINIONE, A6 3.4\]**: accordo scritto con il cliente test (finalità, categorie di documenti, esclusioni dei dati sanitari e giudiziari, conservazione, cancellazione, divieto di addestramento, sub-responsabili, diritto di audit, segreto commerciale); qualifica dei ruoli privacy e accordo di trattamento; valutazione d'impatto prima del primo documento; procedura di mascheramento con registro (RNF05); fornitori conformi (RNF07); ingresso in TEST-R solo dopo revisione umana del 100% delle pagine e firma del custode; nessun output consegnato al cliente come raccomandazione.

### Il banco sintetico

Il generatore scrive la verità: i valori nascono nel codice e finiscono nel PDF, mai il contrario **\[OPINIONE, A6 2.1\]**. Si combinano modelli di documento scritti da un tecnico assicurativo, clausole LMA per l'inglese, varianti strutturali (appendici, rinvii, conflitti voluti) ed errori iniettati; la degradazione si simula con librerie come Augraphy e DocCreator più 20-30 foto reali di stampe **\[OPINIONE, A6 2.2\]**. I testi delle compagnie si usano solo come studio non riprodotto, perché le note legali sono state verificate solo per Generali (riproduzione per uso interno non commerciale) e Allianz si tratta come esclusa (D40) **\[FATTO, A6 2.5\]**. Il realismo si convalida in due modi: un test di discriminazione con tre esperti e, soprattutto, la concordanza tra la classifica delle configurazioni sul sintetico e sul reale **\[OPINIONE, A6 2.3\]**. Il modello che eventualmente riscrive i testi deve essere di una famiglia diversa da quello che estrae **\[OPINIONE, A6 2.4\]**.

### Il banco di prova

Il banco di prova è il programma che esegue un sistema in una data versione su un insieme in una data versione e produce le metriche. È un requisito Must con questi criteri **\[OPINIONE, A6 4.2\]**:

| Elemento | Criterio di accettazione |
| --- | --- |
| Esecuzione registrata | Ogni esecuzione registra hash del dataset, versioni di schema e prompt, identificativo del modello e del fornitore, parametri, versione dell'OCR, costi e latenze |
| Integrazione continua su due livelli | A ogni modifica: SYN e DEV-R con soglie di non regressione sui campi critici. A ogni release candidata: TEST-R, eseguito dal custode in ambiente isolato |
| Non determinismo | Ogni configurazione eseguita 3 volte su DEV-R; se la varianza è paragonabile alla differenza tra versioni, il confronto non è conclusivo |
| Confronto tra versioni | Bootstrap appaiato per documento con 10.000 ricampionamenti; regola pre-registrata: B sostituisce A se l'intervallo della differenza sui campi critici non include peggioramenti oltre un punto e l'F1 micro non scende |
| Cambio di fornitore | Esecuzione in parallelo su DEV-R e TEST-R, confronto degli errori per tipo e non solo dell'F1, verifica dei vincoli contrattuali |

### Alfa nel golden set

Se Alfa fosse un cliente test, il suo fascicolo darebbe sette pacchetti a TEST-R o a DEV-R, mai a entrambi **\[Ipotesi dell'esempio\]**. La multirischi con l'appendice del magazzino entra nello strato "con appendici"; la flotta porta un libro matricola Excel, letto dal parser e non dal modello; la merci trasportate porta un richiamo alle clausole inglesi; la polizza infortuni entra solo dopo l'oscuramento dei dati di titolare e dirigenti. Il nome di Alfa, l'indirizzo del capannone e le somme assicurate sono quasi-identificativi: con il CAP, l'attività e un milione sul capannone, Alfa si ritrova in una visura. Per questo il suo fascicolo resta pseudonimizzato anche dopo il mascheramento (D48).

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Chi annota e chi fa da custode | Senza annotatori il golden set non esiste | Rete del CEO; broker partner |
| Pagine medie e ritmo di annotazione su polizze PMI | Costo e tempi reali | Campione iniziale di 10 pacchetti |
| Dimensione e composizione del banco denaro | Validità della metrica del ramo denaro | CTO con l'amministrazione di un broker |
| Tempi reali di firma degli accordi con i clienti test | Decide se TEST-R è pronto a marzo | CEO; legale |
| Note legali delle altre compagnie e statuto dei capitolati di gara | Fonti lecite per il sintetico | Avvocato IP |

## 4.6 Misura della leva

**In sintesi.** La leva è l'ipotesi centrale della tesi e oggi non è un dato: le evidenze pubbliche non provano una moltiplicazione dell'efficienza di molte volte (D05). Il protocollo la misura in quattro tempi: una **linea di base** manuale su sei processi in due broker PMI; un **confronto controbilanciato** tra revisione manuale e assistita, con errori iniettati; la **conversione** dei minuti in ore per polizza, polizze e documenti per addetto e costo per polizza; una **stima del tasso di realizzo** nei broker del pilota. Due avvertenze cambiano la lettura dei risultati **\[STIMA: aritmetica del volume\]**. La prima: una riduzione delle ore del 40%, la soglia del trigger, equivale a 1,67 volte i documenti per addetto, non a dieci. La seconda: la riduzione complessiva vale solo per la quota di ore che cade nei processi automatizzati, quindi è sempre più bassa di quella misurata sul singolo processo.

### Che cosa si misura

Il Context v3 chiede di misurare documenti, polizze e ore per addetto e costo per polizza. Sono tutte derivate di una grandezza sola, i **minuti per operazione** su ciascun processo, moltiplicati per quante volte l'operazione si ripete per polizza in un anno **\[OPINIONE\]**. Le formule sono queste:

```latex
\text{ore per polizza} = \frac{1}{60}\sum_{p} m_p \cdot n_p
\qquad
\text{polizze per addetto} = \frac{H}{\text{ore per polizza}}
\qquad
\text{costo per polizza} = c \cdot \text{ore per polizza} + k
```

Dove m è il numero di minuti per operazione del processo p, n il numero di operazioni per polizza all'anno, H le ore produttive annue di un addetto, c il costo orario pieno e k il costo tecnologico per polizza. A9 usa 45 euro l'ora di costo pieno; il Volume 3 ha usato 1.550 ore produttive per addetto **\[STIMA, A9 3.3; Volume 3, cap. 3.8\]**: sono parametri da sostituire con quelli dei broker del pilota. Il costo pieno serve al costo per polizza; per stimare l'effetto sul margine si usa invece il costo risparmiabile, circa 30 euro l'ora di costo diretto, perché i costi generali non scendono riducendo le ore (D68). Il Volume 5 stima inoltre che Beta Broker lavori al massimo 3,1 ore per polizza, non le 3,5 di A9 (D66): la linea di base deve verificare proprio questo numero.

### Primo tempo: la linea di base

Lo studio dei tempi parte dai sei processi che si ripetono per ogni contratto o rata: raccolta documenti (P02), documentazione precontrattuale (P08), incasso e contabilità (P10), scadenzario e rinnovi (P12), variazioni e appendici (P13), riconciliazione delle provvigioni (P16) (D35). P08 non è automatizzato nell'MVP ma si misura lo stesso: serve a sapere quanta parte delle ore cade fuori dal perimetro. Per ogni processo servono quattro numeri: ore per polizza, documenti per addetto, errori o eccezioni per 100 operazioni, e più avanti minuti di revisione con assistenza.

Le fonti non descrivono un metodo per la linea di base presso un broker; A6 copre solo la revisione assistita. Il volume propone tre strumenti combinati **\[OPINIONE\]**: un diario strutturato delle attività per due settimane, compilato da ogni addetto per processo; il cronometraggio su un campione di operazioni osservate; i conteggi ricavati da gestionale e casella email (polizze, quietanze, appendici, messaggi per pratica). Il diario da solo sovrastima o sottostima secondo chi lo compila; i conteggi da soli non danno i minuti. Lo studio si fa sotto accordo scritto con i due broker, senza dati dello stage.

### Secondo tempo: manuale contro assistito

Il confronto segue il disegno di A6 **\[OPINIONE, A6 4.3\]**:

1. **Incrociato e bilanciato.** Ogni revisore lavora metà dei pacchetti in modo manuale e metà con le proposte della macchina, assegnati a caso; l'ordine delle modalità è bilanciato tra revisori (quadrato latino). Nessun revisore vede lo stesso pacchetto in entrambe le modalità.
2. **Familiarizzazione** su pacchetti esclusi dall'analisi, per assorbire l'apprendimento dell'interfaccia.
3. **Strumentazione** dell'interfaccia (RF27): tempo attivo con le pause oltre 60 secondi escluse, citazioni aperte, campi modificati.
4. **Esito composito**: tempo e accuratezza finale rispetto all'etichetta. Un tempo più basso con più errori non intercettati è un peggioramento.
5. **Errori iniettati** nel 5-10% dei campi proposti, dichiarati nel consenso dei revisori senza dire dove (RF28).
6. **Analisi** con un modello misto sul logaritmo del tempo, con effetti casuali per revisore e per pacchetto.

```latex
\log(\text{tempo}) \sim \text{modalit\`a} + \text{ordine} + \text{difficolt\`a} + (1 \mid \text{revisore}) + (1 \mid \text{pacchetto})
```

Con 4-6 revisori e 40 pacchetti ciascuno la stima è informativa; con meno partecipanti il risultato si dichiara esplorativo **\[STIMA, A6 4.3\]**. Le evidenze esterne mostrano perché il disegno conta: in uno studio randomizzato la semi-automazione risultava più rapida del 25%, ma in uno studio successivo la differenza di tempo era inconcludente **\[FATTO, A6 4.3, studi su revisioni sistematiche in medicina\]**.

**Un problema di disegno da risolvere con il CTO.** Il confronto richiede almeno 40 pacchetti reali diversi per revisore, ma DEV-R ne ha 20-30 e TEST-R per A6 lo vedono solo custode e annotatori **\[FATTO, A6 5.2\]**. Le opzioni sono due **\[OPINIONE\]**: un set dei tempi separato di almeno 40 pacchetti reali, che porta il fabbisogno di documenti reali verso 140-150 pacchetti; oppure usare TEST-R anche per lo studio dei tempi, con revisori che non sviluppano e non hanno annotato quei pacchetti e con risultati solo aggregati. La seconda costa meno e non espone il set agli sviluppatori; va però registrata come deroga alla regola di A6. Il volume la propone come default, da confermare.

**Il ramo denaro** si misura allo stesso modo su un mese sintetico di titoli e movimenti: ogni addetto amministrativo chiude metà delle partite a mano e metà con le proposte del motore. Le metriche sono eccezioni per 100 titoli, minuti per eccezione chiusa e partite chiuse in modo errato **\[OPINIONE, A7 raccomandazione 3\]**.

### Terzo tempo: dai minuti alla leva

I minuti misurati diventano ore per polizza con la formula sopra. Due conversioni vanno sempre riportate insieme al risultato **\[STIMA: aritmetica\]**.

| Riduzione delle ore sul lavoro misurato | Documenti per addetto, a parità di ore | Lettura |
| --- | --- | --- |
| 30% (soglia di A6 sul tempo di revisione) | 1,43 volte | Miglioramento operativo |
| 40% (soglia del trigger, D62) | 1,67 volte | Leva sufficiente per l'uso interno nel consolidamento |
| 50-60% (ipotesi del modello di A9) | 2-2,5 volte | Rende sana la piccola impresa nel modello di A9 |
| 90% | 10 volte | L'ipotesi "molte volte" del Context v3 |

Il moltiplicatore è l'inverso di uno meno la riduzione. Ne segue che l'ipotesi di partenza del Context v3, moltiplicare di molte volte i documenti per addetto, e la soglia del trigger misurano cose diverse: il trigger può essere superato con una leva di 1,67 volte. È corretto, perché anche 1,67 volte basta all'uso nel consolidamento secondo D62, ma va detto, e la tesi "molte volte" resta un'ipotesi non provata finché la misura non supera il 90% **\[OPINIONE\]**.

La seconda conversione è la copertura. Se i processi automatizzati assorbono una quota q delle ore e su di essi la riduzione è r, la riduzione sulle ore totali per polizza è q per r. Con metà delle ore nei processi misurati e il 60% di riduzione su di essi, la riduzione totale è il 30% **\[STIMA: aritmetica\]**. Per questo la linea di base misura anche P08 e le ore fuori perimetro.

### Quarto tempo: il tasso di realizzo

Le ore liberate non sono denaro finché non diventano minor costo o nuovi clienti: è il **tasso di realizzo**, che nel modello di A8 pesa più del livello di automazione **\[OPINIONE, A8 5.4\]**. Il ricalcolo del Volume 3 mostra quanto: al 60% di automazione e al 40% di realizzo il margine sale di circa 165 punti base, non dei circa 240 riportati da A8 (D60). Nella Fase 1 il realizzo non si misura per intero; si stima nei broker del pilota registrando per quattro-otto settimane come vengono usate le ore liberate: polizze nuove lavorate dagli stessi addetti, straordinari o collaboratori esterni non più necessari, tempo spostato sulla consulenza **\[OPINIONE\]**. È la quarta condizione del trigger (D62) e resta una stima.

### Le insidie

| Insidia | Effetto | Contromisura |
| --- | --- | --- |
| Fiducia eccessiva nella macchina | Il tempo scende perché si controlla meno | Esito composito; errori iniettati; soglia del 10% sui campi critici (D55) |
| Apprendimento | La seconda modalità è più veloce per abitudine | Familiarizzazione; ordine bilanciato |
| Selezione dei pacchetti | Si misurano i documenti facili | Assegnazione casuale; strati dichiarati |
| Osservazione | Chi sa di essere misurato lavora diversamente | Periodo di diario abbastanza lungo; confronto con i conteggi dei sistemi |
| Broker diversi | Le ore di un broker non valgono per un altro | Risultati per broker, non solo aggregati |
| Leva confusa con margine | Ore liberate scambiate per risparmio | Realizzo riportato a parte, come stima |

Le prime tre insidie e le contromisure sono di A6; le ultime tre sono del volume **\[OPINIONE\]**.

### Alfa: un foglio di misura

Se le polizze di una piccola impresa richiedono circa 5 ore l'anno ciascuna, come ipotizza A9, le sette polizze di Alfa valgono circa 35 ore l'anno per il broker **\[STIMA, A9 3.3, applicata ad Alfa\]**. Supponiamo che lo studio trovi metà di quelle ore su rinnovi, appendici, quietanze e rimesse, e una riduzione del 60% su quei processi: le ore per polizza scenderebbero da 5 a 3,5, cioè del 30%, sotto la soglia del 40% del trigger **\[Ipotesi dell'esempio\]**. Il foglio di misura di Alfa riporterebbe minuti per operazione su ciascuno dei sei processi, operazioni per polizza, accuratezza finale con e senza macchina, errori iniettati intercettati, e il costo per polizza ricalcolato con il costo orario del broker.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Ore reali per polizza nei sei processi | È la variabile che decide | Studio dei tempi in due broker PMI |
| Quota delle ore che cade nei processi automatizzati | Riduce la leva complessiva | Linea di base, compreso P08 |
| Disponibilità di 4-6 revisori per circa 40 pacchetti ciascuno | Rende la misura informativa o solo esplorativa | Broker del pilota; annotatori esterni |
| Se lo studio dei tempi può usare TEST-R | Fabbisogno di documenti reali | Decisione con il CTO e il tecnico indipendente |
| Tasso di realizzo effettivo | Quarta condizione del trigger | Pilota, poi prime integrazioni |
| Costo orario pieno e ore produttive dei broker del pilota | Conversione in costo per polizza | Amministrazione dei broker |

## 4.7 Percorso di costruzione e gate

**In sintesi.** Il percorso ha cinque passi dentro la Fase 1, ciascuno chiuso da un gate di passaggio misurabile: **Prerequisiti** (G0), **Fondamenta** (G1), **Due rami** (G2), **Misura** (G3), **Pilota** (G4). Si passa al passo successivo quando il gate è superato, non quando scade un mese; le finestre di calendario sono stime che servono solo a vedere se marzo 2027 è raggiungibile **\[OPINIONE, bozza 3.3; A2 7.3\]**. Con le date di oggi non lo è con margine: il percorso arriva al pilota entro marzo solo se gli accordi con i clienti test sono firmati entro novembre e uno sviluppatore senior lavora sul progetto dall'inizio di dicembre **\[STIMA, A6 output 1; A2 7.3\]**. Il percorso riprende l'ordine di costruzione del Volume 2 (D45) e gli dà nomi, criteri e una regola di arresto.

&#91;embedded content: percorso di costruzione · 5 passi, 5 gate\]

Ogni passo si chiude con un gate misurabile; G3 è il punto in cui si sceglie il caso da consolidare o ci si ferma.

### I passi e i loro gate

| Passo | Che cosa si fa | Gate di uscita | Chi decide | Finestra stimata |
| --- | --- | --- | --- | --- |
| 0. Prerequisiti | Accordi scritti con clienti test e broker di test; valutazione d'impatto; accordi di trattamento con i fornitori del ponte; parere legale su mascheramento, ruoli e confine dell'audit (R01, R15, R18); revisione dello schema canonico da un tecnico indipendente; nomina del custode; reclutamento del tecnico assicurativo e di due annotatori; richiesta scritta dei formati di import a 2-3 fornitori di gestionali; sviluppatore senior assegnato | **G0**: almeno un accordo firmato con un cliente test e uno con un broker di test; valutazione d'impatto fatta; schema rivisto; sviluppatore e tecnico assicurativo con impegno scritto | CEO con il legale | Ottobre-novembre 2026 |
| 1. Fondamenta | Modello canonico con tenant e bitemporalità; registro immutabile; archivio dei documenti; mascheramento; banco di prova e SYN v1; ponte di misura a basso costo per la prova pratica dell'Allegato D; campione iniziale di 10 pacchetti in doppia annotazione | **G1**: SYN v1 in integrazione continua; fughe del mascheramento misurate su DEV-R; accordo tra annotatori e correlazione degli errori misurati, dimensioni dei set ricalcolate; prova pratica su almeno due strumenti esistenti | CTO | Novembre-dicembre 2026 |
| 2. Due rami | Ramo documento (RF01-RF19, RF25-RF29) e ramo denaro (RF20-RF24) in parallelo sulle stesse fondamenta; annotazione e sigillo di TEST-R | **G2**: metriche del cap. 4.1 misurate su DEV-R per almeno due fornitori di OCR ed estrazione; eccezioni per 100 titoli misurate sul banco denaro; registro della validazione completo su un audit; TEST-R sigillato | CTO; tecnico indipendente sulle misure | Dicembre 2026-febbraio 2027 |
| 3. Misura | Prima esecuzione di release su TEST-R; studio dei tempi con il confronto controbilanciato (cap. 4.6); scelta del caso da consolidare con i criteri di D52 | **G3**: release misurata su TEST-R con intervalli; studio dei tempi concluso su due broker, o dichiarato esplorativo; decisione sul caso registrata nell'Allegato A | CEO e CTO | Febbraio 2027 |
| 4. Pilota | Il caso scelto in uso presso almeno due broker reali per quattro-otto settimane, su documenti reali mascherati, senza output verso i loro clienti; esportazione verso il gestionale di test (RF30); stima del tasso di realizzo | **G4**: import riuscito in almeno un gestionale; le quattro condizioni del trigger (D62) misurate e riportate; rapporto finale della Fase 1 | CEO, CTO e cofondatori | Febbraio-marzo 2027 |
| 5. Fase 2 | Gate H4 operativo con un soggetto abilitato; output verso clienti; migrazione di portafogli; build solido | Fuori da questo volume | — | Da aprile 2027 |

La colonna delle finestre è **\[STIMA\]**: combina le 20 settimane di A6 per il golden set, le 2-4 settimane del ponte e le 10-12 settimane del build leggero con un solo sviluppatore di A2. Le altre colonne sono una proposta del volume **\[OPINIONE\]**.

### Che cosa cambia rispetto alla bozza

La bozza prevedeva una Fase 0 "pilota" di circa otto settimane su un solo ramo e 20-30 fascicoli annotati, poi fasi di 3-6, 6-12 e 12-24 mesi con onboarding, primi clienti paganti, motore di mercato, sinistri e modelli predittivi **\[FATTO, bozza 3.3\]**. Tre cose cambiano **\[OPINIONE\]**. I 20-30 fascicoli della bozza corrispondono al set di sviluppo DEV-R, non a un pilota: il set di test sigillato è più grande (D39). Il nome "pilota" passa al passo 4, cioè alla prova con broker reali, che è il punto in cui si impara se qualcuno adotta lo strumento (Context v3, rischi). Le fasi successive della bozza (clienti paganti, bidding, sinistri, modelli predittivi) escono dalla Fase 1 o dal perimetro (D36, D46). Resta invece la regola della bozza: i gate sono criteri misurabili, non date.

### La regola di arresto

Un gate non superato apre tre strade, nell'ordine **\[OPINIONE\]**: ripetere il passo con una correzione precisa e una nuova data di verifica; restringere il perimetro (un solo ramo del caso d'uso, meno rami di polizza, solo PDF nativi) e dichiararlo nel rapporto; fermarsi e rivedere la tesi. La terza strada è obbligatoria in un caso: se al G3 la riduzione delle ore per polizza misurata è inferiore al 30% su entrambi i rami a parità di accuratezza, nessuna forma del prodotto regge e la tesi va rivista prima di spendere nel pilota (D62) **\[OPINIONE; la soglia del 30% è quella di A6 sul tempo di revisione\]**. Ogni esito di gate va nell'Allegato A con data e motivazione.

### Il calendario e le sue due dipendenze

Il percorso dipende da due date che il team non controlla da solo. La prima è la firma degli accordi con i clienti test: senza accordi entro novembre il set di test non è pronto entro marzo e la Fase 1 si basa solo su sintetico e sviluppo, dichiarandolo **\[OPINIONE, A6 output 1\]**. La seconda è l'arrivo di chi costruisce: il Context v3 indica il CTO "in selezione" senza data e gli altri ruoli da gennaio 2027 **\[FATTO, Context v3, team\]**. Se lo sviluppatore senior parte a gennaio, le 10-12 settimane del build leggero portano il passo 2 a fine marzo e il pilota nel secondo trimestre 2027 **\[STIMA, A2 7.3\]**. È la falla di calendario principale del piano.

Il volume propone una **data di verifica a metà novembre 2026** **\[OPINIONE\]**: se a quella data non c'è uno sviluppatore con impegno scritto da dicembre, la Fase 1 si estende ufficialmente fino a giugno 2027 e nel frattempo si lavora solo con il ponte, sul golden set e sulla prova pratica degli strumenti esistenti. Estendere la Fase 1 non sposta le scadenze legali: le abilitazioni restano rinviate alla Fase 2 (D06).

### Il costo del percorso

Sommando le stime dei report, il percorso fino al G4 costa circa 34.000-93.000 euro: ponte 2.000-6.000, build leggero 18.000-33.000, golden set 14.000-54.000 **\[STIMA, somma di A2 7.3 e A6 output 1\]**. Sono esclusi costi legali, infrastruttura (100-500 euro al mese tra ponte e build leggero), compenso o equity del CTO e tempo dei broker del pilota. Il capitale di base del Context v3, 100.000 euro, è sopra la stima alta, ma i costi legali non sono stimati da nessuna fonte e la tariffa degli sviluppatori (350-550 euro al giorno) non è verificata **\[FATTO, Context v3; STIMA, A2\]**. Il build solido di A2 (80.000-150.000 euro, 5-6 mesi) resta in Fase 2.

### Alfa lungo il percorso

Al passo 1 Alfa esiste solo come cliente sintetico: un generatore produce il suo fascicolo con l'appendice del magazzino e il bonifico cumulativo, e la verità è nota per costruzione. Al passo 2, se Alfa fosse un cliente test, i suoi sette pacchetti mascherati entrerebbero in DEV-R o in TEST-R. Al passo 3 la sua multirischi è uno dei pacchetti dello studio dei tempi. Al passo 4 il broker di Alfa, se è uno dei due broker del pilota, lavora i rinnovi di ottobre con l'MVP e l'export verso il suo gestionale, e ad Alfa non arriva nulla di diverso dal solito **\[Ipotesi dell'esempio\]**.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Data di ingresso del CTO o di uno sviluppatore senior | Decide se marzo 2027 è raggiungibile | CEO; selezione del CTO |
| Tempi di firma degli accordi con i clienti test | Decide se TEST-R esiste a marzo | CEO; legale |
| Costi legali della Fase 1 | Completa il costo del percorso | Avvocato di distribuzione e privacy |
| Tariffe reali degli sviluppatori per questo stack | Costo del build leggero | Advisor tecnico; recruiter |
| Disponibilità di due broker al pilota | Gate G4 e trigger della forma | Interviste ai broker (Context v3) |

## 4.8 Cosa l'MVP non fa

**In sintesi.** L'elenco dei Won't è parte della specifica quanto quello dei Must: dice al CTO che cosa non costruire anche se sembra facile, e dice al CEO che cosa non promettere. Le esclusioni sono di tre tipi. Alcune sono **vincoli normativi**: nessuna raccomandazione a clienti reali, nessuno scoring su vita e salute, nessun assistente automatico verso il cliente, nessun confronto "con tutto il mercato" **\[OPINIONE su base FATTO, A3; A2 5.4; da verificare con un legale\]**. Altre sono **scelte di priorità**: sinistri, negoziazione, modelli predittivi, portale cliente. Altre ancora sono **affermazioni** che il progetto non fa sui propri risultati. Ogni esclusione ha una condizione di rientro.

### Esclusioni per vincolo

| Won't | Perché | Fonte | Quando può rientrare |
| --- | --- | --- | --- |
| W01. Nessun report, gap o raccomandazione a un cliente reale | Per la lettura prevalente è attività di distribuzione che richiede iscrizione; senza, esercizio abusivo | R01; D06 | Fase 2, con un soggetto abilitato e il gate H4 aperto |
| W02. Nessuno scoring o pricing individuale su vita e salute di persone fisiche | Alto rischio dell'AI Act dal 2 dicembre 2027 | R21; D24 | Non previsto |
| W03. Nessun assistente automatico che parla con il cliente | Obbligo di dichiarare l'interazione con un'IA; rischio di consulenza non firmata | R22 | Dopo l'abilitazione, con interazione dichiarata |
| W04. Nessun confronto presentato come "con tutto il mercato", né "analisi imparziale" su pochi mercati | Perimetro parziale; numero sufficiente di contratti non quantificato da IVASS | R04; D58 | Mai nella forma assoluta; con perimetro dichiarato dopo l'abilitazione |
| W05. Nessuno scraping dei siti delle compagnie | Riserve testuali (Generali, Allianz) e reato di estrazione dal 10 ottobre 2025 | R23; D40 | Solo su fonti senza riserva, previo parere legale |
| W06. Nessun dato sanitario o giudiziario inviato a un modello | Categorie particolari; deroghe non pacifiche | R16; D47 | Non previsto nella Fase 1 |
| W07. Nessuna polizza vita o TCM collettiva | Obblighi antiriciclaggio dei rami vita | R14; D47 | Fuori perimetro |
| W08. Nessuna decisione automatica che riguardi una persona fisica | Art. 22 GDPR per ditte individuali, professionisti, dipendenti | R20 | Non previsto |
| W09. Nessun riuso dei dati dei clienti per addestrare o migliorare il sistema senza base giuridica | È un trattamento nuovo con un titolare proprio | R18; D08 | Con accordo e base giuridica, solo su output anonimizzati |

### Esclusioni per priorità

| Won't | Perché | Fonte | Quando può rientrare |
| --- | --- | --- | --- |
| W10. Nessuna automazione dei sinistri (P14), né visione artificiale anti-frode | Ritorno basso per un MVP; dati sanitari; l'anti-frode è compito della compagnia | A2 4.2; D36 | Dopo la Fase 1, sul modello dati già costruito |
| W11. Nessun modello di abbandono, propensione delle compagnie, gravità dei sinistri; nessun simulatore delle provvigioni contingenti | Mancano dati storici; il peso dei contingent in Italia non è noto | D36; A8 | Quando esistono dati storici propri e legittimi |
| W12. Nessun motore di "prossima azione" verso il cliente | È una raccomandazione | D36 | Come W01 |
| W13. Nessuna automazione dell'interfaccia sui portali delle compagnie | Termini d'uso, autenticazione a più fattori, cambi di interfaccia | D41 | Con un accordo scritto con la compagnia |
| W14. Nessuna aggregazione bancaria via Open Banking come sorgente certa | Adesione delle banche facoltativa; raggiungibilità del conto separato non verificata | D31 | Dopo la verifica con un esperto |
| W15. Nessuna sostituzione del gestionale del broker | Il gestionale resta il sistema di registrazione; diventarlo è una decisione di forma | D41; decisioni aperte | Con il trigger della forma, per i broker con gestionali minimi |
| W16. Nessun portale cliente, CRM proprietario, onboarding con verifica d'identità | Nessun cliente reale nel perimetro; un CRM proprio prima dei clienti è un errore di priorità | Bozza 3.1; D56 | Fase 2 |
| W17. Nessuna architettura "agentica" dove basta una pipeline deterministica; nessun OCR costruito in casa | Costo e opacità senza beneficio misurato | A2 7.7 | Solo se il banco di prova mostra un guadagno |
| W18. Nessun multi-cloud | Complessità senza riduzione di un rischio reale in questa fase | Bozza 3.2 | Se lo chiede una due diligence |

### Affermazioni che l'MVP non fa

Il capitolo 3.6 elenca le formulazioni vietate verso clienti, broker e investitori; per la specifica contano quelle che riguardano i risultati del sistema stesso **\[OPINIONE, D58\]**. L'MVP non dichiara un'accuratezza misurata su dati sintetici; non dichiara "zero errori" ma un limite superiore calcolato con la regola del tre; non chiama "anonimizzati" documenti che sono solo mascherati; non presenta una riduzione dei tempi senza l'accuratezza finale e gli errori non intercettati; non presenta la leva come moltiplicatore senza la sua conversione e la sua copertura (cap. 4.6). Il report di misura (RF31) è costruito in modo che queste affermazioni non si possano produrre: ogni metrica esce con set, versione, campione e intervallo.

### Alfa: la riga che non si scrive

Nel corso del pilota il motore che legge il programma di Alfa può notare che il massimale della RC prodotti è basso rispetto al fatturato esportato. Quella osservazione resta nel sistema come dato interno, non diventa una riga del report, non arriva all'account del broker come suggerimento da girare ad Alfa e non si usa in una demo con nomi reali **\[Ipotesi dell'esempio\]**. Quando un soggetto abilitato la firmerà, sarà una raccomandazione motivata con l'esigenza registrata (R02, R03), non una frase della macchina.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Confine esatto tra analisi interna e attività di distribuzione prima dell'abilitazione | Decide che cosa si può mostrare a un broker nel pilota | Avvocato di distribuzione |
| Se un broker del pilota può usare un'osservazione interna come spunto per i propri clienti | Rischio che W01 si aggiri di fatto | Avvocato di distribuzione |
| Raggiungibilità del conto separato via PSD2 | Condizione di rientro di W14 | Esperto di open banking |
| Disponibilità di compagnie ad accordi sui portali | Condizione di rientro di W13 | Back office di broker multi-mandato |

## 4.9 Decisioni lasciate al CTO

**In sintesi.** Il volume fissa che cosa il sistema deve fare e con quali garanzie; lascia al CTO dieci decisioni tecniche, ciascuna con vincoli non negoziabili, un criterio di scelta e il gate entro cui va presa. Sono le sei decisioni a maggior effetto della bozza (3.6), confermate dal Volume 2, più quattro emerse da A2, A6 e A7: persistenza, registro, mascheramento e canale di uscita **\[OPINIONE, bozza 3.6; A2 output 4; A7 raccomandazioni\]**. Due decisioni non sono del CTO e non vanno lasciate a lui per inerzia: la scelta del caso d'uso da consolidare (G3, con il CEO) e la forma del prodotto (con i cofondatori, D62).

### Le dieci decisioni

| # | Decisione | Opzioni tipiche | Vincoli non negoziabili | Criterio di scelta | Entro |
| --- | --- | --- | --- | --- | --- |
| 1 | Struttura dello schema canonico e della tassonomia delle coperture | Partire dalle 31 entità proposte (D38) e ridurle; modello relazionale o a documenti; granularità delle garanzie | Nessun campo libero dove serve un tipo; contratto logico con identificativi esterni multipli; un oggetto Limite con tipo enumerato; ACORD solo come vocabolario | Copre 30-50 pacchetti reali senza campi liberi; revisione del tecnico indipendente | G0 la revisione, G1 lo schema |
| 2 | Persistenza bitemporale e base dati | Tabelle con validità e registrazione; archivio di eventi da cui si ricostruiscono gli stati; prodotto bitemporale dedicato | Tenant in ogni tabella; eventi immutabili; elaborazione in UE | Risponde alle due domande "che cosa valeva" e "che cosa sapevamo" su SYN; costo di manutenzione | G1 |
| 3 | Fornitore cloud | Un solo fornitore enterprise con regioni UE (bozza 3.2) | Regione UE effettiva, accordo di trattamento, certificazioni utili alle due diligence | Disponibilità dei modelli scelti in regione UE; costo | G0 |
| 4 | OCR ed estrazione | Mistral, Azure Document Intelligence, Reducto, LlamaParse, Docling e simili (Volume 2, cap. 2.12) | Almeno due fornitori misurati sul golden set prima di scegliere; OCR grezzo salvato; schema nel codice proprio e non nella configurazione del fornitore | F1 sui campi critici e grounding su DEV-R, poi TEST-R; costo per pagina; conflitti di listino verificati | G2 |
| 5 | Strategia dei modelli linguistici e instradamento | Un fornitore principale e uno di riserva; modelli diversi per compito; modelli in infrastruttura propria in futuro | Astrazione interna; versioni bloccate; endpoint UE con conservazione nulla e nessun addestramento; il modello che genera il sintetico di famiglia diversa da quello che estrae | Metriche per compito sul banco di prova; costo a regime; sovrapprezzi UE verificati con i fornitori | G2 |
| 6 | Doppia estrazione | Due OCR; due modelli; OCR più modello visivo | Disaccordi sempre in revisione; mai accettazione automatica di un campo critico | Correttezza dei campi concordi contro costo aggiuntivo, misurata su DEV-R | G2 per l'MVP; obbligatoria prima di H4 |
| 7 | Registro immutabile | Hash concatenati in base dati; archiviazione WORM del fornitore cloud; registro esterno | Solo aggiunta; verificabile; senza contenuti personali in chiaro | Verifica della catena da comando; costo; parere legale sul formato | G1 |
| 8 | Mascheramento | Presidio con riconoscitori italiani; modelli italiani open source (rizzo-pii-0.3B, Italian\_NER\_XXL\_v2, GLiNER\_PII\_ITA); servizi cloud | Espressioni regolari con controllo di validità che prevalgono sul modello; nessuna chiamata esterna senza mascheramento; nessun fornitore extra-UE | Fughe per categoria su DEV-R; prestazioni misurate in proprio, non dichiarate dagli autori | G1 |
| 9 | Interfaccia di revisione | Sviluppo proprio; strumenti a basso codice ospitati in proprio (A2 cita Streamlit o Appsmith) | Valore e pagina affiancati; strumentazione completa; nessuna conferma in blocco sui campi critici; registro con le azioni di controllo | Tempo di revisione e qualità del registro nel campione iniziale | G2 |
| 10 | Canale e formato di uscita verso il gestionale | Import di file (default); file nel tracciato dei flussi compagnia; API dove esistono | Solo dati validati; registro di che cosa è stato scritto; nessun accesso al database senza autorizzazione scritta; nessuna RPA sui portali | Gestionale dei broker del pilota; specifiche ottenute per iscritto | G3 |

La tabella è una proposta **\[OPINIONE\]**; le opzioni e i fornitori citati vengono da A2, A6 e dal Volume 2 e non sono raccomandazioni d'acquisto.

### Tre scelte che sembrano tecniche e non lo sono

1. **Usare un prodotto esistente come ponte.** È ammesso per misurare, ma Navisio è di proprietà di un broker iscritto, quindi caricarvi documenti significa darli a un concorrente: servono accordo di trattamento, divieto di addestramento e separazione dalle sue attività di brokeraggio prima di qualunque dato reale **\[OPINIONE, A2 7.5\]**. Su sintetico la prova è libera.
2. **Diventare il registro dei titoli per i broker con gestionali minimi.** Cambia responsabilità, conservazione e migrazione: è una decisione di forma, con il trigger di D62 **\[OPINIONE, Volume 3, cap. 3.9\]**. Il CTO deve solo garantire che il modello canonico regga da solo.
3. **Che cosa entra nell'archivio di apprendimento.** Dipende dal parere legale sul riuso, non dalla convenienza tecnica (D08, R18).

### Alfa: una decisione vista da vicino

Per leggere lo scoperto della multirischi di Alfa, "10% min. € 2.500", il CTO può affidarsi a un estrattore commerciale o a un modello linguistico con schema. In entrambi i casi la decisione 4 è vincolata nello stesso modo: lo schema che dice "scoperto, 10%, minimo 2.500 euro, per sinistro" vive nel codice del progetto, il testo OCR grezzo resta salvato, e se tra sei mesi si cambia fornitore lo scoperto di Alfa si rilegge con il nuovo estrattore e si confronta sul banco di prova prima di cambiare **\[Ipotesi dell'esempio\]**.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Sovrapprezzi effettivi degli endpoint UE e listini aggiornati | Decisioni 3 e 5 | Account dei fornitori cloud |
| Prestazioni dei fornitori di estrazione su polizze italiane | Decisione 4 | Golden set; prova dell'Allegato D |
| Formato del registro accettato come prova | Decisione 7 | Avvocato; assicuratore della RC professionale |
| Gestionali dei broker del pilota e loro formati | Decisione 10 | Broker del pilota; fornitori |

## 4.10 Domande per i candidati CTO

**In sintesi.** Il team non ha un fondatore tecnico, quindi il colloquio con un candidato CTO rischia di misurare la sua sicurezza invece della sua comprensione del dominio (Context v3, rischi). Le dieci domande che seguono servono a evitarlo: ognuna parte da un caso concreto su Alfa e ha una risposta attesa ricavata dai Volumi 0-3, più i segnali d'allarme. Non si cerca chi conosce già il settore assicurativo, ma chi capisce in fretta dove il dominio cambia la tecnica. Le domande si danno dopo che il candidato ha letto i Volumi 0 e 1; i Volumi 2 e 4 solo dopo la revisione del tecnico indipendente (indice) **\[OPINIONE\]**. Il tecnico indipendente dovrebbe partecipare al colloquio.

### Le domande

| # | Domanda | Che cosa deve emergere | Segnale d'allarme |
| --- | --- | --- | --- |
| 1 | A gennaio Alfa paga con un solo bonifico la rata di sette polizze, verso tre controparti con tre regimi di incasso. Come lo modelli? | Relazione molti-a-molti tra titoli e movimenti; regime letto dall'accordo con la controparte; ritenuta sulle provvigioni; proposta di ripartizione che non chiude senza una persona | Una tabella "pagamenti" con un campo polizza; abbinamento solo per importo |
| 2 | Il massimale RCT di Alfa compare nelle condizioni generali, nella scheda e in un'appendice. Quale vale? | Rango dei documenti; clausola di prevalenza letta dal contratto; data di effetto dell'appendice; casi ambigui a una persona | "L'ultimo documento" o "quello che il modello trova" |
| 3 | Un fornitore dichiara il 95% di accuratezza. Come lo verifichi prima di firmare? | Golden set proprio; F1 per campo e per campo critico; intervalli per documento; benchmark del fornitore con conflitto d'interessi e contaminazione dei testi pubblici | Una demo sui documenti scelti dal fornitore |
| 4 | Con 40 polizze il fornitore A ha il 90% sulla franchigia e il B l'85%. Scegli A? | No: con 40 documenti l'intervallo del 90% va da circa 77% a 96%; servono 60-80 documenti e un confronto appaiato per documento | Sì, "cinque punti sono tanti" |
| 5 | Come dimostri a un'autorità che una persona ha controllato lo scoperto di Alfa? | Registro campo per campo con evidenza mostrata, citazione aperta, tempo attivo e motivazione; registro immutabile | Un flag "approvato" per documento |
| 6 | Il tempo di revisione con la macchina scende del 50%. È un successo? | Non da solo: esito composito con l'accuratezza finale; errori iniettati per misurare la fiducia eccessiva; confronto controbilanciato | Sì, senza chiedere quanti errori sono passati |
| 7 | La polizza di Alfa senza nomi e codici fiscali è anonima? | No: indirizzo, attività e somme assicurate la rendono riconoscibile; si tratta come pseudonimizzata; il mascheramento serve prima dei modelli, non rende anonimo il documento | "Togliamo i nomi e la usiamo per addestrare" |
| 8 | Il broker di Alfa usa un gestionale senza API. Come ci scrivi? | Import di file come default; specifiche chieste al fornitore; registro di ciò che è stato scritto; accesso al database solo con autorizzazione | RPA sull'interfaccia come prima scelta; "lo sostituiamo" |
| 9 | Che cosa non lasceresti mai fare a un modello linguistico in questo sistema? | Normalizzare numeri e date; fare aritmetica; accettare da solo un campo critico; scrivere un valore senza citazione verificata | "Il modello è abbastanza bravo da fare tutto" |
| 10 | Il fornitore OCR rilascia una nuova versione. Che cosa succede in produzione? | Versioni bloccate; esecuzione in parallelo sul banco di prova; confronto per tipo di errore; astrazione che permette di cambiare | Aggiornamento automatico all'ultima versione |

Le risposte attese sono ricavate da questi capitoli: 1 da Volume 2, cap. 2.8; 2 da cap. 2.5; 3 e 4 da cap. 2.10 e A6 1.2; 5 da Volume 3, cap. 3.3; 6 da cap. 4.6; 7 da Volume 2, cap. 2.11 e D48; 8 da cap. 2.9; 9 da A2 7.7 e D43; 10 da A2 4.3 n. 14 **\[OPINIONE, sintesi dei volumi\]**.

### Come usarle

Le domande non hanno una risposta unica e un buon candidato può proporre soluzioni diverse da quelle della libreria; ciò che conta è che arrivi da solo ai vincoli della colonna centrale e che sappia dire che cosa misurerebbe per decidere **\[OPINIONE\]**. Due prove completano il colloquio. La prima: chiedere al candidato di leggere la tabella delle cardinalità del Volume 2 (cap. 2.4) e indicare quale scelta gli sembra sbagliata e perché. La seconda: chiedergli che cosa costruirebbe nelle prime quattro settimane con il budget del ponte; chi propone il build solido senza golden set ripete l'errore n. 10 di A2 **\[OPINIONE, A2 7.7\]**.

Altri segnali d'allarme trasversali, dal Volume 2 **\[OPINIONE, A2 7.7\]**: costruire l'OCR in casa; proporre architetture "agentiche" dove basta una pipeline deterministica; mettere dati dei clienti su strumenti di concorrenti; promettere "tutto il mercato" o il 99%; proporre di addestrare modelli sui documenti dei clienti.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Profilo e disponibilità del tecnico indipendente per i colloqui | Senza, il CEO valuta da solo | Rete del CEO e dei candidati (indice) |
| Condizioni di equity da offrire al CTO | Va chiuso prima di offrire equity (Context v3) | Decisione dei fondatori |
| Se le domande discriminano davvero | Si sa solo dopo i primi colloqui | Revisione dopo tre colloqui |

## 4.11 Rischi e lacune

**In sintesi.** I rischi della Fase 1 che possono far fallire l'MVP non sono soprattutto tecnici. I tre più gravi sono di calendario e di persone: gli accordi con i clienti test, l'arrivo di chi costruisce, la disponibilità di due broker al pilota **\[OPINIONE\]**. Seguono i rischi di misura (una leva confusa con il margine, un tempo di revisione che scende per fiducia eccessiva), i rischi tecnici (estrazione sulle tabelle dei limiti, abbinamento delle appendici, mascheramento) e quelli legali, tutti già tradotti in requisiti ma non ancora verificati da un avvocato. Il volume non è consegnabile ai candidati CTO prima della revisione di un tecnico indipendente (indice). Le domande per il legale e per il tecnico sono elencate in fondo, in ordine di urgenza.

### I rischi

| # | Rischio | Tipo | Perché conta | Mitigazione nel volume | Segnale da guardare |
| --- | --- | --- | --- | --- | --- |
| 1 | Accordi con i clienti test firmati dopo novembre | Dati | TEST-R non è pronto a marzo; la qualità si dichiara solo su DEV-R | Checklist del passo 0; ricerca di 3-6 clienti test in parallelo; Fase 1 dichiarata su DEV-R se serve | Nessun accordo firmato a metà novembre |
| 2 | Nessuno sviluppatore senior da dicembre | Team | Il build leggero slitta al secondo trimestre 2027 | Data di verifica a metà novembre; ponte nel frattempo (cap. 4.7) | Selezione del CTO ancora aperta a metà novembre |
| 3 | Nessun broker disponibile al pilota | Mercato | Il trigger della forma resta senza dati; la domanda resta un'ipotesi | Interviste ripetute; pilota senza costo per il broker; accordo di servizio, non acquisizione (A9) | Meno di due broker con impegno scritto a G2 |
| 4 | Leva sotto il 30% su entrambi i rami | Tesi | Nessuna forma del prodotto regge | Regola di arresto al G3 | Linea di base con poche ore nei processi automatizzati |
| 5 | Tempo di revisione che scende per fiducia eccessiva | Misura | Si dichiara un risparmio che è un rischio | Errori iniettati, esito composito, soglia del 10% | Campi corretti in calo senza calo degli errori |
| 6 | Leva sovrastimata per copertura parziale | Misura | La riduzione sul processo non è la riduzione sulla polizza | Linea di base completa, compreso P08 (cap. 4.6) | Quota di ore fuori perimetro alta |
| 7 | Estrazione insufficiente sulle tabelle dei limiti e sulle scansioni | Tecnico | I campi critici restano sotto il 90% | Oggetto Limite, revisione della tabella, controllo di qualità al caricamento | F1 sui limiti sotto soglia su DEV-R |
| 8 | Abbinamento appendice-polizza senza benchmark | Tecnico | Programmi ricostruiti male, in silenzio | Gate H2, elenco degli orfani, metrica dedicata | Orfani in crescita |
| 9 | Fughe di dati personali nel mascheramento | Legale e tecnico | Dati personali verso fornitori esterni | Procedura in nove passi, misura su DEV-R, nessuna chiamata senza mascheramento | Fughe sopra la soglia del legale |
| 10 | Contaminazione: modelli che hanno visto i set informativi pubblici | Misura | Qualità sovrastimata sui testi pubblici | TEST-R di documenti non pubblici; confronto pubblico contro privato | Differenza alta tra le due metriche |
| 11 | Deriva silenziosa dei fornitori | Tecnico | Accuratezza che cala senza cambi nel codice | Versioni bloccate; esecuzione settimanale su SYN | Variazione su SYN senza modifiche |
| 12 | Dipendenza dai formati dei gestionali | Tecnico e mercato | L'output più importante non arriva al broker | Richiesta scritta a 2-3 fornitori al passo 0; Data Act come leva | Nessuna specifica a G2 |
| 13 | Condizioni dello stage non scritte | Legale | Materiale non utilizzabile o conflitto | Nessun dato o processo dello stage nell'MVP | — |
| 14 | Lettura dell'audit come distribuzione più estesa del previsto | Legale | Anche il pilota potrebbe toccare il confine | W01; parere sul confine prima del pilota | Richieste dei broker di "vedere i gap" |
| 15 | Vantaggio comprabile dai concorrenti | Strategia | Gli stessi fornitori sono disponibili a tutti | Patrimonio difendibile in schema, regole, golden set e qualità misurata (D08) | Gestionali che annunciano funzioni simili |

La tabella è una proposta del volume **\[OPINIONE\]**, costruita sui rischi del Context v3 e sui capitoli precedenti; non assegna probabilità perché nessuna fonte permette di stimarle.

### Domande per il legale, in ordine di urgenza

1. Confine di ciò che si può fare e mostrare prima dell'abilitazione, compreso il pilota con broker reali (R01, W01).
2. Qualifica dei ruoli privacy rispetto a clienti test e broker di test; accordi di trattamento; valutazione d'impatto (R17-R19).
3. Se le polizze mascherate con la procedura sono anonime o pseudonimizzate secondo le Linee guida EDPB 02/2026 in bozza (D48).
4. Soglia accettabile di fughe del mascheramento e regole per i dati sanitari residui (RNF05, R16).
5. Quali artefatti tecnici sono documentazione ex art. 67 Reg. IVASS 40/2018 e per quanto si conservano (R09, D44).
6. Formato del registro della validazione per valere come prova di diligenza (R10).
7. Intervallo vincolante della regola dei dieci giorni (R13, D42).
8. Riserve di estrazione delle compagnie, statuto dei capitolati di gara, conservazione delle copie (R23, D40).
9. Se lo studio dei tempi e l'iniezione di errori sono ammissibili presso broker reali, con quale consenso dei revisori (D55).

L'elenco va riportato nell'Allegato B con lo stato di ciascuna domanda.

### Domande per il tecnico indipendente

1. Il modello canonico (D38) regge su 30-50 pacchetti reali senza campi liberi? Le otto cardinalità critiche sono giuste?
2. I criteri di accettazione del cap. 4.3 sono verificabili e non aggirabili?
3. Le dimensioni dei set e il metodo statistico del cap. 4.5 sono adeguati, e lo studio dei tempi può usare TEST-R (cap. 4.6)?
4. Le finestre del percorso (cap. 4.7) sono realistiche con uno sviluppatore senior e un esperto part-time?
5. Mascheramento e citazione verificata convivono come descritto (cap. 4.4)?
6. Quanto è trasferibile ExtractBench alle polizze italiane, dato che lo ha scritto il sistema che vince **\[OPINIONE, A2 output 4\]**?

### Alfa: il rischio più probabile

Su un cliente come Alfa il rischio più probabile non è un errore spettacolare ma uno silenzioso: l'appendice del magazzino che arriva come scansione senza un numero di polizza chiaro, viene abbinata alla polizza sbagliata o resta orfana, e la somma assicurata registrata non cambia **\[Ipotesi dell'esempio\]**. È il caso per cui esistono il gate H2, l'elenco degli orfani e la metrica dell'abbinamento, e il caso da mettere per primo nel banco sintetico.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Accuratezza reale su polizze PMI italiane | Tutte le soglie dipendono da questa | Golden set |
| Ore reali per polizza nei processi di un broker PMI | Decide la leva e il caso da consolidare | Studio dei tempi in due broker |
| Disponibilità di broker al pilota e a pagare un canone | Terza condizione del trigger | Interviste e prove d'uso |
| Pareri legali sulle nove domande | Prima del primo documento reale | Avvocato di distribuzione e privacy; avvocato IP |
| Nome e disponibilità del tecnico indipendente | Condizione per consegnare il volume | Rete del CEO |
| Costi legali e tariffe degli sviluppatori | Costo totale della Fase 1 | Avvocati; advisor tecnico |
