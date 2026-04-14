import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — balu",
  description: "Política de privacidad de balu, app de finanzas personales por Grupo Bastión.",
};

export default function PrivacidadPage() {
  const S = { container: { maxWidth: 720, margin: "0 auto", padding: "0 24px" } as React.CSSProperties };

  const sections = [
    { num: "01", title: "Información que recopilamos", content: `Recopilamos únicamente la información que tú introduces directamente:\n\n• Datos de cuenta: nombre, correo y contraseña (cifrada, nunca en texto plano).\n• Datos financieros personales: cuentas, movimientos, presupuestos y saldos que tú registras.\n• Entidades: nombre, descripción y moneda de tus entidades financieras.\n• PDFs bancarios (opcional): enviados temporalmente a Anthropic para extraer movimientos. No almacenados tras el procesamiento.\n• Resumen mensual (insight): datos agregados del mes y tu primer nombre para el análisis de IA.\n• Progreso de onboarding: qué pasos del tutorial has completado.\n• Preferencias locales: token de sesión guardado en tu dispositivo.\n\n✅ balu NO recopila contraseñas bancarias, no rastrea tu ubicación, no usa cámara ni micrófono, no accede a contactos y no tiene analíticas de terceros.` },
    { num: "02", title: "Cómo usamos tu información", content: `Usamos tu información exclusivamente para:\n\n• Proveer y mantener el funcionamiento de balu.\n• Autenticar tu sesión mediante tokens JWT.\n• Sincronizar tus datos entre dispositivos.\n• Procesar importaciones de PDFs con IA.\n• Gestionar tu suscripción.\n• Atender solicitudes de soporte.\n\nNo usamos tus datos para publicidad, análisis de crédito ni los compartimos con terceros para fines comerciales.` },
    { num: "03", title: "Almacenamiento y seguridad", content: `Tus datos se almacenan en servidores seguros en Fly.io. Medidas aplicadas:\n\n• Transmisión cifrada mediante HTTPS/TLS.\n• Autenticación con tokens JWT.\n• Contraseñas con hash criptográfico seguro.\n• Acceso a base de datos restringido al personal de Grupo Bastión.` },
    { num: "04", title: "Servicios de terceros", content: `balu utiliza:\n\n• Anthropic (Claude AI) — Importación de PDFs: el contenido se envía a Anthropic solo para extraer movimientos. balu no almacena el PDF.\n\n• Anthropic (Claude AI) — Insight del dashboard: datos agregados del mes y tu primer nombre. Sin movimientos individuales ni datos adicionales.\n\n• Fly.io — Infraestructura de servidor.\n\n• Google Play / App Store — Procesamiento de pagos.\n\n⚠️ Si no deseas que tu PDF sea procesado por Anthropic, no uses la función de importación.` },
    { num: "05", title: "Exportación y archivos locales", content: `La exportación a Excel es completamente local — el archivo se genera en tu dispositivo sin pasar por nuestros servidores.\n\nLa selección de archivos PDF accede únicamente al archivo que tú seleccionas explícitamente.` },
    { num: "06", title: "Notificaciones", content: `Las notificaciones de balu son completamente locales — programadas en tu dispositivo sin pasar por nuestros servidores. No almacenamos tokens de notificación push.\n\nPuedes activarlas o desactivarlas desde Ajustes en la app.` },
    { num: "07", title: "Retención de datos", content: `Conservamos tu información mientras tu cuenta esté activa. Si eliminas tu cuenta:\n\n• Tus datos financieros se eliminan de nuestros servidores en 30 días.\n• Los registros de facturación se conservan conforme a la legislación fiscal mexicana (hasta 5 años).` },
    { num: "08", title: "Tus derechos (LFPDPPP)", content: `Conforme a la Ley Federal de Protección de Datos Personales, tienes derechos ARCO (Acceso, Rectificación, Cancelación y Oposición).\n\nEscríbenos a privacidad@grupobastión.com con el asunto "Derechos ARCO". Respondemos en máximo 20 días hábiles.\n\nTambién puedes eliminar tu cuenta directamente desde Ajustes en la app.` },
    { num: "09", title: "Menores de edad", content: `balu no está dirigida a menores de 18 años. No recopilamos conscientemente información de menores. Si detectamos que un usuario es menor de edad, eliminaremos su cuenta y datos asociados.` },
    { num: "10", title: "Cambios a esta política", content: `Podemos actualizar esta política ocasionalmente. Para cambios materiales, notificaremos con al menos 15 días de anticipación mediante la app o correo electrónico.` },
  ];

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(248,250,252,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid #E2E8F0", height: 60, display: "flex", alignItems: "center" }}>
        <div style={{ ...S.container, display: "flex", alignItems: "center", gap: 10, width: "100%" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 28, height: 28, background: "linear-gradient(135deg, #10B981, #059669)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🐻</div>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, color: "#0F172A", fontSize: 16 }}>balu</span>
          </a>
          <span style={{ color: "#CBD5E1", fontSize: 14 }}>/</span>
          <span style={{ color: "#64748B", fontSize: 13 }}>Política de Privacidad</span>
        </div>
      </nav>

      <main style={{ paddingTop: 96, paddingBottom: 80, background: "#F8FAFC", minHeight: "100vh" }}>
        <div style={S.container}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ display: "inline-block", background: "#ECFDF5", border: "1px solid #A7F3D0", color: "#059669", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100, marginBottom: 16, letterSpacing: "1px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>VIGENTE DESDE ENERO 2026</span>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(30px, 5vw, 44px)", fontWeight: 800, letterSpacing: "-1.5px", color: "#0F172A", marginBottom: 14 }}>Política de Privacidad</h1>
            <p style={{ fontSize: 15, color: "#64748B" }}>balu · Desarrollada por <strong style={{ color: "#0F172A" }}>Grupo Bastión</strong></p>
          </div>

          <div style={{ background: "#fff", border: "1px solid #A7F3D0", borderRadius: 16, padding: 22, marginBottom: 24, boxShadow: "0 2px 8px rgba(16,185,129,0.08)" }}>
            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.7 }}>
              En <strong style={{ color: "#0F172A" }}>balu</strong>, desarrollada por <strong style={{ color: "#0F172A" }}>Grupo Bastión</strong> con sede en Saltillo, Coahuila, México, nos tomamos muy en serio la privacidad de tus datos. Esta política explica qué información recopilamos, cómo la usamos y qué derechos tienes sobre ella.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {sections.map((section, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 16, padding: "22px 24px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 26, height: 26, background: "linear-gradient(135deg, #10B981, #059669)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", flexShrink: 0 }}>{section.num}</div>
                  <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 700, color: "#0F172A" }}>{section.title}</h2>
                </div>
                <div style={{ paddingLeft: 38 }}>
                  {section.content.split("\n\n").map((para, j) => (
                    <p key={j} style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, marginBottom: j < section.content.split("\n\n").length - 1 ? 10 : 0, whiteSpace: "pre-line" }}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "linear-gradient(135deg, #ECFDF5, #D1FAE5)", border: "1px solid #A7F3D0", borderRadius: 16, padding: 24, marginTop: 24, textAlign: "center" }}>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 700, color: "#059669", marginBottom: 6 }}>¿Tienes preguntas sobre privacidad?</p>
            <p style={{ fontSize: 14, color: "#065F46", marginBottom: 4 }}>Escríbenos a <a href="mailto:privacidad@grupobastión.com" style={{ color: "#10B981", fontWeight: 600 }}>privacidad@grupobastión.com</a></p>
            <p style={{ fontSize: 13, color: "#6EE7B7" }}>Grupo Bastión · Saltillo, Coahuila, México</p>
          </div>
        </div>
      </main>

      <footer style={{ borderTop: "1px solid #E2E8F0", padding: "22px 0", textAlign: "center", background: "#fff" }}>
        <p style={{ fontSize: 12, color: "#CBD5E1" }}>© 2026 Grupo Bastión. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}