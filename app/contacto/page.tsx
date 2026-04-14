"use client";

import "../globals.css";
import Image from "next/image";


export default function ContactoPage() {
  const S = { container: { maxWidth: 680, margin: "0 auto", padding: "0 24px" } as React.CSSProperties };

  const channels = [
    {
      icon: "📧",
      title: "Soporte general",
      desc: "Dudas sobre la app, tu cuenta o suscripción.",
      contact: "soporte@soybalu.app",
      href: "mailto:soporte@soybalu.app",
      color: "#10B981",
      bg: "#ECFDF5",
      border: "#A7F3D0",
    },
    {
      icon: "🔒",
      title: "Privacidad y datos",
      desc: "Derechos ARCO, eliminación de cuenta o preguntas sobre tu información.",
      contact: "privacidad@grupobastión.com",
      href: "mailto:privacidad@grupobastión.com",
      color: "#0EA5E9",
      bg: "#EFF6FF",
      border: "#BFDBFE",
    },
    {
      icon: "⚖️",
      title: "Legal",
      desc: "Términos y condiciones, licencias o asuntos legales.",
      contact: "legal@grupobastión.com",
      href: "mailto:legal@grupobastión.com",
      color: "#8B5CF6",
      bg: "#F5F3FF",
      border: "#DDD6FE",
    },
    {
      icon: "📱",
      title: "Instagram",
      desc: "Síguenos para tips de finanzas personales y novedades de balu.",
      contact: "@soybalu.app",
      href: "https://instagram.com/soybalu.app",
      color: "#EC4899",
      bg: "#FDF2F8",
      border: "#FBCFE8",
    },
  ];

  const faqs = [
    {
      q: "¿Cuánto tarda en responder el soporte?",
      a: "Respondemos en menos de 24 horas en días hábiles. Para problemas urgentes con tu suscripción, normalmente respondemos en menos de 4 horas.",
    },
    {
      q: "¿Puedo cancelar mi suscripción por email?",
      a: "La cancelación se hace directamente desde App Store o Google Play (donde realizaste la compra). No podemos cancelarla por email, pero con gusto te explicamos el proceso paso a paso.",
    },
    {
      q: "¿Tienen soporte en español?",
      a: "Sí, todo nuestro soporte es en español. Somos un equipo mexicano.",
    },
    {
      q: "¿Dónde reporto un bug?",
      a: "Escríbenos a soporte@soybalu.app con una descripción del problema, tu dispositivo y versión de iOS/Android. Si puedes agregar una captura de pantalla, mejor.",
    },
  ];

  return (
    <>
      {/* Nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(248,250,252,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid #E2E8F0", height: 60, display: "flex", alignItems: "center" }}>
        <div style={{ ...S.container, display: "flex", alignItems: "center", gap: 10, width: "100%", maxWidth: 1100 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, overflow: "hidden", boxShadow: "0 4px 10px rgba(16,185,129,0.3)", flexShrink: 0 }}>
              <Image src="/logo.png" alt="balu" width={28} height={28} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </div>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, color: "#0F172A", fontSize: 16 }}>balu</span>
          </a>
          <span style={{ color: "#CBD5E1", fontSize: 14 }}>/</span>
          <span style={{ color: "#64748B", fontSize: 13 }}>Contacto</span>
        </div>
      </nav>

      <main style={{ paddingTop: 96, paddingBottom: 80, background: "#F8FAFC", minHeight: "100vh" }}>
        <div style={S.container}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ width: 72, height: 72, borderRadius: 22, overflow: "hidden", margin: "0 auto 20px", boxShadow: "0 8px 24px rgba(16,185,129,0.2)" }}>
            <Image src="/balu_waving.png" alt="balu" width={72} height={72} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
          </div>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800, letterSpacing: "-1.5px", color: "#0F172A", marginBottom: 12 }}>
              ¿Cómo podemos ayudarte?
            </h1>
            <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.6, maxWidth: 480, margin: "0 auto" }}>
              Somos un equipo pequeño pero respondemos rápido. Escríbenos al canal que más se adapte a tu duda.
            </p>
          </div>

          {/* Channels */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14, marginBottom: 48 }}>
            {channels.map((ch, i) => (
              <a key={i} href={ch.href} target={ch.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={{ background: "#fff", border: `1px solid #E2E8F0`, borderRadius: 18, padding: "22px 20px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", transition: "all 0.2s ease", cursor: "pointer", height: "100%" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = ch.border;
                    (e.currentTarget as HTMLDivElement).style.background = ch.bg;
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 32px ${ch.color}18`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#E2E8F0";
                    (e.currentTarget as HTMLDivElement).style.background = "#fff";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                  }}
                >
                  <div style={{ width: 46, height: 46, background: ch.bg, border: `1.5px solid ${ch.border}`, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 14 }}>
                    {ch.icon}
                  </div>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 700, color: "#0F172A", marginBottom: 6 }}>{ch.title}</p>
                  <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 14 }}>{ch.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: ch.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: ch.color }}>{ch.contact}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Tiempo de respuesta */}
          <div style={{ background: "linear-gradient(135deg, #ECFDF5, #D1FAE5)", border: "1px solid #A7F3D0", borderRadius: 18, padding: "20px 24px", marginBottom: 48, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ fontSize: 32 }}>⚡</div>
            <div>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 700, color: "#064E3B", marginBottom: 3 }}>Tiempo de respuesta</p>
              <p style={{ fontSize: 13, color: "#059669", lineHeight: 1.5 }}>
                Respondemos en <strong>menos de 24 horas</strong> en días hábiles (lunes a viernes). Somos un equipo en Saltillo, Coahuila, México 🇲🇽
              </p>
            </div>
          </div>

          {/* FAQ de soporte */}
          <div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "2px", color: "#10B981", textTransform: "uppercase", marginBottom: 10 }}>Preguntas frecuentes de soporte</p>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 800, letterSpacing: "-1px", color: "#0F172A", marginBottom: 24 }}>
              Antes de escribirnos
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 14, padding: "18px 20px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 700, color: "#0F172A", marginBottom: 6 }}>{faq.q}</p>
                  <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer de la página */}
          <div style={{ textAlign: "center", marginTop: 52, padding: "24px 0", borderTop: "1px solid #E2E8F0" }}>
            <p style={{ fontSize: 13, color: "#94A3B8" }}>
              balu es desarrollada por <strong style={{ color: "#475569" }}>Grupo Bastión</strong> · Saltillo, Coahuila, México
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 10 }}>
              <a href="/terminos" style={{ fontSize: 12, color: "#94A3B8", textDecoration: "none" }}>Términos y Condiciones</a>
              <a href="/privacidad" style={{ fontSize: 12, color: "#94A3B8", textDecoration: "none" }}>Política de Privacidad</a>
              <a href="/" style={{ fontSize: 12, color: "#10B981", textDecoration: "none", fontWeight: 600 }}>← Volver al inicio</a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}