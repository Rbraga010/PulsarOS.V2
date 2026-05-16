export function AsciiDivider({ symbol = "◆" }: { symbol?: string }) {
  return (
    <div className="font-mono text-[10px] text-gold/40 tracking-widest text-center select-none py-8">
      ═══════════ ▼ ═══════════ {symbol} ═══════════ ▲ ═══════════
    </div>
  );
}

export function SectionLabel({
  num,
  label,
  color = "gold",
}: {
  num?: string;
  label: string;
  color?: "gold" | "violet";
}) {
  const c = color === "violet" ? "#A78BFA" : "#C9A84A";
  return (
    <div className="flex items-baseline gap-3 font-mono uppercase tracking-widest text-[10px] mb-6">
      {num && (
        <span className="text-text3" style={{ fontSize: "10px" }}>
          {num.padStart(2, "0")}
        </span>
      )}
      <span style={{ color: c }}>{`// ${label}`}</span>
    </div>
  );
}

export function GridPattern() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(201,168,74,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,74,1) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  );
}
