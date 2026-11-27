import type { Metadata } from "next";
import { QuoteEntry } from "./quote-entry";
import { LandingHeader } from "./landing-header";

export const metadata: Metadata = {
  title: "InsurTech — Assicurazioni per le imprese",
  description:
    "Il broker assicurativo per le PMI italiane. Scopri cosa proteggere e quando rivedere le polizze della tua azienda.",
};

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#contenuto">Vai al contenuto</a>

      <div className="opening" id="inizio" tabIndex={-1}>
        <LandingHeader />

        <main id="contenuto" tabIndex={-1}>
          <QuoteEntry />

          <section className="coverage-section" aria-labelledby="coperture">
            <div className="shell coverage-inner">
              <h2 id="coperture" tabIndex={-1}>Cosa vuoi<br /> proteggere?</h2>

              <div className="coverage-layout">
                <div className="coverage-plan" aria-hidden="true">
                  <div className="plan-building">
                    <div className="plan-workshop">
                      <span className="plan-label">
                        <span className="plan-mark mark-beni" aria-hidden="true" />
                        Officina
                      </span>
                      <div className="plan-machine" />
                      <div className="plan-machine" />
                      <div className="plan-machine" />
                    </div>
                    <div className="plan-systems">
                      <span className="plan-label">
                        <span className="plan-mark mark-sistemi" aria-hidden="true" />
                        Server
                      </span>
                      <div className="plan-server" />
                      <div className="plan-server" />
                      <div className="plan-server" />
                    </div>
                    <div className="plan-entrance">
                      <span className="plan-label">
                        <span className="plan-mark mark-terzi" aria-hidden="true" />
                        Ingresso
                      </span>
                      <div className="plan-desk" />
                    </div>
                  </div>
                </div>

                <dl className="coverage-index">
                  <div>
                    <dt>
                      <span className="plan-mark mark-beni" aria-hidden="true" />
                      Sedi e attrezzature
                    </dt>
                    <dd>Fabbricati, macchinari e scorte.</dd>
                  </div>
                  <div>
                    <dt>
                      <span className="plan-mark mark-terzi" aria-hidden="true" />
                      Danni a terzi
                    </dt>
                    <dd>Danni causati a persone o a beni altrui durante il lavoro.</dd>
                  </div>
                  <div>
                    <dt>
                      <span className="plan-mark mark-sistemi" aria-hidden="true" />
                      Rischi informatici
                    </dt>
                    <dd>Attacchi, perdita di dati e interruzione dei sistemi.</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <section className="offer-section" aria-labelledby="il-broker">
            <div className="shell offer-inner">
              <h2 id="il-broker" tabIndex={-1}>Cosa confrontiamo oltre al prezzo?</h2>
              <div className="offer-comparison">
                <section className="offer-cost" aria-labelledby="alla-firma">
                  <h3 id="alla-firma">Quando firmi</h3>
                  <dl>
                    <div>
                      <dt>Premio</dt>
                      <dd>Quanto paghi per la copertura.</dd>
                    </div>
                  </dl>
                </section>
                <section className="offer-claim" aria-labelledby="al-sinistro">
                  <h3 id="al-sinistro">Se succede un danno</h3>
                  <dl>
                    <div>
                      <dt>Franchigia</dt>
                      <dd>Quanto resta a carico tuo.</dd>
                    </div>
                    <div>
                      <dt>Massimale</dt>
                      <dd>Fino a quanto può pagare la compagnia.</dd>
                    </div>
                    <div>
                      <dt>Esclusioni</dt>
                      <dd>Per quali danni la polizza non interviene.</dd>
                    </div>
                  </dl>
                </section>
              </div>
            </div>
          </section>

          <section className="renewal-section" aria-labelledby="polizze">
            <div className="shell renewal-inner">
              <div className="renewal-copy">
                <h2 id="polizze" tabIndex={-1}>Partiamo dalle polizze che hai già.</h2>
                <p>
                  Prima di chiedere nuove offerte, verifichiamo se le garanzie in corso
                  coprono ancora le sedi, i beni e le attività di oggi.
                </p>
                <a className="hero-action" href="#identificativo-azienda">
                  Richiedi una quotazione <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="renewal-kit">
                <h3>Prima del rinnovo, tieni a portata</h3>
                <ul role="list">
                  <li>La polizza in corso e le appendici</li>
                  <li>La data di scadenza</li>
                  <li>Cosa è cambiato nell’impresa dall’ultimo rinnovo</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="faq-section" aria-labelledby="domande">
            <div className="shell faq-inner">
              <h2 id="domande" tabIndex={-1}>Domande frequenti.</h2>
              <div className="faq-list">
                <details className="disclosure">
                  <summary>Quali dati servono per iniziare?</summary>
                  <p>Parti dal sito web o dalla partita IVA. Poi ti chiediamo la ragione sociale e un recapito.</p>
                </details>
                <details className="disclosure">
                  <summary>Devo sapere già quale copertura mi serve?</summary>
                  <p>Puoi partire da ciò che vuoi proteggere o da una richiesta di un cliente. Il broker ti aiuta a individuare le garanzie da cercare.</p>
                </details>
                <details className="disclosure">
                  <summary>Chi decide il prezzo e le condizioni?</summary>
                  <p>Le compagnie valutano il rischio e formulano le offerte. Il broker le confronta con te.</p>
                </details>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="shell footer-inner">
            <div>
              <p className="wordmark">InsurTech</p>
              <p className="footer-description">Assicurazioni per le imprese.</p>
            </div>
            <nav aria-label="Esplora il sito">
              <a href="#coperture">Coperture</a>
              <a href="#il-broker">Il broker</a>
              <a href="#polizze">Polizze in corso</a>
              <a href="#domande">Domande frequenti</a>
            </nav>
            <a href="#inizio">Torna all’inizio</a>
          </div>
        </footer>
      </div>
    </>
  );
}
