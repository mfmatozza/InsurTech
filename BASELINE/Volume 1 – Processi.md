# Volume 1 – Processi

Oct 2, 2026 · @l

## Come leggere questo volume

Il Volume 1 descrive che cosa fa un broker danni giorno per giorno, dove il lavoro si rompe e dove la tecnologia può intervenire. Raccoglie i 22 processi del report A1 e i 13 eventi del ciclo di vita del report A4 in sette famiglie, più un capitolo sulla tassonomia delle coperture PMI e un quadro riassuntivo. Presuppone il lessico del Volume 0: ogni termine è definito al primo uso, con rinvio al glossario (cap. 0.11).

**Stato del testo.** È una prima stesura. Quasi tutti i tempi e i costi dei processi sono stime pensate per clienti corporate, perché per i broker italiani non esistono misure pubbliche. **\[FATTO, A1: lacuna dichiarata\]** Prima di consolidarlo, la mappa va confermata o corretta da almeno due broker reali che servono PMI, come prevede l'indice della libreria.

### Lo schema di ogni processo

Ogni processo è descritto con la stessa scheda, ereditata dalla bozza di settembre e ampliata dall'indice.

| Voce | Che cosa contiene |
| --- | --- |
| Cosa | L'attività e il suo risultato |
| Chi | I ruoli coinvolti, nel broker e fuori |
| Perché | La ragione di mestiere o di legge |
| Quando | Frequenza e durata, con l'etichetta della stima |
| Dati e documenti | Che cosa entra ed esce, in che formato |
| Dove si rompe | Colli di bottiglia ed errori tipici |
| Già sul mercato | Che cosa è già automatizzato, e da chi, separando fatti e dichiarazioni |
| Tech Boost | Prima l'automazione classica (regole, OCR, API, firma elettronica), poi gli strati avanzati (LLM, RAG, ML) |
| Gate umano e rischio | Che cosa deve decidere una persona e che cosa succede se la macchina sbaglia |
| Beneficio | Che cosa si guadagna e come lo si misura |

Ogni capitolo ha poi una sezione "Come cambia per una PMI", basata sul report A9, e si chiude con "Cosa non sappiamo".

### Una numerazione unica

I report usano due numerazioni diverse: A1 numera 22 processi da 1 a 22, A4 usa codici provvisori P-xx che non coincidono. **\[FATTO, A4, nota al modulo 3\]** Il volume adotta i numeri di A1 con il prefisso P (P01-P22) e ricollega a essi i codici di A4 e i 13 eventi del ciclo di vita.

| Famiglia (capitolo) | Processi del volume | Codici P-xx di A4 | Eventi del ciclo di vita (A4, cap. 0.6) |
| --- | --- | --- | --- |
| 1.1 Capire il cliente | P01 Incarico, P02 Raccolta documenti, P03 Risk assessment, P04 Mappatura e gap analysis | P-01, P-03, P-04, P-05 | 1 Contatto e incarico, 2 Analisi dei rischi |
| 1.2 Andare sul mercato | P05 Rapporti con il mercato, P06 Submission e negoziazione, P07 Confronto e proposta, P08 Consulenza e precontrattuale, P09 Emissione e verifica | P-02, P-06, P-07, P-08, P-09, P-10 | 3 Piazzamento, 4 Raccomandazione, 5 Collocamento, 6 Emissione |
| 1.3 Gestire il portafoglio | P12 Scadenzario e rinnovi, P13 Variazioni e appendici, P11 Regolazioni, P19 Cauzioni e certificati, P20 Coassicurazione e programmi | P-14, P-15, P-18, P-19 | 9 Appendici, 10 Regolazione, 12 Rinnovo, 13 Disdetta |
| 1.4 I sinistri | P14 Gestione sinistri | P-16, P-17 | 11 Sinistro |
| 1.5 Il denaro | P10 Incasso e contabilità, P16 Provvigioni | P-11, P-12, P-13 | 7 Incasso, 8 Rimessa |
| 1.6 Conformità e archivio | P17 Compliance, P18 Archiviazione, P15 Reportistica | P-20, P-21, P-22 | Trasversale |
| 1.7 Rete e crescita | P21 Gestione rete, P22 Due diligence e migrazione | Nessuno | Fuori dal ciclo della singola polizza |

**\[STIMA: corrispondenza ricostruita dall'autore confrontando le tabelle di A1 e A4; va verificata\]** Due corrispondenze non sono uno a uno: l'informativa precontrattuale (P-02 di A4) sta in P08 ma parte già con l'incarico, e il collocamento con il riparto tra coassicuratrici (evento 5) tocca sia P09 sia P20.

### Etichette, fonti e correzioni

Ogni affermazione rilevante porta un'etichetta: FATTO con la fonte, STIMA con il metodo, OPINIONE con il ragionamento. Una cifra senza fonte è un'ipotesi e lo dice. Gli obblighi normativi sono requisiti di prodotto da verificare con un avvocato di distribuzione assicurativa e privacy prima di toccare dati di clienti reali.

Il Context v3 prevale su tutto. Le fonti sono i report A1-A9 e la bozza "Progetto tecnologia" del 29 settembre 2026. Due note sui file del Project: il file "compass\_artifact…" è una copia di A1 con l'elenco delle fonti; il file A7.md porta nel titolo interno la dicitura "Report A3", ma per contenuto è il report A7 sul governo del dato e così è citato qui.

Dove i report si contraddicono, il volume usa le correzioni dell'indice e del registro delle decisioni (Allegato A) e lo segnala nel testo. Le principali sono queste.

| Punto | Che cosa dicevano le fonti | Che cosa usa il volume | Riferimento |
| --- | --- | --- | --- |
| Audit come prodotto d'ingresso | A1 e la bozza lo propongono | L'audit con raccomandazioni è distribuzione: si studia solo su dati sintetici o anonimizzati | D14; A3 |
| Sezione E, broker ospitante, split | A1, A2 e A3 ragionano in quel quadro | Sospesi: il volume non li tratta come vincoli | D09 |
| Digital Omnibus sull'IA | A1 e A9 lo danno in attesa | Pubblicato e in vigore dal 27/7/2026 | D24; A3 |
| Grandi rischi | A4 scrive che quasi tutti i clienti da 12,8 milioni lo sono | Servono due soglie su tre, ramo per ramo | D16 |
| Minimo della fideiussione | 18.750, 19.510 o 23.480 euro | Conflitto di fonti, probabilmente vale 23.480 | D23 |
| Scraping dei set informativi e dati anonimizzati per il ML | La bozza li propone come leve (2.1, 2.2) | Analisi lecita entro limiti; ridistribuzione e dataset dai clienti da verificare con un legale | A2; A3; A5 |
| Verticali energy e logistica | A1 e A2 li usano come esempi | Eliminati come posizionamento; restano solo dove servono a spiegare un ramo | D09; Context v3 |

### Il cliente di riferimento

Gli esempi usano Alfa Meccanica, l'azienda ipotetica del Volume 0: manifattura, 8 milioni di fatturato, 6 milioni di attivo, 42 dipendenti, cinque furgoni, sette polizze con quattro compagnie, 40.000 euro di premi imponibili. **\[Ipotesi, D21\]** Per questo volume serve sapere come le polizze si distribuiscono tra compagnie e canali. Il Volume 0 ha fissato che il broker ha accordi diretti con due compagnie, una sola delle quali con accordo di incasso ex art. 118, e passa da un'agenzia per le altre due. La ripartizione per polizza è una nuova ipotesi dell'esempio.

| Polizza di Alfa | Premio imponibile | Compagnia e canale (ipotesi) | Regime di incasso |
| --- | --- | --- | --- |
| Multirischi del capannone e del magazzino, Cat Nat inclusa | 14.000 euro | Compagnia A, diretta | Liberatorio (accordo ex art. 118) |
| RC verso terzi e dipendenti (RCT/RCO) | 8.000 euro | Compagnia A, diretta | Liberatorio |
| Flotta di cinque furgoni (libro matricola) | 7.000 euro | Compagnia B, diretta | Non liberatorio |
| RC prodotti | 6.000 euro | Compagnia B, diretta | Non liberatorio |
| Merci trasportate | 2.000 euro | Compagnia C, tramite l'Agenzia X | Dipende dalla ratifica della compagnia |
| Infortuni del titolare e dei dirigenti | 2.000 euro | Compagnia C, tramite l'Agenzia X | Dipende dalla ratifica |
| Tutela legale | 1.000 euro | Compagnia D, tramite l'Agenzia X | Dipende dalla ratifica |

**\[Ipotesi dell'esempio, da verificare con un broker PMI insieme al premio complessivo di Alfa\]**

### Il segmento sbagliato dei report

I report A1-A8 sono stati scritti per aziende da 10 a 500 milioni di fatturato. Il target del progetto è la PMI, coperta da A9. **\[FATTO, Context v3; indice\]** Dove un tempo, un documento o un rischio vale solo per il corporate, il volume lo dice e indica che cosa cambia per una PMI. I processi propri di una PMI (prodotti a catalogo, set informativi pubblici, informativa piena) vanno verificati con un broker che li gestisce.

## 1.1 Capire il cliente

**In sintesi.** La prima famiglia trasforma un'azienda in un fascicolo: chi è, che cosa ha già assicurato, a quali rischi è esposta, che cosa manca. Comprende l'incarico (P01), la raccolta dei documenti (P02), la valutazione del rischio (P03) e la mappatura con gap analysis (P04). Il collo di bottiglia non è leggere le polizze ma averle tutte, nella versione giusta, collegate tra loro. Per una PMI il problema cambia forma: i testi di prodotto sono pubblici e standard, mentre la scheda con i dati del cliente arriva spesso come scansione e il cliente non sa produrre dati ordinati. Qui la tecnologia ha una leva alta su P02 e un rischio alto su P04, che è consulenza e quindi distribuzione assicurativa: in Fase 1 si costruisce e si misura solo su documenti sintetici, pubblici o anonimizzati.

### P01 Incarico

| Voce | Contenuto |
| --- | --- |
| Cosa | Il cliente firma la **lettera di incarico**, il mandato con cui affida al broker la gestione delle coperture; se c'era un altro broker, lo revoca. Il broker consegna l'informativa precontrattuale su di sé. \[FATTO, A1 tab. 1A\] |
| Chi | Titolare o producer del broker; per il cliente il titolare o il responsabile amministrativo. \[FATTO, A1\] |
| Perché | Il broker agisce su incarico del cliente (art. 109 CAP): senza incarico non c'è broker. L'incarico fissa anche il perimetro, cioè quali società e quali rami. \[FATTO, A1 e A4\] |
| Quando | All'inizio del rapporto, spesso a ridosso di una scadenza. Per il corporate: ciclo commerciale di 1-3 mesi e 2-4 ore di documentazione \[STIMA, A1\]; 2-8 settimane secondo A4 \[STIMA, A4\]. Per le PMI nessun dato. |
| Dati e documenti | Visura, organigramma di gruppo, lettera di incarico in PDF firmato, eventuale revoca, informativa sul distributore. \[FATTO, A1 e A4\] |
| Dove si rompe | Incarico senza perimetro chiaro: quali società del gruppo, quali rami. Il perimetro societario non è un dato strutturato. \[FATTO, A1 e A4\] |
| Già sul mercato | CRM generici e firma elettronica, senza funzioni specifiche per il broker. La firma elettronica avanzata costa, secondo AIBA, qualche centinaio di euro di avvio e al massimo 0,5 euro a documento. \[FATTO, A1, paper AIBA "Broker 5.0"\] |
| Tech Boost | Classica: incarico generato dall'anagrafica, visura via API del Registro imprese (a pagamento), firma elettronica, onboarding come macchina a stati (richiesto, ricevuto, verificato, approvato). \[FATTO per le API, A7; OPINIONE, bozza 2.5\] Avanzata: estrazione del perimetro da visura e organigramma; valore modesto. \[OPINIONE\] |
| Gate umano e rischio | Firma del soggetto abilitato. Rischio medio: un perimetro sbagliato si propaga a tutti i processi successivi. Intestazione, firma e numero di iscrizione vanno resi configurabili, perché il distributore non è ancora deciso. \[FATTO, Context v3; A2\] |
| Beneficio | Basso in tempo risparmiato; alto come primo dato strutturato del cliente. \[OPINIONE\] |

Cambiare broker ha un costo che passa da questo processo: il codice deontologico di ACB riconosce al broker cessante il 50% delle provvigioni per due annualità dopo la prima. **\[FATTO, A9\]** È una regola associativa, la cui applicazione fuori da ACB va verificata.

### P02 Raccolta dei documenti

| Voce | Contenuto |
| --- | --- |
| Cosa | Raccogliere polizze, appendici, quietanze, condizioni, questionari, bilanci, elenchi di beni e veicoli, contratti con clienti e fornitori, e ricavarne un fascicolo cliente strutturato. \[FATTO, A1\] |
| Chi | Account, back office, referente amministrativo del cliente. \[FATTO, A1\] |
| Perché | Senza un inventario completo nessuna analisi è affidabile. A1 lo chiama "il vero collo di bottiglia". \[OPINIONE, A1\] |
| Quando | Alla presa in carico e prima di ogni rinnovo importante. Per un gruppo corporate di 3-5 società: 5-20 ore di lavoro e settimane di attesa del cliente. \[STIMA, A1\] |
| Dati e documenti | Fino a 15 tipologie di documento (A5, tabella 1). PDF nativi per condizioni e DIP; scansioni per schede, appendici e quietanze timbrate; foto; Excel per flotte e ubicazioni; email con allegati annidati. \[OPINIONE, A5\] |
| Dove si rompe | Documenti incompleti, appendici non abbinate alla polizza madre, polizze tenute da agenzie diverse, versioni superate. \[FATTO, A1\] Il cliente consegna spesso solo frontespizio e quietanze, mentre le condizioni sono richiamate per codice ed edizione e vanno recuperate altrove. \[OPINIONE, A5\] Il numero di polizza non è stabile: manca nei capitolati fino all'emissione e in coassicurazione ce n'è più d'uno. \[FATTO, A5\] |
| Già sul mercato | Portali di upload e classificazione documentale (IDP) sono prodotti maturi. \[OPINIONE, A2\] IAssicurGPT carica polizze e quietanze dai PDF delle compagnie nel gestionale IAssicur. \[FATTO, A1\] |
| Tech Boost | Classica: portale, email e PEC dedicate; impronta hash, deduplica, originale immutabile; checklist di completezza per tipo di cliente. \[OPINIONE, bozza 2.1; A7 4.3\] Avanzata: classificazione del tipo di documento; segnalazione dei documenti mancanti; lettura di codice ed edizione delle condizioni e recupero del testo da una libreria versionata. \[OPINIONE, A1, A2, A5\] |
| Gate umano e rischio | L'esperto conferma l'inventario; revisione a campione della classificazione e di tutti i casi a bassa confidenza. \[OPINIONE, A2; A7 gate H1\] Rischio medio: un documento mancante non visto rende incompleta l'analisi. Prima di ogni chiamata a un modello i dati personali vanno mascherati. \[FATTO, Context v3\] |
| Beneficio | Alto. Si misura in ore per fascicolo, quota di documenti classificati correttamente e numero di documenti mancanti scoperti. \[OPINIONE\] |

Un punto della bozza va rivisto. La bozza (2.1) propone un portale clienti e, "con il tempo", benchmark di machine learning costruiti sui dati anonimizzati dei clienti. Riusare i documenti dei clienti per costruire un dataset è un trattamento nuovo, con un titolare e una base giuridica propri, e pseudonimizzare non equivale ad anonimizzare. **\[FATTO, A3; Context v3\]** L'architettura deve quindi separare dal primo giorno i dati dei clienti da un archivio di apprendimento alimentato solo da output anonimizzati.

### P03 Risk assessment

| Voce | Contenuto |
| --- | --- |
| Cosa | Costruire il profilo di rischio: esposizioni, valori assicurabili, attività, sedi, contratti. \[FATTO, A1\] |
| Chi | Tecnico o risk engineer del broker, account. \[FATTO, A1\] |
| Perché | Prima di ogni contratto il distributore deve acquisire **richieste ed esigenze** del cliente (art. 119-ter, c. 1, CAP) e agire nel suo miglior interesse (art. 119-bis). \[FATTO, A3\] |
| Quando | Alla presa in carico, ai rinnovi importanti, quando l'azienda cambia. \[OPINIONE, bozza 2.1\] Per un cliente corporate complesso 1-5 giorni/uomo \[STIMA, A1\]; 3-8 settimane di calendario \[STIMA, A4\]. |
| Dati e documenti | Questionari spesso compilati a mano, bilanci, visure, inventari, schede degli impianti, statistiche dei sinistri passati. I bilanci depositati in formato XBRL e le visure sono le sorgenti più automatizzabili. \[FATTO, A7 mod. 1\] |
| Dove si rompe | Competenza tecnica scarsa e costosa, dati operativi non strutturati. Gli errori tipici sono la **sottoassicurazione** (valori non aggiornati, con riduzione dell'indennizzo per la regola proporzionale dell'art. 1907 c.c.) e le esposizioni contrattuali ignorate. \[FATTO, A1 e A5\] |
| Già sul mercato | Poco per il mercato italiano; maturità da demo o pilota. \[OPINIONE, A1 e A2\] CRIF descrive il risk assessment delle PMI come oneroso e lungo. \[FATTO, A9, fonte CRIF 2021\] |
| Tech Boost | Classica: bilanci e visure via API; questionario per tipo di attività costruito come dato nativo e non come modulo da trascrivere; classificazione del cliente secondo le quattro definizioni di PMI e le soglie dei grandi rischi, ramo per ramo. \[FATTO per le API, A7; OPINIONE, A9; requisito del Volume 0, cap. 0.7\] Avanzata: precompilazione dei questionari; confronto tra valori assicurati e immobilizzazioni di bilancio come segnale di sottoassicurazione. \[OPINIONE\] |
| Gate umano e rischio | Esperto obbligatorio, con intervista o sopralluogo. Rischio alto: un'esposizione sottostimata porta a una raccomandazione inadeguata. \[OPINIONE, A2\] |
| Beneficio | Medio: la macchina prepara, la persona valuta. \[OPINIONE, A2\] |

### P04 Mappatura dei rischi e gap analysis

| Voce | Contenuto |
| --- | --- |
| Cosa | Una matrice rischio-copertura che mostra lacune, sovrapposizioni, sottoassicurazioni e clausole svantaggiose, con le priorità. \[FATTO, A1; bozza 2.1\] |
| Chi | Tecnico o account senior. \[FATTO, A1\] |
| Perché | È il valore consulenziale del broker e il presupposto del piazzamento. È anche, per la lettura prevalente, consulenza o atto preparatorio, quindi distribuzione assicurativa riservata agli iscritti al RUI, anche se gratuita. \[INTERPRETABILE, A3\] |
| Quando | Dopo P02 e P03. Per il corporate 1-3 giorni/uomo \[STIMA, A1\]; Vantel dichiara 5 minuti invece di 5 ore per confrontare cinque polizze da 100 pagine. \[Marketing del fornitore, A1\] |
| Dati e documenti | Le clausole estratte, ciascuna con il suo rango: dattiloscritto prevale sul prestampato (art. 1342 c.c.), condizioni particolari sulle generali, appendice più recente sulla precedente. Le regole di precedenza dichiarate nel contratto vanno lette documento per documento. \[FATTO, A5 mod. 3\] |
| Dove si rompe | Lettura clausola per clausola e nessuna tassonomia comune; esclusioni o franchigie non rilevate; doppie coperture. \[FATTO, A1\] Le trappole ricorrenti: massimale per sinistro contro aggregato annuo, franchigia contro scoperto, condizioni particolari contro generali. \[OPINIONE, bozza 2.1\] |
| Già sul mercato | FurtherAI e Vantel negli Stati Uniti, Navisio in Italia, con dichiarazioni di accuratezza non verificate. \[FATTO sul prodotto; dichiarazioni di marketing, A1 e A2\] Per A1 il confronto polizza contro polizza è ormai una commodity, quello polizza contro rischio reale no. \[OPINIONE, A1\] |
| Tech Boost | Classica: tassonomia delle coperture (cap. 1.8) e regole che calcolano i gap noti, per esempio un sottolimite superiore al massimale o un bene senza partita; motore di precedenza configurabile. \[OPINIONE, A2 e A5\] Avanzata: un LLM scrive la bozza, ma ogni frase è legata a un campo e alla sua citazione verificata; il confronto con altri prodotti usa solo una libreria curata di testi leciti. \[OPINIONE, A2\] |
| Gate umano e rischio | L'esperto valida ogni affermazione con la sua fonte. Rischio massimo: un gap omesso è responsabilità professionale. Nessuna raccomandazione raggiunge un cliente reale senza l'approvazione registrata di un soggetto abilitato. \[FATTO, Context v3; OPINIONE, A2\] |
| Beneficio | Alto per valore, ma in Fase 1 solo dimostrabile su documenti sintetici, pubblici o anonimizzati. Metriche: affermazioni senza fonte (obiettivo zero), minuti di revisione, gap trovati rispetto a quelli trovati dall'esperto. \[FATTO, Context v3\] |

La bozza (2.1) presenta questo processo come "prodotto d'ingresso" e prevede un motore RAG che confronta il programma con "le condizioni di mercato". Entrambe le cose vanno ridimensionate. L'audit con raccomandazioni non è più il prodotto d'ingresso per default (D14), e un confronto può dichiarare solo il perimetro di compagnie e prodotti realmente considerati, con la data. **\[FATTO, indice; A3\]**

### Come cambia per una PMI

In una piccola impresa non c'è un risk manager: decidono il titolare e il responsabile amministrativo, che di assicurazioni sanno poco. **\[OPINIONE, Volume 0\]** Il broker deve ricostruire i dati, non riceverli. In compenso i prodotti sono quasi sempre multirischi a pacchetto con un **set informativo** pubblico (DIP, DIP aggiuntivo, condizioni con glossario), mentre la parte meno standard è la **scheda di polizza**, con somme, massimali e franchigie del cliente, spesso conservata come scansione firmata. **\[FATTO, A9; OPINIONE, A9 sulla scansione\]** Sotto le soglie dei grandi rischi l'informativa vale per intero: più documenti obbligatori, ma tutti ripetitivi. **\[OPINIONE, A9\]**

L'esempio di Alfa mostra la sequenza. Il titolare consegna sette frontespizi e le ultime quietanze. Il broker riconosce prodotto ed edizione delle condizioni di multirischi, RCT/RCO e tutela legale e scarica i set informativi dai siti delle compagnie; RC prodotti e merci trasportate sono su quotazione e il testo va chiesto. Il confronto tra bilancio e somme assicurate segnala un macchinario acquistato e non incluso; la lettura delle condizioni mostra un massimale RCT basso rispetto ai contratti con i clienti, due garanzie pagate due volte e l'assenza di una copertura informatica. **\[Ipotesi dell'esempio, come nel Volume 0\]** Due controlli sono propri della PMI. Il primo è la conformità Cat Nat dei beni soggetti all'obbligo. Il secondo è la classificazione per ramo: Alfa non supera nessuna soglia dei grandi rischi, ma la polizza merci trasportate è ramo 7 e quindi grande rischio comunque. **\[STIMA: applicazione della definizione, Volume 0, cap. 0.7\]**

Il modello di A9 attribuisce a un cliente micro circa 3,5 ore l'anno per polizza, di cui 0,9 per acquisizione e piazzamento ammortizzati e 0,5 per compliance e documenti. **\[STIMA, A9, ipotesi del report\]** Non scompone le ore di raccolta e analisi: è la prima misura da fare nello studio dei tempi.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Ore reali di P02, P03 e P04 per un cliente PMI | Sono la base della misura della leva | Studio dei tempi con due broker PMI |
| Se le PMI firmano un incarico formale o lavorano su rapporti informali | Cambia il primo documento del flusso | Titolare di un broker PMI |
| Quali documenti consegna davvero il cliente PMI e in che formato (quota di scansioni e foto) | Dimensiona OCR e recupero delle condizioni | Back office di un broker, su un campione |
| Liceità di una libreria versionata dei set informativi | Le note legali di alcune compagnie limitano la riproduzione | Avvocato IP |
| Quali gap ricorrono nelle PMI per settore | Serve a scrivere le regole di gap analysis | Tecnico di un broker PMI; underwriter PMI di una compagnia |
| Confine tra analisi interna e consulenza verso un cliente test | Decide che cosa si può mostrare a un'azienda vera in Fase 1 | Avvocato di distribuzione assicurativa |

## 1.2 Andare sul mercato

**In sintesi.** La seconda famiglia porta il rischio del cliente alle compagnie e torna con una polizza. Comprende l'accesso al mercato (P05), la richiesta di quotazione e la negoziazione (P06), il confronto con la proposta (P07), la consulenza con i documenti precontrattuali (P08), l'emissione con la verifica del testo (P09). In Italia non esiste uno standard di richiesta di quotazione: si lavora con questionari proprietari, email e portali. Il confronto è il punto di maggior valore e di maggior rischio legale, perché si può dichiarare solo il perimetro realmente consultato. La verifica del testo emesso è invece il caso con il miglior rapporto tra beneficio e rischio regolatorio, perché non produce raccomandazioni al cliente. Per una PMI il mercato è spesso un catalogo di prodotti con set informativi pubblici, raggiunto in parte tramite agenzie.

### P05 Rapporti con compagnie, MGA e wholesaler

| Voce | Contenuto |
| --- | --- |
| Cosa | Costruire e tenere aggiornato l'accesso al mercato: accordi con le compagnie, accordi di incasso ex art. 118, collaborazioni con agenzie, wholesaler e MGA. Il risultato è l'elenco dei mercati accessibili per ramo e settore. \[FATTO, A1\] |
| Chi | Titolare, direzione tecnica o placement. \[FATTO, A1\] |
| Perché | Decide che cosa il broker può proporre e quindi che cosa può dichiarare nel confronto. L'elenco delle compagnie con cui ha rapporti, e di quelle con accordo ex art. 118, va dato al cliente nell'informativa e tenuto aggiornato. \[FATTO, A1 e A4; FAQ IVASS 1.11\] |
| Quando | Continuativo. |
| Dati e documenti | Lettere di collaborazione con le compagnie; accordi di **collaborazione orizzontale** con agenzie, ammessi solo tra iscritti nelle sezioni A, B e D, per iscritto, con informativa al cliente e comunicazione alle compagnie (art. 42 Reg. IVASS 40/2018); accordi con wholesaler, che IVASS inquadra nella stessa disciplina (FAQ 6.1). \[FATTO, A3\] Il RUI è pubblicato in open data con aggiornamento mensile e serve a verificare le controparti. \[FATTO, A7\] |
| Dove si rompe | I broker piccoli hanno poco accesso diretto e dipendono da agenzie e wholesaler; si propongono mercati non realmente accessibili. \[FATTO, A1\] Gli accordi possono essere personali o avere clausole di cambio di controllo. \[OPINIONE, A8\] |
| Già sul mercato | Nessuno strumento dedicato; nessuno standard. \[OPINIONE, A1 e A2\] |
| Tech Boost | Classica: un registro versionato degli accordi (compagnia, ramo, canale diretto o tramite agenzia, accordo ex art. 118 sì o no, aliquote, date) che alimenta l'informativa, il regime di incasso di ogni titolo e il catalogo dei mercati del confronto. \[OPINIONE\] Avanzata: abbinamento tra rischio e propensione assuntiva delle compagnie; richiede uno storico che oggi non c'è. \[OPINIONE, A8 3.1\] |
| Gate umano e rischio | Il responsabile della distribuzione approva il catalogo. Rischio medio: un mercato dichiarato e non accessibile rende fuorviante il confronto. \[OPINIONE\] |
| Beneficio | Basso in ore, alto come dato che abilita P07, P10 e la due diligence di P22. \[OPINIONE\] |

### P06 Richiesta di quotazione (submission) e negoziazione

| Voce | Contenuto |
| --- | --- |
| Cosa | Preparare il fascicolo di rischio, la **submission**, inviarlo a compagnie, MGA o wholesaler, raccogliere le **quotazioni** e negoziarle. \[FATTO, A1; bozza 2.2\] |
| Chi | Account o placement; back office per invii e solleciti; dal lato compagnia l'**underwriter**. \[FATTO, A1\] |
| Perché | È la fase in cui nasce il ricavo. I dati devono essere identici per tutte le controparti, perché una dichiarazione inesatta del rischio (artt. 1892-1893 c.c.) può costare l'indennizzo. \[FATTO per le norme, A4; OPINIONE, bozza 2.2\] |
| Quando | Avvio 90-120 giorni prima della scadenza per il corporate. \[STIMA, A4\] Nello specialty londinese la media è di 2-4 settimane \[FATTO, A1, comunicato Marsh\]; nel corporate italiano 2-6 settimane. \[STIMA, A1\] Molti contratti scadono il 31 dicembre o il 30 giugno; nessun dato pubblico quantifica il picco. \[OPINIONE, bozza; FATTO, A8: lacuna\] |
| Dati e documenti | Scheda di rischio, questionari della compagnia, statistica dei sinistri (**loss run**); da 3 a 10 controparti che rispondono in PDF, email, portale o Excel; quotazioni che scadono e sono subordinate a condizioni (subjectivities). \[STIMA e OPINIONE, bozza 2.2\] |
| Dove si rompe | Un questionario diverso per ogni compagnia, con gli stessi dati riscritti ogni volta; solleciti via email; submission incomplete che allungano i tempi; dati trascritti male. \[FATTO, A1 e A4\] AIBA Digital copre quietanze e contabilità, non le quotazioni. \[FATTO, A1\] |
| Già sul mercato | Intake delle submission lato compagnia negli Stati Uniti e nel Regno Unito (FurtherAI, Cytora); Harper dichiara instradamento delle richieste e solleciti automatici; Marsh e Aon hanno piattaforme interne di piazzamento con approvazione del broker su ogni proposta. \[FATTO sui prodotti; risultati dichiarati, A1\] |
| Tech Boost | Classica: uno schema di rischio per ramo da cui si generano tutte le richieste; flusso a stati (bozza, inviata, in quotazione, offerta, negoziazione, emessa) con le scadenze di validità. \[OPINIONE, bozza 2.2\] La bozza propone di renderlo "compatibile con ACORD": A7 suggerisce di usare ACORD solo come vocabolario di riferimento, perché non è adottato in Italia e la licenza è a pagamento. \[FATTO, A7\] Avanzata: compilazione dei questionari delle singole compagnie a partire dallo schema; automazione dei portali solo dove i termini d'uso lo consentono. \[OPINIONE, A7 ostacolo 6\] |
| Gate umano e rischio | L'esperto rilegge tutto ciò che esce; negoziazione e firma restano umane. Rischio alto: una dichiarazione inesatta del rischio. \[OPINIONE, A2; bozza 2.2\] |
| Beneficio | Medio, rimandabile: A1 colloca l'automazione delle submission verso compagnie senza API in una fase successiva. \[OPINIONE, A1\] |

### P07 Confronto delle offerte e proposta

| Voce | Contenuto |
| --- | --- |
| Cosa | Un prospetto che rende confrontabili le offerte e una raccomandazione motivata al cliente. Decide il cliente. \[FATTO, A1; Volume 0\] |
| Chi | Account e tecnico. \[FATTO, A1\] |
| Perché | Se c'è consulenza serve una **raccomandazione personalizzata** motivata (art. 119-ter, c. 3, CAP). La consulenza "fondata su un'analisi imparziale" richiede un numero sufficiente di contratti del mercato (c. 4), che IVASS non quantifica. \[FATTO, A3\] |
| Quando | Per una gara multi-ramo corporate 0,5-2 giorni di lavoro \[STIMA, A1\]; 1-2 settimane di calendario. \[STIMA, A4\] |
| Dati e documenti | Quotazioni eterogenee in PDF ed email; tabelle di limiti con strutture diverse da compagnia a compagnia. \[FATTO, A1; OPINIONE, A2\] |
| Dove si rompe | Normalizzare franchigie, sottolimiti e clausole; confronti "a premio" che ignorano differenze di garanzia; confronto "con tutto il mercato" non supportato. \[FATTO, A1 e A4\] |
| Già sul mercato | Comparatori nel retail; poco nel corporate, a livello di pilota. \[OPINIONE, A2\] |
| Tech Boost | Classica: normalizzazione di ogni limite su un oggetto unico (garanzia, tipo, valore, unità, base, relazione con il massimale) e regole che segnalano i peggioramenti nascosti, come una nuova esclusione o una franchigia più alta a parità di premio. \[OPINIONE, A5 mod. 2; bozza 2.2\] Avanzata: un LLM porta ogni offerta nello schema con la fonte di ogni cella e scrive la bozza della lettera di raccomandazione, legata ai campi. \[OPINIONE, A2; bozza 2.2\] |
| Gate umano e rischio | L'esperto valida il prospetto e firma la raccomandazione. Rischio alto: un confronto fuorviante viola l'art. 119-ter e le regole sulla pubblicità tra imprese (D.Lgs. 145/2007). \[OPINIONE, A2\] |
| Beneficio | Alto. Metriche: celle con fonte verificata, differenze trovate rispetto all'esperto, minuti di revisione. \[OPINIONE\] |

Il confronto deve sempre dichiarare il suo perimetro. A3 propone formule concrete: da evitare "confronto con tutto il mercato", "migliore polizza disponibile", "analisi indipendente"; sostenibile "confronto con le soluzioni delle compagnie con cui il distributore ha rapporti, elencate nell'informativa". **\[OPINIONE, A3\]** Il Volume 3 ne fa un capitolo ("Cosa il prodotto non dice").

### P08 Consulenza e documentazione precontrattuale

| Voce | Contenuto |
| --- | --- |
| Cosa | L'informativa sul distributore, sui conflitti di interesse e sui compensi (Allegati 3, 4 e 4-ter del Reg. IVASS 40/2018), la consegna del set informativo del prodotto, la valutazione di **coerenza** con richieste ed esigenze, la registrazione della consulenza. \[FATTO, A1 e A3\] |
| Chi | Account e compliance. \[FATTO, A1\] |
| Perché | IDD e CAP: il set informativo va consegnato prima della firma (Reg. IVASS 41/2018), su carta o, con il consenso del cliente, su supporto durevole (art. 120-quater CAP, FAQ IVASS 1.22). La registrazione delle telefonate serve solo se la vendita è interamente a distanza (FAQ 1.20). \[FATTO, A1 e A3\] |
| Quando | Per ogni contratto; 1-3 ore se il processo è standardizzato. \[STIMA, A1\] |
| Dati e documenti | Moduli dell'intermediario; DIP e DIP aggiuntivo della compagnia; questionario delle esigenze. La modulistica è stata rivista dal Provv. IVASS 147/2024 e nei documenti dei broker del 2025 compare il Modulo unico precontrattuale (MUP); data di efficacia e contenuto definitivo vanno verificati. \[FATTO, A2 e A5; lacuna, A2\] |
| Dove si rompe | Moduli ripetitivi, firme, motivazione generica o non tracciata, consegna tardiva o mancante. \[FATTO, A1\] |
| Già sul mercato | I gestionali generano la modulistica; motivazioni scritte da un LLM solo a livello di demo. \[OPINIONE, A2\] |
| Tech Boost | Classica: documenti generati dai dati di iscrizione e dalla tabella dei compensi; tracciatura della consegna con data, versione e impronta del documento; firma elettronica. \[OPINIONE, A9 requisito R2\] Avanzata: bozza della motivazione che cita le esigenze registrate e le alternative confrontate. \[OPINIONE, A3\] |
| Gate umano e rischio | Firma del soggetto abilitato. Rischio alto: violazione delle regole IDD. \[OPINIONE, A2\] |
| Beneficio | Medio-alto nel corporate, alto nella PMI, dove l'informativa piena si ripete per ogni contratto. \[OPINIONE, A9\] |

### P09 Emissione e verifica della polizza

| Voce | Contenuto |
| --- | --- |
| Cosa | La compagnia, l'agenzia o l'MGA emette la polizza; il broker controlla che corrisponda a quanto negoziato. \[FATTO, A1\] |
| Chi | Back office del broker; compagnia o agenzia. \[FATTO, A1\] |
| Perché | Il testo emesso può differire da quello negoziato, con clausole mancanti o dati anagrafici errati. \[FATTO, A1 e A4\] |
| Quando | Emissione 1-6 settimane dopo l'effetto per il corporate \[STIMA, A4\]; 1-2 ore di verifica. \[STIMA, A1\] |
| Dati e documenti | Polizza in PDF; per Lloyd's un certificato con il codice UMR, formato a sé. \[FATTO, A4\] |
| Dove si rompe | Emissione affidata a terzi, testi non conformi, errori anagrafici. \[FATTO, A1\] |
| Già sul mercato | FurtherAI confronta quotato ed emesso negli Stati Uniti e dichiara controlli 20 volte più rapidi. \[Dichiarato, A2\] |
| Tech Boost | Classica: confronto campo per campo tra offerta accettata e polizza; controllo della catena netto, accessori, imponibile, imposta, lordo, che rivela da solo un importo estratto male. \[OPINIONE, A4\] Avanzata: confronto semantico delle clausole con la citazione di entrambe le versioni. \[OPINIONE, A2\] |
| Gate umano e rischio | L'esperto valuta le differenze segnalate. Rischio alto se una difformità non viene vista; nessuna raccomandazione verso il cliente. \[OPINIONE\] |
| Beneficio | Medio. È uno dei casi d'uso a minor rischio regolatorio: A4 lo indica come secondo caso d'uso, A8 tra i processi ad alto volume e bassa responsabilità. \[OPINIONE, A4 e A8\] |

### Come cambia per una PMI

Per una PMI il piazzamento è spesso il confronto tra prodotti a catalogo già esistenti, non un capitolato scritto dal broker, e l'emissione può essere immediata sul portale della compagnia o dell'agenzia. **\[OPINIONE, Volume 0\]** A9 stima che nelle PMI i broker diretti pesino il 7-10% dei premi non auto e i broker tramite agenzia il 10-15%. **\[STIMA, A9, da validare\]** Un'infrastruttura per broker PMI deve quindi leggere anche i prodotti standard delle agenzie, non solo i testi negoziati del corporate. **\[OPINIONE, A9\]**

Al rinnovo di Alfa il broker conferma multirischi e RCT/RCO con la Compagnia A, chiede tre quotazioni per la RC prodotti e rinnova merci trasportate e infortuni tramite l'Agenzia X, che gli trasmette condizioni e premi. **\[Ipotesi dell'esempio\]** Il prospetto di confronto della RC prodotti deve elencare le tre compagnie interpellate e la data. Per sette polizze servono sette set informativi e un'informativa precontrattuale coerente. La polizza merci trasportate, grande rischio per ramo, potrebbe godere delle deroghe informative previste dalla IDD; il loro recepimento nel CAP e nei regolamenti IVASS va verificato. **\[FATTO, A3 e A4: lacuna\]**

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Quante compagnie un broker PMI interpella per ramo e quante offerte riceve | Dimensiona P06 e P07 | Titolare di un broker PMI |
| Quota di polizze PMI emesse su portale e quota con documenti negoziati | Decide quanto pesa la verifica dell'emesso | Back office di un broker PMI |
| Quanto spesso il testo emesso differisce da quello concordato | Misura il valore di P09 | Campione di polizze di un broker |
| Stato e data di efficacia del MUP | Cambia i modelli da generare | Compliance officer di un broker |
| Recepimento delle deroghe per i grandi rischi | Decide quali documenti servono per polizze come le merci trasportate | Avvocato regolamentare |
| Questionari delle compagnie sui rami PMI e loro variabilità | Serve allo schema di rischio unico | Underwriter PMI; agente plurimandatario |

## 1.3 Gestire il portafoglio

**In sintesi.** Dopo l'emissione la polizza vive per anni e genera di continuo documenti e denaro. Questa famiglia comprende lo scadenzario con i rinnovi (P12), le variazioni con le appendici (P13), le regolazioni del premio (P11), le cauzioni e i certificati (P19), la coassicurazione e i programmi di gruppo (P20). È il lavoro ad altissimo volume e basso valore unitario del back office, ed è qui che il costo di servizio cresce con il numero di polizze. Il problema tecnico centrale non è leggere un documento ma collegarlo: un'appendice alla versione giusta della polizza, una regolazione al suo titolo, una quota alla sua compagnia. Per l'abbinamento appendice-polizza e per i programmi con più compagnie non risultano prodotti con risultati pubblici. In una PMI coassicurazione e programmi sono rari, mentre libro matricola, regolazioni RCT/RCO e rinnovi taciti pesano molto.

### P12 Scadenzario e rinnovi

| Voce | Contenuto |
| --- | --- |
| Cosa | Presidiare scadenze e termini di disdetta, aggiornare i dati di rischio prima di ogni rinnovo, chiedere e verificare le condizioni, decidere se confermare, rinegoziare o tornare sul mercato. \[FATTO, A1; bozza 2.3\] |
| Chi | Il back office prepara le pratiche; l'account decide. \[OPINIONE, bozza 2.3\] |
| Perché | I rinnovi sono il motore del valore: la provvigione si ripete senza nuovo costo di acquisizione. Un rinnovo dimenticato lascia il cliente scoperto, con responsabilità del broker. \[OPINIONE, bozza 1.3 e 2.3\] |
| Quando | Ciclo annuale lavorato per finestre, per esempio a 120, 90, 60 e 30 giorni dalla scadenza. \[OPINIONE, bozza 2.3\] Per il corporate il rinnovo parte 90-120 giorni prima \[STIMA, A1\]; la **disdetta**, la comunicazione di non rinnovo, va inviata con un preavviso di 30-90 giorni, di norma via PEC. \[STIMA, A4\] |
| Dati e documenti | Effetto e scadenza, **tacito rinnovo** (proroga automatica in assenza di disdetta), frazionamento, preavviso, indicizzazioni; statistica dei sinistri; proposta di rinnovo. Sono dati strutturati che nascono da documenti non strutturati. \[OPINIONE, bozza 2.3\] |
| Dove si rompe | Picchi di scadenze al 1° gennaio e al 30 giugno; dati di rischio da riaggiornare; rinnovo tacito non voluto; disdetta oltre il termine. \[FATTO, A1\] La data inserita a mano invece che derivata dal contratto. \[OPINIONE, bozza 2.3\] |
| Già sul mercato | I gestionali gestiscono lo scadenzario: prodotto maturo. \[OPINIONE, A2\] |
| Tech Boost | Classica: da ogni polizza si generano scadenze e attività con promemoria e soglie di escalation; disdetta via PEC, la cui busta con ricevute XML è strutturata e ha valore di prova; eventi societari (nuova sede, nuovi amministratori) dal Registro imprese. \[OPINIONE, bozza 2.3; FATTO sulla PEC, A7\] Avanzata: un LLM confronta l'offerta di rinnovo con la polizza in scadenza e segnala le variazioni peggiorative con la pagina. \[OPINIONE, bozza 2.3\] La bozza propone anche un modello di abbandono e un motore di "prossima azione" che suggerisce coperture: il primo richiede uno storico che non c'è, il secondo produce raccomandazioni e passa dal gate abilitato. \[OPINIONE\] |
| Gate umano e rischio | Doppio controllo delle date estratte; approvazione dell'account sulla decisione di rinnovo. Rischio alto: scopertura per mancato rinnovo o disdetta tardiva. \[OPINIONE, A2\] |
| Beneficio | Medio, ma quasi gratuito una volta estratte le date: A1 nota che i dati di un'analisi di polizze danno lo scadenzario come sottoprodotto. Metrica: rinnovi chiusi senza intervento manuale. \[OPINIONE, A1; bozza 3.4\] |

La bozza calcola che 1.000 clienti con 8 polizze generano circa 8.000 scadenze l'anno, una trentina per giorno lavorativo. **\[STIMA, bozza 2.3\]** Per un micro-broker con 1.500-4.000 polizze, come nel profilo tipo di A9, sono 6-16 scadenze al giorno su 250 giorni lavorativi, prima di contare i titoli dei frazionamenti. **\[STIMA: profilo di A9, da validare, diviso per 250\]**

### P13 Variazioni e appendici

| Voce | Contenuto |
| --- | --- |
| Cosa | Emettere e registrare le **appendici**, i documenti che modificano la polizza in corso d'anno: un bene, un veicolo, una sede in più, una somma diversa. Ogni appendice può generare un titolo a debito o a rimborso. \[FATTO, A1 e A4\] |
| Chi | Back office del broker, compagnia o agenzia. \[FATTO, A1\] |
| Perché | Una variazione non comunicata è una scopertura. \[FATTO, A1\] |
| Quando | Continuo; da giorni a settimane per ogni variazione. \[STIMA, A1\] |
| Dati e documenti | Appendice di 1-3 pagine con riferimento alla polizza, numero, data di effetto, testo e premio, in PDF o scansione. ANIA sconsiglia le appendici che incidono trasversalmente sul contratto e suggerisce di riemettere la scheda. \[FATTO, A5\] |
| Dove si rompe | Scambi di email ripetuti; appendice non collegata al titolo o alla polizza madre. \[FATTO, A1 e A4\] Conta la data di effetto, non quella di emissione. \[OPINIONE, A5\] |
| Già sul mercato | Nessun prodotto verificato per l'abbinamento appendice-polizza madre in Italia. \[FATTO, A2: assenza di evidenze\] |
| Tech Boost | Classica: chiavi di abbinamento deterministiche (numero di polizza, compagnia, contraente, date) su un identificativo interno di "contratto logico", perché il numero di polizza non basta; catena delle versioni; elenco degli "orfani" non abbinati. \[OPINIONE, A2 e A5\] Avanzata: classificazione dell'effetto dell'appendice; trasformazione di una richiesta in linguaggio libero ("abbiamo aperto un magazzino") in una bozza di appendice da approvare. \[OPINIONE, A2; bozza 2.3\] |
| Gate umano e rischio | L'esperto conferma ogni abbinamento non univoco. Rischio alto: un programma ricostruito con variazioni attribuite alla polizza sbagliata. \[OPINIONE, A2; A7 gate H2\] |
| Beneficio | Alto e difendibile, perché nessuno dichiara di farlo. Metriche: abbinamenti corretti, numero di orfani. \[OPINIONE, A2\] |

### P11 Regolazioni del premio

| Voce | Contenuto |
| --- | --- |
| Cosa | Alcune polizze si pagano con un premio provvisorio calcolato su un parametro stimato (retribuzioni, fatturato, chilometri, merci); a fine annualità il cliente dichiara il valore effettivo e si fa il conguaglio. È tipica della RCT/RCO. \[FATTO, A4\] |
| Chi | Il cliente dichiara; il broker raccoglie e controlla; la compagnia calcola ed emette. \[FATTO, A1\] |
| Perché | Una dichiarazione tardiva può sospendere la garanzia; una base di calcolo errata sbaglia il premio. \[FATTO, A1\] |
| Quando | 60-90 giorni dopo l'annualità, da verificare su ogni testo \[STIMA, A4\]; per un libro matricola un capitolato pubblico prevede la regolazione entro 120 giorni. \[FATTO, A5\] Per il corporate 2-6 ore per polizza l'anno. \[STIMA, A1\] |
| Dati e documenti | Dichiarazioni del cliente su Excel; clausola di regolazione con parametro, termine e tasso; appendice di regolazione con il titolo di conguaglio. Termini e penali cambiano da testo a testo e non sono mai stati raccolti in modo sistematico. \[FATTO, A4: lacuna\] |
| Dove si rompe | Dati da chiedere al cliente; scadenze contrattuali diverse per ogni polizza. \[FATTO, A1\] |
| Già sul mercato | I gestionali calcolano il conguaglio; nessun prodotto dedicato all'intero processo. \[FATTO, A1\] |
| Tech Boost | Classica: la clausola estratta alimenta lo scadenzario; calcolo deterministico; con il consenso del cliente, precompilazione di retribuzioni e fatturato da fatturazione elettronica o contabilità. \[OPINIONE, bozza 2.3\] La fattura elettronica in formato FatturaPA è una delle sorgenti più stabili. \[FATTO, A7\] Avanzata: lettura delle clausole di regolazione e controllo di coerenza dei valori dichiarati con il bilancio. \[OPINIONE\] |
| Gate umano e rischio | Verifica del calcolo; firma del cliente sulla dichiarazione. Rischio medio-alto: premio errato o garanzia sospesa. \[OPINIONE, A2\] |
| Beneficio | Basso per un primo prodotto, rilevante nel consolidamento, dove si ereditano molte regolazioni aperte. \[OPINIONE, A1 e A2\] |

### P19 Cauzioni e certificati di copertura

| Voce | Contenuto |
| --- | --- |
| Cosa | Polizze fideiussorie, cioè garanzie verso terzi per gare, appalti e dogane, e certificati che provano una copertura. \[FATTO, A1\] |
| Chi | Account e compagnia specializzata in cauzioni. \[FATTO, A1\] |
| Perché | Un certificato non conforme al bando può costare la gara al cliente. \[FATTO, A1\] |
| Quando | Giorni, spesso con urgenza. \[STIMA, A1\] |
| Dati e documenti | Negli appalti pubblici si usano gli schemi tipo del DM 193/2022 con schede tecniche; la somma garantita è indicata nella scheda; più garanti possono rilasciare la garanzia insieme. \[FATTO, A5\] Campi candidati: beneficiario, obbligato, garanti, CIG, somma, riduzioni, durata e svincolo, rinunce del garante. \[OPINIONE, A5\] |
| Dove si rompe | Istruttoria sul fido del cliente; urgenza delle gare. \[FATTO, A1\] |
| Già sul mercato | Portali delle compagnie di cauzioni. \[OPINIONE, A2\] |
| Tech Boost | Classica: generazione dalla scheda tecnica; scadenzario degli svincoli. Avanzata: lettura dei requisiti di garanzia dal bando e confronto con la bozza. \[OPINIONE\] |
| Gate umano e rischio | Firma; rischio alto di certificato errato. \[OPINIONE, A2\] |
| Beneficio | Le fonti divergono. A5 considera le cauzioni il ramo più standardizzato e quindi il miglior primo banco di prova dell'estrazione; A2 ne giudica basso il ritorno come primo prodotto. \[OPINIONE, A2 e A5\] Le due letture sono compatibili: è un buon terreno di collaudo per il caso d'uso "dal documento al dato", non un processo da cui partire per misurare la leva. \[OPINIONE\] |

### P20 Coassicurazione e programmi di gruppo

| Voce | Contenuto |
| --- | --- |
| Cosa | Dividere un rischio tra più compagnie per quote (**coassicurazione**) con una **delegataria** che gestisce il contratto; coordinare le polizze di più società di un gruppo e, all'estero, polizze locali sotto un programma comune. \[FATTO, A1 e A4\] |
| Chi | Placement; network estero per i programmi internazionali. \[FATTO, A1\] |
| Perché | Ogni coassicuratrice paga solo la sua quota, senza solidarietà, salvo patto contrario (art. 1911 c.c.); dal riparto derivano premi, provvigioni e indennizzi per quota. \[FATTO, A4\] |
| Quando | Al collocamento e a ogni variazione. |
| Dati e documenti | Il **riparto** delle quote e la clausola di delega. I contratti usano almeno tre varianti: pro quota senza vincolo solidale, delegataria che risponde per l'intero, responsabilità in solido di tutte le sottoscrittrici. In coassicurazione esistono più numeri di polizza. \[FATTO, A5\] |
| Dove si rompe | Quote sotto il 100% alla data di effetto; disallineamenti tra polizza principale e polizze locali. \[FATTO, A1 e A4\] |
| Già sul mercato | Nessun prodotto per il mercato medio verificato. \[FATTO, A2: assenza di evidenze\] |
| Tech Boost | Classica: un'entità riparto con il controllo che le quote sommino al 100% e un campo che registra la variante di responsabilità. Avanzata: estrazione di riparto e delega dal documento. \[OPINIONE, A4 e A5\] |
| Gate umano e rischio | Esperto. Rischio alto: un programma di gruppo frainteso. \[OPINIONE, A2\] |
| Beneficio | Alto nel corporate, limitato nella PMI; il modello dati deve comunque prevederlo. \[OPINIONE\] |

### Come cambia per una PMI

Il portafoglio di una PMI ha meno complessità per polizza e più ripetizione. Coassicurazione e programmi internazionali sono probabilmente rari. **\[OPINIONE, Volume 0\]** Pesano invece il libro matricola della flotta, la regolazione della RCT/RCO sulle retribuzioni, le appendici per nuovi beni e il controllo Cat Nat a ogni variazione dei beni. Nei capitolati pubblici il libro matricola segue regole precise: il premio si calcola "in ragione di 1/360 per ogni giornata" di garanzia e un veicolo si esclude solo per vendita, furto, distruzione, demolizione o esportazione. **\[FATTO, A5\]** Quanto queste regole valgano anche nei prodotti PMI va verificato.

L'anno di Alfa mostra il volume. A ottobre il rinnovo della multirischi con l'aumento delle somme per un nuovo macchinario; a novembre la disdetta via PEC della vecchia tutela legale; a febbraio la regolazione della RCT/RCO sulle retribuzioni effettive, con un titolo di conguaglio; ad aprile l'appendice per il nuovo magazzino, che va anche verificata rispetto all'obbligo Cat Nat; durante l'anno l'inclusione di un sesto furgone nel libro matricola. **\[Ipotesi dell'esempio, Volume 0, cap. 0.6\]** Con l'ipotesi di A9 per un cliente micro, 1,5 ore l'anno per polizza tra rinnovo e amministrazione, le sette polizze di Alfa valgono circa 10 ore. **\[STIMA: 7 × 1,5 ore; ipotesi di A9 da validare\]**

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Quota di polizze PMI con tacito rinnovo, frazionamento e regolazione | Determina quante scadenze e quanti titoli genera un portafoglio | Back office di un broker PMI; campione di polizze |
| Concentrazione delle scadenze PMI su poche date | Dimensiona i picchi e la capacità | Gestionale di un broker PMI |
| Termini e penali di regolazione nei prodotti più diffusi | Servono a scadenzari affidabili | Underwriter RC; set informativi |
| Regole del libro matricola nei prodotti flotte PMI | Decidono il calcolo dei titoli a ogni inclusione | Agente plurimandatario; underwriter auto |
| Accuratezza dell'abbinamento appendice-polizza su documenti italiani | Nessun benchmark pubblico | Golden set, Fase 1 |
| Quante PMI del target hanno cauzioni o certificati ricorrenti | Decide il peso di P19 | Broker PMI; compagnia cauzioni |

## 1.4 I sinistri

**In sintesi.** Il sinistro è il momento in cui il cliente giudica il broker, ed è un processo con stati, non un evento. Il broker aiuta a denunciare entro i termini, verifica che la copertura operi, raccoglie i documenti, segue perito e liquidatore, controlla l'indennizzo. Assistere nei sinistri è attività di distribuzione, quindi regolata. I documenti sono i più eterogenei del mestiere (descrizioni libere, foto, perizie, fatture) e spesso contengono dati sanitari; lo stato della pratica è visibile solo sul portale della compagnia. La tecnologia aiuta soprattutto a non perdere termini e documenti e a collegare la pratica alla polizza e ai titoli; la decisione sulla copertura e le comunicazioni negative restano a una persona. Come primo caso d'uso il ritorno è basso; nel consolidamento pesa, perché le pratiche aperte si ereditano.

### P14 Gestione dei sinistri

| Voce | Contenuto |
| --- | --- |
| Cosa | Assistere il cliente dal fatto alla liquidazione: raccogliere la denuncia, verificare la copertura (polizza in vigore, premio pagato, garanzia, massimale, franchigia, esclusioni), raccogliere i documenti, inoltrare la pratica, seguire perito e liquidatore, negoziare e controllare l'indennizzo. \[OPINIONE, bozza 2.4; FATTO, A1\] |
| Chi | Ufficio sinistri del broker; l'account sui casi rilevanti o contestati. Dal lato compagnia il **liquidatore** istruisce la pratica e il **perito** quantifica il danno, senza decidere la copertura. \[FATTO, A1 e A4\] |
| Perché | L'assistenza nei sinistri rientra nella distribuzione assicurativa (FAQ IVASS 1.1). \[FATTO, A1\] La sinistrosità del cliente pesa su prezzi, rinnovi e incentivi delle compagnie. \[OPINIONE, bozza 2.4\] |
| Quando | Guidato dagli eventi. L'avviso alla compagnia va dato entro tre giorni dal fatto o da quando se ne ha conoscenza, salvo deroghe (art. 1913 c.c.). Una pratica dura da settimane ad anni, soprattutto nella responsabilità civile. \[FATTO, A4; STIMA, A1\] |
| Dati e documenti | Descrizioni libere, foto e video, perizie, email, fatture, verbali; ogni compagnia ha un portale e una numerazione di pratica propri. Nei rami infortuni e malattia e nei sinistri con lesioni ci sono dati sanitari, protetti in modo rafforzato (art. 9 GDPR). \[OPINIONE, bozza 2.4; FATTO, A3\] Le statistiche dei sinistri delle compagnie non seguono uno standard e si ottengono su richiesta. \[OPINIONE, A7\] |
| Dove si rompe | Denuncia tardiva; raccolta dei documenti; contenzioso; mancata attivazione di coperture concorrenti su altre polizze. \[FATTO, A1\] Lo stato della pratica è visibile solo sul portale della compagnia. \[FATTO, A4\] Si perde il filo delle pratiche lunghe. \[OPINIONE, bozza 2.4\] |
| Già sul mercato | I gestionali per broker hanno un modulo sinistri. \[FATTO, A1 tab. 2\] Lato compagnia FurtherAI dichiara il 90% di automazione dell'intake dei sinistri. \[Dichiarato, A2\] |
| Tech Boost | Classica: pratica collegata alla polizza strutturata e ai suoi titoli; denuncia da più canali che apre subito la pratica; regole deterministiche (contratto in vigore alla data dell'evento, premio pagato, garanzia prevista, franchigia applicabile); checklist documentale per tipo di sinistro; promemoria sui termini. \[OPINIONE, bozza 2.4\] Avanzata: un LLM estrae data, luogo, causa e danni dalla descrizione, prepara per il gestore una prima analisi di copertura con gli articoli citati, sintetizza perizie e carteggi. \[OPINIONE, bozza 2.4\] La bozza aggiunge visione artificiale contro le frodi e modelli di gravità: la prima è un compito della compagnia più che del broker, i secondi richiedono dati che oggi non ci sono. \[OPINIONE\] |
| Gate umano e rischio | La decisione sulla copertura e la comunicazione di un esito negativo restano a una persona; l'analisi automatica non è mai presentata al cliente come decisione. Dati sanitari esclusi o oscurati prima di ogni chiamata a un modello. Rischio alto. \[OPINIONE, bozza 2.4; FATTO, Context v3\] |
| Beneficio | Basso come primo prodotto, rilevante nel consolidamento. \[OPINIONE, A1 e A2\] Metriche: tempo di apertura della denuncia, termini rispettati, pratiche senza documenti mancanti. \[OPINIONE, bozza 3.4\] |

### Le fasi di una pratica

La scheda nasconde una sequenza in cui ogni passaggio ha un documento, un dato critico e un controllo possibile.

| Fase | Documento | Dato critico | Controllo automatizzabile |
| --- | --- | --- | --- |
| Fatto e denuncia | Denuncia, foto, descrizione | Data del fatto o della conoscenza | Allarme sul termine dei tre giorni (art. 1913 c.c.) |
| Verifica della copertura | Polizza, appendici, titoli | Polizza in vigore alla data; titolo pagato | La garanzia è sospesa dal quindicesimo giorno dopo la scadenza di un premio non pagato (art. 1901 c.c.): lo stato del titolo decide |
| Istruttoria | Perizia, fatture, preventivi | Importo del danno | Completezza della checklist per tipo di sinistro |
| Calcolo | Condizioni e scheda | Franchigia, scoperto, massimale, somma assicurata | Applicazione deterministica dei limiti; segnale di sottoassicurazione |
| Liquidazione | Atto di liquidazione | Importo accettato | Confronto tra importo atteso e liquidato |
| Pagamento | Movimento sul conto separato | Indennizzo da girare al cliente | Riconciliazione (cap. 1.5) |
| Rivalsa | Corrispondenza | Responsabile del danno | La compagnia che ha pagato può rivalersi sul responsabile (art. 1916 c.c.) |

**\[FATTO, A4, per le norme; OPINIONE per la colonna dei controlli\]** Due termini da non confondere: l'**indennizzo** ripaga danni propri, il **risarcimento** paga danni a terzi. **\[FATTO, A4\]**

### Come cambia per una PMI

A9 ipotizza per un cliente micro una frequenza di un sinistro ogni dieci polizze l'anno e sei ore di lavoro per sinistro, cioè 0,6 ore per polizza l'anno. **\[STIMA, A9, da validare\]** Su questa base le sette polizze di Alfa generano in media 0,7 sinistri e circa 4 ore l'anno. **\[STIMA: applicazione delle ipotesi di A9\]** Il dato medio nasconde la distribuzione: pochi sinistri grandi assorbono la maggior parte del tempo. **\[OPINIONE\]**

L'incendio della pressa di Alfa, a giugno, mostra perché la pratica dipende dagli altri processi. **\[Ipotesi dell'esempio\]** La denuncia deve partire entro tre giorni. La multirischi è della Compagnia A, con accordo di incasso: se Alfa ha pagato al broker la rata di gennaio, è coperta anche se la rimessa è arrivata tardi alla compagnia. Il perito stima 80.000 euro di danno. Se la pressa fosse stata acquistata dopo l'ultimo aggiornamento delle somme, la regola proporzionale potrebbe ridurre l'indennizzo: con 1,0 milioni assicurati su 1,2 milioni di valore reale, l'indennizzo scende a circa 66.700 euro, e uno scoperto del 10% con minimo di 2.500 euro lo porta a circa 60.000. **\[STIMA: calcolo illustrativo; ordine e base di applicazione di proporzionale e scoperto dipendono dal testo\]** È il gap che P03 e P04 dovevano trovare prima: l'esempio collega la qualità dell'analisi iniziale al denaro che il cliente riceve.

Nelle PMI i dati sanitari compaiono spesso: la polizza infortuni del titolare, i sinistri RCO con dipendenti feriti, la RC prodotti con lesioni a terzi. **\[OPINIONE, A3 e A9\]** Le ditte individuali e i professionisti sono persone fisiche, quindi anche i loro dati aziendali sono dati personali. **\[FATTO, A9\]**

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Frequenza e durata reali dei sinistri nelle PMI, per ramo | Pesano sul costo di servizio e sulla capacità | Ufficio sinistri di un broker PMI; statistiche di compagnia |
| Quanta parte del lavoro è del broker e quanta dell'agenzia, quando il rischio passa da un'agenzia | Cambia chi tiene la pratica | Agente plurimandatario; broker PMI |
| Formati delle statistiche sinistri delle compagnie per i prodotti PMI | Decidono se l'acquisizione si automatizza | Back office di un broker |
| Accesso ai portali sinistri delle compagnie e loro termini d'uso | Senza accesso lo stato resta manuale | Responsabile sinistri di una compagnia |
| Base giuridica per trattare dati sanitari nei sinistri | Decide che cosa può entrare nel sistema | Avvocato privacy |

## 1.5 Il denaro

**In sintesi.** Il broker maneggia denaro di terzi: incassa i premi su un conto separato, li gira alle compagnie, riceve le provvigioni al netto di una ritenuta e le divide con chi lo ha aiutato. Questa famiglia comprende l'incasso con la contabilità (P10) e la riconciliazione delle provvigioni (P16). La difficoltà non è il calcolo ma riconoscere che righe di sistemi diversi (un titolo della compagnia, un bonifico, una riga di estratto conto) descrivono lo stesso fatto. Il primo oggetto da governare è quindi il **titolo**, la singola rata con il suo stato di incasso, di rimessa e il suo regime di incasso. È il caso d'uso "dal dato al denaro" del Context v3: basso rischio regolatorio, formati bancari stabili, valore anche per il consolidamento. Nelle PMI servite tramite agenzia il broker vede la contabilità solo filtrata dall'agenzia.

### P10 Incasso dei premi e contabilità

| Voce | Contenuto |
| --- | --- |
| Cosa | Emettere avvisi e consegnare quietanze, incassare i premi sul **conto separato**, rimetterli alle compagnie, tenere la prima nota, quadrare titoli, incassi e rimesse. \[FATTO, A1; bozza 2.6\] |
| Chi | Amministrazione; il back office abbina i movimenti alle polizze; l'account sollecita i clienti morosi. \[OPINIONE, bozza 2.6\] |
| Perché | I premi incassati sono un patrimonio autonomo (art. 117 CAP). Chi opera per più compagnie deve avere "procedure idonee" ad attribuire le somme a ciascuna compagnia e a ciascun assicurato e versare sul conto separato non oltre dieci giorni (art. 63 Reg. IVASS 40/2018). \[FATTO, A7, testo in Gazzetta Ufficiale\] Il pagamento al broker libera il cliente solo con un accordo ex art. 118; senza premio pagato la garanzia è sospesa dopo quindici giorni (art. 1901 c.c.). \[FATTO, A4\] |
| Quando | Incassi quotidiani; riconciliazione con le compagnie mensile. \[FATTO, A1; bozza 2.6\] |
| Dati e documenti | Avviso di scadenza e quietanza della compagnia, in PDF o come flusso (AIBA Digital dove attivo); movimenti del conto separato in file CBI "RH", MT940 o camt.053; estratti conto delle compagnie in Excel, PDF o tracciati proprietari. Alcune compagnie trasmettono le "partite non tecniche" come documento e non come dato. \[FATTO, A4 e A7\] |
| Dove si rompe | Bonifici cumulativi che pagano più titoli; quietanze ridigitate; stati non sincronizzati tra broker e compagnia; causali libere nei bonifici; rimesse tardive; titoli non abbinati. \[FATTO, A1, A4 e A7\] A4 indica gli estratti conto come "il cuore del dolore". \[OPINIONE, A4\] |
| Già sul mercato | I gestionali gestiscono contabilità, quadratura di cassa ed estratti conto, con connettori compagnia per compagnia: Assieasy dichiara 30 flussi di caricamento dalle compagnie, IAssicur usa AIBA Digital, il tracciato SHARE e tracciati proprietari. \[FATTO, A1 e A7, dichiarazioni dei fornitori\] Il manuale di Assieasy chiede comunque un controllo manuale di "allineamento foglio cassa compagnia" anche sui flussi automatici. \[FATTO, A7\] Nessuno dichiara una riconciliazione automatica tra sorgenti diverse. \[FATTO, A7: assenza di evidenze\] |
| Tech Boost | Classica: modello dati costruito sul titolo, con stato di incasso e rimessa e regime di incasso letto dal registro degli accordi (P05); import dei file bancari; abbinamento per chiavi esatte (numero di polizza, importo, data) e coda delle eccezioni; controllo automatico dei dieci giorni; controllo della catena netto, imponibile, imposta, lordo. \[OPINIONE, A4, A7; bozza 2.6\] Avanzata: lettura degli estratti conto non standard; abbinamento approssimato con un grado di confidenza; segnalazione di righe mancanti e duplicati. \[OPINIONE, bozza 2.6\] |
| Gate umano e rischio | Ogni eccezione contabile va a una persona; i pagamenti richiedono separazione tra chi dispone e chi approva. Rischio alto, finanziario. \[OPINIONE, A7 gate H3; bozza 2.6\] |
| Beneficio | Alto. Metrica: eccezioni di riconciliazione per 100 titoli; chiusura mensile in ore anziché in giorni. \[OPINIONE, A7; bozza 2.6\] A4 lo indica come primo caso d'uso. \[OPINIONE, A4\] |

Due correzioni rispetto alla bozza e al Volume 0. La bozza dà per scontato l'Open Banking per leggere i movimenti giornalieri. CBI Globe, il gateway delle banche italiane per le interfacce PSD2, prevede però un'adesione facoltativa delle banche, e nessuna fonte conferma che il conto separato sia sempre raggiungibile via API. **\[FATTO, A7: lacuna\]** Il file CBI resta la sorgente certa. Il Volume 0 riportava il termine dei dieci giorni come dato da fonte secondaria; A7 lo cita dal testo dell'art. 63 in Gazzetta Ufficiale, e qui si considera confermato.

### P16 Rendicontazione e riconciliazione delle provvigioni

| Voce | Contenuto |
| --- | --- |
| Cosa | Verificare che le provvigioni maturate su ogni titolo siano state riconosciute e pagate, e ripartirle tra il broker, i collaboratori di sezione E e, nella catena con un'agenzia, la **retrocessione** che l'agenzia gira al broker. \[FATTO, A1 e A4\] |
| Chi | Amministrazione. \[FATTO, A1\] |
| Perché | Le provvigioni non pagate o sbagliate sono una perdita silenziosa frequente quando le compagnie sono molte. In un'acquisizione la riconciliazione dice se il portafoglio dichiarato è quello effettivo. \[OPINIONE, bozza 2.6\] I compensi vanno dichiarati nell'informativa. \[FATTO, A1\] |
| Quando | Mensile; gli incentivi delle compagnie a fine anno. \[FATTO, A1; bozza 2.6\] |
| Dati e documenti | Estratti conto e rendiconti provvigionali; accordi di retrocessione; contratti con i collaboratori. La provvigione si calcola sul premio netto; le compagnie la pagano al netto di una ritenuta d'acconto del 23% sul 50% dell'importo, cioè l'11,5% effettivo, senza IVA. \[FATTO, A4\] |
| Dove si rompe | Formati eterogenei; ripartizioni su più livelli; errori di ripartizione; provvigioni non incassate. \[FATTO, A1\] Il cliente vede solo il primo livello della catena. \[FATTO, A4\] Se la ritenuta non è modellata, ogni pagamento della compagnia sembra un errore. \[OPINIONE, Volume 0\] |
| Già sul mercato | I gestionali coprono il singolo livello; la riconciliazione su più livelli resta poco servita. \[OPINIONE, A1\] |
| Tech Boost | Classica: aliquote per compagnia, ramo e canale prese dal registro degli accordi; provvigione attesa contro provvigione incassata, con la ritenuta; ripartizione per collaboratore. Avanzata: confronto tra aliquote applicate e pattuite, preparazione della richiesta di chiarimento alla compagnia. \[OPINIONE, bozza 2.6\] La bozza propone anche un simulatore degli incentivi delle compagnie: il loro peso in Italia non è noto, quindi resta un'ipotesi. \[FATTO, A8: lacuna\] |
| Gate umano e rischio | La contabilità approva; ogni richiesta alla compagnia esce firmata da una persona. Rischio medio, finanziario. \[OPINIONE, A2\] |
| Beneficio | Medio in un broker singolo, alto nel consolidamento, dove si sommano catene di retrocessione diverse. \[OPINIONE, A1 e A2\] |

Sulla ritenuta resta un conflitto di fonti: la Circolare 7/E del 2024 fa decorrere il nuovo regime dal 1° aprile 2024, FiscoOggi dal 1° gennaio 2024; prevale la Circolare. **\[FATTO, A4: conflitto di fonti\]** Come si applica quando il broker rimette i premi al netto della provvigione non è chiarito. **\[Lacuna, da verificare con un commercialista\]**

### Un mese di Alfa, dal bonifico all'estratto conto

A gennaio Alfa paga in un solo bonifico la prima rata semestrale delle sette polizze. **\[Ipotesi dell'esempio\]** Lo stesso bonifico deve essere spezzato su sette titoli, quattro compagnie, tre controparti contabili e tre regimi di incasso.

| Controparte | Polizze | Regime di incasso | Documento con cui il denaro torna |
| --- | --- | --- | --- |
| Compagnia A | Multirischi, RCT/RCO | Liberatorio | Estratto conto della compagnia |
| Compagnia B | Flotta, RC prodotti | Non liberatorio: Alfa è coperta solo quando paga la compagnia | Estratto conto della compagnia |
| Agenzia X per le Compagnie C e D | Merci trasportate, infortuni, tutela legale | Liberatorio solo se le compagnie hanno ratificato l'accordo con l'agenzia | Rendiconto dell'agenzia con la retrocessione |

**\[Ipotesi dell'esempio; regole, FATTO, A4\]** Sulle due polizze della Compagnia A la provvigione annua attesa è di circa 3.650 euro; al netto della ritenuta dell'11,5% ne arrivano circa 3.230. **\[STIMA: aliquote centrali di A9 sui premi di Alfa, con la semplificazione D25 che le applica all'imponibile\]** Un sistema che non conosce la ritenuta segnala 420 euro di errore; uno che non conosce il regime della Compagnia B non sa che, se la rimessa tarda, Alfa è scoperta.

### Come cambia per una PMI

Quando il rischio passa da un'agenzia, il broker non vede in modo diretto la contabilità della compagnia: la riceve filtrata, insieme alla retrocessione. **\[OPINIONE, Volume 0\]** A9 ipotizza che al broker arrivino circa due terzi della provvigione e che, con questi numeri, le micro-imprese servite tramite agenzia restino in perdita anche con il 60% di ore in meno. **\[STIMA, A9\]** La leva sul denaro funziona quindi soprattutto sui portafogli con accordi diretti con le compagnie. **\[OPINIONE, A9\]**

In Italia gli interessi sui premi in transito sono con ogni probabilità marginali, perché i premi stanno su un conto separato e vanno versati in pochi giorni. **\[OPINIONE, A8\]** In alternativa al conto separato il broker può prestare una fideiussione pari al 4% dei premi incassati, con un minimo su cui le fonti divergono: 18.750, 19.510 o 23.480 euro, il più recente probabilmente vigente. **\[FATTO, A3, A4 e A8: conflitto di fonti; D23\]**

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Raggiungibilità dei conti separati via API bancarie | Decide se il lato banca è automatico o a file | Esperto di open banking; amministrativo di un broker |
| Formati reali degli estratti conto delle compagnie e delle agenzie per i rami PMI | Nessuna fonte pubblica | Back office di un broker PMI |
| Quanti broker PMI hanno accordi ex art. 118 e con quante compagnie | Determina il regime di ogni titolo | Amministrativo di un broker PMI |
| Percentuali di retrocessione negli accordi con le agenzie | Decidono il ricavo per cliente | Agente plurimandatario; titolare di un micro-broker |
| Ritenuta con rimessa al netto della provvigione | Regola di riconciliazione | Commercialista di intermediari |
| Quota di provvigioni non riconosciute o errate | È il valore economico di P16 | Riconciliazione su un portafoglio reale, sotto accordo |

## 1.6 Conformità e archivio

**In sintesi.** Questa famiglia rende legittimo tutto il resto: gli adempimenti verso IVASS, i clienti e il Garante (P17), l'archivio dei documenti (P18) e la reportistica al cliente (P15). Sono molti adempimenti piccoli e ripetitivi, che crescono con il numero di clienti. Il punto di contatto con la tecnologia è diretto: un sistema che registra chi ha controllato che cosa, con la fonte di ogni dato, produce già gran parte delle prove che la vigilanza chiede. L'archivio deve seguire regole di conservazione diverse per i documenti di distribuzione e per gli artefatti tecnici. Per una PMI sotto le soglie dei grandi rischi gli obblighi valgono per intero e si ripetono contratto per contratto; molte norme pensate per i grandi operatori, come DORA, non si applicano.

### P17 Compliance

| Voce | Contenuto |
| --- | --- |
| Cosa | Tenere registri, policy, formazione, gestione dei reclami, governo del prodotto, privacy e, dove serve, antiriciclaggio. \[FATTO, A1\] |
| Chi | Il responsabile dell'attività di distribuzione e la funzione compliance o il DPO; la direzione ha la responsabilità finale. \[FATTO, A1; bozza 2.5\] |
| Perché | È la licenza di operare: le irregolarità portano sanzioni, sospensioni e danni reputazionali; le compagnie la verificano prima di firmare accordi; in un'acquisizione un archivio ordinato riduce lo sconto sul prezzo. \[OPINIONE, bozza 2.5\] Dei 700 reclami trattati da IVASS verso intermediari, 368 riguardano broker. \[FATTO, A8\] |
| Quando | Continuativo, con un calendario annuale di scadenze. \[OPINIONE, bozza 2.5\] |
| Dati e documenti | Registri, questionari di richieste ed esigenze, attestati di formazione, reclami, registro dei trattamenti, valutazioni d'impatto. \[FATTO, A1 e A3\] |
| Dove si rompe | Adempimenti molti e piccoli; formazione non tracciata; reclami fuori termine. \[FATTO, A1\] |
| Già sul mercato | Registri e formazione sono prodotti diffusi. \[OPINIONE, A2\] In Francia EDIconformité raccoglie la documentazione di conformità dei broker una sola volta per tutte le compagnie, con oltre 2.400 broker nel 2023; un equivalente italiano non è stato trovato. \[FATTO, A7\] |
| Tech Boost | Classica: calendario di compliance; registro dei consensi e log immutabile; questionario delle esigenze come dato collegato a ogni raccomandazione; classificazione per ramo rispetto ai grandi rischi; campo "mercato di riferimento" per prodotto con controllo di coerenza. \[OPINIONE, bozza 2.5; A3; A9\] Avanzata: controllo di coerenza tra documenti e dichiarazioni (denominazioni, scadenze, poteri di firma); avviso quando cambia un regolamento IVASS. \[OPINIONE, bozza 2.5\] |
| Gate umano e rischio | Il responsabile compliance approva; ogni avviso normativo automatico va letto da una persona prima di cambiare un controllo. Rischio alto: sanzioni. \[OPINIONE, A2\] |
| Beneficio | Medio in ore, alto come prova: il registro della validazione campo per campo è insieme un requisito di prodotto e un documento di conformità. \[FATTO, Context v3; OPINIONE\] |

Gli obblighi che pesano davvero sono pochi e si possono elencare. La tabella li riprende da A1 e A3 e li traduce in che cosa il sistema deve fare.

| Obbligo | Regola | Che cosa deve fare il sistema | Stato |
| --- | --- | --- | --- |
| Formazione degli addetti | 30 ore annue per i non accessori (art. 89 Reg. IVASS 40/2018) | Registro della formazione per persona | Certo \[FATTO, A1\] |
| Governo del prodotto | Il distributore individua il mercato di riferimento effettivo e non vende al mercato negativo indicato dalla compagnia (Reg. IVASS 45/2020; FAQ 1.24-1.25) | Campo per prodotto e controllo cliente-prodotto | Certo \[FATTO, A3\] |
| Reclami | Il broker risponde entro 45 giorni; per i reclami sui collaboratori chiede loro la documentazione entro 15 giorni (Reg. ISVAP 24/2008 modificato) | Fascicolo esportabile e scadenzario dei reclami | Da verificare \[A3\] |
| Antiriciclaggio | Gli obblighi amministrativi riguardano i rami vita (D.Lgs. 231/2007; Reg. IVASS 44/2019) | Escludere il vita o trattarlo in sola lettura | Certo secondo A3 |
| Resilienza digitale (DORA) | Non si applica agli intermediari che sono PMI | Restano gli obblighi GDPR sui fornitori | Certo \[FATTO, A3, pagina IVASS\] |
| Registro dei trattamenti | Dovuto anche sotto i 250 dipendenti per trattamenti non occasionali | Registro tenuto dal sistema | Certo \[FATTO, A3\] |
| Valutazione d'impatto privacy | Probabile con tecnologie innovative e possibili dati sanitari (art. 35 GDPR) | DPIA prima dei dati reali | Interpretabile \[A3\] |
| AI Act | Alfabetizzazione del personale; trasparenza verso chi interagisce con un'IA; nessun alto rischio per i danni alle imprese | Scheda interna del sistema; formazione dei validatori; nessun chatbot verso il cliente in Fase 1 | Interpretabile \[A3\] |

La verifica dell'identità del cliente resta comunque richiesta dalle compagnie, e le sanzioni internazionali valgono per tutti. **\[OPINIONE, bozza 2.5\]** La bozza dedica molto spazio a riconoscimento facciale e scoring antiriciclaggio: per un broker danni sono strumenti sovradimensionati rispetto agli obblighi. **\[OPINIONE, A3\]**

### P18 Back office e archiviazione

| Voce | Contenuto |
| --- | --- |
| Cosa | Un archivio ordinato, completo e accessibile di tutti i documenti del rapporto. \[FATTO, A1\] |
| Chi | Back office. \[FATTO, A1\] |
| Perché | I distributori conservano la documentazione per la durata del rapporto e almeno cinque anni dopo, in modo ordinato e tale da garantirne sicurezza, integrità, riservatezza e accesso tempestivo (art. 67 Reg. IVASS 40/2018). Se il contratto non si conclude il termine decorre dall'ultima comunicazione (FAQ 1.21); la conservazione presso terzi è ammessa. \[FATTO, A3\] |
| Quando | Continuativo. |
| Dati e documenti | Tutti quelli delle altre famiglie; documenti duplicati tra email e gestionale. \[FATTO, A1\] |
| Dove si rompe | Un documento non reperibile durante un'ispezione. \[FATTO, A1\] Quali prodotti della macchina siano "documentazione" da conservare non è chiarito. \[DA VERIFICARE, A3\] |
| Già sul mercato | Sistemi documentali e classificazione automatica sono maturi; AIBA ha una convenzione per la gestione documentale dei soci. \[OPINIONE, A2; FATTO, A7\] |
| Tech Boost | Classica: originale immutabile con impronta hash; conservazione a doppio binario, con il fascicolo di distribuzione (originali, informativa, esigenze, raccomandazione firmata, registro di validazione) per durata del rapporto più cinque anni e gli artefatti tecnici intermedi cancellati a breve; cancellazione verificabile anche presso i fornitori; esportazione del fascicolo per IVASS e reclami. \[FATTO, Context v3; OPINIONE, A3\] Le copie di documenti di mercato acquisite per analisi seguono un terzo regime: si conservano "solo per il tempo necessario" (art. 70-quater L. 633/1941). \[FATTO, A2\] Avanzata: classificazione e ricerca nell'archivio. \[OPINIONE\] |
| Gate umano e rischio | Controllo a campione. Rischio medio: perdita o violazione di riservatezza. \[OPINIONE, A2\] |
| Beneficio | Alto come prerequisito di tutti gli altri processi. \[OPINIONE, A2\] |

### P15 Reportistica al cliente

| Voce | Contenuto |
| --- | --- |
| Cosa | Il report annuale o il cruscotto con polizze, premi, scadenze e sinistri del cliente. \[FATTO, A1\] |
| Chi | Account. \[FATTO, A1\] |
| Perché | Servizio e fidelizzazione del cliente. \[OPINIONE\] |
| Quando | Per il corporate 0,5-2 giorni per cliente l'anno. \[STIMA, A1\] |
| Dati e documenti | Dati sparsi tra gestionale ed Excel; la mappa del programma è ricostruita a mano ogni anno. \[FATTO, A1 e A4\] |
| Dove si rompe | Report non riconciliati con la contabilità. \[FATTO, A1\] |
| Già sul mercato | Strumenti di business intelligence e modelli di report. \[OPINIONE, A2\] |
| Tech Boost | Classica: report generato dallo stesso modello dati riconciliato degli altri processi. Avanzata: sintesi in linguaggio naturale in cui ogni numero rimanda alla sua fonte. \[OPINIONE\] |
| Gate umano e rischio | Rilettura. Se il report contiene raccomandazioni diventa consulenza e passa dal gate abilitato. \[OPINIONE, A3\] |
| Beneficio | Medio, quasi un sottoprodotto. \[OPINIONE, A1\] |

### Come cambia per una PMI

Sotto le soglie dei grandi rischi l'informativa, la coerenza e il governo del prodotto si applicano per intero, contratto per contratto. **\[FATTO, A3 e A9\]** Nelle PMI i prodotti sono quasi sempre a catalogo, quindi il controllo del mercato di riferimento definito dalla compagnia diventa un controllo frequente e automatizzabile. Se il broker personalizza molto un prodotto, si avvicina al ruolo di co-produttore: è un punto da verificare. **\[OPINIONE, A9\]** Le ditte individuali e i professionisti sono persone fisiche, e il loro fascicolo è interamente fatto di dati personali. **\[FATTO, A9\]**

A9 attribuisce alla compliance e ai documenti di un cliente micro mezz'ora l'anno per polizza: per Alfa circa 3,5 ore. **\[STIMA: 7 × 0,5 ore; ipotesi di A9\]** Il fascicolo di Alfa da conservare per durata del rapporto più cinque anni comprende l'incarico, l'informativa precontrattuale, il questionario delle esigenze, i set informativi consegnati con la prova della consegna, le raccomandazioni firmate e il registro di validazione. Due controlli sono propri del cliente: la classificazione per ramo rispetto ai grandi rischi, perché la polizza merci trasportate ha un regime diverso dalle altre, e la conformità Cat Nat, perché un'impresa non assicurata ne risponde nell'accesso ai contributi pubblici. **\[STIMA: applicazione delle regole all'esempio; FATTO, A9, fonte MIMIT\]**

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Quali artefatti tecnici sono documentazione da conservare | Decide la politica di conservazione | Avvocato di distribuzione; compliance di un broker |
| Ore reali di compliance per contratto in un broker PMI | La stima di A9 è un'ipotesi | Responsabile compliance di un broker PMI |
| Recepimento delle deroghe per i grandi rischi e testo vigente sui reclami | Cambiano moduli e scadenze | Avvocato regolamentare |
| Confine tra personalizzazione del prodotto e co-produzione ai fini POG | Pesa sul servizio PMI | Avvocato di distribuzione; compliance di una compagnia |
| Esistenza di iniziative italiane di compliance mutualizzata come EDIconformité | Possibile partner o concorrente | AIBA; ACB |

## 1.7 Rete e crescita

**In sintesi.** Gli ultimi due processi non riguardano la singola polizza ma la struttura del broker: la gestione della rete di collaboratori e delle collaborazioni con altri intermediari (P21) e la due diligence con migrazione di un portafoglio acquisito (P22). Il primo è un adempimento continuo; il secondo è il ponte verso il terzo passo della tesi, il consolidamento. Integrare un broker significa integrare denaro e contratti prima ancora che dati: conti separati, accordi di incasso compagnia per compagnia, collaboratori, incarichi dei clienti. La tecnologia può rendere più rapide la valutazione e la migrazione, ma non risolve i nodi giuridici, che le fonti pubbliche lasciano in gran parte aperti, né trattiene le persone. Per i micro-broker PMI la qualità dei dati è bassa e la concorrenza tra acquirenti è già arrivata.

### P21 Gestione della rete

| Voce | Contenuto |
| --- | --- |
| Cosa | Iscrivere, gestire e cancellare i collaboratori di sezione E; firmare e comunicare le collaborazioni orizzontali; seguire l'onboarding di nuove persone. \[FATTO, A1\] |
| Chi | Il responsabile dell'attività di distribuzione. \[FATTO, A1\] |
| Perché | Il broker risponde dell'attività dei collaboratori di sezione E (art. 119, c. 3, CAP). Le collaborazioni orizzontali sono ammesse solo tra iscritti nelle sezioni A, B e D, con accordo scritto, informativa al cliente e comunicazione alle compagnie (art. 42 Reg. IVASS 40/2018). Una società iscritta in E non può operare tramite un'altra società (FAQ IVASS 4.1). \[FATTO, A3\] |
| Quando | Settimane per ogni iscrizione o variazione. \[STIMA, A1\] |
| Dati e documenti | Contratti con i collaboratori, requisiti, comunicazioni al RUI, aliquote di retrocessione. Il RUI pubblica in open data, con aggiornamento mensile, intermediari, mandati, cariche e collaboratori. \[FATTO, A1 e A7\] |
| Dove si rompe | Collaboratore operativo prima dell'iscrizione; reti informali e clienti "del collaboratore". \[FATTO, A1; OPINIONE, A8\] |
| Già sul mercato | Gestionali e consultazione del RUI. \[OPINIONE, A2\] |
| Tech Boost | Classica: anagrafica della rete con lo stato di iscrizione verificato ogni mese sul RUI; contratti e aliquote; collegamento tra polizze e collaboratore, che alimenta le retrocessioni di P16. Avanzata: poco da aggiungere. \[OPINIONE\] |
| Gate umano e rischio | Il responsabile approva ogni iscrizione e ogni accordo. Rischio medio. \[OPINIONE, A2\] |
| Beneficio | Basso per un broker singolo, centrale nel consolidamento, quando i collaboratori del broker acquisito entrano nella rete. \[OPINIONE, A1\] |

Il processo qui descritto riguarda la rete del broker cliente della tecnologia. Le analisi di A1 e A3 sull'iscrizione dei fondatori come collaboratori di un broker ospitante sono sospese e non vincolano il volume. **\[FATTO, D09\]**

### P22 Due diligence e migrazione di portafoglio

| Voce | Contenuto |
| --- | --- |
| Cosa | Valutare il portafoglio di un broker da acquisire e trasferirlo: dal gestionale o dagli Excel del venditore a un portafoglio migrato, con incarichi riconfermati. \[FATTO, A1\] |
| Chi | Chi segue l'operazione (M&A) e l'amministrazione; un advisor e un legale. \[FATTO, A1\] |
| Perché | Per il Context v3 il consolidamento è il terzo passo: la tecnologia rende integrabili portafogli e processi eterogenei. \[FATTO, Context v3\] A8 la indica come "macchina di integrazione e due diligence"; tra due piccoli broker acquisiti dalla stessa piattaforma i margini andavano da circa il 5% a circa il 48%. \[OPINIONE e FATTO, A8\] |
| Quando | 1-3 mesi per acquisizione. \[STIMA, A1\] |
| Dati e documenti | Gestionale proprietario o Excel; incarichi dei clienti; accordi con le compagnie; conto separato o fideiussione; accordi ex art. 118; collaboratori; titoli in stati diversi (incassati, non rimessi, sospesi). \[FATTO, A1; OPINIONE, A4\] |
| Dove si rompe | Dati sporchi e formati proprietari; scadenze o incassi persi durante la migrazione. \[FATTO, A1\] Accordi di incasso da volturare o rinegoziare e conti separati da quadrare alla data del closing. \[OPINIONE, A4\] Clausole di cambio di controllo negli accordi con le compagnie. \[OPINIONE, A8\] Incarichi da riconfermare o cedere con il consenso del cliente e cessione dei dati personali: le fonti pubbliche non risolvono il punto. \[DA VERIFICARE, A3\] |
| Già sul mercato | Progetti su misura, nessun prodotto. \[OPINIONE, A2\] |
| Tech Boost | Classica: importazione e migrazione trattate come funzione del prodotto, con mappatura sul modello dati canonico; riconciliazione dei titoli aperti alla data del closing. \[FATTO, Context v3; OPINIONE, A4\] Kit di due diligence: concentrazione dei clienti, scadenze, accordi e provvigioni per compagnia, retrocessioni, qualità dei dati su un campione di documenti. \[OPINIONE, A8\] Avanzata: estrazione dagli archivi documentali del venditore; stima del costo di migrazione a partire da un campione. \[OPINIONE, A8\] |
| Gate umano e rischio | Campionamento statistico e revisione dell'esperto. Rischio alto: una valutazione sbagliata del portafoglio si paga nel prezzo. \[OPINIONE, A2\] |
| Beneficio | Alto nel consolidamento, perché riusa la pipeline costruita per gli altri processi. \[OPINIONE, A2\] |

Che cosa rende integrabile un broker piccolo (dipendenza dal titolare, concentrazione dei clienti, qualità dei dati, accordi, collaboratori, compliance, producer) è descritto nel Volume 0, cap. 0.8; il Volume 5 ne farà un kit operativo. Qui conta un punto di processo: la due diligence legge le stesse sorgenti dei capitoli 1.1-1.6, ma tutte insieme, su un portafoglio che non si conosce, in poche settimane.

### Come cambia per una PMI

I target naturali di un broker PMI sono micro-broker. A9 ne propone un profilo tipo: uno o due soci, due-cinque addetti, 600-1.500 clienti, 1.500-4.000 polizze, una quota rilevante di auto, parte del portafoglio piazzato tramite agenzie, dati divisi tra gestionale, Excel ed email, forte dipendenza dal titolare. **\[OPINIONE e STIMA, A9, da validare con un titolare\]** A9 suggerisce di guardare per primi i micro-broker con almeno il 60% di non auto PMI e accordi diretti con le compagnie, e di escludere i portafogli che dipendono dalla retrocessione. **\[OPINIONE, A9\]** La concorrenza esiste già: Wopta, un'MGA, ha acquisito nel 2026 due micro-broker lombardi. **\[FATTO, A9, comunicato della società\]**

Se il broker di Alfa venisse acquisito, migrerebbero sette polizze con quattro compagnie e tre regimi di incasso, la collaborazione con l'Agenzia X da comunicare di nuovo alle compagnie, l'incarico di Alfa da riconfermare e i titoli aperti, con la rata di luglio in corso. **\[Ipotesi dell'esempio\]** Moltiplicato per 600-1.500 clienti è il lavoro che A1 stima in 1-3 mesi per acquisizione, ma per il corporate. \[STIMA, A1\] Il codice ACB, che riconosce al broker cessante metà delle provvigioni per due annualità, pesa sugli stessi trasferimenti. **\[FATTO, A9; applicazione fuori da ACB da verificare\]**

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Effetti del cambio di controllo su accordi di incasso, conti separati e collaborazioni | Rischio e costo di integrazione | Avvocato M&A assicurativo |
| Trasferimento degli incarichi e cessione dei dati dei clienti | Decide la forma giuridica della migrazione | Avvocato di distribuzione e privacy |
| Regime dei micro-broker che diventano collaboratori di un'altra società | Decide la forma del consolidamento | Avvocato di distribuzione; quesito a IVASS |
| Gestionali e formati di export dei micro-broker | Dimensiona la migrazione | Consulente IT di broker; fornitori |
| Tempi e costi reali di una migrazione | La stima di A1 è per il corporate | Piattaforme che hanno integrato micro-broker; advisor M&A |

## 1.8 Tassonomia delle coperture PMI

**In sintesi.** Per confrontare polizze, trovare lacune e riconciliare premi serve un vocabolario comune: quali rami, quali prodotti, quali garanzie, quali limiti. Questo capitolo descrive le coperture tipiche di una PMI e il modo in cui lo schema dati deve rappresentarle. La gerarchia proposta da A9 va dal ramo legale alla singola estensione; l'oggetto "limite" proposto da A5 cattura massimali, sottolimiti, franchigie e scoperti con la loro base e la loro relazione. Nelle PMI la struttura documentale è più semplice che nel corporate (catalogo più scheda), ma le parole non sono standard: "franchigia", "scoperto", "sottolimite" stanno in tabelle diverse per ogni compagnia. Tutta la tassonomia è un'opinione dei report e va validata da un esperto di ramo prima di diventare schema.

### La gerarchia

A9 propone sei livelli, ciascuno con una propria fonte di codici.

| Livello | Che cos'è | Esempi | Codici |
| --- | --- | --- | --- |
| Ramo | Classe legale di rischio numerata dal CAP (art. 2), da 1 a 18 nei danni | 1 Infortuni, 3 Corpi veicoli terrestri, 7 Merci trasportate, 8 Incendio, 9 Altri danni ai beni, 10 RC auto, 13 RC generale, 15 Cauzione, 16 Perdite pecuniarie, 17 Tutela legale, 18 Assistenza | Numerazione del CAP; codici ANIA e IVASS da verificare |
| Linea Solvency II | Raggruppamento europeo usato nelle segnalazioni | Danni ai beni, RC generale, RC auto, tutela legale, assistenza, credito e cauzione | Mappatura EIOPA |
| Prodotto | Ciò che la compagnia vende, con un set informativo e un'edizione | Multirischi artigianato, RCT/RCO, Cat Nat | Identificativo interno, codice della compagnia, data di versione |
| Sezione | Parte di un prodotto dedicata a un tipo di rischio | Incendio, eventi atmosferici, furto, elettronica, interruzione di esercizio, RCT, RCO, Cat Nat | Ogni sezione mappata su un ramo prevalente |
| Garanzia | Il singolo evento o danno coperto | Ricorso terzi, acqua condotta, fenomeno elettrico, merci in refrigerazione, rivalsa INAIL | Lista chiusa ed estendibile |
| Estensione | Condizione particolare che amplia o restringe | Inquinamento accidentale nella RCT, postuma, beni all'aperto | Collegata alla garanzia che modifica |

**\[OPINIONE, A9; FATTO per la numerazione dei rami, A4 e A9\]** Due avvertenze. Il cyber non ha un ramo dedicato e A9 lo colloca tra i rami 9, 13 e 16, da verificare con un attuario. Una sezione può richiamare garanzie di rami diversi: la multirischi di un'impresa contiene spesso incendio, furto, RC e tutela legale nello stesso contratto. **\[OPINIONE, A9\]**

### I prodotti tipici di una PMI

| Prodotto | Rami | Sezioni e garanzie tipiche | Limiti tipici | Standardizzazione tra compagnie | Set informativo pubblico |
| --- | --- | --- | --- | --- | --- |
| Multirischi artigianato e manifattura leggera | 8, 9, 13, 16 | Incendio, eventi atmosferici, furto, elettronica, guasti macchine, merci in refrigerazione, interruzione di esercizio, RCT/RCO, RC prodotti | Scoperti 10-20% con minimo; franchigie in giorni per l'interruzione di esercizio; primo rischio assoluto sul furto | Media | Sì per i pacchetti, no per le polizze su progetto |
| Multirischi commercio o negozio | 8, 9, 13, 17, 18 | Come sopra più cristalli, danni indiretti, tutela legale, assistenza | Sottolimiti in percentuale della somma; franchigie fisse | Media-alta | Sì, di norma |
| RCT/RCO | 13 | Danni a terzi, danni ai dipendenti con rivalsa INAIL e INPS, postuma | Massimale unico o per sinistro e per persona; franchigie sui danni a cose | Media | Sì |
| RC prodotti | 13 | Danni da prodotti difettosi; ritiro prodotti come opzione | Massimale per anno; esclusione di Stati Uniti e Canada | Bassa | Raro: spesso su quotazione |
| Flotte e veicoli commerciali | 3, 10, 18 | RC auto, incendio, furto e kasko; libro matricola | Franchigie per veicolo | Alta nell'RC auto, bassa nel libro matricola | DIP RC auto sì; libro matricola su quotazione |
| Cyber | 9, 13, 16 (da verificare) | Danni propri (ripristino, interruzione, estorsione), RC verso terzi, gestione dell'incidente | Franchigie orarie, sottolimiti sull'estorsione | Bassa, testi in evoluzione | Sì per i pacchetti PMI |
| D&O | 13 (perdite patrimoniali) | RC di amministratori e dirigenti, spese legali | Claims made, retroattività, postuma | Bassa | Raro: spesso su quotazione |
| Cauzioni | 15 | Garanzie per appalti, dogane, fideiussioni | Fido e massimale per garanzia | Alta per gli appalti (schemi tipo) | Parziale |
| Infortuni | 1 | Morte, invalidità permanente, diaria | Franchigie sull'invalidità; tabelle di valutazione | Media | Sì |
| Tutela legale | 17 | Vertenze contrattuali, penali, di lavoro | Massimale per caso; carenza | Alta | Sì |
| Cat Nat obbligatoria | 8, 9 | Sisma, alluvione, frana su terreni, fabbricati, impianti, macchinari, attrezzature | Vincoli di legge su scoperti e massimali | Alta sul minimo di legge; il 95% dei prodotti aggiunge prestazioni | Sì: IVASS ha esaminato 41 polizze pubblicate da 38 imprese |

**\[OPINIONE, A9, salvo i dati IVASS sul Cat Nat, FATTO, A9\]** Il limite massimo di scoperto del Cat Nat, riportato da A9 come 15% fino a 30 milioni di somme, viene da un ricordo dell'autore e va verificato sul decreto. **\[Fonte debole, A9\]** Per la RC prodotti A5 non ha trovato nessun testo corporate verificato. **\[FATTO, A5: lacuna\]**

### Come rappresentare garanzie e limiti

Il punto più delicato dello schema è il limite. A5 propone un oggetto unico con sette attributi: la garanzia a cui si riferisce; il tipo (massimale, sottolimite, limite di indennizzo, franchigia fissa, franchigia temporale, scoperto, minimo, massimo, aggregato); il valore; l'unità (euro, percentuale, per mille, giorni, ore); la base (per sinistro, per anno, per serie, per ubicazione, per persona); la relazione con un altro limite (parte di o in aggiunta a); la fonte, cioè documento, pagina ed estratto. **\[OPINIONE, A5\]** I testi confermano che serve questa granularità: un testo cyber precisa che i sottolimiti "sono una parte del Massimale" e che il massimale vale per sinistro, per sinistro in serie e per anno; un altro scrive in maiuscolo che il sottolimite "non è da intendersi in aggiunta"; uno scoperto tipico è "10%" con minimo di 3.000 euro. **\[FATTO, A5\]**

Attorno al limite, A9 elenca gli attributi che ogni garanzia deve portare. La tabella li raggruppa.

| Gruppo | Attributi |
| --- | --- |
| Forma | Valore intero, primo rischio assoluto o relativo, valore a nuovo; regola proporzionale (art. 1907 c.c.) e sua deroga |
| Valori | Somma assicurata; categoria del bene secondo il bilancio (art. 2424 c.c., per il Cat Nat); ubicazione geocodificata e classe di rischio catastrofale |
| Limiti | Massimale, sottolimite, franchigia, scoperto con minimo e massimo, carenza |
| Tempo | Effetto, scadenza, tacito rinnovo, frazionamento; claims made o loss occurrence, retroattività, postuma |
| Ambito | Esclusioni e delimitazioni con il riferimento all'articolo; territorialità |
| Economia | Premio imponibile e imposte; provvigione e canale (diretto o retrocessione) |
| Regole | Mercato di riferimento POG; indicatore di grande rischio; indicatore di conformità Cat Nat |
| Provenienza | Documento, pagina, versione, impronta |

**\[OPINIONE, A9\]** A questi A5 aggiunge un nucleo comune a ogni polizza: contraente e assicurato (anche "per conto di chi spetta"), delegataria e quote, numero di polizza, prodotto con codice ed edizione delle condizioni, effetto e scadenza con la convenzione "ore 24" da convertire esplicitamente, clausola broker, foro, garanzie operanti. **\[OPINIONE, A5\]** Le garanzie "operanti solo se espressamente richiamate" vanno lette dalla scheda, altrimenti si estraggono coperture mai acquistate. **\[FATTO, A5\]**

### Casi che lo schema deve reggere

Alcune situazioni non sono risolvibili da un estrattore e vanno rappresentate in modo esplicito, per mandarle a una persona. **\[OPINIONE, A5 mod. 3\]**

| Caso | Esempio | Come lo rappresenta lo schema |
| --- | --- | --- |
| Doppio regime temporale | Un cyber con danni propri a evento e RC in claims made | Forma temporale per sezione, non per polizza |
| Sottolimite senza relazione dichiarata | Non è scritto se è parte del massimale o in aggiunta | Relazione "non dichiarata" e gate umano |
| Franchigia in tempo | Ore di inattività nel cyber, giorni nell'interruzione di esercizio | Unità di misura obbligatoria |
| Sovrapposizione tra polizze | Inquinamento accidentale nella RCT e polizza ambientale separata | Garanzie collegate a più polizze del programma |
| Bene assegnabile a più partite | Clausola che manda i beni dubbi alla partita "contenuto" | Regola di assegnazione registrata con la fonte |
| Discordanza da risolvere "a favore del contraente" | Clausola di favore residuale | Mai risolta dalla macchina: sempre una persona |
| Edizione delle condizioni mancante | La scheda non indica l'edizione | Documento richiamato segnato come mancante |

### Differenze con il corporate

| Aspetto | PMI | Corporate (A1-A8) |
| --- | --- | --- |
| Struttura documentale | Prodotto a catalogo con set informativo e scheda personalizzata | Testi del broker o capitolati che sostituiscono il prestampato; slip in inglese nei rischi londinesi |
| Precedenza | Scheda e condizioni particolari prevalgono sulle generali | Il capitolato sostituisce le condizioni della compagnia, che non vanno usate per limiti ed esclusioni |
| Fonti pubbliche per i test | Set informativi delle compagnie, con note legali da rispettare | Capitolati di gara degli enti pubblici |
| Coassicurazione e programmi | Rari | Frequenti, con master e polizze locali |
| Grandi rischi | Quasi mai, salvo i rami sempre grandi rischi come le merci trasportate | Spesso, ramo per ramo |
| Lingua | Italiano | Spesso bilingue |
| Tabelle lunghe | Libro matricola, elenchi di ubicazioni | Le stesse, più grandi |

**\[OPINIONE, A5 e A9; FATTO, A5, per la regola sul capitolato\]** A5 distingue già due mercati documentali nella fascia corporate: sotto i 50 milioni prevalgono i prodotti a catalogo redatti secondo le linee guida ANIA "Contratti semplici e chiari", sopra crescono i testi negoziati. **\[OPINIONE, A5\]** La PMI sta tutta nel primo mondo, con due generazioni di layout, prima e dopo il 2019. **\[OPINIONE, A5\]**

### Le polizze di Alfa nella tassonomia

| Polizza | Rami | Grande rischio | Testo | Punto delicato per lo schema |
| --- | --- | --- | --- | --- |
| Multirischi con Cat Nat | 8, 9, 13 | No | Set informativo pubblico più scheda | Partite, sottolimiti per evento, conformità Cat Nat |
| RCT/RCO | 13 | No | Set informativo pubblico | Massimale per sinistro e per persona; regolazione sulle retribuzioni |
| Flotta | 3, 10 | No | DIP RC auto pubblico; libro matricola su quotazione | Tabella per veicolo con date di inclusione |
| RC prodotti | 13 | No | Su quotazione | Territorialità e forma temporale |
| Merci trasportate | 7 | Sì, per ramo | Su quotazione, con possibili clausole inglesi | Regime informativo diverso dalle altre |
| Infortuni | 1 | No | Set informativo pubblico | Dati personali e sanitari degli assicurati |
| Tutela legale | 17 | No | Set informativo pubblico | Massimale per caso e carenza |

**\[STIMA: applicazione della tassonomia di A9 all'esempio ipotetico; la classificazione va verificata\]**

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Codici ANIA e IVASS per rami e prodotti; collocazione del cyber | Servono a una tassonomia interoperabile | Attuario; responsabile segnalazioni di vigilanza di una compagnia |
| Vincoli tecnici del decreto Cat Nat | Servono al controllo di conformità | Testo in Gazzetta; tecnico assicurativo |
| Testi di RC prodotti e D&O per PMI | Nessun testo verificato | Underwriter casualty; set informativi |
| Contenuto dell'aggiornamento 2024 delle linee guida ANIA | Possibile terza generazione di layout | Compliance di una compagnia |
| Validazione della tassonomia | È un'opinione dei report | Esperto di ramo e tecnico indipendente, prima del Volume 2 |

## 1.9 Quadro riassuntivo

**In sintesi.** Dei 22 processi, una decina ha già un'automazione di prodotto sul mercato, quasi sempre su una sola sorgente o un solo documento alla volta (gestionali, sistemi documentali, strumenti delle compagnie). Mancano strumenti con risultati pubblici dove serve collegare documenti e sorgenti diverse: abbinamento delle appendici, programmi con più compagnie, riconciliazione su più livelli, migrazione di portafogli. Sono anche i punti in cui i due casi d'uso del Context v3 (dal documento al dato, dal dato al denaro) si incontrano. Tutti i tempi della tabella sono stime per il corporate: il quadro dice dove guardare, non quanto vale la leva. Il primo esperimento della Fase 1 è misurare le ore reali per processo su clienti PMI.

### I 22 processi in una tabella

| Processo | Cap. | Tempo tipico, corporate \[STIMA, A1\] | Collo di bottiglia | Automazione già disponibile | Maturità \[OPINIONE, A2\] | Gate umano |
| --- | --- | --- | --- | --- | --- | --- |
| P01 Incarico | 1.1 | 1-3 mesi di ciclo; 2-4 ore di documenti | Perimetro non strutturato | CRM, firma elettronica | Prodotto | Firma dell'abilitato |
| P02 Raccolta documenti | 1.1 | 5-20 ore per gruppo; settimane di attesa | Documenti incompleti, condizioni non consegnate | Upload, classificazione, IAssicurGPT | Prodotto | Conferma dell'inventario |
| P03 Risk assessment | 1.1 | 1-5 giorni/uomo | Dati operativi non strutturati | Poco | Demo o pilota | Esperto, con intervista |
| P04 Gap analysis | 1.1 | 1-3 giorni/uomo | Nessuna tassonomia comune | FurtherAI, Vantel, Navisio (dichiarato) | Prodotti esteri; nessuna prova su testi italiani | Ogni affermazione; abilitato |
| P05 Rapporti con il mercato | 1.2 | Continuativo | Accesso diretto limitato | Nessuno | Non applicabile | Responsabile della distribuzione |
| P06 Submission | 1.2 | 2-6 settimane | Questionari diversi per compagnia | Intake lato compagnia (USA, Regno Unito) | Prodotto lato compagnia | Rilettura integrale |
| P07 Confronto e proposta | 1.2 | 0,5-2 giorni | Normalizzare limiti e clausole | Comparatori retail | Pilota | Esperto e abilitato |
| P08 Precontrattuale | 1.2 | 1-3 ore per contratto | Moduli ripetitivi, motivazione | Modulistica nei gestionali | Prodotto (moduli), demo (motivazioni) | Firma dell'abilitato |
| P09 Emissione e verifica | 1.2 | 1-3 settimane di attesa; 1-2 ore di verifica | Testo diverso dal negoziato | FurtherAI negli Stati Uniti | Prodotto estero | Esperto sulle differenze |
| P10 Incasso e contabilità | 1.5 | Mensile | Bonifici cumulativi, estratti conto | Gestionali, AIBA Digital in parte | Prodotto su singola sorgente | Ogni eccezione |
| P11 Regolazioni | 1.3 | 2-6 ore per polizza l'anno | Dati da chiedere al cliente | Calcolo nei gestionali | Prodotto (calcolo) | Verifica del calcolo |
| P12 Rinnovi | 1.3 | Avvio 90-120 giorni prima | Picchi di scadenze, date inserite a mano | Gestionali | Prodotto | Doppio controllo delle date |
| P13 Appendici | 1.3 | Giorni o settimane | Abbinamento alla polizza madre | Nessuno verificato | Assente | Ogni abbinamento non univoco |
| P14 Sinistri | 1.4 | Settimane o anni | Documenti e termini | Moduli dei gestionali; intake lato compagnia | Prodotto lato compagnia | Sempre |
| P15 Reportistica | 1.6 | 0,5-2 giorni per cliente l'anno | Dati sparsi | Business intelligence | Prodotto | Rilettura |
| P16 Provvigioni | 1.5 | Mensile | Ripartizione su più livelli | Gestionali sul singolo livello | Parziale | Contabilità |
| P17 Compliance | 1.6 | Continuativo | Adempimenti piccoli e numerosi | Registri, formazione | Prodotto | Responsabile compliance |
| P18 Archiviazione | 1.6 | Continuativo | Duplicati tra email e gestionale | Sistemi documentali | Prodotto | A campione |
| P19 Cauzioni e certificati | 1.3 | Giorni, con urgenza | Fido, urgenza delle gare | Portali delle compagnie | Prodotto lato compagnia | Firma |
| P20 Coassicurazione e programmi | 1.3 | Variabile | Coordinamento tra compagnie | Nessuno verificato | Assente | Esperto |
| P21 Gestione della rete | 1.7 | Settimane per iscrizione | Comunicazioni al RUI | Gestionali, RUI | Prodotto | Responsabile della distribuzione |
| P22 Due diligence e migrazione | 1.7 | 1-3 mesi per acquisizione | Dati sporchi, formati proprietari | Progetti su misura | Su misura | Campionamento ed esperto |

**\[STIMA, A1, per i tempi; FATTO, A1 e A2, per gli strumenti; OPINIONE, A2, per la maturità\]** La figura che colloca i processi per maturità della tecnologia e rischio regolatorio si disegna dopo i testi, come previsto dall'indice.

### Dove la tecnologia è meno matura

A1 individua otto aree in cui la tecnologia è meno matura o meno contesa. La tabella le riprende togliendo i riferimenti ai verticali energy e logistica, eliminati dal Context v3, e all'audit come prodotto d'ingresso.

| Area | Processi | Perché c'è spazio | Rischio regolatorio |
| --- | --- | --- | --- |
| Ricostruzione del programma di un cliente: polizze, appendici abbinate, cronologia | P02, P13, P20 | L'estrazione esiste, l'abbinamento tra più documenti in italiano no | Basso: dato interno |
| Riconciliazione su più livelli tra titoli, banca, rimesse e provvigioni | P10, P16 | I gestionali coprono il singolo livello; AIBA Digital è parziale | Basso |
| Migrazione dei portafogli di broker acquisiti | P22 | Gestionali di base o Excel nei micro-broker | Medio: incarichi e dati da trasferire |
| Regolazioni e dati a consuntivo | P11 | Processo ricorrente su Excel, nessun prodotto dedicato | Basso |
| Dossier di conformità con la traccia della validazione umana | P08, P17 | EIOPA chiede supervisione umana e documentazione anche per l'IA non ad alto rischio | Basso se resta interno |
| Confronto con il perimetro dichiarato | P05, P07 | Obbligo dell'art. 119-ter CAP; nessuno espone il perimetro in modo strutturato | Alto: è consulenza |
| Gap analysis contro il rischio reale | P03, P04 | Il confronto tra polizze è una commodity, quello con il rischio no | Alto: è consulenza |
| Submission verso compagnie senza API | P06 | Nessuno standard italiano di quotazione | Medio |

**\[OPINIONE, A1 e A2; colonna del rischio OPINIONE dell'autore su A3\]** A2 indica P13 e P20 come i processi in cui la leva tecnica è più difendibile, perché non ha trovato prodotti con risultati pubblici. **\[OPINIONE, A2\]** A7 aggiunge che i soli ostacoli non risolvibili con la tecnologia sono l'accesso contrattuale ai portali delle compagnie e la mancanza di uno standard nazionale. **\[OPINIONE, A7\]**

### I due casi d'uso letti sui processi

Il Context v3 lascia aperta la scelta del caso d'uso da consolidare per primo e la affida allo studio dei tempi. **\[FATTO, Context v3\]** Il quadro non la anticipa, ma dice quali processi ciascun caso tocca.

|  | Dal documento al dato | Dal dato al denaro |
| --- | --- | --- |
| Processi | P02, P09, P12, P13, P19; prepara P04 e P07 | P10, P16, P11; prepara P22 |
| Documenti di test | Set informativi pubblici, schede sintetiche, capitolati di gara | Titoli, file bancari ed estratti conto sintetici o anonimizzati |
| Formati | PDF, scansioni, tabelle | File CBI e fatture elettroniche stabili; estratti conto eterogenei |
| Rischio regolatorio | Basso finché non diventa raccomandazione | Basso |
| Che cosa si misura | Accuratezza per campo con citazione verificata, minuti di revisione | Eccezioni per 100 titoli, ore di chiusura mensile |
| Valore per il consolidamento | Due diligence sui documenti | Quadratura dei conti alla data del closing |

**\[OPINIONE, A4, A7 e A8; metriche, FATTO, Context v3 e A7\]** Le fonti divergono sull'ordine: A4 propone di partire dalla riconciliazione, A5 dalle cauzioni e dai libri matricola, A2 dall'estrazione di polizze. Il Context v3 risolve la divergenza lavorando sui due casi in parallelo fino allo studio dei tempi. **\[FATTO\]**

### Che cosa misurare per primo

Il modello di A9 dà 3,5 ore l'anno per polizza a un cliente micro e avverte che, se fossero 2, la leva varrebbe molto meno. **\[STIMA, A9\]** Il modello di A8 mostra che il tasso con cui le ore liberate diventano costi minori pesa sul margine più del livello di automazione. **\[STIMA, A8\]** Lo studio dei tempi dovrebbe quindi partire dai processi a più alto volume per polizza, quelli che si ripetono per ogni contratto e ogni rata: P02, P08, P10, P12, P13 e P16. **\[OPINIONE\]** Per ciascuno servono quattro numeri, raccolti con due broker PMI sotto accordo scritto: ore per polizza, documenti trattati per addetto, errori o eccezioni per 100 operazioni, e minuti di revisione quando lo stesso lavoro è assistito dalla macchina. **\[OPINIONE, A8 raccomandazione 1; Context v3\]** Il protocollo dettagliato è nel Volume 4 (cap. 4.6).

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Tempi, volumi ed errori reali di tutti i 22 processi in un broker PMI | Ogni cifra della tabella è una stima corporate | Studio dei tempi con due broker PMI; materiale dello stage, se utilizzabile |
| Conferma della mappa e della numerazione unica | La mappa è ricostruita da report | Due broker reali, come previsto dall'indice |
| Risultati verificati degli strumenti già sul mercato | Le prestazioni sono quasi tutte dichiarate | Prova pratica su polizze sintetiche (Allegato D) |
| Quali processi un broker PMI svolge davvero e quali delega ad agenzie o compagnie | Cambia il perimetro della leva | Titolare di un micro-broker; agente plurimandatario |
| Tasso di realizzo dei risparmi in un broker PMI | Decide quanta leva diventa margine | Broker test; consulente del lavoro |
