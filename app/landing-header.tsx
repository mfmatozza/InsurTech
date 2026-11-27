"use client";

import { useEffect, useState } from "react";

export function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sync = () => setScrolled(window.scrollY > 0);
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  return (
    <header className="site-header landing-header" data-scrolled={scrolled}>
      <div className="shell header-inner">
        <a className="wordmark" href="/">InsurTech</a>
        <nav aria-label="Navigazione principale">
          <a href="#coperture">Coperture</a>
          <a className="wide-nav-link" href="#il-broker">Il broker</a>
          <a className="wide-nav-link" href="#polizze">Polizze in corso</a>
        </nav>
      </div>
    </header>
  );
}
