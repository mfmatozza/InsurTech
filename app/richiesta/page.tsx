"use client";

import Link from "next/link";
import { type FormEvent, useEffect, useState } from "react";

const emptyDetails = {
  companyName: "",
  firstName: "",
  lastName: "",
  phone: "",
};

function getDraftKey(review: boolean) {
  return review ? "insurtech-review-draft" : "insurtech-quote-draft";
}

export default function QuotePage() {
  const [identifier, setIdentifier] = useState<string | null>(null);
  const [review, setReview] = useState(false);
  const [ready, setReady] = useState(false);
  const [step, setStep] = useState<"company" | "contact">("company");
  const [details, setDetails] = useState(emptyDetails);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const requestedReview = new URLSearchParams(window.location.search).get("tipo") === "revisione";
      setReview(requestedReview);
      const current = sessionStorage.getItem("insurtech-quote-company");
      setIdentifier(current);
      const saved = sessionStorage.getItem(getDraftKey(requestedReview));
      if (current && saved) {
        const draft = JSON.parse(saved);
        if (draft.identifier === current) setDetails(draft.details);
      }
    } catch {
      setError("La bozza non è disponibile in questa scheda.");
    } finally {
      setReady(true);
    }
  }, []);

  function update(field: keyof typeof emptyDetails, value: string) {
    setDetails((current) => ({ ...current, [field]: value }));
    setStatus("");
    setError("");
  }

  function continueQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!details.companyName.trim()) {
      setError("Inserisci la ragione sociale.");
      return;
    }
    setError("");
    setStep("contact");
  }

  function saveDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!identifier) return;
    try {
      sessionStorage.setItem(getDraftKey(review), JSON.stringify({ identifier, details }));
      setError("");
      setStatus("Bozza salvata in questa scheda.");
    } catch {
      setError("Il browser non permette di salvare la bozza.");
    }
  }

  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <Link href="/" className="wordmark">InsurTech</Link>
        </div>
      </header>
      <main className="quote-wizard">
        {ready && identifier && step === "company" && (
          <form onSubmit={continueQuote}>
            <h1>{review ? "Rivedi le tue polizze" : "Dati dell’azienda"}</h1>
            <label>
              Ragione sociale
              <input
                type="text"
                autoComplete="organization"
                value={details.companyName}
                onChange={(event) => update("companyName", event.target.value)}
                required
              />
            </label>
            <button className="hero-action" type="submit">Continua</button>
          </form>
        )}
        {ready && identifier && step === "contact" && (
          <form onSubmit={saveDraft}>
            <h1>I tuoi recapiti</h1>
            <label>
              Nome
              <input
                type="text"
                autoComplete="given-name"
                value={details.firstName}
                onChange={(event) => update("firstName", event.target.value)}
                required
              />
            </label>
            <label>
              Cognome
              <input
                type="text"
                autoComplete="family-name"
                value={details.lastName}
                onChange={(event) => update("lastName", event.target.value)}
                required
              />
            </label>
            <label>
              Telefono
              <input
                type="tel"
                autoComplete="tel"
                value={details.phone}
                onChange={(event) => update("phone", event.target.value)}
                required
              />
            </label>
            <div className="quote-wizard-actions">
              <button className="hero-action" type="submit">Salva bozza</button>
              <button
                className="quote-back"
                type="button"
                onClick={() => {
                  setStatus("");
                  setError("");
                  setStep("company");
                }}
              >
                Indietro
              </button>
            </div>
          </form>
        )}
        {ready && !identifier && (
          <>
            <h1>Richiedi una quotazione</h1>
            <Link href="/#identificativo-azienda">Inserisci partita IVA o sito web</Link>
          </>
        )}
        {error && <p className="quote-error" role="alert">{error}</p>}
        {status && <p role="status">{status}</p>}
      </main>
    </>
  );
}
