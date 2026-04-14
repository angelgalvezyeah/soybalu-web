import "../globals.css";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — balu",
  description: "Política de privacidad de balu, app de finanzas personales desarrollada por Grupo Bastión.",
};

export default function PrivacidadPage() {
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
          <span style={{ color: "#64748B", fontSize: 13 }}>Política de Privacidad</span>
        </div>
      </nav>

      <main style={{ paddingTop: 0, background: "#F8FAFC", minHeight: "100vh" }}>
        {/* Header verde */}
        <div style={{ background: "#10B981", padding: "80px 24px 40px", textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#fff", fontSize: 28, fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 6 }}>Política de Privacidad</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>balu — App de finanzas personales</p>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 20, marginTop: 12 }}>Vigente desde: Enero 2026</span>
        </div>

        <div style={{ ...S.container, padding: "40px 24px 80px" }}>
          {/* Intro */}
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 16, padding: 24, marginBottom: 32, fontSize: 15, color: "#374151", lineHeight: 1.7, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            En <strong style={{ color: "#111827" }}>balu</strong>, desarrollada por <strong style={{ color: "#111827" }}>Grupo Bastión</strong> con sede en Saltillo, Coahuila, México, nos tomamos muy en serio la privacidad de tus datos. Esta política explica qué información recopilamos, cómo la usamos y qué derechos tienes sobre ella. Al usar balu, aceptas los términos descritos aquí.
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            <Section num="1" title="Información que recopilamos">
              <p style={p}>Para brindarte el servicio de balu, recopilamos únicamente la información que tú introduces directamente:</p>
              <ul style={ul}>
                <li style={li}><strong>Datos de cuenta:</strong> nombre, dirección de correo electrónico y contraseña (almacenada con cifrado seguro, nunca en texto plano).</li>
                <li style={li}><strong>Datos financieros personales:</strong> cuentas, movimientos (fecha, descripción, nota, monto), presupuestos, gastos recurrentes y saldos iniciales que tú mismo registras. Son de uso exclusivo tuyo.</li>
                <li style={li}><strong>Entidades:</strong> nombre, descripción y moneda de las entidades financieras que crees (ej. "Finanzas personales", "Negocio").</li>
                <li style={li}><strong>PDFs bancarios (opcional):</strong> si usas la función de importación, el PDF de tu estado de cuenta es enviado temporalmente a un servicio de inteligencia artificial para extraer los movimientos. El archivo no es almacenado por balu tras el procesamiento.</li>
                <li style={li}><strong>Resumen financiero mensual (insight):</strong> el dashboard puede mostrar un comentario personalizado generado por inteligencia artificial. Para ello, datos agregados del mes (totales de ingresos, gastos y top 3 categorías de gasto) y tu primer nombre son enviados a la API de Anthropic. No se envían nombres de cuentas ni detalles individuales de movimientos.</li>
                <li style={li}><strong>Archivos compartidos desde otras apps (opcional):</strong> si compartes un PDF bancario desde tu app del banco u otra aplicación directamente a balu, el archivo es recibido y procesado localmente o enviado a la API de importación. balu no accede a tus archivos sin que tú inicies esta acción.</li>
                <li style={li}><strong>Progreso de onboarding:</strong> un indicador de qué pasos del tutorial has completado, para personalizar tu experiencia inicial.</li>
                <li style={li}><strong>Preferencias locales:</strong> tu sesión (token de autenticación) y preferencias de visualización se guardan localmente en tu dispositivo mediante almacenamiento estándar del sistema operativo.</li>
              </ul>
              <div style={highlight}>
                balu <strong>no recopila</strong> datos bancarios de acceso (contraseñas bancarias, PINs), no accede a tus cuentas financieras externas, no rastrea tu ubicación, no usa tu cámara o micrófono, no accede a tus contactos, y no implementa ningún sistema de analíticas o seguimiento de comportamiento de terceros.
              </div>
            </Section>

            <Section num="2" title="Cómo usamos tu información">
              <p style={p}>Usamos tu información exclusivamente para:</p>
              <ul style={ul}>
                <li style={li}>Proveer y mantener el funcionamiento de la app balu.</li>
                <li style={li}>Autenticar tu sesión de forma segura mediante tokens JWT.</li>
                <li style={li}>Sincronizar tus datos financieros entre tus dispositivos.</li>
                <li style={li}>Procesar la importación de PDFs bancarios con ayuda de inteligencia artificial.</li>
                <li style={li}>Enviarte recordatorios locales que tú actives (día 1 de cada mes, gestionados directamente en tu dispositivo sin pasar por nuestros servidores).</li>
                <li style={li}>Gestionar tu suscripción (balu Lite o balu Pro).</li>
                <li style={li}>Atender solicitudes de soporte técnico.</li>
              </ul>
              <p style={{ ...p, fontWeight: 700, color: "#111827" }}>No usamos tus datos financieros para publicidad, análisis de crédito, scoring financiero, ni los compartimos con terceros para fines comerciales.</p>
            </Section>

            <Section num="3" title="Almacenamiento y seguridad">
              <p style={p}>Tus datos se almacenan en servidores seguros alojados en <strong>Fly.io</strong> (infraestructura en la nube). Aplicamos las siguientes medidas de seguridad:</p>
              <ul style={ul}>
                <li style={li}>Transmisión cifrada mediante <strong>HTTPS/TLS</strong> en todas las comunicaciones entre la app y el servidor.</li>
                <li style={li}>Autenticación mediante <strong>tokens JWT</strong> con secreto de servidor.</li>
                <li style={li}>Contraseñas almacenadas con <strong>hash criptográfico seguro</strong>, nunca en texto plano.</li>
                <li style={li}>Acceso a la base de datos restringido exclusivamente al personal autorizado de Grupo Bastión.</li>
              </ul>
            </Section>

            <Section num="4" title="Servicios de terceros">
              <p style={p}>balu utiliza los siguientes servicios de terceros en operaciones específicas:</p>
              <ul style={ul}>
                <li style={li}><strong>Anthropic (Claude AI) — Importación de PDFs:</strong> cuando usas la función "Importar PDF", tu estado de cuenta bancario es enviado a la API de Anthropic para extraer automáticamente los movimientos. Anthropic recibe el contenido del PDF únicamente para este procesamiento puntual. balu no almacena el PDF tras la importación.</li>
                <li style={li}><strong>Anthropic (Claude AI) — Insight del dashboard:</strong> para generar el comentario financiero personalizado de tu mes, datos agregados (totales de ingresos, gastos, top 3 categorías y tu primer nombre) son enviados a la API de Anthropic. No se envían movimientos individuales ni datos de identificación adicionales. El uso de Anthropic está sujeto a su propia <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#10B981" }}>Política de Privacidad</a>.</li>
                <li style={li}><strong>Fly.io — Infraestructura de servidor:</strong> nuestro backend está alojado en servidores de Fly.io, sujeto a sus acuerdos de confidencialidad y seguridad.</li>
                <li style={li}><strong>Google Play / App Store — Pagos:</strong> las suscripciones (balu Lite y balu Pro) son procesadas por la tienda donde descargaste la app. Solo reciben la información necesaria para gestionar el cobro.</li>
              </ul>
              <div style={warning}>
                Si no deseas que tu PDF bancario sea procesado por la API de Anthropic, simplemente no uses la función de importación. Todos los demás registros en balu son manuales y no involucran ningún servicio de IA externo.
              </div>
            </Section>

            <Section num="5" title="Exportación de datos y archivos locales">
              <p style={p}>balu te permite exportar tus datos financieros en formato Excel directamente a tu dispositivo. Este proceso es <strong>completamente local</strong> — el archivo se genera en tu dispositivo y no pasa por nuestros servidores. Puedes compartirlo con las apps que elijas usando las funciones nativas de tu sistema operativo.</p>
              <p style={p}>La función de selección de archivos (al importar un PDF manualmente) accede únicamente al archivo que tú seleccionas explícitamente. balu no tiene acceso al resto de tus archivos.</p>
            </Section>

            <Section num="6" title="Notificaciones">
              <p style={p}>Las notificaciones de balu son <strong>completamente locales</strong> — se programan directamente en tu dispositivo y no pasan por nuestros servidores. No recopilamos ni almacenamos tokens de notificación push. Puedes activar o desactivar los recordatorios en cualquier momento desde Ajustes dentro de la app.</p>
            </Section>

            <Section num="7" title="Retención de datos">
              <p style={p}>Conservamos tu información mientras tu cuenta esté activa. Si cancelas tu suscripción o eliminas tu cuenta:</p>
              <ul style={ul}>
                <li style={li}>Tus datos financieros son eliminados de nuestros servidores activos en un plazo de <strong>30 días</strong>.</li>
                <li style={li}>Los registros de facturación se conservan conforme a los requisitos fiscales mexicanos (hasta 5 años).</li>
              </ul>
            </Section>

            <Section num="8" title="Tus derechos (LFPDPPP)">
              <p style={p}>Conforme a la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong>, tienes derecho a Acceso, Rectificación, Cancelación y Oposición (derechos ARCO) sobre tus datos personales.</p>
              <p style={p}>Para ejercerlos, escríbenos a <strong>privacidad@grupobastión.com</strong> con el asunto "Derechos ARCO". Responderemos en un plazo máximo de 20 días hábiles.</p>
              <p style={p}>Adicionalmente, puedes eliminar tu cuenta y todos tus datos directamente desde la app en Ajustes.</p>
            </Section>

            <Section num="9" title="Menores de edad">
              <p style={p}>balu no está dirigida a menores de 18 años. No recopilamos conscientemente información de menores. Si detectamos que un usuario es menor de edad, procederemos a eliminar su cuenta y datos asociados.</p>
            </Section>

            <Section num="10" title="Cambios a esta política">
              <p style={p}>Podemos actualizar esta política ocasionalmente. Cuando lo hagamos, notificaremos los cambios relevantes mediante una notificación en la app o por correo electrónico, con al menos 15 días de anticipación para cambios materiales.</p>
            </Section>

          </div>

          {/* Contact box */}
          <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: 16, padding: 24, marginTop: 32, textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "#065F46", marginBottom: 8 }}>¿Tienes preguntas sobre privacidad?</h3>
            <p style={{ fontSize: 14, color: "#047857", marginBottom: 4 }}>Escríbenos a <a href="mailto:privacidad@grupobastión.com" style={{ color: "#10B981", fontWeight: 700, textDecoration: "none" }}>privacidad@grupobastión.com</a></p>
            <p style={{ fontSize: 14, color: "#047857" }}>Grupo Bastión — Saltillo, Coahuila, México</p>
          </div>
        </div>
      </main>

      <footer style={{ textAlign: "center", padding: 24, fontSize: 12, color: "#9CA3AF", background: "#fff", borderTop: "1px solid #E2E8F0" }}>
        © 2026 Grupo Bastión. Todos los derechos reservados. balu es una marca de Grupo Bastión.
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