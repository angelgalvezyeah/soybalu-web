"use client";

import "./globals.css";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ── Scroll animation hook ─────────────────────────────────────────────────
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const container: React.CSSProperties = { maxWidth: 1100, margin: "0 auto", padding: "0 24px" };

function Blob({ style }: { style: React.CSSProperties }) {
  return (
    <div style={{
      position: "absolute",
      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
      filter: "blur(48px)",
      pointerEvents: "none",
      zIndex: 0,
      ...style,
    }} />
  );
}

// ── Nav ───────────────────────────────────────────────────────────────────
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(248,250,252,0.88)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 0 rgba(0,0,0,0.04)" }}>
      <div style={{ ...container, display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 11, overflow: "hidden", boxShadow: "0 4px 12px rgba(16,185,129,0.3)", flexShrink: 0 }}>
            <Image src="/logo.png" alt="balu" width={36} height={36} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
          </div>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 20, color: "#0F172A", letterSpacing: "-0.5px" }}>balu</span>
        </a>

        <div className="desktop-only" style={{ alignItems: "center", gap: 32 }}>
          {[{ label: "Cómo funciona", href: "#como-funciona" }, { label: "Características", href: "#caracteristicas" }, { label: "IA", href: "#ia" }, { label: "Precios", href: "#precios" }].map((l, i) => (
            <NavLink key={i} href={l.href}>{l.label}</NavLink>
          ))}
        </div>

        <a href="#precios" className="desktop-only" style={{ alignItems: "center", gap: 8, background: "linear-gradient(135deg, #10B981, #059669)", color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, padding: "10px 22px", borderRadius: 12, textDecoration: "none", boxShadow: "0 4px 16px rgba(16,185,129,0.3)" }}>
          Descargar
        </a>

        <div className="mobile-only" style={{ alignItems: "center", gap: 10 }}>
          <a href="#precios" style={{ background: "linear-gradient(135deg, #10B981, #059669)", color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 13, padding: "9px 16px", borderRadius: 10, textDecoration: "none" }}>
            Descargar
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: 6, display: "flex", flexDirection: "column", gap: 4 }}>
            {[0,1,2].map(i => (
              <span key={i} style={{ display: "block", width: 22, height: 2, background: "#475569", borderRadius: 2, transition: "all 0.2s", transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(4px, 4px)" : i === 2 ? "rotate(-45deg) translate(4px, -4px)" : "scaleX(0)") : "none", opacity: menuOpen && i === 1 ? 0 : 1 }} />
            ))}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #F1F5F9", padding: "16px 24px 24px" }}>
          {[{ label: "Cómo funciona", href: "#como-funciona" }, { label: "Características", href: "#caracteristicas" }, { label: "IA", href: "#ia" }, { label: "Precios", href: "#precios" }].map((l, i) => (
            <a key={i} href={l.href} onClick={() => setMenuOpen(false)} style={{ display: "block", fontSize: 16, fontWeight: 600, color: "#475569", textDecoration: "none", padding: "12px 0", borderBottom: "1px solid #F1F5F9" }}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hover, setHover] = useState(false);
  return (
    <a href={href} style={{ color: hover ? "#10B981" : "#475569", fontSize: 14, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{children}</a>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero-section" style={{ display: "flex", alignItems: "center", position: "relative", overflow: "hidden", background: "#fff" }}>
      <Blob style={{ width: 520, height: 520, top: "-80px", left: "-120px", background: "rgba(16,185,129,0.13)", animation: "blobFloat 12s ease-in-out infinite" }} />
      <Blob style={{ width: 400, height: 400, top: "60px", right: "-100px", background: "rgba(52,211,153,0.10)", animation: "blobFloat2 15s ease-in-out infinite" }} />
      <Blob style={{ width: 300, height: 300, bottom: "0px", left: "35%", background: "rgba(16,185,129,0.07)", animation: "blobFloat 18s ease-in-out infinite reverse" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ ...container, position: "relative", zIndex: 1, width: "100%" }}>
        <div className="hero-grid">
          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#ECFDF5", border: "1px solid #A7F3D0", color: "#059669", fontSize: 12, fontWeight: 700, padding: "5px 12px", borderRadius: 100, marginBottom: 24, letterSpacing: "0.3px" }}>
              🇲🇽 Hecho para México
            </div>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-1.5px", color: "#0F172A", marginBottom: 20, animation: "fadeUp 0.7s ease both" }}>
              Tus finanzas,<br />
              <span style={{ background: "linear-gradient(135deg, #10B981, #059669)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>por fin claras.</span>
            </h1>
            <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "#475569", lineHeight: 1.65, marginBottom: 32, animation: "fadeUp 0.7s ease 0.1s both", maxWidth: 440 }}>
              balu te dice exactamente cuánto tienes, cuánto debes y en qué se va tu dinero. Y si quieres, puedes preguntarle lo que sea por WhatsApp.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", animation: "fadeUp 0.7s ease 0.2s both", marginBottom: 36 }}>
              <a href="#precios" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #10B981, #059669)", color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 14, textDecoration: "none", boxShadow: "0 8px 24px rgba(16,185,129,0.35)" }}>
                📱 Descargar balu
              </a>
              <a href="#como-funciona" className="hide-mobile" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#F1F5F9", color: "#475569", fontSize: 15, padding: "14px 24px", borderRadius: 14, textDecoration: "none", border: "1px solid #E2E8F0" }}>
                Ver cómo funciona →
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 12, maxWidth: 360, animation: "fadeUp 0.7s ease 0.3s both" }}>
              <div style={{ width: 32, height: 32, background: "#ECFDF5", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🎁</div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#0F172A", marginBottom: 1 }}>Descarga gratis</p>
                <p style={{ fontSize: 11, color: "#64748B" }}>Empieza a registrar desde el día uno</p>
              </div>
            </div>
          </div>

          {/* Right — Balu + dashboard mock */}
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", animation: "fadeUp 0.9s ease 0.2s both" }}>
            <DashboardMock />
            {/* Balu flotando encima */}
            <div style={{ position: "absolute", bottom: -20, right: -20, animation: "float 4s ease-in-out infinite", filter: "drop-shadow(0 8px 24px rgba(16,185,129,0.2))" }}>
              <Image src="/balu_waving.png" alt="balu saludando" width={160} height={160} style={{ objectFit: "contain", filter: "drop-shadow(0 16px 40px rgba(16,185,129,0.35))" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  const spendRatio = 0.82;
  return (
    <div style={{ position: "relative", borderRadius: 28, boxShadow: "0 24px 80px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)", overflow: "hidden", border: "1px solid rgba(0,0,0,0.05)", width: "100%" }}>

      <div style={{ background: "#D1FAE5" }}>
        <div style={{ position: "absolute", top: "-30%", right: "-15%", width: "65%", height: "140%", background: "#A7F3D0", clipPath: "polygon(50% 0%, 100% 0%, 100% 45%, 85% 58%, 70% 42%, 55% 52%, 53% 42%, 50% 0%)", opacity: 0.5, zIndex: 0 }} />

        <div style={{ position: "relative", zIndex: 1, padding: "20px 20px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 7, background: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.6)", borderRadius: 30, padding: "6px 11px" }}>
              <Image src="/logo.png" alt="balu" width={18} height={18} style={{ borderRadius: "50%", objectFit: "cover" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#064E3B" }}>Finanzas personales</span>
              <span style={{ fontSize: 12, color: "#047857", marginLeft: "auto" }}>▾</span>
            </div>
            {["📤", "⚙️"].map((icon, i) => (
              <div key={i} style={{ width: 38, height: 38, background: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.6)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>{icon}</div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.55)", borderRadius: 13, height: 40, marginBottom: 14, overflow: "hidden" }}>
            <div style={{ width: 36, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.3)" }}>
              <span style={{ fontSize: 16, color: "#064E3B" }}>‹</span>
            </div>
            <div style={{ flex: 1, textAlign: "center", fontSize: 14, fontWeight: 700, color: "#064E3B" }}>Abril 2026</div>
            <div style={{ width: 36, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.3)", opacity: 0.3 }}>
              <span style={{ fontSize: 16, color: "#064E3B" }}>›</span>
            </div>
          </div>

          <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.5)", borderRadius: 20, padding: "3px 9px", marginBottom: 6 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#047857" }}>↑ Ahorraste este mes</span>
          </div>
          <p style={{ fontSize: 22, fontWeight: 900, color: "#064E3B", letterSpacing: "-0.5px", lineHeight: 1.1, marginBottom: 10 }}>Hola, Ángel 👋</p>

          <p style={{ fontSize: 11, color: "#6EE7B7", fontWeight: 700, letterSpacing: "1px", marginBottom: 2 }}>AHORRASTE ESTE MES</p>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 48, fontWeight: 900, color: "#064E3B", letterSpacing: "-2px", lineHeight: 1, marginBottom: 16 }}>
            $3,240<span style={{ fontSize: 26, color: "#34D399", fontWeight: 700 }}>.00</span>
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
            {[
              { label: "ENTRÓ", value: "$18,500", dot: "#10B981" },
              { label: "SALIÓ", value: "$15,260", dot: "#EF4444" },
            ].map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.32)", border: "1px solid rgba(255,255,255,0.55)", borderRadius: 14, padding: "11px 13px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 4 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: s.dot }} />
                  <span style={{ fontSize: 9, fontWeight: 800, color: "#047857", letterSpacing: "0.5px" }}>{s.label}</span>
                </div>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, fontWeight: 900, color: "#064E3B", letterSpacing: "-0.5px" }}>{s.value}</p>
                <p style={{ fontSize: 9, color: "#6EE7B7", fontWeight: 500, marginTop: 1 }}>este mes</p>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ height: 6, background: "rgba(255,255,255,0.25)", borderRadius: 4, overflow: "hidden", marginBottom: 5 }}>
              <div style={{ height: "100%", width: `${(1 - spendRatio) * 100}%`, background: "#10B981", borderRadius: 4 }} />
            </div>
            <p style={{ fontSize: 10, color: "#047857", fontWeight: 500 }}>Usaste el 82% de lo que ganaste</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 0, paddingBottom: 20 }}>
            {[
              { title: "EN TUS CUENTAS", subtitle: "Efectivo y débito", value: "$16,800", accent: "#0EA5E9" },
              { title: "LO QUE DEBES", subtitle: "Tarjetas y préstamos", value: "$11,700", accent: "#F59E0B" },
            ].map((b, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "12px 13px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 3 }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: b.accent }} />
                  <span style={{ fontSize: 8, fontWeight: 800, color: b.accent, letterSpacing: "0.4px" }}>{b.title}</span>
                </div>
                <div style={{ height: 2, background: `${b.accent}40`, borderRadius: 2, marginBottom: 6 }} />
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 900, color: "#0F172A", letterSpacing: "-0.5px" }}>{b.value}</p>
                <p style={{ fontSize: 9, color: "#94A3B8", marginTop: 1 }}>{b.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: "#fff", padding: "16px 16px 0" }}>
        <p style={{ fontSize: 15, fontWeight: 900, color: "#0F172A", letterSpacing: "-0.3px", marginBottom: 10, textAlign: "center" }}>¿En qué gasté?</p>
        {[
          { name: "Comida", amount: "$3,800", pct: 74, color: "#FF5C00", bg: "#FFF0EB", initials: "CO" },
          { name: "Transporte", amount: "$1,200", pct: 45, color: "#8B5CF6", bg: "#F3F0FF", initials: "TR" },
          { name: "Entretenimiento", amount: "$800", pct: 30, color: "#0EA5E9", bg: "#EFF6FF", initials: "EN" },
        ].map((e, i) => (
          <div key={i} style={{ background: e.bg, borderRadius: 12, padding: "9px 11px", marginBottom: 7, display: "flex", alignItems: "center", gap: 9 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: e.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 9, fontWeight: 900, color: "#fff" }}>{e.initials}</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: e.color }}>{e.name}</span>
                <span style={{ fontSize: 12, fontWeight: 900, color: e.color }}>{e.amount}</span>
              </div>
              <div style={{ position: "relative", height: 4, borderRadius: 3, overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: `${e.color}20` }} />
                <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: `${e.pct}%`, background: e.color, borderRadius: 3 }} />
              </div>
            </div>
          </div>
        ))}
        <div style={{ height: 40 }} />
      </div>

      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 120,
        background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,1) 100%)",
        pointerEvents: "none",
        zIndex: 2,
      }} />
    </div>
  );
}

// ── Ticker ────────────────────────────────────────────────────────────────
function Ticker() {
  const items = ["Dashboard en tiempo real", "Importar PDF con IA", "Chat con IA por WhatsApp", "Presupuestos mensuales", "Gastos recurrentes", "Exportar a Excel", "Múltiples entidades", "Insights personalizados", "Login sin contraseña"];
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0", padding: "13px 0", background: "#F8FAFC" }}>
      <div style={{ display: "flex", animation: "ticker 28s linear infinite", width: "max-content" }}>
        {doubled.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 18, padding: "0 18px", whiteSpace: "nowrap" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#10B981", flexShrink: 0, display: "inline-block" }} />
            <span style={{ fontSize: 13, color: "#94A3B8", fontWeight: 500 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── How It Works ──────────────────────────────────────────────────────────
function HowItWorks() {
  const titleRef = useFadeUp();
  const steps = [
    { num: "01", emoji: "🏦", title: "Configura tus cuentas", desc: "Agrega banco, efectivo, tarjetas y deudas. balu te guía en menos de 3 minutos.", color: "#0EA5E9", bg: "#EFF6FF" },
    { num: "02", emoji: "📝", title: "Registra movimientos", desc: "Anota gastos e ingresos con 3 toques. O importa tu estado de cuenta PDF con IA.", color: "#10B981", bg: "#ECFDF5" },
    { num: "03", emoji: "💬", title: "Pregúntale por WhatsApp", desc: "Chatea con balu desde WhatsApp. Consulta saldos, registra gastos o pide análisis sin abrir la app.", color: "#F59E0B", bg: "#FFFBEB" },
    { num: "04", emoji: "📊", title: "Entiende tu dinero", desc: "Dashboard, estadísticas, presupuestos y Excel. Datos que se convierten en decisiones.", color: "#8B5CF6", bg: "#F5F3FF" },
  ];
  return (
    <section id="como-funciona" className="section-pad" style={{ background: "#fff", overflow: "hidden", position: "relative" }}>
      <Blob style={{ width: 500, height: 500, top: "-100px", right: "-150px", background: "rgba(16,185,129,0.07)", animation: "blobFloat 14s ease-in-out infinite" }} />
      <div style={{ ...container, position: "relative", zIndex: 1 }}>
        <div ref={titleRef} className="fade-up" style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "2px", color: "#10B981", textTransform: "uppercase", marginBottom: 10 }}>Cómo funciona</p>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, letterSpacing: "-1.5px", color: "#0F172A", lineHeight: 1.1 }}>
            De cero a control total<br />
            <span style={{ background: "linear-gradient(135deg, #10B981, #059669)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>en 4 pasos.</span>
          </h2>
        </div>
        <div className="grid-steps">
          {steps.map((step, i) => <StepCard key={i} step={step} />)}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step }: { step: { num: string; emoji: string; title: string; desc: string; color: string; bg: string } }) {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ background: hover ? step.bg : "#fff", border: `1px solid ${hover ? step.color + "30" : "#E2E8F0"}`, borderRadius: 20, padding: "24px 20px", position: "relative", overflow: "hidden", boxShadow: hover ? `0 12px 40px ${step.color}18` : "0 2px 8px rgba(0,0,0,0.05)", transform: hover ? "translateY(-4px)" : "none", transition: "all 0.25s ease", cursor: "default" }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div style={{ position: "absolute", top: -16, right: 12, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 68, fontWeight: 800, color: `${step.color}08`, lineHeight: 1, userSelect: "none" }}>{step.num}</div>
      <div style={{ width: 48, height: 48, background: step.bg, border: `1.5px solid ${step.color}25`, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16, boxShadow: `0 4px 12px ${step.color}15` }}>{step.emoji}</div>
      <p style={{ fontSize: 10, color: step.color, fontWeight: 700, letterSpacing: "1px", marginBottom: 6 }}>PASO {step.num}</p>
      <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 700, color: "#0F172A", marginBottom: 8, letterSpacing: "-0.2px" }}>{step.title}</h3>
      <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>{step.desc}</p>
    </div>
  );
}

// ── Features ──────────────────────────────────────────────────────────────
function Features() {
  const features = [
    { icon: "📊", title: "Dashboard inteligente", desc: "Ve en tiempo real cuánto ahorras y dónde va tu dinero. Navega entre meses con un toque.", color: "#10B981", bg: "#ECFDF5" },
    { icon: "🤖", title: "Importar PDF con IA", desc: "Sube tu estado de cuenta y Claude extrae todos los movimientos. Tú solo confirmas.", color: "#0EA5E9", bg: "#EFF6FF" },
    { icon: "💬", title: "Asistente por WhatsApp", desc: "El chat con balu vive en WhatsApp. Consulta saldos, registra gastos o pide análisis sin abrir la app.", color: "#25D366", bg: "#ECFDF5" },
    { icon: "🎯", title: "Presupuestos", desc: "Define cuánto quieres gastar por categoría. balu te avisa cuando estás al límite.", color: "#F59E0B", bg: "#FFFBEB" },
    { icon: "🔄", title: "Gastos recurrentes", desc: "Renta, Netflix, gym — configúralos una vez y balu los aplica cada mes.", color: "#8B5CF6", bg: "#F5F3FF" },
    { icon: "📈", title: "Estadísticas avanzadas", desc: "Gráficas de ingresos vs gastos, evolución de activos y comparativa año a año.", color: "#EC4899", bg: "#FDF2F8" },
    { icon: "📥", title: "Exportar a Excel", desc: "Un toque y tienes tus movimientos del mes en Excel, listo para compartir.", color: "#059669", bg: "#ECFDF5" },
    { icon: "🏢", title: "Múltiples entidades", desc: "Separa finanzas personales, negocio y proyectos. Hasta 5 entidades con balu Max.", color: "#F59E0B", bg: "#FFFBEB" },
    { icon: "🔐", title: "Login sin contraseña", desc: "Accede con un código enviado a tu correo o WhatsApp. Sin contraseñas que olvidar.", color: "#64748B", bg: "#F8FAFC" },
  ];

  return (
    <section id="caracteristicas" className="section-pad" style={{ background: "#F8FAFC", overflow: "hidden", position: "relative" }}>
      <Blob style={{ width: 400, height: 400, bottom: "-80px", left: "-100px", background: "rgba(16,185,129,0.08)", animation: "blobFloat2 16s ease-in-out infinite" }} />
      <div style={{ ...container, position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 52, flexWrap: "wrap", gap: 20 }}>
          <div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "2px", color: "#10B981", textTransform: "uppercase", marginBottom: 10 }}>Características</p>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, letterSpacing: "-1.5px", color: "#0F172A", lineHeight: 1.1 }}>
              Todo lo que necesitas.<br />
              <span style={{ background: "linear-gradient(135deg, #10B981, #059669)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Nada que no.</span>
            </h2>
          </div>
          <div className="desktop-only" style={{ alignItems: "flex-end" }}>
            <Image src="/balu_chart.png" alt="balu con gráfica" width={160} height={160} style={{ objectFit: "contain", filter: "drop-shadow(0 16px 40px rgba(16,185,129,0.3))" }} />
          </div>
        </div>
        <div className="grid-features">
          {features.map((f, i) => <FeatureCard key={i} feature={f} />)}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: { icon: string; title: string; desc: string; color: string; bg: string } }) {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ background: hover ? feature.bg : "#fff", border: `1px solid ${hover ? feature.color + "25" : "#E2E8F0"}`, borderRadius: 20, padding: "22px", boxShadow: hover ? `0 12px 36px ${feature.color}15` : "0 1px 4px rgba(0,0,0,0.04)", transform: hover ? "translateY(-3px)" : "none", transition: "all 0.25s ease", cursor: "default" }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div style={{ width: 44, height: 44, background: feature.bg, border: `1.5px solid ${feature.color}20`, borderRadius: 13, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 12 }}>{feature.icon}</div>
      <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 700, color: "#0F172A", marginBottom: 6, letterSpacing: "-0.2px" }}>{feature.title}</h3>
      <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>{feature.desc}</p>
    </div>
  );
}

// ── AI Section ────────────────────────────────────────────────────────────
function AISection() {
  return (
    <section id="ia" className="section-pad" style={{ background: "#fff", overflow: "hidden", position: "relative" }}>
      <Blob style={{ width: 500, height: 500, top: "-100px", right: "-120px", background: "rgba(14,165,233,0.08)", animation: "blobFloat 13s ease-in-out infinite" }} />
      <Blob style={{ width: 350, height: 350, bottom: "-80px", left: "-80px", background: "rgba(16,185,129,0.07)", animation: "blobFloat2 17s ease-in-out infinite" }} />
      <div style={{ ...container, position: "relative", zIndex: 1 }}>
        <div className="grid-2col">
          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#EFF6FF", border: "1px solid #BFDBFE", color: "#3B82F6", fontSize: 11, fontWeight: 700, padding: "5px 12px", borderRadius: 100, marginBottom: 18 }}>✨ Powered by Claude AI</div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, letterSpacing: "-1.5px", color: "#0F172A", lineHeight: 1.1, marginBottom: 16 }}>
              La IA que entiende<br />
              <span style={{ background: "linear-gradient(135deg, #0EA5E9, #3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>tus finanzas.</span>
            </h2>
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7, marginBottom: 24 }}>
              balu usa la API de Anthropic (Claude) para importar estados de cuenta, generar insights mensuales y responder tus preguntas financieras directamente por WhatsApp.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24, padding: "16px 20px", background: "linear-gradient(135deg, #EFF6FF, #DBEAFE)", border: "1px solid #BFDBFE", borderRadius: 18 }}>
              <Image src="/balu_thinking.png" alt="balu pensando" width={110} height={110} style={{ objectFit: "contain", flexShrink: 0, filter: "drop-shadow(0 12px 28px rgba(59,130,246,0.3))" }} />
              <div>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 700, color: "#1D4ED8", marginBottom: 4 }}>Pregúntale lo que sea</p>
                <p style={{ fontSize: 13, color: "#3B82F6", lineHeight: 1.5 }}>"¿Cuánto gasté en comida este mes?" · "Resúmeme mi marzo" · "¿Puedo ahorrar $500 más?"</p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: "📄", title: "Importación de PDF", desc: "Sube tu estado de cuenta y Claude extrae todos los movimientos. Detecta gastos, ingresos y transferencias.", color: "#0EA5E9", bg: "#EFF6FF", tag: "Todos los planes" },
                { icon: "💬", title: "Insight mensual", desc: "Al cierre de mes, balu genera un análisis breve y personalizado de tu situación financiera.", color: "#10B981", bg: "#ECFDF5", tag: "Todos los planes" },
                { icon: "🤖", title: "Chat con asistente por WhatsApp", desc: "Habla con balu desde WhatsApp. Consulta, registra gastos o pide análisis sin abrir la app.", color: "#8B5CF6", bg: "#F5F3FF", tag: "Pro y Max" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, padding: "14px 16px", background: item.bg, border: `1px solid ${item.color}20`, borderRadius: 14 }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: item.color }}>{item.title}</p>
                      <span style={{ fontSize: 9, fontWeight: 700, color: item.color, background: "#fff", padding: "2px 6px", borderRadius: 6, border: `1px solid ${item.color}30` }}>{item.tag}</span>
                    </div>
                    <p style={{ fontSize: 12, color: "#64748B", lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "#94A3B8", marginTop: 14, lineHeight: 1.5 }}>* La importación de PDF y el chat con IA son opcionales. Si prefieres registrar todo manualmente, balu funciona igual.</p>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {/* WhatsApp mock */}
            <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 20, padding: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, paddingBottom: 12, borderBottom: "1px solid #F1F5F9" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>💬</div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#0F172A" }}>balu por WhatsApp</p>
                  <p style={{ fontSize: 11, color: "#25D366", display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#25D366", display: "inline-block" }} />
                    en línea
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ alignSelf: "flex-end", maxWidth: "80%", background: "#DCF8C6", borderRadius: "14px 14px 4px 14px", padding: "8px 12px" }}>
                  <p style={{ fontSize: 13, color: "#0F172A", lineHeight: 1.4 }}>¿Cuánto llevo gastado en comida este mes?</p>
                </div>
                <div style={{ alignSelf: "flex-start", maxWidth: "85%", background: "#F1F5F9", borderRadius: "14px 14px 14px 4px", padding: "10px 12px" }}>
                  <p style={{ fontSize: 13, color: "#0F172A", lineHeight: 1.5, marginBottom: 6 }}>Llevas <strong>$3,800</strong> en comida en abril 🍽️</p>
                  <p style={{ fontSize: 12, color: "#475569", lineHeight: 1.5 }}>Es tu categoría #1 del mes (74% del presupuesto). Vas bien: te quedan $1,200 para los últimos 12 días.</p>
                </div>
                <div style={{ alignSelf: "flex-end", maxWidth: "80%", background: "#DCF8C6", borderRadius: "14px 14px 4px 14px", padding: "8px 12px" }}>
                  <p style={{ fontSize: 13, color: "#0F172A", lineHeight: 1.4 }}>Registra que pagué $150 de Uber</p>
                </div>
                <div style={{ alignSelf: "flex-start", maxWidth: "85%", background: "#F1F5F9", borderRadius: "14px 14px 14px 4px", padding: "10px 12px" }}>
                  <p style={{ fontSize: 13, color: "#0F172A", lineHeight: 1.5 }}>Listo ✅ $150 en Transporte desde tu cuenta BBVA.</p>
                </div>
              </div>
            </div>

            {/* PDF import card */}
            <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 20, padding: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 34, height: 34, background: "#EFF6FF", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>📄</div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#0F172A" }}>PDF importado con IA</p>
                  <p style={{ fontSize: 10, color: "#94A3B8" }}>27 movimientos detectados</p>
                </div>
                <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: 8, padding: "3px 9px" }}>
                  <span style={{ fontSize: 10, color: "#059669", fontWeight: 700 }}>✓ Listo</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {[
                  { desc: "Oxxo • Comida", amount: "-$85.00", color: "#EF4444", bg: "#FEF2F2" },
                  { desc: "SPEI recibido • Sueldo", amount: "+$18,500", color: "#10B981", bg: "#ECFDF5" },
                  { desc: "Spotify • Suscripción", amount: "-$99.00", color: "#EF4444", bg: "#FEF2F2" },
                ].map((tx, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 9px", background: tx.bg, borderRadius: 8 }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: tx.color }} />
                    <span style={{ fontSize: 11, color: "#475569", flex: 1 }}>{tx.desc}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: tx.color }}>{tx.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Insight card */}
            <div style={{ background: "linear-gradient(135deg, #ECFDF5, #D1FAE5)", border: "1px solid #A7F3D0", borderRadius: 20, padding: "16px 18px", display: "flex", gap: 12, alignItems: "center", boxShadow: "0 4px 20px rgba(16,185,129,0.1)" }}>
              <Image src="/balu_face_happy.png" alt="balu feliz" width={52} height={52} style={{ objectFit: "cover", flexShrink: 0, borderRadius: 14 }} />
              <div>
                <p style={{ fontSize: 10, color: "#059669", fontWeight: 700, letterSpacing: "0.5px", marginBottom: 4 }}>RESUMEN IA — ABRIL 2026</p>
                <p style={{ fontSize: 13, color: "#065F46", lineHeight: 1.6, fontStyle: "italic" }}>"Ahorraste $3,240 este mes — tu mejor resultado del trimestre. ¡Sigue así! 🎉"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Para quién es balu ────────────────────────────────────────────────────
function ForWho() {
  const titleRef = useFadeUp();
  const profiles = [
    {
      emoji: "💼",
      title: "Freelancers y autoempleos",
      desc: "Ingresos variables, múltiples clientes, sin contador. balu te dice exactamente qué quedó después de gastos cada mes.",
      color: "#8B5CF6", bg: "#F5F3FF",
      tags: ["Ingresos variables", "Facturas", "Flujo de caja"],
    },
    {
      emoji: "🎓",
      title: "Jóvenes que empiezan",
      desc: "Primer trabajo, primer departamento, primeras deudas. balu te enseña a llevar finanzas sin saber contabilidad.",
      color: "#0EA5E9", bg: "#EFF6FF",
      tags: ["Fácil de usar", "Sin experiencia", "Chat por WhatsApp"],
    },
    {
      emoji: "🏪",
      title: "Pequeños negocios",
      desc: "Separa finanzas personales del negocio sin mezclar. Con balu Max tienes hasta 5 entidades independientes.",
      color: "#F59E0B", bg: "#FFFBEB",
      tags: ["Múltiples entidades", "Control de gastos", "Reportes"],
    },
    {
      emoji: "🧘",
      title: "Quienes quieren claridad",
      desc: "Si alguna vez no supiste cuánto tenías o en qué se fue el mes, balu es para ti. Sin complicaciones, sin Excel.",
      color: "#EC4899", bg: "#FDF2F8",
      tags: ["Simple", "Sin jerga", "Tranquilidad"],
    },
  ];

  return (
    <section className="section-pad" style={{ background: "#F8FAFC", overflow: "hidden", position: "relative" }}>
      <Blob style={{ width: 400, height: 400, top: "-80px", right: "-80px", background: "rgba(139,92,246,0.07)", animation: "blobFloat 16s ease-in-out infinite" }} />
      <div style={{ ...container, position: "relative", zIndex: 1 }}>
        <div ref={titleRef} className="fade-up" style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "2px", color: "#10B981", textTransform: "uppercase", marginBottom: 10 }}>¿Para quién es balu?</p>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, letterSpacing: "-1.5px", color: "#0F172A", lineHeight: 1.1 }}>
            Reconócete aquí.
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", marginTop: 12, maxWidth: 480, margin: "12px auto 0" }}>
            No importa en qué etapa estés — balu se adapta a ti.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {profiles.map((p, i) => (
            <ProfileCard key={i} profile={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfileCard({ profile, index }: { profile: { emoji: string; title: string; desc: string; color: string; bg: string; tags: string[] }; index: number }) {
  const cardRef = useFadeUp();
  return (
    <div ref={cardRef} className={`fade-up fade-up-delay-${index + 1}`} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 20, padding: "24px 22px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
      <div style={{ width: 52, height: 52, background: profile.bg, border: `1.5px solid ${profile.color}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 16 }}>
        {profile.emoji}
      </div>
      <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 700, color: "#0F172A", marginBottom: 8, letterSpacing: "-0.2px" }}>{profile.title}</h3>
      <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.65, marginBottom: 16 }}>{profile.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {profile.tags.map((tag, j) => (
          <span key={j} style={{ fontSize: 11, fontWeight: 600, color: profile.color, background: profile.bg, padding: "3px 9px", borderRadius: 100, border: `1px solid ${profile.color}20` }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

// ── Pricing (3 planes + tabla comparativa) ───────────────────────────────
function Pricing() {
  const titleRef = useFadeUp();
  const tableRef = useFadeUp();

  const liteFeatures = [
    "Dashboard mensual completo",
    "Registro ilimitado de movimientos",
    "Importación de PDFs con IA",
    "Presupuestos y recurrentes",
    "Exportar a Excel",
    "1 entidad financiera",
  ];
  const proFeatures = [
    "Todo lo de Lite",
    "Chat con asistente IA por WhatsApp",
    "Insight mensual personalizado",
    "Estadísticas año a año",
    "Soporte prioritario",
    "Acceso a nuevas funciones",
  ];
  const maxFeatures = [
    "Todo lo de Pro",
    "Hasta 5 entidades independientes",
    "Ideal para negocios y familias",
    "Uso sin límites del asistente IA",
    "Acceso anticipado a funciones nuevas",
    "Soporte dedicado",
  ];

  const rows = [
    { feature: "Dashboard mensual", lite: true, pro: true, max: true },
    { feature: "Movimientos ilimitados", lite: true, pro: true, max: true },
    { feature: "Importar PDF con IA", lite: true, pro: true, max: true },
    { feature: "Presupuestos y recurrentes", lite: true, pro: true, max: true },
    { feature: "Exportar a Excel", lite: true, pro: true, max: true },
    { feature: "Estadísticas básicas", lite: true, pro: true, max: true },
    { feature: "Insight mensual con IA", lite: false, pro: true, max: true },
    { feature: "Chat con asistente por WhatsApp", lite: false, pro: true, max: true },
    { feature: "Estadísticas año a año", lite: false, pro: true, max: true },
    { feature: "Soporte prioritario", lite: false, pro: true, max: true },
    { feature: "Entidades financieras", lite: "1", pro: "1", max: "5" },
    { feature: "Acceso anticipado a features", lite: false, pro: false, max: true },
  ];

  return (
    <section id="precios" className="section-pad" style={{ background: "#F8FAFC", overflow: "hidden", position: "relative" }}>
      <Blob style={{ width: 450, height: 450, top: "-80px", left: "50%", background: "rgba(16,185,129,0.07)", animation: "blobFloat 15s ease-in-out infinite" }} />
      <div style={{ ...container, position: "relative", zIndex: 1 }}>
        <div ref={titleRef} className="fade-up" style={{ textAlign: "center", marginBottom: 44 }}>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "2px", color: "#10B981", textTransform: "uppercase", marginBottom: 10 }}>Precios</p>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, letterSpacing: "-1.5px", color: "#0F172A", lineHeight: 1.1, marginBottom: 10 }}>Elige tu plan.</h2>
          <p style={{ fontSize: 15, color: "#64748B" }}>Descarga gratis · Cancela cuando quieras · Sin compromisos</p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <Image src="/balu_money.png" alt="balu con dinero" width={160} height={160} style={{ objectFit: "contain", filter: "drop-shadow(0 16px 40px rgba(16,185,129,0.3))", animation: "float 4s ease-in-out infinite" }} />
        </div>

        {/* 3 Plan cards */}
        <div className="grid-pricing-3" style={{ marginBottom: 48 }}>
          <PlanCard
            name="BALU LITE"
            price="$69"
            period="/mes"
            annual="o $690/año · equivale a 10 meses"
            description="Para empezar a ordenar tus finanzas."
            features={liteFeatures}
            featured={false}
            cta="Empezar con Lite"
          />
          <PlanCard
            name="BALU PRO"
            price="$129"
            period="/mes"
            annual="o $1,290/año · equivale a 10 meses"
            description="Con asistente IA por app y WhatsApp."
            features={proFeatures}
            featured={true}
            cta="Empezar con Pro"
            badge="MÁS POPULAR"
          />
          <PlanCard
            name="BALU MAX"
            price="$199"
            period="/mes"
            annual="o $1,990/año · equivale a 10 meses"
            description="Hasta 5 entidades. Para negocios y familias."
            features={maxFeatures}
            featured={false}
            cta="Empezar con Max"
          />
        </div>

        {/* Comparison table */}
        <div ref={tableRef} className="fade-up" style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
          <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid #F1F5F9" }}>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 700, color: "#0F172A" }}>Comparativa completa</p>
            <p style={{ fontSize: 12, color: "#94A3B8", marginTop: 2 }}>¿Cuál es la diferencia entre los planes?</p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th style={{ width: "40%" }}>Característica</th>
                  <th>Lite</th>
                  <th style={{ color: "#059669", background: "#F0FDF4" }}>Pro ⭐</th>
                  <th>Max</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#FAFAFA" }}>
                    <td>{row.feature}</td>
                    <td style={{ color: typeof row.lite === "string" ? "#0F172A" : row.lite ? "#10B981" : "#CBD5E1", fontWeight: typeof row.lite === "string" ? 700 : 400 }}>
                      {typeof row.lite === "string" ? row.lite : row.lite ? "✓" : "—"}
                    </td>
                    <td style={{ color: typeof row.pro === "string" ? "#0F172A" : row.pro ? "#10B981" : "#CBD5E1", background: i % 2 === 0 ? "#F0FDF4" : "#ECFDF5", fontWeight: typeof row.pro === "string" ? 700 : 400 }}>
                      {typeof row.pro === "string" ? row.pro : row.pro ? "✓" : "—"}
                    </td>
                    <td style={{ color: typeof row.max === "string" ? "#0F172A" : row.max ? "#10B981" : "#CBD5E1", fontWeight: typeof row.max === "string" ? 700 : 400 }}>
                      {typeof row.max === "string" ? row.max : row.max ? "✓" : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p style={{ textAlign: "center", fontSize: 12, color: "#94A3B8", marginTop: 24 }}>Precios en MXN · App Store y Google Play · Plan anual equivale a 10 meses de 12</p>
      </div>
    </section>
  );
}

function PlanCard({ name, price, period, annual, description, features, featured, cta, badge }: { name: string; price: string; period: string; annual: string; description: string; features: string[]; featured: boolean; cta: string; badge?: string }) {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ background: featured ? "linear-gradient(160deg, #ECFDF5 0%, #fff 60%)" : "#fff", border: `1.5px solid ${featured ? "#A7F3D0" : "#E2E8F0"}`, borderRadius: 22, padding: "26px 22px", position: "relative", overflow: "hidden", boxShadow: featured ? "0 16px 56px rgba(16,185,129,0.15)" : hover ? "0 8px 32px rgba(0,0,0,0.08)" : "0 2px 8px rgba(0,0,0,0.04)", transform: hover ? "translateY(-4px)" : "none", transition: "all 0.25s ease", display: "flex", flexDirection: "column" }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {featured && <Blob style={{ width: 180, height: 180, top: -60, right: -60, background: "rgba(16,185,129,0.1)" }} />}
      {badge && <div style={{ position: "absolute", top: 16, right: 16, background: "linear-gradient(135deg, #10B981, #059669)", color: "#fff", fontSize: 10, fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif", padding: "4px 10px", borderRadius: 100, zIndex: 1 }}>{badge}</div>}
      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, color: featured ? "#059669" : "#94A3B8", letterSpacing: "1px", marginBottom: 6, position: "relative", zIndex: 1 }}>{name}</p>
      <p style={{ fontSize: 13, color: "#64748B", marginBottom: 14, lineHeight: 1.45, position: "relative", zIndex: 1 }}>{description}</p>
      <div style={{ marginBottom: 6, position: "relative", zIndex: 1 }}>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 38, fontWeight: 800, color: "#0F172A", letterSpacing: "-1.5px" }}>{price}</span>
        <span style={{ fontSize: 13, color: "#94A3B8" }}>{period}</span>
      </div>
      <p style={{ fontSize: 12, color: "#10B981", fontWeight: 600, marginBottom: 22, position: "relative", zIndex: 1 }}>{annual}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 22, position: "relative", zIndex: 1, flex: 1 }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
            <div style={{ width: 17, height: 17, borderRadius: "50%", background: "#ECFDF5", border: "1.5px solid #A7F3D0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
              <span style={{ color: "#10B981", fontSize: 9, fontWeight: 800 }}>✓</span>
            </div>
            <span style={{ fontSize: 13, color: featured && i === 0 ? "#059669" : "#475569", fontWeight: featured && i === 0 ? 600 : 400 }}>{f}</span>
          </div>
        ))}
      </div>
      <a href="#" style={{ display: "block", textAlign: "center", padding: "13px", background: featured ? "linear-gradient(135deg, #10B981, #059669)" : "#F1F5F9", color: featured ? "#fff" : "#475569", borderRadius: 13, fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, textDecoration: "none", boxShadow: featured ? "0 6px 20px rgba(16,185,129,0.3)" : "none", position: "relative", zIndex: 1 }}>{cta}</a>
    </div>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────
function FAQ() {
  const faqs = [
    { q: "¿Es seguro subir mi estado de cuenta?", a: "Sí. Tu PDF se envía directamente a la API de Anthropic (Claude) solo para extraer los movimientos. balu no lo almacena después del procesamiento. Toda la comunicación es cifrada con HTTPS." },
    { q: "¿Cómo funciona el chat con IA por WhatsApp?", a: "Si tienes plan Pro o Max, puedes vincular tu número y hablar con balu directamente por WhatsApp. Puedes preguntar por tus gastos, pedir análisis o registrar movimientos desde el chat. El chat con IA vive exclusivamente en WhatsApp — dentro de la app no hay chatbot, solo el dashboard y tus movimientos." },
    { q: "¿Necesito conectar mis cuentas bancarias?", a: "No. balu funciona con registro manual y con importación de PDFs. No pedimos acceso a tus cuentas bancarias ni contraseñas. Tú tienes el control total." },
    { q: "¿Puedo usar balu para mi negocio?", a: "Sí. Con balu Max puedes crear hasta 5 entidades financieras separadas, ideal para separar finanzas personales de negocio o manejar varios proyectos al mismo tiempo." },
    { q: "¿Qué pasa si cancelo mi suscripción?", a: "Mantienes acceso hasta el fin del período pagado. Después tus datos permanecen disponibles por 30 días antes de ser eliminados. Puedes exportar todo a Excel en cualquier momento." },
    { q: "¿Funciona en iOS y Android?", a: "Sí. balu está disponible en App Store y Google Play. La experiencia es idéntica en ambas plataformas." },
    { q: "¿Cómo inicio sesión sin contraseña?", a: "balu envía un código de 6 dígitos a tu correo (o WhatsApp, si lo vinculas). Ingresas el código y listo. Sin contraseñas que olvidar ni que te roben." },
  ];

  return (
    <section className="section-pad" style={{ background: "#fff", overflow: "hidden", position: "relative" }}>
      <Blob style={{ width: 400, height: 400, top: "-60px", right: "-100px", background: "rgba(16,185,129,0.06)", animation: "blobFloat2 18s ease-in-out infinite" }} />
      <div style={{ ...container, maxWidth: 700, position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "2px", color: "#10B981", textTransform: "uppercase", marginBottom: 10 }}>Preguntas frecuentes</p>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, letterSpacing: "-1.5px", color: "#0F172A" }}>Respuestas rápidas.</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ background: hover ? "#ECFDF5" : "#fff", border: `1px solid ${hover ? "#A7F3D0" : "#E2E8F0"}`, borderRadius: 14, padding: "16px 20px", boxShadow: hover ? "0 4px 16px rgba(16,185,129,0.1)" : "0 1px 4px rgba(0,0,0,0.04)", transition: "all 0.2s ease" }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 700, color: "#0F172A", marginBottom: 6 }}>{q}</p>
      <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>{a}</p>
    </div>
  );
}

// ── CTA Final ─────────────────────────────────────────────────────────────
function CTAFinal() {
  return (
    <section style={{ padding: "72px 0 88px", background: "#F8FAFC", position: "relative", overflow: "hidden" }}>
      <Blob style={{ width: 500, height: 500, top: "-100px", left: "50%", transform: "translateX(-50%)", background: "rgba(16,185,129,0.1)", animation: "blobFloat 14s ease-in-out infinite" }} />
      <Blob style={{ width: 300, height: 300, bottom: "-60px", right: "-60px", background: "rgba(52,211,153,0.08)", animation: "blobFloat2 16s ease-in-out infinite" }} />
      <div style={{ ...container, textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <Image src="/balu_celebrating.png" alt="balu celebrando" width={180} height={180} style={{ objectFit: "contain", filter: "drop-shadow(0 20px 48px rgba(16,185,129,0.3))", animation: "float 3.5s ease-in-out infinite" }} />
        </div>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 800, letterSpacing: "-1.5px", color: "#0F172A", lineHeight: 1.1, marginBottom: 16 }}>
          ¿Sabes exactamente<br />
          <span style={{ background: "linear-gradient(135deg, #10B981, #059669)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>cuánto tienes hoy?</span>
        </h2>
        <p style={{ fontSize: 17, color: "#64748B", maxWidth: 380, margin: "0 auto 32px", lineHeight: 1.6 }}>Con balu, la respuesta siempre es sí.</p>
        <a href="#precios" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #10B981, #059669)", color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 16, padding: "15px 34px", borderRadius: 15, textDecoration: "none", boxShadow: "0 12px 36px rgba(16,185,129,0.35)" }}>
          📱 Descargar balu gratis
        </a>
        <p style={{ fontSize: 12, color: "#94A3B8", marginTop: 12 }}>App Store y Google Play · Disponible para México</p>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #E2E8F0", background: "#fff", padding: "44px 0 28px" }}>
      <div style={container}>
        <div className="grid-footer">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, overflow: "hidden", boxShadow: "0 4px 12px rgba(16,185,129,0.25)", flexShrink: 0 }}>
                <Image src="/logo.png" alt="balu" width={32} height={32} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 18, color: "#0F172A" }}>balu</span>
            </div>
            <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.6, maxWidth: 240 }}>App de finanzas personales hecha en México. Operada por Miguel Angel Galvez Urbina, Saltillo, Coahuila.</p>
            <div style={{ marginTop: 12 }}><FooterLink href="https://instagram.com/soybalu.app">Instagram @soybalu.app</FooterLink></div>
          </div>
          <div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "#CBD5E1", letterSpacing: "1px", marginBottom: 12 }}>PRODUCTO</p>
            <FooterLink href="#como-funciona">Cómo funciona</FooterLink>
            <FooterLink href="#caracteristicas">Características</FooterLink>
            <FooterLink href="#ia">IA por WhatsApp</FooterLink>
            <FooterLink href="#precios">Precios</FooterLink>
          </div>
          <div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "#CBD5E1", letterSpacing: "1px", marginBottom: 12 }}>SOPORTE</p>
            <FooterLink href="mailto:hola@soybalu.app">Contacto</FooterLink>
            <FooterLink href="mailto:hola@soybalu.app">Reportar un problema</FooterLink>
          </div>
          <div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "#CBD5E1", letterSpacing: "1px", marginBottom: 12 }}>LEGAL</p>
            <FooterLink href="/terminos">Términos y Condiciones</FooterLink>
            <FooterLink href="/privacidad">Política de Privacidad</FooterLink>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: 20, marginBottom: 12 }}>
          <p style={{ fontSize: 12, color: "#64748B", lineHeight: 1.6 }}>
            © 2026 Operado por <strong style={{ color: "#475569" }}>Miguel Angel Galvez Urbina</strong>, persona física con actividad empresarial (RFC GAUM0212276K3), Saltillo, Coahuila, México. Contacto: <a href="mailto:hola@soybalu.app" style={{ color: "#10B981", textDecoration: "none" }}>hola@soybalu.app</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hover, setHover] = useState(false);
  return (
    <a href={href} style={{ display: "block", fontSize: 13, color: hover ? "#10B981" : "#94A3B8", textDecoration: "none", marginBottom: 7, transition: "color 0.2s" }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <HowItWorks />
        <ForWho />
        <Features />
        <AISection />
        <Pricing />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}