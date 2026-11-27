"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { type FormEvent, useRef, useState } from "react";

// Confirm the comparison panel before publishing this preview roster.
const insurers = [
  { id: "generali", name: "Generali" },
  { id: "unipol", name: "Unipol" },
  { id: "allianz", name: "Allianz" },
  { id: "reale-mutua", name: "Reale Mutua" },
  { id: "axa", name: "AXA" },
  { id: "zurich", name: "Zurich" },
  { id: "groupama", name: "Groupama Assicurazioni" },
  { id: "hdi", name: "HDI Assicurazioni" },
  { id: "vittoria", name: "Vittoria Assicurazioni" },
  { id: "sara", name: "Sara Assicurazioni" },
];

function getCompanyIdentifier(input: string) {
  const value = input.trim();
  const vat = value.replace(/\s/g, "").replace(/^IT/i, "");

  if (/^\d{11}$/.test(vat)) return vat;
  if (/\s/.test(value)) return null;

  try {
    const website = new URL(value.includes("://") ? value : `https://${value}`);
    const domain = /^(?:[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?\.)+(?:[a-z]{2,63}|xn--[a-z\d-]+)\.?$/i;
    if (
      !["https:", "http:"].includes(website.protocol) ||
      website.username ||
      website.password ||
      !domain.test(website.hostname)
    ) {
      return null;
    }
    return website.origin;
  } catch {
    return null;
  }
}

export function QuoteEntry() {
  const [quoteError, setQuoteError] = useState("");
  const companyInput = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function startQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = companyInput.current;
    if (!input) return;

    const identifier = getCompanyIdentifier(input.value);
    if (!identifier) {
      setQuoteError("Inserisci una partita IVA di 11 cifre o il sito della tua azienda.");
      input.focus();
      return;
    }

    try {
      sessionStorage.setItem("insurtech-quote-company", identifier);
      router.push("/richiesta");
    } catch {
      setQuoteError("Il browser non permette di avviare la richiesta in questa scheda.");
      companyInput.current?.focus();
    }
  }

  return (
    <section className="hero shell" aria-labelledby="titolo">
      <div className="hero-copy">
        <h1 id="titolo" className="hero-title" aria-label="Assicura la tua azienda in 48 ore">
          Assicura la tua azienda <br />
          in <del className="hero-old-time" aria-hidden="true">14 giorni</del> 48h
        </h1>

        <form className="quote-composer" onSubmit={startQuote} noValidate>
          <input
            ref={companyInput}
            id="identificativo-azienda"
            type="text"
            placeholder="Partita IVA o sito web"
            aria-label="Partita IVA o sito web"
            autoComplete="off"
            autoCapitalize="none"
            enterKeyHint="go"
            spellCheck={false}
            required
            aria-invalid={quoteError ? true : undefined}
            aria-describedby={quoteError ? "errore-azienda" : undefined}
            onChange={() => setQuoteError("")}
          />
          {quoteError && <p className="quote-error" id="errore-azienda" role="alert">{quoteError}</p>}
          <button className="hero-action" type="submit">
            Richiedi una quotazione <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>

      <section className="insurer-bar" aria-labelledby="compagnie">
        <h2 id="compagnie">Le compagnie che confrontiamo per te</h2>
        <ul role="list">
          {insurers.map(({ id, name }) => (
            <li key={id}>
              <Image
                src={`/compagnie/${id}.webp`}
                alt={name}
                width={240}
                height={96}
                unoptimized
              />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
