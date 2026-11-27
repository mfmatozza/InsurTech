# Volume 0 – Bibbia di contesto

Oct 2, 2026 · @l

## Come leggere questo volume

Il Volume 0 spiega da zero come funziona l'intermediazione assicurativa danni in Italia, perché la tesi del progetto ha senso e dove può sbagliare. È scritto per chi entra nel team, a partire dai candidati CTO, senza alcun background assicurativo. Gli altri volumi richiamano il lessico, i numeri e la tesi fissati qui.

**Etichette.** Ogni affermazione rilevante porta una delle tre etichette seguenti. Una cifra senza fonte è sempre un'ipotesi e lo dice.

| Etichetta | Significato | Cosa la accompagna |
| --- | --- | --- |
| FATTO | Verificato su una fonte | Il report che lo riporta e la fonte originale |
| STIMA | Calcolato o ricostruito | Il metodo usato |
| OPINIONE | Giudizio dell'autore | Il ragionamento, quando non è ovvio |
| Sottoetichetta | Tra parentesi, dopo l'etichetta, precisa la qualità del dato senza cambiarne la natura: per esempio FATTO (fonte secondaria, da verificare), FATTO (dichiarazione dell'azienda, non verificata), OPINIONE (interpretazione, da confermare con un legale) | Il motivo della cautela |

**Fonti.** Il volume si basa sul Context v3 del 2 ottobre 2026, che prevale in caso di conflitto, sui report di ricerca A1-A9 e sulla bozza "Progetto tecnologia" del 29 settembre 2026. Dove i report si contraddicono, il testo lo segnala e usa la correzione indicata nell'indice della libreria. I report A1-A8 sono stati scritti pensando ad aziende clienti da 10 a 500 milioni di fatturato; il target del progetto è invece la PMI, coperta dal report A9, e dove un dato non vale per la PMI il testo lo dichiara.

**Esempi.** Tutti gli esempi usano la stessa azienda ipotetica, Alfa Meccanica, descritta nel capitolo 0.1. Alfa non esiste e i suoi numeri sono ipotesi costruite per spiegare.

**Riservatezza.** Il volume non cita persone o aziende conosciute durante lo stage, finché le condizioni di riservatezza non sono chiarite per iscritto.

**Validità.** I riferimenti normativi sono requisiti di prodotto da verificare con un avvocato di distribuzione assicurativa prima di toccare dati di clienti reali.

## 0.1 In sintesi: che cosa fa un broker

**In sintesi.** Un broker è un intermediario iscritto nella sezione B del registro degli intermediari che lavora su incarico dell'azienda cliente, non per conto delle compagnie. Analizza i rischi del cliente, porta la richiesta di copertura sul mercato, raccomanda una soluzione, poi amministra la polizza per tutta la sua vita: incassi, variazioni, rinnovi, sinistri. Non assume rischio e di norma non emette polizze. È pagato soprattutto con una provvigione inclusa nel premio, a volte con una fee pagata dal cliente. In Italia una parte rilevante del suo lavoro passa attraverso agenzie di compagnia, e questo complica sia i dati sia il denaro. La tesi del progetto è che il lavoro del broker sia in gran parte trasformazione di documenti in dati e in denaro riconciliato, e che lì la tecnologia possa creare leva. È un'ipotesi da misurare, non un fatto.

### Il mestiere in una pagina

Un'impresa è esposta a rischi economici: un incendio nel capannone, un dipendente che si infortuna, un prodotto difettoso che danneggia un cliente, un attacco informatico. Ne trasferisce una parte a una **compagnia di assicurazione**, cioè l'impresa autorizzata che assume il rischio e paga i danni, in cambio di un **premio**, il prezzo annuo della copertura. Il contratto che regola lo scambio è la **polizza**.

Tra l'impresa e la compagnia quasi sempre c'è un **intermediario**. In Italia ne esistono due tipi principali, iscritti in sezioni diverse del **RUI** (Registro unico degli intermediari, tenuto dall'**IVASS**, l'autorità di vigilanza sulle assicurazioni). L'**agente**, sezione A, ha un mandato da una o più compagnie e ne colloca i prodotti: sta dalla parte dell'offerta. Il **broker**, sezione B, agisce su incarico del cliente senza rappresentare le compagnie (art. 109 del Codice delle assicurazioni private, CAP). **\[FATTO, A4\]** Il capitolo 0.2 descrive tutti gli attori.

Il valore del broker sta in quattro cose: conosce il rischio meglio del cliente, conosce il mercato meglio del cliente, aggrega premi e quindi negozia meglio, e resta accanto al cliente dopo la firma. **\[OPINIONE\]** Per un tecnico la lettura utile è un'altra: il broker riceve informazione non strutturata (bilanci, questionari, polizze di decine di pagine, email, estratti conto) e la trasforma in decisioni documentate e in movimenti di denaro che devono quadrare.

### L'azienda di riferimento: Alfa Meccanica (ipotetica)

Tutto il volume usa la stessa PMI. Ogni dato della tabella è un'ipotesi costruita per l'esempio.

| Voce | Valore ipotetico |
| --- | --- |
| Attività | Componenti meccanici su commessa, venduti in Italia e nell'Unione europea |
| Sede | Un capannone di proprietà in Lombardia e un magazzino in affitto |
| Fatturato | 8 milioni di euro |
| Totale attivo di bilancio | 6 milioni di euro |
| Dipendenti | 42 |
| Veicoli | 5 furgoni |
| Polizze in essere | 7, con 4 compagnie diverse |
| Premi annui complessivi | 40.000 euro, imponibili (al netto delle imposte) |
| Chi decide | Il titolare con il responsabile amministrativo; non c'è un risk manager |

Alfa rientra nella fascia che il progetto assume come ipotesi di partenza (da confermare): piccole imprese da 10 a 49 addetti e da 2 a 10 milioni di fatturato, sotto le soglie dei grandi rischi, nella manifattura leggera; A9 analizza questo segmento. **\[OPINIONE: ipotesi di partenza da confermare\]** Il premio ipotizzato è però alto per la fascia: A9 usa circa 10.000 euro di premio medio per la stima di mercato (capitolo 0.3) e 12.000 per il modello di costo per cliente (capitolo 0.4): sono due ipotesi diverse, riportate entrambe senza essere riconciliate, per una piccola impresa, flotte escluse. **\[STIMA, A9\]** Alfa ha cinque furgoni e una copertura di responsabilità prodotti, quindi un premio più alto è plausibile, ma va verificato con un broker. Come impresa con beni propri, Alfa è anche soggetta all'obbligo di copertura contro le catastrofi naturali (Cat Nat), con scadenza di adempimento al 31 dicembre 2025 per le piccole e micro imprese (istituito dalla L. 213/2023; vedi capitolo 0.7). **\[FATTO, A9, fonte MIMIT\]**

Un dettaglio conta subito. La legge chiama **grandi rischi** le coperture di aziende che superano almeno due di tre soglie: attivo oltre 6,2 milioni, fatturato oltre 12,8 milioni, più di 250 dipendenti (art. 1, lett. r, CAP). **\[FATTO, A4\]** Alfa non ne supera nessuna: per i criteri dimensionali non è un grande rischio. Per lei valgono gli obblighi ordinari di informativa previsti per la clientela ordinaria, che per i grandi rischi in parte non si applicano; per il ramo merci trasportate (ramo 7), sempre grande rischio (art. 1 CAP), si applica invece il regime grandi rischi. **\[STIMA: applicazione delle soglie ai dati ipotetici\]** È la differenza principale tra il target PMI del progetto e il corporate studiato dai report A1-A8, e il capitolo 0.7 ne spiega le conseguenze.

### Un anno di Alfa con il suo broker

La tabella segue un anno tipo. Le attività sono raggruppate nelle sette famiglie di processi che il Volume 1 sviluppa una per una.

| Famiglia | Che cosa fa il broker per Alfa | Documenti che passano di mano |
| --- | --- | --- |
| Capire il cliente | Firma l'incarico, raccoglie le 7 polizze, le legge, confronta le coperture con l'attività reale e trova lacune: per esempio un massimale di responsabilità civile basso rispetto ai contratti con i clienti, due garanzie pagate due volte, nessuna copertura informatica | Lettera di incarico, informative precontrattuali, polizze e appendici, visura, bilancio, elenco dei beni |
| Andare sul mercato | Prepara una richiesta standard, la invia a più compagnie o tramite agenzie, rende confrontabili le offerte, presenta una raccomandazione motivata. Decide il titolare di Alfa | Capitolato o questionari, offerte in formati diversi, prospetto di confronto |
| Gestire il portafoglio | Tiene lo scadenzario, gestisce le variazioni (l'ampliamento del magazzino, un furgone in più), la regolazione del premio a fine anno, i rinnovi | Appendici, dichiarazioni di regolazione, avvisi di scadenza |
| I sinistri | Quando una pressa prende fuoco, aiuta Alfa a denunciare entro i termini, segue perito e compagnia, controlla l'indennizzo | Denuncia, foto, perizia, atto di liquidazione |
| Il denaro | Incassa il premio, lo versa alla compagnia, riconcilia l'estratto conto della compagnia con i propri incassi e controlla le provvigioni | Quietanze, movimenti bancari, estratti conto, rendiconti provvigionali |
| Conformità e archivio | Conserva la prova di cosa ha proposto e perché, gestisce eventuali reclami, rispetta privacy e obblighi IVASS | Fascicolo del cliente, questionario sulle esigenze, registri |
| Rete e crescita | Gestisce i propri collaboratori; se acquisisce un altro broker, ne integra portafoglio e dati | Contratti con i collaboratori, archivi del broker acquisito |

### Tre precisazioni rispetto alla bozza

La bozza di settembre descrive il mestiere in modo corretto nelle linee generali. Tre punti vanno precisati.

**Il broker raccomanda, il cliente decide.** La bozza dice in apertura che il broker "sceglie" la copertura migliore. Più avanti dice correttamente che decide il cliente. **\[OPINIONE\]** La differenza non è di stile: la raccomandazione è attività regolata, e il prodotto deve lasciare traccia di chi ha deciso cosa.

**Chi paga la provvigione.** La provvigione è riconosciuta dalla compagnia, ma è inclusa nel premio che paga il cliente. **\[FATTO, A4\]** Economicamente la paga quindi il cliente, ed è per questo che la legge impone di dichiararla nell'informativa.

**Il broker non è sempre indipendente dalle agenzie.** Molti broker, soprattutto piccoli, non hanno un accordo diretto con ogni compagnia e piazzano i rischi attraverso un'agenzia. ANIA stima che circa 25 punti percentuali di premi danni originati da broker siano contabilizzati come premi delle agenzie. **\[FATTO, A4, fonte ANIA/AIBA\]** Il pagamento del premio al broker libera il cliente solo se la compagnia ha firmato un accordo specifico (art. 118 CAP); altrimenti il cliente resta debitore finché la compagnia non incassa. **\[FATTO, A4\]** Il capitolo 0.5 spiega perché questo punto decide gran parte dell'architettura dei dati.

### Dove si inserisce la tecnologia

La bozza chiude l'apertura dicendo che ogni passaggio è lavoro manuale su documenti non strutturati. Il Context v3 corregge la frase sulla base del report A7. **\[FATTO, A7 via Context v3\]** I flussi strutturati esistono e sono governati a silos: ogni compagnia ha il proprio portale, ogni broker il proprio gestionale, e standard di scambio come AIBA Digital e il tracciato SHARE sono adottati solo in parte. Per quanto risulta da fonti pubbliche (A7), nessuno governa in modo trasversale e documentale il dato che collega cliente, broker, più compagnie e i documenti che li legano. **\[OPINIONE (osservazione, non fatto assoluto), A7\]**

L'ipotesi del progetto è che una infrastruttura capace di trasformare quei documenti in dati affidabili, con la fonte di ogni valore e una validazione umana tracciata, moltiplichi i documenti e le polizze gestibili per addetto. **\[OPINIONE: ipotesi da validare\]** La Fase 1 deve misurarla in documenti, polizze e ore per addetto e in costo per polizza. Il capitolo 0.10 elenca i punti in cui l'ipotesi rischia di essere troppo ottimistica.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Quante polizze, compagnie e premi ha una PMI tipica nella fascia del target | Alfa è costruita a tavolino; numeri sbagliati falsano tutti gli esempi | Ricerca A9 sulle PMI, poi un broker che gestisce PMI |
| Quanta parte del lavoro di un broker PMI passa da agenzie anziché da accordi diretti | Cambia il percorso dei documenti e del denaro | Titolare o amministrativo di un broker PMI |
| Quanto tempo richiede ciascuna famiglia di attività | È la base per misurare la leva | Studio dei tempi con due broker reali |
| Se le PMI del target firmano davvero un incarico di brokeraggio formale o lavorano su rapporti informali | Cambia il primo documento del flusso | Un broker PMI |

## 0.2 Gli attori

**In sintesi.** Una polizza danni per un'impresa coinvolge almeno tre parti (cliente, intermediario, compagnia) e spesso molte di più: coassicuratrici, riassicuratori, agenzie che fanno da ponte, agenzie di sottoscrizione con delega (MGA), intermediari all'ingrosso, periti, banche. Ogni attore produce e riceve documenti e denaro, e ciascuno ha un sistema informativo proprio. La distinzione che conta di più è per conto di chi lavora l'intermediario: l'agente per la compagnia, il broker per il cliente, l'MGA per la compagnia con poteri di sottoscrizione. Per una PMI il caso tipico non è il rapporto diretto broker-compagnia ma la catena broker-agenzia-compagnia, che allunga i flussi e moltiplica i punti in cui i dati si disallineano. Il capitolo descrive chi fa cosa; il capitolo 0.5 segue il denaro e il capitolo 0.6 i documenti.

### Il lato della domanda: chi compra la copertura

Il **contraente** stipula il contratto e paga il premio. L'**assicurato** è il titolare dell'interesse protetto, cioè chi subisce il danno se l'evento si verifica. Spesso coincidono, ma non sempre: in un gruppo la capogruppo può essere contraente e le controllate assicurate. **\[FATTO, A4\]** Chi riceve l'indennizzo può essere un terzo ancora, il **vincolatario**, per esempio la banca che ha finanziato il capannone. **\[FATTO, A4\]**

Il contraente ha obblighi precisi: dichiarare il rischio in modo esatto (artt. 1892-1893 del codice civile), pagare, denunciare i sinistri, comunicare le variazioni e i dati per le regolazioni del premio. **\[FATTO, A4\]** Le imprese con beni propri sono anche obbligate ad assicurarsi contro terremoto, alluvione e frana, la copertura detta **Cat Nat**: l'obbligo è stato istituito dalla legge di bilancio 2024 (L. 213/2023) e le scadenze di adempimento, fissate dal DL 39/2025, sono il 31 marzo 2025 per le grandi imprese, il 1° ottobre 2025 per le medie e il 31 dicembre 2025 per le piccole e micro (capitolo 0.7). **\[FATTO, A4 e A9\]**

Nel corporate decide un **risk manager** o il direttore finanziario. In una PMI come Alfa quel ruolo non esiste: decidono il titolare e il responsabile amministrativo, che di assicurazioni sanno poco. **\[OPINIONE\]** Per il prodotto significa che l'interlocutore del broker non sa produrre dati ordinati: il broker deve ricostruirli.

### Il lato dell'offerta: chi assume il rischio

La **compagnia** assume il rischio, emette la polizza e paga i sinistri. Al suo interno l'**underwriter** decide se e a quali condizioni assumere un rischio, mentre i **liquidatori** istruiscono i sinistri. La compagnia guadagna con il premio, meno sinistri e spese, più il rendimento degli investimenti. È soggetta a regole prudenziali (Solvency II) e definisce per ogni prodotto il **mercato di riferimento**, cioè la clientela per cui il prodotto è pensato (governo del prodotto, Reg. IVASS 45/2020). **\[FATTO, A4\]**

Un rischio grande può essere diviso tra più compagnie con quote proporzionali: è la **coassicurazione**. Una delle compagnie, la **delegataria**, gestisce il contratto per tutte. Ogni coassicuratrice paga solo la propria quota, senza solidarietà (art. 1911 c.c.). **\[FATTO, A4\]** La coassicurazione è visibile al cliente, perché il riparto delle quote è scritto in polizza.

Il **riassicuratore** assicura la compagnia, non il cliente. La compagnia che cede il rischio si chiama **cedente**. Il cliente non ha rapporti con il riassicuratore e non lo vede in polizza. **\[FATTO, A4\]** Coassicurazione e riassicurazione vengono spesso confuse, ed è uno dei quindici equivoci del capitolo 0.12.

### Gli intermediari: il registro RUI

Chi distribuisce assicurazioni in Italia deve essere iscritto al RUI, il registro tenuto da IVASS, in una sezione che dipende da come lavora. La tabella riporta le sezioni rilevanti per il progetto con gli iscritti al 31 dicembre 2025.

| Sezione | Chi | Iscritti al 31/12/2025 | Per chi lavora | Rilievo per il progetto |
| --- | --- | --- | --- | --- |
| A | Agenti | 25.121, di cui 8.303 società | Una o più compagnie mandanti | Principale canale delle PMI; spesso il ponte tra broker e compagnia |
| B | Broker | 5.821: 4.101 persone fisiche e 1.720 società | Il cliente | Il soggetto che il progetto vuole rendere AI-nativo e consolidare |
| C | Produttori diretti | 328 | Una compagnia | Marginali nelle imprese |
| D | Banche, Poste, società di intermediazione mobiliare | 379 | Le compagnie partner | Forti su credito, perdite pecuniarie, polizze legate ai finanziamenti |
| E | Collaboratori | 192.984 | L'intermediario di riferimento, sotto la sua piena responsabilità | Rete commerciale di molti broker; generano retrocessioni da riconciliare |
| Elenco annesso | Intermediari con sede in un altro Stato dello Spazio economico europeo | 4.279 | Come broker o agenti | Molti broker e MGA internazionali operano da qui |

Fonte dei numeri: Relazione annuale IVASS 2026, riportata da AUA. **\[FATTO, A4 e A9\]** Esiste anche una sezione F, con 13 iscritti, che non riguarda il progetto. **\[FATTO, A4\]**

Un broker costituito in società deve avere al proprio interno almeno un **responsabile dell'attività di distribuzione** iscritto al RUI. **\[FATTO (da verificare sul Reg. IVASS 40/2018: non coperto dai report)\]** È la persona che risponde delle raccomandazioni fatte ai clienti, ed è il ruolo a cui il prodotto deve far arrivare ogni proposta prima che esca.

### Agente, broker, MGA e wholesaler

Questi quattro soggetti fanno lavori simili in apparenza e opposti nella sostanza. La tabella riprende A4 con due precisazioni.

|  | Agente | Broker | MGA | Wholesaler |
| --- | --- | --- | --- | --- |
| Per chi lavora | La compagnia mandante | Il cliente | La compagnia che gli ha dato la delega | Un altro broker |
| Chi lo paga | La compagnia | La compagnia, con la provvigione inclusa nel premio, e/o il cliente con una fee | La compagnia, anche con una quota sugli utili tecnici | Una quota della provvigione del broker che gli porta il rischio |
| Sottoscrive il rischio | No | No | Sì, per conto e sul bilancio della compagnia | No |
| Il pagamento a lui libera il cliente | Sì, per legge (art. 118 CAP) | Solo se la compagnia ha firmato un accordo specifico | Di norma sì | Secondo gli accordi |
| Sezione RUI | A | B | A, perché in Italia l'MGA non è una categoria legale | B o elenco annesso |

**\[FATTO, A4 per le righe 1-4; OPINIONE di A4 per il wholesaler, per cui non esiste una fonte italiana dedicata\]**

L'**MGA** (Managing General Agent) è un'agenzia di sottoscrizione: riceve da una compagnia la delega a quotare, emettere e talvolta liquidare i sinistri, usando la **capacity** della compagnia, cioè la quantità di rischio che la compagnia è disposta ad assumere. Il broker si rivolge a un'MGA per coperture specialistiche come D&O o cyber. **\[FATTO, A4\]** Il **wholesaler** è un broker che piazza rischi per conto di altri broker, spesso su mercati specialistici o a Lloyd's: dà accesso al mercato e lascia al broker la relazione con il cliente. **\[OPINIONE, A4\]**

**Lloyd's** non è una compagnia ma un mercato di sottoscrittori con sede a Londra. Nell'Unione europea le polizze Lloyd's sono emesse da Lloyd's Insurance Company S.A. Il **coverholder** è il soggetto che sottoscrive ed emette per Lloyd's in base a una delega (binding authority), identificata da un codice di riferimento unico, l'UMR. **\[FATTO, A4\]** Per un sistema documentale il certificato Lloyd's è un formato a sé, con una propria struttura.

### La catena che conta per le PMI: broker, agenzia, compagnia

Molti broker, soprattutto piccoli, non hanno un accordo diretto con ogni compagnia. Piazzano i rischi tramite un'agenzia, con un accordo di **collaborazione orizzontale** tra intermediari (L. 221/2012; art. 42 Reg. IVASS 40/2018). **\[FATTO, A4\]** In questa catena il broker è il **proponente**, perché ha il cliente, e l'agenzia è l'**emittente**, perché ha il rapporto contabile con la compagnia. L'agenzia gira al broker una quota della provvigione, la **retrocessione**. **\[FATTO, A4 e A9\]**

Il fenomeno è grande. ANIA stima che 25,1 punti percentuali di premi danni 2025 originati da broker siano contabilizzati come premi delle agenzie. **\[FATTO, A9, fonte ANIA\]** Per A9 il flusso è probabilmente concentrato su retail e PMI, perché i grandi rischi si piazzano direttamente. **\[OPINIONE, A9\]** Ha due conseguenze per il progetto. Il broker non vede in modo diretto i dati contabili della compagnia: li riceve filtrati dall'agenzia. E, secondo il modello di A9, una PMI servita via agenzia rende al broker circa due terzi di una servita direttamente, abbastanza da cambiare la redditività del cliente. **\[STIMA, A9, ipotesi del report da validare\]**

Per Alfa la situazione realistica è mista. Ipotizziamo che il broker abbia accordi diretti con due delle quattro compagnie e passi da un'agenzia per le altre due. **\[STIMA (ipotesi dell'esempio)\]** I documenti di Alfa arrivano quindi da tre tipi di fonte: due compagnie, un'agenzia, il broker stesso.

### Gli attori di contorno

Il **perito** quantifica il danno dopo un sinistro; non decide se il danno è coperto. **\[FATTO, A4\]** Il **liquidatore** istruisce la pratica per la compagnia; il nome indica ruoli diversi da compagnia a compagnia. **\[FATTO, A4\]**

La **banca** tiene il **conto separato** su cui l'intermediario deve versare i premi incassati, un patrimonio distinto da quello dell'intermediario (art. 117 CAP). **\[FATTO, A4\]** I movimenti bancari sono una delle sorgenti di dati da riconciliare, come spiega il capitolo 0.5.

I **fornitori di software** vendono i **gestionali** degli intermediari, cioè i sistemi in cui il broker tiene anagrafiche, polizze, titoli e contabilità. Tra quelli verificati da A9 ci sono PASS Broker Evolution di RGI Group, Sintesi, Progetto Broker di Finson, IAssicur City e Koala Broker. **\[FATTO, A9, siti dei fornitori\]** A9 corregge un'attribuzione precedente: PASS Broker Evolution è di RGI Group, non di SIA o Nexi. Esistono poi infrastrutture di scambio dati: **AIBA Digital**, promossa dall'associazione dei broker, e il tracciato **SHARE**, proposto dall'associazione delle software house del settore. **\[FATTO, A4\]** Il Volume 2 le tratta come sorgenti di dati, non come concorrenti. **\[FATTO, Context v3\]** Un fornitore di software che raccomanda prodotti ai clienti diventa a sua volta un intermediario soggetto a iscrizione. **\[OPINIONE (da verificare con un legale), A4\]**

**IVASS** vigila su compagnie e intermediari, tiene il RUI, emana regolamenti e pubblica statistiche. **\[FATTO, A4\]** Le **associazioni** rappresentano le categorie e producono gran parte dei dati di mercato: ANIA per le compagnie, AIBA e ACB per i broker, SNA e ANAPA per gli agenti, UEA per gli intermediari, SHARE per le software house. **\[FATTO, A4\]** Le loro statistiche misurano cose diverse, come mostra il capitolo 0.3.

### Chi lavora dentro un broker

I ruoli interni contano perché sono le persone di cui il progetto vuole misurare la produttività. La bozza e A8 descrivono, con nomi variabili, cinque funzioni.

| Ruolo | Cosa fa | Dove interviene la tecnologia |
| --- | --- | --- |
| Titolare o producer | Porta i clienti e tiene le relazioni principali | Poco: è il lavoro relazionale |
| Account manager | Segue il cliente, prepara le proposte, negozia | Preparazione dei confronti e delle bozze |
| Tecnico o analista dei rischi | Legge le polizze, valuta coperture e lacune | Estrazione e confronto dei documenti |
| Back office | Inserisce i dati, emette documenti, gestisce scadenze e appendici | La parte più ripetitiva e documentale |
| Amministrazione e sinistri | Incassi, rimesse, provvigioni; pratiche di sinistro | Riconciliazione e tracciamento delle pratiche |

**\[OPINIONE: sintesi della bozza, sezioni 2.1-2.6, e di A8\]** In un micro-broker queste funzioni si concentrano su due-cinque persone. **\[OPINIONE/STIMA, A9, da validare\]** La composizione reale del personale per ruolo e le ore spese per processo non sono pubbliche. **\[FATTO, A8: lacuna dichiarata\]**

La mappa visiva degli attori e dei flussi (figura 0.1) si disegna dopo la stesura dei testi, come previsto dall'indice.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Quanta parte dei premi PMI passa da broker via agenzia, broker diretti e agenti | Il canale decide percorso dei dati, del denaro e la redditività per cliente | Ex direttore distribuzione di una compagnia; ufficio studi ANIA |
| Percentuali di retrocessione negli accordi broker-agenzia | Il "due terzi" di A9 è un'ipotesi del report | Agente plurimandatario; titolare di un micro-broker |
| Ruolo reale dei wholesaler nel segmento PMI | Non esiste una fonte italiana dedicata | Broker specialty; un wholesaler |
| Composizione del personale di un micro-broker per ruolo | Base per misurare la leva per addetto | Titolare o responsabile operativo di un micro-broker |
| Requisiti esatti del responsabile della distribuzione | Determina chi firma le raccomandazioni nel prodotto | Avvocato di distribuzione assicurativa |
| Quali gestionali usano davvero i micro-broker e che export offrono | Decide come si alimentano senza sostituirli | Consulente IT di broker; fornitori |

## 0.3 Il mercato italiano in numeri

**In sintesi.** I premi danni italiani valgono 51,1 miliardi di euro nel 2025 se si contano anche le imprese europee con sede secondaria in Italia, 43,6 miliardi se si contano solo le imprese italiane; la differenza è quasi tutta nelle rappresentanze UE. La quota dei broker va dal 9,7% al 40,7% a seconda di cosa si misura, e nessuna delle due cifre estreme è sbagliata: misurano cose diverse. Nei rami non auto i broker hanno circa metà del mercato, ma una parte grande dei loro premi passa da agenzie. Il segmento PMI non auto vale, secondo una stima di A9, 4-7 miliardi, di cui circa 1,6 miliardi nelle piccole imprese da 10 a 49 addetti, la fascia che il progetto assume come ipotesi di partenza (da confermare). Gli intermediari sono molti e piccoli: 5.821 broker iscritti, con ricavi medi stimati intorno al milione di euro. Ogni numero di questo capitolo va citato con il suo perimetro.

### Quanto vale il mercato danni

Due fonti ufficiali danno due totali diversi per lo stesso anno.

| Fonte | Perimetro | Premi danni 2025 | Crescita |
| --- | --- | --- | --- |
| ANIA | Imprese italiane, extra-UE e rappresentanze di imprese UE | 51,07 miliardi | +6,5% |
| IVASS, Relazione annuale | Imprese vigilate italiane | 43,6 miliardi | +6,6% |

**\[FATTO, A4 per ANIA; A9 per IVASS\]** Le rappresentanze UE, cioè le sedi secondarie in Italia di compagnie europee, raccolgono 7,5 miliardi, il 14,7% del totale ANIA. **\[FATTO, A4, fonte ANIA\]** Sottraendole dal totale ANIA si ottengono circa 43,6 miliardi, il totale IVASS. **\[STIMA: 51,07 − 7,5\]** Il conflitto di perimetro che A4 lasciava aperto si spiega quindi quasi interamente così. Restano da verificare le imprese extra-UE, che ANIA include nel dato ufficiale.

L'auto vale 20,3 miliardi e il non auto circa 30,8 nel perimetro ANIA. **\[FATTO, A4\]** Per IVASS l'auto pesa il 42% del totale. **\[FATTO, A9\]** Il progetto si occupa del non auto: incendio, beni, responsabilità civile, infortuni, malattia, credito e cauzione. Le flotte aziendali restano in parte dentro l'auto, come spiega più avanti la sezione sulle PMI.

| Ramo (ANIA, rappresentanze UE incluse) | Premi 2025 | Variazione | Nota |
| --- | --- | --- | --- |
| RC auto | 14,8 miliardi | +4,4% | Premio medio 415 euro |
| RC generale | 5,86 miliardi | +2,2% | 1,6 miliardi raccolti da rappresentanze UE |
| Corpi veicoli terrestri | 5,5 miliardi | +8,9% | Danni al proprio veicolo |
| Malattia | 5,23 miliardi | +11,4% |  |
| Altri danni ai beni | 4,9 miliardi | +4,1% |  |
| Incendio | 4,62 miliardi | +17,7% | Circa 200 milioni dovuti all'obbligo Cat Nat |
| Infortuni | 4,3 miliardi | +3,5% |  |
| Credito e cauzione | Non disponibile | +4,4% e +8,0% | Nel credito le rappresentanze UE pesano l'82,9% |

**\[FATTO, A4, fonti ANIA e stampa di settore\]** I due rami con la crescita più alta, incendio e malattia, sono anche i più rilevanti per una PMI che deve rispettare l'obbligo Cat Nat o offrire coperture ai dipendenti. **\[OPINIONE\]**

### Quanto pesano i broker: sei misure, un solo mercato

La domanda "che quota hanno i broker?" ha almeno sei risposte documentate. La tabella le ordina dalla più bassa alla più alta.

| Misura | Perimetro | Broker | Agenti | Fonte |
| --- | --- | --- | --- | --- |
| Ufficiale ANIA 2025 | Imprese italiane ed extra-UE; il premio va a chi lo consegna alla compagnia | 9,7% (4,2 miliardi) | 72,3% | ANIA, via A4 |
| Nominale IVASS 2025 | Imprese vigilate | 10,18% (10,4% nel 2024) | 76,6% | IVASS, via A8 e A9 |
| IVASS, I trimestre 2026, rami diversi dalla RC auto | Imprese vigilate, solo non RC auto | 19,8% | 57,2% | IVASS, via A4 |
| Corretta ANIA, trimestrale | Premi raccolti dai broker e contabilizzati dalle agenzie riattribuiti ai broker | 33,7% (33,8% a marzo 2026) | 48,3% | ANIA, via A4 e A8 |
| Corretta ANIA-AIBA, annuale 2025 | Come sopra, con 25,1 punti riattribuiti | 34,8% (15,2 miliardi); 51,3% nel non auto | 47,2% | ANIA e AIBA, via A4 |
| AIBA, assemblea del 25/6/2026 | Intero mercato, rappresentanze UE incluse | 40,7% (quasi 21 miliardi; 39,3% nel 2024) | circa 48% | AIBA, via A4 |

**\[FATTO per ciascuna riga, con la fonte indicata\]** Le misure sono coerenti tra loro. 9,7% più i 25,1 punti riattribuiti dalle agenzie danno il 34,8%, e 15,2 miliardi su 43,7 di base confermano lo stesso valore. Il 40,7% di AIBA su 51 miliardi vale circa 20,8 miliardi, cioè i "quasi 21" dichiarati. **\[STIMA: verifiche aritmetiche dell'autore\]** La differenza tra la misura corretta e quella AIBA viene dalle rappresentanze UE, dove i broker sono forti: nel loro non auto hanno il 50,4%. **\[FATTO, A4\]**

Le misure rispondono a domande diverse. **\[OPINIONE\]** La misura ufficiale dice chi tiene il rapporto contabile con la compagnia. Quella corretta dice chi ha il cliente. Quella AIBA aggiunge le compagnie europee. Per il progetto contano tutte e tre: la seconda dice quanto mercato è servito da broker, la prima dice quanto di quel mercato il broker vede solo attraverso un'agenzia.

**Correzioni e incoerenze tra i report.** Tre punti vanno segnalati.

- A1 riporta per i broker un 9,8% a fine marzo 2026. A4 lo considera una confusione con le banche, che nei dati annuali 2025 sono al 9,8%, mentre i broker sono al 9,7%. **\[FATTO, correzione di A4 adottata dall'indice\]** A9 conferma però, dalla stessa fonte di A1, un 9,8% dei broker nella serie trimestrale ANIA a marzo 2026. **\[FATTO, A9\]** Il dato di A1 non era quindi sbagliato ma riferito a un periodo diverso. Nel volume si usa 9,7% per l'anno 2025, come previsto dall'indice, e 9,8% solo per il primo trimestre 2026.
- AIBA sostiene che i broker abbiano prodotto il 65% della crescita danni 2025, cioè 1,7 dei 2,7 miliardi di incremento, un rapporto che in realtà dà circa 63% e non 65%. **\[FATTO, A8, fonte AIBA\]** Un incremento di 2,7 miliardi corrisponde però al perimetro IVASS (43,6 miliardi a +6,6%), mentre la quota del 40,7% è calcolata sul perimetro con le rappresentanze, dove l'incremento è di circa 3,1 miliardi. **\[STIMA: calcolo dell'autore\]** La cifra è di un'associazione di categoria e mescola probabilmente due perimetri: va citata con cautela.
- La quota nominale IVASS (10,18%) e quella ufficiale ANIA (9,7%) differiscono perché le basi sono diverse. **\[OPINIONE\]** Nessuno dei report le riconcilia.

### Intermediari: tanti e piccoli

Gli iscritti al RUI sono elencati nel capitolo 0.2. Qui contano le dimensioni. Secondo IVASS oltre il 60% degli intermediari sono microimprese e meno del 7% supera i 10 milioni di premi intermediati. **\[FATTO, IVASS, aprile 2025, via A1 e A4\]** I broker sono concentrati in Lombardia (23,5%), Lazio (16,7%) e Campania (10,0%), e il 5,05% degli iscritti in sezione B risulta inoperativo. **\[FATTO, IVASS 2026, via A4 e A8\]**

Al vertice ci sono pochi grandi gruppi. Le entità italiane dei maggiori broker avevano nel 2024 questi ricavi, secondo classifiche ricavate da bilanci depositati: Aon SpA 301,9 milioni, Marsh SpA 178,5 milioni, Howden SpA 84,0 milioni, Willis Italia 70,5 milioni. **\[FATTO (fonte aggregatore di bilanci, da verificare sul Registro imprese), A8\]** Il gruppo Howden in Italia, con Assiteca, dichiara 130,3 milioni di ricavi, 1,2 miliardi di premi e 875 persone nell'esercizio chiuso a settembre 2024. **\[FATTO, A8, comunicato della società\]**

Sotto il vertice il dato si perde. Non esiste un dato ufficiale sul totale delle provvigioni dei broker, quindi non si può calcolare la concentrazione del mercato. **\[FATTO, A8: lacuna\]** Due indizi danno l'ordine di grandezza. Un campione dell'Osservatorio sul brokeraggio (CBI e Università di Parma, dati 2018-2020) indica ricavi medi dei piccoli broker di 870-940 mila euro. **\[FATTO, A9, campione non rappresentativo\]** Una stima top-down di A8 arriva a circa 1 milione di ricavi medi per società di brokeraggio. **\[STIMA, A8: si basa su una provvigione media ipotizzata\]** La cifra secondo cui l'80% delle società di brokeraggio è sotto 1 milione di provvigioni circola senza fonte primaria. **\[FATTO (non verificato, senza fonte primaria), A9\]**

### Il segmento PMI

**Quante sono.** ISTAT conta 805.000 imprese da 3 a 9 addetti e 189.000 da 10 a 49 addetti, sui dati del censimento 2022. **\[FATTO, A9, fonte ISTAT\]** Le medie imprese da 50 a 249 addetti sono circa 23.000. **\[STIMA, A9: per differenza da dati ISTAT\]**

**Quattro definizioni di "piccola".** La parola PMI non ha un solo significato, e lo schema dati deve registrarle tutte, perché da ciascuna dipendono obblighi diversi. **\[OPINIONE, A9\]**

| Definizione | Criterio | Alfa (ipotetica) |
| --- | --- | --- |
| ISTAT | Numero di addetti | Piccola: 42 addetti |
| Unione europea | Addetti e fatturato o attivo (PMI sotto 250 addetti e 50 milioni di fatturato o 43 di attivo) | PMI |
| Codice civile, usata dal DL 39/2025 per il Cat Nat | Due limiti su tre tra 5 milioni di attivo, 10 milioni di ricavi, 50 dipendenti | Piccola: rispetta i limiti di ricavi e dipendenti |
| Grandi rischi, art. 1 CAP | Supera due soglie su tre tra 6,2 milioni di attivo, 12,8 milioni di fatturato, 250 dipendenti | Non supera le soglie dimensionali; ma le merci trasportate (ramo 7) sono sempre grande rischio (capitolo 0.7) |

**\[FATTO, A4 e A9 per i criteri; STIMA per la classificazione di Alfa\]** A9 segnala un caso che lo schema deve gestire: una media impresa europea con 15 milioni di fatturato e 7 di attivo è PMI per l'Unione europea ma grande rischio per il CAP. **\[FATTO, A9\]**

**Quanto vale.** Non esistono dati ufficiali sui premi delle PMI. **\[FATTO, A9\]** A9 li stima moltiplicando, per fascia, numero di imprese, quota di imprese assicurate e premio medio non auto.

| Fascia | Imprese | Quota assicurata (ipotesi) | Premio medio non auto (ipotesi) | Premi stimati |
| --- | --- | --- | --- | --- |
| Micro 0-2 addetti | circa 3,5 milioni | 50% | 500 euro | circa 0,9 miliardi |
| Micro 3-9 addetti | 805.000 | 70% | 2.000 euro | circa 1,1 miliardi |
| Piccole 10-49 addetti | 189.000 | 85% | 10.000 euro | circa 1,6 miliardi |
| Medie 50-249 addetti | circa 23.000 | 95% | 50.000 euro | circa 1,1 miliardi |
| Totale |  |  |  | circa 4,7 miliardi |

**\[STIMA, A9; i calcoli tornano. Penetrazioni e premi medi sono ipotesi del report, da validare con un attuario\]** L'intervallo dichiarato è 4-7 miliardi, flotte escluse. Due fonti indipendenti lo rendono plausibile: CRIF, IIA e Nomisma indicano circa 5 miliardi l'anno per piccole imprese, professionisti e freelance, e circa 14.000 euro di spesa media per le PMI. **\[FATTO, A9, fonte 2022\]** La fascia che il progetto assume come ipotesi di partenza (da confermare), le piccole imprese, varrebbe quindi circa 1,6 miliardi di premi. **\[OPINIONE: ipotesi di partenza da confermare\]** Con provvigioni medie del 14%, come nel modello di A9, sono circa 225 milioni di provvigioni l'anno per tutti gli intermediari insieme. **\[STIMA dell'autore su ipotesi di A9: ordine di grandezza, non dimensione del mercato indirizzabile\]**

Questi premi medi (10.000 euro per la piccola, 50.000 per la media) sono l'ipotesi della stima di mercato. Il modello di costo del capitolo 0.4 usa premi per cliente diversi (12.000 e 60.000 euro): sono due ipotesi distinte di A9, costruite per scopi diversi e non riconciliate. Dove un calcolo del volume usa il premio medio di mercato, i valori sono quelli di questa tabella.

Alfa, con 40.000 euro di premi, sarebbe quattro volte il premio medio ipotizzato per la sua fascia. È possibile per un'azienda manifatturiera con furgoni e responsabilità prodotti, ma è un'ulteriore ragione per verificare i numeri dell'esempio. **\[OPINIONE\]**

**Chi serve le PMI.** Nessuna fonte pubblica scompone la quota dei broker per segmento di cliente. **\[FATTO, A9: lacuna\]** A9 propone per i premi PMI non auto un mix plausibile: agenzie dirette 65-75%, broker via agenzia 10-15%, broker con accordi diretti 7-10%, banche 5-8%, vendita diretta e digitale sotto il 2%. **\[STIMA, A9, da validare con un agente plurimandatario e un titolare di micro-broker\]** Se il mix è giusto, nelle PMI il broker è un canale minoritario e dipende spesso dall'agente. Un'infrastruttura per broker PMI deve quindi saper leggere anche i prodotti standard delle agenzie, non solo i testi negoziati del corporate. **\[OPINIONE, A9\]**

**Quanto manca.** Il 51% del fabbisogno assicurativo delle PMI risulta scoperto, il 63% al Sud e tra le microimprese, su un campione di 70.000 aziende. **\[FATTO, A9, fonte CRIF per ANIA, 2025\]** Tra i motivi per non assicurarsi, il 56% delle imprese indica premi troppo alti rispetto al danno atteso. **\[FATTO, A9, fonte Banca d'Italia, citata nel 2022\]** Il gap è anche di domanda, non solo di distribuzione. **\[OPINIONE, A9\]**

**L'obbligo Cat Nat.** Al 30 aprile 2026 risultano 680.730 contratti Cat Nat attivi, con un premio mediano di 203 euro, e solo il 16% dei 4,3 milioni di imprese non agricole è assicurato. **\[FATTO, A9, fonte IVASS\]** ANIA conta 733.498 contratti al 31 maggio 2026, il 16,3% delle imprese obbligate. **\[FATTO, A9\]** L'obbligo è un'occasione di contatto con le imprese non coperte, non una fonte di ricavo: su 203 euro di premio la provvigione è di circa 20-30 euro. **\[STIMA, A9\]**

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Quota dei broker nel segmento PMI e mix reale dei canali | Dice quanto mercato è raggiungibile da un broker e quanto passa da agenzie | Ex direttore distribuzione di una compagnia; ufficio studi ANIA |
| Premi medi reali per fascia e settore, flotte incluse | La stima di A9 poggia su premi medi ipotizzati | Attuario danni; responsabile prodotti PMI di una compagnia |
| Totale delle provvigioni dei broker e loro concentrazione | Senza questo dato la dimensione media dei broker è una stima | Ufficio studi AIBA; IVASS |
| Perimetro esatto delle imprese extra-UE nel dato ANIA | Chiude la riconciliazione tra 51,1 e 43,6 miliardi | Analista statistico IVASS o ANIA |
| Come AIBA calcola la quota della crescita | La cifra del 65% sembra mescolare due perimetri | Ufficio studi AIBA |
| Distribuzione dei broker per ricavi e numero di addetti | Serve a dimensionare i target di consolidamento | AIBA, ACB, CBI; dati RUI estesi |

## 0.4 Come guadagna un broker

**In sintesi.** Un broker vive soprattutto di provvigioni: una percentuale del premio che la compagnia gli riconosce a ogni emissione e a ogni rinnovo, e che è inclusa nel prezzo pagato dal cliente. Fee, incentivi delle compagnie e interessi sui premi in transito sono voci minori; in Italia gli interessi sono probabilmente marginali, perché i premi incassati sono un patrimonio separato. Il costo dominante è il personale, circa metà dei ricavi. I margini EBITDA dei broker italiani noti sono intorno al 19-21%, contro il 32-36% dei grandi quotati americani. Il punto decisivo per il progetto è che il costo di servizio è in buona parte fisso per polizza, mentre il ricavo è proporzionale al premio: per questo i clienti piccoli rendono poco, e per questo la tecnologia potrebbe cambiare la soglia di redditività. Tutte le cifre sulle PMI sono stime.

### Le fonti di ricavo

| Voce | Chi paga e come | Peso tipico (denominatore indicato) | Evidenza |
| --- | --- | --- | --- |
| Provvigioni | La compagnia, in percentuale del premio netto; sono incluse nel premio | 75-90% della base provvigioni più fee | Gallagher: 76% dei ricavi da commissioni e fee è legato a provvigioni **\[FATTO, A8\]** |
| Fee | Il cliente, per consulenza o in sostituzione della provvigione | 10-25% della base provvigioni più fee | Gallagher: 24% **\[FATTO, A8\]** |
| Incentivi delle compagnie (contingent, profit commission, rappel) | La compagnia, a fine anno, se il portafoglio supera soglie di volume o ha pochi sinistri | 4-8% dei ricavi totali nei quotati USA | Gallagher circa 8%, Brown & Brown 4,3%, Ryan Specialty 5,0% **\[FATTO, A8\]** |
| Interessi sui premi in transito (fiduciary income) | La banca, sulle giacenze di premi non ancora girati | 0-3% dei ricavi totali nei quotati USA | Brown & Brown 2,4% **\[FATTO, A8\]** |

I pesi di provvigioni e fee si leggono sulla sola base provvigioni più fee (Gallagher: 76% e 24%, che sommano a 100); incentivi e interessi sono invece percentuali dei ricavi totali, quindi la colonna non somma a 100%. I pesi vengono da broker americani quotati, gli unici che pubblicano bilanci dettagliati. **\[FATTO, A8\]** Per i broker italiani non esistono statistiche pubbliche sul mix dei ricavi. **\[FATTO, A8: lacuna\]**

**Provvigioni.** Si calcolano sul premio netto, prima di accessori e imposte, con aliquote diverse per ramo e per compagnia. **\[FATTO, A4\]** Si ripetono a ogni rinnovo senza un nuovo costo di acquisizione, ed è per questo che il portafoglio di un broker vale in base alla sua capacità di trattenere i clienti. **\[OPINIONE, bozza 1.3\]** Negli accordi con il broker la compagnia scrive spesso una **clausola broker**, che mette la remunerazione del broker a carico della compagnia e non del cliente. **\[FATTO, A4\]** Economicamente la provvigione resta comunque dentro il prezzo pagato dal cliente, ed è per questo che va dichiarata nell'informativa (capitolo 0.7).

**Fee.** Sono pagate direttamente dal cliente e vanno indicate nell'informativa precontrattuale, distinte dalle provvigioni. **\[FATTO, A4\]** La bozza le presenta come segnale di indipendenza e come compenso per l'audit dei rischi, "prodotto di ingresso" del modello AI-nativo. Il secondo punto va rivisto: un audit con raccomandazioni a un cliente reale è, per la lettura prevalente, attività di distribuzione che richiede l'iscrizione. **\[FATTO (lettura da verificare con un legale), Context v3\]** L'indice della libreria ha quindi tolto all'audit il ruolo di prodotto d'ingresso per default.

**Incentivi delle compagnie.** La bozza li chiama over-commission e li descrive come "la componente più sottovalutata", un ricavo quasi puro che il consolidamento aiuterebbe a sbloccare superando le soglie delle compagnie. Il meccanismo è reale: sono bonus legati al volume o al rapporto tra sinistri e premi del portafoglio. **\[FATTO, A4 e A8\]** Il peso in Italia non è noto, e A8 avverte di non copiare nei piani i valori americani, che includono il 4-10% di ricavi da incentivi e interessi. **\[OPINIONE, A8\]** Gli incentivi vanno anche dichiarati come possibile conflitto di interessi. **\[FATTO, A4\]** Nel volume restano un'ipotesi, non una leva dimostrata.

**Interessi sui premi.** Negli Stati Uniti valgono qualche punto di ricavo e oscillano con i tassi: Gallagher è passata da 247 a 86 milioni di dollari di interessi e altri proventi tra il primo trimestre 2025 e il primo trimestre 2026. **\[FATTO, A8\]** In Italia i premi incassati vanno su un conto separato o sono coperti da una fideiussione, e vanno versati in tempi brevi (capitolo 0.5): il loro valore finanziario è con ogni probabilità marginale. **\[OPINIONE, A8\]**

**Le provvigioni passano anche di mano.** Un broker che piazza un rischio tramite un'agenzia riceve una quota della provvigione dell'agente, la retrocessione. Un broker con una rete di collaboratori di sezione E gira loro a sua volta una parte delle provvigioni. **\[FATTO, A4 e A8\]** Non esistono statistiche sulla quota retrocessa ai collaboratori, che per i broker con reti può essere la prima voce di costo variabile. **\[FATTO, A8: lacuna; OPINIONE sul peso\]** Il cliente vede solo il primo livello della catena. **\[FATTO, A4\]**

Sulle provvigioni non si applica l'IVA, perché l'intermediazione assicurativa è esente; si applica invece una ritenuta d'acconto, spiegata nel capitolo 0.5. **\[FATTO, A4\]**

### Quanto vale una provvigione nelle PMI

Le aliquote dipendono dal ramo e dal canale. I dati pubblici sono pochi e di qualità diversa.

| Dato | Valore | Qualità della fonte |
| --- | --- | --- |
| Media di portafoglio dei broker, corporate incluso | 8-12% del premio | Saggio accademico sulla valutazione dei broker **\[FATTO, A9\]** |
| Gare della pubblica amministrazione | 6-8% sugli altri rami, 2-3% sulla RC auto | Capitolati di gara 2023-2025 **\[FATTO, A9\]** |
| Polizze aziendali PMI | 15-25% | Guida commerciale, fonte debole **\[FATTO, A9\]** |

A9 propone queste aliquote per i rami tipici di una PMI, per un broker con accordo diretto con la compagnia: multirischi 15-20%, responsabilità civile verso terzi e dipendenti 12-18%, tutela legale 20-30%, infortuni 15-25%, Cat Nat 10-15%, cyber 15-20%, RC auto delle flotte 3-8%. **\[STIMA/OPINIONE, A9, da validare con un agente plurimandatario\]** Se il rischio passa da un'agenzia, A9 ipotizza che al broker arrivino circa due terzi della provvigione. **\[STIMA, A9\]**

**Esempio: le provvigioni di Alfa.** Distribuiamo i 40.000 euro di premi di Alfa tra le sue sette polizze e applichiamo il valore centrale di ciascun intervallo di A9.

| Polizza (ipotetica) | Premio imponibile | Aliquota applicata (sull'imponibile) | Provvigione |
| --- | --- | --- | --- |
| Multirischi del capannone e del magazzino, Cat Nat inclusa | 14.000 euro | 17,5% | 2.450 euro |
| Responsabilità civile verso terzi e dipendenti | 8.000 euro | 15% | 1.200 euro |
| Flotta di cinque furgoni | 7.000 euro | 5,5% | 385 euro |
| Responsabilità civile prodotti | 6.000 euro | 15% | 900 euro |
| Merci trasportate | 2.000 euro | 15% | 300 euro |
| Infortuni del titolare e dei dirigenti | 2.000 euro | 20% | 400 euro |
| Tutela legale | 1.000 euro | 25% | 250 euro |
| Totale | 40.000 euro | circa 14,7% | circa 5.900 euro |

**\[STIMA: ripartizione dei premi ipotetica; aliquote centrali di A9; per RC prodotti e merci trasportate A9 non dà un intervallo e si usa il 15% della RC generale come ipotesi\]** Nell'esempio del capitolo 0.2 due compagnie su quattro passano da un'agenzia: non è detto che pesino metà dei premi. Se per semplicità ipotizziamo che pesino metà, il ricavo del broker scende a circa 4.900 euro. **\[STIMA: 50% a 14,7% più 50% a due terzi\]** Il ricavo per cliente dipende quindi più dal canale e dal mix di rami che dalla dimensione dell'azienda.

**Cambiare broker ha un costo.** Il codice deontologico di ACB prevede che al broker cessante spetti il 50% delle provvigioni per due annualità dopo la prima. **\[FATTO, A9\]** È una regola di un'associazione, che vincola i suoi aderenti; quanto sia applicata fuori da ACB va verificato. **\[OPINIONE\]** Pesa sia sull'acquisizione di nuovi clienti sia sul trasferimento di portafogli in un consolidamento.

### Dove vanno i soldi: i costi

L'unica struttura di costo completa e pubblica è quella di Brown & Brown, considerato il riferimento di efficienza del settore: personale 49,7% dei ricavi, altre spese operative 16,2%, EBITDA rettificato 35,9% nel 2025. **\[FATTO, A8, bilancio depositato alla SEC\]** Il 35,9% è il valore rettificato dichiarato dall'azienda; sottraendo dai ricavi le sole due voci di costo si ottiene invece 100 − 49,7 − 16,2 = 34,1%. **\[STIMA: calcolo dell'autore; la differenza di 1,8 punti dipende da rettifiche e altre voci definite dall'azienda\]**

I broker italiani noti hanno margini molto più bassi.

| Broker | Esercizio | Ricavi | Margine EBITDA | Ricavi per addetto |
| --- | --- | --- | --- | --- |
| Howden Italia | settembre 2024 | 130,3 milioni di euro | 21,3% | circa 149 mila euro |
| Assiteca | giugno 2021 | 87 milioni di euro lordi | 19,3% | circa 116 mila euro |
| Brown & Brown (USA) | 2025 | 5,9 miliardi di dollari | 35,9% rettificato dichiarato (34,1% calcolato sulle due voci di costo) | non disponibile |
| Aon (globale, margine operativo) | 2025 | non riportato | 32,4% | non disponibile |

**\[FATTO, A8, comunicati e bilanci; ricavi per addetto STIMA di A8\]** Per Howden Italia le fonti danno ricavi diversi per l'esercizio 2023, 113 o 108,2 milioni, e il conflitto non è risolto. **\[FATTO, A8\]** Le metriche "rettificate" sono definite da ciascuna società e non sono del tutto confrontabili. **\[FATTO, A8\]**

Il divario di circa 15 punti tra i broker italiani e i migliori americani ha almeno tre cause: scala, potere contrattuale e mix di clienti, processi. Solo i processi sono aggredibili con la tecnologia documentale. **\[OPINIONE, A8\]** Tra i piccoli broker la dispersione è enorme: due società acquisite dalla stessa piattaforma avevano margini di circa il 48% e circa il 5%. **\[FATTO, A8\]** È uno dei motivi per cui, in un'acquisizione, conta la qualità dei dati.

**La struttura di costo di un broker PMI non è pubblica.** A8 propone un modello per un broker corporate da 20 milioni di ricavi: retrocessioni 8%, personale commerciale 20%, personale tecnico 18%, back office 12%, compliance e amministrazione 5%, tecnologia 3%, altre spese 12%, EBITDA 22%. **\[STIMA, A8, calibrata su Howden Italia, Assiteca e Brown & Brown, non verificata su un broker reale\]** Per un micro-broker A9 ipotizza un EBITDA intorno al 20%. **\[STIMA, A9\]** Nessuna delle due ripartizioni è verificata.

### Perché i clienti piccoli rendono poco

La bozza osserva che nel broker tradizionale il costo di servizio cresce quasi linearmente con il numero di polizze, perché ogni rinnovo, variazione o sinistro richiede tempo umano. **\[OPINIONE, bozza 1.3\]** A9 rende il ragionamento quantitativo: una parte importante del costo è fissa per polizza (raccolta dei dati, informativa, rinnovi, sinistri, incassi), mentre il ricavo è proporzionale al premio. **\[OPINIONE, A9\]** Con ipotesi esplicite (45 euro l'ora di costo pieno di un addetto, 3,5 ore l'anno per polizza per un cliente micro, costo di acquisizione distribuito su cinque anni) il modello di A9 dà questi risultati. I premi per cliente di questo modello (12.000 euro per la piccola, 60.000 per la media) non coincidono con i premi medi della stima di mercato del capitolo 0.3 (10.000 e 50.000): sono due ipotesi distinte di A9, qui riportate come tali.

| Fascia | Polizze per cliente | Premi per cliente | Ricavo del broker | Costo annuo oggi | Margine oggi | Margine con meno ore |
| --- | --- | --- | --- | --- | --- | --- |
| Micro, 3-9 addetti | 2,5 | 2.000 euro | 300 euro | circa 454 euro | circa −154 euro | circa +82 euro |
| Piccola, 10-49 addetti | 5 | 12.000 euro | 1.680 euro | circa 1.325 euro | circa +355 euro | circa +918 euro |
| Media, 50-249 addetti | 9 | 60.000 euro | 6.600 euro | circa 5.050 euro | circa +1.550 euro | circa +3.170 euro |

**\[STIMA, A9: i calcoli tornano; tutte le ipotesi di ore, costi e riduzione sono del report e vanno validate con il titolare di un micro-broker\]** La colonna "con meno ore" assume una riduzione delle ore del 60% per le micro, del 50% per le piccole e del 40% per le medie. È un'ipotesi, non una misura.

Tre letture di A9 contano per la tesi. **\[OPINIONE, A9\]** La prima: con un accordo diretto la piccola impresa è già redditizia oggi, e la riduzione delle ore ne raddoppierebbe o triplicherebbe il margine. La seconda: le micro servite via agenzia restano in perdita anche con la riduzione, quindi la leva funziona solo se il broker ha accordi diretti con le compagnie. La terza: il costo di acquisizione di un cliente non scende con la tecnologia documentale, ed è uno dei motivi per cui il consolidamento, che compra clienti già esistenti, è coerente con la tesi.

A9 avverte anche del rischio opposto: se le ore reali per polizza fossero 2 invece di 3,5, la micro sarebbe già in pareggio e la leva varrebbe molto meno. **\[STIMA, A9\]** Misurare le ore reali è l'esperimento più importante della Fase 1.

Per Alfa, con sette polizze e circa 5 ore l'anno ciascuna come nella fascia piccola, il costo sarebbe di circa 1.800 euro contro 4.900-5.900 euro di ricavo calcolato sull'imponibile (circa 4.500-5.400 euro dopo la correzione del capitolo 0.5). **\[STIMA: ipotesi di A9 applicate all'esempio\]** Alfa è redditizia grazie al premio alto. Il cliente che la tecnologia può rendere redditizio è quello con premi vicini alla soglia, non Alfa. **\[OPINIONE\]**

### Cosa può fare la tecnologia sul margine

Il modello di A8 sul broker da 20 milioni dà da +150 a +550 punti base di margine EBITDA se si automatizza dal 20% al 60% delle attività automatizzabili. **\[STIMA, A8\]** Il risultato dipende molto da quante ore liberate si traducono davvero in minori costi: con un tasso di realizzo del 40% invece del 70%, lo scenario migliore scende a circa +240 punti base. **\[STIMA, A8\]** Le evidenze pubbliche dei grandi broker vanno nella stessa direzione: decine o poche centinaia di punti base di margine, non multipli di produttività. **\[FATTO, A8\]**

Il Context v3 tratta il margine come conseguenza della leva, non come obiettivo: l'ipotesi da validare è moltiplicare i documenti gestibili per addetto. **\[FATTO, Context v3\]** Un piano finanziario costruito su questo volume deve partire dai margini italiani (19-21%: Howden Italia 21,3% e Assiteca 19,3%; le ipotesi di modello di A8 e A9, 22% e 20%, non sono misure) e includere uno scenario di mercato debole, in cui la leva operativa lavora anche al contrario. **\[OPINIONE, A8\]** Il capitolo 0.10 riprende il tema.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Aliquote provvigionali reali per ramo PMI e percentuali di retrocessione | Le provvigioni di Alfa e il modello di A9 poggiano su intervalli ipotizzati | Agente plurimandatario; titolare di un micro-broker |
| Mix dei ricavi dei broker italiani: fee, incentivi, interessi | I valori americani non sono trasferibili | CFO di un broker; ufficio studi AIBA |
| Struttura dei costi e del personale di un broker PMI | Senza questo dato il margine di partenza è una stima | CFO o COO di un broker comparabile |
| Ore reali per polizza e per processo | Decidono se la leva esiste e quanto vale | Studio dei tempi con due broker reali |
| Tasso di realizzo dei risparmi in Italia | Pesa sul margine più del livello di automazione | Responsabile del personale di un broker; consulente del lavoro |
| Applicazione della regola ACB sul broker cessante fuori dall'associazione | Incide sui costi di trasferimento dei clienti | Avvocato di distribuzione assicurativa; ACB |

## 0.5 Il percorso del denaro

**In sintesi.** Il premio che il cliente paga non è un numero solo: è la somma di premio netto, accessori e imposte, e dentro il netto c'è la provvigione del broker. Il cliente paga di norma il broker, che deve tenere i premi su un conto separato dal proprio patrimonio, o coprirli con una fideiussione, e girarli alla compagnia. Se il pagamento al broker libera il cliente dipende da un accordo firmato compagnia per compagnia (art. 118 CAP): senza accordo il cliente resta debitore finché la compagnia non incassa. La compagnia versa le imposte all'erario e paga la provvigione al broker al netto di una ritenuta dell'11,5%. Ogni passaggio produce un documento diverso, e riconciliarli è il lavoro più ripetitivo del broker. Per la tecnologia il primo oggetto da governare è quindi il **titolo**, la singola rata da incassare con il suo stato, più ancora della polizza.

### Anatomia del premio

| Componente | Che cos'è | Chi lo trattiene o lo versa |
| --- | --- | --- |
| Premio netto | Prezzo del rischio più i caricamenti della compagnia; è la base delle provvigioni | La compagnia |
| Accessori | Caricamenti aggiuntivi | La compagnia |
| Imponibile | Netto più accessori | Base dell'imposta |
| Imposta sulle assicurazioni | Calcolata su ogni premio (L. 1216/1961), versata ogni mese sui premi incassati | La compagnia, all'erario |
| Contributo al Servizio sanitario nazionale | 10,5% sui premi RC auto e natanti | La compagnia, al Servizio sanitario |
| Contributo al Fondo di garanzia per le vittime della strada | 2,5% sui premi RC auto, al netto degli oneri di gestione | La compagnia, a CONSAP |
| Premio lordo | Il totale pagato dal cliente | Il cliente |

**\[FATTO, A4 (il contributo FGVS è un dato da riverificare, secondo A4)\]**

Le aliquote dell'imposta cambiano per ramo.

| Ramo | Aliquota | Nota |
| --- | --- | --- |
| Incendio, RC generale, furto e "altre forme" | 22,25% | La tariffa originaria della legge riporta 21,25%: la differenza è un'addizionale successiva, da verificare |
| Infortuni e malattia | 2,5% |  |
| RC auto | 12,5% | Con variazione provinciale di ±3,5 punti, più il contributo SSN |
| Altri rischi del veicolo (incendio, furto, kasko) | 13,5% |  |
| Trasporti | Variabile | Cambia voce per voce |

**\[FATTO, A4, fonti ANIA e Dipartimento delle Finanze\]**

**Un esempio verificabile.** Un certificato Lloyd's di responsabilità professionale pubblicato da un comune riporta: netto 611,96 euro, accessori 61,19, imponibile 673,15, imposte 149,78, lordo 822,93. **\[FATTO, A4, documento pubblico\]** Le imposte sono esattamente il 22,25% dell'imponibile e il lordo è la somma di imponibile e imposte. **\[STIMA: verifica aritmetica\]** La catena netto, imponibile, imposta, lordo è il controllo automatico più economico che un sistema di estrazione possa fare su ogni documento: se i numeri estratti non tornano, almeno uno è sbagliato. **\[OPINIONE, A4\]**

**Una precisazione sugli esempi.** I 40.000 euro di premi di Alfa si intendono imponibili, cioè al netto delle imposte. Il capitolo 0.4 ha applicato le aliquote di provvigione a quella cifra, mentre la provvigione si calcola sul netto senza accessori: è una semplificazione che sovrastima le provvigioni di Alfa di circa il 10%. Se gli accessori valgono circa il 10% del netto, come nel certificato Lloyd's dell'esempio, l'imponibile è 1,10 volte il netto e la provvigione calcolata sull'imponibile è 1,10 volte quella corretta: le provvigioni di Alfa scendono da circa 5.900 a circa 5.360 euro, e il ricavo con due compagnie su quattro via agenzia da circa 4.900 a circa 4.470 euro. **\[STIMA: ipotesi sugli accessori\]**

### Chi paga il broker e che cosa trattiene il fisco

Le operazioni assicurative e la loro intermediazione sono esenti da IVA, comprese le commissioni che le coassicuratrici pagano alla delegataria. **\[FATTO, A4\]**

Sulle provvigioni pagate dalle compagnie ad agenti e broker si applica una ritenuta d'acconto del 23% sul 50% dell'importo, cioè l'11,5% effettivo. L'esonero precedente è stato soppresso dalla legge di bilancio 2024 (L. 213/2023, art. 1, cc. 89-90). La ritenuta vale anche per i collaboratori e non fa nascere l'obbligo di fattura. **\[FATTO, A4, fonti Agenzia delle Entrate\]** Le fonti non concordano sulla decorrenza: la Circolare 7/E del 2024 indica il 1° aprile 2024, FiscoOggi il 1° gennaio 2024. Prevale la Circolare. **\[FATTO, A4: conflitto di fonti\]** A4 segnala anche la possibilità di una base ridotta in alcuni casi, da verificare con un commercialista. **\[FATTO, A4: lacuna\]**

Per un sistema di riconciliazione la ritenuta è una differenza attesa tra provvigione maturata e provvigione incassata. Se non è modellata, ogni pagamento della compagnia appare come un errore. **\[OPINIONE\]**

### Il conto separato e la fideiussione

I premi incassati da un intermediario e le somme destinate ai risarcimenti sono un **patrimonio autonomo**, distinto da quello dell'intermediario. Devono stare su un **conto separato** intestato all'intermediario "in tale qualità", senza transitare su altri conti (art. 117 CAP; art. 63 Reg. IVASS 40/2018). **\[FATTO, A4\]** I creditori del broker non possono aggredire quel denaro.

In alternativa al conto separato l'intermediario può prestare una **fideiussione** bancaria pari al 4% dei premi incassati, al netto delle imposte, con un minimo (art. 64 Reg. 40/2018). **\[FATTO, A4\]** Sul minimo le fonti sono in conflitto, e i valori sono tre: 18.750 euro secondo il testo del regolamento citato da A4, 19.510 euro secondo alcune informative e la pagina IVASS citata da A8, 23.480 euro secondo A3, che lo collega al Reg. delegato (UE) 2024/896, lo stesso che ha aggiornato dal 9 ottobre 2024 i massimali minimi della responsabilità civile professionale. **\[FATTO, A3, A4 e A8: conflitto di fonti\]** **\[OPINIONE\]** I tre valori sembrano le tappe successive degli adeguamenti europei degli importi minimi, quindi il più recente, 23.480 euro, è probabilmente quello vigente a livello europeo. Va verificato se e come il regolamento IVASS lo recepisce.

Il versamento sul conto separato va fatto con immediatezza e comunque entro 10 giorni, secondo una fonte secondaria. **\[FATTO (fonte secondaria, da verificare), A4\]** La rimessa alla compagnia può avvenire al netto delle provvigioni, se la compagnia lo consente. **\[FATTO, A4\]** I contanti sono ammessi fino a 750 euro l'anno per contratto nei rami danni diversi dalla RC auto. **\[FATTO, A4\]**

### L'effetto liberatorio e l'art. 118

Il pagamento in buona fede all'intermediario vale come pagamento alla compagnia (art. 118 CAP). Per gli agenti vale per legge. Per i broker vale solo se lo prevede un accordo sottoscritto o ratificato dalla compagnia; altrimenti, come scrivono le informative degli stessi broker, il pagamento al broker o a un suo collaboratore non ha effetto liberatorio. **\[FATTO, A4\]** In coassicurazione l'autorizzazione della delegataria vale anche per le coassicuratrici. **\[FATTO, A4, da un'informativa di un broker\]**

La conseguenza pratica dipende da un'altra norma. Se il cliente non paga il premio, la garanzia resta sospesa dalla mezzanotte del quindicesimo giorno dopo la scadenza (art. 1901 c.c.). **\[FATTO, A4\]** Senza accordo ex art. 118, il cliente che ha pagato il broker in tempo, ma il cui premio è arrivato tardi alla compagnia, rischia di trovarsi scoperto. **\[OPINIONE: conseguenza logica delle due norme, da verificare con un legale\]**

| Passaggio | Con accordo ex art. 118 | Senza accordo |
| --- | --- | --- |
| Cliente → broker, sul conto separato | Il cliente è liberato; il rischio di mancata rimessa passa alla compagnia | Il cliente non è liberato e può dover pagare due volte; il patrimonio separato lo protegge solo in parte |
| Broker → compagnia | La compagnia ha un credito verso il broker | La copertura opera solo quando la compagnia incassa |
| Broker → agenzia → compagnia | Effetto liberatorio solo se la compagnia ha ratificato l'accordo con l'agenzia | Catena più lunga, più disallineamenti |
| Compagnia → broker | Provvigione meno ritenuta | Provvigione meno ritenuta |
| Compagnia → broker → cliente, dopo un sinistro | L'indennizzo transita sul conto separato | Come a sinistra |

**\[FATTO, A4\]** Ogni broker pubblica nell'informativa precontrattuale l'elenco delle compagnie con cui ha un accordo di questo tipo, e quell'elenco va aggiornato. **\[FATTO, A4\]**

### Il denaro di Alfa in un anno

Riprendiamo la multirischi di Alfa, 14.000 euro di imponibile. Per semplicità applichiamo il 22,25% a tutta la polizza, anche se una multirischi può contenere sezioni con aliquote diverse.

| Passaggio | Importo | Documento che lo prova |
| --- | --- | --- |
| Il broker riceve l'avviso di scadenza | Imponibile 14.000 euro, imposte 3.115, lordo 17.115 | Avviso di scadenza della compagnia |
| Alfa paga il broker | 17.115 euro sul conto separato | Bonifico; movimento del conto separato |
| Il broker rilascia la quietanza | 17.115 euro | Quietanza emessa dalla compagnia, consegnata dal broker |
| Il broker rimette alla compagnia | 17.115 euro, oppure al netto della provvigione se l'accordo lo consente | Bonifico; estratto conto della compagnia |
| La compagnia versa l'imposta | 3.115 euro, nel mese successivo all'incasso | Nessun documento verso il broker |
| La compagnia riconosce la provvigione | Provvigione sul netto, meno ritenuta dell'11,5% | Estratto conto o rendiconto provvigionale |

**\[STIMA: importi calcolati sui dati ipotetici di Alfa con le aliquote di A4\]** Come si applica la ritenuta quando il broker trattiene la provvigione alla rimessa non è chiarito dai report. **\[FATTO (lacuna, da verificare con un commercialista)\]**

Alfa ha quattro compagnie e, nell'esempio del capitolo 0.2, il broker passa da un'agenzia per due di esse. Supponiamo che delle due compagnie dirette solo una abbia firmato l'accordo ex art. 118. **\[STIMA (ipotesi dell'esempio)\]** Lo stesso cliente vive allora tre regimi diversi: liberato con la prima compagnia, non liberato con la seconda, liberato con le altre due solo se le compagnie hanno ratificato l'accordo con l'agenzia. Il sistema deve sapere, per ogni titolo, in quale regime si trova.

### Perché il denaro decide l'architettura

Il lavoro più ripetitivo del broker non è leggere le polizze ma far quadrare tre fonti che descrivono gli stessi fatti in modo diverso: i titoli e le quietanze delle compagnie, i movimenti del conto separato, gli estratti conto con cui le compagnie chiedono le rimesse e riconoscono le provvigioni. Un bonifico può pagare più titoli insieme; un estratto conto può arrivare in PDF, in Excel o in un tracciato proprietario. **\[FATTO, A4 per i formati; OPINIONE per il giudizio\]** A4 indica gli estratti conto come "il cuore del dolore". **\[OPINIONE, A4\]**

Per questo A4 raccomanda di costruire il modello dati attorno al titolo, con il suo stato di incasso e di rimessa, e di trattare come seconda entità il riparto della coassicurazione. **\[OPINIONE, A4\]** Il Context v3 ha fatto di questo flusso uno dei due casi d'uso da studiare in parallelo: dal dato al denaro, cioè la riconciliazione di titoli, incassi, rimesse e provvigioni. **\[FATTO, Context v3\]**

Il denaro pesa anche sul consolidamento. Ogni broker acquisito porta con sé il proprio conto separato o la propria fideiussione, accordi ex art. 118 firmati compagnia per compagnia, collaboratori e titoli in stati diversi. Unire due broker significa volturare o rinegoziare gli accordi di incasso e quadrare i conti separati alla data del closing. **\[OPINIONE, A4\]** Non esistono fonti pubbliche che quantifichino questo costo. **\[FATTO, A4: lacuna\]**

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Minimo vigente della fideiussione: 18.750, 19.510 o 23.480 euro | Requisito di capacità finanziaria per qualsiasi broker | Compliance officer di un broker; testo vigente del Reg. 40/2018 |
| Termine dei 10 giorni per il versamento sul conto separato | Regola da implementare nei controlli | Compliance officer; avvocato di distribuzione |
| Passaggio dell'aliquota da 21,25% a 22,25%; aliquote dei trasporti | Controlli automatici sui premi | Fiscalista assicurativo |
| Decorrenza della ritenuta, casi di base ridotta, applicazione con rimessa al netto | Riconciliazione delle provvigioni | Commercialista di intermediari |
| Quanti broker PMI hanno accordi ex art. 118 e con quante compagnie | Determina il regime di ogni titolo | Amministrativo di un broker PMI |
| Effetti di un cambio di controllo su accordi di incasso e conti separati | Rischio e costo di integrazione nel consolidamento | Avvocato M&A assicurativo |

## 0.6 Il ciclo di vita di una polizza

**In sintesi.** Una polizza non è un documento firmato una volta e poi archiviato: è un contratto che vive per anni e genera di continuo nuovi documenti e nuovo denaro. Il ciclo va dal primo contatto all'incarico, all'analisi dei rischi, al mercato, all'emissione, poi si ripete ogni anno con incassi, variazioni, regolazioni, rinnovi e, quando capita, sinistri; finisce con una disdetta. A4 lo scompone in 13 eventi. Ognuno ha termini di legge o di contratto che, se mancati, lasciano il cliente scoperto o il broker responsabile. Per un sistema informativo la conseguenza è semplice: una polizza non è un record, è un grafo di titoli, appendici, regolazioni, sinistri, quote e certificati collegati tra loro e ai documenti da cui nascono. I tempi pubblicati dai report sono stime pensate per il corporate; per le PMI vanno misurati.

### I 13 eventi

La tabella riprende il modulo 4 di A4. I tempi sono stime dell'autore di A4 sulla prassi descritta nelle fonti: non esistono misure pubbliche. **\[STIMA, A4\]**

| # | Evento | Chi è coinvolto | Documenti | Tempi indicativi (stima per il corporate) | Errore tipico |
| --- | --- | --- | --- | --- | --- |
| 1 | Contatto e incarico | Cliente, broker | Lettera di incarico, informative precontrattuali | 2-8 settimane | Perimetro del gruppo non chiaro |
| 2 | Analisi dei rischi | Broker, cliente | Questionari, valori dei beni, statistica dei sinistri passati | 3-8 settimane | Sottoassicurazione |
| 3 | Piazzamento | Broker, compagnie, MGA, Lloyd's | Capitolato, offerte | Avvio 90-120 giorni prima della scadenza | Clausole disallineate tra offerte |
| 4 | Raccomandazione | Broker, cliente | Prospetto di confronto | 1-2 settimane | Confronto "con tutto il mercato" non supportato |
| 5 | Collocamento | Broker, coassicuratrici | Riparto delle quote, delega | Giorni | Quote sotto il 100% alla data di effetto |
| 6 | Emissione | Compagnia o MGA | Polizza | 1-6 settimane dopo l'effetto | Testo emesso diverso da quello negoziato |
| 7 | Incasso | Cliente, broker | Quietanza | Garanzia sospesa dopo 15 giorni di mancato pagamento (art. 1901 c.c.) | Pagamento senza accordo ex art. 118 |
| 8 | Rimessa | Broker, compagnia | Estratto conto | Mensile | Differenze su provvigioni o imposte |
| 9 | Appendici | Broker, compagnia | Appendice | Continue | Appendice non collegata al titolo |
| 10 | Regolazione | Cliente, broker, compagnia | Dichiarazione dei dati consuntivi | 60-90 giorni dopo l'annualità, da verificare su ogni testo | Dichiarazione non inviata |
| 11 | Sinistro | Cliente, broker, perito, compagnia | Denuncia, perizia, atto di liquidazione | Da settimane ad anni | Denuncia tardiva: 3 giorni salvo deroghe (art. 1913 c.c.) |
| 12 | Rinnovo | Broker, compagnia | Statistica dei sinistri, proposta | 90-120 giorni prima della scadenza | Dati incompleti |
| 13 | Disdetta | Cliente o compagnia | PEC | Preavviso di 30-90 giorni | Termine mancato |

**\[FATTO, A4, per i riferimenti normativi; STIMA, A4, per i tempi\]** La figura del ciclo di vita (figura 0.2) si disegna dopo i testi, come previsto dall'indice.

### I concetti che servono per leggere il ciclo

**Effetto, scadenza, rinnovo, disdetta.** L'**effetto** è l'inizio contrattuale della copertura, la **scadenza** la sua fine. Molte polizze si prorogano automaticamente con il **tacito rinnovo**, a meno che una delle parti invii una **disdetta** entro il preavviso previsto dal contratto. **\[FATTO, A4, glossario\]** Che la polizza abbia "effetto" non vuol dire che la garanzia operi: se il premio non è pagato, l'art. 1901 c.c. ne sospende l'operatività. **\[FATTO, A4\]** Le date sono il dato più critico dell'intero ciclo: devono derivare dal contratto, non da un inserimento manuale. **\[OPINIONE, bozza 2.3\]** La bozza segnala anche una forte stagionalità, con molte scadenze al 31 dicembre o al 30 giugno. **\[OPINIONE, bozza 2.2; nessun dato pubblico la quantifica, A8\]**

**Frazionamento e titoli.** Un premio annuo può essere pagato a rate, il **frazionamento**. Ogni rata è un **titolo** da incassare, con un proprio avviso di scadenza e una propria quietanza. **\[FATTO, A4\]** Una polizza annuale con frazionamento semestrale genera quindi almeno due titoli l'anno.

**Appendici.** Un'**appendice** modifica la polizza durante la sua vita: un bene in più, una somma assicurata diversa, una nuova ubicazione. Ogni appendice può generare un titolo, a debito o a rimborso. **\[FATTO, A4\]** Un'appendice non collegata al titolo e alla polizza di origine è uno degli errori classici. **\[FATTO, A4\]**

**Regolazione del premio.** Alcune polizze si pagano con un premio provvisorio calcolato su un parametro stimato, per esempio le retribuzioni o il fatturato. A fine annualità il cliente dichiara il valore effettivo e si fa il conguaglio. È tipica della responsabilità civile verso terzi e verso i dipendenti. **\[FATTO, A4\]** Termini e penali di regolazione cambiano da testo a testo e non sono stati raccolti in modo sistematico. **\[FATTO, A4: lacuna\]**

**Coassicurazione.** Quando più compagnie si dividono un rischio, la polizza contiene un **riparto** delle quote e una **clausola di delega** che affida la gestione alla delegataria. Ogni coassicuratrice paga solo la propria quota (art. 1911 c.c.); una richiesta alla delegataria interrompe la prescrizione verso tutte, secondo la giurisprudenza. **\[FATTO, A4\]** Dal riparto derivano premi, provvigioni e indennizzi per quota. **\[FATTO, A4\]** Nei rischi di una PMI la coassicurazione è probabilmente rara, ma non va esclusa dal modello dati. **\[OPINIONE\]**

**Sinistro.** Il **sinistro** è l'evento che attiva la copertura, ma la parola indica anche la richiesta di risarcimento. **\[FATTO, A4\]** Il cliente deve dare avviso alla compagnia entro tre giorni dal fatto o da quando ne ha avuto conoscenza, salvo deroghe contrattuali (art. 1913 c.c.). **\[FATTO, A4\]** Il danno a carico del cliente si calcola con la **franchigia**, un importo fisso, o con lo **scoperto**, una percentuale con un minimo. Il pagamento si chiama **indennizzo** quando ripaga danni propri e **risarcimento** quando paga danni a terzi. **\[FATTO, A4\]** La compagnia che ha pagato può rivalersi sul responsabile del danno, la **rivalsa** (art. 1916 c.c.). **\[FATTO, A4\]** Una pratica può durare anni, soprattutto nella responsabilità civile. **\[OPINIONE, bozza 2.4\]**

Il rapporto tra sinistri e premi dei rami danni è stato del 61,7% nel 2025, contro il 63,7% del 2024. **\[FATTO, A4, fonte IVASS\]** Nel 2023 il rapporto tra sinistri più spese e premi era del 69,3% nell'incendio e del 91,1% nella responsabilità civile generale. **\[FATTO, A4, fonte ANIA\]** Sono i numeri che le compagnie guardano quando decidono se rinnovare e a che prezzo.

### Un anno di Alfa, evento per evento

L'esempio è ipotetico e mostra quanti oggetti nascono da sette polizze.

| Momento | Evento | Che cosa produce |
| --- | --- | --- |
| Settembre | Il broker apre i rinnovi delle polizze in scadenza al 31 dicembre e raccoglie i dati aggiornati | Questionari, valori dei beni, statistica dei sinistri |
| Ottobre | Rinnovo della multirischi con aumento delle somme assicurate dopo l'acquisto di un macchinario | Proposta, polizza rinnovata, titolo annuale unico (17.115 euro lordi, come nel capitolo 0.5) |
| Novembre | Disdetta della vecchia tutela legale, sostituita con un prodotto di un'altra compagnia | PEC di disdetta; nuova polizza con il suo set informativo |
| Gennaio | Incasso annuale unico della multirischi (17.115 euro lordi) e pagamento della prima rata semestrale delle altre sei polizze | Sette quietanze, un bonifico cumulativo, un estratto conto per compagnia |
| Febbraio | Regolazione della responsabilità civile verso terzi e dipendenti sulle retribuzioni effettive dell'anno precedente | Dichiarazione di Alfa, conteggio della compagnia, titolo di conguaglio |
| Aprile | Ampliamento del magazzino già coperto (variazione in corso d'anno) | Appendice alla multirischi, titolo a debito |
| Giugno | Incendio di una pressa | Denuncia entro tre giorni, foto, perizia, calcolo dello scoperto, indennizzo via conto separato |
| Luglio | Seconda rata semestrale delle sei polizze frazionate (la multirischi è già stata incassata per intero) | Altre sei quietanze e la loro riconciliazione |

**\[STIMA (ipotesi dell'esempio)\]** In un anno le sette polizze di Alfa generano una trentina di documenti e una ventina di movimenti di denaro da collegare tra loro. **\[STIMA: conteggio sull'esempio\]** Moltiplicato per centinaia di clienti, è il volume che il back office di un broker gestisce oggi in gran parte a mano. **\[OPINIONE\]**

### Che cosa cambia nelle PMI

I 13 eventi valgono per qualunque cliente, ma la forma cambia con la dimensione. **\[OPINIONE, sulla base di A9\]**

Per una PMI molti prodotti sono **multirischi a pacchetto**: polizze modulari che raccolgono in un solo contratto sezioni diverse (incendio, furto, elettronica, responsabilità civile, tutela legale). **\[FATTO, A9\]** Il loro testo è standard, pubblicato dalla compagnia nel **set informativo**: il documento informativo precontrattuale (DIP), il DIP aggiuntivo, le condizioni di assicurazione con il glossario. **\[FATTO, A9\]** Il piazzamento spesso non passa da un capitolato scritto dal broker ma dal confronto di prodotti esistenti, e l'emissione può essere immediata su un portale della compagnia o dell'agenzia. **\[OPINIONE\]** La parte meno standard è la **scheda di polizza**, con le somme, i massimali e le franchigie scelti per il cliente: è il documento che conta di più per i dati ed è spesso conservato come scansione firmata. **\[OPINIONE, A9\]**

I tempi della tabella di A4 sono stati stimati per clienti corporate. Per una PMI analisi e piazzamento sono probabilmente più brevi, mentre incassi, rinnovi e disdette hanno lo stesso numero di passaggi per un premio molto più basso. **\[OPINIONE\]** È la ragione per cui il costo per polizza pesa tanto nelle PMI (capitolo 0.4).

### Che cosa significa per i dati

A4 elenca il primo errore di chi guarda il settore da fuori: pensare che una polizza sia un record. **\[OPINIONE, A4\]** Il ciclo di vita produce invece almeno queste entità, ciascuna con la traccia del documento di origine: gruppo e soggetti, polizza, titolo, appendice, regolazione, riparto, sinistro, estratto conto, movimento del conto separato. **\[OPINIONE, A4, raccomandazione per la Fase 1\]** La bozza ne indicava cinque (cliente, polizza, documento, evento, movimento economico); A4 scompone "evento" e "movimento" in oggetti più precisi. **\[OPINIONE\]** Il Volume 2 costruisce il modello dati unendo le proposte di A5 e A7; qui conta la regola di fondo: ogni oggetto nasce da un documento, e il collegamento tra oggetto e documento è ciò che permette a una persona di verificare in secondi un dato estratto da una macchina. **\[OPINIONE, bozza 3.1\]**

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Tempi reali di ciascun evento per una PMI | I tempi di A4 sono stime per il corporate | Studio dei tempi con due broker PMI |
| Quota di polizze PMI con tacito rinnovo, frazionamento e regolazione | Determina quanti titoli e scadenze genera un portafoglio | Back office di un broker PMI; analisi di un campione di polizze |
| Termini e penali di regolazione nei testi più diffusi | Servono a costruire scadenzari affidabili | Underwriter di responsabilità civile; analisi dei set informativi |
| Quanto spesso il testo emesso differisce da quello concordato | Misura il valore del controllo tra offerta e polizza | Back office di un broker; campione di polizze |
| Concentrazione delle scadenze delle PMI su poche date | Dimensiona i picchi di lavoro e la capacità necessaria | Gestionale di un broker PMI |
| Frequenza dei sinistri e durata delle pratiche nelle PMI | Pesa sul costo di servizio | Ufficio sinistri di un broker; statistiche di compagnia |

## 0.7 Le regole del gioco

**In sintesi.** Questo capitolo riporta solo le regole che cambiano che cosa si può costruire e come. Sono cinque blocchi. Primo: consigliare un cliente su una polizza è **attività di distribuzione assicurativa** e la può svolgere solo un iscritto al RUI; la tecnologia si può sviluppare e collaudare su dati sintetici o anonimizzati, ma nessuna raccomandazione può arrivare a un cliente reale senza un soggetto abilitato. Secondo: la direttiva europea sulla distribuzione (IDD) impone di documentare le esigenze del cliente, il perimetro del confronto e la motivazione di ogni proposta; per le PMI sotto le soglie dei grandi rischi questi obblighi valgono per intero, salvo i rami che sono grandi rischi a prescindere dalla dimensione. Terzo: i dati dei clienti non appartengono a chi costruisce lo strumento, e riusarli per costruire un dataset è un trattamento nuovo. Quarto: l'AI Act incide poco sui rami danni delle imprese, molto su vita e salute delle persone. Quinto: la documentazione va conservata per la durata del rapporto e almeno cinque anni dopo. Ogni regola è tradotta in un requisito di prodotto, da verificare con un avvocato prima di toccare dati reali.

### 1. Chi può fare che cosa

**Che cos'è la distribuzione.** Il Codice delle assicurazioni chiama distribuzione l'insieme di attività che vanno dalla consulenza alla proposta, agli atti preparatori alla conclusione del contratto, fino all'assistenza nella gestione e nei sinistri (art. 106 CAP; FAQ IVASS 1.1). **\[FATTO, A1 e A3\]** Chi la svolge senza iscrizione al RUI commette esercizio abusivo, punito con la reclusione da sei mesi a due anni e una multa da 10.000 a 100.000 euro (art. 305, c. 2, CAP; FAQ IVASS 2.3). **\[FATTO, A3\]**

**Il confine.** La mera segnalazione di nominativi a un distributore non è distribuzione, salvo che diventi assistenza o consulenza finalizzata a una proposta e sia remunerata (FAQ IVASS 1.3 e 1.14). **\[FATTO, A3\]** Un'analisi delle polizze di un cliente che indica lacune e suggerisce coperture è, per la lettura prevalente, consulenza o atto preparatorio, anche se gratuita, perché è strumentale a provvigioni future e la nozione di remunerazione della IDD è ampia. **\[OPINIONE (lettura prevalente), A3: fondata sull'art. 106 CAP e sulle FAQ 1.3 e 1.14\]** Lo stesso vale per un fornitore di software che raccomanda prodotti ai clienti finali. **\[OPINIONE, A4\]**

**Che cosa si può fare senza iscrizione.** Sviluppare il software, fare ricerche di mercato senza dati di clienti, collaudare su dati sintetici o anonimizzati, incontrare potenziali clienti per presentare un servizio futuro senza analizzarne le polizze. **\[OPINIONE, A3\]** È il perimetro su cui il Context v3 ha costruito la Fase 1: le abilitazioni sono rinviate, e diventano necessarie quando una raccomandazione raggiunge un cliente reale. **\[FATTO, Context v3\]**

**Chi risponde.** Il broker risponde dell'attività dei propri collaboratori di sezione E (art. 119, c. 3, CAP). **\[FATTO, A3\]** Le collaborazioni orizzontali tra intermediari sono ammesse solo tra iscritti nelle sezioni A, B e D, con accordo scritto, informativa al cliente e comunicazione alle compagnie (art. 42 Reg. IVASS 40/2018); la collaborazione tra un broker e un wholesaler rientra in questa disciplina (FAQ IVASS 6.1). **\[FATTO, A3\]**

**Requisiti di prodotto.** Nessun output con raccomandazioni esce verso un cliente reale senza l'approvazione registrata di un soggetto abilitato. Nessun pezzo di codice dipende dall'intestazione del distributore: intestazione, firma e numero di iscrizione sono configurabili, perché il soggetto abilitato non è ancora deciso. **\[FATTO, Context v3\]**

### 2. Come si consiglia: IDD, informativa, governo del prodotto

La **IDD** (Direttiva UE 2016/97 sulla distribuzione assicurativa) è recepita nel CAP e nei regolamenti IVASS 40/2018 (distribuzione), 41/2018 (informativa di prodotto) e 45/2020 (governo del prodotto). **\[FATTO, A3 e A4\]** Gli obblighi che pesano sul disegno del prodotto sono sei.

| Obbligo | Regola | Requisito di prodotto | Stato |
| --- | --- | --- | --- |
| Agire nel miglior interesse del cliente | Art. 119-bis CAP | Motivazione scritta di ogni raccomandazione | FATTO |
| Raccogliere richieste ed esigenze prima di ogni contratto | Art. 119-ter, c. 1, CAP | Questionario strutturato, collegato a ciascuna raccomandazione | FATTO |
| Se c'è consulenza, raccomandazione personalizzata motivata | Art. 119-ter, c. 3, CAP | La raccomandazione cita le esigenze registrate e le alternative confrontate | FATTO |
| "Analisi imparziale" solo su un numero sufficiente di contratti del mercato | Art. 119-ter, c. 4, CAP; Allegato 3, sez. IV | Ogni confronto riporta compagnie e prodotti realmente considerati, con data; nessuna formula "tutto il mercato" | FATTO (la regola; IVASS non quantifica la soglia) |
| Informativa precontrattuale: chi è il distributore, conflitti di interesse, natura del compenso, compagnie con cui ha rapporti | Allegati 3, 4 e 4-ter del Reg. 40/2018; FAQ IVASS 1.11 | Documenti generati dai dati di iscrizione e dalla tabella dei compensi | FATTO |
| Vendere entro il mercato di riferimento definito dalla compagnia | Reg. IVASS 45/2020; FAQ IVASS 1.24-1.25 | Campo "mercato di riferimento" per prodotto; controllo di coerenza tra cliente e prodotto | FATTO |

**\[FATTO, A3, A1 e A9; stato secondo A3\]** A questi si aggiungono la consegna del **set informativo** prima della firma (Reg. 41/2018) e la possibilità di usare un supporto digitale durevole con il consenso del cliente, di cui il distributore conserva traccia (art. 120-quater CAP; FAQ IVASS 1.22). **\[FATTO, A3 e A9\]**

**Che cosa si può scrivere e che cosa no.** A3 propone formule concrete. Sono da evitare "confronto con tutto il mercato", "migliore polizza disponibile", "analisi indipendente". Sono sostenibili formule come "confronto con le soluzioni delle compagnie con cui il distributore ha rapporti, elencate nell'informativa". **\[OPINIONE, A3\]** Il Volume 3 trasforma questa regola nel capitolo "Cosa il prodotto non dice".

### 3. Grandi rischi: due soglie su tre, ramo per ramo

La IDD consente di non applicare ai **grandi rischi** alcuni obblighi informativi, compreso il documento informativo standard, e le regole di governo del prodotto non si applicano ai prodotti che li coprono. **\[FATTO, A3 e A4\]** Per i grandi rischi la legge applicabile al contratto è anche liberamente scelta dalle parti. **\[FATTO, A4\]** Quanto queste deroghe siano recepite nel CAP e nei regolamenti IVASS va verificato. **\[FATTO, A4: lacuna\]**

La definizione (art. 1, lett. r, CAP) lavora ramo per ramo. **\[FATTO, A4\]**

| Rami | Quando sono grandi rischi |
| --- | --- |
| Corpi di veicoli ferroviari, aerei e marittimi, merci trasportate, RC di aeromobili e natanti (rami 4, 5, 6, 7, 11, 12) | Sempre |
| Credito e cauzione (rami 14, 15) | Se il rischio riguarda l'attività professionale dell'assicurato |
| Incendio, altri danni ai beni, RC generale, perdite pecuniarie (rami 8, 9, 13, 16) e RC auto | Solo se l'assicurato supera almeno due di tre soglie: attivo oltre 6,2 milioni, volume d'affari oltre 12,8 milioni, più di 250 dipendenti |

**Una correzione rispetto ad A4.** A4 scrive che quasi tutti i clienti da 12,8 milioni di fatturato in su sono grandi rischi. La frase non regge: le soglie da superare sono due su tre, quindi un'impresa con 13 milioni di fatturato, 5 milioni di attivo e 60 dipendenti non è un grande rischio per i rami 8, 9, 13 e 16. **\[STIMA: applicazione della definizione; correzione prevista dall'indice\]** A9 segnala l'errore opposto: un'impresa che è PMI per la definizione europea può essere grande rischio per il CAP. **\[FATTO, A9\]**

**Che cosa significa per Alfa.** Alfa non supera nessuna soglia, quindi la multirischi, la responsabilità civile e la tutela legale seguono gli obblighi ordinari. La polizza merci trasportate, però, è ramo 7, ed è un grande rischio qualunque sia la dimensione dell'azienda. **\[STIMA: applicazione della definizione all'esempio\]** Lo stesso cliente ha quindi polizze con regimi informativi diversi.

**Requisito di prodotto.** Un motore di classificazione per cliente e per ramo, con i dati di bilancio usati, la loro data e la loro fonte, che attiva o disattiva i moduli informativi e il controllo del mercato di riferimento. **\[OPINIONE, A3 e A9\]**

### 4. Dati personali: di chi sono e che cosa se ne può fare

Il **GDPR** (Regolamento UE 2016/679) distingue il **titolare** del trattamento, che decide finalità e mezzi, dal **responsabile**, che tratta i dati per conto del titolare. **\[FATTO, A3\]** Cinque punti cambiano il prodotto.

**Il titolare non è chi costruisce lo strumento.** Per la dottrina prevalente il broker è titolare autonomo dei dati dei propri clienti. **\[OPINIONE (interpretazione), A3\]** Secondo un provvedimento del Garante del 12 febbraio 2026, noto da fonte secondaria, chi riusa i dati dei clienti per una finalità propria ne diventa titolare autonomo e ha bisogno di una base giuridica propria. **\[FATTO (fonte secondaria, da verificare), A3\]** Costruire un dataset con i documenti dei clienti è quindi un trattamento nuovo, non un sottoprodotto del servizio. **\[OPINIONE, A3\]** Per questo il Context v3 ha tolto i dati dei clienti dal vantaggio competitivo garantito. **\[FATTO, Context v3\]**

**Pseudonimizzare non è anonimizzare.** Un dato in cui il nome è sostituito da un codice resta personale finché è possibile ricollegarlo alla persona; cancellare la chiave non lo rende automaticamente anonimo (Linee guida EDPB 01/2025). **\[FATTO, A3\]** Un modello è anonimo solo se è molto improbabile identificare gli interessati o estrarne i dati (Parere EDPB 28/2024). **\[FATTO, A3\]**

**Dati sanitari e giudiziari.** Le polizze infortuni e malattia e i sinistri con lesioni contengono dati sanitari, protetti in modo rafforzato (art. 9 GDPR); i dati su condanne e reati hanno una disciplina propria (art. 10). **\[FATTO, A3\]** Le ditte individuali e i professionisti sono persone fisiche, e lo sono anche i dipendenti nominati nelle polizze. **\[FATTO, A9\]**

**I fornitori di modelli e OCR sono responsabili del trattamento.** Servono un accordo di trattamento dei dati (art. 28), elaborazione nell'Unione europea o garanzie per i trasferimenti, nessun addestramento sui dati e conservazione minima. **\[FATTO, A3\]** Con tecnologie innovative e possibili dati particolari è probabile che serva una valutazione d'impatto (art. 35). **\[OPINIONE (interpretazione), A3\]**

**Decisioni automatizzate.** Il GDPR limita le decisioni basate unicamente su un trattamento automatizzato (art. 22). **\[FATTO, A9\]** La validazione umana prevista dal prodotto è anche una tutela su questo fronte. **\[OPINIONE, bozza 2.5\]**

A questi si aggiunge un tema non coperto da fonti specifiche: i testi di polizza negoziati possono essere informazioni riservate del cliente e della compagnia. **\[OPINIONE (da verificare con un legale), A3\]** Per le PMI il problema è minore sulle condizioni generali, pubblicate nei set informativi, e resta pieno sulla scheda di polizza, che contiene i dati del cliente. **\[OPINIONE\]**

**Requisiti di prodotto.** Mascheramento dei dati personali prima di ogni chiamata a un modello; esclusione o oscuramento dei dati sanitari e giudiziari; separazione per cliente in ogni tabella; un archivio di apprendimento distinto, alimentato solo da output anonimizzati e con un registro della base giuridica; fornitori con elaborazione nell'Unione europea, nessun addestramento e modello sostituibile. **\[FATTO, Context v3; OPINIONE, A3\]**

### 5. AI Act

Il **Regolamento UE 2024/1689** sull'intelligenza artificiale è stato modificato dal Regolamento UE 2026/1744 ("Omnibus digitale sull'IA"), pubblicato il 24 luglio 2026 e in vigore dal 27 luglio 2026. **\[FATTO, A3, da metadati ufficiali e studi legali\]** Il calendario rilevante è questo.

| Obbligo | Data |
| --- | --- |
| Divieti e alfabetizzazione del personale (art. 4, riformulato) | Dal 2 febbraio 2025 |
| Trasparenza, per esempio informare chi interagisce con un'IA (art. 50) | Dal 2 agosto 2026 |
| Obblighi per i sistemi ad alto rischio dell'Allegato III | Dal 2 dicembre 2027 |

**\[FATTO, A3\]** A1 e A9 descrivono l'Omnibus come ancora in attesa di adozione o in discussione: A3, che ne riporta la pubblicazione, li supera. **\[FATTO (correzione tra report: A3 supera A1 e A9)\]**

L'Allegato III, punto 5, lettera c, classifica ad alto rischio i sistemi per la valutazione del rischio e la determinazione del prezzo di persone fisiche nelle assicurazioni vita e malattia. **\[FATTO, A3, comunicato EIOPA\]** L'analisi e il confronto di polizze danni di imprese non rientrano in questa voce per la lettura prevalente. **\[OPINIONE (interpretazione), A3\]** Le polizze collettive vita e malattia dei dipendenti vanno trattate con cautela: estrarne le coperture probabilmente non è "valutazione del rischio", stimare rischi o premi per singolo dipendente sì. **\[OPINIONE, A3\]** Il parere EIOPA del 6 agosto 2025, rivolto alle autorità di vigilanza, chiede comunque in modo proporzionato governo dei dati, documentazione, trasparenza e sorveglianza umana anche per i sistemi non ad alto rischio. **\[FATTO, A3\]**

**Requisiti di prodotto.** Nessuno scoring o pricing individuale su vita e salute; una scheda interna del sistema con la valutazione documentata di non alto rischio; nessun chatbot rivolto al cliente nella prima fase, o dichiarazione esplicita dell'interazione con un'IA; formazione documentata di chi valida. **\[FATTO, Context v3; OPINIONE, A3\]**

### 6. Conservazione

I distributori conservano la documentazione per la durata del rapporto e, in ogni caso, per almeno cinque anni dalla sua cessazione, in modo ordinato e tale da garantirne sicurezza, integrità e riservatezza (art. 67 Reg. IVASS 40/2018, come modificato nel 2020). **\[FATTO, A3\]** Se il contratto non è concluso, il termine decorre dall'ultima comunicazione (FAQ IVASS 1.21); la conservazione presso terzi è ammessa se rispetta gli stessi requisiti. **\[FATTO, A3\]**

Quali prodotti della macchina siano "documentazione" da conservare e quali artefatti tecnici possano essere cancellati presto non è chiarito. **\[OPINIONE (da verificare con un legale), A3\]**

**Requisito di prodotto.** Conservazione a doppio binario: il fascicolo di distribuzione (originali, informativa, esigenze, raccomandazione firmata, registro di validazione) per la durata del rapporto più cinque anni; gli artefatti tecnici intermedi cancellati a breve, salvo quelli che provano la validazione. **\[FATTO, Context v3; OPINIONE, A3\]**

### 7. Responsabilità professionale

Ogni intermediario deve avere una polizza di responsabilità civile professionale con massimali minimi di 1.564.610 euro per sinistro e 2.315.610 euro all'anno, in vigore dal 9 ottobre 2024. **\[FATTO, A3, fonte IVASS\]** Se un errore della macchina validato da una persona arriva al cliente, ne risponde il distributore per negligenza professionale. **\[OPINIONE (interpretazione), A3\]**

Il registro della validazione è la prova della diligenza, ma può anche documentare che un punto non è stato controllato. Per questo deve registrare che cosa è stato verificato, campo per campo, e non solo un "approvato". **\[OPINIONE, A3\]**

**Requisito di prodotto.** Registro della validazione campo per campo: stato (verificato, modificato, respinto), autore, ora, riferimento alla pagina del documento originale. Gate bloccante: nessun output esportabile senza approvazione. Registro immutabile delle operazioni, con versione del modello e del prompt. **\[FATTO, Context v3; OPINIONE, A3\]**

### 8. Le regole che non pesano, o pesano poco

| Regola | Perché pesa poco | Requisito o cautela | Stato |
| --- | --- | --- | --- |
| Antiriciclaggio (D.Lgs. 231/2007; Reg. IVASS 44/2019) | Gli obblighi amministrativi riguardano gli intermediari che operano nei rami vita | Escludere le polizze vita, o trattarle in sola lettura | FATTO (secondo A3) |
| Resilienza operativa digitale (DORA, Reg. UE 2022/2554) | Non si applica agli intermediari che sono micro, piccole o medie imprese | Restano gli obblighi GDPR sui fornitori | FATTO |
| Cybersicurezza (NIS2, D.Lgs. 138/2024) | Il settore assicurativo non risulta negli allegati | Nessuno | STIMA (da verificare sul testo) |
| Reclami (Reg. ISVAP 24/2008) | I broker rispondono entro 45 giorni | Esportazione del fascicolo su richiesta | FATTO (da verificare) |

**\[FATTO o OPINIONE (interpretazione) secondo A3, come indicato\]** La bozza segnalava già che l'antiriciclaggio riguarda soprattutto i rami vita, e A3 lo conferma. **\[FATTO, bozza 2.5 e A3\]** La verifica dell'identità del cliente resta comunque richiesta dalle compagnie, e le sanzioni internazionali valgono per tutti. **\[OPINIONE, bozza 2.5\]**

### 9. L'obbligo Cat Nat

Dalla legge di bilancio 2024 (L. 213/2023, art. 1, cc. 101-111) le imprese con sede in Italia devono assicurare terreni, fabbricati, impianti, macchinari e attrezzature contro sisma, alluvione e frana. Le scadenze sono state fissate dal DL 39/2025: grandi imprese 31 marzo 2025, medie 1° ottobre 2025, piccole e micro 31 dicembre 2025, con proroghe per alcuni settori. **\[FATTO, A9, fonte MIMIT\]** L'impresa che non si assicura non perde la libertà di operare, ma se ne tiene conto nell'assegnazione di contributi pubblici. Le compagnie hanno invece un obbligo a contrarre, con sanzioni IVASS da 100.000 a 500.000 euro. **\[FATTO, A9, fonte MIMIT\]** Il limite massimo dello scoperto, riportato da A9 come 15% fino a 30 milioni di somme, viene da un ricordo dell'autore del report e va verificato sul decreto. **\[STIMA (fonte debole: ricordo dell'autore del report, da verificare sul decreto), A9\]**

**Requisito di prodotto.** Un controllo di conformità Cat Nat per cliente: beni soggetti all'obbligo, ubicazioni, data di stipula, scoperti e massimali rispetto ai vincoli di legge. **\[OPINIONE, A9\]**

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Dove passa esattamente il confine tra strumento interno, informazione e consulenza | Decide che cosa si può mostrare a un cliente test | Avvocato di distribuzione assicurativa |
| Recepimento nel CAP e nei regolamenti IVASS delle deroghe per i grandi rischi | Decide quali moduli informativi servono per ogni polizza | Avvocato regolamentare |
| Ruolo privacy di chi costruisce l'infrastruttura rispetto al broker che la usa | Decide chi firma con i fornitori e chi può riusare i dati | Avvocato privacy |
| Testo integrale del provvedimento del Garante del 12 febbraio 2026 | È la base del vincolo sul riuso dei dati, oggi nota da fonte secondaria | Avvocato privacy |
| Quali artefatti tecnici sono documentazione da conservare | Decide la politica di conservazione | Avvocato di distribuzione; compliance di un broker |
| Testo consolidato dell'AI Act dopo il Reg. 2026/1744 | A3 non l'ha letto su fonte primaria | Avvocato esperto di AI Act |
| Vincoli tecnici del decreto sul Cat Nat | Servono al controllo di conformità | Avvocato o tecnico assicurativo, testo in Gazzetta |

## 0.8 Il consolidamento

**In sintesi.** Un **roll-up** è una strategia che compra molti operatori piccoli e li integra in una piattaforma. Nel brokeraggio il motore economico è l'**arbitraggio dei multipli**: i broker piccoli si comprano a multipli dell'EBITDA più bassi di quelli a cui vengono valutate le piattaforme che li aggregano. In Italia il consolidamento è reale e affollato: circa 100 operazioni nel brokeraggio tra il 2023 e il 2025 e almeno sei piattaforme sostenute da fondi di private equity. I multipli pubblici per target italiani piccoli quasi non esistono. Integrare un broker italiano significa integrare denaro e contratti prima ancora che dati: conti separati, accordi di incasso firmati compagnia per compagnia, collaboratori, incarichi dei clienti. La tecnologia può rendere più rapide la due diligence e l'integrazione, ma non trattiene le persone, che sono la prima causa di perdita di valore. Per il Context v3 il consolidamento è il terzo passo della tesi, praticabile solo dopo che la tecnologia funziona.

### Come funziona un roll-up di broker

**L'arbitraggio dei multipli.** Un'analisi di FTI Consulting descrive il consolidamento europeo come guidato dal divario tra i multipli dei target e quelli delle piattaforme acquirenti. **\[FATTO, A8, fonte FTI Consulting\]** Un broker piccolo comprato a 8-10 volte l'EBITDA vale di più appena entra in una piattaforma valutata 15-20 volte. **\[STIMA, A8: esempio illustrativo\]**

**La struttura tipica di un'acquisizione.** Una parte del prezzo è pagata al closing; una parte è un **earn-out**, cioè un pagamento differito e legato ai risultati futuri; il venditore può reinvestire parte del prezzo nella società acquirente (**rollover**); i producer chiave ricevono incentivi a restare. **\[FATTO, A8, da operazioni documentate\]** Nell'acquisizione di PSC da parte di Ardonagh, amministratori e manager hanno reinvestito circa il 26% delle loro partecipazioni. **\[FATTO, A8\]**

**Il finanziamento.** Le piattaforme comprano anche a debito: Baldwin ha 3,1 miliardi di dollari di debito netto su un valore d'impresa di 7,7; in Italia Edge ha collocato nel 2025 un'obbligazione garantita fino a 40 milioni di euro. **\[FATTO, A8\]**

### Quanto si paga

| Operazione | Anno | Multiplo | Natura del dato |
| --- | --- | --- | --- |
| Gallagher / AssuredPartners (USA) | 2024 | 14,3 volte l'EBITDA pro forma, 11,3 al netto di benefici fiscali e sinergie | FATTO (dichiarazione dell'azienda) |
| Aon / USI (USA) | 2026 | 14,5 volte l'EBITDA "sinergizzato"; circa 17 secondo un analista | FATTO (dichiarazione dell'azienda) e STIMA (analisti) |
| Sequence e DFO / Baldwin (USA) | 2026 | circa 20 volte l'EBITDA rettificato degli ultimi dodici mesi | FATTO (dichiarazione dell'azienda) |
| Howden / Assiteca (Italia) | 2022 | circa 15,7-15,8 volte l'EBITDA; circa 3 volte i ricavi | STIMA (ricercatori, su dati pubblici) |
| Brera / GBSAPRI (Italia) | 2024 | circa 2,5 volte i ricavi | STIMA (su indiscrezioni) |
| Mediana del private equity italiano, tutti i settori | 2024 | 11,1 volte l'EBITDA | FATTO (Osservatorio LIUC, non specifico per i broker) |
| Broker piccoli negli Stati Uniti | recente | 11,5-11,9 volte l'EBITDA | STIMA (società di advisory specializzate) |

**\[FATTO o STIMA, A4, A8 e A9, come indicato\]** Un commentatore italiano parla di multipli che superano in alcuni casi 15-18 volte l'EBITDA; è un'opinione senza dati. **\[OPINIONE, A8 e A9, fonte Insurzine\]** Non esistono multipli pubblici per target italiani piccoli. **\[FATTO, A4, A8 e A9: lacuna\]**

**Assiteca: tre multipli, un'operazione.** I report danno per Assiteca tre cifre diverse, e sono coerenti. A9 calcola circa 2,7 volte le commissioni dividendo il valore del 100% del capitale (circa 240 milioni) per circa 90 milioni di commissioni. A8 calcola circa 3,0 volte i ricavi lordi dividendo il valore d'impresa, che include la posizione finanziaria netta (circa 265 milioni), per 87 milioni di ricavi lordi. A4 e A8 stimano circa 15,7-15,8 volte l'EBITDA dell'esercizio 2021, che era di circa 16,8 milioni. **\[STIMA: riconciliazione dell'autore sulle cifre dei report\]** La lezione vale per ogni due diligence: un multiplo non si legge senza sapere che cosa c'è al numeratore e al denominatore. **\[OPINIONE\]**

**GBSAPRI: un dato ambiguo.** A4 e A8 riportano "circa 50 milioni" per l'acquisizione del 70%, da indiscrezioni, senza chiarire se sia il prezzo della quota o il valore del 100%. **\[FATTO, A4 e A8: valore non confermato\]** Il multiplo di 2,5 volte i ricavi dipende da questa lettura.

I multipli dei grandi consolidatori globali sono saliti da circa 14 volte nel 2024 a circa 17-22 nel 2026, a seconda delle rettifiche. Le rettifiche ("sinergizzato", "rettificato dal venditore", "al netto dei benefici fiscali") spostano il multiplo anche di 3-5 punti. **\[OPINIONE, A8\]** In due diligence bisogna sempre ricostruire l'EBITDA pulito.

### Quanto consolidamento c'è in Italia

Le fonti sul numero di operazioni misurano perimetri diversi.

| Fonte | Perimetro | Dato |
| --- | --- | --- |
| EY per Italian Insurtech Association, luglio 2026 | Brokeraggio italiano, 2023-2025 | circa 100 operazioni, +72% |
| FTI Consulting, marzo 2026 | Tutto il settore assicurativo italiano | 68 operazioni nel 2025, contro 31 nel 2024 |
| MarshBerry | Operazioni italiane annunciate nel brokeraggio | 57 nel 2025, contro 20 nel 2024 |

**\[FATTO, A4, A8 e A9\]** Le tre serie non si sommano e non si confrontano tra loro; concordano sulla direzione: il ritmo è più che raddoppiato tra il 2024 e il 2025. **\[OPINIONE\]**

**Le piattaforme.** Almeno sei piattaforme sostenute da fondi operano in Italia. **\[FATTO, A8\]**

| Piattaforma | Sponsor | Dati dichiarati |
| --- | --- | --- |
| Edge Group | AnaCap, circa il 65% dal 2025 | 24 integrazioni; circa 400 milioni di premi e 70 milioni di ricavi a maggio 2026 |
| GBSAPRI | Brera Partners, 70% dal 2024 | circa 350 milioni di premi; 45 milioni di commissioni; 7 acquisizioni |
| Wide Group | Pollen Street, minoranza dal 2023 | 23 acquisizioni; nel 2026 in corso la ricerca di un nuovo azionista |
| Consulbrokers | J.C. Flowers, 79% | circa 20 milioni di ricavi nel 2025; obiettivo 80 milioni nel 2028 |
| Howden Italia, con Assiteca | Howden (General Atlantic, CDPQ, Hg) | 130,3 milioni di ricavi; 1,2 miliardi di premi; 875 persone |
| PIB Group Italia | Apax | sei società dal 2023; margine EBITDA dichiarato salito dal 25% al 40% nel 2024 |

**\[FATTO, A8 e A9, da comunicati e stampa di settore\]** Operano anche acquirenti internazionali come Ardonagh (Mediass, 2024), Acrisure (Double S e Alta Broker) e Willis (SMB Scala & Mansutti). **\[FATTO, A4\]** Sul segmento dei micro-broker PMI c'è un concorrente in più: Wopta, un'MGA, ha acquisito nel 2026 due micro-broker lombardi. **\[FATTO, A9, comunicato della società\]**

**L'offerta di target.** I broker iscritti sono 5.821, molti piccoli. **\[FATTO, A9\]** Oltre il 60% delle persone fisiche iscritte al RUI ha tra 41 e 65 anni. **\[FATTO, A8, dato IVASS sul 2024, non specifico per i broker\]** Il 59,8% dei soci AIBA dichiara forti difficoltà a trovare personale. **\[FATTO, A9, sondaggio AIBA\]** L'offerta c'è; il problema è che i target senza successore sono spesso anche quelli in cui il titolare "è" il portafoglio. **\[OPINIONE, A8\]**

### L'esempio del micro-broker

A9 costruisce un esempio sul profilo medio dei piccoli broker. **\[STIMA, A9\]**

| Voce | Valore | Natura |
| --- | --- | --- |
| Provvigioni del micro-broker | circa 900.000 euro | FATTO (media di un campione dell'Osservatorio sul brokeraggio, dati 2018-2020) |
| Margine EBITDA | 20%, cioè 180.000 euro | STIMA (ipotesi) |
| Prezzo | 2 volte le provvigioni, cioè 1,8 milioni; equivale a 10 volte l'EBITDA | STIMA (ipotesi) |
| Margine dopo l'integrazione tecnologica | 35%, cioè 315.000 euro | STIMA (ipotesi) |
| Multiplo effettivo pagato | circa 5,7 volte il nuovo EBITDA | STIMA (calcolo) |

Il calcolo torna. **\[STIMA: verifica aritmetica\]** Il riferimento usato da A9 per rendere plausibile il 35% è il margine dichiarato da PIB Group Italia, salito al 40%. **\[FATTO, A9, fonte stampa\]** A8 arriva alla stessa logica dal lato del valore: 1,1 milioni di EBITDA in più su un broker da 20 milioni, valutati 10 volte, valgono circa 11 milioni di capitale. **\[STIMA, A8\]** Per entrambi i report la tesi della leva sul margine è plausibile ma resta un'ipotesi. **\[OPINIONE, A8 e A9\]**

### Che cosa rende integrabile un broker piccolo

| Fattore | Integrabile | Difficile da integrare | Che cosa può fare la tecnologia |
| --- | --- | --- | --- |
| Dipendenza dal titolare | Relazioni distribuite su più persone | Il titolare è il portafoglio | Mappare chi gestisce quale cliente |
| Concentrazione dei clienti | Primi dieci clienti sotto il 30% dei ricavi | Uno o due clienti valgono il 20% o più | Analisi automatica delle provvigioni per cliente e scadenza |
| Qualità dei dati | Gestionale unico, anagrafiche pulite, polizze in PDF ricercabili | Excel, scansioni, conoscenza nella testa delle persone | Stimare il costo di migrazione su un campione di documenti |
| Accordi con le compagnie | Trasferibili, senza clausole di cambio di controllo | Accordi personali, rischi piazzati tramite agenzie | Censire accordi e provvigioni per compagnia |
| Collaboratori di sezione E | Contratti scritti, retrocessioni documentate | Reti informali, clienti "del collaboratore" | Riconciliare retrocessioni e polizze |
| Compliance | Questionari e governo del prodotto documentati | Lacune nel fascicolo | Verificare il fascicolo dei clienti, con controllo umano |
| Producer chiave | Earn-out e rollover allineati, patti di non concorrenza | Producer pronti a uscire | Nulla: la tecnologia non trattiene le persone |

**\[OPINIONE, A8, basata sulle evidenze del report\]** Due elementi italiani si aggiungono al quadro. Il primo è il denaro: ogni broker acquisito porta il proprio conto separato o la propria fideiussione, accordi ex art. 118 firmati compagnia per compagnia e titoli in stati diversi, da quadrare alla data del closing (capitolo 0.5). **\[OPINIONE, A4\]** Il secondo sono i contratti con i clienti: l'incarico è del cliente verso il broker acquisito, e con ogni probabilità va riconfermato o ceduto con il suo consenso. **\[OPINIONE (da verificare con un legale), A3\]** La regola del codice ACB sulle provvigioni al broker cessante (capitolo 0.4) pesa sugli stessi trasferimenti. **\[FATTO, A9\]**

A3 elenca i punti che le fonti pubbliche non risolvono: passaggio tra sezioni del RUI, regime dei micro-broker che diventano collaboratori di un'altra società, cessione dei dati personali nella cessione di portafoglio, effetti sulle collaborazioni orizzontali in essere. **\[OPINIONE (da verificare con un legale), A3\]** Una regola è certa: una società iscritta come collaboratore non può operare tramite un'altra società (FAQ IVASS 4.1). **\[FATTO, A3\]**

La vigilanza segue il consolidamento. Dei 700 reclami trattati da IVASS verso intermediari, 368 riguardano broker, con rilievi su adeguatezza e trasparenza; un commentatore segnala criticità di governo del prodotto, controlli e condotta nelle realtà aggregate. **\[FATTO, A8\]** Chi compra eredita anche il rischio di compliance del venduto. **\[OPINIONE, A8\]**

### Perché i roll-up distruggono valore

A8 documenta cinque cause, tutte osservate in operazioni recenti. **\[FATTO, A8, salvo dove indicato\]**

| Causa | Caso documentato |
| --- | --- |
| Perdita di persone e clienti | Circa 275 ex dipendenti di Brown & Brown sono passati a una nuova società di Howden negli Stati Uniti, portando clienti per circa 23 milioni di dollari di ricavi annui |
| Debito in una fase di tassi alti | Baldwin: 3,1 miliardi di dollari di debito netto |
| Crescita organica debole nascosta dalle acquisizioni | Baldwin: 30% di crescita complessiva contro circa 2% organica in un trimestre del 2026 (fonte terza) |
| Sinergie inferiori alle attese | Aon / NFP: 30 milioni di dollari di sinergie dichiarate e un effetto netto di −20 punti base sul margine nel primo anno |
| Prezzo troppo alto | Scetticismo degli analisti sull'acquisizione di McGriff da parte di Marsh |

Tra i piccoli broker acquisiti dalla stessa piattaforma italiana i margini andavano da circa il 5% a circa il 48%. **\[FATTO, A8\]** Senza dati affidabili sul target, il prezzo è una scommessa. **\[OPINIONE\]**

### Che cosa significa per il progetto

Il Context v3 mette il consolidamento al terzo passo: il valore sta nell'infrastruttura, e il roll-up diventa praticabile solo quando la tecnologia rende integrabili portafogli e processi eterogenei. La forma, rete di broker o società aggregata, resta aperta. **\[FATTO, Context v3\]** A8 indica la tecnologia come "macchina di integrazione e due diligence" più che come promessa di produttività. **\[OPINIONE, A8\]** A9 aggiunge che il consolidamento sostituisce il costo di acquisizione dei clienti, che la tecnologia documentale non riduce, con il prezzo di acquisto di un portafoglio. **\[OPINIONE, A9\]**

Restano prerequisiti che la tecnologia non risolve: iscrizione al RUI, un responsabile della distribuzione, capacità finanziaria, accesso alle compagnie, un management con esperienza e capitale per competere con fondi già insediati. I venditori scelgono l'acquirente anche per reputazione e certezza del prezzo. **\[OPINIONE, A8\]** Il Volume 5 tratta il modello operativo e il kit di due diligence.

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Multipli effettivi pagati per broker piccoli italiani | Senza questo dato l'arbitraggio è un'ipotesi | Advisor M&A di settore; banca che finanzia le piattaforme |
| Prezzo e quota dell'operazione GBSAPRI | È uno dei pochi riferimenti italiani | Advisor dell'operazione; stampa finanziaria |
| Effetti del cambio di controllo su accordi di incasso, conti separati e collaborazioni | Rischio e costo di integrazione | Avvocato M&A assicurativo |
| Regime RUI dei micro-broker integrati e trasferimento degli incarichi | Decide la forma giuridica del consolidamento | Avvocato di distribuzione; quesito a IVASS |
| Tassi reali di perdita di clienti dopo un'acquisizione | È il principale fattore di valore | Piattaforme che hanno integrato micro-broker; advisor |
| Età dei titolari e distribuzione dei broker per ricavi | Dimensiona l'offerta di target | AIBA, ACB, CBI; dati RUI estesi |

## 0.9 Chi ha già provato

**In sintesi.** L'idea di un broker costruito attorno all'AI non è nuova. Negli Stati Uniti Harper e Newfront sono broker veri, con licenza; WithCoverage vende una piattaforma di gestione del rischio a canone. Attorno a loro c'è una fascia di fornitori che vendono estrazione e confronto di documenti ai broker e alle compagnie (FurtherAI, Vantel, Outmarket, Cytora), e in Italia due strumenti già sul mercato, Navisio AI e IAssicurGPT. I grandi broker globali stanno industrializzando la stessa automazione con budget di centinaia di milioni. Quasi tutti i numeri di produttività disponibili sono dichiarazioni delle società o dei loro investitori, non misure indipendenti. Due lezioni ricorrono: la persona resta sempre nel ciclo sulla raccomandazione finale, e chi ha provato a vendere software ai broker è spesso finito a fare il broker o a farsi comprare.

### Come leggere i numeri di questo capitolo

Le aziende citate pubblicano risultati per raccogliere capitali o vendere un prodotto. Per ogni cifra il testo dice se è verificata su un documento ufficiale (un bilancio, un deposito presso la SEC), dichiarata dalla società, o stimata da terzi. **\[OPINIONE\]** Una cifra dichiarata non è falsa, ma non è una misura: non se ne conoscono la base, il campione e il metodo.

### I broker AI-nativi

**Harper (Stati Uniti).** È un broker con licenza che serve piccole imprese su rischi standardizzabili: infortuni sul lavoro, responsabilità civile generale e professionale, con oltre 160 compagnie. **\[FATTO, A1\]** Ha raccolto 46,8 milioni di dollari tra seed e serie A, round guidato da Emergence Capital a febbraio 2026; TechCrunch indica 54 milioni in totale dopo un aggiornamento. **\[FATTO, A1; la bozza riporta solo i 46,8 milioni\]** La società dichiara oltre 5.000 clienti in 13 mesi, più di 1.000 clienti al mese contro 20-30 di un team commerciale tradizionale, e coperture in 24-48 ore. **\[FATTO (dichiarazione dell'azienda, non verificata), A1\]** Un suo investitore parla di ricavi per venditore circa 30 volte superiori. **\[FATTO (dichiarazione dell'investitore, non verificata), A8\]** Il dato più istruttivo è un altro: i fondatori volevano vendere il servizio alle agenzie, hanno incontrato la loro resistenza e sono diventati broker. **\[FATTO, A1 e A8\]**

**Newfront (Stati Uniti).** Broker tecnologico per il mid-market, con oltre 120 producer, un portale cliente e automazione del piazzamento. **\[FATTO, A1, deposito SEC di WTW\]** È stato acquisito da WTW per 1,05 miliardi di dollari al closing più fino a 250 milioni di earn-out, con chiusura il 27 gennaio 2026, dopo una crescita organica del 20% annuo tra il 2018 e il 2024. **\[FATTO, A1, deposito SEC\]** I ricavi per addetto, stimati da un aggregatore in circa 186.000 dollari, sono in linea con quelli dei broker tradizionali. **\[STIMA di terzi, A8\]** A1 lo considera il comparabile più vicino a un broker relazionale con tecnologia; A8 lo usa come prova che una "leva 10x" non è dimostrata. **\[OPINIONE, A1 e A8\]** Le due letture sono compatibili: Newfront mostra che la tecnologia può creare valore di uscita senza moltiplicare la produttività. **\[OPINIONE\]**

**WithCoverage (Stati Uniti).** Secondo la bozza è una piattaforma di gestione del rischio che analizza e confronta le polizze con AI ed esperti, si fa pagare un canone fisso senza provvigioni, ha raccolto 42 milioni di dollari di serie B a gennaio 2026 con Sequoia e Khosla Ventures e serve oltre 550 aziende in forte crescita. **\[FATTO (dichiarazione dell'azienda o della stampa, non verificata), bozza 1.4; non verificato dai report A1-A9\]** I risparmi "oltre 100.000 dollari l'anno per cliente" e l'utile dichiarato non hanno una fonte indipendente. **\[FATTO (dichiarazione dell'azienda, non verificata), bozza 1.4\]**

**Che cosa si trasferisce.** La bozza legge Harper come conferma della tesi operativa e WithCoverage come prova che l'audit può essere il prodotto d'ingresso. Entrambe le letture vanno ridimensionate. Harper lavora su rischi standard di un mercato più grande, con accesso diretto a 160 compagnie: la cultura operativa si trasferisce, la meccanica di volume e le metriche no. **\[OPINIONE, A1\]** L'audit a canone di WithCoverage, in Italia, è consulenza riservata a un iscritto (capitolo 0.7). **\[OPINIONE fondata su A3\]** La differenza dichiarata dalla bozza resta valida: mercato italiano, formati eterogenei, poche interfacce di scambio, crescita per acquisizione. **\[OPINIONE, bozza 1.4\]**

### I fornitori di tecnologia

| Società | Che cosa fa | Dati verificati | Dichiarazioni non verificate |
| --- | --- | --- | --- |
| FurtherAI (USA) | Acquisizione delle richieste di quotazione, confronto di polizze, controlli per compagnie e broker; ingegneri affiancati al cliente | Serie A da 25 milioni di dollari guidata da a16z, ottobre 2025; 30 milioni in totale | "Miliardi di premi" processati |
| Vantel (USA) | Estrazione e confronto di polizze; confronto tra contratti e coperture | Finanziata da Y Combinator, inverno 2025 | Cinque polizze da 100 pagine confrontate in 5 minuti invece di 5 ore; "10+ ore a settimana", "30%" o "raddoppio" della produttività, a seconda della pagina |
| Outmarket (USA) | Lavoro documentale delle agenzie | 34,5 milioni di dollari raccolti (settembre 2026) | Oltre 300 agenzie clienti |
| Cytora (Regno Unito) | Acquisizione di documenti da PDF, email, Excel verso i sistemi delle compagnie | Acquisita da Applied Systems a settembre 2025; patrimonio netto negativo nel 2024 | Prezzo: "oltre 300 milioni" secondo una fonte, non divulgato secondo le altre |
| Navisio AI (Italia) | Piattaforma per intermediari: analisi di portafoglio, confronto di polizze e condizioni, normativa interrogabile; il proprietario è iscritto come broker | Iscrizione al RUI del proprietario | Tempi ridotti "fino al 90%"; "oltre 200 intermediari" |
| IAssicurGPT (Italia, Diagramma) | Funzione del gestionale IAssicur che carica polizze e quietanze dai PDF delle compagnie | Funzione documentata dal fornitore | Nessuna metrica pubblica |

**\[FATTO (verificato) o FATTO (dichiarazione dell'azienda, non verificata), A1, come indicato per colonna\]** Tre osservazioni. Primo: l'estrazione di dati dai PDF è ormai un mercato affollato, e conviene comprarla e misurarla più che costruirla da zero. **\[OPINIONE, A1\]** Secondo: i fornitori americani lavorano su formati standard (moduli ACORD, certificati di copertura) che in Italia non esistono. **\[OPINIONE, A1\]** Terzo: il rischio competitivo più vicino non è Harper ma un fornitore italiano come Navisio, o un gestionale come IAssicur che aggiunga analisi e confronto, rendendoli una commodity per tutti i broker. **\[OPINIONE, A1\]** Il Volume 2 e l'Allegato D descrivono come provare questi strumenti su polizze sintetiche.

### I grandi broker

| Broker | Che cosa sta facendo | Numeri | Natura del dato |
| --- | --- | --- | --- |
| Marsh | Programma di efficienza "Thrive"; piattaforma di piazzamento per lo specialty londinese con approvazione del broker su ogni proposta | circa 500 milioni di dollari di costi in tre anni per circa 400 milioni di risparmi annui; costi finora soprattutto per uscite di personale; circa il 20% di efficienza su sistemi AI che elaborano migliaia di documenti a settimana | FATTO (deposito SEC) per i costi; FATTO (dichiarazione del management, non misura indipendente, senza base nota) per il 20% |
| Aon | Piattaforma proprietaria di piazzamento; piano di efficienza | 160 milioni di dollari di risparmi netti nel 2025; +90 punti base di margine | FATTO (deposito SEC) |
| WTW | Programma di trasformazione | Obiettivo di 450 milioni di dollari di risparmi annui con 1,175 miliardi di costi | FATTO (comunicato dell'azienda) |
| Gallagher | Uso interno diffuso dell'AI | circa 1,5 miliardi di dollari di spesa tecnologica annua, circa il 10% per l'AI; circa 40.000 dipendenti che la usano | FATTO (dichiarazione dell'azienda all'Investor Day, non verificata) |

**\[FATTO (verificato) o FATTO (dichiarazione dell'azienda, non verificata), A1 e A8\]** I benefici dichiarati dai grandi broker si misurano in decine o poche centinaia di punti base di margine, non in multipli di produttività. **\[OPINIONE, A8\]** In tutti i casi documentati una persona approva la raccomandazione finale. **\[FATTO, A1\]** Gli incumbent possono comprare gli stessi strumenti dai fornitori: un vantaggio tecnologico è temporaneo se non diventa capacità di esecuzione o un patrimonio di dati misurato. **\[OPINIONE, A8\]**

### Il segmento PMI in Italia e in Europa

| Caso | Modello | Esito | Lezione |
| --- | --- | --- | --- |
| Lokky (Italia) | Broker digitale per micro-imprese, professionisti e freelance | Circa 5 milioni di euro raccolti; acquisita da Hiscox a giugno 2025, a condizioni non pubbliche | La vendita diretta online alle micro-imprese non ha raggiunto una scala autonoma **\[OPINIONE, A9\]** |
| Yolo Group (Italia, quotata su Euronext Growth Milan) | Broker "phygital" e piattaforma per partner | Ricavi 2025 13,6 milioni (+39%), EBITDA −1,1 milioni; ricavi da servizi tecnologici per terzi scesi da 3,4 a 2,1 milioni, commissioni di intermediazione a 9,7 milioni | In Italia il software per intermediari vende meno della distribuzione **\[OPINIONE, A9\]** |
| Wopta (Italia) | MGA con una rete di partner e un agente AI | Ricavi 2025 5 milioni, EBITDA dichiarato positivo; valutazione oltre 100 milioni dichiarata; ha acquisito due micro-broker | Concorrente diretto sul consolidamento di micro-broker PMI **\[OPINIONE, A9\]** |
| Next Insurance (USA) | Compagnia digitale per piccole imprese | Valutata 4 miliardi di dollari nel 2021, ceduta a ERGO nel 2025 a una valutazione di 2,6 miliardi | Anche il caso migliore è finito a una compagnia **\[OPINIONE, A9\]** |
| CoverWallet (USA) | Broker digitale per piccole imprese | Acquisito da Aon nel 2019, poi chiuso; il marchio rinvia a un'altra attività di Aon | Il digitale puro sulle piccole imprese non ha retto da solo **\[OPINIONE, A1: cause non pubbliche\]** |

**\[FATTO, A1 e A9, da bilanci, comunicati e stampa; le valutazioni di Wopta sono dichiarate\]** A9 ne trae una conclusione per il progetto: la leva vera sulle PMI è il portafoglio già esistente, non l'acquisizione di clienti online. **\[OPINIONE, A9\]** Il caso Yolo pesa sulla decisione aperta tra uso interno e prodotto per terzi. **\[OPINIONE, A9\]**

### Che cosa insegnano, nel complesso

| Lezione | Su che cosa poggia | Forza |
| --- | --- | --- |
| La persona resta nel ciclo sulla raccomandazione | Tutti i casi documentati, dai grandi broker a Harper | Fatto |
| Vendere software ai broker è difficile; diventare broker o farsi comprare è l'esito frequente | Harper, Yolo, Lokky, Cytora, CoverWallet | Opinione su più casi |
| L'estrazione documentale è una commodity in via di formazione | Numero di fornitori e funzioni già nei gestionali | Opinione |
| Nessuna fonte indipendente dimostra una leva 10x | Newfront; dati dei grandi broker; natura delle dichiarazioni di Harper | Opinione su fatti |
| Il valore si realizza spesso in un'uscita verso un incumbent | Newfront, Next, Lokky, Cytora | Fatto sui casi; opinione sulla regola |

**\[OPINIONE (sintesi dell'autore su A1, A8 e A9)\]**

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Risultati verificati di Harper, Vantel, Navisio e FurtherAI | Tutte le metriche di produttività sono dichiarate | Clienti di riferimento dei fornitori; prova su polizze sintetiche (Allegato D) |
| Dati di WithCoverage | Vengono solo dalla bozza | Ricerca dedicata; documenti della società |
| Strategia AI di Howden e dati primari su Gallagher | Sono tra i principali consolidatori | Analista azionario di settore |
| Prezzo dell'acquisizione di Cytora | Conflitto tra fonti | Bilanci di Applied Systems |
| Benchmark europei sulle PMI (Simply Business, Superscript, Finanzchef24 e altri) | A9 li cita ma non li ha verificati | Analista insurtech europeo |
| Quanti broker italiani usano già Navisio, IAssicurGPT o strumenti simili | Misura quanto in fretta l'estrazione diventa commodity | Fornitori; AIBA |

## 0.10 La tesi e i suoi limiti

**In sintesi.** La tesi ha tre passi: costruire e dimostrare una tecnologia che governa dati, formati e pipeline documentali di un broker; usarla per essere molto più efficienti di un broker tradizionale; sfruttarla poi nel consolidamento del mercato. Il problema dei dati è reale ma va formulato con precisione: i flussi strutturati sono già governati a pezzi, da gestionali e piattaforme di scambio, mentre, per quanto risulta da fonti pubbliche (A7), nessuno governa in modo trasversale e documentale il dato che lega cliente, broker, compagnie e documenti: è un'osservazione, non un fatto assoluto. L'ipotesi di leva è moltiplicare i documenti e le polizze gestibili per addetto; le evidenze pubbliche oggi sono dichiarazioni, non misure indipendenti, di guadagni del 20-30% su singoli processi e di qualche punto di margine, non di multipli. La Fase 1 deve misurare la leva con metriche definite prima di iniziare. Il capitolo chiude con i punti in cui la tesi rischia di essere troppo ottimistica.

### La tesi in tre passi

Il Context v3 la formula così. **\[FATTO, Context v3\]**

1. **Costruire e dimostrare la tecnologia** che governa dati, formati, sorgenti e pipeline documentali di un broker.
2. **Usarla per essere più efficienti** di un broker tradizionale su processi, tempi e qualità, riducendo il tempo speso in compliance, back office e lavoro manuale.
3. **Sfruttarla nel consolidamento**: roll-up e integrazione, come rete o come società aggregata, quando la tecnologia esiste e funziona.

Il valore sta nell'infrastruttura; il consolidamento viene dopo, perché è la tecnologia a rendere integrabili portafogli e processi diversi. **\[FATTO, Context v3\]** Se la tecnologia resterà per uso interno di un broker o diventerà un prodotto per terzi è una decisione aperta, con un trigger: le metriche della Fase 1 e il riscontro di broker reali. **\[FATTO, Context v3\]**

### Il problema dei dati, riformulato

La tesi è nata da una frase raccolta da interlocutori del settore: nel mercato nessuno governa davvero i dati. **\[FATTO, Context v3\]** Il report A7 l'ha verificata e conclude che è falsa nella forma forte e vera nella forma debole. **\[OPINIONE, A7, fondata sulle fonti\]**

**Chi governa già qualcosa.** AIBA Digital scambia contabilità e quietanze con le compagnie aderenti; il tracciato SHARE gestisce il ritorno di dati dalle compagnie; i gestionali hanno connettori compagnia per compagnia e alcuni producono estratti conto ed elenchi mensili; i grandi broker e alcune piattaforme di aggregazione hanno sistemi proprietari. **\[FATTO, A7\]**

**Che cosa nessuno dichiara di fare.** Un modello canonico unico che leghi polizza, appendici, titoli, banca, fatture e sinistri con la provenienza di ogni campo; la riconciliazione automatica tra sorgenti diverse; la validazione umana registrata come evento verificabile. **\[FATTO, A7: assenza di evidenze pubbliche\]** La formulazione adottata dal Context v3 è quindi: i flussi strutturati sono governati a silos da piattaforme e gestionali; per quanto risulta da fonti pubbliche (A7), nessuno governa in modo trasversale e documentale il dato del broker. **\[OPINIONE (osservazione, non fatto assoluto), A7; formulazione adottata dal Context v3\]**

**Perché i dati non sono governati.** A7 indica cause che la tecnologia da sola non rimuove. Le compagnie non hanno interesse a un tracciato unico, che costa a loro e giova agli intermediari. AIBA Digital fa da traduttore e non chiede alle compagnie di cambiare nulla, il che abbassa la barriera ma lascia molti formati da mantenere. I gestionali vendono i connettori come prodotto, e uno standard li banalizzerebbe. Un piccolo broker non ha la massa per chiedere flussi. Il dato di maggior valore è documentale. Non esiste un obbligo regolatorio. **\[FATTO e OPINIONE, A7\]** Anche gli standard non arriveranno in tempo per aiutare: la proposta europea sull'accesso ai dati finanziari (FIDA) rinvia la non-vita diversa dall'auto a una fase successiva, e Lloyd's ha chiuso il suo programma di digitalizzazione Blueprint Two a marzo 2026. **\[FATTO, A7\]** La tecnologia deve quindi funzionare con formati eterogenei come condizione permanente. **\[OPINIONE, A7\]**

Dei dieci ostacoli principali che A7 elenca, quattro sono risolvibili in buona parte con la tecnologia (tracciati diversi per compagnia, contenuto di polizza non strutturato, riconciliazione tra titoli, banca e rimesse, abitudini relazionali con riserva), quattro solo in parte (collegamento tra appendici e polizza, assenza di interfacce dei gestionali, statistiche sinistri, titolarità dei dati) e due non lo sono, perché richiedono accordi: l'accesso ai portali delle compagnie e la mancanza di uno standard nazionale. **\[OPINIONE, A7\]** Il vantaggio competitivo della Fase 1 sta, per A7, nell'estrazione con revisione umana, nel collegamento tra documenti e nella riconciliazione. **\[OPINIONE, A7\]**

### L'ipotesi di leva e come si misura

**L'ipotesi.** Moltiplicare di molte volte il volume di documenti gestibili per addetto; il margine ne è la conseguenza, non l'obiettivo. **\[FATTO, Context v3: ipotesi da validare\]**

**Le metriche.** La leva si misura con quattro grandezze, sempre confrontate tra lavoro manuale e lavoro assistito sugli stessi documenti. **\[FATTO, Context v3\]**

| Metrica | Che cosa misura | Perché può ingannare |
| --- | --- | --- |
| Documenti per addetto | Volume lavorato in un periodo | Non distingue un DIP di tre pagine da condizioni di cento |
| Polizze per addetto | Capacità di servizio del portafoglio | Dipende dal mix di clienti e di rami |
| Ore per polizza, per processo | Costo umano residuo | Va misurata in modo controllato, non stimata |
| Costo per polizza | Ore per costo orario più costo della tecnologia | Il costo della tecnologia cresce con i volumi |

**\[OPINIONE per la colonna "Perché può ingannare"\]** Accanto alle metriche di leva servono quelle di qualità, che il Context v3 fissa come ipotesi di partenza da concordare con il CTO: accuratezza oltre il 95% sui campi di testata delle polizze in PDF digitale, 85-95% su massimali, franchigie e scoperti, 70-90% di completezza su garanzie ed esclusioni, nessuna affermazione senza fonte. **\[FATTO, Context v3: ipotesi ricavate da A2, non misure\]** Una leva ottenuta peggiorando la qualità non è una leva. **\[OPINIONE\]**

Il risparmio economico non coincide con le ore liberate: dipende anche da quante ore si traducono davvero in minori costi o in più clienti serviti, il **tasso di realizzo**. Nel modello di A8, passare da un realizzo del 70% a uno del 40% riduce il guadagno di margine dello scenario migliore da circa 550 a circa 240 punti base. **\[STIMA, A8\]** Va misurato anche questo.

**Che cosa dicono oggi le evidenze.**

| Evidenza | Valore | Natura |
| --- | --- | --- |
| Marsh, sistemi AI su documenti | circa 20% di efficienza | FATTO (dichiarazione del management, non misura indipendente) |
| Un broker non nominato, controllo polizze e certificati | fino al 30% di ore risparmiate | FATTO (dichiarazione di un broker anonimo, non verificata) |
| Modello di A8, broker corporate da 20 milioni | da +150 a +550 punti base di margine con il 20-60% di automazione | STIMA |
| Modello di A9, broker PMI | riduzione delle ore del 40-60% | STIMA (ipotesi del report) |
| Newfront | ricavi per addetto in linea con i broker tradizionali | STIMA (di terzi) |
| Harper | circa 30 volte i ricavi per venditore | FATTO (dichiarazione dell'investitore, non verificata) |

**\[FATTO, A1 e A8, come indicato; STIMA e ipotesi di A8 e A9\]** Nessuna fonte indipendente dimostra oggi una leva di molte volte su un broker. **\[OPINIONE, A8\]** Tra il 20-30% dichiarato (non misurato in modo indipendente) e il "molte volte" dell'ipotesi c'è uno scarto che la Fase 1 deve misurare, non presumere. **\[OPINIONE\]** Un esito plausibile e comunque utile è una leva forte su processi specifici (estrazione di dati di polizza, riconciliazione) e una leva modesta sull'organizzazione nel suo insieme. **\[OPINIONE\]**

**Il trigger sulla forma del prodotto.** A9 propone un criterio concreto per decidere se vendere la tecnologia a terzi: almeno tre broker pilota che pagano un canone sufficiente a coprire il costo di servizio, e una riduzione delle ore oltre il 40%. **\[OPINIONE, A9\]** È una proposta del report, non una decisione presa; il Context v3 lascia il trigger alle metriche della Fase 1. **\[FATTO, Context v3\]**

### Dove sta il vantaggio, se non nei dati dei clienti

Il Context v3 ha tolto i dati dei clienti dal vantaggio competitivo garantito: il titolare dei dati non è chi costruisce lo strumento, e riusarli per un dataset è un trattamento nuovo (capitolo 0.7). **\[FATTO, Context v3; A3\]** Il vantaggio va ridefinito su tre cose costruibili in modo lecito: la qualità misurata dell'infrastruttura, le tassonomie delle coperture, i dataset di valutazione costruiti su documenti pubblici o sintetici. **\[FATTO, Context v3\]** Per le PMI A9 osserva che i set informativi pubblici permettono di costruire un corpus di valutazione senza dati riservati. **\[OPINIONE, A9\]** Il rovescio è che anche i concorrenti possono farlo. **\[OPINIONE\]**

### I dieci punti in cui la tesi è troppo ottimistica

A8 elenca dieci punti, scritti per un broker corporate. La tabella li riprende e indica come cambiano per il target PMI. **\[OPINIONE, A8 per la prima colonna; OPINIONE dell'autore, su A3 e A9, per la seconda\]**

| # | Il rischio secondo A8 | Che cosa cambia per le PMI |
| --- | --- | --- |
| 1 | **La leva 10x non è dimostrata.** Newfront ha ricavi per addetto nella media; il dato di Harper è marketing | Nelle PMI i documenti sono più standard e la leva potenziale è più alta, ma la stima di A9 è un'ipotesi; se le ore reali per polizza sono poche, la leva vale meno |
| 2 | **Il ricavo segue le persone.** I producer se ne vanno con i clienti | Nei micro-broker il titolare è spesso il portafoglio: il rischio è più alto, non più basso |
| 3 | **Gli incumbent non stanno fermi.** Marsh, Aon, WTW e le piattaforme italiane comprano la stessa automazione | Nelle PMI il concorrente vicino è il fornitore italiano o il gestionale che aggiunge la funzione (capitolo 0.9) |
| 4 | **I risparmi non si realizzano da soli.** Le ore liberate non sono costi tagliati | In una struttura di due-cinque persone liberare mezzo addetto non riduce i costi: serve più portafoglio per persona |
| 5 | **Il gate umano limita l'automazione.** Le regole IDD impongono la revisione dove l'AI è più utile | Sotto le soglie dei grandi rischi gli obblighi sono pieni: più documenti da generare, ma ognuno da validare |
| 6 | **I dati non sono tuoi.** Titolarità, formati delle compagnie, clausole di cambio di controllo | Vale uguale; in più le ditte individuali sono persone fisiche |
| 7 | **L'arbitraggio dei multipli si sta chiudendo.** Con prezzi alti la tecnologia non compensa un ingresso caro | La concorrenza sui micro-broker è già arrivata (Wopta, PIB) |
| 8 | **Il ciclo dei premi domina.** In un mercato debole la leva operativa lavora al contrario | Vale uguale |
| 9 | **Interessi e incentivi delle compagnie sono marginali in Italia.** Copiare i margini americani è un errore | Vale ancora di più: i broker PMI hanno meno volume da portare alle compagnie |
| 10 | **I prerequisiti non sono tecnologici.** Iscrizione, responsabile della distribuzione, capacità finanziaria, accesso alle compagnie, capitale | Vale uguale: la Fase 1 ha solo la tecnologia |

A questi dieci le altre ricerche ne aggiungono tre, specifici del target.

- **La leva funziona solo con accordi diretti.** Nel modello di A9, le micro servite tramite agenzia restano in perdita anche con il 60% di ore in meno. **\[STIMA, A9\]** Se il portafoglio di un broker PMI passa in gran parte da agenzie, la tecnologia non basta a renderlo redditizio. **\[OPINIONE\]**
- **La domanda delle PMI è debole.** Tra i motivi per non assicurarsi, il 56% delle imprese indica premi troppo alti; l'84% non ha ancora la copertura Cat Nat obbligatoria. **\[FATTO, A9\]** Il gap di protezione non si trasforma da solo in ricavi. **\[OPINIONE, A9\]**
- **Una fase solo tecnologica può costruire uno strumento che nessuno adotta.** **\[OPINIONE, Context v3, sezione Rischi\]** La mitigazione prevista sono interviste ripetute e prove d'uso con almeno due broker veri già nella Fase 1. **\[FATTO, Context v3\]**

### Le condizioni di lavoro della Fase 1

Il Context v3 elenca anche rischi che riguardano il progetto più che la tesi. **\[FATTO, Context v3\]** Le condizioni dello stage non sono ancora scritte, e ciò che vi si produce potrebbe non essere utilizzabile. Nessun fondatore ha competenza tecnica, quindi serve un advisor tecnico indipendente per selezionare il CTO e rivedere le specifiche. I riferimenti tecnici disponibili sono in inglese e scritti da fornitori: per le polizze italiane non esistono benchmark, e il golden set proprio viene prima della scelta dei fornitori. Le abilitazioni sono rinviate, ma i tempi di iscrizione e di esame non si comprimono: quando si deciderà, partirà un orologio.

### Che cosa deve dimostrare la Fase 1

Le cinque domande del Context v3 sono il criterio con cui leggere i volumi successivi. **\[FATTO, Context v3\]**

1. Quali processi di un broker si possono governare con dati, pipeline e automazione, e con quale accuratezza?
2. Dove l'AI crea leva reale e dove no? Che cosa resta manuale per motivi di rischio o di relazione?
3. Che cosa serve per portare formati e sorgenti eterogenei (PDF, scansioni, email, Excel, portali) in un modello dati unico?
4. Quali verticali conviene studiare per primi e perché?
5. Qual è la forma giusta dell'infrastruttura: uso interno di un broker, rete o prodotto?

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Ore reali per polizza e per processo in un broker PMI | È la base di ogni metrica di leva | Studio dei tempi con due broker reali |
| Accuratezza di estrazione su polizze italiane | Le soglie del Context v3 sono ipotesi | Golden set, Fase 1 |
| Tasso di realizzo dei risparmi | Decide quanto della leva diventa margine | Broker test; consulente del lavoro |
| Quota di portafoglio PMI con accordi diretti | Decide dove la leva rende | Titolari di micro-broker |
| Disponibilità dei broker ad adottare o pagare uno strumento | Decide la forma del prodotto | Interviste e prove d'uso con broker reali |
| Condizioni scritte dello stage | Decide quali dati e processi si possono usare | Chi gestisce lo stage; un legale |

## 0.11 Glossario

**In sintesi.** Il glossario raccoglie 187 termini in nove gruppi: contratto e documenti, coperture e clausole, rami e prodotti, intermediazione, denaro, sinistri, coassicurazione e riassicurazione, regole, dati e tecnologia. La base è il glossario di A4 (152 termini), integrato con i termini di A9 per le PMI, di A3 per le regole e con quelli tecnici che i volumi successivi usano. Il simbolo ⚠ segnala i termini con più significati: sono quelli che un sistema di estrazione deve disambiguare dal contesto e che chi viene da fuori confonde più spesso. Per ogni termine sono indicati l'equivalente inglese e il capitolo del volume in cui compare; i termini tecnici sono spiegati per esteso nel Volume 2. Rispetto ad A4 sono state corrette due voci: l'esempio sui grandi rischi e il minimo della fideiussione.

### Contratto e documenti

| Termine | Definizione | Inglese | Cap. |
| --- | --- | --- | --- |
| Polizza ⚠ | Il documento che prova il contratto di assicurazione; a volte usato per indicare l'intero programma di un cliente | Policy | 0.1 |
| Contraente ⚠ | Chi stipula il contratto e paga il premio; spesso confuso con l'assicurato | Policyholder | 0.2 |
| Assicurato | Il titolare dell'interesse protetto, che subisce il danno | Insured | 0.2 |
| Vincolatario | Il soggetto a cui è vincolato l'indennizzo, per esempio la banca che ha finanziato un bene | Loss payee | 0.2 |
| Condizioni generali | Il testo standard della compagnia per un prodotto | General conditions | 0.6 |
| Condizioni particolari | Le deroghe e le specifiche concordate per il singolo cliente; prevalgono sulle generali | Special conditions | 0.6 |
| Condizioni di assicurazione | Il contratto vero e proprio: definizioni, norme comuni, sezioni, garanzie, esclusioni, sinistri | Policy wording | 0.6 |
| Scheda di polizza | Il documento con i dati del singolo cliente: ubicazioni, somme, massimali, franchigie, premio; detta anche frontespizio | Schedule | 0.6 |
| Set informativo | DIP, DIP aggiuntivo e condizioni di assicurazione con glossario; va consegnato prima della firma ed è pubblicato dalla compagnia | Pre-contractual information pack | 0.6 |
| DIP | Documento informativo precontrattuale standard europeo, di due-tre pagine e formato fisso | IPID | 0.6 |
| DIP aggiuntivo | Documento italiano che dettaglia il DIP: limiti, franchigie, reclami, costi | Additional IPID | 0.6 |
| Certificato | Attestazione di inclusione in una copertura, tipica di Lloyd's e delle coperture collettive | Certificate | 0.2 |
| Appendice | Documento che modifica una polizza durante la sua vita | Endorsement | 0.6 |
| Proposta ⚠ | La richiesta di copertura firmata dal cliente; a volte usato per l'offerta della compagnia o del broker | Proposal | 0.6 |
| Questionario | Il modulo con cui la compagnia raccoglie le informazioni sul rischio | Questionnaire | 0.6 |
| Capitolato | La specifica tecnica della copertura scritta dal broker e inviata al mercato | Placing slip, specification | 0.6 |
| Effetto ⚠ | L'inizio contrattuale della copertura; l'operatività può dipendere dal pagamento. Da non confondere con l'effetto liberatorio | Inception | 0.6 |
| Scadenza | La fine del periodo di copertura | Expiry | 0.6 |
| Tacito rinnovo | La proroga automatica della polizza in assenza di disdetta | Automatic renewal | 0.6 |
| Disdetta | La comunicazione di non rinnovo, entro il preavviso contrattuale | Non-renewal notice | 0.6 |
| Recesso | Lo scioglimento anticipato del contratto, per esempio dopo un sinistro | Cancellation | 0.6 |
| Programma assicurativo ⚠ | L'insieme coordinato delle polizze di un cliente o di un gruppo | Insurance programme | 0.1 |

### Coperture, limiti e clausole

| Termine | Definizione | Inglese | Cap. |
| --- | --- | --- | --- |
| Sezione | Una parte di una polizza multirischi dedicata a un tipo di rischio, per esempio incendio o furto | Section | 0.6 |
| Garanzia | Il singolo evento o danno coperto all'interno di una sezione | Cover | 0.6 |
| Partita | Una voce di somma assicurata, per esempio fabbricato o macchinari | Item | 0.6 |
| Ubicazione | Il luogo in cui si trova il rischio assicurato | Location | 0.6 |
| Somma assicurata | Il valore dei beni assicurati | Sum insured | 0.6 |
| Massimale ⚠ | Il limite massimo pagato in responsabilità civile, per sinistro, per persona, per anno o aggregato; spesso confuso con la somma assicurata | Limit of liability | 0.6 |
| Limite di indennizzo | Il limite massimo pagato per una garanzia dei danni ai beni | Limit of indemnity | 0.6 |
| Sottolimite | Un limite interno a una garanzia, in importo o in percentuale della somma | Sublimit | 0.6 |
| Franchigia ⚠ | Importo fisso del danno a carico dell'assicurato; esiste anche la franchigia temporale, in giorni o ore | Deductible | 0.6 |
| Scoperto | Percentuale del danno a carico dell'assicurato, spesso con un minimo | Percentage deductible | 0.6 |
| Esclusione | Un evento o un danno non coperto | Exclusion | 0.6 |
| Delimitazione | Una condizione che restringe l'ambito di una garanzia senza escluderla | Limitation | 0.6 |
| Carenza | Il periodo iniziale in cui una garanzia non opera | Waiting period | 0.6 |
| Rischi nominati | Forma di copertura che protegge solo dagli eventi elencati | Named perils | 0.6 |
| All Risks | Forma di copertura che protegge da tutto ciò che non è escluso | All risks | 0.6 |
| Regola proporzionale | Riduzione dell'indennizzo se la somma assicurata è inferiore al valore reale (art. 1907 c.c.) | Average | 0.6 |
| Deroga alla proporzionale | Tolleranza entro cui la regola proporzionale non scatta | Average waiver | 0.6 |
| Valore a nuovo | Indennizzo calcolato sul costo di ricostruzione o di riacquisto | Replacement value | 0.6 |
| Primo rischio assoluto | Copertura fino a un importo senza applicare la regola proporzionale | First loss | 0.6 |
| Claims made | Copertura delle richieste di risarcimento ricevute nel periodo, anche per fatti precedenti | Claims made | 0.6 |
| Loss occurrence | Copertura dei fatti accaduti nel periodo | Occurrence | 0.6 |
| Retroattività | Il periodo precedente all'effetto coperto da una polizza claims made | Retroactive date | 0.6 |
| Postuma | Il periodo dopo la scadenza in cui si possono ancora denunciare richieste | Extended reporting period | 0.6 |
| Territorialità | L'area geografica in cui la copertura opera; spesso esclude Stati Uniti e Canada | Territorial scope | 0.6 |
| Clausola broker | La clausola che regola ruolo e remunerazione del broker, spesso a carico della compagnia | Broker clause | 0.4 |
| Clausola di delega ⚠ | In coassicurazione, i poteri della delegataria; diversa dalla delega di sottoscrizione di un'MGA | Leading underwriter clause | 0.6 |
| Clausola di regolazione | La clausola che calcola il premio a consuntivo su un parametro come retribuzioni o fatturato | Adjustment clause | 0.6 |
| Legge applicabile | La legge che regola il contratto, liberamente scelta per i grandi rischi | Governing law | 0.7 |

### Rami e prodotti

| Termine | Definizione | Inglese | Cap. |
| --- | --- | --- | --- |
| Ramo ⚠ | Classe legale di rischi numerata dal CAP (art. 2), da 1 a 18 nei danni; diversa dalla "linea" commerciale | Class of business | 0.3 |
| Danni | I rami diversi dal vita | Non-life, P&C | 0.3 |
| Auto e non auto | Distinzione statistica tra rami legati ai veicoli e tutti gli altri | Motor, non-motor | 0.3 |
| RC auto | Responsabilità civile obbligatoria per la circolazione dei veicoli | Motor third-party liability | 0.3 |
| Corpi veicoli terrestri | Danni al proprio veicolo: incendio, furto, kasko | Motor own damage | 0.3 |
| Libro matricola | La polizza che assicura una flotta di veicoli con un elenco aggiornabile | Fleet schedule | 0.6 |
| Incendio | Ramo 8: incendio ed elementi naturali | Fire | 0.3 |
| Altri danni ai beni | Ramo 9: furto, guasti macchine, elettronica e altri danni | Other property damage | 0.3 |
| RCT/RCO | Responsabilità civile verso terzi e verso i dipendenti (ramo 13) | General and employers' liability | 0.4 |
| RC prodotti | Responsabilità per danni causati da prodotti difettosi | Product liability | 0.4 |
| RC professionale | Responsabilità per errori nell'esercizio di una professione | Professional indemnity | 0.7 |
| D&O | Responsabilità degli amministratori e dei dirigenti | Directors and officers | 0.2 |
| Cyber | Coperture per incidenti informatici; non ha un ramo dedicato | Cyber | 0.4 |
| Merci trasportate | Ramo 7; sempre grande rischio | Cargo | 0.7 |
| Credito | Ramo 14: insolvenza dei clienti dell'assicurato | Trade credit | 0.3 |
| Cauzione | Ramo 15: garanzie verso terzi, per esempio negli appalti | Surety | 0.3 |
| Perdite pecuniarie | Ramo 16 | Financial loss | 0.7 |
| Tutela legale | Ramo 17: spese legali e di vertenza | Legal expenses | 0.4 |
| Infortuni e malattia | Rami 1 e 2; contengono dati sanitari | Accident, health | 0.7 |
| Interruzione d'esercizio | Il danno da fermo dell'attività dopo un sinistro ai beni | Business interruption | 0.6 |
| CAR/EAR | Tutti i rischi di cantiere o di montaggio | Contractors' / erection all risks | 0.3 |
| Multirischi a pacchetto | Polizza modulare che riunisce più sezioni per un tipo di attività | Package policy | 0.6 |
| Cat Nat | La copertura contro terremoto, alluvione e frana, obbligatoria per le imprese (istituita dalla L. 213/2023; scadenze di adempimento nel 2025, vedi capitolo 0.7) | Natural catastrophe cover | 0.7 |
| Specialty ⚠ | Rischi complessi o di nicchia; il confine cambia da fonte a fonte | Specialty lines | 0.9 |

### Intermediazione e mercato

| Termine | Definizione | Inglese | Cap. |
| --- | --- | --- | --- |
| Compagnia | L'impresa autorizzata che assume il rischio; nei testi normativi "impresa di assicurazione" | Insurer, carrier | 0.2 |
| Rappresentanza | La sede secondaria in Italia di una compagnia di un altro Stato europeo | Branch | 0.3 |
| Distribuzione assicurativa | Consulenza, proposta, atti preparatori e conclusione di contratti, assistenza nella gestione e nei sinistri; riservata agli iscritti | Insurance distribution | 0.7 |
| Consulenza ⚠ | Nel CAP, una raccomandazione personalizzata; la consulenza "fondata su analisi imparziale" richiede un numero sufficiente di contratti; nell'uso comune, qualsiasi assistenza | Advice | 0.7 |
| RUI | Il Registro unico degli intermediari tenuto da IVASS, diviso in sezioni | Register of intermediaries | 0.2 |
| Elenco annesso | L'elenco degli intermediari di altri Stati europei che operano in Italia | EEA annex list | 0.2 |
| Agente | Intermediario con mandato di una o più compagnie (sezione A) | Agent | 0.2 |
| Plurimandatario | Agente con mandato di più compagnie | Multi-tied agent | 0.2 |
| Broker | Intermediario che agisce su incarico del cliente (sezione B) | Broker | 0.1 |
| Lettera di incarico | Il mandato con cui il cliente affida al broker la gestione delle coperture | Letter of appointment | 0.6 |
| Collaboratore ⚠ | L'iscritto in sezione E che opera per un intermediario; nell'uso comune anche un dipendente | Sub-agent, introducer | 0.2 |
| Responsabile dell'attività di distribuzione | La persona iscritta che risponde della distribuzione di una società di intermediazione; requisiti da verificare | Distribution officer | 0.2 |
| Collaborazione orizzontale | Accordo tra intermediari iscritti nelle sezioni A, B o D (art. 42 Reg. 40/2018) | Horizontal collaboration | 0.2 |
| Proponente ed emittente | Chi ha il cliente e chi ha il rapporto contabile con la compagnia | Producing / placing intermediary | 0.2 |
| Doppia intermediazione | Il broker che piazza tramite un'agenzia: il premio risulta dell'agenzia | Broker-via-agent placement | 0.3 |
| MGA ⚠ | Agenzia di sottoscrizione con delega di una compagnia; in Italia non è una categoria legale | Managing general agent | 0.2 |
| Coverholder | Il soggetto con delega a sottoscrivere per Lloyd's | Coverholder | 0.2 |
| Lloyd's | Mercato di sottoscrittori con sede a Londra; nell'Unione emette Lloyd's Insurance Company S.A. | Lloyd's | 0.2 |
| Binding authority | La delega di sottoscrizione concessa da una compagnia o da Lloyd's | Binding authority | 0.2 |
| UMR | Il codice unico di riferimento di un contratto Lloyd's | Unique market reference | 0.2 |
| Wholesaler | Broker che piazza rischi per conto di altri broker | Wholesale broker | 0.2 |
| Underwriter | Chi, in compagnia, decide se e a quali condizioni assumere un rischio | Underwriter | 0.2 |
| Capacity ⚠ | La quantità di rischio che un mercato o una compagnia è disposto ad assumere; anche la capacità prestata a un'MGA | Capacity | 0.2 |
| Piazzamento | Il collocamento del rischio sul mercato | Placement | 0.6 |
| Submission | Il fascicolo di informazioni sul rischio inviato alle compagnie per ottenere una quotazione | Submission | 0.6 |
| Portafoglio ⚠ | L'insieme dei contratti gestiti da una compagnia o da un intermediario | Book of business | 0.8 |
| Gestionale | Il software in cui l'intermediario tiene anagrafiche, polizze, titoli e contabilità | Broker management system | 0.2 |

### Denaro

| Termine | Definizione | Inglese | Cap. |
| --- | --- | --- | --- |
| Premio ⚠ | Il prezzo dell'assicurazione; va sempre chiarito se netto, imponibile o lordo | Premium | 0.5 |
| Premio netto ⚠ | Il premio prima di accessori e imposte; a volte inteso al netto delle provvigioni | Net premium | 0.5 |
| Accessori | Caricamenti aggiuntivi della compagnia | Policy fees | 0.5 |
| Imponibile | Netto più accessori; base dell'imposta | Taxable premium | 0.5 |
| Premio lordo ⚠ | Il totale pagato dal cliente; a volte inteso come lordo di provvigione | Gross premium | 0.5 |
| Imposta sulle assicurazioni | Il tributo sui premi (L. 1216/1961), con aliquote per ramo | Insurance premium tax | 0.5 |
| Contributo SSN | Il 10,5% sui premi RC auto destinato al Servizio sanitario nazionale | Motor health levy | 0.5 |
| Frazionamento | Il pagamento del premio annuo in rate | Instalments | 0.6 |
| Titolo ⚠ | La singola rata di premio da incassare, con il suo stato; in finanza indica un valore mobiliare | Debit note | 0.5 |
| Quietanza ⚠ | La ricevuta di pagamento del premio; esiste anche la quietanza di un indennizzo | Premium receipt | 0.5 |
| Avviso di scadenza | La comunicazione della rata dovuta | Renewal or premium notice | 0.5 |
| Estratto conto | Il riepilogo delle partite tra compagnia e intermediario | Statement of account | 0.5 |
| Rimessa | Il versamento dei premi alla compagnia | Remittance | 0.5 |
| Conto separato | Il conto su cui l'intermediario tiene i premi come patrimonio autonomo (art. 117 CAP) | Client money account | 0.5 |
| Fideiussione | L'alternativa al conto separato: garanzia bancaria pari al 4% dei premi incassati, con un minimo oggetto di conflitto di fonti (18.750, 19.510 o 23.480 euro) | Bank guarantee | 0.5 |
| Effetto liberatorio | Il principio per cui pagare l'intermediario equivale a pagare la compagnia | Risk transfer | 0.5 |
| Accordo ex art. 118 | L'accordo con cui una compagnia autorizza un broker a incassare con effetto liberatorio | Premium collection agreement | 0.5 |
| Provvigione | La remunerazione dell'intermediario, in percentuale del premio netto | Commission | 0.4 |
| Fee | Il compenso pagato direttamente dal cliente | Fee | 0.4 |
| Retrocessione ⚠ | La quota di provvigione girata a un altro intermediario; in riassicurazione significa altro | Commission split | 0.4 |
| Contingent, profit commission, rappel | Incentivi delle compagnie legati a volumi o al risultato tecnico del portafoglio | Contingent commission, volume bonus | 0.4 |
| Commissione di delega | Il compenso che le coassicuratrici pagano alla delegataria | Leading fee | 0.5 |
| Ritenuta d'acconto | Il 23% sul 50% della provvigione, cioè l'11,5% effettivo, trattenuto dalla compagnia | Withholding tax | 0.5 |
| Regolazione del premio | Il conguaglio a consuntivo tra premio provvisorio e premio dovuto | Premium adjustment | 0.6 |
| Fiduciary income | Gli interessi sui premi in transito; marginali in Italia | Fiduciary income | 0.4 |

### Sinistri

| Termine | Definizione | Inglese | Cap. |
| --- | --- | --- | --- |
| Sinistro ⚠ | L'evento che attiva la copertura, oppure la richiesta di risarcimento | Claim, loss | 0.6 |
| Denuncia | La comunicazione del sinistro alla compagnia, di norma entro tre giorni (art. 1913 c.c.) | Notification | 0.6 |
| Indennizzo ⚠ | Il pagamento per danni propri; spesso confuso con il risarcimento | Indemnity | 0.6 |
| Risarcimento | Il pagamento a un terzo danneggiato in responsabilità civile | Compensation | 0.6 |
| Perito | Chi quantifica il danno; non decide la copertura | Loss adjuster, surveyor | 0.2 |
| Liquidatore ⚠ | Chi istruisce il sinistro per la compagnia; il ruolo varia da compagnia a compagnia | Claims handler | 0.2 |
| Riserva sinistri | La stima del costo di un sinistro ancora aperto | Claims reserve | 0.6 |
| Rapporto sinistri/premi | Sinistri su premi; misura la redditività tecnica | Loss ratio | 0.6 |
| Combined ratio | Sinistri più spese, su premi | Combined ratio | 0.6 |
| Statistica sinistri | Lo storico dei sinistri di un cliente, chiesto per rinnovi e quotazioni | Loss run | 0.6 |
| Rivalsa | Il recupero della compagnia verso il responsabile del danno (art. 1916 c.c.) | Subrogation | 0.6 |
| Atto di liquidazione | Il documento con cui l'assicurato accetta l'importo | Release | 0.6 |

### Coassicurazione e riassicurazione

| Termine | Definizione | Inglese | Cap. |
| --- | --- | --- | --- |
| Coassicurazione ⚠ | Il riparto di un rischio tra più compagnie per quote, senza solidarietà (art. 1911 c.c.); in inglese "coinsurance" indica spesso altro, come la quota a carico dell'assicurato | Co-insurance | 0.6 |
| Delegataria | La coassicuratrice che gestisce il contratto per tutte | Leader | 0.6 |
| Riparto | La tabella delle quote di coassicurazione | Line split | 0.6 |
| Riassicurazione | L'assicurazione della compagnia; il cliente non la vede | Reinsurance | 0.2 |
| Cedente | La compagnia che cede rischio al riassicuratore | Cedant | 0.2 |
| Ritenzione ⚠ | La quota di rischio trattenuta dalla cedente; per il cliente, la parte di danno che resta a suo carico | Retention | 0.6 |
| Trattato | L'accordo di riassicurazione su un intero portafoglio | Treaty | 0.6 |
| Facoltativa | La riassicurazione del singolo rischio | Facultative | 0.6 |
| Quota share | Cessione proporzionale di una percentuale di ogni rischio | Quota share | 0.6 |
| Excess of loss | Copertura dei sinistri oltre una soglia, detta priorità | Excess of loss | 0.6 |

### Regole e vigilanza

| Termine | Definizione | Inglese | Cap. |
| --- | --- | --- | --- |
| CAP | Il Codice delle assicurazioni private (D.Lgs. 209/2005) | Private Insurance Code | 0.7 |
| IVASS | L'autorità di vigilanza sulle assicurazioni | Insurance supervisor | 0.2 |
| IDD | La direttiva europea 2016/97 sulla distribuzione assicurativa | Insurance Distribution Directive | 0.7 |
| Solvency II | Il regime prudenziale delle compagnie | Solvency II | 0.2 |
| Esercizio abusivo | Distribuzione senza iscrizione al RUI, reato (art. 305 CAP) | Unauthorised distribution | 0.7 |
| Richieste ed esigenze | Le necessità del cliente, da raccogliere prima di ogni contratto (art. 119-ter CAP) | Demands and needs | 0.7 |
| Coerenza | La corrispondenza tra prodotto proposto ed esigenze del cliente nei rami danni | Consistency | 0.7 |
| Analisi imparziale | La consulenza fondata sull'esame di un numero sufficiente di contratti del mercato | Fair and personal analysis | 0.7 |
| Allegati 3, 4 e 4-ter | L'informativa precontrattuale sul distributore, sui compensi e sulle regole di comportamento (Reg. IVASS 40/2018) | Pre-contractual disclosures | 0.7 |
| POG | Il governo del prodotto (Reg. IVASS 45/2020) | Product oversight and governance | 0.7 |
| Mercato di riferimento | La clientela per cui la compagnia ha pensato un prodotto | Target market | 0.7 |
| Grandi rischi | Le coperture escluse da alcuni obblighi informativi: sempre per alcuni rami, per altri solo se l'assicurato supera due di tre soglie dimensionali | Large risks | 0.7 |
| Supporto durevole | Un formato digitale stabile usabile al posto della carta, con il consenso del cliente | Durable medium | 0.7 |
| Conservazione | L'obbligo di conservare la documentazione per la durata del rapporto più almeno cinque anni (art. 67 Reg. 40/2018) | Record keeping | 0.7 |
| Reclamo | La lamentela scritta di un cliente, con termini di risposta | Complaint | 0.7 |
| GDPR | Il regolamento europeo sulla protezione dei dati personali | GDPR | 0.7 |
| Titolare e responsabile del trattamento | Chi decide finalità e mezzi del trattamento e chi tratta i dati per suo conto | Controller, processor | 0.7 |
| Pseudonimizzazione | La sostituzione reversibile dei dati identificativi con codici; il dato resta personale | Pseudonymisation | 0.7 |
| Anonimizzazione | La trasformazione che rende molto improbabile identificare la persona | Anonymisation | 0.7 |
| Valutazione d'impatto | L'analisi dei rischi di un trattamento richiesta dall'art. 35 GDPR | DPIA | 0.7 |
| AI Act | Il regolamento europeo sull'intelligenza artificiale (UE 2024/1689, modificato dal 2026/1744) | AI Act | 0.7 |
| Alto rischio | La categoria di sistemi di IA con obblighi rafforzati; nelle assicurazioni, rischio e prezzo di persone fisiche in vita e malattia | High-risk AI system | 0.7 |

### Dati e tecnologia

| Termine | Definizione | Inglese | Cap. |
| --- | --- | --- | --- |
| OCR | Il riconoscimento del testo in immagini e scansioni | Optical character recognition | 0.10 |
| LLM | Un modello linguistico di grandi dimensioni, capace di leggere e produrre testo | Large language model | 0.10 |
| RAG | Una tecnica che fa rispondere un modello citando documenti recuperati da un archivio | Retrieval-augmented generation | 0.10 |
| Modello dati canonico | Una rappresentazione unica e versionata delle entità (polizza, titolo, appendice) condivisa da tutti i processi | Canonical data model | 0.6 |
| Provenienza | Il collegamento di ogni dato al documento, alla pagina e al passaggio da cui è stato estratto | Lineage, provenance | 0.6 |
| Gate umano | Un punto del flusso in cui una persona deve approvare, con approvazione registrata | Human-in-the-loop gate | 0.7 |
| Registro di validazione | La traccia campo per campo di chi ha verificato, modificato o respinto un dato | Validation log | 0.7 |
| Golden set | Un insieme di documenti etichettati da esperti, usato per misurare l'accuratezza | Golden set | 0.10 |
| Polizza sintetica | Un documento costruito a mano o generato, con contenuto ed errori noti, usato per i test | Synthetic policy | 0.10 |
| Tenant | L'identificativo del cliente o del broker che separa i dati in ogni tabella | Tenant | 0.7 |
| Riconciliazione | Il confronto tra fonti diverse che descrivono gli stessi fatti, per esempio titoli, banca ed estratti conto | Reconciliation | 0.5 |
| AIBA Digital | La piattaforma di scambio dati tra broker e compagnie promossa da AIBA | AIBA Digital | 0.10 |
| Tracciato SHARE | Il formato di scambio dati proposto dall'associazione delle software house | Share Standard Format | 0.10 |
| ACORD | Lo standard di scambio dati dei mercati anglosassoni, non adottato in Italia | ACORD | 0.9 |
| CBI | Lo standard italiano per i flussi bancari tra imprese e banche | CBI | 0.5 |
| RPA | L'automazione che riproduce le azioni di una persona su un'interfaccia, fragile ai cambiamenti | Robotic process automation | 0.10 |
| Automation bias | La tendenza di chi revisiona a fidarsi della macchina e controllare meno | Automation bias | 0.7 |

**Fonti:** A4, modulo 6, per la maggior parte delle voci; A9 per DIP aggiuntivo, set informativo, scheda di polizza, multirischi a pacchetto, retrocessione nella collaborazione tra agente e broker; A3 per le voci di regole e dati; A7 per AIBA Digital, SHARE e ACORD. **\[FATTO, salvo le definizioni tecniche, che sono dell'autore\]**

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Come i broker PMI usano davvero i termini polisemici nei loro documenti | Il sistema di estrazione deve disambiguarli | Un broker PMI, sul lessico del volume |
| Codici ANIA e IVASS per classificare rami e prodotti | Servono alla tassonomia del Volume 1 | Attuario; responsabile delle segnalazioni di vigilanza di una compagnia |
| Equivalenti inglesi usati nelle compagnie internazionali presenti in Italia | Pesano sui documenti delle rappresentanze UE | Underwriter di una rappresentanza |

## 0.12 I 15 equivoci

**In sintesi.** Chi arriva al settore da fuori, e in particolare chi viene dalla tecnologia, tende a fare sempre gli stessi errori di lettura. A4 ne elenca quindici. Sono riportati qui con la correzione, la fonte e la conseguenza per chi costruisce il sistema, perché quasi ogni equivoco, se entra nel modello dati, produce un errore silenzioso. Seguono cinque equivoci specifici del progetto, emersi confrontando i report. Il capitolo è pensato come strumento di verifica: un candidato CTO che ha letto il volume dovrebbe saper spiegare perché ciascuna affermazione è sbagliata.

### I quindici equivoci di chi legge il dominio da fuori

| # | L'equivoco | La correzione | Perché conta per il sistema | Cap. |
| --- | --- | --- | --- | --- |
| 1 | "Il premio è il prezzo" | Il premio è una catena: netto, accessori, imponibile, imposte, lordo; la provvigione sta dentro il netto | Ogni importo estratto deve dire a quale anello appartiene; la catena è il primo controllo automatico | 0.5 |
| 2 | "Il broker lavora per la compagnia, perché è lei a pagarlo" | Il broker agisce su incarico del cliente; la provvigione è inclusa nel premio pagato dal cliente | L'informativa e la raccomandazione sono intestate al broker e rivolte al cliente | 0.1 |
| 3 | "Se pago il broker sono coperto" | Solo se la compagnia ha firmato un accordo ex art. 118; altrimenti conta quando la compagnia incassa | Ogni titolo deve registrare il regime di incasso | 0.5 |
| 4 | "I broker hanno il 9,7% del mercato" | È la quota ufficiale di chi consegna il premio alla compagnia; per cliente gestito i broker sono al 34-41%, oltre il 50% nel non auto | Ogni numero di mercato va citato con il suo perimetro | 0.3 |
| 5 | "Coassicurazione e riassicurazione sono la stessa cosa" | La prima è un riparto visibile al cliente, con quote per compagnia; la seconda è interna alle compagnie | Il riparto è un'entità del modello dati; la riassicurazione no | 0.6 |
| 6 | "Una polizza è un record" | Ogni polizza genera titoli, appendici, regolazioni, sinistri, quote e certificati | Il modello dati è un grafo di entità collegate ai documenti | 0.6 |
| 7 | "Se la polizza ha effetto, il cliente è coperto" | L'operatività dipende dal pagamento: dopo 15 giorni di mora la garanzia è sospesa (art. 1901 c.c.) | Lo stato della copertura dipende dallo stato dei titoli | 0.6 |
| 8 | "Sinistro vuol dire pagamento" | Il sinistro è una pratica che può durare anni, con riserve, perizie, franchigie e scoperti | Il sinistro è un processo con stati, non un evento | 0.6 |
| 9 | "Massimale e somma assicurata sono sinonimi" | Il massimale è un limite di responsabilità civile; la somma assicurata è il valore dei beni | Sono due campi diversi con regole diverse | 0.6 |
| 10 | "Un'MGA è un agente grande" | L'MGA sottoscrive con delega e con la capacity di una compagnia | Il documento può essere emesso da un soggetto diverso dalla compagnia che assume il rischio | 0.2 |
| 11 | "Lloyd's è una compagnia" | È un mercato; nell'Unione emette Lloyd's Insurance Company S.A. tramite coverholder | Il certificato Lloyd's è un formato a sé, con codici propri | 0.2 |
| 12 | "Sulle provvigioni c'è l'IVA" | L'intermediazione assicurativa è esente; c'è invece una ritenuta d'acconto dell'11,5% | La differenza tra provvigione maturata e incassata è attesa, non un errore | 0.5 |
| 13 | "Il dato della compagnia è la verità" | Estratti conto e testi emessi vanno riconciliati con quanto incassato e negoziato | Ogni fonte è un'evidenza da confrontare, non un dato da copiare | 0.5 |
| 14 | "Retrocessione ha un solo significato" | In distribuzione è la quota di provvigione girata a un altro intermediario; in riassicurazione è la riassicurazione del riassicuratore | Il termine va disambiguato dal contesto del documento | 0.11 |
| 15 | "Abbiamo confrontato il mercato" | Si può dichiarare solo il perimetro realmente consultato; l'analisi imparziale richiede un numero sufficiente di contratti | Ogni confronto riporta compagnie, prodotti e data | 0.7 |

**\[FATTO, A4, output 3, per gli equivoci e le correzioni; la colonna sul sistema è OPINIONE dell'autore\]** La correzione dell'equivoco 4 usa le misure del capitolo 0.3, con la quota ufficiale al 9,7% come previsto dall'indice.

### Cinque equivoci specifici del progetto

Il confronto tra i report ne ha fatti emergere altri cinque, che riguardano direttamente la tesi. **\[OPINIONE dell'autore, sulle fonti indicate\]**

| # | L'equivoco | La correzione | Fonte | Cap. |
| --- | --- | --- | --- | --- |
| 16 | "Nessuno governa i dati" | I flussi strutturati sono governati a silos; per quanto risulta da fonti pubbliche (A7), nessuno governa in modo trasversale e documentale il dato (osservazione, non fatto assoluto) | A7; Context v3 | 0.10 |
| 17 | "Un audit gratuito non è distribuzione" | Per la lettura prevalente, un'analisi con raccomandazioni è consulenza anche se gratuita | A3 | 0.7 |
| 18 | "Se è pseudonimizzato è anonimo" | Il dato pseudonimizzato resta personale finché è ricollegabile alla persona | A3 | 0.7 |
| 19 | "Una PMI non ha mai grandi rischi" | Alcuni rami, come le merci trasportate, sono grandi rischi a prescindere dalla dimensione; per gli altri servono due soglie su tre | A3; A4 | 0.7 |
| 20 | "La leva 10x è dimostrata da chi l'ha già fatto" | Le cifre più alte sono dichiarazioni di società o investitori; i guadagni del 20-30% su singoli processi sono dichiarazioni, non misure indipendenti (il 20% è del management di Marsh, il 30% di un broker anonimo) | A1; A8 | 0.9 |

### Cosa non sappiamo

| Lacuna | Perché conta | Chi può colmarla |
| --- | --- | --- |
| Quali equivoci sono più frequenti tra i profili tecnici che si candidano | Serve a costruire le domande per i candidati CTO del Volume 4 | Primi colloqui con i candidati |
| Quali equivoci fanno anche gli operatori del settore, per esempio sul regime di incasso | Indica dove il prodotto può creare valore spiegando, non solo calcolando | Un broker PMI; un amministrativo di broker |
