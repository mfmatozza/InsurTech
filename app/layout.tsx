import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Next, Barlow_Condensed } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: false,
});

const display = Barlow_Condensed({
  weight: "800",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = { title: "InsurTech" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body className={`${atkinson.className} ${display.variable}`}>{children}</body>
    </html>
  );
}
