import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones — balu",
  description: "Términos y condiciones de uso de balu, app de finanzas personales por Grupo Bastión.",
};

export default function TerminosPage() {
  const S = { container: { maxWidth: 720, margin: "0 auto", padding: "0 24px" } as React.CSSProperties };

  const sections = [
    { num: "01", title: "Descripción del servicio", content: `balu es una aplicación de gestión de finanzas personales que te permite registrar cuentas, movimientos, presupuestos y gastos recurrentes de forma manual, y opcionalmente importar estados de cuenta bancarios en PDF con ayuda de inteligencia artificial.\n\nEl servicio opera bajo modelo de suscripción:\n• balu Lite: $69/mes o $499/año (ahorra ~40%)\n• balu Pro: $129/mes o $999/año (ahorra ~36%)\n\nLos precios están expresados en pesos mexicanos (MXN).` },
    { num: "02", title: "Registro y cuenta", content: `Para usar balu debes crear una cuenta con nombre, correo electrónico válido y contraseña. Eres responsable de:\n\n• Mantener la confidencialidad de tus credenciales.\n• Toda la actividad que ocurra bajo tu cuenta.\n• Notificarnos de inmediato si sospechas un acceso no autorizado.\n\nTu sesión se gestiona mediante tokens JWT almacenados de forma segura en tu dispositivo.` },
    { num: "03", title: "Suscripción y pagos", content: `Al suscribirte aceptas lo siguiente:\n\n• El cobro se realiza de forma anticipada (mensual o anual) a través de Google Play o App Store.\n• La suscripción se renueva automáticamente al final de cada período salvo que la canceles antes del vencimiento.\n• Los precios pueden ajustarse con al menos 30 días de aviso previo.` },
    { num: "04", title: "Cancelaciones y reembolsos", content: `Puedes cancelar tu suscripción en cualquier momento desde Google Play o App Store:\n\n• Mantendrás acceso hasta el fin del período pagado.\n• No se realizan reembolsos proporcionales por períodos no utilizados.\n\n⚠️ Eliminar la app no cancela tu suscripción. La cancelación debe realizarse desde la tienda donde realizaste la compra.` },
    { num: "05", title: "Funciones con Inteligencia Artificial", content: `balu utiliza la API de Anthropic (Claude) en dos funciones opcionales:\n\n• Importación de PDFs: el contenido de tu estado de cuenta bancario es enviado a Anthropic para extraer los movimientos. balu no almacena el PDF tras el procesamiento.\n\n• Insight del dashboard: datos agregados de tu mes (totales de ingresos, gastos, top 3 categorías y tu primer nombre) se envían a Anthropic para el resumen mensual.\n\nAl usar estas funciones aceptas el procesamiento de datos por Anthropic conforme a su política de privacidad.` },
    { num: "06", title: "Exportación de datos y archivos", content: `balu te permite:\n\n• Exportar a Excel: proceso completamente local — no pasa por nuestros servidores.\n• Importar PDFs manualmente: balu accede únicamente al archivo que tú seleccionas explícitamente.` },
    { num: "07", title: "Uso permitido y prohibiciones", content: `Queda prohibido:\n\n• Usar la app para actividades ilegales o fraudulentas.\n• Intentar acceder, modificar o dañar los servidores de balu.\n• Realizar ingeniería inversa o extraer el código fuente.\n• Registrar datos financieros de terceros sin su consentimiento.\n• Automatizar peticiones a nuestra API sin autorización.` },
    { num: "08", title: "Propiedad intelectual", content: `Todos los derechos sobre balu — incluyendo código, diseño, nombre, logotipo y mascota — son propiedad exclusiva de Grupo Bastión. Se te otorga una licencia limitada, personal y no transferible para usar la app.` },
    { num: "09", title: "Limitación de responsabilidad", content: `balu es una herramienta de registro personal. No somos una institución financiera ni ofrecemos asesoría financiera, fiscal o de inversión.\n\n• No nos responsabilizamos por decisiones tomadas con base en la información registrada.\n• No garantizamos disponibilidad ininterrumpida.\n• En la máxima medida permitida por la ley, nuestra responsabilidad no excederá el monto pagado en los últimos 3 meses.` },
    { num: "10", title: "Modificaciones al servicio", content: `Nos reservamos el derecho de modificar, suspender o descontinuar cualquier aspecto del servicio. Para cambios materiales, notificaremos con al menos 15 días de anticipación.` },
    { num: "11", title: "Terminación de cuenta", content: `Puedes eliminar tu cuenta desde Ajustes en la app. Grupo Bastión puede suspender cuentas que violen estos términos. Los datos serán tratados conforme a nuestra Política de Privacidad.` },
    { num: "12", title: "Ley aplicable y jurisdicción", content: `Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia se someterá a los tribunales competentes de Saltillo, Coahuila, México.` },
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
          <span style={{ color: "#64748B", fontSize: 13 }}>Términos y Condiciones</span>
        </div>
      </nav>

      <main style={{ paddingTop: 96, paddingBottom: 80, background: "#F8FAFC", minHeight: "100vh" }}>
        <div style={S.container}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ display: "inline-block", background: "#ECFDF5", border: "1px solid #A7F3D0", color: "#059669", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100, marginBottom: 16, letterSpacing: "1px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>VIGENTE DESDE ENERO 2026</span>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(30px, 5vw, 44px)", fontWeight: 800, letterSpacing: "-1.5px", color: "#0F172A", marginBottom: 14 }}>Términos y Condiciones</h1>
            <p style={{ fontSize: 15, color: "#64748B" }}>balu · Desarrollada por <strong style={{ color: "#0F172A" }}>Grupo Bastión</strong></p>
          </div>

          <div style={{ background: "#fff", border: "1px solid #A7F3D0", borderRadius: 16, padding: 22, marginBottom: 24, boxShadow: "0 2px 8px rgba(16,185,129,0.08)" }}>
            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.7 }}>
              Estos Términos y Condiciones regulan el acceso y uso de <strong style={{ color: "#0F172A" }}>balu</strong>, aplicación de finanzas personales desarrollada por <strong style={{ color: "#0F172A" }}>Grupo Bastión</strong>, con sede en Saltillo, Coahuila, México. Al descargar, instalar o usar balu, aceptas quedar vinculado por estos términos.
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
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 700, color: "#059669", marginBottom: 6 }}>¿Tienes preguntas sobre estos términos?</p>
            <p style={{ fontSize: 14, color: "#065F46", marginBottom: 4 }}>Escríbenos a <a href="mailto:legal@grupobastión.com" style={{ color: "#10B981", fontWeight: 600 }}>legal@grupobastión.com</a></p>
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