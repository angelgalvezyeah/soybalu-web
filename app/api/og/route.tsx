import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "#ffffff",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Blob verde top-left */}
        <div style={{
          position: "absolute",
          top: "-120px", left: "-120px",
          width: "520px", height: "520px",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          background: "rgba(16,185,129,0.18)",
          display: "flex",
        }} />
        {/* Blob verde top-right */}
        <div style={{
          position: "absolute",
          top: "-60px", right: "-80px",
          width: "360px", height: "360px",
          borderRadius: "40% 60% 70% 30% / 40% 70% 30% 60%",
          background: "rgba(52,211,153,0.12)",
          display: "flex",
        }} />
        {/* Blob verde bottom-left */}
        <div style={{
          position: "absolute",
          bottom: "-80px", left: "30%",
          width: "300px", height: "300px",
          borderRadius: "50%",
          background: "rgba(16,185,129,0.08)",
          display: "flex",
        }} />

        {/* Grid sutil */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(16,185,129,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          display: "flex",
        }} />

        {/* Contenido principal */}
        <div style={{
          position: "relative",
          display: "flex",
          width: "100%",
          alignItems: "center",
          padding: "0 80px",
          gap: "60px",
        }}>

          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            {/* Logo + nombre */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "36px" }}>
              <div style={{
                width: "52px", height: "52px",
                background: "linear-gradient(135deg, #10B981, #059669)",
                borderRadius: "16px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "28px",
                boxShadow: "0 8px 20px rgba(16,185,129,0.35)",
              }}>🐻</div>
              <span style={{ fontSize: "32px", fontWeight: 800, color: "#0F172A", letterSpacing: "-1px" }}>balu</span>
            </div>

            {/* Badge */}
            <div style={{
              display: "flex", alignItems: "center", gap: "6px",
              background: "#ECFDF5",
              border: "1.5px solid #A7F3D0",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "20px",
              width: "fit-content",
            }}>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#059669", letterSpacing: "0.5px" }}>🇲🇽 App de finanzas personales</span>
            </div>

            {/* Headline */}
            <div style={{ display: "flex", flexDirection: "column", marginBottom: "24px" }}>
              <span style={{ fontSize: "68px", fontWeight: 900, color: "#0F172A", letterSpacing: "-3px", lineHeight: 1.05 }}>
                Tus finanzas,
              </span>
              <span style={{
                fontSize: "68px", fontWeight: 900, letterSpacing: "-3px", lineHeight: 1.05,
                background: "linear-gradient(135deg, #10B981, #059669)",
                backgroundClip: "text",
                color: "transparent",
              }}>
                por fin claras.
              </span>
            </div>

            {/* Subtitle */}
            <p style={{ fontSize: "22px", color: "#475569", lineHeight: 1.5, margin: 0, maxWidth: "460px" }}>
              Registra, presupuesta e importa con IA. Sin complicaciones.
            </p>

            {/* URL */}
            <div style={{
              display: "flex", alignItems: "center", gap: "8px",
              marginTop: "32px",
              background: "linear-gradient(135deg, #10B981, #059669)",
              borderRadius: "14px",
              padding: "12px 24px",
              width: "fit-content",
              boxShadow: "0 8px 24px rgba(16,185,129,0.35)",
            }}>
              <span style={{ fontSize: "18px", fontWeight: 700, color: "#fff" }}>📱 soybalu.app</span>
            </div>
          </div>

          {/* Right — mini dashboard mock */}
          <div style={{
            display: "flex", flexDirection: "column",
            background: "#fff",
            borderRadius: "28px",
            boxShadow: "0 32px 80px rgba(0,0,0,0.14)",
            border: "1px solid rgba(0,0,0,0.06)",
            overflow: "hidden",
            width: "320px",
            flexShrink: 0,
          }}>
            {/* Header verde */}
            <div style={{
              background: "linear-gradient(135deg, #D1FAE5, #A7F3D0)",
              padding: "24px 24px 20px",
              display: "flex", flexDirection: "column",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <div style={{ fontSize: "20px" }}>🐻</div>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#064E3B" }}>Finanzas personales</span>
              </div>
              <span style={{ fontSize: "11px", color: "#6EE7B7", fontWeight: 700, letterSpacing: "1px", marginBottom: "4px" }}>AHORRASTE ESTE MES</span>
              <span style={{ fontSize: "42px", fontWeight: 900, color: "#064E3B", letterSpacing: "-2px", lineHeight: 1 }}>$3,240</span>
            </div>
            {/* Stats */}
            <div style={{ display: "flex", gap: "8px", padding: "14px 16px 10px", background: "#fff" }}>
              {[{ label: "ENTRÓ", value: "$18,500", color: "#10B981", bg: "#ECFDF5" }, { label: "SALIÓ", value: "$15,260", color: "#EF4444", bg: "#FEF2F2" }].map((s, i) => (
                <div key={i} style={{ flex: 1, background: s.bg, borderRadius: "10px", padding: "10px 12px", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "8px", fontWeight: 800, color: s.color, letterSpacing: "0.5px", marginBottom: "3px" }}>{s.label}</span>
                  <span style={{ fontSize: "16px", fontWeight: 900, color: s.color, letterSpacing: "-0.5px" }}>{s.value}</span>
                </div>
              ))}
            </div>
            {/* Expenses */}
            <div style={{ padding: "4px 16px 16px", display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                { name: "Comida", pct: 72, color: "#FF5C00", bg: "#FFF0EB" },
                { name: "Transporte", pct: 45, color: "#8B5CF6", bg: "#F3F0FF" },
                { name: "Entretenimiento", pct: 28, color: "#0EA5E9", bg: "#EFF6FF" },
              ].map((e, i) => (
                <div key={i} style={{ background: e.bg, borderRadius: "8px", padding: "7px 10px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: e.color, flex: 1 }}>{e.name}</span>
                  <div style={{ width: "60px", height: "4px", background: `${e.color}20`, borderRadius: "2px", position: "relative", display: "flex" }}>
                    <div style={{ width: `${e.pct}%`, height: "100%", background: e.color, borderRadius: "2px" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Franja verde inferior */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "6px",
          background: "linear-gradient(90deg, #10B981, #34D399, #059669)",
          display: "flex",
        }} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}