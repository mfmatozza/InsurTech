# Design

## Direzione visiva della landing

- **Apertura a tutta larghezza.** Fai partire la sfumatura dal verde luminoso `#C8E8C5` dietro l’header. Mantieni l’header in alto e passa al bianco appena si scorre. Raggruppa titolo e azione sullo stesso asse. A 390 × 844 e 1440 × 900 px lascia intravedere circa 48 px della sezione seguente. Lascia crescere la hero con zoom o testo più lungo.
- **Scala editoriale.** Componi il titolo su due o tre righe ampie su desktop, in un unico colore. Usa dimensione e a capo per dare enfasi al messaggio. Raggruppa i controlli con la stessa funzione in una superficie compatta.
- **Campo della hero.** Mostra il prompt sulla riga del testo. Mantieni posizione e altezza del campo al focus e durante la digitazione. Evidenzia il focus sul bordo della superficie.
- **Invito allo scroll.** Mostra il bordo e l’inizio di una sezione vera, con una domanda o un titolo che invogli a proseguire. Usa un contenuto editoriale ampio e leggibile anche a 390 px. Elimina i mockup, i riquadri di riempimento e le didascalie che descrivono il lavoro in corso.
- **Ritmo.** Raccorda l’apertura al primo blocco chiaro e riserva il verde profondo `#163526` a uno stacco più avanti. Mantieni gli stessi margini laterali. Dai a ogni blocco un fulcro visivo e lascia che il contenuto determini l’altezza.

## Composizione

- Una gerarchia per schermata. Titolo, contenuto e azione principale devono distinguersi a colpo d’occhio. Usa un solo pulsante pieno per gruppo di azioni.
- Allinea testo, visual e controlli a bordi comuni. Usa una lista, una tabella o una sezione aperta secondo la struttura del contenuto.
- Il visual principale deve far capire un passaggio o mostrare un risultato. Se puoi sostituirlo con una foto di persone al lavoro senza cambiare il messaggio, rivedi la composizione. Usa esempi leggibili e dichiarati quando rappresentano un’anteprima.
- Lascia spazio vuoto. Accorpa i contenuti brevi a un blocco pertinente. Elimina i blocchi che servono solo a riempire la griglia e le altezze forzate per pareggiare contenuti diversi.
- Usa la scala `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 px`. Parti da 8 px tra elementi affini, 24 px tra gruppi e 48 px su mobile o 96 px su desktop tra sezioni.
- Margini laterali minimi di 16 px su mobile e 24 px su tablet. Su desktop la landing può occupare circa l’88% del viewport, fino a 1792 px. Mantieni le colonne di testo a misura di lettura e impilale quando perdono leggibilità.

## Tipografia

- **Atkinson Hyperlegible Next**. 700 per i titoli di supporto, 600 per i controlli, 400 per il testo. Usa **Barlow Condensed 800** per la hero e i titoli editoriali delle sezioni principali.
- Scala in px (dimensione/interlinea, mobile → desktop). H1 standard `36/40 → 64/68`, H2 `28/34 → 44/48`, testo `16/24`, controlli `14/20`. Converti in `rem` e verifica gli a capo con testo reale.
- Paragrafi allineati a sinistra, circa 55–70 caratteri per riga. Importi confrontabili allineati a destra.

## Palette

| Ruolo | Colore |
|---|---|
| Verde principale e focus su fondi chiari | `#22613E` |
| Hover / pressione | `#184B2E` / `#113B25` |
| Fondo carta / superficie | `#F7F6F1` / `#FFFFFF` |
| Fondo salvia per sezioni o selezioni | `#EAF2EC` |
| Testo / testo secondario | `#1C2620` / `#4F5F56` |
| Separatore / bordo funzionale | `#D8DFD9` / `#738279` |

Usa il verde come unico accento di marca. Per gli stati, abbina sempre un’etichetta al colore. Testo e fondo per successo `#216041` / `#E8F3EB`, attenzione `#784B08` / `#FFF3D8`, errore `#9B3033` / `#FCEBEC`, informazione `#24547B` / `#EAF3FB`.

## Forme

- **Squircle per tutti i componenti con uno sfondo o un bordo proprio.** Usa angoli a curvatura continua, ispirati alle icone Apple. Mantieni lo stesso profilo su pulsanti, input, etichette, contenitori e dialoghi. Usa raggi di 4 px per etichette, 8 px per controlli, 12 px per contenitori e dialoghi.

## Da evitare

| Escludi | Usa |
|---|---|
| Pill, pulsanti tondi, spigoli vivi e raggi circolari mescolati agli squircle. | Squircle per pulsanti, filtri con sfondo e badge di stato. Tab con sottolineatura e stati in testo quando basta. |
| Card annidate, bento e file di tre schede come impaginazione predefinita. | Spazi, righe e divisori. Un bordo dove delimita un elemento utile. |
| Inter, Geist o Roboto ereditati dal template. Titoli con una parola isolata in corsivo, colore o gradiente. | La famiglia e la scala definite sopra. Titoli brevi, con enfasi data da peso e dimensione. |
| Badge sopra i titoli, maiuscolo spaziato, numeri ornamentali e frecce aggiunte a ogni link. | Etichette solo dove orientano. Numeri solo per sequenze o dati. |
| Gradienti decorativi, glow, vetro satinato, blob, emoji al posto delle icone, ombre su ogni riquadro. | Fondi pieni, icone coerenti e ombre leggere solo per menu e dialoghi sovrapposti. |
| Testo riempitivo, immagini generiche, grafici finti e controlli inerti. | Testo concreto, visual pertinenti e azioni con un esito reale. |
| Scroll reveal ripetuti, parallax e autoplay decorativo. | Feedback breve sulle azioni e rispetto di `prefers-reduced-motion`. |

## Uso e verifica

- Prima di implementare una nuova direzione, confronta due bozzetti della hero e del primo scroll con il riferimento reale. Scegli quello con gerarchia più forte e un passaggio naturale tra le sezioni.
- Prima di consegnare, affianca le schermate della pagina effettiva al riferimento a 1440 e 390 px. Controlla che titolo e CTA siano visibili, che la sezione successiva si intraveda e che gli allineamenti reggano al primo scroll. Allega i render finali e prova la CTA.
- Etichette visibili nei form, errori accanto al campo e pulsanti che nominano l’azione.
- Verifica WCAG AA, inclusi contrasto del testo normale ≥ 4,5:1, focus visibile e navigazione da tastiera.
- Verifica il layout a 320, 390, 768 e 1440 px e al 200% di zoom. Prova etichette lunghe e stati vuoto, caricamento, errore e successo.
