import "../globals.css";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones — balu",
  description: "Términos y condiciones de uso de balu, app de finanzas personales desarrollada por Grupo Bastión.",
};

export default function TerminosPage() {
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
          <span style={{ color: "#64748B", fontSize: 13 }}>Términos y Condiciones</span>
        </div>
      </nav>

      <main style={{ paddingTop: 0, background: "#F8FAFC", minHeight: "100vh" }}>
        {/* Header verde */}
        <div style={{ background: "#10B981", padding: "80px 24px 40px", textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#fff", fontSize: 28, fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 6 }}>Términos y Condiciones</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>balu — App de finanzas personales</p>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 20, marginTop: 12 }}>Vigente desde: Enero 2026</span>
        </div>

        <div style={{ ...S.container, padding: "40px 24px 80px" }}>
          {/* Intro */}
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 16, padding: 24, marginBottom: 32, fontSize: 15, color: "#374151", lineHeight: 1.7, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            Estos Términos y Condiciones regulan el acceso y uso de <strong style={{ color: "#111827" }}>balu</strong>, aplicación de finanzas personales operada por <strong style={{ color: "#111827" }}>Miguel Angel Galvez Urbina</strong> (persona física con actividad empresarial) con ubicación en Saltillo, Coahuila, México. Al descargar, instalar o usar balu, aceptas quedar vinculado por estos términos. Si no estás de acuerdo, no uses la aplicación.
          </div>

          {/* Responsable del servicio */}
          <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px 24px", marginBottom: 32 }}>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "#94A3B8", letterSpacing: "1px", marginBottom: 12, textTransform: "uppercase" }}>
              Responsable del servicio
            </p>
            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "#0F172A" }}>Responsable:</strong> Miguel Angel Galvez Urbina<br />
              <strong style={{ color: "#0F172A" }}>Actividad:</strong> Persona física con actividad empresarial bajo régimen de Plataformas Tecnológicas<br />
              <strong style={{ color: "#0F172A" }}>Ubicación:</strong> Saltillo, Coahuila, México<br />
              <strong style={{ color: "#0F172A" }}>Contacto:</strong> <a href="mailto:hola@soybalu.app" style={{ color: "#10B981" }}>hola@soybalu.app</a>
            </p>
          </div>

          {/* Secciones */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            <Section num="1" title="Descripción del servicio">
              <p style={p}>balu es una aplicación de gestión de finanzas personales que te permite registrar cuentas, movimientos, presupuestos y gastos recurrentes de forma manual, y opcionalmente importar estados de cuenta bancarios en PDF con ayuda de inteligencia artificial. El servicio opera bajo modelo de suscripción con dos planes:</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, margin: "16px 0" }}>
                <div style={{ border: "1px solid #E2E8F0", borderRadius: 12, padding: 18 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#064E3B", marginBottom: 10 }}>balu Lite</h3>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#10B981", letterSpacing: "-0.5px" }}>$69 <span style={{ fontSize: 12, color: "#6B7280", fontWeight: 500 }}>/ mes</span></div>
                  <div style={{ fontSize: 12, color: "#047857", fontWeight: 600, marginTop: 4 }}>o $499 / año (ahorra ~40%)</div>
                </div>
                <div style={{ border: "1px solid #10B981", borderRadius: 12, padding: 18, background: "#ECFDF5" }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#064E3B", marginBottom: 10 }}>balu Pro</h3>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#10B981", letterSpacing: "-0.5px" }}>$129 <span style={{ fontSize: 12, color: "#6B7280", fontWeight: 500 }}>/ mes</span></div>
                  <div style={{ fontSize: 12, color: "#047857", fontWeight: 600, marginTop: 4 }}>o $999 / año (ahorra ~36%)</div>
                </div>
              </div>
              <p style={p}>Los precios están expresados en <strong>pesos mexicanos (MXN)</strong>. Las características específicas de cada plan están descritas en la app y pueden actualizarse conforme evolucione el producto.</p>
            </Section>

            <Section num="2" title="Registro y cuenta">
              <p style={p}>Para usar balu debes crear una cuenta con nombre, correo electrónico válido y contraseña. Eres responsable de:</p>
              <ul style={ul}>
                <li style={li}>Mantener la confidencialidad de tus credenciales.</li>
                <li style={li}>Toda la actividad que ocurra bajo tu cuenta.</li>
                <li style={li}>Notificarnos de inmediato si sospechas un acceso no autorizado.</li>
              </ul>
              <p style={p}>Tu sesión se gestiona mediante tokens JWT almacenados de forma segura en tu dispositivo. No está permitido compartir tu cuenta con terceros ni usar la app de forma que viole estos términos.</p>
            </Section>

            <Section num="3" title="Suscripción y pagos">
              <p style={p}>Al suscribirte a balu Lite o balu Pro aceptas lo siguiente:</p>
              <ul style={ul}>
                <li style={li}>El cobro se realiza de forma anticipada (mensual o anual) a través de <strong>Google Play o App Store</strong>, según la tienda donde descargaste la app.</li>
                <li style={li}>La suscripción se renueva automáticamente al final de cada período salvo que la canceles antes del vencimiento.</li>
                <li style={li}>Los precios pueden ajustarse con al menos <strong>30 días de aviso previo</strong>.</li>
              </ul>
              <div style={highlight}>
                Plan anual: <strong>balu Lite = $499 MXN/año</strong> (vs $828 acumulado mensualmente) y <strong>balu Pro = $999 MXN/año</strong> (vs $1,548 acumulado mensualmente).
              </div>
            </Section>

            <Section num="4" title="Cancelaciones y reembolsos">
              <p style={p}>Puedes cancelar tu suscripción en cualquier momento desde la configuración de tu cuenta en Google Play o App Store:</p>
              <ul style={ul}>
                <li style={li}>Mantendrás acceso hasta el fin del período pagado (mensual o anual).</li>
                <li style={li}>No se realizan reembolsos proporcionales por períodos no utilizados, salvo lo que exija la legislación mexicana o las políticas de la tienda.</li>
              </ul>
              <div style={warning}>
                Eliminar la app no cancela tu suscripción. La cancelación debe realizarse desde la tienda donde realizaste la compra.
              </div>
            </Section>

            <Section num="5" title="Funciones con Inteligencia Artificial">
              <p style={p}>balu utiliza la <strong>API de Anthropic (Claude)</strong> en dos funciones opcionales:</p>
              <ul style={ul}>
                <li style={li}><strong>Importación de PDFs:</strong> el contenido de tu estado de cuenta bancario es enviado a Anthropic para extraer los movimientos automáticamente. balu no almacena el PDF tras el procesamiento. La precisión puede variar según el formato — te recomendamos revisar los movimientos antes de confirmarlos.</li>
                <li style={li}><strong>Insight del dashboard:</strong> el resumen financiero mensual personalizado se genera enviando datos agregados de tu mes (totales de ingresos, gastos, top 3 categorías de gasto y tu primer nombre) a la API de Anthropic. No se envían movimientos individuales ni información de identificación adicional.</li>
              </ul>
              <p style={p}>Al usar estas funciones aceptas que tus datos sean procesados por Anthropic conforme a su propia <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#10B981" }}>política de privacidad</a>. Si no deseas usar IA, puedes registrar todos tus movimientos manualmente y el insight simplemente no se generará.</p>
            </Section>

            <Section num="5b" title="Exportación de datos y archivos">
              <p style={p}>balu te permite:</p>
              <ul style={ul}>
                <li style={li}><strong>Exportar a Excel:</strong> generar un archivo con tus movimientos del mes directamente en tu dispositivo. El proceso es local — no pasa por nuestros servidores.</li>
                <li style={li}><strong>Importar PDFs manualmente:</strong> seleccionar un archivo PDF desde tu dispositivo o recibirlo compartido desde otra app (como tu banco). balu accede únicamente al archivo que tú seleccionas explícitamente.</li>
              </ul>
            </Section>

            <Section num="6" title="Uso permitido y prohibiciones">
              <p style={p}>balu está diseñada para uso personal y legítimo. Queda prohibido:</p>
              <ul style={ul}>
                <li style={li}>Usar la app para actividades ilegales o fraudulentas.</li>
                <li style={li}>Intentar acceder, modificar o dañar los servidores de balu.</li>
                <li style={li}>Realizar ingeniería inversa o intentar extraer el código fuente.</li>
                <li style={li}>Usar la app para registrar datos financieros de terceros sin su consentimiento.</li>
                <li style={li}>Automatizar peticiones a nuestra API sin autorización expresa.</li>
              </ul>
            </Section>

            <Section num="7" title="Propiedad intelectual">
              <p style={p}>Todos los derechos sobre balu — incluyendo código, diseño, nombre, logotipo y mascota — son propiedad exclusiva de <strong>Miguel Angel Galvez Urbina</strong>. Se te otorga una licencia limitada, personal y no transferible para usar la app conforme a estos términos.</p>
            </Section>

            <Section num="8" title="Limitación de responsabilidad">
              <p style={p}>balu es una herramienta de registro personal. No somos una institución financiera ni ofrecemos asesoría financiera, fiscal o de inversión.</p>
              <ul style={ul}>
                <li style={li}>No nos responsabilizamos por decisiones tomadas con base en la información registrada en la app.</li>
                <li style={li}>No garantizamos disponibilidad ininterrumpida (puede haber mantenimientos programados).</li>
                <li style={li}>La precisión de los datos importados por PDF depende de la calidad del documento y del procesamiento de IA.</li>
                <li style={li}>En la máxima medida permitida por la ley, nuestra responsabilidad total no excederá el monto pagado en los últimos 3 meses de suscripción.</li>
              </ul>
            </Section>

            <Section num="9" title="Modificaciones al servicio y términos">
              <p style={p}>Nos reservamos el derecho de modificar, suspender o descontinuar cualquier aspecto del servicio. Para cambios materiales en estos términos, notificaremos con al menos <strong>15 días de anticipación</strong>. El uso continuo implica aceptación de los términos actualizados.</p>
            </Section>

            <Section num="10" title="Terminación de cuenta">
              <p style={p}>Puedes eliminar tu cuenta desde Ajustes en la app. Miguel Angel Galvez Urbina puede suspender cuentas que violen estos términos o en caso de actividad fraudulenta. Los datos serán tratados conforme a nuestra Política de Privacidad.</p>
            </Section>

            <Section num="11" title="Ley aplicable y jurisdicción">
              <p style={p}>Estos términos se rigen por las leyes de los <strong>Estados Unidos Mexicanos</strong>. Cualquier controversia se someterá a los tribunales competentes de <strong>Saltillo, Coahuila, México</strong>.</p>
            </Section>

          </div>

          {/* Contact box */}
          <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: 16, padding: 24, marginTop: 32, textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "#065F46", marginBottom: 8 }}>¿Tienes preguntas sobre estos términos?</h3>
            <p style={{ fontSize: 14, color: "#047857", marginBottom: 4 }}>Escríbenos a <a href="mailto:hola@soybalu.app" style={{ color: "#10B981", fontWeight: 700, textDecoration: "none" }}>hola@soybalu.app</a></p>
            <p style={{ fontSize: 14, color: "#047857" }}>Miguel Angel Galvez Urbina — Saltillo, Coahuila, México</p>
          </div>
        </div>
      </main>

      <footer style={{ textAlign: "center", padding: 24, fontSize: 12, color: "#9CA3AF", background: "#fff", borderTop: "1px solid #E2E8F0" }}>
        © 2026 Miguel Angel Galvez Urbina. Todos los derechos reservados. balu es un proyecto operado por Miguel Angel Galvez Urbina (RFC GAUM0212276K3), Saltillo, Coahuila, México.
      </footer>
    </>
  );
}

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 16, padding: "24px 28px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
      <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, fontWeight: 800, color: "#064E3B", marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ background: "#10B981", color: "#fff", fontSize: 11, fontWeight: 700, width: 24, height: 24, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{num}</span>
        {title}
      </h2>
      {children}
    </div>
  );
}

const p: React.CSSProperties = { fontSize: 14, color: "#374151", marginBottom: 12, lineHeight: 1.7 };
const ul: React.CSSProperties = { paddingLeft: 20, marginBottom: 12 };
const li: React.CSSProperties = { fontSize: 14, color: "#374151", marginBottom: 6, lineHeight: 1.6 };
const highlight: React.CSSProperties = { background: "#ECFDF5", borderLeft: "3px solid #10B981", padding: "12px 16px", borderRadius: "0 8px 8px 0", fontSize: 14, color: "#065F46", marginTop: 12 };
const warning: React.CSSProperties = { background: "#FEF3C7", borderLeft: "3px solid #F59E0B", padding: "12px 16px", borderRadius: "0 8px 8px 0", fontSize: 14, color: "#92400E", marginTop: 12 };