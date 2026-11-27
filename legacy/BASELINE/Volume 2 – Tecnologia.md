# Volume 2 – Tecnologia

Oct 2, 2026 · @l

## Come leggere questo volume

Questo volume spiega a un tecnico che entra oggi nel settore come si governano dati, formati e pipeline documentali di un broker assicurativo, che cosa esiste già sul mercato, che cosa conviene comprare e che cosa costruire. È il volume più lungo della libreria e il primo che parla di architettura: i Volumi 0 e 1 hanno descritto il mestiere e i processi, qui si descrive la macchina che li governa.

**Lettore.** Un CTO, uno sviluppatore senior o un tecnico indipendente chiamato a rivedere la proposta. Non serve esperienza assicurativa: ogni termine è definito al primo uso, con rinvio al glossario del Volume 0 (cap. 0.11). I processi si citano con la numerazione unica P01-P22 del Volume 1 (D27).

**Fonti.** Report A1-A9 del Project e bozza "BOZZA - PROGETTO TECNOLOGIA.pdf", nei capitoli indicati dall'indice della libreria. Il Context v3 prevale in caso di conflitto. Il file A7.md porta nel titolo interno la dicitura "Report A3": si cita come A7 (D30).

**Etichette.** Ogni affermazione rilevante porta un'etichetta tra parentesi quadre: **\[FATTO, fonte\]** se verificata su una fonte nominata; **\[STIMA, fonte o metodo\]** se ricavata con un ragionamento esplicito su dati parziali; **\[OPINIONE\]** se è un giudizio da validare. Le cifre senza fonte sono dichiarate ipotesi. I vincoli normativi sono requisiti di prodotto, tutti da verificare con un legale (Context v3).

**Esempio di riferimento.** Gli esempi usano Alfa Meccanica, PMI ipotetica già introdotta nel Volume 0 (D21): manifattura in Lombardia, 8 milioni di fatturato, 42 dipendenti, 5 furgoni, 7 polizze con 4 compagnie per 40.000 euro di premi imponibili. Le polizze sono ripartite come nel Volume 1 (D28): Compagnia A diretta con accordo ex art. 118 CAP (multirischi e RCT/RCO), Compagnia B diretta senza accordo (flotta e RC prodotti), Compagnie C e D tramite l'Agenzia X (merci trasportate, infortuni, tutela legale). In un anno Alfa genera circa 30 documenti e circa 20 movimenti di denaro **\[STIMA, Volume 0, cap. 0.6\]**. Tutti i dati di Alfa sono **\[Ipotesi dell'esempio\]**.

**Che cosa questo volume non fa.** Non sceglie il caso d'uso di partenza: dal documento al dato o dal dato al denaro si decide misurando (Context v3; D03, D34). Non sceglie fornitori né stack: dà i vincoli entro cui il CTO sceglie (Volume 4, cap. 4.9). Non fissa soglie di accettazione: sono ipotesi finché il golden set non esiste.

**Avvertenza sull'ordine di scrittura.** L'indice prevede di scrivere il Volume 3 (Prodotto) prima di questo. Il Volume 2 è scritto prima su richiesta del CEO, quindi il capitolo 2.13 descrive un ordine di costruzione condizionato ai due casi d'uso candidati, non a un caso scelto **\[OPINIONE\]**. Quando il Volume 3 sarà scritto, il capitolo 2.13 andrà riletto.

### Correzioni tra fonti adottate in questo volume

| Tema | Conflitto | Scelta del volume | Rif. |
| --- | --- | --- | --- |
| "Nessuno governa i dati" | Context v2 e conversazioni iniziali contro A7 | Forma debole: i flussi strutturati sono governati a silos, nessuno governa il dato trasversale e documentale | D04; cap. 2.1 |
| Documentazione SHARE | A1: nessuna documentazione pubblica; A7: esiste il contesto, non la specifica SSF | Si segue A7 | cap. 2.3 |
| Open Banking per il conto separato | Bozza 2.6 lo assume; A7: adesione a CBI Globe facoltativa | Il file CBI è la sorgente certa | D31; cap. 2.8 |
| ACORD | Bozza 2.2 come formato; A7: non adottato in Italia, licenza a pagamento | Solo vocabolario di riferimento | D32; cap. 2.3 |
| Termine di versamento sul conto separato | Volume 0 da fonte secondaria; A7 da Gazzetta Ufficiale | Dieci giorni, art. 63 Reg. IVASS 40/2018 | D29; cap. 2.8 |
| Dimensione del golden set | Context v3 e A2: 30-50 polizze; A6: 60-100 pacchetti di test più 20-30 di sviluppo | Si segue A6, come fa l'indice per il Volume 4 | cap. 2.10; nuova decisione |
| Riserva TDM di Allianz | A2: divieto di estrazione; A5: nessuna riserva espressa trovata; A6: clausola non riverificata | Si tratta come esclusa finché un legale non verifica | cap. 2.10, 2.11 |
| Minimo della fideiussione | 18.750, 19.510 o 23.480 euro | Conflitto di fonti dichiarato | D23 |
| Scraping e dati per il ML | Bozza: scraping di condizioni e dati anonimizzati per il ML; A2, A5, A6: rischi di licenza e di anonimizzazione | Niente scraping; archivio di apprendimento solo da output anonimizzati | cap. 2.10, 2.11 |

## 2.1 Il problema dei dati

**In sintesi.** La frase di partenza del progetto, "nel mercato nessuno governa davvero i dati", è falsa nella forma forte e vera nella forma debole. I flussi strutturati (quietanze, estratti conto, contabilità) sono governati a pezzi da piattaforme di interscambio e da gestionali, ognuno sul proprio silo. Nessuno, per quanto risulta da fonti pubbliche, governa il dato *trasversale*, cioè il collegamento tra documento di polizza, appendici, titoli, banca e fatture, né il dato *documentale* delle polizze negoziate. Il vuoto aggredibile è la chiave che lega un documento a un movimento di denaro, non l'OCR. Le cause sono di incentivo e di governance più che tecniche, quindi la tecnologia deve funzionare con formati eterogenei come condizione permanente. Questo cambia il prodotto: si costruisce uno strato sopra gestionali e piattaforme, non al loro posto.

### Che cosa vuol dire "governare" un dato

Un dato è governato quando di ogni valore si sa da dove viene, chi l'ha prodotto, quando è cambiato e come si collega agli altri valori che descrivono lo stesso fatto. Per un broker lo stesso fatto ha molte facce: la rata semestrale della multirischi di Alfa compare come riga nel tracciato della compagnia, come PDF di quietanza, come bonifico sul conto separato, come riga dell'estratto conto e come quota della provvigione. Governare il dato significa sapere che queste cinque righe sono la stessa rata, con una provenienza verificabile per ciascuna **\[OPINIONE, A7 mod. 3.2\]**.

Tre termini servono da qui in avanti. Il **titolo** è la singola rata di premio da incassare, con il suo stato (Volume 0, glossario). La **provenienza** (in inglese *lineage*) è la traccia che porta ogni valore al documento, alla pagina, all'estratto di testo e alla versione del programma che l'ha prodotto. Il **modello dati canonico** è la rappresentazione unica, interna al sistema, in cui confluiscono tutte le sorgenti, qualunque sia il loro formato (cap. 2.4).

### Chi governa già qualcosa

| Attore | Che cosa governa | Che cosa non governa | Etichetta |
| --- | --- | --- | --- |
| AIBA Digital | Contabilità e quietanzamento con le compagnie aderenti, traducendo i tracciati di ciascuna nel formato del gestionale del broker | Testi di polizza negoziati; elenco aggiornato degli aderenti non pubblico (ultime adesioni note: Unipol e Reale, 2022) | \[FATTO, A7 mod. 2.1\] |
| SHARE e formato SSF | Ritorno dati da alcune compagnie verso gli intermediari | Specifica non pubblica; numero di compagnie aderenti non noto | \[FATTO, A7 mod. 2.1\] |
| Gestionali (IAssicur, PASS Broker, Assieasy, Sintesi) | Connettori per singola compagnia: Assieasy dichiara 30 flussi in ingresso e 18 export contabili | Collegamento tra sorgenti diverse; richiedono controlli manuali come l'"allineamento foglio cassa" | \[FATTO, A7 mod. 5.1, dichiarazioni dei fornitori\] |
| Grandi broker e aggregatori | Piattaforme proprietarie (es. Wide Group) non vendute a terzi | Non verificabile dall'esterno | \[FATTO, A1 mod. 2\] |

Nessuno di questi attori dichiara pubblicamente tre cose: un modello unico che leghi documento, appendici, titoli, banca, fatture e sinistri con provenienza per campo; la riconciliazione automatica tra sorgenti diverse; la validazione umana registrata come evento verificabile **\[FATTO, A7 mod. 3.2: assenza nelle fonti consultate\]**. È questa la formulazione della tesi adottata dal Context v3 (D04).

### Perché i dati non sono governati

| Causa | Evidenza | Etichetta | Risolvibile con la tecnologia? |
| --- | --- | --- | --- |
| Incentivi asimmetrici: il flusso standard costa alla compagnia e giova soprattutto all'intermediario | SHARE (2016): le compagnie "non sono disponibili" a un tracciato unico; in Francia EDI-Courtage è decollato solo con la co-proprietà delle grandi compagnie | \[FATTO e OPINIONE, A7 mod. 3.1\] | No |
| Modello "traduttore" invece che "standard": AIBA Digital non chiede alle compagnie di cambiare nulla, quindi restano N formati da mantenere | Insurzine 2021 | \[FATTO; giudizio OPINIONE, A7\] | In parte (adattatori) |
| Rendita dei gestionali: il connettore per compagnia è un prodotto vendibile | SHARE promette portabilità "in caso di cambio del fornitore" | \[FATTO e OPINIONE, A7\] | No |
| Frammentazione dell'offerta: oltre il 60% dei circa 32.000 intermediari sono microimprese e non hanno massa per chiedere flussi | IVASS, via A1 | \[FATTO, A1\] | No |
| Il dato di maggior valore è documentale e negoziato | Nessuno standard italiano per il contenuto di polizza | \[FATTO, A2 e A5\] | Sì, con gate umano |
| Nessun mandato regolatorio: il mandato dell'art. 22 c. 13 DL 179/2012 non risulta attuato; FIDA rinvia la non-vita | Fonti normative e Consiglio UE | \[FATTO con riserva, A7\] | No |
| Relazione e abitudini: email, telefono, PEC, Excel personali | Testimonianze quantitative non trovate | \[OPINIONE, A7\] | In parte (acquisizione passiva da email e PEC) |

La lettura che ne deriva è netta. Quattro dei dieci ostacoli individuati da A7 si risolvono in larga parte con la tecnologia (tracciati diversi, contenuto negoziato, riconciliazione, abitudini), quattro solo in parte (catena delle appendici, assenza di API dei gestionali, statistiche sinistri, vincoli GDPR), due non si risolvono senza accordi (accesso ai portali, mancanza di standard) **\[OPINIONE, A7 output 4\]**. Il vantaggio tecnico difendibile della Fase 1 sta nei primi tre del gruppo risolvibile e nell'abbinamento delle appendici.

### Come appare il problema su Alfa

Nel mese di gennaio Alfa paga con un solo bonifico la prima rata semestrale delle sette polizze. Lo stesso movimento deve essere ripartito su sette titoli, quattro compagnie, tre controparti contabili (Compagnia A, Compagnia B, Agenzia X) e tre regimi di incasso **\[Ipotesi dell'esempio, Volume 1, cap. 1.5\]**. Le quietanze della Compagnia A arrivano come flusso nel gestionale, quelle della Compagnia B come PDF via email, quelle dell'Agenzia X come Excel. Ad aprile un'appendice aggiunge il nuovo magazzino alla multirischi e genera un titolo a debito: se il sistema non sa a quale versione della polizza si riferisce l'appendice, la somma assicurata registrata è sbagliata e il titolo resta orfano. Nessuno strumento sul mercato, per quanto verificato, vede tutte e quattro le sorgenti nello stesso modello **\[OPINIONE, A7\]**.

### Che cosa cambia nel prodotto

Tre conseguenze valgono per tutto il volume **\[OPINIONE, A7 raccomandazioni\]**:

1. AIBA Digital e SHARE sono sorgenti da collegare, non concorrenti (D04).
2. Lo strato si posa sopra i gestionali e li alimenta tramite i loro canali di import (cap. 2.9). Il rischio principale non è l'AI ma la dipendenza da gestionali che quasi mai espongono API pubbliche.
3. La Fase 1 non può dipendere da standard futuri (FIDA, ACORD, Blueprint Two): l'eterogeneità dei formati è una condizione permanente (cap. 2.3).

### Come cambia per una PMI

Per un broker che lavora con PMI il problema ha la stessa forma ma pesi diversi. I prodotti sono più standard e i set informativi delle compagnie sono pubblici, quindi la parte documentale è meno negoziata **\[FATTO, A9; Context v3\]**. Il collo di bottiglia si sposta sullo storico dei clienti presso i micro-broker, fatto di scansioni, email ed Excel **\[OPINIONE, A9\]**, e sul volume: un micro-broker gestisce 1.500-4.000 polizze, cioè 6-16 scadenze al giorno lavorativo **\[STIMA, A9\]**. La riconciliazione pesa di più in proporzione, perché il valore del singolo contratto è basso e l'errore manuale costa quanto su un grande cliente.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Quali flussi strutturati riceve davvero un broker PMI, da quali compagnie e in che formato | Misura quanta parte del problema è già risolta dai gestionali | Responsabile IT di un broker; commissione IT di AIBA |
| Compagnie aderenti oggi ad AIBA Digital e servizi attivi per ciascuna | Definisce la copertura "gratuita" dei flussi | Responsabile digitalizzazione di AIBA |
| Testimonianze 2025-2026 di associazioni e IVASS sul problema dei dati | Evidenza da fonti di categoria | Uffici studi di SNA, ACB, ANAPA |
| Se qualche gestionale o piattaforma faccia già la riconciliazione tra sorgenti senza dichiararlo | Toglierebbe parte del vuoto aggredibile | Prova pratica (Allegato D); fornitori |

## 2.2 Sorgenti e formati

**In sintesi.** Un broker riceve dati da una ventina di sorgenti diverse, che si dividono in due mondi. Le sorgenti pubbliche e bancarie (fatture elettroniche, movimenti CBI, bilanci XBRL, registro RUI) hanno formati stabili e documentati e sono automatizzabili con codice deterministico. Le sorgenti di maggior valore (testi di polizza, appendici, statistiche sinistri, perizie) sono documenti non strutturati e richiedono estrazione con gate umano. In mezzo stanno i flussi delle compagnie: strutturati ma con un tracciato diverso per ciascuna. Il valore non sta nel leggere bene una sorgente ma nella chiave che collega un documento a un movimento: numero di polizza, compagnia, titolo **\[OPINIONE, A7 mod. 1.2\]**. Per ciascuna sorgente il sistema ha bisogno di un adattatore, cioè un componente che la legge nel suo formato e la porta nel modello canonico.

### Alcune definizioni

Un **formato strutturato** ha campi fissi e uno schema noto: un file XML della fattura elettronica, un tracciato CBI. Un **documento non strutturato** è un testo impaginato (PDF, scansione) in cui i valori vanno trovati e interpretati. Un **PDF nativo** nasce digitale e contiene il testo; una **scansione** è un'immagine e richiede l'**OCR** (riconoscimento ottico dei caratteri). La **PEC** è la posta elettronica certificata: busta firmata con ricevute XML di accettazione e consegna, con valore di prova. **CBI** è lo standard interbancario italiano per i flussi tra banca e impresa; il tracciato **RH** riporta saldi e movimenti di conto corrente.

### Matrice delle sorgenti

Automatizzabilità: **A** alta (formato stabile e documentato), **M** media (strutturato con varianti per controparte), **B** bassa (non strutturato o negoziato). La colonna Base indica se la riga poggia su fatti citati (F) o su una stima dell'autore da prassi e fonti indirette (S) **\[A7 mod. 1.2, output 1\]**.

| Sorgente | Formato tipico | Accesso | Autom. | Ostacolo principale | Base |
| --- | --- | --- | --- | --- | --- |
| Polizza: scheda, condizioni generali, condizioni particolari | PDF nativo o scansione; Word per i wording del broker | Email, PEC, portale della compagnia | B, M con AI | Gerarchia tra documenti, rinvii, abbinamento appendice-madre | S |
| Appendici, variazioni, regolazioni premio | PDF | Come sopra | B | Collegamento alla versione giusta della polizza | S |
| Quietanze e titoli | Tracciati proprietari, CSV o XLS; SSF; AIBA Digital; PDF | Portale, file, piattaforma | A/M | Un tracciato diverso per compagnia | F |
| Estratti conto e rimesse verso la compagnia | Excel, bordereau, formato chiesto da ciascuna compagnia | Generati dal gestionale | M | Specifiche diverse; "partite non tecniche" inviate come documento | F |
| Statistiche sinistri e loss run | PDF, XLS, spesso solo su richiesta | Richiesta manuale | B/M | Nessuno standard italiano | S |
| Denunce, corrispondenza sinistri, perizie | PDF, email, foto | Email, PEC, portale periti | B | Documenti lunghi, allegati misti, dati sanitari | S |
| Documenti del cliente per il risk assessment | XLS, PDF, DOCX | Email, cartelle condivise | M | Nessun template; dati personali da mascherare | S |
| Email | EML/MSG con allegati | Casella del broker via IMAP o API | M | Rumore, allegati duplicati | S |
| PEC | EML firmato con ricevute XML | IMAP del gestore | M/A sulla busta | Contenuto libero; conservazione | S |
| Firma elettronica (FEA, FEQ) | PDF firmati, log del fornitore | API del fornitore | A | Più fornitori per compagnia | F/S |
| Fattura elettronica (fee, fatture al cliente) | FatturaPA XML via SDI | SDI, cassetto fiscale | A | Collegare la fattura a titolo e polizza | S |
| Banca: conto separato e conto operativo | CBI RH; MT940 o camt.053; PSD2 via CBI Globe se la banca aderisce | Home banking (file); API solo se disponibili | A sul formato, M sull'abbinamento | Causali libere; bonifici cumulativi | F |
| Registro imprese, visure, bilanci | XBRL, PDF, API InfoCamere a pagamento | API, servizio inBalance | A | Costo per chiamata, licenza d'uso | F |
| RUI IVASS | CSV open data, aggiornamento mensile | Download libero | A | Solo anagrafica degli intermediari | F |
| Portali delle compagnie | HTML, download PDF/XLS | Login individuale, spesso MFA | B (solo RPA) | Termini d'uso, MFA, cambi di interfaccia | S |
| Bordereaux Lloyd's | XLS/CSV mappati sui Coverholder Reporting Standards v5.2 | File; piattaforma DDM | A/M | Mappatura delle colonne | F |
| Gestionale del broker (storico) | Database proprietario; export XLS/CSV | Export, connettori | M | API assenti o non pubbliche | S |
| Excel interni (programmi, libri matricola, scadenzari) | XLSX | Cartelle condivise | M | Template diversi per persona | S |

La lettura di A7 è che le righe ad automatizzabilità alta sono quasi tutte pubbliche o bancarie, quelle basse sono documenti di compagnie e clienti **\[OPINIONE, A7\]**. Una tecnologia che governa il dato deve unire i due mondi.

### I documenti lungo il ciclo di vita

A4 ricostruisce chi produce che cosa nelle fasi del ciclo di vita e dove il passaggio si rompe. La tabella riporta i passaggi che toccano direttamente l'infrastruttura, con il processo P del Volume 1 **\[FATTO e OPINIONE, A4 mod. 3\]**.

| Fase (P) | Documento | Chi lo produce | Formato | Dove si rompe |
| --- | --- | --- | --- | --- |
| Incarico (P01) | Lettera di incarico | Broker e cliente | PDF firmato | Perimetro societario non strutturato |
| Precontrattuale (P08) | Allegati 3, 4, 4-ter; MUP | Gestionale del broker | PDF | Elenco delle compagnie con accordo ex art. 118 da aggiornare |
| Raccolta (P02, P03) | Questionari, valori, statistica sinistri | Cliente, compagnia | PDF o Excel compilati a mano, scansioni via email | Stessi dati riscritti per ogni compagnia |
| Offerta (P06, P07) | Quotazioni | Compagnie | PDF, email, portali | Un formato per compagnia |
| Emissione (P09) | Polizza, DIP, certificato | Compagnia | PDF | Testo emesso diverso dal negoziato |
| Incasso (P10) | Avviso di scadenza, quietanza | Compagnia | PDF o AIBA Digital | Quietanze ridigitate |
| Banca (P10) | Movimenti del conto separato | Banca | CBI o CSV | Bonifici cumulativi |
| Rimessa (P10, P16) | Estratto conto | Compagnia e broker | Excel, PDF, tracciato proprietario o AIBA Digital | "Il cuore del dolore" secondo A4 |
| Variazione (P13) | Appendice | Compagnia | PDF | Non collegata al titolo |
| Regolazione (P11) | Dichiarazione a consuntivo | Cliente | Excel o PDF | Calcolo su fogli personali |
| Sinistro (P14) | Denuncia, perizia, foto | Cliente, perito, compagnia | PDF, foto, portale | Stato visibile solo sul portale |
| Rinnovo e disdetta (P12) | Proposta, disdetta | Broker, cliente | PDF, PEC | Scadenze tenute a mano |

### L'anno di Alfa in sorgenti

I circa 30 documenti annui di Alfa si distribuiscono così **\[Ipotesi dell'esempio, Volume 0, cap. 0.6\]**: 7 frontespizi e 7 set di condizioni al rinnovo (di cui 3 set informativi pubblici scaricati dal broker), 14 quietanze in due rate, 1 appendice per il nuovo magazzino, 1 regolazione RCT/RCO, 1 libro matricola aggiornato per il sesto furgone, 1 disdetta via PEC, la denuncia e la perizia dell'incendio della pressa. A questi si aggiungono circa 20 movimenti di denaro tra bonifici, rimesse e provvigioni. In termini di sorgenti, Alfa tocca almeno otto righe della matrice: polizze, appendici, quietanze, estratti conto, banca, PEC, email, sinistri.

### Che cosa è vero per la qualità del materiale

Il materiale consegnato dai clienti è eterogeneo: PDF nativi per condizioni e DIP, scansioni di schede, appendici e quietanze timbrate, foto da smartphone, Excel per flotte e ubicazioni, email con allegati annidati **\[OPINIONE, A5 mod. 4.2\]**. A5 ha osservato su PDF nativi pubblici intestazioni di tabella spezzate, importi corrotti ("3.000,^00 euro") e celle fuse **\[FATTO, A5 mod. 4.2\]**. Nell'archivio di un broker la scheda di polizza è spesso una scansione firmata, mentre la compagnia la emette come PDF nativo **\[OPINIONE, A9 tab. 2.4\]**. La quota reale di scansioni e foto non è nota in nessuna fonte: è la lacuna che più condiziona il dimensionamento dell'OCR (cap. 2.7).

### Come cambia per una PMI

Per le PMI la matrice si semplifica in alto e si complica in basso. Il DIP ha un formato UE fisso ed è un PDF nativo con estraibilità alta; le condizioni sono PDF nativi di 40-150 pagine con estraibilità medio-alta **\[FATTO e STIMA, A9 tab. 2.4\]**. I questionari sono spesso cartacei e conviene riprogettarli come dato nativo, non estrarli **\[OPINIONE, A9\]**. Un corpus pubblico utile esiste: IVASS ha pubblicato elenchi di polizze Cat Nat (41 polizze di 38 imprese) **\[FATTO, A9\]**. I documenti di una PMI sono meno lunghi ma più numerosi per addetto, quindi la classificazione automatica all'ingresso pesa più dell'estrazione fine.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Quota di scansioni e foto nei documenti dei clienti PMI | Dimensiona l'OCR e il tempo di revisione | Back office di un broker, su un campione |
| Portali, flussi e API di Generali, Allianz Italia, AXA, Zurich, HDI, Sara, Groupama, Itas, AIG, Helvetia, Vittoria | Matrice di copertura per i test | Back office di broker multi-mandato |
| Formati reali di loss run, estratti conto e quietanze delle compagnie italiane | Nessuna fonte pubblica | Back office e claims manager di un broker |
| Volume reale di email e PEC per polizza | Dimensiona l'acquisizione passiva | Studio dei tempi (D35) |
| Raggiungibilità dei conti separati via PSD2 | Automazione del lato banca senza file | Esperto di open banking (D31) |

## 2.3 Standard e infrastrutture di scambio

**In sintesi.** In Italia non esiste uno standard di scambio broker-compagnia obbligatorio o dominante. AIBA Digital traduce i tracciati delle compagnie invece di imporne uno, SHARE ha un formato (SSF) la cui specifica non è pubblica, il mandato di legge del 2012 non risulta attuato e ANIA non ha pubblicato tracciati per gli intermediari **\[FATTO, A7 mod. 2.1\]**. All'estero gli standard funzionano quando la governance è condivisa e i costi mutualizzati, ma l'adozione resta lenta, e lo standard di "busta" si diffonde prima di quello semantico. A livello europeo FIDA non porterà i dati non-auto prima di circa quattro anni dall'entrata in vigore. La conseguenza per il progetto è una sola: gli standard si usano come vocabolario e come sorgenti dove esistono, non come presupposto **\[OPINIONE, A7\]**.

### Due tipi di standard

Uno **standard di trasporto** (la "busta") definisce come un messaggio viaggia: mittente, destinatario, allegati, conferma di ricezione. Uno **standard semantico** definisce che cosa significa ogni campo: che cos'è un massimale, come si scrive una franchigia, quale codice identifica una garanzia. La lezione tedesca è che il primo si diffonde molto prima del secondo: la norma BiPRO 430 viene usata per veicolare i vecchi dataset GDV invece di sostituirli **\[FATTO, A7 mod. 2.2, fonte Inveda\]**. Il modello canonico (cap. 2.4) deve quindi accettare buste diverse con contenuti legacy.

### Italia

| Iniziativa | Che cosa copre | Stato | Come la tratta il progetto | Etichetta |
| --- | --- | --- | --- | --- |
| AIBA Digital | Piattaforma di traduzione per contabilità, quietanze, polizze e appendici con le compagnie aderenti; ideata nel 2014 | Ultime adesioni pubbliche: Unipol (quietanzamento) e Reale (contabilità; quietanzamento ed emissione "work in progress"), febbraio 2022; nessun aggiornamento 2023-2026 trovato | Adattatore di sorgente; chiedere ad AIBA il formato di uscita verso i gestionali | \[FATTO, A7; giudizio OPINIONE\] |
| SHARE e SSF | Formato di ritorno dati compagnia verso intermediario, derivato da un tracciato Sia del 2008; testato con UnipolSai nel 2017 | Contesto pubblico, specifica non trovata | Adattatore di sorgente se la specifica è ottenibile da una software house socia | \[FATTO, A7\] |
| Art. 22 c. 13 DL 179/2012 | Mandato a IVASS, in accordo con ANIA, per "standard tecnici uniformi" | Nessuna evidenza di attuazione | Da monitorare; da verificare con IVASS | \[FATTO con riserva, A7\] |
| ANIA | Tracciati per le banche dati di settore (es. attestati di rischio), non per lo scambio con i broker | Nessuno standard compagnia-intermediario pubblicato | Non rilevante per la Fase 1 | \[FATTO: assenza nelle fonti, A7\] |
| Firma elettronica, PEC, FatturaPA, CBI | Standard generali, non assicurativi | Stabili e documentati | Sorgenti ad alta automatizzabilità (cap. 2.2) | \[FATTO, A7\] |

A1 aveva scritto che SHARE non ha documentazione pubblica. A7 lo corregge in parte: il contesto (associazione, impegno del 2016, tavolo del 2017 con ANIA osservatore) è pubblico, la specifica no **\[FATTO, A7: contraddizione con A1\]**.

### Estero e mercato di Londra

| Standard | Che cosa copre | Stato 2025-2026 | Lezione | Etichetta |
| --- | --- | --- | --- | --- |
| ACORD (forms, AL3, XML, NGDS in JSON) | Messaggi P&C e vita; riassicurazione e large commercial | Download riservato ai membri, a pagamento; nessuna adozione italiana nota; nel Regno Unito Howden usa la contabilità digitale ACORD con un solo assicuratore (Hiscox) | Solo vocabolario di riferimento per il modello dati (D32) | \[FATTO, A7\] |
| Lloyd's Coverholder Reporting Standards v5.2 | Campi obbligatori e condizionali dei bordereaux di premi e sinistri | Obbligatorio dal 2017, caricamento su DDM | Standard ristretto, obbligatorio e validato all'ingresso: è il modello che funziona | \[FATTO e OPINIONE, A7\] |
| Lloyd's CDR v3.2 e MRC v3 | Dati di placement: UMR, quote, sezioni | Riferimento valido; dizionario consultabile previa registrazione | Dizionario di campi per i rischi piazzati a Londra | \[FATTO, A7\] |
| Blueprint Two | Re-platforming del London Market | Rinvii 2024-2026; il 19/3/2026 Lloyd's ha dichiarato il "sunset" del nome e della visione originale; re-platforming non prima del 2028 | I programmi big-bang falliscono anche con un mandato centrale | \[FATTO, A7\] |
| BiPRO (Germania) | Norme per lo scambio tra compagnie e broker: posta, trasferimento, dati di portafoglio | 267 membri al 29/6/2026 (311 nel 2021); 18 assicuratori sull'hub secondo il presidente; adozione volontaria e parziale | La busta si diffonde, la semantica no | \[FATTO, A7\] |
| EDI-Courtage (Francia) | Norma e piattaforma per produzione, sinistri e contabilità danni | Da 64 broker e 5 assicuratori (2013) a circa 300 broker e 13 assicuratori (2017); EDIconformità oltre 2.400 broker nel 2023 | Governance paritetica; la compliance mutualizzata ha più trazione dei flussi tecnici | \[FATTO e OPINIONE, A7\] |
| Acturis e API bilaterali (Regno Unito) | API tra singola compagnia e gestionale (es. Aviva claims API, dicembre 2024) | Unidirezionali, caso per caso | Le API bilaterali sostituiscono l'EDI senza standard di mercato | \[FATTO, A7\] |

### Europa

FIDA (Financial Data Access) è la proposta della Commissione del 2023 sull'accesso ai dati finanziari, inclusi quelli assicurativi non-vita. Il documento del Consiglio WK 5041/2026 del 6 aprile 2026 registra che dopo il trilogo di giugno 2025 non ci sono stati sviluppi in Parlamento e propone un'applicazione per fasi: i dati auto a 24 mesi, gli altri prodotti assicurativi a 48 mesi e solo dopo un atto di esecuzione **\[FATTO, A7 mod. 2.3\]**. Le previsioni sull'adozione divergono e lo stato a ottobre 2026 non è verificato. Due ipotesi di semplificazione (esclusione dei grandi corporate, possibile esclusione dei piccoli intermediari) toccano direttamente il nostro perimetro. FIDA non è una leva né per la Fase 1 né per la Fase 2 **\[STIMA, A7\]**.

Il Data Act (Reg. UE 2023/2854), applicabile dal 12 settembre 2025, interessa per una ragione diversa: il capo sullo *switching* tra servizi di trattamento dati è una base per pretendere l'esportabilità dei dati dai gestionali in cloud **\[FATTO per la norma; applicabilità ai contratti da verificare con un legale, A7\]**. Pesa nel capitolo 2.9 come leva negoziale.

### Che cosa usare e che cosa non aspettare

| Usare subito | Ottenere se possibile | Monitorare soltanto |
| --- | --- | --- |
| FatturaPA, CBI, PEC, XBRL, CSV RUI come sorgenti | Specifica SSF da una software house socia SHARE | FIDA |
| Vocabolario ACORD e Lloyd's CRS v5.2 come riferimento per i nomi delle entità | Formato di uscita di AIBA Digital e elenco degli aderenti | Blueprint Two |
| W3C PROV e OpenLineage come modelli di provenienza (conoscenza generale, non riverificata in A7) | Bordereaux CRS v5.2 se un broker di test lavora con coverholder Lloyd's | Mandato art. 22 c. 13 DL 179/2012 |

La scorciatoia con il miglior rapporto tra beneficio e costo è sondare AIBA e SHARE sull'accesso alle specifiche **\[OPINIONE, A7 raccomandazione 7\]**.

### Come cambia per una PMI

Per le PMI gli standard di Londra pesano poco: la merci trasportate di Alfa è un grande rischio per ramo, ma è collocata tramite un'agenzia italiana, non un coverholder **\[Ipotesi dell'esempio\]**. Pesano invece i flussi contabili delle compagnie retail e PMI, che sono quelli coperti da AIBA Digital e SSF. Il broker PMI tipico usa un gestionale entry-level o Excel: il 37% degli intermediari ha meno di 1 milione di premi **\[FATTO, A1 mod. 3\]**, e per questi un connettore SSF o AIBA può non esistere affatto.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Specifica SSF e numero di compagnie che la rilasciano oggi | Un adattatore potrebbe coprire molte compagnie | Responsabile tecnico di una software house socia SHARE |
| Elenco aggiornato degli aderenti ad AIBA Digital e formato di uscita | Copertura dei flussi senza sviluppo proprio | Responsabile digitalizzazione di AIBA |
| Attuazione del mandato del 2012 | Possibile base per uno standard | Servizio normativa IVASS; legale regolamentare |
| Stato di FIDA dopo aprile 2026 | Orizzonte regolatorio, perimetro dei piccoli intermediari | Esperto regolamentare UE, BIPAR |
| Esistenza di un equivalente italiano di EDIconformità | Possibile spazio di prodotto nella compliance mutualizzata | Associazioni di intermediari |

## 2.4 Modello dati canonico

**In sintesi.** Il modello canonico è il cuore del sistema e la decisione tecnica con più effetti a valle. Unisce due proposte che usano nomi e livelli diversi per le stesse cose: A5 parte dal documento e scende fino alla clausola e al limite, A7 parte dal soggetto e dal denaro e arriva fino alla riconciliazione. Questo capitolo le riconcilia in un unico schema di 31 entità su cinque aree (soggetti, contratto, documento ed evidenza, denaro, sinistri) più due entità trasversali, con sei principi comuni e otto cardinalità critiche. L'unità non è "una polizza = un record" ma il **contratto logico** con le sue versioni, i suoi documenti e le sue clausole con rango **\[OPINIONE, A5\]**. Tutto ciò che segue è una proposta da far validare per prima a un tecnico indipendente, come chiede l'indice.

### Perché serve un modello proprio

Nessuno standard pubblico copre il caso italiano: ACORD è a pagamento e non adottato, i campi Lloyd's riguardano i rischi piazzati a Londra, BiPRO ed EDI-Courtage sono riservati ai membri (cap. 2.3). Il modello si costruisce quindi in proprio, usando ACORD e Lloyd's come vocabolario per i nomi (D32). Il rischio principale, già segnalato dalla bozza, è che lo schema degeneri in campi liberi: se succede, la strutturazione perde valore **\[OPINIONE, bozza 3.1\]**.

### Sei principi

1. **Bitemporalità.** Ogni fatto ha una data di validità di business (la decorrenza di un'appendice) e una data di registrazione nel sistema. Permette di rispondere sia a "che cosa valeva il 15 giugno" sia a "che cosa sapevamo il 15 giugno" **\[OPINIONE, A7 4.2\]**.
2. **Provenienza per campo.** Ogni valore punta al documento, alla pagina, all'estratto citato e alla versione del modello o della regola che l'ha prodotto **\[OPINIONE, A7 4.2; bozza 3.1\]**.
3. **Eventi immutabili.** Una modifica è un evento nuovo, mai una sovrascrittura. È la condizione per il registro della validazione richiesto da A3.
4. **Valore originale e valore normalizzato.** Ogni campo conserva il testo esatto ("€ 1.500.000,00") accanto al valore normalizzato (1500000.00 EUR), e l'assenza di un valore è tipizzata: assente, non applicabile, illeggibile, rinvio a un documento esterno **\[OPINIONE, A6 1.3\]**.
5. **Identificativo di tenant in ogni tabella.** Il tenant è il soggetto per conto del quale il dato è trattato (oggi un broker di test, domani un broker cliente o una società del gruppo). Serve dal primo giorno qualunque forma prenda l'infrastruttura **\[FATTO, Context v3, decisioni aperte\]**.
6. **Separazione tra dati in custodia e dati derivati.** Documenti e dati identificativi del cliente vivono in un'area con base giuridica e cancellazione programmata; tassonomie e statistiche anonimizzate in un'area separata. La separazione si scolpisce nello schema da subito, perché ricostruirla dopo equivale a riscrivere la persistenza **\[OPINIONE, bozza 3.1; requisito da A3\]**.

### Le entità

Lo schema che segue unisce le entità di A5 (raccomandazione 1), di A7 (4.2), di A4 (raccomandazione sulle entità minime) e i cinque oggetti della bozza (Cliente, Polizza, Documento, Evento, Movimento economico), più tre entità che i vincoli di A3 e il Volume 1 rendono necessarie (esigenze, accordo di incasso, classificazione grandi rischi) **\[OPINIONE, sintesi del volume\]**.

```
SOGGETTI
Soggetto (persona giuridica o fisica; P.IVA, CF, LEI se esiste)
 ├─ appartiene a → Gruppo (controllo, %, fonte: visura o LEI)
 ├─ ha ruolo → RuoloSoggetto (contraente, assicurato, beneficiario, terzo)
 ├─ ha → Incarico (perimetro, date, titolare del trattamento)
 └─ ha → Esigenza (richiesta registrata, collegata alle raccomandazioni)
Controparte (compagnia, sindacato Lloyd's, coverholder, agenzia, wholesaler; codice IVASS o RUI)
 └─ AccordoIncasso (art. 118 sì o no, data, prova; legge il regime di ogni titolo)

CONTRATTO
ProgrammaAssicurativo (cliente × periodo; raggruppa i contratti)
 └─ ContrattoLogico (ID interno stabile; ramo; grande rischio sì/no con i parametri usati)
     ├─ IdentificativoEsterno (numero di polizza × controparte; UMR; delega: 1..n)
     ├─ Versione (emissione, rinnovo, appendice; validità di business; stato vigente o superato)
     ├─ Riparto (coassicurazione: controparte, quota, delegataria, tipo di vincolo)
     ├─ OggettoRischio (ubicazione, bene, veicolo, attività, somma assicurata)
     └─ Garanzia (operante sì/no letto dalla scheda)
          ├─ Limite (tipo, valore, unità, base, relazione, valuta)
          └─ Clausola (testo, articolo, rinvii, rilievo grafico, attivazione)
LimiteCondiviso (limite o franchigia aggregata su più garanzie o contratti)

DOCUMENTO ED EVIDENZA
Documento (hash, tipo, rango, edizione, data effetto, canale, fonte, lingua)
 └─ Estrazione (campo, valore originale, valore normalizzato, tipo di nullo, modello e versione, confidenza)
     ├─ Evidenza (pagina, riquadro, estratto letterale, esito della verifica di stringa)
     └─ Validazione (utente, decisione: verificato, modificato, respinto; motivazione; ora)

DENARO
Titolo (rata: netto, accessori, imponibile, imposta, lordo, scadenza; → Versione)
 ├─ Incasso (→ MovimentoBancario; data; mezzo)
 ├─ Rimessa (→ RigaEstrattoConto; data; controllo dei 10 giorni)
 └─ Provvigione (attiva o passiva; aliquota; importo; ritenuta; → collaboratore se presente)
MovimentoBancario (CBI RH o camt; causale; conto separato o operativo)
RigaEstrattoConto (controparte, periodo, partita tecnica o non tecnica)
FatturaSDI (XML; → Titolo o fee; → Soggetto)
Riconciliazione (n:m tra titoli, incassi, rimesse, movimenti, fatture; stato; eccezioni)

SINISTRI
Sinistro (numero della compagnia e del broker; data evento; → Versione e Garanzia)
 └─ MovimentoSinistro (riserva, pagamento, recupero; fonte)

TRASVERSALI
Evento (registro immutabile: chi, cosa, quando, da quale fonte)
Fonte (adattatore e sua versione: tracciato compagnia, AIBA Digital, SSF, CBI, SDI, RUI)
```

### Riconciliazione dei nomi tra le fonti

| Concetto | A5 | A7 | A4 | Bozza | Nome adottato | Motivo |
| --- | --- | --- | --- | --- | --- | --- |
| L'oggetto contratto | Contratto logico | Polizza (numero + mercato) | Polizza | Polizza | ContrattoLogico con IdentificativoEsterno 1..n | Il numero di polizza non è stabile: è "n. ..." fino all'emissione e in coassicurazione ne esistono più d'uno **\[FATTO, A5 mod. 1\]** |
| Le versioni | Implicite nell'appendice | VersionePolizza, Appendice | Appendice | — | Versione, con l'appendice come tipo di versione | Una sola catena di versioni rende esplicito lo stato vigente o superato **\[OPINIONE\]** |
| Il documento | Documento (tipo, rango, edizione, effetto, hash) | Documento (hash, tipo, fonte, canale) | "Documento d'origine" per ogni entità | Documento | Documento con l'unione dei campi | Il rango di A5 serve alle regole di precedenza (cap. 2.5) |
| La clausola | Clausola (ID, testo, rinvii, rilievo grafico, attivazione) | Esclusione o Clausola (testo + articolo) | — | — | Clausola di A5 | Il rilievo grafico è un segnale semantico (art. 166 c. 2 CAP) **\[FATTO, A5 mod. 3.1\]** |
| Limiti e franchigie | Un oggetto Limite con tipo enumerato | Limite separato da Franchigia o Scoperto | — | — | Un oggetto Limite con tipo enumerato | Massimale, sottolimite, franchigia, scoperto e minimo vivono nella stessa tabella dei limiti e si legano tra loro **\[OPINIONE, A5 2.0\]** |
| La prova del dato | Evidenza (pagina, bbox, confidenza) | Estrazione e Validazione | — | Provenienza | Estrazione → Evidenza → Validazione | Separa che cosa ha detto la macchina, dove l'ha letto e chi l'ha confermato **\[OPINIONE\]** |
| Il cliente | — | Soggetto, Gruppo, RuoloSoggetto | Gruppo | Cliente | Soggetto con ruoli | Contraente e assicurato possono essere diversi ("per conto di chi spetta", art. 1891 c.c.) **\[FATTO, A5 2.0\]** |
| La compagnia | — | Mercato | — | — | Controparte, con AccordoIncasso | Alfa paga anche un'agenzia (Agenzia X): "mercato" non basta, serve la controparte contabile e il suo regime **\[Volume 1, cap. 1.5\]** |
| Il denaro | — | Titolo, Incasso, Rimessa, Provvigione, FatturaSDI, MovimentoBancario, Riconciliazione | Titolo, Estratto conto, Movimento del conto separato | Movimento economico | Come A7, più RigaEstrattoConto | L'estratto conto è "il cuore del dolore" e va modellato a riga **\[FATTO, A4 mod. 3\]** |
| L'evento | — | Evento (audit log) | Regolazione, Sinistro | Evento (scadenza, sinistro) | Evento solo come registro; scadenze e sinistri sono entità o stati | La bozza usa "evento" in due sensi: qui lo si riserva al registro immutabile **\[OPINIONE\]** |

### I limiti: la parte più fine dello schema

Il limite è dove si concentra il valore economico e l'errore. A5 propone un oggetto unico con questa struttura **\[OPINIONE, A5 2.0, confermata dai testi\]**:

| Attributo | Valori possibili | Esempio da testi reali |
| --- | --- | --- |
| Tipo | massimale, sottolimite, limite di indennizzo, franchigia fissa, franchigia temporale, scoperto %, minimo, massimo, aggregato | "scoperto 10% con minimo 3.000,00 euro" (AXA RC rischi edili) **\[FATTO, A5\]** |
| Valore e unità | euro, %, per mille, giorni, ore | franchigia cyber in ore di inattività (Chubb, Credem) **\[FATTO, A5\]** |
| Base | per sinistro, per anno, per serie, per ubicazione, per persona | massimale "per sinistro; per sinistro in serie; per anno" (AXA Cyber) **\[FATTO, A5\]** |
| Relazione | parte di, in aggiunta a | "il sottolimite di indennizzo è parte del massimale e non è da intendersi in aggiunta" (set Aon) **\[FATTO, A5\]** |
| Fonte | Evidenza | pagina e riquadro |

Quando la relazione "parte di" o "in aggiunta a" non è dichiarata, il campo resta vuoto con tipo "non dichiarato" e va a una persona (cap. 2.5). Sulla multirischi di Alfa la scheda riporta la somma assicurata del capannone (1,0 milioni) e lo scoperto del 10% con minimo 2.500 euro: sono due righe di Limite legate alla stessa Garanzia, una di tipo massimale e una di tipo scoperto con il suo minimo **\[Ipotesi dell'esempio, Volume 1, cap. 1.4\]**.

### Otto cardinalità critiche

La cardinalità dice quanti elementi di un'entità possono legarsi a quanti dell'altra. Sono i punti in cui uno schema sbagliato produce errori silenziosi, e sono i primi da far controllare al tecnico indipendente.

| # | Relazione | Cardinalità | Perché è critica | Fonte |
| --- | --- | --- | --- | --- |
| 1 | Versione → Versione precedente | Catena 1:1 con stato vigente o superato per campo | Un'appendice cambia solo alcuni campi; gli altri restano quelli della versione madre | A7 4.2; A6 1.3 |
| 2 | ContrattoLogico → IdentificativoEsterno | 1:n | Coassicurazione con numero della delegataria e numeri delle coassicuratrici | A5 mod. 1 |
| 3 | Documento ↔ ContrattoLogico | n:m | Le stesse condizioni generali (codice ed edizione) valgono per molti contratti di molti clienti | A5 mod. 1 |
| 4 | Clausola → Clausola (rinvio) | n:m, grafo | "A parziale deroga dell'art. 1.4 punto 1": la regola non si legge senza l'articolo richiamato | A5 4.3 |
| 5 | Limite ↔ Garanzia | n:m tramite LimiteCondiviso | Limiti e franchigie aggregate condivise tra garanzie o tra contratti (clausole LMA "Shared Limits") | A5 3.3 |
| 6 | Titolo ↔ MovimentoBancario | n:m | Un bonifico paga più titoli (Alfa a gennaio), un titolo è pagato in più tranche | A7 4.2 |
| 7 | ProgrammaAssicurativo → ContrattoLogico | 1:n, con master e local | Programmi di gruppo e internazionali con limiti condivisi; non verificato su fonti | A7 4.2; A5 3.3 |
| 8 | Tenant → tutte le entità in custodia | 1:n, senza eccezioni | Separazione per titolare del dato richiesta dai vincoli GDPR | A3; Context v3 |

La cardinalità 3 è una scelta con conseguenze legali: un documento condiviso tra tenant (le condizioni generali pubbliche) vive nell'area dei dati derivati, non in quella in custodia, e la sua copia segue le regole dell'art. 70-quater L. 633/1941 (cap. 2.11).

### Che cosa resta da decidere

Tre scelte non si chiudono a tavolino. La granularità della tassonomia delle garanzie, che deve estendersi per ramo senza campi liberi (Volume 1, cap. 1.8). La rappresentazione dei programmi internazionali, per cui nessuna fonte del Project ha verificato DIC, DIL e aggregati master e local **\[FATTO, A5: lacuna\]**. Il motore di persistenza bitemporale, che è una decisione del CTO (Volume 4, cap. 4.9).

### Come cambia per una PMI

Per Alfa lo schema è sovradimensionato in alcune parti e insufficiente in altre. Programmi internazionali, master e local e UMR non servono. Servono invece fin dal primo giorno l'AccordoIncasso, perché tre controparti hanno tre regimi, e l'IdentificativoEsterno, perché le polizze via Agenzia X hanno un numero dell'agenzia e uno della compagnia **\[Ipotesi dell'esempio\]**. Il flag grandi rischi va calcolato per ramo: Alfa non supera le soglie, ma la merci trasportate è ramo 7 e quindi grande rischio per definizione (D16) **\[STIMA, Volume 0, cap. 0.1\]**. Il libro matricola della flotta è una tabella di OggettoRischio con date di inclusione ed esclusione, con premio a 1/360 per giornata di garanzia secondo i capitolati pubblici **\[FATTO, A5 2.7\]**.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Se lo schema regge su 30-50 pacchetti reali senza campi liberi | È il test di validità del modello | Tecnico indipendente; CTO, sul pilota |
| Lista definitiva e priorità dei campi critici per ramo | Fissa il nucleo di 40-60 campi del golden set | Technical account senior di un broker |
| Modellazione di DIC, DIL e aggregati master e local | Cardinalità 7 | Account executive multinational di un broker |
| Gestione dei collaboratori e delle retrocessioni a più livelli | Provvigioni passive nel modello del denaro | Amministrazione di un broker con rete |
| Mapping completo con ACORD | Riuso di un vocabolario esistente | Membro ACORD; tecnico con licenza |

## 2.5 Gerarchia e precedenza dei documenti

**In sintesi.** Una polizza corporate italiana è un fascicolo stratificato: scheda, condizioni generali a stampa, condizioni particolari, appendici e, per i rischi più grandi, capitolati o slip negoziati. Gli strati si derogano a vicenda secondo regole scritte nel contratto stesso e, in ultima istanza, nel codice civile (artt. 1341, 1342, 1370, 1932) **\[FATTO, A5 mod. 3, testi del codice da riscontrare su Normattiva\]**. Il sistema deve quindi leggere l'ordine di prevalenza dichiarato in ciascun contratto e applicare un ordine di default solo quando il contratto tace. Dieci regole coprono la quasi totalità dei casi trovati da A5; undici tipi di caso restano ambigui e vanno sempre a una persona. Questo capitolo è la specifica del **motore di precedenza**, il componente che decide quale valore è vigente quando due documenti dicono cose diverse.

### Perché serve un motore e non una regola fissa

Il massimale RCT di un'azienda può comparire tre volte: nelle condizioni generali (un valore standard), nella scheda di polizza (il valore acquistato) e in un'appendice successiva (il valore aumentato). Un estrattore che legge il primo valore trovato sbaglia; A2 lo classifica come modo di fallimento n. 6, "occorrenza o gerarchia documentale sbagliata" **\[FATTO, A2 4.3, da ExtractBench T2\]**. La risposta corretta dipende dal contratto, perché molti contratti dichiarano il proprio ordine. Per questo la precedenza è un componente configurabile, guidato dal rango dei documenti registrato nel modello (cap. 2.4), e non un ordinamento scritto nel codice.

### Le basi normative

| Norma | Contenuto rilevante | Effetto sul sistema |
| --- | --- | --- |
| Art. 1341 c.c. | Le condizioni generali valgono se conosciute o conoscibili; le clausole onerose richiedono specifica approvazione scritta | Estrarre l'elenco degli articoli approvati per iscritto |
| Art. 1342 c.c. | Nei moduli, le clausole aggiunte prevalgono su quelle incompatibili del modulo, anche se non cancellate | Base della regola R1 |
| Art. 1370 c.c. | Nel dubbio, le clausole predisposte si interpretano contro chi le ha predisposte | Nei capitolati redatti da broker o ente l'effetto si attenua o si inverte **\[OPINIONE, A5\]** |
| Art. 1932 c.c. | Alcune norme (tra cui artt. 1892, 1893, 1897, 1898, 1901, 1914, 1915, 1917) sono derogabili solo a favore dell'assicurato | Base della regola R8 |
| Artt. 1888, 1907, 1911 c.c. | Prova scritta delle modifiche; regola proporzionale "se non diversamente convenuto"; coassicurazione pro quota salvo patto contrario | Default nel modello di Riparto e di Limite |
| Art. 166 c. 2 CAP | Decadenze, nullità, limitazioni e oneri vanno scritti con caratteri di particolare rilievo grafico | Grassetto e maiuscoletto sono segnali da conservare nell'estrazione |

I testi del codice civile sono riportati da A5 come noti all'analista e non riscaricati da Normattiva **\[FATTO, A5: lacuna dichiarata\]**. La tabella è quindi un requisito da verificare con un legale.

### Le dieci regole di precedenza

| Regola | Contenuto | Esempio da testi reali | Deterministica? |
| --- | --- | --- | --- |
| R1 | Dattiloscritto prevale sul prestampato | Capitolato RCA del Comune di Trieste: le norme dattiloscritte "integrano e prevalgono" sulle condizioni a stampa **\[FATTO, A5\]** | Sì |
| R2 | Il capitolato sostituisce il testo della compagnia | Capitolato del Garante privacy: la firma sui moduli a stampa vale "solo quale presa d'atto del premio" **\[FATTO, A5\]** | Sì: con un capitolato le condizioni generali della compagnia non si usano per limiti ed esclusioni |
| R3 | Particolare prevale sul generale | Polizza FISI; capitolato Conservco **\[FATTO, A5\]** | Sì |
| R4 | Gerarchia multilivello dichiarata | Polizza merci: patti speciali > condizioni addizionali > clausole di delimitazione > condizioni generali **\[FATTO, A5\]** | Sì, se letta dal contratto |
| R5 | Clausola di favore residuale | "Verrà risolta sempre nella maniera più favorevole al Contraente" (Conservco, Sapienza, FISI) **\[FATTO, A5\]** | No: sempre a una persona |
| R6 | Le appendici valgono per quanto variato, dalla data di effetto | — | Sì, con data di effetto e non di emissione **\[OPINIONE, A5\]** |
| R7 | La clausola di delega prevale sulle clausole incompatibili | Università di Catania **\[FATTO, A5\]** | Sì |
| R8 | Le norme inderogabili prevalgono su ogni clausola | Art. 1932 c.c. | Sì come controllo; la conseguenza va a una persona |
| R9 | Per quanto non regolato valgono le norme di legge | Capitolato Sapienza **\[FATTO, A5\]** | Sì, come riempimento |
| R10 | Nello slip MRC il Security Schedule prevale per date, codici e anno | Clausola esemplificativa LIMOSS **\[FATTO, A5\]** | Sì |

Quando il contratto non dichiara un ordine, A5 propone questo default: norme inderogabili > delega e coassicurazione > patti speciali e dattiloscritto > appendice più recente per data di effetto > scheda > condizioni particolari a catalogo > condizioni generali > legge dispositiva **\[OPINIONE, A5 3.2\]**. Il DIP non entra nella gerarchia: non ha valore contrattuale, e una discordanza tra DIP e contratto si segnala come anomalia.

### Come lavora il motore

Il motore ha tre passaggi. Il primo legge la clausola di prevalenza del contratto, se esiste, e costruisce l'ordine dei ranghi per quel contratto; se non la trova, usa il default. Il secondo, per ogni campo con più valori candidati, applica l'ordine e marca un valore come vigente e gli altri come superati, registrando quale regola ha deciso. Il terzo manda a una persona ogni caso in cui la regola non è deterministica (R5, R8) o in cui il caso rientra nell'elenco dei casi ambigui **\[OPINIONE, A5 raccomandazione 2\]**. Ogni decisione del motore è un Evento con riferimento alle due Evidenze in conflitto: l'operatore vede entrambe le pagine e la regola applicata.

Il motore lavora sul gold e sull'estrazione allo stesso modo. Nel golden set (cap. 2.10) ogni etichetta ha un livello di fonte (polizza madre, appendice n, allegato, condizioni richiamate, scheda tecnica) e uno stato (vigente, superato da un'appendice con la sua data) **\[OPINIONE, A6 1.3\]**: la metrica "stato corretto per i campi modificati" misura proprio il motore.

### Gli undici casi che vanno sempre a una persona

1. "Più favorevole al Contraente" (R5).
2. Doppio trigger nella stessa polizza: cyber con sezione RC in claims made; RCT con estensione inquinamento in claims made.
3. Sottolimite "parte del" o "in aggiunta al" massimale, quando non è dichiarato.
4. Franchigie e scoperti in cascata su più garanzie.
5. Assegnazione dei beni alle partite, con la clausola residuale "Contenuto".
6. Appendici retroattive o non firmate.
7. Capitolato che "annulla" il prestampato ma ne richiama singoli articoli.
8. Wording master in inglese con polizza locale italiana.
9. Chi è il predisponente ai fini dell'art. 1370.
10. Edizione delle condizioni generali non indicata.
11. Successione di claims made e "fatti noti", su cui la dottrina segnala ancora criticità interpretative.

L'elenco è di A5 **\[FATTO, A5 3.4, per i casi; OPINIONE per l'obbligo del gate\]**. Due casi richiedono un'avvertenza in più: per la coassicurazione esistono tre varianti (pro quota senza vincolo solidale, delegataria che risponde per l'intero, responsabilità in solido di tutte le sottoscrittrici), da estrarre come campo enumerato e non come testo **\[FATTO, A5 3.3\]**.

### Alfa: un esempio di conflitto

Ad aprile la Compagnia A emette l'appendice per il nuovo magazzino in affitto. La scheda originale della multirischi riporta 1,0 milioni sul capannone e nessun valore sul magazzino; l'appendice aggiunge un'ubicazione con la sua somma e richiama "a parziale deroga" un articolo delle condizioni generali sulla merce all'aperto **\[Ipotesi dell'esempio\]**. Il motore marca la somma del capannone come vigente dalla scheda (non variata), aggiunge il magazzino come nuovo OggettoRischio valido dalla data di effetto dell'appendice (R6) e apre un rinvio sull'articolo richiamato, che va letto insieme all'appendice (cardinalità 4 del cap. 2.4). Se l'appendice non riporta il numero di polizza in modo univoco, l'abbinamento stesso va a una persona (gate H2, cap. 2.6).

### Come cambia per una PMI

Nelle PMI prevalgono i prodotti a catalogo con set informativi pubblici redatti dopo il 2019 secondo le linee guida ANIA "Contratti semplici e chiari" **\[FATTO, A5; A9\]**. Le regole R2, R7 e R10 compaiono raramente; R1, R3 e R6 sono la norma. Le linee guida ANIA hanno superato la distinzione tra condizioni generali e speciali e introdotto box esplicativi che "non avrebbero valore contrattuale": vanno esclusi dall'estrazione delle regole **\[FATTO, A5 4.1\]**. Esistono almeno due generazioni di layout, prima e dopo il 2019, e forse una terza dopo l'aggiornamento del settembre 2024, di cui non si conosce il contenuto **\[FATTO, A5: lacuna\]**. Il caso ambiguo più frequente per una PMI sarà probabilmente il n. 10, edizione delle condizioni non indicata, perché il cliente consegna spesso solo frontespizio e quietanze **\[OPINIONE, A5 sintesi\]**.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Testo vigente degli artt. 1341, 1342, 1370, 1888, 1907, 1911, 1932 c.c. | Base delle regole di precedenza | Avvocato assicurativo |
| Contenuto dell'aggiornamento 2024 delle linee guida ANIA | Possibile terza generazione di layout | Compliance di una compagnia |
| Frequenza reale dei casi ambigui su polizze PMI | Dimensiona il carico del gate umano | Golden set; broker PMI |
| Lingua prevalente nei wording bilingue | Precedenza tra versione inglese e italiana | Wording specialist Lloyd's |
| Trattamento delle appendici non firmate | Possibile caso di validità, non di precedenza | Avvocato assicurativo |

## 2.6 Pipeline documentale con gate umani

**In sintesi.** La pipeline è la catena che porta un documento o un flusso dall'arrivo al gestionale del broker: acquisizione, classificazione, estrazione, normalizzazione, collegamento, riconciliazione, validazione delle regole, esportazione, provenienza e conservazione. Lungo la catena ci sono quattro **gate umani**, cioè punti in cui il sistema si ferma finché una persona non decide: a campione sulla classificazione, obbligatorio sui collegamenti non univoci, su tutte le eccezioni contabili e prima di qualunque output verso un cliente **\[OPINIONE, A7 4.3\]**. Ogni gate produce un evento immutabile con utente, decisione e motivazione. Due vincoli normativi entrano nella pipeline come requisiti fissi: il mascheramento dei dati personali prima di ogni chiamata a un modello e la conservazione a doppio binario (A3; Context v3).

### Le fasi

| Fase | Che cosa fa | Tecnica prevalente | Gate | Fonte |
| --- | --- | --- | --- | --- |
| 1. Acquisizione | Raccoglie da PEC, email, upload, portali, flussi delle compagnie (proprietari, SSF, AIBA Digital), CBI, SDI, InfoCamere, RUI; calcola l'hash, elimina i duplicati, registra Fonte ed Evento; maschera i dati personali | Adattatori deterministici; regex con checksum e modelli di riconoscimento per il mascheramento | — | A7 4.3; A3; A6 3.2 |
| 2. Classificazione | Riconosce il tipo: scheda, condizioni, appendice, quietanza, loss run, perizia, estratto conto, DIP, certificato | Regole sulle intestazioni più modello linguistico | **H1**: revisione a campione e di tutti i casi a bassa confidenza | A7; A5 mod. 1 |
| 3. Estrazione | Porta i valori nello schema: parser deterministici per i formati strutturati, OCR e modelli con schema per i PDF | Doppia estrazione e citazione verificata | — (i campi critici passano comunque da H4 o dalla revisione) | A2 4.3 |
| 4. Normalizzazione | Formati numerici italiani, valute, date, codici di compagnia, ruoli; mapping sul modello canonico | Codice deterministico con test unitari, mai il modello | — | A2; A5 4.4 |
| 5. Collegamento | Appendice → versione madre; titolo → contratto; sinistro → garanzia; soggetto → gruppo; applicazione del motore di precedenza (cap. 2.5) | Chiavi deterministiche più corrispondenza approssimata; elenco degli "orfani" | **H2**: obbligatorio per collegamenti non univoci e per i casi ambigui del cap. 2.5 | A7; A2 4.3 n. 8 |
| 6. Riconciliazione | Titoli × incassi CBI × rimesse × fatture SDI × provvigioni; controllo dei 10 giorni | Abbinamento deterministico più coda delle eccezioni (cap. 2.8) | **H3**: tutte le eccezioni contabili | A7; A4 mod. 2 |
| 7. Validazione delle regole | Coerenze: sottolimite ≤ massimale, quote di coassicurazione = 100%, date coerenti, premio lordo = imponibile + imposte, importo in cifre = importo in lettere | Regole in codice | **H4**: firma di un soggetto abilitato prima di qualunque output verso un cliente | A7; A5 4.4; A3 |
| 8. Esportazione | Verso il gestionale (import di file, connettore, RPA come ultima istanza); verso le compagnie (estratto conto, bordereau nel formato richiesto) | Generatori di file per destinazione | — | A7 mod. 5; cap. 2.9 |
| 9. Provenienza e conservazione | Ogni valore → documento, pagina, estrazione, validazione; job tracciati; conservazione ex art. 67 Reg. IVASS 40/2018 | Registro di provenienza (W3C PROV o OpenLineage come riferimento) | — | A7; A3 |

&#91;embedded content: pipeline documentale · 9 fasi, 4 gate umani\]

Il flusso scende dalla fase 1 alla 9; i gate a destra bloccano l'avanzamento finché una persona non decide. H4 nella Fase 1 resta chiuso: nessun output verso clienti reali (D06).

### I quattro gate in dettaglio

Un gate è progettato come stato del flusso, non come avviso: il documento o il dato non avanza finché il gate non è chiuso **\[OPINIONE, bozza 3.1, principio 5; A3 checklist\]**. La differenza conta perché l'avviso si ignora, lo stato no.

| Gate | Chi decide | Su che cosa | Che cosa registra | Come si misura |
| --- | --- | --- | --- | --- |
| H1 Classificazione | Operatore | Campione casuale più tutti i documenti con confidenza sotto soglia | Tipo confermato o corretto | Tasso di correzione per tipo |
| H2 Collegamento | Operatore esperto | Abbinamenti non univoci (es. appendice senza numero chiaro), conflitti tra documenti, casi ambigui | Abbinamento scelto, regola di precedenza, motivazione | Abbinamenti corretti, numero di orfani |
| H3 Eccezioni contabili | Amministrazione | Scostamenti, partite non tecniche, bonifici cumulativi non ripartibili | Ripartizione scelta, causale | Eccezioni per 100 titoli; tempo di chiusura |
| H4 Output al cliente | Soggetto abilitato | Ogni report o raccomandazione esterna | Validazione campo per campo: stato (verificato, modificato, respinto), autore, ora, pagina dell'originale | Campi modificati; errori della macchina non intercettati |

H4 ha un ruolo particolare nella Fase 1. Finché non c'è un soggetto abilitato, nessuna raccomandazione esce verso clienti reali e la pipeline lavora su dati sintetici o anonimizzati (D06) **\[FATTO, Context v3; vincolo da verificare con un legale, A3\]**. Il gate si costruisce comunque da subito: è la prova che l'umano ha controllato, e A3 avverte che il registro deve dire che cosa è stato controllato, non solo "approvato" **\[OPINIONE, A3 ambito 6\]**.

### Tre regole che attraversano la pipeline

**La confidenza ordina, non accetta.** Il punteggio di confidenza (confidenza dell'OCR per blocco più accordo tra due estrattori) decide che cosa mettere in testa alla coda di revisione, mai l'accettazione automatica di un campo critico **\[OPINIONE, A2 4.3\]**. Massimali, franchigie, scoperti, esclusioni, date e premi passano sempre da una persona prima di un output esterno.

**Niente valore senza citazione.** Ogni valore estratto porta pagina ed estratto letterale; il sistema verifica con una corrispondenza di stringa che l'estratto compaia nel testo OCR di quella pagina e, se non compare, respinge il valore **\[OPINIONE, A2: requisito non negoziabile\]**. La verifica dice che la citazione esiste, non che supporta il valore: questa seconda prova è umana, a campione (cap. 2.10).

**Il modello vede solo testo mascherato.** Prima di ogni chiamata a un modello linguistico o a un OCR esterno, nomi, codici fiscali, partite IVA di persone fisiche, indirizzi, targhe, telai, IBAN, telefoni ed email sono sostituiti; la chiave per ricostruirli resta in UE con accesso ristretto. I dati sanitari e giudiziari sono esclusi o oscurati **\[OPINIONE, A3 checklist; da verificare con un legale\]**. Il documento originale resta nell'archivio cifrato con la sua retention.

### La pipeline come macchina a stati

La bozza propone di trattare ogni processo come una macchina a stati guidata da eventi: un documento in arrivo, un movimento bancario, una scadenza a 90 giorni attivano transizioni registrate **\[OPINIONE, bozza 3.1, principio 6\]**. Per la pipeline documentale lo stato è per documento e per campo: un documento può essere classificato e in attesa del gate H2 mentre i suoi campi di testata sono già validati. Questo permette di misurare quanto tempo ogni documento passa in ciascuno stato, che è il dato di partenza per la misura della leva (Volume 4, cap. 4.6).

### Il percorso di un documento di Alfa

La quietanza della prima rata della RC prodotti arriva come PDF allegato a un'email della Compagnia B **\[Ipotesi dell'esempio\]**. Fase 1: l'allegato si salva con il suo hash, l'email si registra come Fonte, il nome del referente amministrativo di Alfa viene mascherato. Fase 2: il classificatore lo riconosce come quietanza con alta confidenza; non entra nel campione di H1. Fase 3: due estrattori leggono numero di polizza, periodo, imponibile, imposte e lordo; concordano su tutto tranne il lordo, che uno legge male per un timbro sull'importo. Fase 4: la normalizzazione ricalcola il lordo come imponibile più imposte e conferma il valore dell'altro estrattore; il disaccordo resta registrato. Fase 5: il numero di polizza collega la quietanza al contratto RC prodotti e al titolo di gennaio. Fase 6: il titolo si abbina alla quota del bonifico cumulativo di Alfa. Poiché la Compagnia B non ha accordo ex art. 118, l'incasso non è liberatorio per Alfa finché la rimessa non arriva alla compagnia: il sistema apre il controllo dei 10 giorni (cap. 2.8). Fase 8: il gestionale riceve la riga di quietanza nel suo tracciato di import.

### Come cambia per una PMI

Con le PMI il volume pesa più della complessità: molti documenti brevi, molte quietanze, pochi capitolati. La fase che rende di più è probabilmente la classificazione all'ingresso con acquisizione passiva da email e PEC, perché elimina lo smistamento manuale **\[OPINIONE\]**. Il gate H2 sarà meno frequente per documento ma più frequente in assoluto, perché le appendici delle PMI arrivano spesso come scansioni senza riferimenti chiari. Il gate H4, quando ci sarà un soggetto abilitato, deve tenere conto dell'informativa piena: Alfa non è un grande rischio e la documentazione precontrattuale si applica integralmente (D16).

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Tasso reale di documenti che finiscono a H1 e H2 | Dimensiona il lavoro umano residuo | Pilota sul golden set |
| Soglia di confidenza oltre la quale un campo non critico può evitare la revisione | Leva sul tempo di revisione | CTO, dopo il golden set |
| Quali artefatti intermedi sono "documentazione" ex art. 67 | Decide che cosa si conserva cinque anni | Avvocato di distribuzione |
| Requisiti formali del registro di validazione per valere come prova di diligenza | Il registro serve anche per la RC professionale | Avvocato; assicuratore RC professionale |
| Prestazioni dei riconoscitori di dati personali italiani su documenti assicurativi | Fughe di dati verso i modelli | Ingegnere ML, su DEV-R (cap. 2.10) |

## 2.7 Estrazione: accuratezza e fallimenti

**In sintesi.** Il testo OCR è una commodity; l'estrazione campo per campo, completa e con citazione verificabile, da polizze di 50-150 pagine non lo è **\[OPINIONE, A2\]**. Il benchmark più completo trovato (ExtractBench, luglio 2026) mostra sistemi specializzati tra 86,8% e 95,6% di F1, modelli visivi economici sotto l'80% e crolli fino al 27,9% sui documenti oltre 50 pagine; la citazione puntuale a livello di parola si ferma al 46,4% **\[FATTO, A2 4.1\]**. Non esiste nessun benchmark su polizze italiane, quindi ogni cifra per il nostro dominio è una stima per analogia da misurare sul golden set. I fallimenti noti sono quattordici e quasi tutti hanno una mitigazione deterministica; il più grave è il valore inventato per un campo vuoto. Le tabelle dei limiti sono il punto più fragile.

### Come si misura l'accuratezza

Tre termini servono qui. La **precisione** è la quota di valori estratti che sono corretti; la **recall** (richiamo) è la quota di valori presenti nel documento che il sistema ha trovato; l'**F1** è la loro media armonica. Il **grounding** è la capacità di indicare dove si trova il valore nel documento (pagina, riquadro, parola). Un'accuratezza "per campo" alta può nascondere una qualità "per documento" bassa: su un benchmark di sinistri sintetici il miglior sistema raggiunge il 90,42% per oggetto ma solo il 62,67% di record interamente corretti **\[FATTO, A5 sintesi, arXiv 2604.27906, benchmark del fornitore\]**. Per questo la revisione si fa per documento, non per campo isolato.

### Le evidenze disponibili

| Evidenza | Che cosa misura | Risultato chiave | Affidabilità |
| --- | --- | --- | --- |
| ExtractBench (LlamaIndex, luglio 2026) | Estrazione guidata da schema su 370 documenti aziendali, 4.869 pagine, 14 sistemi | Migliore 95,6% F1 (prodotto dello stesso autore, 8,1 centesimi a pagina); Gemini 3.5 Flash da 87,9% sui brevi a 27,9% sui lunghi; grounding sulla parola massimo 46,4%; sulle tabelle oltre mille righe ogni modello visivo sotto il 10% | Alta per metodo (confronto esatto); conflitto d'interessi; nessuna polizza, nessun testo italiano **\[FATTO, A2; A5\]** |
| IDP Leaderboard (Nanonets, marzo 2026) | OCR, tabelle, estrazione di campi su oltre 9.000 documenti, 16 modelli | Le tabelle sparse restano il compito più difficile | Pubblicato da un fornitore **\[FATTO, A2\]** |
| INS-MMBench (ICCV 2025) | Modelli visivi su compiti assicurativi | 59,5-63,6% degli errori per mancanza di conoscenza assicurativa | Accademico; non è estrazione da polizze **\[FATTO, A2\]** |
| CENTURIA (2026) | OCR più estrazione di campi | I campi su cui 4 pipeline concordano sono corretti nel 98,7% dei casi | Dominio archeologico; sostiene la doppia estrazione **\[FATTO, A2\]** |
| Fatture scansionate (arXiv 2509.04469) | Elaborazione dell'immagine contro parsing testuale | 87,46% con elaborazione nativa dell'immagine contro massimo 47,00% via Docling | Dominio fatture, indicativo **\[FATTO, A5 4.3\]** |
| Fornitori insurtech | FurtherAI "95% data accuracy"; Navisio 74% di accuratezza generale | Nessuna metodologia pubblica | Marketing **\[FATTO, A2: numeri non verificabili\]** |

Il tecnico indipendente deve controllare per primo la trasferibilità di ExtractBench: è scritto dal sistema che vince e la verità di riferimento deriva in parte dall'accordo tra modelli **\[OPINIONE, A2 output 4\]**.

### Accuratezza attesa per classe di campo

Le stime sono di A2, per analogia con ExtractBench, e sono la base delle ipotesi di partenza del Context v3. Vanno misurate sul golden set prima di essere usate per decidere qualcosa.

| Classe di campo | Esempi | PDF digitale | Scansione o foto | Perché |
| --- | --- | --- | --- | --- |
| Testata | Compagnia, numero di polizza, contraente, periodo, premio | Oltre 95% | 85-95% | Campi brevi e univoci |
| Limiti in tabella | Massimali, sottolimiti, franchigie e scoperti per garanzia | 85-95% | 70-90% | Intestazioni unite e tabelle tra pagine |
| Elenchi | Garanzie operanti, esclusioni, condizioni aggiuntive | Recall 70-90% | Inferiore | I documenti lunghi perdono record |
| Semantica | Franchigia o scoperto; per sinistro o per anno; primo rischio | Incerta | Incerta | Errori per mancanza di conoscenza assicurativa |
| Rinvii e appendici | "Ai sensi dell'art. 12", deroghe, appendici successive | Non stimabile | Non stimabile | Nessun benchmark |

Tutta la tabella è **\[STIMA, A2 4.3, da verificare sul golden set\]**.

### I modi di fallimento e le mitigazioni

A2 elenca quattordici modi di fallimento con evidenza e mitigazione; A5 aggiunge sei difficoltà specifiche dei documenti italiani. La tabella li unisce; le mitigazioni sono requisiti del Volume 4 **\[OPINIONE, A2 4.3 e A5 4.3, sostenute dalle evidenze citate\]**.

| # | Fallimento | Conseguenza su una polizza | Mitigazione |
| --- | --- | --- | --- |
| 1 | Valore inventato per un campo vuoto | Franchigia o esclusione inesistente | Nullo esplicito nello schema; citazione obbligatoria; precisione misurata sui campi vuoti |
| 2 | Troncamento sui documenti lunghi | Esclusioni in coda alle condizioni mancanti | Segmentazione per articolo; controllo di completezza tra indice ed estratti |
| 3 | Tabelle con intestazioni unite o spezzate tra pagine | Massimale attribuito alla garanzia sbagliata | Parser sensibile al layout; riconciliazione delle righe; revisione umana della tabella dei limiti |
| 4 | Formati numerici italiani | "1.000.000,00", "€ 1 mln", "10% min. € 2.500" letti male | Normalizzazione in codice; testo originale accanto al valore; test unitari |
| 5 | Confusione tra concetti assicurativi | Scoperto letto come franchigia, aggregato come per sinistro | Oggetto Limite strutturato (cap. 2.4); glossario ed esempi; regole di coerenza |
| 6 | Occorrenza o gerarchia sbagliata | Massimale delle condizioni generali invece di quello della scheda | Rango dei documenti e motore di precedenza (cap. 2.5) |
| 7 | Rinvii tra articoli | Garanzia "operante se..." letta senza la condizione | Grafo dei rinvii; risoluzione in un passaggio separato |
| 8 | Abbinamento appendice-polizza sbagliato | Programma ricostruito male | Chiavi deterministiche più corrispondenza approssimata; elenco degli orfani; gate H2 |
| 9 | Scansioni e foto di bassa qualità | Cifre lette male, pagine saltate | Controllo di qualità al caricamento con richiesta di ricaricare; confidenza OCR per blocco; elaborazione dell'immagine |
| 10 | Grounding assente o impreciso | Il revisore non trova la fonte e il tempo di revisione esplode | Pagina ed estratto letterale; verifica di stringa; rifiuto automatico |
| 11 | Output strutturato non valido | Pipeline bloccata, campi persi | Output vincolato allo schema; validazione; nuovo tentativo |
| 12 | Wording in inglese o misti | Clausole Lloyd's mappate male | Glossario bilingue controllato; test dedicati |
| 13 | Affermazioni non supportate nei testi generati | Raccomandazione basata su un fatto falso | Ogni frase legata a un campo e alla sua citazione; il modello scrive solo la prosa |
| 14 | Deriva del fornitore o del modello | Calo silenzioso dell'accuratezza (Mistral OCR 4 e 4.1 usciti a tre settimane di distanza) | Versioni bloccate; regressione sul golden set a ogni cambio |
| 15 | Tabelle lunghissime (flotte, ubicazioni) | Il sistema si ferma presto e restituisce pochi record | Parsing deterministico di Excel e CSV; conteggio delle righe |
| 16 | Rilievo grafico perso | Si perde il segnale delle esclusioni (art. 166 CAP) | Estrazione che conserva la formattazione |
| 17 | Garanzie "operanti solo se richiamate" | Si estraggono garanzie non acquistate | Stato di attivazione letto dalla scheda; crocesegni |
| 18 | Termini definiti nel glossario della polizza | Significato tecnico perso | Estrazione del glossario e collegamento delle occorrenze |
| 19 | Documenti richiamati assenti | Record incompleti | Libreria versionata delle condizioni; flag "documento mancante" |
| 20 | Importi in cifre e in lettere discordanti | Errore non visto | Uso dell'importo in lettere come controllo; discordanza al gate |

### Convenzioni italiane da trattare in codice

La normalizzazione non si lascia mai al modello: A2 lo mette tra gli errori tipici delle startup **\[OPINIONE, A2 7.7\]**. Le convenzioni osservate da A5 sui testi reali sono queste **\[FATTO, A5 4.4\]**: virgola decimale e punto delle migliaia ("€ 72.000.000,00"), con la convenzione opposta nei testi inglesi, quindi il parser si sceglie per documento e per lingua; valuta scritta come "€", "€.", "euro" o "EUR"; importi in lettere ("novecentocinquantamila/00") da usare come controllo; date gg/mm/aaaa, "1.1.2009" o testuali; "dalle ore 24.00 del 31/03/2016", da convertire esplicitamente nelle 00:00 del giorno successivo; tassi per mille nella colonna "Tasso" delle partite, unità da confermare testo per testo; scoperti con la loro base percentuale; frazioni come "1/360 per ogni giornata"; franchigie temporali in ore, giorni o mesi.

### Alfa: dove l'estrazione rischia di sbagliare

Su Alfa i punti a rischio sono tre **\[Ipotesi dell'esempio\]**. Lo scoperto della multirischi ("10% min. € 2.500") è un caso del fallimento 4 e 5: va letto come un Limite di tipo scoperto con un minimo, non come una franchigia da 2.500 euro. Il libro matricola dei cinque furgoni, poi sei, è un Excel: va letto con un parser deterministico e non con un modello (fallimento 15). La merci trasportate può richiamare le Institute Cargo Clauses in inglese con la loro edizione (fallimento 12 e 19). Sono tre casi che un golden set costruito anche su polizze PMI deve contenere.

### Come cambia per una PMI

Le polizze PMI sono più brevi e più standard, quindi la classe "testata" e la classe "limiti in tabella" pesano più degli elenchi lunghi **\[OPINIONE\]**. I set informativi pubblici permettono una libreria versionata delle condizioni generali, che mitiga il fallimento 19 quando il cliente consegna solo il frontespizio (cap. 2.11 per i limiti di licenza). Il rischio si sposta sulla qualità dell'immagine: la scheda nell'archivio di un broker PMI è spesso una scansione firmata **\[OPINIONE, A9\]**, e su scansioni le stime scendono di 5-15 punti **\[STIMA, A2\]**.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Accuratezza reale per classe di campo su polizze italiane | Tutte le soglie del Volume 4 dipendono da questa | Golden set (cap. 2.10) |
| Accuratezza dell'abbinamento appendice-polizza madre | Nessun benchmark pubblico | Golden set con pacchetti con appendici |
| Quota di scansioni e foto nel materiale dei clienti PMI | Sposta le stime di 5-15 punti | Back office di un broker |
| Differenza tra estrattori su testi pubblici (forse visti in addestramento) e privati | Rischio di sovrastimare la qualità | Ricercatore ML, con sonda pubblico e privato |
| Risultati verificati di Navisio, FurtherAI, Vantel | Confronto build o buy | Prova pratica (Allegato D) |

## 2.8 Riconciliazione

**In sintesi.** Riconciliare significa dimostrare che righe di sistemi diversi descrivono lo stesso fatto economico: un titolo della compagnia, un bonifico sul conto separato, una riga di estratto conto, una provvigione, una fattura. Per A7 è il requisito tecnico centrale, più dell'estrazione, perché l'art. 63 del Reg. IVASS 40/2018 impone a chi opera per più imprese procedure idonee ad attribuire le somme alle singole imprese e ai rispettivi assicurati **\[FATTO per la norma, OPINIONE per l'implicazione, A7\]**. Le sorgenti del lato denaro sono le più automatizzabili (CBI, FatturaPA); la difficoltà sta nelle relazioni molti-a-molti, nei regimi di incasso diversi per compagnia e nelle regole fiscali che spostano gli importi. La metrica proposta è il numero di eccezioni per 100 titoli. Nessuno strumento, per quanto risulta, dichiara una riconciliazione tra sorgenti diverse **\[FATTO, A7: assenza nelle fonti\]**.

### Il percorso del denaro in quattro passaggi

Il Volume 0 (cap. 0.5) descrive il percorso; qui serve la sua traduzione in dati. Il cliente riceve un **avviso di scadenza**, paga il **premio lordo** sul **conto separato** del broker (patrimonio autonomo ex art. 117 CAP, intestato al broker "in tale qualità"), il broker emette o consegna la **quietanza**, poi gira il premio alla compagnia con la **rimessa**, spesso al netto della propria provvigione. La compagnia riconosce la **provvigione** sul premio netto, a cui si applica una **ritenuta d'acconto** dell'11,5% (23% sul 50% dell'importo) **\[FATTO, A4 mod. 2; Volume 0, cap. 0.5\]**. Ogni passaggio produce almeno un record in una sorgente diversa.

| Oggetto | Sorgente | Formato | Chiave utile |
| --- | --- | --- | --- |
| Titolo e quietanza | Compagnia (flusso, AIBA Digital, PDF) | Tracciato, XLS, PDF | Numero di polizza, compagnia, numero del titolo, scadenza |
| Incasso | Banca, conto separato | CBI RH (la sorgente certa, D31); MT940 o camt.053 | Data, importo, causale libera, CRO o TRN del bonifico |
| Rimessa e partite | Estratto conto verso la compagnia | Excel, PDF, tracciato proprietario, AIBA Digital | Riga per titolo, periodo; "partite non tecniche" a volte come documento |
| Provvigione | Estratto conto, ritorno della compagnia | Come sopra | Titolo, aliquota, importo |
| Fee e fatture | SDI | FatturaPA XML | ID SDI, controparte |
| Retrocessioni | Accordi con agenzie e collaboratori | Contratti, Excel | Titolo, percentuale |

### Le regole che spostano gli importi

| Regola | Effetto sul dato | Fonte |
| --- | --- | --- |
| Imposta sui premi (L. 1216/1961): 22,25% su incendio, RC e furto; 2,5% su infortuni e malattia; 12,5% ± 3,5 punti su RC auto; 13,5% su altri rischi veicolo | Il lordo non è il netto: la catena netto → imponibile → imposta → lordo va ricalcolata per ramo | \[FATTO, A4 2.1\] |
| Ritenuta dell'11,5% sulle provvigioni, senza IVA | La provvigione incassata è inferiore a quella attesa per un importo noto | \[FATTO, A4 2.3; decorrenza con conflitto di fonti, prevale la Circolare 7/E\] |
| Effetto liberatorio (art. 118 CAP): per il broker vale solo con un accordo sottoscritto o ratificato dalla compagnia; in coassicurazione l'autorizzazione della delegataria vale per tutte | Lo stesso incasso libera o non libera il cliente secondo la controparte; il regime va letto da AccordoIncasso, non dedotto | \[FATTO, A4 2.4; Volume 1, cap. 1.5\] |
| Sospensione della garanzia dal quindicesimo giorno dopo la scadenza in caso di mancato pagamento (art. 1901 c.c.) | Senza effetto liberatorio, una rimessa in ritardo può lasciare scoperto il cliente | \[FATTO, Volume 1, cap. 1.5\] |
| Versamento sul conto separato non oltre dieci giorni (art. 63 Reg. IVASS 40/2018) | Controllo di tempestività tra data di ricevimento e data di accredito | \[FATTO, A7, Gazzetta Ufficiale; D29\] |
| Contanti fino a 750 euro annui per contratto nei danni diversi dalla RC auto | Controllo sul mezzo di pagamento | \[FATTO, Volume 1, cap. 1.5\] |
| Fideiussione del 4% dei premi come alternativa al conto separato; minimo 18.750, 19.510 o 23.480 euro | Non cambia la riconciliazione ma il presidio sul denaro | \[FATTO: conflitto di fonti, D23\] |

Un punto va chiarito prima di scrivere codice. A7 nel suo modello attacca il controllo dei dieci giorni alla rimessa verso la compagnia, mentre il testo citato dell'art. 63 parla di versamento sul conto separato. Sono due date diverse: la prima riguarda il broker verso la compagnia, la seconda il broker verso il proprio conto **\[OPINIONE: ambiguità tra A7 4.2 e il testo citato; da verificare con un legale\]**. Il sistema deve poter misurare entrambi gli intervalli finché il legale non dice quale è vincolante.

### Come funziona il motore

Il motore di riconciliazione lavora in quattro passi **\[OPINIONE, A7 e Volume 1, cap. 1.5\]**:

1. **Attese.** Dai titoli in scadenza costruisce le righe attese: lordo dovuto dal cliente, rimessa dovuta alla compagnia (lorda o netta secondo l'accordo), provvigione attesa al netto della ritenuta, retrocessione dovuta all'eventuale agenzia o collaboratore.
2. **Abbinamento deterministico.** Abbina le righe osservate (movimenti CBI, righe di estratto conto, fatture SDI) alle attese con chiavi esatte: numero di polizza o di titolo nella causale, importo, controparte, data in una finestra.
3. **Abbinamento approssimato e ripartizione.** Per i bonifici cumulativi propone una ripartizione su più titoli (relazione n:m del cap. 2.4) e per i pagamenti in tranche un abbinamento parziale; le proposte non chiudono la partita.
4. **Eccezioni.** Tutto ciò che non chiude esattamente va alla coda del gate H3, con il motivo: importo diverso, titolo non trovato, partita non tecnica, ritenuta non coerente, termine superato, regime di incasso ignoto.

Nessuna proposta del passo 3 diventa definitiva senza una persona. La separazione tra chi dispone e chi approva i pagamenti resta un presidio umano (Volume 1, cap. 1.5).

### Alfa: gennaio

A gennaio Alfa paga con un solo bonifico la prima rata semestrale delle sette polizze **\[Ipotesi dell'esempio, Volume 1, cap. 1.5\]**. Il motore deve ripartirlo su sette titoli, quattro compagnie, tre controparti contabili e tre regimi.

| Controparte | Polizze | Regime | Che cosa controlla il motore |
| --- | --- | --- | --- |
| Compagnia A, diretta | Multirischi, RCT/RCO | Liberatorio (accordo ex art. 118) | Il cliente è coperto dal pagamento al broker; la rimessa segue l'estratto conto della compagnia |
| Compagnia B, diretta | Flotta, RC prodotti | Non liberatorio | Il cliente è coperto solo quando la compagnia riceve: la rimessa ha un termine stretto e va seguita titolo per titolo |
| Agenzia X (Compagnie C e D) | Merci trasportate, infortuni, tutela legale | Dipende dalla ratifica | Il regime si legge dall'accordo con l'agenzia; la provvigione arriva come retrocessione |

Sulla Compagnia A la provvigione annua attesa è di circa 3.650 euro; dopo la ritenuta ne arrivano circa 3.230. Un motore che non modella la ritenuta segnala 420 euro di errore che non esiste **\[Ipotesi dell'esempio, Volume 1, cap. 1.5\]**. Sulla Compagnia B un motore che non conosce il regime non sa che, se la rimessa tarda, Alfa può restare scoperta.

### Dove la riconciliazione incontra il consolidamento

A8 colloca fatturazione, incasso e riconciliazione tra le attività ad automatizzabilità alta, con due vincoli: estratti conto eterogenei e patrimonio separato **\[OPINIONE, A8 mod. 3.1\]**. Nel modello di A8 il back office, che include riconciliazione e controllo delle polizze, ha la quota automatizzabile più alta (65%) **\[STIMA, A8 mod. 5\]**. Lo stesso motore è il nucleo della due diligence sui dati di un broker da acquisire: analisi delle provvigioni per cliente e scadenza, censimento degli accordi con le compagnie, riconciliazione delle retrocessioni con le polizze **\[OPINIONE, A8 4.4\]**. Le provvigioni contingenti (legate a volumi e andamento tecnico, tra il 4 e l'8% dei ricavi nei grandi broker USA) si monitorano con lo stesso modello, ma il loro peso in Italia non è noto **\[FATTO per i comparabili USA, A8; lacuna per l'Italia\]**.

### Come cambia per una PMI

Per un broker PMI la riconciliazione è probabilmente il caso d'uso con il rapporto più alto tra ore risparmiate e rischio regolatorio, perché non produce raccomandazioni verso clienti **\[OPINIONE\]**. Il valore unitario è basso (Alfa genera circa 5.900 euro di provvigioni lorde l'anno, circa 4.900 se metà dei premi passa via agenzia **\[Ipotesi dell'esempio, Volume 0, cap. 0.4\]**), quindi ogni ora manuale pesa di più sul margine. Con le PMI i collocamenti tramite agenzia sono frequenti (broker via agenzia per circa 10-15% dei premi delle PMI) **\[STIMA, A9\]**: le retrocessioni a più livelli diventano la norma e vanno modellate dall'inizio. Resta aperta la scelta del primo caso d'uso: la riconciliazione è la proposta di A4, ma il Context v3 la mette in parallelo con l'estrazione fino allo studio dei tempi (D34).

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Raggiungibilità dei conti separati via PSD2 presso le principali banche | Lato banca senza file manuali | Esperto di open banking; esperto CBI |
| Quale intervallo copre la regola dei dieci giorni (ricevimento-accredito o incasso-rimessa) | Definisce il controllo di conformità | Avvocato di distribuzione |
| Come si applica la ritenuta con la rimessa al netto della provvigione | Calcolo dell'atteso | Fiscalista; amministrazione di un broker |
| Formati reali degli estratti conto delle compagnie e delle agenzie | Costo degli adattatori | Amministrazione di due broker PMI |
| Tasso reale di eccezioni per 100 titoli in un broker PMI | Linea di base della metrica | Studio dei tempi (D35) |
| Peso di contingent e retrocessioni nei broker italiani | Perimetro del modello delle provvigioni | CFO di un broker comparabile |

## 2.9 Integrazione con i gestionali

**In sintesi.** Il **gestionale** è il software in cui il broker tiene portafoglio, titoli, contabilità e scadenze. Ogni broker ne ha uno, spesso da anni, e lo usa come sistema di registrazione ufficiale. L'infrastruttura non lo sostituisce: lo alimenta **\[OPINIONE, A1 mod. 2; A7 5.3\]**. Nessun gestionale italiano copre risk assessment, gap analysis e confronto, e quasi nessuno espone API pubbliche documentate. Il canale realistico in Italia è l'import di file che il gestionale già supporta; l'automazione dell'interfaccia (RPA) è l'ultima istanza. Il rischio principale del progetto, secondo A7, non è l'AI ma la dipendenza dai gestionali.

### Il panorama italiano

Le informazioni pubbliche sono scarse e quasi tutte di fonte fornitore; non esistono recensioni indipendenti italiane **\[FATTO, A1 mod. 2\]**.

| Gestionale | Ingresso dati | Uscita dati | API pubbliche | Note | Etichetta |
| --- | --- | --- | --- | --- | --- |
| IAssicur (Diagramma) | Flussi compagnia (es. UnipolSai con PDF delle quietanze), AIBA Digital, SSF, connettori su tracciati proprietari; IAssicurGPT carica polizze e quietanze da PDF | Estratti conto e bordereau su specifiche delle compagnie (es. Chubb) | Non trovate | Partner AIBA; nessuna evidenza di gap analysis | \[FATTO, A1; A7, dichiarazioni del fornitore\] |
| PASS Broker Evolution (RGI) | "Normalizzatore" dal 2014 che acquisisce dati dai sistemi delle compagnie | Estrazioni Excel; bordereau ed estratti conto mensili | "Standard APIs" dichiarate, documentazione non trovata | Gestisce libro matricola, cauzioni, Lloyd's | \[FATTO, A1; A7\] |
| Assieasy | "30 caricamenti flussi da compagnia" | "18 flussi di esportazioni a procedure contabili"; SDI | Non trovate | Il manuale richiede il controllo "allineamento foglio cassa compagnia" sui flussi automatici | \[FATTO, A7\] |
| Sintesi Broker | Import dalle principali compagnie | Estratti conto, quadratura di cassa | Non verificato | ISO 27001:2022 | \[FATTO, A1\] |
| Progetto Broker (Finson), X-Assicura, Modularsoftware | Import da XLS o nessuna integrazione | — | No | Desktop Windows o entry-level, da 59 euro una tantum a 299 euro di licenza | \[FATTO, A1\] |
| Koala Broker, webWinage, Genias, Pol-Easy | Non verificati | — | — | Lacuna | \[FATTO, A1 e A9: dati minimi\] |

A livello internazionale due modelli sono istruttivi. Applied Epic ha un programma per sviluppatori con ambiente di prova gratuito e credenziali di produzione dopo approvazione, e un programma di certificazione per i fornitori; Acturis lavora con API bilaterali per singola compagnia, senza specifiche pubbliche **\[FATTO, A7 5.2, fonti in parte secondarie\]**. Nessuno dei due è localizzato per l'Italia.

### L'ordine di preferenza dei canali

| Ordine | Canale | Quando usarlo | Rischio | Etichetta |
| --- | --- | --- | --- | --- |
| 1 | API documentate e contrattualizzate | Dove esistono, come nel modello del programma partner di Applied | Basso; raro in Italia | \[OPINIONE, A7 5.3\] |
| 2 | Import di file supportati dal gestionale (CSV o XLS di anagrafiche, polizze, titoli; SSF se il gestionale lo legge) | Default in Italia | Basso; dipende dalla documentazione dei formati | \[OPINIONE, A7 5.3\] |
| 3 | File prodotti "come se" fossero flussi compagnia, nel tracciato che il gestionale già importa | Quando l'import generico non copre un dato | Efficace ma richiede l'accordo del fornitore | \[OPINIONE, A7 5.3\] |
| 4 | Accesso diretto al database | Solo con autorizzazione scritta del fornitore e del broker titolare | Garanzia del fornitore e integrità dei dati | \[OPINIONE, A7 5.3\] |
| 5 | RPA sull'interfaccia | Ultima istanza | Fragile ai cambi di interfaccia | \[OPINIONE, A7 5.3; bozza 3.5\] |

La stessa logica vale verso i portali delle compagnie, con un vincolo in più: l'accesso automatico è tecnicamente possibile ma i termini d'uso, l'autenticazione a più fattori e i cambi di interfaccia lo rendono contrattualmente non praticabile senza un accordo **\[OPINIONE, A7 output 4, ostacolo 6\]**. La bozza preferisce le API dove esistono e chiede di verificare i termini d'uso **\[OPINIONE, bozza 3.5\]**: in questo volume l'RPA sui portali delle compagnie è esclusa dalla Fase 1.

### Che cosa chiedere a un fornitore di gestionale

Tre requisiti contrattuali vanno ottenuti per iscritto prima di costruire un adattatore di uscita **\[OPINIONE, A7 5.3\]**: il diritto di esportazione completa dei dati del broker, la documentazione dei formati di import, un ambiente di test. Il diritto di esportazione ha una leva normativa: il capo sullo switching del Data Act, applicabile dal 12 settembre 2025, è una base per pretendere l'esportabilità dai servizi in cloud **\[FATTO per la norma; applicabilità ai contratti da verificare con un legale, A7\]**. A7 raccomanda di chiedere per iscritto le specifiche di import e i termini di export ad almeno due o tre fornitori (Diagramma, RGI, Assieasy) **\[OPINIONE, A7 raccomandazione 4\]**.

### L'adattatore di uscita

Nel modello canonico (cap. 2.4) l'uscita verso il gestionale è un adattatore come quelli di ingresso, con tre proprietà. Scrive solo dati validati: niente export senza il passaggio dai gate pertinenti **\[OPINIONE, A2 output 4, punto 8\]**. Mantiene un registro di che cosa ha scritto, quando e in quale file, così che una riga del gestionale si possa ricondurre alla sua provenienza. Gestisce le chiavi del gestionale come identificativi esterni del contratto logico, perché il gestionale ha la propria numerazione. La stessa funzione serve in senso inverso nel consolidamento: importare lo storico dal gestionale di un broker acquisito è l'uso più pesante dell'adattatore (Volume 5, cap. 5.4).

### Alfa nel gestionale del broker

Il broker di Alfa usa un gestionale ipotetico che importa CSV di titoli e quietanze e flussi AIBA Digital per la sola Compagnia A **\[Ipotesi dell'esempio\]**. Le quietanze della Compagnia A entrano già dal flusso: l'infrastruttura le legge per la riconciliazione ma non le riscrive. Le quietanze della Compagnia B e dell'Agenzia X oggi sono ridigitate: l'infrastruttura le estrae, le valida e le scrive nel CSV di import. L'appendice del magazzino e il libro matricola aggiornato non hanno un formato di import nel gestionale: restano nel modello canonico e nel fascicolo, con un riferimento nel gestionale. È un caso tipico di quello che A1 chiama alimentare senza sostituire.

### Come cambia per una PMI

I broker piccoli usano gestionali entry-level o Excel: il 37% degli intermediari ha meno di 1 milione di premi **\[FATTO, A1 mod. 3\]**. Per loro il canale 2 può non esistere, e l'infrastruttura può diventare essa stessa il registro dei titoli. È una scelta di forma del prodotto, non tecnica (Volume 3, cap. 3.9): sostituire il gestionale cambia responsabilità, conservazione e migrazione. La decisione resta aperta con il trigger del Context v3; l'accorgimento da subito è che il modello canonico regga da solo come registro anche se oggi non lo è **\[OPINIONE\]**.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Formati di import ed export di almeno due gestionali | Fattibilità del canale di uscita | Fornitori di gestionali; un broker |
| Dettaglio delle "standard APIs" di PASS Broker | Possibile canale 1 | Product manager di RGI |
| Quale gestionale usa la maggioranza dei broker PMI | Priorità degli adattatori | Associazioni; broker PMI |
| Condizioni contrattuali di export dei principali gestionali cloud | Leva del Data Act | Legale; fornitori |
| Disponibilità dei fornitori a certificare un'integrazione | Canale 3 | Fornitori di gestionali |

## 2.10 Test e valutazione

**In sintesi.** Senza un banco di prova proprio nessuna cifra di accuratezza vale qualcosa, perché non esistono benchmark su polizze italiane (cap. 2.7). A6 propone tre insiemi con governance diversa: un **set di test reale e sigillato** di 60-100 pacchetti contrattuali (TEST-R), un **set di sviluppo reale** di 20-30 pacchetti (DEV-R) e un **banco sintetico** di 300-1.000 polizze generate (SYN) **\[OPINIONE, A6, fondata sui calcoli della sezione 1.2\]**. La dimensione corregge il Context v3, che ipotizzava 30-50 polizze: con quel numero si misura solo l'accuratezza aggregata, non quella per campo né il confronto tra due fornitori. Il sintetico serve alla regressione, mai a dichiarare la qualità. Il tempo di revisione si misura con un disegno controbilanciato e con errori inseriti apposta, altrimenti misura la fiducia eccessiva nella macchina invece del risparmio.

### Perché la correzione sulla dimensione

L'unità statistica è il documento, non il campo: gli errori dello stesso documento sono correlati (stessa scansione, stesso layout). Con 50 campi per polizza e una correlazione interna ipotizzata di 0,05-0,10, 2.000 campi valgono quanto 340-580 osservazioni indipendenti, e trattarli come indipendenti fa sembrare la misura 2-2,5 volte più precisa di quanto sia **\[STIMA, A6 1.2\]**. Per un campo che compare una volta per documento, con 40 documenti e il 90% osservato l'intervallo di confidenza va da circa 77% a 96%: non si distingue un campo al 90% da uno all'80% **\[STIMA, A6 1.2\]**. Per confrontare due versioni del sistema servono almeno 60-80 documenti **\[STIMA, A6 1.2\]**. Il valore della correlazione interna è un'ipotesi da stimare sul pilota.

Il Context v3 parla di "30-50 polizze etichettate" e il Context prevale sui report. Qui si segue A6 perché l'indice della libreria la adotta già per il Volume 4 (cap. 4.5) e perché la cifra del Context è un'ipotesi presa da A2, non una decisione motivata **\[OPINIONE\]**. La correzione va registrata come decisione nell'Allegato A e riflessa in un aggiornamento del Context.

### I tre insiemi

| Insieme | Composizione | Chi lo usa | Per che cosa | Regola |
| --- | --- | --- | --- | --- |
| TEST-R | 60-100 pacchetti reali (polizza madre con appendici, allegati, condizioni richiamate), sotto accordo scritto, mascherati con processo documentato; doppia annotazione sul 25% | Solo il custode dei dati e gli annotatori | Misurare le release | Sigillato; eseguito al massimo una volta per release; rinnovato ogni sei mesi |
| DEV-R | 20-30 pacchetti reali diversi da TEST-R per cliente e, dove possibile, per compagnia | Il team di sviluppo | Iterare prompt e pipeline | Split per cliente e per famiglia di template |
| SYN | 300-1.000 pacchetti generati da template scritti da persone, con valori noti e difetti iniettati | Integrazione continua | Regressione e stress test | Mai usato per dichiarare la qualità |

Il **pacchetto contrattuale** è l'unità di campionamento: un'appendice non ha senso senza la polizza madre **\[OPINIONE, A6 1.1\]**. TEST-R va stratificato per ramo, lingua, origine (nativo, scansione buona, scansione degradata), lunghezza, presenza di appendici e compagnia, con almeno il 20% di scansioni, il 20% di documenti oltre 50 pagine e nessuna compagnia oltre il 20% **\[OPINIONE, A6 1.1\]**.

Un custode dei dati gestisce TEST-R: chiavi di cifratura, registro degli accessi, esecuzioni di release. Non è uno sviluppatore **\[OPINIONE, A6 5.2\]**.

### L'etichetta

Ogni valore annotato ha una struttura fissa, che coincide con quella delle Estrazioni del modello canonico (cap. 2.4) **\[OPINIONE, A6 1.3\]**:

| Campo dell'etichetta | Contenuto |
| --- | --- |
| Identificativo del campo | Dallo schema versionato (es. limite.rct.per\_sinistro) |
| Valore normalizzato | Importi in EUR con due decimali, date ISO 8601, valuta esplicita |
| Valore originale | Testo esatto, per la verifica di stringa |
| Pagina e riquadro | Anche multipli |
| Tipo di nullo | Assente, non applicabile, illeggibile, rinvio esterno |
| Livello di fonte | Polizza madre, appendice n, allegato, condizioni richiamate, scheda tecnica |
| Stato e data di effetto | Vigente, oppure superato da un'appendice |
| Lingua, annotatore, versione del manuale, confidenza | Tracciabilità |

Le linee guida di annotazione si scrivono prima di annotare, con definizioni, esempi e regole di precedenza; un manuale di 20-40 pagine per 50 campi è un ordine di grandezza ragionevole **\[STIMA per analogia con CUAD, A6 1.4\]**. Sul set di test la pre-annotazione con un modello è vietata: induce un effetto ancoraggio verso l'output del modello **\[OPINIONE, A6 1.4\]**.

### Le metriche

Le soglie sono di A6 e sono obiettivi di uscita dalla Fase 1, da ricalibrare dopo il pilota e da confrontare con il limite di accordo tra annotatori umani **\[OPINIONE, A6 4.1\]**. Le ipotesi di partenza del Context v3 (oltre 95% sulla testata, 85-95% sui limiti, 70-90% sulla completezza) sono coerenti con queste soglie come punto di arrivo.

| Metrica | Come si calcola | Soglia proposta |
| --- | --- | --- |
| F1 per campo dopo normalizzazione | Confronto esatto con il gold; micro e macro per tipo di campo | Micro almeno 95%; nessun campo critico sotto il 90% |
| Precisione sui campi vuoti | Quota di campi assenti nel gold per cui il sistema restituisce nullo | Almeno 98% |
| Recall sugli elenchi | Elementi corretti su elementi del gold | Almeno 95%, precisione almeno 97% |
| Citazione verificata | Estratto presente nel testo OCR della pagina e contenente il valore | Almeno 98% esistenti; almeno 95% che supportano il valore, verificato a campione |
| Affermazioni senza fonte | Su tutte le affermazioni | Obiettivo zero, dichiarato come limite superiore 3/n al 95% (regola del tre) |
| Abbinamento appendice-polizza madre | Abbinamenti corretti; stato vigente o superato dei campi modificati | Abbinamento almeno 98%; stato almeno 95% |
| Grounding sul riquadro | Sovrapposizione almeno 0,5 tra riquadro predetto e gold | Almeno 80% |
| Minuti di revisione per pacchetto | Tempo attivo strumentato | Riduzione almeno 30% rispetto al manuale a parità di accuratezza finale |
| Errori della macchina non intercettati dal revisore | Campi errati accettati su campi errati | Al massimo 10% sui campi critici |
| Eccezioni per 100 titoli | Per il caso dal dato al denaro | Da fissare con lo studio dei tempi |

L'ultima riga non viene da A6, che si occupa solo di estrazione: è la metrica di A7 per la riconciliazione, che usa lo stesso principio su un banco di titoli sintetici e anonimizzati **\[OPINIONE, A7 raccomandazione 3\]**.

### Il banco sintetico

La ground truth del sintetico nasce dal generatore, cioè dai valori scritti dal codice, mai da un'estrazione successiva **\[OPINIONE, A6 2.1\]**. Cinque metodi si combinano: template parametrici, template con clausole da fonti libere (clausole LMA per l'inglese), riscrittura con un modello di famiglia diversa dall'estrattore, varianti strutturali (appendici che modificano la madre, rinvii, conflitti), errori iniettati nel 10-20% dei documenti. La degradazione si simula con librerie come Augraphy e DocCreator, più 20-30 foto reali di stampe **\[FATTO per le librerie, OPINIONE per l'uso, A6 2.2\]**. Il realismo si valida con un test di discriminazione con tre esperti e, soprattutto, con la concordanza tra la classifica delle configurazioni sul sintetico e quella sul reale.

Un rischio va tenuto in vista. Un valutatore basato su un modello linguistico tende a premiare i propri output (Panickssery e altri, NeurIPS 2024) **\[FATTO, A6 2.4\]**: è plausibile che un estrattore vada meglio su testi generati dalla propria famiglia di modelli **\[STIMA per analogia, A6\]**. Generatore ed estrattore devono quindi essere di famiglie diverse, e i risultati sintetici e reali si riportano sempre separati.

Sulle fonti del sintetico c'è un conflitto tra report. A2 riporta che Allianz vieta l'estrazione senza autorizzazione scritta; A5 non ha trovato una riserva espressa; A6 non ha potuto riverificare la clausola e tratta Allianz come esclusa **\[FATTO: conflitto tra A2, A5 e A6\]**. Questo volume segue A6: i testi delle compagnie si usano solo come studio non riprodotto, il sintetico si scrive con testi propri e clausole LMA, e i capitolati di gara pubblici sono la fonte migliore di wording corporate reali, con lo statuto di "atti ufficiali" ancora da verificare **\[OPINIONE, A5 mod. 5; A6 2.5\]**.

### Misurare il tempo di revisione

La misura del tempo è il ponte verso la leva sul margine, e anche la più facile da falsare. La fiducia eccessiva nella macchina (**automation bias**) fa scendere i tempi perché il revisore controlla meno, non perché lavora meglio **\[FATTO sul fenomeno, A6 4.3, Buçinca e altri\]**. Il disegno proposto da A6 **\[OPINIONE, A6 4.3\]** ha sei elementi: crossover controbilanciato (ogni revisore vede metà dei pacchetti in modo manuale e metà con la macchina, mai lo stesso pacchetto in entrambi); fase di familiarizzazione esclusa dall'analisi; strumentazione dell'interfaccia (tempo attivo, citazioni aperte, campi modificati); esito composito di tempo e accuratezza finale; 5-10% di campi proposti volutamente errati per misurare il tasso di intercettazione; analisi con modello misto. Con 4-6 revisori e 40 pacchetti ciascuno la stima è informativa; con meno partecipanti è esplorativa **\[STIMA, A6\]**. Il protocollo completo appartiene al Volume 4 (cap. 4.6).

### Tempi e costi

Il golden set v1 richiede circa 280-540 ore di esperto, che a una tariffa ipotizzata di 50-100 euro l'ora valgono 14.000-54.000 euro, esclusi costi legali, infrastruttura e tempo del CTO **\[STIMA, A6 output 1; tariffa non verificata\]**. Il calendario è di circa 20 settimane e arriva a fine febbraio 2027 solo se gli accordi con i clienti test sono firmati entro novembre 2026; altrimenti la Fase 1 si basa solo su SYN e DEV-R e lo deve dichiarare **\[OPINIONE, A6\]**. Il banco sintetico richiede 40-80 ore di esperto; il grosso è sviluppo software **\[STIMA, A6\]**.

### Come cambia per una PMI

Le PMI semplificano due cose. I set informativi pubblici danno materiale per il DEV-R e per i template del sintetico senza accordi con i clienti, con i limiti di licenza appena visti **\[OPINIONE, Context v3; A5\]**. E i pacchetti sono più brevi: la stima di 35 pagine medie per pacchetto di A6, pensata per il corporate, è probabilmente alta per le PMI, e il costo di annotazione scende di conseguenza **\[OPINIONE\]**. La stratificazione va rivista: per un target PMI hanno più peso multirischi a pacchetto, RCT/RCO, flotte e libri matricola, infortuni; meno D&O e programmi internazionali. Un pacchetto come quello di Alfa (sette polizze, una appendice, una regolazione, un libro matricola) è l'unità naturale.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Correlazione interna reale degli errori di estrazione | Ricalcola la dimensione del set | Statistico, sul pilota di 10 pacchetti |
| Pagine medie e ritmo di annotazione su polizze PMI | Costo e tempi del golden set | Tecnico assicurativo, sul pilota |
| Tariffe di mercato dei tecnici assicurativi freelance | Costo del golden set | HR o procurement di un broker |
| Chi etichetta e con quale accordo | Il golden set non esiste senza annotatori | Rete del CEO; broker partner |
| Note legali complete delle compagnie e riserve TDM leggibili da macchina | Liceità delle fonti del sintetico | Avvocato IP; verifica tecnica di robots.txt |
| Statuto dei capitolati di gara come atti ufficiali (art. 5 L. 633/1941) | Liceità del corpus pubblico principale | Avvocato IP o amministrativista |

## 2.11 Sicurezza, privacy e fornitori

**In sintesi.** I vincoli più forti sull'architettura non vengono dall'AI Act ma dal GDPR e dalle regole di conservazione della distribuzione assicurativa **\[OPINIONE, A3\]**. Si traducono in cinque requisiti: il modello vede solo testo mascherato; i fornitori di modelli e OCR elaborano in UE, non addestrano sui dati e firmano un accordo di trattamento; i documenti di distribuzione si conservano per la durata del rapporto più almeno cinque anni, gli artefatti tecnici molto meno; i dati di ciascun titolare restano separati; l'archivio di apprendimento riceve solo output anonimizzati. Un documento corporate "anonimizzato" resta quasi sempre riconducibile all'azienda e alle sue persone, quindi va trattato come pseudonimizzato, cioè come dato personale, finché un legale non dice il contrario **\[OPINIONE, A6 3.1\]**. Tutto il capitolo è da verificare con un avvocato privacy prima dei primi dati reali (Context v3).

### I ruoli

Il **titolare del trattamento** decide finalità e mezzi; il **responsabile** tratta per conto del titolare sotto un accordo (art. 28 GDPR); il **sub-responsabile** è un fornitore del responsabile. Nella Fase 1 i dati reali arrivano da clienti test o da broker partner: il titolare è il cliente o il broker, chi costruisce lo strumento agisce come responsabile secondo l'accordo, i fornitori cloud, OCR e modelli sono sub-responsabili **\[OPINIONE, A6 5.2; A3 ambito 1, da verificare con un legale\]**. Il punto critico è il riuso: per il Garante, chi decide finalità e mezzi di un trattamento nuovo ne diventa titolare (provv. 12 febbraio 2026, da fonte secondaria) **\[FATTO con riserva, A3\]**. Costruire un dataset per migliorare il prodotto è un trattamento nuovo, con una base giuridica propria (D08).

L'analisi di A3 è stata scritta per la configurazione con broker ospitante e collaboratore di Sezione E, oggi sospesa (D09). I requisiti tecnici che ne derivano valgono comunque, perché dipendono dalla separazione tra chi possiede i dati e chi costruisce lo strumento, non dalla forma societaria **\[OPINIONE\]**.

### Mascheramento: la procedura

Pseudonimizzare non equivale ad anonimizzare: i dati pseudonimizzati restano personali finché collegabili all'interessato con informazioni aggiuntive (Linee guida EDPB 01/2025) **\[FATTO, A3; versione finale non verificata\]**. Le nuove Linee guida EDPB 02/2026 sull'anonimizzazione, adottate in bozza il 7 luglio 2026 e in consultazione fino al 30 ottobre 2026, propongono tre criteri: nessun isolamento del record, nessun collegamento, nessuna inferenza **\[FATTO, A6 3.1; testo ancora modificabile\]**. In una polizza di un'azienda con uno stabilimento, CAP, attività e somme assicurate isolano il record e permettono il collegamento con visure e bilanci **\[OPINIONE, A6 3.1\]**.

La procedura proposta da A6 ha nove passi **\[OPINIONE, A6 3.2\]**:

1. OCR in ambiente UE, con layout e coordinate.
2. Espressioni regolari con controllo di validità per gli identificativi strutturati (codice fiscale, partita IVA, IBAN, targhe); il controllo prevale sul modello.
3. Due modelli di riconoscimento di entità italiani in combinazione, per massimizzare la recall.
4. Dizionario del documento: i nomi presi dal frontespizio si propagano a tutte le occorrenze e varianti ("Rossi S.p.A.", "ROSSI SPA", "la Contraente").
5. Rilevamento e oscuramento di firme, timbri, loghi e immagini.
6. Rimozione di metadati PDF, livelli di testo nascosti, annotazioni e allegati incorporati; rasterizzazione e nuovo OCR delle pagine mascherate, perché il testo sotto un rettangolo nero spesso resta estraibile.
7. Generalizzazione dei quasi-identificativi: indirizzo a provincia, fatturato e somme a fasce o perturbati con fattore noto, ATECO a due cifre; la perturbazione va registrata nel gold per non romperne la verità.
8. Revisione umana al 100% delle pagine prima dell'ingresso in TEST-R, con checklist firmata.
9. Test di re-identificazione da parte di una persona non coinvolta.

Gli strumenti disponibili hanno limiti noti. Presidio riconosce il codice fiscale italiano ma con impostazioni in inglese lo ignora in silenzio, e un'issue pubblica segnala che non scarta i codici con carattere di controllo errato; i modelli italiani open source (rizzo-pii-0.3B, Italian\_NER\_XXL\_v2, GLiNER\_PII\_ITA) hanno solo metriche dichiarate dagli autori **\[FATTO, A6 3.2, fonti di comunità e model card\]**. Le prestazioni su documenti assicurativi vanno misurate su DEV-R.

Due categorie si escludono a monte: i dati sanitari (polizze infortuni e malattia, sinistri con lesioni, art. 9 GDPR) e quelli giudiziari (art. 10). Sono quasi mai necessari per il lavoro documentale corporate e richiedono deroghe non pacifiche **\[OPINIONE, A3\]**. Le polizze vita e TCM collettive restano fuori dalla Fase 1 anche per evitare gli obblighi antiriciclaggio, che si applicano solo ai rami vita **\[FATTO per l'ambito AML; OPINIONE per l'esclusione, A3 ambito 5\]**.

### Fornitori di modelli e OCR

| Requisito | Che cosa verificare | Fonte |
| --- | --- | --- |
| Elaborazione e conservazione in UE o SEE | Regione effettiva dell'endpoint; i profili geografici instradano all'interno dell'UE, non in una singola regione | A2 7.6; A3 |
| Nessun addestramento sui dati | Clausola contrattuale, non solo pagina commerciale | A2; A3 |
| Zero retention o retention minima contrattualizzata | Anche nei log del fornitore | A6 5.2 |
| Accordo di trattamento ex art. 28 ed elenco dei sub-responsabili | Firmato prima del primo documento reale | A3 |
| Valutazione dei trasferimenti | Anche con elaborazione UE, per l'accesso del gruppo extra-UE | A3 |
| Notifica degli incidenti | Entro i tempi che permettono la notifica del titolare entro 72 ore (art. 33 GDPR) | A3 |
| Sostituibilità | Astrazione sul modello e schema proprio, per cambiare fornitore senza riscrivere | Context v3; bozza 3.1 |

Le dichiarazioni dei fornitori raccolte nei report sono fatti sulle loro pagine, non garanzie: Bedrock dichiara di non usare i contenuti per l'addestramento e di non conservarli per default; Reducto ed Extend offrono zero retention; OpenAI dichiara per i progetti con regione Europa elaborazione in regione con zero retention **\[FATTO, A2 7.6 e A3, fonti dei fornitori o secondarie\]**. Le clausole vanno verificate contratto per contratto **\[OPINIONE, A2\]**. C'è anche un conflitto di prezzo da chiarire: la documentazione Anthropic indica il 10% in più sugli endpoint regionali, quella AWS nessun sovrapprezzo per l'inferenza geografica **\[FATTO: conflitto, A2 7.1\]**.

### Conservazione su tre binari

| Classe | Che cosa contiene | Durata | Fonte |
| --- | --- | --- | --- |
| Fascicolo di distribuzione | Originali, informativa, esigenze, report firmato, registro di validazione | Durata del rapporto più almeno cinque anni dalla cessazione (art. 67 Reg. IVASS 40/2018); dall'ultima comunicazione se il contratto non è concluso | \[FATTO, A3\] |
| Artefatti tecnici intermedi | Testi OCR, estrazioni non validate, prompt, bozze | Cancellazione automatica a breve, salvo ciò che prova la validazione; durata da fissare con il legale | \[OPINIONE, A3; Context v3\] |
| Copie di documenti di mercato per analisi | Set informativi delle compagnie, condizioni pubbliche | "Solo per il tempo necessario" (art. 70-quater L. 633/1941); conservare i dati derivati con il riferimento alla fonte | \[FATTO, A2; Volume 1, cap. 1.6\] |

La conservazione presso terzi è ammessa se rispetta i requisiti di ordinata tenuta, sicurezza, integrità, riservatezza e accesso tempestivo (art. 67 c. 5) **\[FATTO, A2 7.6, A3\]**. Quali artefatti tecnici siano "documentazione" ai sensi dell'art. 67 resta da decidere con un legale (cap. 2.6).

### Sicurezza e accessi

La checklist di A3 per il CTO si riassume in sei requisiti, ripresi nel Volume 4 (cap. 4.4) **\[OPINIONE, A3 output 5\]**: registro immutabile (append-only con hash concatenati o WORM) di caricamenti, estrazioni, versioni di modello e prompt, modifiche umane, approvazioni e consegne; separazione per cliente e per titolare, accessi per ruolo, autenticazione a più fattori, privilegio minimo; cifratura a riposo e in transito con chiavi gestite in UE; nessun documento reale in test automatici, set di valutazione, ticket, chat o log applicativi; cancellazione verificabile anche presso i fornitori; archivio di apprendimento separato, alimentato solo da una pipeline di anonimizzazione documentata.

### Le altre norme

| Norma | Si applica? | Effetto | Etichetta |
| --- | --- | --- | --- |
| AI Act (Reg. UE 2024/1689, modificato dal Reg. 2026/1744) | Sì, ma il caso d'uso danni non è ad alto rischio; l'Allegato III punto 5 c) (vita e salute di persone fisiche) si applica dal 2 dicembre 2027 | Scheda interna del sistema con la valutazione di non alto rischio; alfabetizzazione documentata (art. 4 riformulato); nessuno scoring su vita e salute; nessun chatbot verso il cliente senza dichiararlo | \[FATTO per le date, INTERPRETABILE per la qualificazione, A3; D24\] |
| DORA | No per gli intermediari che sono PMI | Restano gli obblighi GDPR sui fornitori | \[FATTO, A3, confermato da IVASS\] |
| NIS2 | Probabilmente no per un broker PMI | Da verificare sul D.Lgs. 138/2024 | \[INTERPRETABILE, A3\] |
| DPIA (art. 35 GDPR) | Probabilmente obbligatoria: tecnologie innovative, possibili categorie particolari, dati di lavoratori | Da fare prima del primo documento reale | \[DA VERIFICARE, A3; A6 3.4\] |
| Registro dei trattamenti (art. 30) | Sì: l'esenzione sotto i 250 dipendenti non vale per trattamenti non occasionali | Da tenere | \[FATTO, A3\] |

### Alfa

Nel fascicolo di Alfa i dati personali stanno in posti prevedibili e in uno meno prevedibile **\[Ipotesi dell'esempio\]**. Prevedibili: nome del titolare e del responsabile amministrativo, firme, indirizzo del capannone, targhe dei furgoni nel libro matricola. Meno prevedibile: la polizza infortuni del titolare e dei dirigenti contiene nomi, età e forse dati sanitari, quindi è un documento da escludere dall'elaborazione con modelli o da oscurare a monte, anche se Alfa è un'azienda e non una persona. La perizia dell'incendio della pressa può contenere riferimenti a persone presenti: va trattata come documento a rischio.

### Come cambia per una PMI

In una PMI la distanza tra azienda e persone è minima: in un'azienda di 42 dipendenti il legale rappresentante è spesso il titolare e il contraente, e un dato aziendale è spesso un dato personale per collegamento **\[OPINIONE\]**. La procedura di mascheramento va quindi applicata con più rigore, non meno. Per contro, i set informativi pubblici permettono di sviluppare buona parte della pipeline senza dati personali, che è la ragione per cui il Context v3 li considera utili ai test.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Se le polizze mascherate con la procedura sono anonime o pseudonimizzate con i criteri delle Linee guida 02/2026 | Decide se servono base giuridica e DPIA per il collaudo | Avvocato privacy; DPO |
| Ruolo esatto (responsabile, titolare autonomo) rispetto a clienti test e broker partner | Chi firma con i fornitori e chi può riusare | Avvocato privacy |
| Compatibilità del riuso di DEV-R con l'art. 6 par. 4 | Miglioramento del prodotto | Avvocato privacy |
| Garanzie contrattuali effettive dei fornitori scelti | Requisito UE e zero retention | CTO con il legale, sui DPA |
| Testo consolidato dell'AI Act dopo il Reg. 2026/1744 | Qualifica di fornitore o deployer | Avvocato specializzato in regolazione IA |
| Tutela dei wording negoziati come segreto commerciale | Uso in TEST-R e verso un verificatore | Avvocato di proprietà industriale |

## 2.12 Comprare, costruire, studiare

**In sintesi.** Si compra ciò che è commodity e si costruisce ciò che differenzia: OCR, modelli linguistici, firma elettronica e hosting in UE si comprano e restano intercambiabili; schema, tassonomia, regole, verifica delle citazioni, abbinamento delle appendici, motore di riconciliazione, interfaccia di revisione con registro e golden set si costruiscono **\[OPINIONE, A2 7.4; bozza 3.1\]**. Il costo di calcolo per documento è trascurabile rispetto al lavoro umano; il vincolo vero è il tempo dello sviluppatore e dell'esperto **\[STIMA, A2 7.2\]**. Le architetture possibili sono tre, in sequenza: un ponte a basso costo per misurare, un build leggero per la specifica, un build solido rimandato a dopo l'ingresso del CTO. Cinque prodotti vanno studiati, nessuno ha pubblicato risultati indipendenti su polizze italiane, e la prova pratica dell'Allegato D non è ancora stata fatta.

### Che cosa comprare e che cosa costruire

| Componente | Decisione | Perché | Fonte |
| --- | --- | --- | --- |
| OCR e parsing (Mistral, Azure Document Intelligence, Reducto, LlamaParse, Docling) | Comprare o usare open source | Intercambiabili; il testo OCR è una commodity | \[OPINIONE, A2 7.4\] |
| Modelli linguistici via endpoint UE | Comprare | Dietro un'astrazione interna, per cambiare fornitore | \[OPINIONE, A2; bozza 3.1\] |
| Firma elettronica, verifica d'identità, hosting gestito in UE | Comprare | Commodity con certificazioni | \[OPINIONE, bozza 3.1\] |
| Lato banca | File CBI dalla banca; aggregazione bancaria solo se la raggiungibilità è verificata | La bozza assumeva l'aggregazione bancaria, corretta da D31 | \[FATTO, A7; D31\] |
| CRM | Comprare uno standard con buone API, quando servirà | Un CRM proprietario prima dei clienti è un errore di priorità | \[OPINIONE, bozza 3.1\] |
| Schema canonico e tassonomia delle coperture | Costruire | È il valore difendibile; definito nel codice proprio, non nella configurazione di un fornitore | \[OPINIONE, A2 7.4\] |
| Regole, normalizzazione, motore di precedenza | Costruire | Deterministici e specifici del dominio italiano | \[OPINIONE, A2; A5\] |
| Verifica delle citazioni | Costruire | Nessun sistema la garantisce (grounding sulla parola al massimo 46,4%) | \[FATTO e OPINIONE, A2\] |
| Abbinamento delle appendici e motore di riconciliazione | Costruire | Nessun prodotto verificato in Italia | \[FATTO: assenza, A2; A7\] |
| Interfaccia di revisione con registro | Costruire | È dove si misura e si prova il controllo umano | \[OPINIONE, A2; A3\] |
| Golden set e banco di prova | Costruire | Senza di esso non si sceglie nessun fornitore | \[OPINIONE, A6\] |

La bozza metteva tra le cose da costruire anche un "motore di gap detection" e una "base di conoscenza sulle condizioni di mercato". Il primo produce raccomandazioni, cioè attività di distribuzione, e resta fuori dalla Fase 1 verso clienti reali (D14, D06). La seconda incontra i limiti di licenza delle note legali delle compagnie (cap. 2.10): si costruisce solo come libreria interna di dati derivati, previo parere legale **\[OPINIONE, A2; A5; da verificare con un legale\]**.

### Listini e costo per documento

| Componente | Prezzo 2026 | Note | Etichetta |
| --- | --- | --- | --- |
| Mistral OCR 4 e 4.1 | 4 $ ogni 1.000 pagine; batch 2 $ | Azienda francese; confidenza e riquadri per blocco dalla 4.1 | \[FATTO, A2 7.1\] |
| Azure Document Intelligence | Read 1,50 $; Layout 10 $ ogni 1.000 pagine; 500 pagine gratis al mese | Regioni UE; estrazione custom 30 o 50 $ secondo la fonte | \[FATTO, conflitto sulla custom, A2\] |
| LlamaExtract Agentic Plus | Misurato 8,1 centesimi a pagina in ExtractBench | Prezzo uguale in Nord America e UE | \[FATTO, A2\] |
| Reducto | Da settembre 2026 Parse 0,01 $, Extract 0,02 $, Deep Extract 0,04 $ a pagina | Fonte: un concorrente; da riverificare | \[FATTO, fonte secondaria, A2\] |
| Docling, Marker, Tesseract, PaddleOCR | Gratuiti, ospitati in proprio in UE | Docling vicino al top nel rilevamento tabelle ma sotto il 90% di F1 sulle tabelle eterogenee | \[FATTO, A2\] |
| Claude Sonnet 5.5 via API | 2 $ in ingresso, 10 $ in uscita per milione di token; più 10% sugli endpoint regionali secondo Anthropic | Conflitto con la documentazione AWS | \[FATTO, A2\] |
| Azure OpenAI GPT-5.5 | Global 5/30 $; Data Zone UE 5,50/33 $ | Dal 1/9/2026 sovrapprezzo del 20% sui nuovi modelli in Data Zone UE | \[FATTO, fonte secondaria, A2\] |
| Navisio Pro | Da 89 euro al mese | DPA e hosting non verificati | \[FATTO, A2\] |

A2 stima il calcolo per un audit corporate di 600 pagine tra 10 e 60 dollari, a seconda del fornitore di estrazione **\[STIMA, A2 7.2\]**. Per Alfa il volume è molto più basso. Con l'ipotesi di 500 pagine l'anno (sette schede, tre set di condizioni scaricati, quietanze, appendice, perizia), i soli listini OCR ed estrazione danno da circa 2 a circa 40 dollari l'anno **\[STIMA: 500 pagine × da 0,004 a 0,081 $ a pagina; pagine ipotizzate\]**. Il costo del lavoro umano sulle stesse polizze è di un altro ordine: circa 158 euro per polizza l'anno al costo pieno di 45 euro l'ora secondo il modello di A9 **\[STIMA, A9\]**. Il calcolo non è la variabile da ottimizzare; i minuti di revisione sì.

### Tre architetture in sequenza

A2 ha disegnato le tre architetture per un MVP di audit corporate con quattro piloti; le cifre vanno lette come ordini di grandezza, con tariffe giornaliere di 350-550 euro non verificate **\[STIMA, A2 7.3\]**. Il Context v3 adotta la stessa logica: prototipare con un ponte a basso costo, misurare, poi decidere che cosa costruire.

|  | A. Ponte | B. Build leggero | C. Build solido |
| --- | --- | --- | --- |
| Scopo | Misurare: golden set, tempi di revisione, formato dell'output | Prima versione per i test con broker e clienti; base della specifica | Scala e consolidamento |
| Componenti | Storage UE; strumento di estrazione no-code; modello via endpoint UE; fogli condivisi; in alternativa Navisio Pro | Backend; database in UE; un fornitore OCR e un modello via endpoint UE; schema proprio; regole in codice; verifica delle citazioni; interfaccia di revisione con registro; export CSV | B più doppia estrazione, banco di prova in integrazione continua, catena delle appendici, registro immutabile, accessi per ruolo, mascheramento, conservazione automatica |
| Persone | Fondatore più un freelance per 3-5 giorni | Uno sviluppatore senior più un esperto assicurativo part-time | Due sviluppatori più il CTO |
| Tempi | 2-4 settimane | 10-12 settimane | 5-6 mesi |
| Costo di sviluppo | 2-6 mila euro | 18-33 mila euro | 80-150 mila euro |
| Costo fisso mensile | 100-300 euro | 150-500 euro | 500-1.500 euro |
| Rischi | Nessun gate imposto dal software; catena di DPA frammentata; con Navisio, dati su una piattaforma di un broker concorrente | Un solo fornitore OCR; un solo sviluppatore | Sovradimensionamento prima di sapere che cosa funziona |

Due correzioni rispetto ad A2. Il ponte non lavora su dati di clienti reali senza accordo scritto e mascheramento: A2 lo pensava sul "cliente zero", che il Context v3 ha ridotto a possibile cliente test (D12). Il caso dal dato al denaro non era nel perimetro di A2: un ponte per la riconciliazione richiede fogli e script su titoli e movimenti sintetici, con un costo dello stesso ordine del ponte A **\[OPINIONE\]**.

### Che cosa studiare dagli altri

| Prodotto | Che cosa fa | Che cosa è verificato | Che cosa è marketing | Che cosa imparare |
| --- | --- | --- | --- | --- |
| Navisio AI (Nano i-Tech S.r.l.) | Piattaforma multi-agente per intermediari: analisi di portafoglio, confronto di polizze e condizioni | Proprietà di un broker iscritto al RUI (B000697792); lancio tra settembre e ottobre 2025 | 74% di accuratezza generale; "fino al 90%" di riduzione del tempo; oltre 200 intermediari | È il fornitore-concorrente più vicino; prima di caricare dati servono DPA, divieto di addestramento, separazione dalle attività di brokeraggio e una metodologia replicabile \[FATTO e OPINIONE, A2 7.5; A1 mod. 3\] |
| IAssicurGPT (Diagramma) | Carica polizze e quietanze da PDF nel gestionale IAssicur | Integrato nel gestionale | Nessuna metrica pubblica | Mostra la direzione dei gestionali: l'estrazione diventa una funzione del gestionale \[FATTO, A1 mod. 2\] |
| FurtherAI | Agenti AI per compagnie: intake, controllo polizza contro quotazione | Serie A da 25 milioni di dollari guidata da a16z (ottobre 2025), 30 milioni in totale | "95% data accuracy", ROI del 400%, controlli 20 volte più veloci | Il controllo polizza emessa contro quotazione come caso d'uso misurabile; modello di ingegneri dislocati presso il cliente \[FATTO e OPINIONE, A1; A2\] |
| Vantel | Lettura e confronto di polizze per agenzie USA | Y Combinator W25 | "5 polizze da 100 pagine su 50 fattori in 5 minuti invece di 5 ore"; cifre di produttività incoerenti tra le sue fonti | Lavora su polizze USA e formati ACORD: poco trasferibile \[FATTO e OPINIONE, A1 mod. 3\] |
| Harper | Broker AI-nativo per piccole imprese USA | 46,8 milioni di dollari tra seed e Serie A (54 in totale secondo TechCrunch); nato come fornitore per agenzie, poi diventato broker per la resistenza dei broker | Oltre 5.000 aziende in 13 mesi; "30 volte" i ricavi per commerciale | Il pivot da fornitore a broker; la meccanica di volume non si trasferisce \[FATTO e OPINIONE, A1 mod. 3; A8\] |

Due riferimenti misurano la leva meglio delle dichiarazioni. Newfront, ceduto a WTW per 1,05 miliardi di dollari più earn-out, ha ricavi per addetto stimati intorno a 186 mila dollari, in linea con i broker tradizionali **\[FATTO per l'operazione, STIMA di terzi per il dato per addetto, A8; A1\]**. Marsh, nel programma Thrive, dichiara circa il 20% di efficienza su migliaia di documenti a settimana: è l'unico numero di produttività documentale trovato, ed è una dichiarazione del management **\[FATTO, fonte secondaria, A8\]**. Nessuna evidenza pubblica prova oggi una leva di molte volte (D05).

La prova pratica degli strumenti esistenti su polizze sintetiche, prevista dall'indice e dall'Allegato D, non è stata ancora eseguita: questo capitolo non può riportarne i risultati **\[lacuna\]**. Il protocollo va scritto nell'Allegato D con le metriche del cap. 2.10.

### Dieci errori da evitare

A2 non ha trovato post-mortem pubblici verificabili; l'elenco deriva dai modi di fallimento documentati **\[OPINIONE, A2 7.7\]**: costruire l'OCR in casa; fidarsi dell'accuratezza dichiarata dai fornitori senza golden set; lasciare al modello aritmetica e normalizzazione; mostrare output senza citazione verificata; fare scraping delle condizioni ignorando le riserve; promettere "tutto il mercato"; ignorare i cambi di tokenizer e di listino; usare architetture "agentiche" costose dove basta una pipeline deterministica (in ExtractBench i coding agent costano 16,2-27,8 centesimi a pagina); mettere i dati dei clienti su strumenti di concorrenti; partire dal build solido senza un CTO.

### Il vantaggio competitivo

A8 avverte che le piattaforme di consolidamento italiane possono comprare gli stessi strumenti dagli stessi fornitori, quindi il vantaggio resta temporaneo se non diventa capacità di esecuzione o patrimonio di dati proprio **\[OPINIONE, A8 rischio 3\]**. Poiché i dati dei clienti non sono un asset garantito (D08), il patrimonio difendibile sta in ciò che questo capitolo mette nella colonna "costruire": schema e tassonomia, regole e precedenze, golden set e banco di prova, qualità misurata **\[OPINIONE, Context v3\]**.

### Come cambia per una PMI

Per le PMI l'economia unitaria è più stretta: con un premio medio basso, ogni euro di costo per polizza conta. Il calcolo resta trascurabile, ma il canone di strumenti per postazione (Navisio Pro da 89 euro al mese, gestionali da 59 euro una tantum a oltre 150 al mese) pesa sul margine di un micro-broker **\[FATTO per i listini, A1 e A2; OPINIONE per il giudizio\]**. Questo spinge verso il build leggero proprio, con fornitori a consumo, invece che verso strumenti a canone fisso.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Risultati della prova pratica di Navisio, IAssicurGPT, FurtherAI e Vantel su polizze sintetiche | Decisione build o buy | Allegato D, da eseguire |
| Sovrapprezzi UE effettivi (Bedrock 10% o zero; Data Zone 10% o 20%) e listino Reducto | Costo a regime | Account manager dei cloud provider |
| Tariffe reali di sviluppatori per questo stack in Italia | Costo delle architetture B e C | Advisor tecnico; recruiter |
| Accuratezza di almeno due fornitori sul golden set | Trigger della decisione build o buy (Context v3) | Banco di prova (cap. 2.10) |
| Costi reali di un broker PMI per polizza | Peso relativo di canoni e calcolo | CFO o COO di un broker comparabile |

## 2.13 Architettura end to end e ordine di costruzione

**In sintesi.** L'infrastruttura è una piattaforma unica attorno a un solo modello dati, non un insieme di applicazioni che si scambiano file **\[OPINIONE, bozza 3\]**. Si articola in quattro livelli disaccoppiati (acquisizione e persistenza, intelligenza, orchestrazione, interfaccia) più uno strato trasversale di sicurezza e governo del dato; solo il livello di intelligenza parla con i modelli **\[OPINIONE, bozza 3.2\]**. L'ordine di costruzione segue una regola: prima le fondamenta comuni ai due casi d'uso, poi i due rami in parallelo (dal documento al dato, dal dato al denaro), poi l'uscita verso i gestionali, e solo dopo ciò che dipende da un soggetto abilitato o da portafogli reali. Il passaggio da un passo al successivo dipende da criteri misurabili, non dal calendario; nomi delle fasi e mesi nascono nel Volume 4 (D14). Il capitolo è condizionato: il caso d'uso da consolidare per primo non è deciso (D03) e il Volume 3 non è ancora scritto.

&#91;embedded content: architettura end to end · 4 livelli e strato trasversale\]

I dati salgono dall'acquisizione all'interfaccia; i fornitori esterni ricevono solo testo mascherato e solo dal livello di intelligenza; lo strato trasversale vale per tutti i livelli.

### I livelli e i loro componenti

| Livello | Componenti | Capitoli | Che cosa non fa |
| --- | --- | --- | --- |
| Acquisizione e persistenza | Adattatori di sorgente (PEC, email, upload, flussi delle compagnie, AIBA Digital, SSF, CBI, SDI, InfoCamere, RUI); archivio immutabile dei documenti con hash; modello canonico bitemporale con tenant; registro degli eventi | 2.2, 2.3, 2.4 | Non interpreta i documenti |
| Intelligenza | Classificazione; OCR; estrazione con schema e doppia estrazione; verifica delle citazioni; astrazione sui fornitori di modelli con instradamento per compito | 2.6, 2.7, 2.12 | Non decide e non scrive nel gestionale |
| Orchestrazione | Macchine a stati per documento e per titolo; motore di precedenza; motore di riconciliazione; code dei gate H1-H4; regole di coerenza | 2.5, 2.6, 2.8 | Non chiama i modelli direttamente |
| Interfaccia | Interfaccia di revisione con evidenze e registro; coda delle eccezioni contabili; esportazione verso gestionali e compagnie; in futuro portale cliente | 2.6, 2.9 | Non produce raccomandazioni a clienti reali nella Fase 1 |
| Strato trasversale | Mascheramento prima dei modelli; cifratura e chiavi in UE; accessi per ruolo e per tenant; conservazione su tre binari; banco di prova e golden set; scheda del sistema AI Act | 2.10, 2.11 | — |

La bozza propone un solo fornitore cloud enterprise con trattamento dei dati in UE: in questa fase il multi-cloud aggiunge complessità senza ridurre un rischio reale, mentre le certificazioni del fornitore aiutano nelle due diligence **\[OPINIONE, bozza 3.2\]**. È una decisione del CTO, con il vincolo UE del cap. 2.11.

### Il percorso end to end di Alfa

Un anno di Alfa attraversa tutta l'architettura **\[Ipotesi dell'esempio\]**. A settembre lo scadenzario apre i rinnovi (orchestrazione, stato del contratto). A ottobre arrivano via email i sette frontespizi rinnovati: l'acquisizione li salva e li maschera, l'intelligenza li classifica ed estrae, l'orchestrazione applica le precedenze e manda la somma aumentata del macchinario alla revisione; l'interfaccia mostra all'operatore pagina ed estratto. A novembre la PEC di disdetta della tutela legale chiude un contratto e ne apre un altro. A gennaio il file CBI del conto separato porta il bonifico cumulativo: il motore di riconciliazione lo ripartisce sui sette titoli e manda all'amministrazione le eccezioni sulla Compagnia B e sull'Agenzia X. L'adattatore di uscita scrive nel gestionale le quietanze validate. A giugno la denuncia dell'incendio apre un sinistro collegato alla garanzia incendio della multirischi. Ogni passaggio lascia un evento: a fine anno il registro dice chi ha visto, modificato e approvato ciascun valore del fascicolo di Alfa.

### Ordine di costruzione

La bozza ordina la costruzione con la regola "prima ciò che produce dato strutturato, poi ciò che lo consuma" e dà la priorità all'estrazione documentale **\[OPINIONE, bozza 3.3\]**. Il Context v3 chiede invece di portare in parallelo estrazione e riconciliazione fino allo studio dei tempi (D03, D34). La sequenza che segue tiene la regola della bozza dentro ciascun ramo e la scelta del Context tra i rami **\[OPINIONE\]**.

| Passo | Che cosa si costruisce | Dipende da | Criterio per passare al successivo |
| --- | --- | --- | --- |
| 0. Prerequisiti | Accordi scritti con clienti test e broker partner; parere legale su mascheramento e ruoli; DPA con i fornitori; validazione dello schema da un tecnico indipendente | — | Almeno un accordo firmato; schema rivisto (cap. 2.4) |
| 1. Fondamenta comuni | Modello canonico con tenant e bitemporalità; registro degli eventi; archivio immutabile; mascheramento; banco di prova con SYN | Passo 0 | SYN v1 eseguibile in integrazione continua; mascheramento misurato su DEV-R |
| 2a. Ramo documento | Acquisizione da email e upload; classificazione; estrazione con citazione verificata; normalizzazione; motore di precedenza; interfaccia di revisione con registro | Passo 1 | Metriche del cap. 2.10 misurate su DEV-R per almeno due fornitori |
| 2b. Ramo denaro | Adattatori CBI, estratti conto, titoli; AccordoIncasso; motore di riconciliazione; coda delle eccezioni | Passo 1 | Eccezioni per 100 titoli misurate su titoli sintetici e anonimizzati |
| 3. Studio dei tempi e scelta | Misura con il crossover del cap. 2.10 sui processi P02, P08, P10, P12, P13, P16 (D35) | Passi 2a e 2b | Scelta del caso d'uso da consolidare per primo (D03) |
| 4. Uscita | Adattatori di export verso almeno un gestionale; catena delle appendici completa; doppia estrazione | Passo 3; specifiche dei fornitori di gestionali | Import riuscito su un ambiente di test di un gestionale |
| 5. Dopo la Fase 1 | Gate H4 operativo con un soggetto abilitato; output verso clienti; migrazione di portafogli acquisiti | Decisioni su abilitazione e forma del prodotto | Fuori da questo volume (Volume 4 e Volume 5) |

La bozza prevedeva un pilota di otto settimane su 20-30 fascicoli annotati **\[OPINIONE, bozza 3.3\]**: è coerente con il DEV-R, non con il TEST-R, che A6 dimensiona a 60-100 pacchetti (cap. 2.10). Proponeva anche, per le fasi successive, modelli di abbandono, propensione delle compagnie e gravità dei sinistri e un simulatore delle provvigioni: restano fuori dalla Fase 1 (D36).

### Le dipendenze che possono bloccare

Quattro dipendenze sono esterne al team e vanno avviate prima di scrivere codice **\[OPINIONE\]**: gli accordi con i clienti test, senza i quali TEST-R non esiste entro marzo 2027 (cap. 2.10); il parere legale su anonimizzazione e ruoli (cap. 2.11); le specifiche di import di almeno un gestionale (cap. 2.9); il file CBI di un conto separato reale, anche anonimizzato, per verificare l'adattatore bancario (cap. 2.8). Nessuna di queste dipende dalla scelta del caso d'uso, quindi nessuna va rimandata.

### Le decisioni da prendere per prime

La bozza indica sei decisioni con il maggiore effetto a valle **\[OPINIONE, bozza 3.6\]**, che questo volume conferma con una correzione:

1. La struttura dello schema canonico e la sua capacità di coprire più rami senza campi liberi (cap. 2.4).
2. La separazione tra dati in custodia e dati derivati (cap. 2.4, 2.11).
3. La strategia dei modelli: fornitori, instradamento, costo a regime (cap. 2.12).
4. Il perimetro e la sequenza dell'automazione dei processi interni: qui la scelta non si prende a priori ma con lo studio dei tempi (passo 3).
5. Il dimensionamento della prima versione e la configurazione minima per i test.
6. Il disegno riutilizzabile della pipeline di importazione e migrazione, da cui dipende il ritmo del consolidamento (Context v3: importazione trattata come funzione del prodotto).

### Come cambia per una PMI

Per le PMI l'architettura non cambia nei livelli ma nei pesi. L'acquisizione passiva da email e PEC e la classificazione pesano di più, perché il volume per addetto è alto; i programmi internazionali e i bordereaux Lloyd's possono restare fuori. Se il broker usa un gestionale entry-level o Excel, il passo 4 può trasformarsi nella scelta di fare dell'infrastruttura il registro dei titoli: è la decisione sulla forma del prodotto, da prendere con il suo trigger (Context v3) **\[OPINIONE\]**.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Quale caso d'uso rende di più | Ordine dopo il passo 3 | Studio dei tempi (D35) |
| Contenuto del Volume 3 su ruoli e flusso con gate umano | Il livello di interfaccia dipende dai ruoli | Scrittura del Volume 3 |
| Revisione dell'architettura da un tecnico indipendente | Condizione per consegnare il volume ai candidati CTO | Tecnico indipendente (indice) |
| Tempi reali di firma degli accordi con clienti test | Calendario del passo 0 | CEO; legale |
| Fornitore cloud e motore di persistenza | Vincolano costi e portabilità | CTO (Volume 4, cap. 4.9) |
