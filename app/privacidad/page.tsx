import "../globals.css";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — balu",
  description: "Política de privacidad de balu, app de finanzas personales desarrollada por Miguel Angel Galvez Urbina.",
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
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 20, marginTop: 12 }}>Vigente desde: Abril 2026</span>
        </div>

        <div style={{ ...S.container, padding: "40px 24px 80px" }}>
          {/* Intro */}
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 16, padding: 24, marginBottom: 32, fontSize: 15, color: "#374151", lineHeight: 1.7, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            En <strong style={{ color: "#111827" }}>balu</strong>, operada por <strong style={{ color: "#111827" }}>Miguel Angel Galvez Urbina</strong> (persona física con actividad empresarial) con ubicación en Saltillo, Coahuila, México, nos tomamos muy en serio la privacidad de tus datos. Esta política explica qué información recopilamos, cómo la usamos, con quién la compartimos y qué derechos tienes sobre ella, en cumplimiento con la <strong style={{ color: "#111827" }}>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong> de México. Al usar balu, aceptas los términos descritos aquí.
          </div>

          {/* Responsable del tratamiento */}
          <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px 24px", marginBottom: 32 }}>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "#94A3B8", letterSpacing: "1px", marginBottom: 12, textTransform: "uppercase" }}>
              Responsable del tratamiento de datos personales
            </p>
            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "#0F172A" }}>Responsable:</strong> Miguel Angel Galvez Urbina<br />
              <strong style={{ color: "#0F172A" }}>Actividad:</strong> Persona física con actividad empresarial bajo régimen de Plataformas Tecnológicas<br />
              <strong style={{ color: "#0F172A" }}>Ubicación:</strong> Saltillo, Coahuila, México<br />
              <strong style={{ color: "#0F172A" }}>Contacto:</strong> <a href="mailto:hola@soybalu.app" style={{ color: "#10B981" }}>hola@soybalu.app</a>
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            <Section num="1" title="Información que recopilamos">
              <p style={p}>Para brindarte el servicio de balu, recopilamos la siguiente información:</p>
              <ul style={ul}>
                <li style={li}><strong>Datos de cuenta:</strong> nombre y dirección de correo electrónico. balu no utiliza contraseñas tradicionales; la autenticación se realiza mediante códigos de un solo uso (OTP) enviados a tu correo o WhatsApp.</li>
                <li style={li}><strong>Número de teléfono (opcional):</strong> si decides vincular un número de WhatsApp, lo recopilamos para enviarte códigos de verificación, recordatorios y mensajes relacionados con el servicio. Puedes eliminar tu número en cualquier momento desde Ajustes.</li>
                <li style={li}><strong>Datos financieros personales:</strong> cuentas, movimientos (fecha, descripción, nota, monto), presupuestos, gastos recurrentes y saldos iniciales que tú mismo registras. Son de uso exclusivo tuyo.</li>
                <li style={li}><strong>Entidades:</strong> nombre, descripción y moneda de las entidades financieras que crees (ej. "Finanzas personales", "Negocio").</li>
                <li style={li}><strong>PDFs bancarios (opcional):</strong> si usas la función de importación, el PDF de tu estado de cuenta es enviado temporalmente a un servicio de inteligencia artificial para extraer los movimientos. El archivo no es almacenado por balu tras el procesamiento.</li>
                <li style={li}><strong>Resumen financiero mensual (insight):</strong> el dashboard puede mostrar un comentario personalizado generado por inteligencia artificial. Para ello, datos agregados del mes (totales de ingresos, gastos y top 3 categorías de gasto) y tu primer nombre son enviados a la API de Anthropic. No se envían nombres de cuentas ni detalles individuales de movimientos.</li>
                <li style={li}><strong>Conversaciones con el asistente de IA (Pro/Max):</strong> el chat con el asistente de balu es <strong>exclusivo por WhatsApp</strong> — dentro de la app no existe chatbot. Si tienes plan Pro o Max y vinculas tu número, el contenido de los mensajes que intercambias con el asistente pasa por la infraestructura de Meta (WhatsApp) y se envía a la API de Anthropic para generar las respuestas.</li>
                <li style={li}><strong>Archivos compartidos desde otras apps (opcional):</strong> si compartes un PDF bancario desde tu app del banco u otra aplicación directamente a balu, el archivo es recibido y procesado localmente o enviado a la API de importación. balu no accede a tus archivos sin que tú inicies esta acción.</li>
                <li style={li}><strong>Datos de suscripción:</strong> si contratas un plan de pago, el procesamiento del cobro lo maneja RevenueCat junto con Google Play o App Store. balu recibe únicamente el estado de tu suscripción (plan activo, fecha de renovación), no datos de tu tarjeta.</li>
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
                <li style={li}>Autenticar tu sesión de forma segura mediante códigos de un solo uso (OTP) enviados por correo electrónico o WhatsApp.</li>
                <li style={li}>Sincronizar tus datos financieros entre tus dispositivos.</li>
                <li style={li}>Procesar la importación de PDFs bancarios con ayuda de inteligencia artificial.</li>
                <li style={li}>Generar el resumen financiero mensual (planes Pro y Max) y operar el chat con el asistente de IA por WhatsApp.</li>
                <li style={li}>Enviarte mensajes transaccionales (códigos de verificación, confirmaciones, recordatorios que tú actives) por correo electrónico o WhatsApp.</li>
                <li style={li}>Gestionar tu suscripción (balu Lite, Pro o Max).</li>
                <li style={li}>Ocasionalmente, enviarte comunicaciones promocionales sobre balu (ofertas, descuentos o mejoras del servicio) por correo electrónico o WhatsApp. Puedes oponerte a estas comunicaciones en cualquier momento (ver sección 9).</li>
                <li style={li}>Atender solicitudes de soporte técnico.</li>
              </ul>
              <p style={{ ...p, fontWeight: 700, color: "#111827" }}>No usamos tus datos financieros para publicidad, análisis de crédito, scoring financiero, ni los compartimos con terceros para fines comerciales.</p>
            </Section>

            <Section num="3" title="Almacenamiento y seguridad">
              <p style={p}>Tus datos se almacenan en servidores seguros alojados en <strong>Fly.io</strong> (infraestructura en la nube). Aplicamos las siguientes medidas de seguridad:</p>
              <ul style={ul}>
                <li style={li}>Transmisión cifrada mediante <strong>HTTPS/TLS</strong> en todas las comunicaciones entre la app y el servidor.</li>
                <li style={li}>Autenticación gestionada por <strong>Ory Kratos</strong>, un sistema de identidad de código abierto auto-alojado. Utilizamos <strong>session tokens</strong> con expiración de 30 días y rotación automática.</li>
                <li style={li}>Verificación mediante códigos de un solo uso (OTP) de 6 dígitos con expiración corta.</li>
                <li style={li}>Acceso a la base de datos restringido exclusivamente al responsable del tratamiento.</li>
                <li style={li}>Los datos sensibles (números de teléfono, identificadores) se almacenan con los controles de seguridad estándar de PostgreSQL.</li>
              </ul>
            </Section>

            <Section num="4" title="Servicios de terceros (encargados del tratamiento)">
              <p style={p}>balu utiliza los siguientes servicios de terceros, quienes actúan como <strong>encargados del tratamiento</strong> (procesan datos por instrucción nuestra bajo acuerdos de confidencialidad y seguridad). Todos están ubicados principalmente en Estados Unidos:</p>
              <ul style={ul}>
                <li style={li}><strong>Meta Platforms, Inc. (WhatsApp Business API):</strong> cuando vinculas un número de WhatsApp, envías o recibes mensajes desde balu, o autenticas tu cuenta por WhatsApp, tu número de teléfono y el contenido de los mensajes transaccionales pasan por la infraestructura de Meta para su entrega. Uso sujeto a la <a href="https://www.whatsapp.com/legal/business-policy" target="_blank" rel="noopener noreferrer" style={{ color: "#10B981" }}>Política de WhatsApp Business</a> y la <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "#10B981" }}>Política de Privacidad de WhatsApp</a>.</li>
                <li style={li}><strong>Anthropic, PBC (Claude AI) — Importación de PDFs:</strong> cuando usas la función "Importar PDF", tu estado de cuenta bancario es enviado a la API de Anthropic para extraer automáticamente los movimientos. Anthropic recibe el contenido del PDF únicamente para este procesamiento puntual. balu no almacena el PDF tras la importación.</li>
                <li style={li}><strong>Anthropic, PBC (Claude AI) — Insight mensual y chat del asistente:</strong> para generar el comentario financiero mensual (planes Pro y Max) o las respuestas del asistente de WhatsApp (planes Pro y Max), los datos relevantes (totales agregados, tu primer nombre, o el contenido del mensaje que envíes al asistente por WhatsApp) son enviados a la API de Anthropic. Uso sujeto a la <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#10B981" }}>Política de Privacidad de Anthropic</a>.</li>
                <li style={li}><strong>Fly.io, Inc. — Infraestructura de servidor y base de datos:</strong> nuestro backend, base de datos PostgreSQL y sistema de identidad Kratos están alojados en servidores de Fly.io.</li>
                <li style={li}><strong>RevenueCat, Inc. — Gestión de suscripciones:</strong> el procesamiento y validación de las compras dentro de la app (balu Lite, Pro y Max) se gestiona mediante RevenueCat, quien recibe los identificadores necesarios para asociar tu compra con tu cuenta. RevenueCat no recibe tus datos financieros personales registrados en balu.</li>
                <li style={li}><strong>Twilio SendGrid, Inc. — Envío de correos:</strong> los correos electrónicos transaccionales (códigos de verificación, confirmaciones) se envían mediante SendGrid, quien procesa tu dirección de correo para la entrega.</li>
                <li style={li}><strong>Cloudflare, Inc. — DNS y ruteo de correo:</strong> utilizamos Cloudflare para la gestión del dominio soybalu.app y el ruteo del correo hola@soybalu.app.</li>
                <li style={li}><strong>Google Play / App Store:</strong> la distribución de la app y el cobro de suscripciones se realizan a través de las tiendas oficiales de Google y Apple, quienes reciben únicamente la información necesaria para procesar el pago.</li>
              </ul>
              <div style={warning}>
                Si no deseas que tu PDF bancario sea procesado por la API de Anthropic, simplemente no uses la función de importación. Si no deseas recibir mensajes por WhatsApp, no vincules tu número (puedes usar balu únicamente con autenticación por correo).
              </div>
            </Section>

            <Section num="5" title="Transferencias internacionales de datos">
              <p style={p}>Debido a que varios de nuestros encargados (Meta, Anthropic, Fly.io, RevenueCat, SendGrid, Cloudflare, Google, Apple) operan desde los <strong>Estados Unidos de América</strong>, el tratamiento de tus datos implica transferencias internacionales.</p>
              <p style={p}>Al usar balu, otorgas tu consentimiento para estas transferencias. Todos los encargados mencionados están obligados a proteger tus datos bajo sus propias políticas de privacidad y acuerdos de procesamiento. Solo reciben la información estrictamente necesaria para cumplir con la función que les corresponde.</p>
              <p style={p}>Puedes revocar este consentimiento en cualquier momento eliminando tu cuenta. Algunas funciones (autenticación por WhatsApp, importación de PDFs, chat con el asistente de IA por WhatsApp) dejarán de estar disponibles si limitas las transferencias.</p>
            </Section>

            <Section num="6" title="Exportación de datos y archivos locales">
              <p style={p}>balu te permite exportar tus datos financieros en formato Excel directamente a tu dispositivo. Este proceso es <strong>completamente local</strong> — el archivo se genera en tu dispositivo y no pasa por nuestros servidores. Puedes compartirlo con las apps que elijas usando las funciones nativas de tu sistema operativo.</p>
              <p style={p}>La función de selección de archivos (al importar un PDF manualmente) accede únicamente al archivo que tú seleccionas explícitamente. balu no tiene acceso al resto de tus archivos.</p>
            </Section>

            <Section num="7" title="Notificaciones y comunicaciones">
              <p style={p}>balu puede comunicarse contigo por tres canales:</p>
              <ul style={ul}>
                <li style={li}><strong>Notificaciones locales (push):</strong> se programan directamente en tu dispositivo y no pasan por nuestros servidores. No recopilamos ni almacenamos tokens de notificación push. Puedes activar o desactivar los recordatorios en cualquier momento desde Ajustes dentro de la app.</li>
                <li style={li}><strong>Correo electrónico:</strong> se usa para códigos de verificación, confirmaciones de cuenta y, ocasionalmente, comunicaciones promocionales.</li>
                <li style={li}><strong>WhatsApp (si vinculaste tu número):</strong> se usa para códigos de verificación, mensajes transaccionales, recordatorios que tú actives, y ocasionalmente comunicaciones promocionales sobre balu.</li>
              </ul>
              <p style={p}>Puedes oponerte a recibir comunicaciones promocionales por correo o WhatsApp en cualquier momento (ver sección 9). Los mensajes transaccionales (códigos de verificación, confirmaciones de seguridad) no se pueden desactivar mientras tu cuenta esté activa, ya que son esenciales para el funcionamiento del servicio.</p>
            </Section>

            <Section num="8" title="Retención de datos">
              <p style={p}>Conservamos tu información mientras tu cuenta esté activa. Si cancelas tu suscripción o eliminas tu cuenta:</p>
              <ul style={ul}>
                <li style={li}>Tus datos financieros y personales son eliminados de nuestros servidores activos en un plazo de <strong>30 días</strong>.</li>
                <li style={li}>Los respaldos cifrados pueden retenerse hasta <strong>90 días adicionales</strong> antes de ser sobrescritos.</li>
                <li style={li}>Los registros de facturación se conservan conforme a los requisitos fiscales mexicanos (hasta 5 años, según el Código Fiscal de la Federación).</li>
              </ul>
            </Section>

            <Section num="9" title="Tus derechos (LFPDPPP)">
              <p style={p}>Conforme a la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong>, tienes derecho a:</p>
              <ul style={ul}>
                <li style={li}><strong>Acceso:</strong> conocer qué datos tenemos sobre ti.</li>
                <li style={li}><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
                <li style={li}><strong>Cancelación:</strong> solicitar la eliminación de tus datos.</li>
                <li style={li}><strong>Oposición:</strong> oponerte al tratamiento de tus datos para fines específicos, incluyendo comunicaciones promocionales.</li>
                <li style={li}><strong>Revocación del consentimiento:</strong> retirar tu autorización para el tratamiento y las transferencias internacionales en cualquier momento.</li>
                <li style={li}><strong>Limitación del uso o divulgación:</strong> restringir ciertos usos de tus datos.</li>
              </ul>
              <p style={p}>Para ejercer cualquiera de estos derechos, escríbenos a <strong>hola@soybalu.app</strong> con el asunto "Derechos ARCO". Responderemos en un plazo máximo de <strong>20 días hábiles</strong>, conforme lo establece la LFPDPPP.</p>
              <p style={p}>Adicionalmente, puedes:</p>
              <ul style={ul}>
                <li style={li}>Eliminar tu cuenta y todos tus datos directamente desde la app en Ajustes.</li>
                <li style={li}>Desvincular tu número de WhatsApp en Ajustes.</li>
                <li style={li}>Darte de baja de comunicaciones promocionales respondiendo "STOP" o "BAJA" a cualquier mensaje promocional de WhatsApp, o haciendo clic en el enlace de cancelación en los correos promocionales.</li>
              </ul>
            </Section>

            <Section num="10" title="Menores de edad">
              <p style={p}>balu no está dirigida a menores de 18 años. No recopilamos conscientemente información de menores. Si detectamos que un usuario es menor de edad, procederemos a eliminar su cuenta y datos asociados.</p>
            </Section>

            <Section num="11" title="Cambios a esta política">
              <p style={p}>Podemos actualizar esta política ocasionalmente. Cuando lo hagamos, notificaremos los cambios relevantes mediante una notificación en la app, por correo electrónico, o por WhatsApp si tienes tu número vinculado, con al menos 15 días de anticipación para cambios materiales. La fecha de última actualización aparece en la parte superior de esta política.</p>
            </Section>

          </div>

          {/* Contact box */}
          <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: 16, padding: 24, marginTop: 32, textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "#065F46", marginBottom: 8 }}>¿Tienes preguntas sobre privacidad?</h3>
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