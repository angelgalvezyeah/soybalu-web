import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "balu — App de finanzas personales. Por fin claras. México.",
  description:
    "balu es la app de finanzas personales que te dice exactamente cuánto tienes, cuánto debes y en qué se va tu dinero. Registra, importa con IA, presupuesta y exporta.",
  keywords: "finanzas personales, app finanzas mexico, presupuesto, gastos, ingresos, balu",
  authors: [{ name: "Grupo Bastión" }],
  metadataBase: new URL("https://soybalu.app"),
  openGraph: {
    title: "balu — Tus finanzas personales, por fin claras",
    description:
      "Registra tus movimientos, importa estados de cuenta con IA, controla presupuestos y entiende a dónde va tu dinero cada mes.",
    url: "https://soybalu.app",
    siteName: "balu",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "balu — Tus finanzas personales, por fin claras",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "balu — Tus finanzas personales, por fin claras",
    description: "La app de finanzas personales hecha para México.",
    images: ["/api/og"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#F8FAFC", color: "#0F172A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}