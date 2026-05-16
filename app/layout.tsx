import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PulsarOS · Não é curso. É a sua empresa em forma de IA.",
  description:
    "Pulse, Donna e 6 VPs instalados no SEU servidor. Equipe inteira em forma de IA · com posse total e fração do custo de mercado.",
  openGraph: {
    title: "PulsarOS · Não é curso. É a sua empresa em forma de IA.",
    description:
      "Pulse, Donna e 6 VPs · War Room · 28 heads · arquitetura Claude. R$ 4.997 (consultorias entregam similar por R$ 49 mil/ano).",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
