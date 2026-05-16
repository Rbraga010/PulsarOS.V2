import type { ReactNode } from "react";

export type Agent = {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  color: string;
  initial: string;
};

export function AgentCard({ agent, big = false }: { agent: Agent; big?: boolean }) {
  return (
    <div
      className="card-glass rounded-2xl p-6 md:p-7 hairline transition-all hover:border-gold/40"
      style={{ borderColor: `${agent.color}33` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center font-display text-2xl font-medium"
          style={{
            background: `linear-gradient(135deg, ${agent.color}33, ${agent.color}11)`,
            border: `1px solid ${agent.color}66`,
            color: agent.color,
          }}
        >
          {agent.initial}
        </div>
        <div>
          <div className="eyebrow" style={{ color: agent.color }}>
            {agent.role}
          </div>
          <div className={`font-display ${big ? "text-3xl" : "text-2xl"} font-medium leading-tight`}>
            {agent.name}
          </div>
        </div>
      </div>
      <p className="text-text2 leading-relaxed" style={{ fontWeight: 300 }}>
        {agent.tagline}
      </p>
    </div>
  );
}

export function MiniSkillRow({ name, role, color }: { name: string; role: string; color: string }) {
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-line">
      <div
        className="w-2 h-2 rounded-full shrink-0"
        style={{ background: color }}
      />
      <span className="font-mono text-xs uppercase tracking-widest w-20 shrink-0" style={{ color }}>
        {name}
      </span>
      <span className="text-text2 text-sm">{role}</span>
    </div>
  );
}
