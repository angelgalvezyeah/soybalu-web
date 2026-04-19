import "../globals.css";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eliminar cuenta — balu",
  description: "Cómo eliminar tu cuenta y todos tus datos de balu.",
};

export default function EliminarCuentaPage() {
  const S = { container: { maxWidth: 720, margin: "0 auto", padding: "0 24px" } as React.CSSProperties };

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(248,250,252,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid #E2E8F0", height: 60, display: "flex", alignItems: "center" }}>
        <div style={{ ...S.container, display: "flex", alignItems: "center", gap: 10, width: "100%", maxWidth: 1100 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, overflow: "hidden", boxShadow: "0 4px 10px rgba(16,185,129,0.3)", flexShrink: 0 }}>
              <Image src="/logo.png" alt="balu" width={28} height={28} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </div>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, color: "#0F172A", fontSize: 16 }}>balu</span>
          </a>
          <span style={{ color: "#CBD5E1", fontSize: 14 }}>/</span>
          <span style={{ color: "#64748B", fontSize: 13 }}>Eliminar cuenta</span>
        </div>
      </nav>

      <main style={{ paddingTop: 0, background: "#F8FAFC", minHeight: "100vh" }}>
        {/* Header verde */}
        <div style={{ background: "#10B981", padding: "80px 24px 40px", textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#fff", fontSize: 28, fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 6 }}>Eliminar tu cuenta</h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 14 }}>Cómo borrar todos tus datos de balu</p>
        </div>

        <div style={{ ...S.container, padding: "40px 24px 80px" }}>
          {/* Intro */}
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 16, padding: 24, marginBottom: 24, fontSize: 15, color: "#374151", lineHeight: 1.7, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            Tú eres dueño de tus datos. Si decides eliminar tu cuenta de <strong style={{ color: "#111827" }}>balu</strong>, tienes dos opciones — ambas borran toda tu información personal y financiera.
          </div>

          {/* Opción 1 */}
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px 28px", marginBottom: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ background: "#10B981", color: "#fff", width: 32, height: 32, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>1</div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, fontWeight: 800, color: "#064E3B", letterSpacing: "-0.2px" }}>Desde la app (recomendado)</h2>
            </div>
            <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, marginBottom: 14 }}>Es la forma más rápida. Desde tu dispositivo:</p>
            <ol style={{ paddingLeft: 20, marginBottom: 0 }}>
              <li style={{ fontSize: 14, color: "#374151", marginBottom: 8, lineHeight: 1.6 }}>Abre <strong>balu</strong> e inicia sesión.</li>
              <li style={{ fontSize: 14, color: "#374151", marginBottom: 8, lineHeight: 1.6 }}>Ve a <strong>Ajustes</strong> (ícono de engrane, esquina superior derecha).</li>
              <li style={{ fontSize: 14, color: "#374151", marginBottom: 8, lineHeight: 1.6 }}>Selecciona <strong>Eliminar cuenta</strong>.</li>
              <li style={{ fontSize: 14, color: "#374151", marginBottom: 8, lineHeight: 1.6 }}>Confirma la eliminación.</li>
            </ol>
            <div style={{ background: "#ECFDF5", borderLeft: "3px solid #10B981", padding: "12px 16px", borderRadius: "0 8px 8px 0", fontSize: 13, color: "#065F46", marginTop: 16, lineHeight: 1.6 }}>
              La eliminación es inmediata. Tu cuenta y datos financieros desaparecen de nuestros servidores activos en cuestión de segundos.
            </div>
          </div>

          {/* Opción 2 */}
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px 28px", marginBottom: 32, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ background: "#10B981", color: "#fff", width: 32, height: 32, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>2</div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, fontWeight: 800, color: "#064E3B", letterSpacing: "-0.2px" }}>Por correo electrónico</h2>
            </div>
            <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, marginBottom: 14 }}>Si no puedes acceder a la app, escríbenos desde el correo con el que te registraste:</p>
            <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 12, padding: "16px 18px", marginBottom: 14 }}>
              <p style={{ fontSize: 13, color: "#64748B", marginBottom: 6 }}><strong style={{ color: "#0F172A" }}>Para:</strong> <a href="mailto:hola@soybalu.app?subject=Eliminar%20cuenta" style={{ color: "#10B981", textDecoration: "none", fontWeight: 600 }}>hola@soybalu.app</a></p>
              <p style={{ fontSize: 13, color: "#64748B", marginBottom: 6 }}><strong style={{ color: "#0F172A" }}>Asunto:</strong> Eliminar cuenta</p>
              <p style={{ fontSize: 13, color: "#64748B" }}><strong style={{ color: "#0F172A" }}>Mensaje:</strong> "Solicito la eliminación de mi cuenta y todos mis datos asociados."</p>
            </div>
            <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>Procesaremos tu solicitud en un plazo máximo de <strong>20 días hábiles</strong>, conforme lo establece la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de México.</p>
          </div>

          {/* Qué se borra */}
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px 28px", marginBottom: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, fontWeight: 800, color: "#064E3B", marginBottom: 14, letterSpacing: "-0.2px" }}>¿Qué datos se eliminan?</h2>
            <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
              <li style={{ fontSize: 14, color: "#374151", marginBottom: 6, lineHeight: 1.6 }}>Tu cuenta de usuario (nombre, email, teléfono vinculado).</li>
              <li style={{ fontSize: 14, color: "#374151", marginBottom: 6, lineHeight: 1.6 }}>Todas tus entidades financieras, cuentas, movimientos, presupuestos y gastos recurrentes.</li>
              <li style={{ fontSize: 14, color: "#374151", marginBottom: 6, lineHeight: 1.6 }}>Tu historial de conversaciones con el asistente de IA por WhatsApp.</li>
              <li style={{ fontSize: 14, color: "#374151", marginBottom: 6, lineHeight: 1.6 }}>Tu sesión activa y cualquier token de autenticación.</li>
            </ul>
            <div style={{ background: "#FEF3C7", borderLeft: "3px solid #F59E0B", padding: "12px 16px", borderRadius: "0 8px 8px 0", fontSize: 13, color: "#92400E", marginTop: 16, lineHeight: 1.6 }}>
              <strong>Nota:</strong> Los registros de facturación (si tuviste suscripción activa) se conservan hasta 5 años por requisito fiscal mexicano, conforme al Código Fiscal de la Federación.
            </div>
          </div>

          {/* Sobre suscripción */}
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px 28px", marginBottom: 32, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, fontWeight: 800, color: "#064E3B", marginBottom: 14, letterSpacing: "-0.2px" }}>¿Y mi suscripción?</h2>
            <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, marginBottom: 10 }}>Eliminar tu cuenta en balu <strong>no cancela automáticamente tu suscripción</strong> de pago. Debes cancelarla desde la tienda donde la contrataste:</p>
            <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
              <li style={{ fontSize: 14, color: "#374151", marginBottom: 6, lineHeight: 1.6 }}><a href="https://support.google.com/googleplay/answer/7018481" target="_blank" rel="noopener noreferrer" style={{ color: "#10B981", textDecoration: "none", fontWeight: 600 }}>Cómo cancelar en Google Play →</a></li>
              <li style={{ fontSize: 14, color: "#374151", marginBottom: 6, lineHeight: 1.6 }}><a href="https://support.apple.com/es-mx/HT202039" target="_blank" rel="noopener noreferrer" style={{ color: "#10B981", textDecoration: "none", fontWeight: 600 }}>Cómo cancelar en App Store →</a></li>
            </ul>
          </div>

          {/* Contact box */}
          <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: 16, padding: 24, textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "#065F46", marginBottom: 8 }}>¿Necesitas ayuda?</h3>
            <p style={{ fontSize: 14, color: "#047857", marginBottom: 4 }}>Escríbenos a <a href="mailto:hola@soybalu.app" style={{ color: "#10B981", fontWeight: 700, textDecoration: "none" }}>hola@soybalu.app</a></p>
            <p style={{ fontSize: 13, color: "#047857" }}>Miguel Angel Galvez Urbina — Saltillo, Coahuila, México</p>
          </div>
        </div>
      </main>

      <footer style={{ textAlign: "center", padding: 24, fontSize: 12, color: "#9CA3AF", background: "#fff", borderTop: "1px solid #E2E8F0" }}>
        © 2026 Miguel Angel Galvez Urbina. Todos los derechos reservados. balu es un proyecto operado por Miguel Angel Galvez Urbina (RFC GAUM0212276K3), Saltillo, Coahuila, México.
      </footer>
    </>
  );
}