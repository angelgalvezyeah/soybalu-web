import "../globals.css";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones — balu",
  description: "Términos y condiciones de uso de balu, app de finanzas personales operada por Miguel Angel Galvez Urbina.",
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
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 20, marginTop: 12 }}>Vigente desde: Abril 2026</span>
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
              <p style={p}>balu es una aplicación de gestión de finanzas personales que te permite registrar cuentas, movimientos, presupuestos y gastos recurrentes de forma manual, importar estados de cuenta bancarios en PDF con ayuda de inteligencia artificial, e interactuar con un asistente de IA para consultas financieras (en los planes que lo incluyen).</p>
              <p style={p}>balu opera bajo modelo de suscripción con tres planes:</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, margin: "16px 0" }}>
                <div style={{ border: "1px solid #E2E8F0", borderRadius: 12, padding: 16 }}>
                  <h3 style={{ fontSize: 14, fontWeight: 800, color: "#064E3B", marginBottom: 8 }}>balu Lite</h3>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#10B981", letterSpacing: "-0.5px" }}>$69 <span style={{ fontSize: 11, color: "#6B7280", fontWeight: 500 }}>/ mes</span></div>
                  <div style={{ fontSize: 11, color: "#047857", fontWeight: 600, marginTop: 4 }}>o $690 / año</div>
                </div>
                <div style={{ border: "1px solid #10B981", borderRadius: 12, padding: 16, background: "#ECFDF5" }}>
                  <h3 style={{ fontSize: 14, fontWeight: 800, color: "#064E3B", marginBottom: 8 }}>balu Pro</h3>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#10B981", letterSpacing: "-0.5px" }}>$129 <span style={{ fontSize: 11, color: "#6B7280", fontWeight: 500 }}>/ mes</span></div>
                  <div style={{ fontSize: 11, color: "#047857", fontWeight: 600, marginTop: 4 }}>o $1,290 / año</div>
                </div>
                <div style={{ border: "1px solid #E2E8F0", borderRadius: 12, padding: 16 }}>
                  <h3 style={{ fontSize: 14, fontWeight: 800, color: "#064E3B", marginBottom: 8 }}>balu Max</h3>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#10B981", letterSpacing: "-0.5px" }}>$199 <span style={{ fontSize: 11, color: "#6B7280", fontWeight: 500 }}>/ mes</span></div>
                  <div style={{ fontSize: 11, color: "#047857", fontWeight: 600, marginTop: 4 }}>o $1,990 / año</div>
                </div>
              </div>
              <p style={p}>Todos los precios están expresados en <strong>pesos mexicanos (MXN)</strong>. El plan anual equivale a pagar solo <strong>10 meses de 12</strong>. Las características específicas de cada plan (número de entidades, límites de uso del asistente, mensajería por WhatsApp, etc.) están descritas en la app y pueden actualizarse conforme evolucione el producto.</p>
              <div style={highlight}>
                balu ofrece un <strong>período de prueba gratuito de 7 días</strong> en cualquier plan de pago. Durante este período podrás usar todas las funciones del plan seleccionado sin cargo. Si no cancelas antes de que termine el período de prueba, se cobrará automáticamente el primer período del plan elegido.
              </div>
            </Section>

            <Section num="2" title="Registro y cuenta">
              <p style={p}>Para usar balu debes crear una cuenta con tu nombre y una dirección de correo electrónico válida. balu <strong>no utiliza contraseñas</strong>; la autenticación se realiza mediante códigos de un solo uso (OTP) de 6 dígitos enviados a tu correo electrónico o, si vinculas tu número, por WhatsApp.</p>
              <p style={p}>Eres responsable de:</p>
              <ul style={ul}>
                <li style={li}>Proporcionar información verdadera, exacta y actualizada.</li>
                <li style={li}>Mantener el control de tu cuenta de correo electrónico y número de WhatsApp vinculado, ya que a través de ellos se valida tu identidad.</li>
                <li style={li}>Toda la actividad que ocurra bajo tu cuenta.</li>
                <li style={li}>Notificarnos de inmediato a <strong>hola@soybalu.app</strong> si sospechas un acceso no autorizado.</li>
              </ul>
              <p style={p}>Tu sesión se gestiona mediante <strong>tokens de sesión emitidos por Ory Kratos</strong> (sistema de identidad de código abierto auto-alojado) con expiración de 30 días. No está permitido compartir tu cuenta con terceros ni usar la app de forma que viole estos términos.</p>
            </Section>

            <Section num="3" title="Suscripción y pagos">
              <p style={p}>Al suscribirte a cualquier plan de balu aceptas lo siguiente:</p>
              <ul style={ul}>
                <li style={li}>El cobro se realiza de forma anticipada (mensual o anual) a través de <strong>Google Play o App Store</strong>, según la tienda donde descargaste la app. El procesamiento y validación de las compras se gestiona mediante <strong>RevenueCat</strong>.</li>
                <li style={li}>La suscripción se renueva automáticamente al final de cada período salvo que la canceles antes del vencimiento.</li>
                <li style={li}>Ocasionalmente podemos ofrecer promociones o descuentos temporales sobre los planes. Las condiciones específicas de cada promoción se mostrarán al momento de la oferta dentro de la app.</li>
                <li style={li}>Los precios regulares pueden ajustarse con al menos <strong>30 días de aviso previo</strong>. Los cambios no afectarán el período ya pagado.</li>
              </ul>
              <div style={highlight}>
                Equivalencias anuales: <strong>Lite $690 MXN/año</strong> vs $828 mensualizado · <strong>Pro $1,290 MXN/año</strong> vs $1,548 mensualizado · <strong>Max $1,990 MXN/año</strong> vs $2,388 mensualizado. En todos los casos, el plan anual equivale a pagar 10 meses de 12.
              </div>
            </Section>

            <Section num="4" title="Cancelaciones y reembolsos">
              <p style={p}>Puedes cancelar tu suscripción en cualquier momento desde la configuración de tu cuenta en Google Play o App Store:</p>
              <ul style={ul}>
                <li style={li}>Mantendrás acceso al plan pagado hasta el fin del período contratado (mensual o anual).</li>
                <li style={li}>Si cancelas durante el período de prueba de 7 días, no se realizará ningún cargo.</li>
                <li style={li}>Los reembolsos están sujetos a las políticas de la tienda donde realizaste la compra (<a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer" style={{ color: "#10B981" }}>Google Play</a> o <a href="https://support.apple.com/es-mx/HT204084" target="_blank" rel="noopener noreferrer" style={{ color: "#10B981" }}>App Store</a>), además de los derechos que te correspondan bajo la <strong>Ley Federal de Protección al Consumidor</strong> de México.</li>
                <li style={li}>No se realizan reembolsos proporcionales por períodos no utilizados, salvo que la ley lo exija o lo autorice la tienda correspondiente.</li>
              </ul>
              <div style={warning}>
                Eliminar la app <strong>no cancela tu suscripción</strong>. La cancelación debe realizarse desde la tienda donde realizaste la compra (Google Play o App Store).
              </div>
            </Section>

            <Section num="5" title="Funciones con inteligencia artificial">
              <p style={p}>balu utiliza la <strong>API de Anthropic (Claude)</strong> en las siguientes funciones:</p>
              <ul style={ul}>
                <li style={li}><strong>Importación de PDFs (todos los planes):</strong> el contenido de tu estado de cuenta bancario es enviado a Anthropic para extraer los movimientos automáticamente. balu no almacena el PDF tras el procesamiento. La precisión puede variar según el formato del documento — te recomendamos revisar los movimientos antes de confirmarlos.</li>
                <li style={li}><strong>Insight del dashboard (todos los planes):</strong> el resumen financiero mensual personalizado se genera enviando datos agregados de tu mes (totales de ingresos, gastos, top 3 categorías de gasto y tu primer nombre) a la API de Anthropic. No se envían movimientos individuales ni información de identificación adicional.</li>
                <li style={li}><strong>Asistente de IA por app (planes Pro y Max):</strong> puedes conversar con un asistente inteligente desde la app para hacer preguntas sobre tus finanzas, obtener análisis y recomendaciones. El contenido de tus mensajes es enviado a la API de Anthropic para generar las respuestas.</li>
                <li style={li}><strong>Asistente de IA por WhatsApp (planes Pro y Max):</strong> si vinculas tu número de WhatsApp, puedes conversar con el asistente directamente desde WhatsApp. El contenido de tus mensajes pasa por la infraestructura de Meta (WhatsApp) y se envía a la API de Anthropic.</li>
              </ul>
              <p style={p}>Al usar estas funciones aceptas que tus datos sean procesados por Anthropic conforme a su propia <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#10B981" }}>política de privacidad</a>. El asistente de IA puede cometer errores o presentar información imprecisa — sus respuestas no constituyen asesoría financiera profesional.</p>
              <p style={p}>Si no deseas usar las funciones de IA, puedes registrar todos tus movimientos manualmente y simplemente no utilizar el asistente ni la importación de PDFs.</p>
            </Section>

            <Section num="6" title="Comunicaciones por WhatsApp">
              <p style={p}>balu utiliza la <strong>API oficial de WhatsApp Business</strong> de Meta para enviar mensajes a los usuarios que vinculan su número de teléfono. Los tipos de mensajes incluyen:</p>
              <ul style={ul}>
                <li style={li}><strong>Transaccionales:</strong> códigos de verificación (OTP), confirmaciones de cuenta, recordatorios que tú actives desde Ajustes.</li>
                <li style={li}><strong>Asistente de IA (Pro/Max):</strong> respuestas a tus consultas cuando interactúas con el asistente por WhatsApp.</li>
                <li style={li}><strong>Promocionales:</strong> ocasionalmente podemos enviarte mensajes sobre ofertas, mejoras del servicio o nuevas funciones. Puedes oponerte a estos mensajes en cualquier momento respondiendo "STOP" o "BAJA" a cualquier mensaje promocional, o desvinculando tu número desde Ajustes.</li>
              </ul>
              <p style={p}>El uso de WhatsApp está sujeto a la <a href="https://www.whatsapp.com/legal/business-policy" target="_blank" rel="noopener noreferrer" style={{ color: "#10B981" }}>Política de WhatsApp Business</a> de Meta. Puedes desvincular tu número de WhatsApp en cualquier momento desde Ajustes dentro de la app, lo que desactivará todos los mensajes por este canal.</p>
            </Section>

            <Section num="7" title="Exportación de datos y archivos">
              <p style={p}>balu te permite:</p>
              <ul style={ul}>
                <li style={li}><strong>Exportar a Excel:</strong> generar un archivo con tus movimientos del mes directamente en tu dispositivo. El proceso es local — no pasa por nuestros servidores.</li>
                <li style={li}><strong>Importar PDFs manualmente:</strong> seleccionar un archivo PDF desde tu dispositivo o recibirlo compartido desde otra app (como tu banco). balu accede únicamente al archivo que tú seleccionas explícitamente.</li>
                <li style={li}><strong>Eliminar tus datos:</strong> puedes eliminar tu cuenta y todos los datos asociados desde Ajustes dentro de la app.</li>
              </ul>
            </Section>

            <Section num="8" title="Contenido del usuario">
              <p style={p}>Todos los datos financieros que registras en balu (cuentas, movimientos, presupuestos, notas, etc.) <strong>son de tu propiedad</strong>. Miguel Angel Galvez Urbina no reclama derecho alguno sobre el contenido que tú registras.</p>
              <p style={p}>Al usar balu, nos otorgas una licencia limitada y no exclusiva para almacenar, procesar y sincronizar dicho contenido con el único propósito de proveer el servicio. Esta licencia termina cuando eliminas tu cuenta.</p>
              <p style={p}>Eres responsable de la veracidad y legalidad del contenido que registras. Queda prohibido registrar datos de terceros sin su consentimiento o información derivada de actividades ilegales.</p>
            </Section>

            <Section num="9" title="Uso permitido y prohibiciones">
              <p style={p}>balu está diseñada para uso personal y legítimo. Queda prohibido:</p>
              <ul style={ul}>
                <li style={li}>Usar la app para actividades ilegales, fraudulentas o para lavado de dinero.</li>
                <li style={li}>Intentar acceder, modificar, dañar o interrumpir los servidores de balu.</li>
                <li style={li}>Realizar ingeniería inversa, descompilar o intentar extraer el código fuente.</li>
                <li style={li}>Usar la app para registrar datos financieros de terceros sin su consentimiento.</li>
                <li style={li}>Automatizar peticiones a nuestra API o al asistente de IA sin autorización expresa.</li>
                <li style={li}>Intentar evadir los límites de uso del plan contratado.</li>
                <li style={li}>Usar el asistente de IA para generar contenido ilegal, dañino o que viole los derechos de terceros.</li>
                <li style={li}>Revender, sublicenciar o transferir el acceso a tu cuenta.</li>
              </ul>
            </Section>

            <Section num="10" title="Propiedad intelectual">
              <p style={p}>Todos los derechos sobre balu — incluyendo código fuente, diseño, nombre, logotipo, mascota, textos y materiales de la app — son propiedad exclusiva de <strong>Miguel Angel Galvez Urbina</strong>. Se te otorga una licencia limitada, personal, no transferible y revocable para usar la app conforme a estos términos durante la vigencia de tu suscripción.</p>
            </Section>

            <Section num="11" title="Limitación de responsabilidad">
              <p style={p}>balu es una herramienta de registro personal y apoyo a la gestión financiera. <strong>No somos una institución financiera ni ofrecemos asesoría financiera, fiscal o de inversión</strong>.</p>
              <ul style={ul}>
                <li style={li}>No nos responsabilizamos por decisiones tomadas con base en la información registrada en la app o generada por el asistente de IA.</li>
                <li style={li}>No garantizamos disponibilidad ininterrumpida del servicio (puede haber mantenimientos programados, fallas de terceros o interrupciones imprevistas).</li>
                <li style={li}>La precisión de los datos importados por PDF depende de la calidad del documento y del procesamiento de IA — pueden ocurrir errores.</li>
                <li style={li}>El asistente de IA puede generar información imprecisa o desactualizada. Siempre verifica información crítica con fuentes profesionales.</li>
                <li style={li}>En la máxima medida permitida por la ley, nuestra responsabilidad total acumulada no excederá el monto pagado por tu suscripción en los <strong>últimos 12 meses</strong> previos al evento que dé origen a la reclamación.</li>
              </ul>
            </Section>

            <Section num="12" title="Fuerza mayor">
              <p style={p}>No seremos responsables por incumplimientos o retrasos en el servicio causados por circunstancias fuera de nuestro control razonable, incluyendo —sin limitarse a— fallas de proveedores de infraestructura (Fly.io, Meta/WhatsApp, Anthropic, Google, Apple, RevenueCat, SendGrid, Cloudflare), interrupciones de internet, desastres naturales, actos de gobierno, ataques cibernéticos, o conflictos laborales.</p>
            </Section>

            <Section num="13" title="Modificaciones al servicio y términos">
              <p style={p}>Nos reservamos el derecho de modificar, suspender o descontinuar cualquier aspecto del servicio, incluyendo funciones, planes o precios. Para cambios materiales en estos términos, notificaremos con al menos <strong>15 días de anticipación</strong> por correo electrónico, por WhatsApp (si tienes tu número vinculado), o mediante una notificación en la app. El uso continuo después de la fecha de entrada en vigor implica aceptación de los términos actualizados.</p>
            </Section>

            <Section num="14" title="Terminación de cuenta">
              <p style={p}>Puedes eliminar tu cuenta en cualquier momento desde Ajustes en la app. Miguel Angel Galvez Urbina puede suspender o cancelar cuentas que violen estos términos, involucren actividad fraudulenta, o pongan en riesgo la seguridad del servicio o de otros usuarios. En caso de suspensión por violación de términos, no procederá reembolso del período pagado. Los datos serán tratados conforme a nuestra <a href="/privacidad" style={{ color: "#10B981" }}>Política de Privacidad</a>.</p>
            </Section>

            <Section num="15" title="Ley aplicable y jurisdicción">
              <p style={p}>Estos términos se rigen por las leyes de los <strong>Estados Unidos Mexicanos</strong>, en particular la Ley Federal de Protección al Consumidor, la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, y el Código de Comercio. Cualquier controversia derivada de estos términos se someterá a los <strong>tribunales competentes de la ciudad de Saltillo, Coahuila, México</strong>, renunciando a cualquier otro fuero que pudiera corresponder.</p>
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