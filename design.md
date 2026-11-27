# Design

## Composizione

- Una gerarchia per schermata. Titolo, contenuto e azione principale devono distinguersi a colpo d’occhio. Usa un solo pulsante pieno per gruppo di azioni.
- Allinea testo, visual e controlli a bordi comuni. Usa una lista, una tabella o una sezione aperta secondo la struttura del contenuto.
- Lascia spazio vuoto. Elimina i blocchi che servono solo a riempire la griglia e le altezze forzate per pareggiare contenuti diversi.
- Usa la scala `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 px`. Parti da 8 px tra elementi affini, 24 px tra gruppi e 48 px su mobile o 96 px su desktop tra sezioni.
- Contenuto del sito fino a 1200 px, con margini laterali minimi di 16 px su mobile, 24 px su tablet e 32 px su desktop. Impila le colonne quando perdono leggibilità.

## Tipografia

- **Atkinson Hyperlegible Next**. 700 per i titoli, 600 per i controlli, 400 per il testo. Usa una sola famiglia.
- Scala in px (dimensione/interlinea, mobile → desktop). H1 `36/40 → 64/68`, H2 `28/34 → 44/48`, testo `16/24`, controlli `14/20`. Converti in `rem` e verifica gli a capo con testo reale.
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

- Etichette visibili nei form, errori accanto al campo e pulsanti che nominano l’azione.
- Verifica WCAG AA, inclusi contrasto del testo normale ≥ 4,5:1, focus visibile e navigazione da tastiera.
- Verifica il layout a 320, 390, 768 e 1440 px e al 200% di zoom. Prova etichette lunghe e stati vuoto, caricamento, errore e successo.
