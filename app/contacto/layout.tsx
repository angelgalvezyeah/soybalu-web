import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — balu",
  description: "¿Tienes dudas sobre balu? Escríbenos y te respondemos a la brevedad. Soporte técnico, preguntas sobre precios o privacidad.",
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}