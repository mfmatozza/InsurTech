import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Next } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = { title: "InsurTech" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body className={atkinson.className}>{children}</body>
    </html>
  );
}
