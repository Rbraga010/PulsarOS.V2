import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  bg = "navy",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bg?: "navy" | "navy2" | "cream" | "radial";
}) {
  const bgClass =
    bg === "cream"
      ? "bg-cream text-navy"
      : bg === "navy2"
      ? "bg-navy2"
      : bg === "radial"
      ? "h-grad-radial"
      : "bg-navy";
  return (
    <section id={id} className={`w-full ${bgClass} ${className}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow mb-5">{children}</div>;
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight ${className}`}
      style={{ fontWeight: 400 }}
    >
      {children}
    </h2>
  );
}

export function Lede({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`text-lg md:text-xl text-text2 max-w-2xl leading-relaxed ${className}`}
      style={{ fontWeight: 300 }}
    >
      {children}
    </p>
  );
}

export function GoldButton({
  href,
  children,
  size = "md",
}: {
  href: string;
  children: ReactNode;
  size?: "md" | "lg";
}) {
  const padding = size === "lg" ? "px-9 py-4 text-base" : "px-7 py-3 text-sm";
  return (
    <a href={href} className={`btn-gold inline-flex items-center gap-2 rounded-md ${padding} uppercase tracking-widest font-mono`}>
      {children}
    </a>
  );
}

export function GhostButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="btn-ghost inline-flex items-center gap-2 rounded-md px-7 py-3 text-sm uppercase tracking-widest font-mono">
      {children}
    </a>
  );
}
