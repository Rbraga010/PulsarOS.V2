"use client";

import { useEffect, useState } from "react";

const LINES = [
  { prompt: "$", text: "./boot --pulsaros", delay: 60 },
  { prompt: ">", text: "loading 8 agentes · 28 skills · 1 war room", delay: 25 },
  { prompt: ">", text: "memoria pgvector · 25k mensagens · sub-50ms", delay: 25 },
  { prompt: ">", text: "stack: claude max + openclaw fallback", delay: 25 },
  { prompt: "$", text: "status --all", delay: 70 },
  { prompt: "✓", text: "all systems · operational", delay: 40 },
];

export function TypingTerminal() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((s) => !s), 500);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (lineIdx >= LINES.length) {
      const restart = setTimeout(() => {
        setLineIdx(0);
        setCharIdx(0);
      }, 6000);
      return () => clearTimeout(restart);
    }
    const current = LINES[lineIdx];
    if (charIdx < current.text.length) {
      const t = setTimeout(() => setCharIdx(charIdx + 1), current.delay);
      return () => clearTimeout(t);
    }
    const next = setTimeout(() => {
      setLineIdx(lineIdx + 1);
      setCharIdx(0);
    }, 600);
    return () => clearTimeout(next);
  }, [lineIdx, charIdx]);

  return (
    <div className="font-mono text-[11px] md:text-xs leading-relaxed bg-black/85 border border-gold/30 rounded-xl p-4 backdrop-blur shadow-2xl">
      <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-line">
        <span className="w-2.5 h-2.5 rounded-full bg-red/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-gold/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green/70" />
        <span className="ml-2 text-text3 text-[10px] uppercase tracking-widest">
          pulsaros@servidor ~ live
        </span>
      </div>
      <div className="space-y-1 min-h-[140px]">
        {LINES.slice(0, lineIdx).map((l, i) => (
          <div key={i} className="flex gap-2">
            <span className={l.prompt === "✓" ? "text-green" : "text-gold/70"}>{l.prompt}</span>
            <span className={l.prompt === "✓" ? "text-green" : "text-text2"}>{l.text}</span>
          </div>
        ))}
        {lineIdx < LINES.length && (
          <div className="flex gap-2">
            <span className={LINES[lineIdx].prompt === "✓" ? "text-green" : "text-gold/70"}>
              {LINES[lineIdx].prompt}
            </span>
            <span className={LINES[lineIdx].prompt === "✓" ? "text-green" : "text-text2"}>
              {LINES[lineIdx].text.slice(0, charIdx)}
              <span
                className={`inline-block w-1.5 h-3 align-middle ${
                  showCursor ? "bg-gold" : "bg-transparent"
                }`}
              />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
