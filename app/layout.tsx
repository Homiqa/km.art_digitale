import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "km.art_digitale — Créer du lien, révéler la valeur.",
  description:
    "Marielle Adjalla — Stratégie digitale, community management, création de contenus et sites vitrine."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen gradient">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
