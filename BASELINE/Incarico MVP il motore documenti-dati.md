# Incarico MVP: il motore che trasforma i documenti di un broker in dati

Oct 3, 2026 · @l

## In breve

Ti chiedo di costruire, entro gennaio 2027, la prima versione di un motore che riceve i documenti di un broker assicurativo, li legge, ne estrae i dati che contano indicando per ciascuno da dove li ha presi, li fa controllare a una persona e li consegna al gestionale del broker.

È il primo pezzo dell'architettura descritta nella bozza che hai già letto. Rinnovi, sinistri, incassi, confronti: tutti i processi del broker dipendono da polizze trasformate in dati affidabili. Per questo partiamo da qui, e il resto si monta sopra.

Il documento ha tre parti: cosa mi serve sul piano pratico, come lo voglio costruito sul piano tecnologico, cosa ci consegniamo e quando. Strumenti, linguaggi e fornitori li scegli tu. Ti chiedo di rispondere entro due settimane con un piano.

## Parte 1. Cosa mi serve

### Il problema, su un caso

Prendiamo un'azienda ipotetica, Alfa Meccanica: manifattura lombarda, 8 milioni di fatturato, 42 dipendenti, sette polizze con quattro compagnie. Il suo broker ha quattro o cinque addetti e circa 2.000 polizze in portafoglio.

In un anno, per Alfa arrivano circa trenta documenti: schede di polizza e condizioni ai rinnovi, quattordici quietanze, un'appendice che aggiunge un magazzino, una regolazione del premio, un libro matricola per un nuovo furgone, una disdetta via PEC. Arrivano in forme diverse: un flusso nel gestionale per una compagnia, PDF via email per un'altra, un Excel da un'agenzia, scansioni timbrate per le schede, PDF di 40-150 pagine per le condizioni.

Oggi un operatore apre ogni documento, capisce cos'è, trova la polizza giusta e ricopia i valori nel gestionale. E sbaglia in silenzio:

- un timbro copre una cifra e 850.000 euro diventano 650.000;
- uno scoperto del 10% con minimo di 2.500 euro viene registrato come franchigia di 2.500 euro, che è un'altra cosa;
- l'appendice del magazzino resta in una cartella e il magazzino non risulta assicurato;
- lo stesso massimale compare in tre documenti diversi, e ne vale uno solo.

Nessuno se ne accorge finché arriva un sinistro. Il motore deve togliere all'operatore il lavoro di lettura e trascrizione e lasciargli il lavoro di controllo, con la prova di cosa ha controllato.

### Cosa deve fare il motore

Sei passi, dal punto di vista di chi lo usa.

1. **Ricevere** i documenti da caricamento manuale e da una casella email di prova, eliminare i doppioni, ricordare da dove e quando sono arrivati.
2. **Riconoscere** il tipo di documento: scheda di polizza, condizioni, appendice, quietanza, estratto conto, altro.
3. **Leggere** i campi che contano e indicare, per ognuno, la pagina e la frase da cui li ha presi. Se la frase citata non esiste davvero nel documento, il valore si scarta.
4. **Collegare** appendici e quietanze alla polizza giusta e dire, per ogni valore che compare in più documenti, quale vale oggi e in base a quale regola.
5. **Far controllare** a una persona: per ogni campo, il valore proposto e accanto la pagina con la frase evidenziata. I campi critici, cioè somme assicurate, massimali, franchigie e scoperti, date e premi, si confermano uno per uno. Ogni decisione resta registrata.
6. **Consegnare** i dati controllati al gestionale del broker con un file di import, e registrare cosa è stato scritto.

Due regole valgono sempre: la macchina propone e una persona decide sui campi critici; nessun risultato arriva a un cliente finale in questa fase.

### I campi da estrarre

Per l'MVP ci limitiamo ai campi che servono a gestire la polizza nel tempo. Quelli in grassetto sono critici: li conferma sempre una persona.

| Documento | Campi | Note |
| --- | --- | --- |
| Scheda di polizza | Compagnia e agenzia; numeri di polizza, anche più di uno; ramo; contraente e assicurato; ubicazioni; **decorrenza e scadenza**; frazionamento; tacito rinnovo e termine di disdetta; **premio imponibile, imposte e lordo per rata**; **somme assicurate per partita**; **massimali**; **franchigie e scoperti** con minimi e massimi | I massimali sono oggetti strutturati, non testo: tipo, importo, base per sinistro o per anno, relazione con il massimale principale |
| Quietanza | Numero; polizza di riferimento; periodo coperto; **importo**; data di pagamento; rata | Spesso arriva in Excel o in flusso: si legge con codice, l'AI solo per i PDF |
| Appendice | Numero; polizza; **data di effetto**; tipo di variazione; **campi modificati con il nuovo valore**; premio della variazione | Ogni campo modificato diventa una nuova versione del campo, con la sua data |
| Condizioni | Garanzie prestate; **esclusioni**; **sottolimiti**; clausola che dice quale documento prevale | Ultima tappa; le esclusioni le decide sempre una persona |
| Estratto conto provvigioni | Compagnia; periodo; polizza; premio; aliquota; provvigione; ritenuta | Solo su dati inventati, per il prototipo del lato denaro |

Per ogni campo il motore restituisce cinque cose: il valore normalizzato, il testo originale, la pagina e la frase da cui viene, un livello di confidenza, lo stato della revisione.

### In che ordine

Prima un percorso completo e stretto, poi lo si allarga. Ogni tappa attraversa tutti e sei i passi.

| Tappa | Documenti | Perché in quest'ordine |
| --- | --- | --- |
| 1 | Schede di polizza | Brevi, sempre presenti, contengono la maggior parte dei campi critici |
| 2 | Quietanze | Tante e ripetitive, spesso già in Excel o in flusso: si leggono con codice normale. È dove si risparmiano più ore |
| 3 | Appendici e collegamento alla polizza | Qui nasce il problema di quale valore vale oggi |
| 4 | Condizioni lunghe, esclusioni, sottolimiti | Le più difficili da leggere: vanno per ultime, quando il resto regge |

Rami di partenza: multirischi o incendio e responsabilità civile, quelli che ogni PMI ha.

In parallelo, solo su dati inventati, un prototipo del lato denaro: quanto deve pagare il cliente, quanto va alla compagnia, quanto resta al broker di provvigione, come si abbina un bonifico unico a più rate. Serve a verificare che il modello dati regga anche il denaro, non a misurare risultati.

### Cosa non deve fare

- Consigli o analisi rivolti ai clienti: sarebbe consulenza assicurativa e richiede un'iscrizione che non abbiamo.
- Chatbot verso i clienti.
- Polizze vita e dati sanitari: il motore li riconosce e li blocca.
- Sostituire il gestionale del broker: lo alimenta.
- Collegarsi a banche reali o ai portali delle compagnie.
- CRM, portale clienti, gestione sinistri, modelli predittivi: vengono dopo.
- Usare i documenti dei clienti per addestrare modelli.

### Come lo accetto

Le soglie sono provvisorie: vengono dalle ricerche e le ricalibriamo insieme sui primi documenti reali. Si misurano su un insieme di documenti reali che gli sviluppatori non vedono, mai sui dati inventati.

| Cosa misuro | Soglia provvisoria |
| --- | --- |
| Campi letti correttamente, PDF nativi | Almeno 95%, nessun campo critico sotto il 90% |
| Campi letti correttamente, scansioni leggibili | Almeno 90%, nessun campo critico sotto l'85% |
| Citazioni che esistono davvero nel documento | Almeno 98% |
| Campi vuoti lasciati vuoti, senza inventare un valore | Almeno 98% |
| Appendici collegate alla polizza giusta | Almeno 98% |
| Errori inseriti di proposito che il revisore non vede | Al massimo 10% sui campi critici |
| Tempo di revisione rispetto al lavoro a mano | Almeno 30% in meno |
| Ore di lavoro per polizza, misurate presso due broker | Sotto il 30% in meno ci fermiamo e rivediamo; oltre il 40% la tesi regge |

Accanto a ogni risultato voglio il numero di documenti su cui è misurato: su quaranta documenti, un 90% può valere qualsiasi cosa tra 77% e 96%.

## Parte 2. Come lo voglio costruito

### I principi restano quelli della bozza

Uno schema unico della polizza, condiviso da tutti i processi. La fonte per ogni dato. I dati in custodia per il cliente separati dai dati derivati. L'intelligenza artificiale dietro un'interfaccia interna, così che il nostro codice non chiami mai direttamente un fornitore e si possa cambiarlo in una settimana. La persona nel ciclo per progetto, non come aggiunta. I processi come sequenze di stati tracciate.

### Comprare, costruire, rimandare

|  | Cosa | Criterio |
| --- | --- | --- |
| **Si compra** | OCR, modelli linguistici via API, cloud con dati in Unione Europea, archivio dei file | Si sceglie misurando almeno due fornitori sui nostri documenti, non sulle brochure |
| **Si costruisce** | Il modello dati; la lettura con citazione verificata; il collegamento delle appendici e le regole su quale valore vale; i controlli di coerenza su somme e date; l'interfaccia di revisione con il registro di chi ha controllato cosa; l'esportazione verso il gestionale | È la parte che nessuno vende per il mercato italiano, ed è il valore del progetto |
| **Si rimanda** | CRM, gestionale o portale clienti nostri, sinistri, modelli predittivi, OCR fatto in casa, collegamenti diretti a banche e compagnie | Costano molto e non servono a dimostrare la tesi |

### Vincoli non negoziabili

- **Fornitori in Unione Europea**, senza addestramento sui nostri documenti, con un contratto di trattamento dei dati firmato.
- **Dati personali oscurati** prima di mandare un documento a un servizio esterno: nomi, codici fiscali, indirizzi, targhe, firme. Un documento oscurato non è anonimo, resta un dato personale, e lo trattiamo così.
- **Due date per ogni fatto**: da quando vale e quando lo abbiamo saputo. Un'appendice di ottobre con effetto da luglio non deve cancellare la storia.
- **Dati di ogni broker separati** da quelli degli altri, fin dal primo giorno.
- **Un registro che si può solo allungare**, mai modificare, di chi ha controllato cosa e quando.
- **I controlli di coerenza li fa codice normale**, non l'intelligenza artificiale: somme, date, cifre contro lettere.
- **Tutto si può rifare**: istruzioni ai modelli, regole e versioni dei modelli sono codice versionato.

Questi vincoli vengono da norme sulla privacy e sulla distribuzione assicurativa, e dalla responsabilità che il broker ha verso i clienti. Li faremo verificare a un legale prima del primo documento reale.

### Il modello dati, in sintesi

La proposta completa è nel capitolo 2.4 del Volume 2. Il nucleo per l'MVP sono dieci oggetti.

| Oggetto | Cosa rappresenta |
| --- | --- |
| Broker | Il cliente del motore: ogni dato appartiene a un broker, ed è la base della separazione |
| Cliente | L'azienda contraente o assicurata |
| Contratto | La polizza logica, con tutti i suoi identificativi esterni: compagnia, agenzia, gestionale |
| Documento | Il file originale, immutabile, con impronta, origine, pagine e testo letto |
| Evidenza | La pagina e la frase da cui viene un valore |
| Garanzia | Cosa è coperto, per partita o ubicazione |
| Limite | Massimale, sottolimite, franchigia o scoperto: tipo, importo, base, relazione con gli altri limiti |
| Variazione | L'effetto di un'appendice o di una regolazione su uno o più campi |
| Titolo e quietanza | La rata dovuta e la prova del pagamento |
| Revisione | Chi ha controllato quale campo, cosa ha deciso, quando, guardando cosa |

Ogni valore di campo è un oggetto, non una colonna: valore, testo originale, evidenza, confidenza, stato di revisione, valido da, valido fino a, registrato il. È questo che permette di sapere cosa valeva a una certa data e chi l'ha controllato.

### Un'idea di architettura

&#91;embedded content: architettura MVP · sette passi, un controllo umano obbligatorio\]

Ogni passo scrive nello stesso database; solo la lettura chiama fornitori esterni, sempre dopo l'oscuramento e attraverso un'interfaccia nostra. In evidenza il controllo umano: nessun campo critico arriva al gestionale senza.

### Suggerimenti tecnologici, non vincolanti

Sono spunti per partire veloci, non scelte: puoi cambiarli tutti, motivando.

| Componente | Un'idea | Perché |
| --- | --- | --- |
| Linguaggio | Python per pipeline e valutazione, con una API web semplice | Ecosistema maturo per documenti e AI |
| Database | PostgreSQL, con i valori dei campi che portano le due date | Relazionale, con storico e JSON dove serve, ospitabile in UE |
| Archivio file | Object storage in UE, file immutabili con impronta | Gli originali non si toccano mai |
| OCR e layout | Mettere a confronto due o tre servizi con region UE, per esempio Azure Document Intelligence, AWS Textract, Google Document AI, e un'opzione open source come Docling | Le scansioni timbrate sono il caso difficile: decide la misura |
| Modelli linguistici | Modelli di frontiera via endpoint UE senza conservazione dei dati, con output vincolato a uno schema JSON; almeno due fornitori dietro la stessa interfaccia | Cambiare fornitore deve costare giorni |
| Verifica delle citazioni | Confronto tra la frase citata e il testo letto dalla pagina, dopo normalizzazione | Deterministico, scarta i valori inventati |
| Oscuramento | Espressioni regolari con controllo di validità per codici fiscali, partite IVA, IBAN e targhe, più un riconoscitore di nomi come Presidio | Le regole prevalgono sul modello; le fughe si misurano |
| Code e flussi | Una coda di lavori semplice, anche su PostgreSQL, con uno stato per documento | Niente orchestratori pesanti nell'MVP |
| Interfaccia di revisione | Web app leggera con il PDF affiancato e la frase evidenziata | È lo strumento che l'operatore usa tutto il giorno |
| Banco di prova | Test automatici che a ogni modifica eseguono la pipeline sui dati inventati e calcolano le metriche per campo | La qualità deve essere un numero visibile a ogni rilascio |
| Esportazione | CSV o Excel nel tracciato di import del gestionale del broker | Si alimenta il gestionale, non lo si sostituisce |
| Modo di lavorare | Agenti di programmazione AI nel lavoro quotidiano | Una squadra piccola deve produrre come una grande |

### Le decisioni che lascio a te

- **Il modello dati.** Nella libreria trovi una proposta con 31 oggetti, puoi ridurla. È la decisione più cara da cambiare dopo: la facciamo rivedere anche da un tecnico esterno.
- **Dove ospiti e conservi i dati**, dentro i vincoli.
- **Quali fornitori di OCR e di modelli**, dopo averne messi a confronto almeno due sui nostri documenti.
- **Come oscuri i dati personali** e come misuri quello che sfugge.
- **Come costruisci l'interfaccia di revisione.**
- **Come scrivi nel gestionale del broker**: file di import per primo, collegamenti diretti dove esistono.
- **Composizione del team e ritmo di lavoro.**

## Parte 3. Consegne, tempi e cosa ci scambiamo

### Le tappe

Si passa alla tappa successiva quando il criterio è soddisfatto, non quando scade il mese. I mesi sono un orientamento; l'obiettivo di chiusura è marzo 2027.

| Tappa | Cosa mi consegni | Quando la considero chiusa | Orientamento |
| --- | --- | --- | --- |
| A. Piano | Piano di lavoro, stima di sforzo e team, scelte tecnologiche motivate, commento al modello dati | Lo approviamo insieme | Fine ottobre, due settimane dopo la firma |
| B. Fondamenta | Modello dati, archivio, oscuramento, registro dei controlli, banco di prova su documenti inventati e pubblici | Il banco di prova gira a ogni modifica e produce le misure | Metà novembre |
| C. Primo percorso completo | Schede di polizza e quietanze dall'ingresso al gestionale di prova, con l'interfaccia di revisione | Primi numeri sui documenti reali di sviluppo | Metà dicembre |
| D. MVP completo | Appendici e collegamento, condizioni, prototipo del lato denaro, prima misura sull'insieme di test | Report di misura confrontato con le soglie | Fine gennaio |
| E. Prova presso i broker | Il motore usato in due broker per quattro-sei settimane, con la misura delle ore | Report finale | Febbraio-marzo |

Il collo di bottiglia non è il codice ma i documenti marcati a mano: l'insieme di test richiede 280-540 ore di un esperto. Se i documenti reali arrivano dopo metà novembre, le tappe C e D slittano di conseguenza, e lo diciamo.

### Cosa ti do io

- **Subito:** la libreria di studio, documenti inventati, condizioni generali pubbliche delle compagnie dopo aver verificato i termini d'uso.
- **Da fine ottobre:** documenti reali oscurati da due broker partner, con accordi scritti, secondo il piano qui sotto.
- **Da novembre:** la mia presenza in un broker per osservare i processi e misurare i tempi del lavoro a mano, che sono la base del confronto.
- **Un esperto assicurativo** per marcare i documenti di test e **un custode dei dati**, diverso da chi sviluppa, che tiene i documenti di test e le chiavi di accesso.
- **Le risposte sul mestiere:** ogni domanda su polizze e processi passa da me.

### Di quali documenti hai bisogno e quando

Le fondamenta si costruiscono senza documenti esterni. I documenti reali servono dalla fine della tappa B in poi.

| Quando | Cosa | Quanti | A cosa serve |
| --- | --- | --- | --- |
| Subito | Documenti inventati dal nostro generatore; condizioni generali pubbliche | 300-1.000 inventati; 20-30 condizioni pubbliche | Costruire e collaudare la pipeline senza rischi per la privacy |
| Fine ottobre | Campione iniziale: pacchetti completi, cioè una polizza con appendici, quietanze e condizioni; più quietanze ed estratti conto nei formati reali | 10 pacchetti, 20-30 quietanze, 5-10 estratti conto | Conoscere i formati veri, misurare il tempo di marcatura e quanto due esperti concordano |
| Metà novembre | Insieme di sviluppo | 20-30 pacchetti | Lavorare e migliorare il motore su documenti veri |
| Metà dicembre | Insieme di test, sigillato | 60-100 pacchetti, consigliati 80, di clienti diversi da quelli di sviluppo | Dichiarare la qualità a gennaio |

In totale servono circa 110-140 pacchetti reali da 10-20 clienti diversi. Devono coprire almeno cinque compagnie, i rami di partenza, almeno un terzo di scansioni e almeno un terzo di polizze con appendici. Ogni pacchetto è oscurato prima di uscire dal broker.

### Cosa ti chiedo nelle prime due settimane

1. Una lettura critica di questo incarico: cosa taglieresti, cosa non è fattibile, dove le soglie ti sembrano fuori scala.
2. Un piano con stima: quante persone, con quali profili, per quante settimane fino alla tappa C.
3. Un commento al modello dati proposto nella libreria.
4. I rischi tecnici che vedi e che io non vedo.

### Come lavoriamo

- Un punto settimanale di 30 minuti.
- Una demo ogni due settimane, su documenti veri o inventati.
- Ogni rilascio produce da solo il report delle misure.
- Le decisioni importanti si scrivono in un registro condiviso.
- Prima di scrivere codice mettiamo per iscritto riservatezza e proprietà di ciò che costruiamo, insieme alle condizioni della tua collaborazione.

## Materiale allegato

Non serve leggere tutto: questo incarico basta per il piano. Il resto è riferimento.

| Documento | Cosa contiene | Quando leggerlo |
| --- | --- | --- |
| Volume 0, il mestiere | Come funziona un broker, il percorso del denaro, il glossario | Quando un termine non torna |
| Volume 2, la tecnologia | Il modello dati proposto, la pipeline, come si misura la qualità | Il capitolo 2.4 sul modello dati subito; il resto prima della stima |
| Volume 4, la specifica formale | Requisiti dettagliati con criteri di accettazione, uno per uno | Quando serve il dettaglio di un requisito |

Gli altri volumi della libreria, su processi e prodotto, li condivido su richiesta.
