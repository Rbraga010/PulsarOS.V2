/* eslint-disable react/no-unescaped-entities */
import { Section, Eyebrow, H2, Lede, GoldButton, GhostButton } from "@/components/Section";
import { AgentCard, MiniSkillRow, type Agent } from "@/components/AgentCard";
import { AsciiDivider, SectionLabel, GridPattern } from "@/components/AsciiDivider";
import { TypingTerminal } from "@/components/TypingTerminal";
import {
  Terminal,
  ShieldCheck,
  Server,
  Cpu,
  Layers,
  Workflow,
  Sparkles,
  ArrowRight,
  Check,
  Plus,
  Quote,
  Code2,
  Database,
  FileText,
  Megaphone,
  Briefcase,
  Network,
  Zap,
  Lock,
} from "lucide-react";

/* ============================================================
 * DATA
 * ========================================================== */

const HOTMART_ESSENCIAL = "https://pay.hotmart.com/PLACEHOLDER_ESSENCIAL";
const HOTMART_COMPLETO = "https://pay.hotmart.com/PLACEHOLDER_COMPLETO";

const VPS: Agent[] = [
  { slug: "caio",      name: "Caio",      role: "VP Comercial",  tagline: "Comanda o pipeline, qualifica oportunidades e cobra fechamento. Pensa em margem, não em volume.", color: "#4ADE80", initial: "C" },
  { slug: "alfredo",   name: "Alfredo",   role: "VP Marketing",  tagline: "Estratégia de conteúdo, branding e narrativa. Traduz produto em desejo sem perder a verdade.",      color: "#E04D6C", initial: "A" },
  { slug: "dalio",     name: "Dalio",     role: "VP Financeiro", tagline: "DRE viva, fluxo de caixa, unit economics. Decisões com número antes de opinião.",                   color: "#60A5FA", initial: "D" },
  { slug: "falconi",   name: "Falconi",   role: "VP Operações",  tagline: "Processo, indicador, padrão. Faz o moinho girar sem ruído.",                                         color: "#F59E0B", initial: "F" },
  { slug: "flavia",    name: "Flávia",    role: "VP Produtos",   tagline: "Visão de produto, roadmap e priorização. Conecta dor real com entrega que vende.",                   color: "#EC4899", initial: "F" },
  { slug: "simon",     name: "Simon",     role: "VP People",     tagline: "Cultura, performance e dinâmica do time. Garante que cada agente esteja afiado e alinhado.",         color: "#A78BFA", initial: "S" },
];

const HEADS = [
  { name: "Keila",    role: "Heads de Carrossel · arte + copy + ritmo editorial", color: "#EC4899" },
  { name: "Pedro",    role: "Heads de Tráfego pago · Meta + Google + criativos", color: "#60A5FA" },
  { name: "Maurício", role: "Heads de Design · sistema visual, identidade, exec", color: "#A78BFA" },
  { name: "Dani",     role: "Heads de SDR · qualifica lead com fricção controlada", color: "#4ADE80" },
  { name: "Flávio",   role: "Heads de Prospec · enriquece base e abre conversa fria", color: "#F59E0B" },
  { name: "Rebecca",  role: "Heads de Memória · cataloga aprendizado e doutrina", color: "#E04D6C" },
];

/* ============================================================
 * PAGE
 * ========================================================== */

export default function Page() {
  return (
    <main className="bg-navy text-cream">
      <Nav />
      <Hero />
      <SectionPulse />
      <SectionDonna />
      <SectionVPs />
      <SectionTimeCompleto />
      <SectionCanais />
      <BandReafirmacao />
      <SectionCapacidades />
      <SectionCompare />
      <SectionWarRoom />
      <SectionArquitetura />
      <SectionPosseTotal />
      <SectionGuarantee />
      <SectionPricing />
      <SectionLead />
      <Footer />
    </main>
  );
}

/* ============================================================
 * NAV
 * ========================================================== */

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-navy/70 border-b border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-gold/15 border border-gold/40 flex items-center justify-center">
            <Terminal className="w-4 h-4 text-gold" />
          </div>
          <span className="font-display text-lg tracking-tight">PulsarOS</span>
          <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-text3">v2.0</span>
        </div>
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-widest font-mono text-text2">
          <a href="#pulse" className="hover:text-gold transition">pulse</a>
          <a href="#donna" className="hover:text-gold transition">donna</a>
          <a href="#vps" className="hover:text-gold transition">vps</a>
          <a href="#capacidades" className="hover:text-gold transition">capacidades</a>
          <a href="#warroom" className="hover:text-gold transition">war room</a>
          <a href="#preco" className="hover:text-gold transition">investimento</a>
        </nav>
        <GhostButton href="#cadastro">Quero entrar</GhostButton>
      </div>
    </header>
  );
}

/* ============================================================
 * 1. HERO
 * ========================================================== */

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 h-grad-radial overflow-hidden">
      <GridPattern />
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-gold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-glow" />
              <span>// pulsaros · v2.0 · maio.2026</span>
            </div>

            <h1
              className="font-display leading-[0.98] tracking-tight"
              style={{ fontSize: "clamp(42px, 5.5vw, 78px)", fontWeight: 400 }}
            >
              Não é curso.
              <br />
              Não é mentoria.
              <br />
              <span className="h-grad-gold">É a sua empresa</span>
              <br />
              em forma de IA.
            </h1>

            <p className="mt-8 text-lg md:text-xl text-text2 max-w-2xl leading-relaxed" style={{ fontWeight: 300 }}>
              Pulse, Donna, 6 VPs, 28 heads e War Room. Instalados no{" "}
              <span className="text-cream">seu próprio servidor</span>, rodando autônomo, 24 horas por dia.
              A mesma stack agêntica que <span className="text-gold">outras empresas cobram R$ 49 mil/ano</span> ·
              aqui sai por <span className="font-mono text-gold">R$ 4.997</span> · uma vez · sem refém.
            </p>

            <div className="mt-8 font-mono text-xs text-text3 flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 rounded bg-gold/10 border border-gold/30 text-gold">claude max</span>
              <span className="text-text3">+</span>
              <span className="px-2.5 py-1 rounded bg-violet2/10 border border-violet2/30" style={{ color: "#A78BFA" }}>openclaw fallback</span>
              <span className="text-text3">+</span>
              <span className="px-2.5 py-1 rounded bg-cream/5 border border-line text-text2">+800k vendas mapeadas</span>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <GoldButton href="#preco" size="lg">
                Quero instalar <ArrowRight className="w-4 h-4" />
              </GoldButton>
              <GhostButton href="#capacidades">Ver capacidades</GhostButton>
            </div>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                ["+8", "agentes principais"],
                ["+28", "heads especializadas"],
                ["24/7", "operação contínua"],
                ["7d", "para instalar"],
              ].map(([n, l]) => (
                <div key={l} className="border-l border-gold/40 pl-4">
                  <div className="font-mono text-3xl md:text-4xl font-medium h-grad-gold">{n}</div>
                  <div className="text-[10px] uppercase tracking-widest text-text3 font-mono mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Aside: terminal vivo + Pulse foto */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative">
              <div
                className="card-glass rounded-2xl overflow-hidden glow-violet relative"
                style={{ aspectRatio: "4/5", borderColor: "rgba(122,91,160,0.4)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/pulse.jpg" alt="Pulse" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 30%, rgba(11,12,31,0.92) 100%)",
                  }}
                />
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur border border-gold/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-glow" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gold">live</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-gold">// pulse · ceo virtual</div>
                  <div className="font-display text-3xl text-cream mt-1">Orquestra o time</div>
                </div>
              </div>
            </div>

            <TypingTerminal />
          </div>
        </div>
      </div>

      <div
        className="absolute right-[-20%] top-[20%] w-[680px] h-[680px] rounded-full opacity-40 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(122,91,160,0.35) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </section>
  );
}

/* ============================================================
 * 2. PULSE (Agente principal · 00)
 * ========================================================== */

function SectionPulse() {
  return (
    <Section bg="navy2" id="pulse">
      <SectionLabel num="00" label="agente.principal" />
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-3">
            ▌P U L S E▐
          </div>
          <H2>
            O <span className="h-grad-gold">orquestrador</span>.<br />
            Comanda todo o time.
          </H2>
          <Lede className="mt-6">
            Recebe a estratégia, distribui as tarefas, garante a execução. Lê todo contexto da
            operação. Memória persistente em banco vetorial. Não esquece, não perde o fio, não
            atrasa entrega.
          </Lede>
          <ul className="mt-8 space-y-3">
            {[
              "Delega para Donna, VPs ou heads conforme o caso",
              "Protocolo de 3 fases: eco em 10s · execução · entrega com evidência",
              "Memória pgvector · ~25k mensagens · busca semântica sub-50ms",
              "Tom direto · sem floreio · pensa em margem",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-text2">
                <Plus className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-7">
          <div
            className="card-glass rounded-2xl overflow-hidden glow-gold relative aspect-[4/3]"
            style={{ borderColor: "rgba(201,168,74,0.35)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/pulse.jpg" alt="Pulse · CEO virtual" className="w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, transparent 40%, rgba(11,12,31,0.85) 95%)",
              }}
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-gold">
                  // pulse · ceo virtual
                </div>
                <div className="font-display text-3xl text-cream">Orquestrador</div>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-gold">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse-glow" />
                online
              </div>
            </div>
          </div>

          <div className="mt-4 font-mono text-xs space-y-2 bg-black/60 rounded-xl p-5 border border-gold/25 backdrop-blur">
            <div className="flex items-center gap-2 pb-2 border-b border-line">
              <span className="w-2.5 h-2.5 rounded-full bg-red/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-gold/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green/70" />
              <span className="ml-2 text-text3 text-[10px] uppercase tracking-widest">
                pulse@servidor ~ live
              </span>
            </div>
            <div className="text-gold/70">[14:32:01]</div>
            <div className="text-text2">
              <span className="text-green">+</span> Rodrigo: "monta carrossel sobre IA agêntica"
            </div>
            <div className="text-text2">
              <span className="text-gold">→</span> Pulse: 👀 entendi · delegando pra Caio+Keila · 10 min
            </div>
            <div className="text-text2">
              <span className="text-violet2">↳</span> delegando: caio (estratégia) + keila (arte/copy)
            </div>
            <div className="text-text2">
              <span className="text-gold">→</span> Pulse: Pronto Chefe · carrossel entregue · 8 min ·{" "}
              <span className="text-gold underline decoration-dotted">/conteudo/calendario</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
 * 3. DONNA
 * ========================================================== */

function SectionDonna() {
  return (
    <Section bg="navy" id="donna">
      <SectionLabel num="01" label="agente.principal" color="violet" />
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-7 order-2 md:order-1">
          <div
            className="card-glass rounded-2xl overflow-hidden glow-violet relative aspect-[4/3]"
            style={{ borderColor: "rgba(122,91,160,0.45)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/donna.jpg"
              alt="Donna · secretária executiva"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center top" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, transparent 40%, rgba(11,12,31,0.85) 95%)",
              }}
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "#A78BFA" }}>
                  // donna · secretária executiva
                </div>
                <div className="font-display text-3xl text-cream">Filtro inteligente</div>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest" style={{ color: "#A78BFA" }}>
                <span className="w-2 h-2 rounded-full bg-green animate-pulse-glow" />
                online
              </div>
            </div>
          </div>

          <div className="mt-4 font-mono text-xs space-y-2 bg-black/60 rounded-xl p-5 border border-violet2/30 backdrop-blur">
            <div className="flex items-center gap-2 pb-2 border-b border-line">
              <span className="w-2.5 h-2.5 rounded-full bg-red/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-gold/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green/70" />
              <span className="ml-2 text-text3 text-[10px] uppercase tracking-widest">
                donna@servidor ~ live
              </span>
            </div>
            <div className="text-violet2/70">[09:14:22]</div>
            <div className="text-text2">
              <span className="text-green">+</span> Cliente X: "quero reunião pra falar do projeto"
            </div>
            <div className="text-text2">
              <span className="text-violet2">→</span> Donna: 👀 saquei · vejo agenda e te confirmo · 2 min
            </div>
            <div className="text-text2">
              <span className="text-violet2">→</span> Donna: Terça 14h livre · convite enviado · agenda bloqueada
            </div>
          </div>
        </div>

        <div className="md:col-span-5 order-1 md:order-2">
          <div className="font-mono text-[10px] uppercase tracking-widest mb-3" style={{ color: "#A78BFA" }}>
            ▌D O N N A▐
          </div>
          <H2>
            A <span style={{ color: "#A78BFA" }}>secretária executiva</span>.<br />
            Protege sua agenda.
          </H2>
          <Lede className="mt-6">
            Recebe contato, filtra ruído, agenda reunião, lembra prazo, cobra retorno. É a sua
            assistente de chefe · não a sua atendente.
          </Lede>
          <ul className="mt-8 space-y-3">
            {[
              "Triagem de mensagens · só sobe o que merece teu tempo",
              "Gestão de agenda · bloqueia janelas, marca, cancela, remarca",
              "Memória de contatos · sabe com quem tu já falou e quando",
              "Tom diplomático · resolve sem te puxar para o problema",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-text2">
                <Plus className="w-4 h-4 shrink-0 mt-1" style={{ color: "#A78BFA" }} />
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <AsciiDivider />
    </Section>
  );
}

/* ============================================================
 * 4. 6 VPs · equipe.principal
 * ========================================================== */

function SectionVPs() {
  return (
    <Section bg="navy2" id="vps">
      <SectionLabel num="02" label="equipe.principal // 01-06" />
      <H2 className="max-w-3xl">
        Os seis <span className="h-grad-gold">VPs</span>.<br />
        Cada um com função clara.
      </H2>
      <Lede className="mt-6">
        Cada VP tem soul, skills e tom próprio. Reportam ao Pulse, decidem dentro da sua área,
        cobram entregas dos heads. Você não gerencia 6 freelancers · você comanda 6 diretores.
      </Lede>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {VPS.map((vp) => (
          <AgentCard key={vp.slug} agent={vp} />
        ))}
      </div>
    </Section>
  );
}

/* ============================================================
 * 5. TIME COMPLETO (espelha "Não é só os sete")
 * ========================================================== */

function SectionTimeCompleto() {
  const bullets = [
    { icon: Network,   k: "+28 heads especializados",         d: "Embaixo dos VPs · cada VP gerencia o seu time. Carrossel · tráfego · SDR · prospec · memória · design." },
    { icon: Megaphone, k: "+SDRs de atendimento 24h",         d: "Respondem em segundos · qualificam em minutos · DM Instagram · TikTok · LinkedIn · site." },
    { icon: Briefcase, k: "+Plataforma de prospecção ativa",  d: "Cata lead onde ele está · Instagram · Google Meu Negócio · LinkedIn · enriquecimento automático." },
    { icon: Database,  k: "+CRM integrado e rodando",         d: "Configurado · pipeline ao vivo · webhook · automações · tracking Hotmart em tempo real." },
    { icon: Lock,      k: "+Área de membros própria",         d: "Pra teus clientes ou time interno · controle de acesso · conteúdo segmentado · sem refém de plataforma." },
  ];
  return (
    <Section bg="navy" id="time">
      <SectionLabel num="03" label="time.completo" />
      <H2 className="max-w-3xl">
        Não são só os <span className="h-grad-gold">oito</span>.
      </H2>
      <Lede className="mt-6">
        Além dos agentes principais, o PulsarOS entrega a infraestrutura inteira pronta. Tudo
        configurado, integrado e operando no seu servidor desde o primeiro dia. Um time que busca,
        qualifica, agenda e vende por você 24 horas.
      </Lede>

      <div className="mt-14 grid md:grid-cols-2 gap-5">
        {bullets.map((b) => {
          const Icon = b.icon;
          return (
            <div key={b.k} className="card-glass rounded-2xl p-6 hairline flex gap-4">
              <Icon className="w-5 h-5 text-gold shrink-0 mt-1" />
              <div>
                <div className="font-display text-xl text-cream leading-tight">{b.k}</div>
                <p className="mt-2 text-sm text-text2 leading-relaxed" style={{ fontWeight: 300 }}>
                  {b.d}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ============================================================
 * 6. CANAIS DE ATUAÇÃO
 * ========================================================== */

function SectionCanais() {
  return (
    <Section bg="navy2" id="canais">
      <SectionLabel num="04" label="canais.de.atuacao" />
      <H2 className="max-w-3xl">
        Onde a <span className="h-grad-gold">equipe atua</span>.
      </H2>
      <Lede className="mt-6">
        Prospecção ativa pra encher o topo do funil. Atendimento em escala pra converter cada lead
        que chega. Tudo integrado, tudo rastreável.
      </Lede>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {/* Prospec ativa */}
        <div className="card-glass rounded-2xl p-8 hairline">
          <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-3">
            // prospecção.ativa
          </div>
          <div className="font-display text-2xl md:text-3xl text-cream leading-tight mb-2">
            Cata o lead onde ele está
          </div>
          <p className="text-text2 leading-relaxed mb-6" style={{ fontWeight: 300 }}>
            Outbound qualificado, sem spam · enriquecimento automático antes de abrir conversa.
          </p>
          <div className="space-y-3">
            {[
              { c: "Instagram",          d: "DM e comentários · approach contextual" },
              { c: "Google Meu Negócio", d: "Locais qualificados por nicho + região" },
              { c: "LinkedIn",           d: "B2B · cargo + setor + tamanho de empresa" },
            ].map((x) => (
              <div key={x.c} className="flex items-start gap-3 py-2 border-b border-line">
                <Zap className="w-4 h-4 text-gold shrink-0 mt-1" />
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-gold">{x.c}</div>
                  <div className="text-sm text-text2">{x.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Atendimento SDR */}
        <div className="card-glass rounded-2xl p-8" style={{ borderColor: "rgba(122,91,160,0.45)" }}>
          <div className="font-mono text-[10px] uppercase tracking-widest mb-3" style={{ color: "#A78BFA" }}>
            // atendimento.sdr.24h
          </div>
          <div className="font-display text-2xl md:text-3xl text-cream leading-tight mb-2">
            Responde em segundos · qualifica em minutos
          </div>
          <p className="text-text2 leading-relaxed mb-6" style={{ fontWeight: 300 }}>
            Cada lead que chega · respondido na hora · qualificado via SPIN · agendado no calendário.
          </p>
          <div className="space-y-3">
            {[
              { c: "Instagram",      d: "DM + comentários · primeiro toque <60s" },
              { c: "TikTok",         d: "DM + bio link tracking" },
              { c: "LinkedIn",       d: "InMail + conversas existentes" },
              { c: "Site do cliente", d: "Chat embed · captura + qualificação" },
            ].map((x) => (
              <div key={x.c} className="flex items-start gap-3 py-2 border-b border-line">
                <Zap className="w-4 h-4 shrink-0 mt-1" style={{ color: "#A78BFA" }} />
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest" style={{ color: "#A78BFA" }}>{x.c}</div>
                  <div className="text-sm text-text2">{x.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
 * 7. FAIXA REAFIRMAÇÃO
 * ========================================================== */

function BandReafirmacao() {
  return (
    <section className="relative bg-navy border-y border-gold/15 overflow-hidden">
      <GridPattern />
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20 text-center relative z-10">
        <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-5">
          // Não é curso. Não é mentoria. //
        </div>
        <h3 className="font-display text-3xl md:text-5xl leading-[1.1]" style={{ fontWeight: 400 }}>
          É o time pronto, <span className="h-grad-gold">instalado no seu servidor</span>,
          <br className="hidden md:block" /> rodando 24 horas por dia.
        </h3>
      </div>
    </section>
  );
}

/* ============================================================
 * 8. CAPACIDADES DO TIME (a maior · 6 subseções)
 * ========================================================== */

function SectionCapacidades() {
  const groups = [
    {
      num: "01",
      icon: Database,
      title: "Memória infinita",
      sub: "diferencial.tecnico",
      bullets: [
        "Agentes que nunca esquecem, nunca alucinam entre sessões",
        "Banco vetorial pgvector · ~25 mil mensagens preservadas por agente",
        "Busca semântica em sub-50ms · contexto recuperado instantâneo",
        "Sessões persistem para sempre · com índice por data, tópico e pessoa",
      ],
    },
    {
      num: "02",
      icon: Code2,
      title: "Sites e Páginas",
      sub: "frontend.entregaveis",
      bullets: [
        "Landing page de venda em qualquer estilo (terminal · editorial · e-commerce)",
        "Site institucional completo · multi-página · SEO básico",
        "Página de obrigado pós-compra (Hotmart · Eduzz · Kiwify)",
        "Página de captura com formulário direto no CRM",
        "Quiz de qualificação com agendamento automático",
        "Dashboard analytics em tempo real",
      ],
    },
    {
      num: "03",
      icon: FileText,
      title: "Documentos Comerciais",
      sub: "docs.entregaveis",
      bullets: [
        "Proposta comercial em HTML interativo (não é PDF chato)",
        "Plano de negócio personalizado",
        "Apostila navegável (livro digital web)",
        "Slides de apresentação animados",
        "Roteiros de aula completos",
      ],
    },
    {
      num: "04",
      icon: Megaphone,
      title: "Conteúdo pra Redes",
      sub: "conteudo.entregaveis",
      bullets: [
        "Carrossel Instagram em imagens (anime ultra realista)",
        "Carrossel em vídeo motion animado",
        "Análise BMAD do Instagram (diagnóstico + plano 30 dias)",
        "Roteiros de Reels e VSL",
        "Copy publicitária (anúncios Meta · headlines · hooks)",
        "Tradução e adaptação de carrossel internacional",
        "Edição de vídeo (em breve)",
      ],
    },
    {
      num: "05",
      icon: Briefcase,
      title: "Operação Comercial",
      sub: "comercial.entregaveis",
      bullets: [
        "Atendimento SDR 24h via DM (Instagram · TikTok · LinkedIn · site)",
        "Prospecção ativa (Instagram · Google Meu Negócio · LinkedIn)",
        "Qualificação de lead via SPIN selling",
        "Agendamento automático em calendário",
        "Follow-up programado (15min · 18h · reativação)",
        "Gerenciamento do CRM · contatos · tags · pipelines · automações",
        "Tracking de vendas Hotmart em tempo real",
        "Webhook integration com qualquer plataforma",
      ],
    },
    {
      num: "06",
      icon: Server,
      title: "Infraestrutura",
      sub: "infra.entregaveis",
      bullets: [
        "Setup completo de servidor (VPS Hostinger · Hetzner · DO) com tudo configurado",
        "Domínio + DNS (Cloudflare) + SSL automático",
        "Deploy automático GitHub para Vercel ou Cloudflare Pages",
        "Backup e versionamento de tudo",
        "Monitoramento e logs em tempo real",
      ],
    },
  ];

  return (
    <Section bg="navy" id="capacidades">
      <SectionLabel num="05" label="capacidades.do.time" />
      <H2 className="max-w-3xl">
        O que esse time <span className="h-grad-gold">sabe fazer</span>.
      </H2>
      <Lede className="mt-6">
        Repertório real, baseado em centenas de entregas dos últimos meses. Tudo isso vai pra
        dentro do seu servidor no dia um · você só precisa pedir.
      </Lede>

      <div className="mt-16 space-y-6">
        {groups.map((g) => {
          const Icon = g.icon;
          return (
            <div key={g.num} className="card-glass rounded-2xl p-8 hairline">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-text3">
                        // {g.sub}
                      </div>
                      <div className="font-mono text-xs text-gold">{g.num}</div>
                    </div>
                  </div>
                  <div className="font-display text-2xl md:text-3xl text-cream leading-tight">
                    {g.title}
                  </div>
                </div>
                <div className="md:col-span-8">
                  <ul className="space-y-2.5">
                    {g.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-text2">
                        <Plus className="w-3.5 h-3.5 text-gold shrink-0 mt-1.5" />
                        <span className="leading-relaxed text-sm md:text-base">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ============================================================
 * 9. COMPARAÇÃO
 * ========================================================== */

function SectionCompare() {
  const rows = [
    ["Modelo de entrega",       "Setup + agentes operados pela consultoria · você é cliente",  "Self-install · você opera no SEU servidor"],
    ["Investimento ano 1",      "R$ 25.000 setup + R$ 2.000/mês = R$ 49.000",                   "R$ 4.997 one-time (ou R$ 9.997 com assistência)"],
    ["Posse da infraestrutura", "Servidor do fornecedor · acesso por painel proprietário",      "VPS sua · repositório seu · zero refém"],
    ["Customização",            "Padronizada para o produto fechado da consultoria",            "Adaptável ao seu nicho · você edita o cérebro"],
    ["Tempo até operar",        "60-90 dias com onboarding assistido",                          "10 aulas + war room pronto · ~7 dias DIY"],
    ["Suporte",                 "Equipe terceirizada · embutido na mensalidade vitalícia",      "Comunidade + Rodrigo (plano Completo)"],
  ];

  return (
    <Section bg="navy2" id="compare">
      <SectionLabel num="06" label="outras.empresas.vs.pulsaros" />
      <H2 className="max-w-3xl">
        Outras empresas <span className="text-text3">vs</span>{" "}
        <span className="h-grad-gold">PulsarOS</span>
      </H2>
      <Lede className="mt-6">
        Consultorias agênticas sérias estão cobrando R$ 25 mil de setup + R$ 2 mil por mês · te
        entregam o sistema operado, dentro do servidor delas. PulsarOS pega a mesma stack agêntica,
        abre o código, te ensina a operar e te entrega a posse total · por uma fração do preço ·
        sem mensalidade.
      </Lede>

      <div className="mt-12 card-glass rounded-2xl overflow-hidden">
        <div className="grid grid-cols-12 px-6 py-4 border-b border-line bg-navy/50">
          <div className="col-span-4 font-mono text-[10px] uppercase tracking-widest text-text3">// critério</div>
          <div className="col-span-4 font-mono text-[10px] uppercase tracking-widest text-text3">// consultorias agênticas</div>
          <div className="col-span-4 font-mono text-[10px] uppercase tracking-widest" style={{ color: "#C9A84A" }}>// pulsaros</div>
        </div>
        {rows.map(([k, a, b], i) => (
          <div key={k} className={`grid grid-cols-12 px-6 py-5 ${i % 2 === 1 ? "bg-white/[0.015]" : ""}`}>
            <div className="col-span-4 text-sm md:text-base font-medium text-cream">{k}</div>
            <div className="col-span-4 text-sm text-text2 pr-4">{a}</div>
            <div className="col-span-4 text-sm text-cream pr-4 border-l border-gold/20 pl-4">{b}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================
 * 10. WAR ROOM
 * ========================================================== */

function SectionWarRoom() {
  const tiles = [
    "DRE viva · fórmulas editáveis",
    "Pipeline comercial · funil em tempo real",
    "Cérebro · MEMORY.md por agente, edição direta",
    "Activity feed · cada decisão dos agentes logada",
    "DNA do dono · doutrina, voz, regras invioláveis",
    "Console · você manda comando direto pelo navegador",
  ];
  return (
    <Section bg="navy" id="warroom">
      <SectionLabel num="07" label="war.room" />
      <H2 className="max-w-4xl">
        War Room ·<br />
        <span className="h-grad-gold">o cockpit do dono.</span>
      </H2>
      <Lede className="mt-6">
        Uma única interface para ver o time operando, ler o cérebro, editar a doutrina, acompanhar
        números. Não é dashboard de vaidade · é a sala onde decisões acontecem.
      </Lede>

      <div className="mt-14 card-glass rounded-2xl overflow-hidden glow-violet">
        <div className="px-5 py-3 border-b border-line bg-navy/60 flex items-center gap-2 font-mono text-xs text-text3">
          <span className="w-2.5 h-2.5 rounded-full bg-red/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-gold/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green/70" />
          <span className="ml-3">warroom.tuaempresa.com.br</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-line">
          {tiles.map((t, i) => (
            <div key={i} className="bg-navy p-6 min-h-[180px] flex flex-col justify-between">
              <div className="font-mono text-[10px] uppercase tracking-widest text-gold">
                tela {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display text-lg leading-tight mt-3">{t}</div>
              <div className="mt-4 h-1 w-12 bg-gold/60 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        <div className="card-glass rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse-glow" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold">activity · live</span>
            </div>
            <span className="text-text3 text-[10px] font-mono">refresh 30s</span>
          </div>
          <div className="font-mono text-[10px] space-y-1.5 leading-snug">
            <div><span className="text-gold/60">14:31</span> <span className="text-gold">PULSE</span> <span className="text-text2">delegou carrossel para Caio</span></div>
            <div><span className="text-gold/60">14:30</span> <span className="text-violet2">DONNA</span> <span className="text-text2">filtrou 12 emails · subiu 2</span></div>
            <div><span className="text-gold/60">14:28</span> <span style={{color:'#4ADE80'}}>CAIO</span> <span className="text-text2">qualificou lead · score 87</span></div>
            <div><span className="text-gold/60">14:25</span> <span style={{color:'#E04D6C'}}>ALFREDO</span> <span className="text-text2">aprovou copy do anúncio Meta</span></div>
            <div><span className="text-gold/60">14:22</span> <span style={{color:'#F59E0B'}}>FALCONI</span> <span className="text-text2">flag em SLA · ticket 4421</span></div>
            <div><span className="text-gold/60">14:20</span> <span style={{color:'#60A5FA'}}>DALIO</span> <span className="text-text2">fechou DRE · margem 31%</span></div>
            <div><span className="text-gold/60">14:18</span> <span style={{color:'#EC4899'}}>KEILA</span> <span className="text-text2">subiu carrossel #142</span></div>
          </div>
        </div>

        <div className="card-glass rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold">dre · maio/2026</span>
            </div>
            <span className="text-green text-[10px] font-mono">+18%</span>
          </div>
          <div className="font-mono text-[11px] space-y-1.5">
            <Row k="Receita bruta" v="R$ 487.220" tone="text-cream" />
            <Row k="(-) Impostos" v="R$ -34.105" tone="text-text2" />
            <Row k="(-) CMV" v="R$ -98.440" tone="text-text2" />
            <Row k="(=) Margem bruta" v="R$ 354.675" tone="text-gold" />
            <div className="border-t border-line my-1" />
            <Row k="(-) Trafego pago" v="R$ -72.800" tone="text-text2" />
            <Row k="(-) Time" v="R$ -128.500" tone="text-text2" />
            <Row k="(-) Infra" v="R$ -8.200" tone="text-text2" />
            <div className="border-t border-line my-1" />
            <Row k="(=) Lucro líquido" v="R$ 145.175" tone="text-green" bold />
          </div>
        </div>

        <div className="card-glass rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: "#A78BFA" }} />
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "#A78BFA" }}>cérebro · skills</span>
            </div>
            <span className="text-text3 text-[10px] font-mono">28 ativas</span>
          </div>
          <div className="font-mono text-[10px] space-y-1.5">
            {[
              { t: "criativo-pulsarh", desc: "carrossel · OBSIDIAN", c: "#EC4899" },
              { t: "newsjacking",      desc: "haypo em 30 min",       c: "#F59E0B" },
              { t: "sdr-prospec",      desc: "outbound qualificado",   c: "#4ADE80" },
              { t: "dre-vivo",         desc: "fórmulas + alerta",      c: "#60A5FA" },
              { t: "doutrina-dna",     desc: "soul + voice + regras",  c: "#C9A84A" },
              { t: "rebecca-memo",     desc: "índice + busca",          c: "#A78BFA" },
              { t: "war-room-deploy",  desc: "atalho ssh + pm2",       c: "#E04D6C" },
            ].map((s) => (
              <div key={s.t} className="flex items-center gap-2">
                <span style={{ color: s.c }}>●</span>
                <span className="text-text2 w-28 shrink-0">{s.t}</span>
                <span className="text-text3 truncate">{s.desc}</span>
              </div>
            ))}
            <div className="text-text3 pt-1">… + 21 outras</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Row({ k, v, tone, bold }: { k: string; v: string; tone: string; bold?: boolean }) {
  return (
    <div className={`flex items-center justify-between ${bold ? "font-semibold" : ""}`}>
      <span className="text-text2">{k}</span>
      <span className={tone}>{v}</span>
    </div>
  );
}

/* ============================================================
 * 11. ARQUITETURA DUAL
 * ========================================================== */

function SectionArquitetura() {
  return (
    <Section bg="navy2" id="arquitetura">
      <SectionLabel num="08" label="arquitetura.entrega" />
      <H2 className="max-w-3xl">
        Como você recebe o <span className="h-grad-gold">time</span>.
      </H2>
      <Lede className="mt-6">
        Você não fica refém de plataforma de ninguém. A gente entrega duas estruturas paralelas pra
        você operar. A oficial roda em Claude. A de contingência entra automaticamente caso a
        oficial pare. As duas no seu servidor.
      </Lede>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {/* Oficial · Claude */}
        <div className="card-glass rounded-2xl p-8" style={{ borderColor: "rgba(201,168,74,0.4)" }}>
          <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-4">
            [ estrutura oficial ]
          </div>
          <div className="flex items-baseline gap-3 mb-3">
            <span className="font-mono text-2xl text-gold">[C]</span>
            <div className="font-display text-3xl md:text-4xl text-cream leading-tight">
              Claude Code
            </div>
          </div>
          <div className="font-mono text-xs text-text3 mb-5">+ assinatura Claude Max</div>
          <p className="text-text2 leading-relaxed" style={{ fontWeight: 300 }}>
            É a estrutura principal. Roda 24/7 no seu servidor com a inteligência completa do
            Claude Sonnet/Opus. É essa que opera no dia a dia · 95% do tempo.
          </p>
          <div className="mt-6 font-mono text-[10px] text-text3 space-y-1">
            <div>$ status · <span className="text-green">operational ●</span></div>
            <div>$ uptime · <span className="text-gold">99.8%</span></div>
          </div>
        </div>

        {/* Contingência · OpenClaw */}
        <div className="card-glass rounded-2xl p-8" style={{ borderColor: "rgba(122,91,160,0.45)" }}>
          <div className="font-mono text-[10px] uppercase tracking-widest mb-4" style={{ color: "#A78BFA" }}>
            [ estrutura de contingência ]
          </div>
          <div className="flex items-baseline gap-3 mb-3">
            <span className="font-mono text-2xl" style={{ color: "#A78BFA" }}>{`{<>}`}</span>
            <div className="font-display text-3xl md:text-4xl text-cream leading-tight">
              OpenClaw
            </div>
          </div>
          <div className="font-mono text-xs text-text3 mb-5">+ assinatura OpenAI ou Z.AI GLM</div>
          <p className="text-text2 leading-relaxed" style={{ fontWeight: 300 }}>
            Backup automático. Se a oficial parar por qualquer motivo (atualização, instabilidade,
            manutenção), essa entra no lugar e o time não para de produzir.
          </p>
          <div className="mt-6 font-mono text-[10px] text-text3 space-y-1">
            <div>$ status · <span style={{ color: "#A78BFA" }}>standby ●</span></div>
            <div>$ failover · <span className="text-gold">&lt; 30s</span></div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
 * 12. POSSE TOTAL (6 bullets)
 * ========================================================== */

function SectionPosseTotal() {
  const bullets = [
    "Tudo roda autônomo no seu servidor. Não fica dependendo de nuvem nossa nem de terceiros.",
    "Você é o dono da operação. Sem refém de licença, sem trava, sem dependência de plataforma alheia.",
    "Ninguém consegue tirar isso de você nem travar a sua operação. Está rodando na sua máquina.",
    "A instalação completa leva até 7 dias. A gente cuida de tudo, setup, testes, ajustes finos por canal.",
    "Os agentes vão prontos pra operar · com instruções claras de como você pede cada coisa.",
    "Se eu sumir amanhã, sua operação continua. Migra de cloud, fecha tudo, edita o que quiser.",
  ];
  return (
    <Section bg="navy" id="posse">
      <SectionLabel num="09" label="posse.total" />
      <H2 className="max-w-3xl">
        Depois de instalado, <span className="h-grad-gold">é seu</span>.
      </H2>
      <Lede className="mt-6">
        PulsarOS não é SaaS. Você compra, instala na sua VPS, edita o cérebro, controla o acesso.
      </Lede>

      <div className="mt-14 grid md:grid-cols-2 gap-x-10 gap-y-5">
        {bullets.map((b, i) => (
          <div key={b} className="flex gap-4 items-start py-3 border-b border-line">
            <span className="font-mono text-xs text-gold/60 mt-0.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-text2 leading-relaxed" style={{ fontWeight: 300 }}>{b}</p>
          </div>
        ))}
      </div>

      <AsciiDivider />
    </Section>
  );
}

/* ============================================================
 * 13. GARANTIA
 * ========================================================== */

function SectionGuarantee() {
  return (
    <Section bg="navy2" id="garantia">
      <div className="card-glass rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto glow-gold">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/15 border border-gold/40 mb-8">
          <ShieldCheck className="w-9 h-9 text-gold" />
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-3">
          // garantia.7d
        </div>
        <H2>
          Sem fit? <span className="h-grad-gold">Devolvo 100%.</span>
        </H2>
        <p className="mt-6 text-lg text-text2 leading-relaxed" style={{ fontWeight: 300 }}>
          Você entra, assiste as aulas, monta seu primeiro agente, testa o War Room. Se em 7 dias
          não fizer sentido pra tua operação, escreve um email, devolvo o dinheiro · sem
          contrapergunta. O risco é meu.
        </p>
      </div>
    </Section>
  );
}

/* ============================================================
 * 14. PRICING · 2 PLANOS
 * ========================================================== */

function SectionPricing() {
  return (
    <Section bg="navy" id="preco">
      <SectionLabel num="10" label="investimento" />
      <div className="text-center max-w-3xl mx-auto">
        <H2>
          Self-install ou <span className="h-grad-gold">com Rodrigo do teu lado.</span>
        </H2>
        <p className="mt-6 text-lg text-text2" style={{ fontWeight: 300 }}>
          Sem mensalidade · sem refém · sem teto. Você paga uma vez, instala, opera.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* ESSENCIAL */}
        <div className="card-glass rounded-3xl p-8 md:p-10 hairline relative">
          <div className="font-mono text-[10px] uppercase tracking-widest text-gold">// plano.essencial</div>
          <div className="mt-2 font-display text-3xl">Self-install</div>
          <p className="text-text2 text-sm mt-2" style={{ fontWeight: 300 }}>
            Tu instala. Tu opera. Tu manda.
          </p>

          <div className="mt-7 flex items-end gap-2">
            <div className="font-display text-5xl md:text-6xl h-grad-gold leading-none">R$ 4.997</div>
            <div className="text-text3 text-sm mb-1">à vista · ou 12x R$ 497</div>
          </div>

          <ul className="mt-8 space-y-3">
            {[
              "10 aulas · curso completo Imersão Gestor de IA",
              "8 agentes pré-configurados (Pulse · Donna · 6 VPs)",
              "28 heads · skills prontas",
              "War Room completo · 8 telas",
              "Comunidade privada · suporte entre membros",
              "12 meses de updates gratuitos",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-text2">
                <Plus className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span className="leading-relaxed text-sm">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <GoldButton href={HOTMART_ESSENCIAL} size="lg">
              Comprar ESSENCIAL <ArrowRight className="w-4 h-4" />
            </GoldButton>
          </div>
        </div>

        {/* COMPLETO */}
        <div
          className="rounded-3xl p-8 md:p-10 relative overflow-hidden"
          style={{
            background: "linear-gradient(180deg, rgba(201,168,74,0.10), rgba(201,168,74,0.02))",
            border: "1px solid rgba(201,168,74,0.55)",
            boxShadow: "0 20px 60px rgba(201,168,74,0.18)",
          }}
        >
          <div
            className="absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-mono font-semibold"
            style={{
              background: "rgba(201,168,74,0.2)",
              color: "#C9A84A",
              border: "1px solid rgba(201,168,74,0.5)",
            }}
          >
            ★ recomendado
          </div>

          <div className="font-mono text-[10px] uppercase tracking-widest text-gold">// plano.completo</div>
          <div className="mt-2 font-display text-3xl">Com assistência</div>
          <p className="text-text2 text-sm mt-2" style={{ fontWeight: 300 }}>
            Rodrigo instala junto · 1 sessão de 4h.
          </p>

          <div className="mt-7 flex items-end gap-2">
            <div className="font-display text-5xl md:text-6xl h-grad-gold leading-none">R$ 9.997</div>
            <div className="text-text3 text-sm mb-1">à vista · ou 12x R$ 997</div>
          </div>

          <ul className="mt-8 space-y-3">
            {[
              "Tudo do ESSENCIAL +",
              "1 sessão Rodrigo · 4h instalação assistida",
              "Setup VPS feito (VPS por conta · ~R$ 80/mês)",
              "Customização dos agentes pro seu nicho",
              "30 dias de suporte direto via Telegram",
              "Acesso vitalício a novas skills",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-cream">
                <Plus className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span className="leading-relaxed text-sm">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <GoldButton href={HOTMART_COMPLETO} size="lg">
              Comprar COMPLETO <ArrowRight className="w-4 h-4" />
            </GoldButton>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-text3 text-sm max-w-2xl mx-auto">
        Para referência: consultorias agênticas equivalentes custam <span className="text-cream">R$ 49.000/ano</span>{" "}
        (setup + mensalidade). O plano COMPLETO aqui sai por <span className="text-gold">20% disso</span> · uma única vez ·
        com posse total.
      </p>
    </Section>
  );
}

/* ============================================================
 * 15. LEAD FORM
 * ========================================================== */

function SectionLead() {
  return (
    <Section bg="radial" id="cadastro">
      <SectionLabel num="11" label="cadastro" />
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <H2>
            Pronto pra <span className="h-grad-gold">instalar?</span>
          </H2>
          <Lede className="mt-6">
            Deixa seus dados e a gente te manda link de pagamento + acesso. Cada turma tem teto
            (suporte direto não escala infinito).
          </Lede>

          <div className="mt-8 flex items-start gap-3">
            <Quote className="w-5 h-5 text-gold shrink-0 mt-1" />
            <p className="text-text2 italic max-w-md" style={{ fontWeight: 300 }}>
              "Em 30 dias, demiti minha agência de social. Pulse + Keila fazem com mais consistência
              e zero retrabalho."
              <span className="block mt-2 not-italic text-xs uppercase tracking-widest text-gold font-mono">
                · Beta tester · ago/2025
              </span>
            </p>
          </div>
        </div>

        <div className="md:col-span-7">
          <form
            className="card-glass rounded-2xl p-8"
            action="https://formspree.io/PLACEHOLDER"
            method="POST"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nome completo" name="nome" required placeholder="Informe seu nome completo." />
              <Field label="Email" name="email" type="email" required placeholder="Informe um email válido." />
              <Field label="WhatsApp" name="whatsapp" required placeholder="DDD + número." />
              <Field label="Empresa" name="empresa" />
              <Field label="Setor" name="setor" placeholder="ex: agência, ecommerce, consultoria" />
              <SelectField
                label="Faturamento mensal"
                name="faturamento"
                options={[
                  "Até R$ 50 mil",
                  "R$ 50 mil a R$ 200 mil",
                  "R$ 200 mil a R$ 500 mil",
                  "R$ 500 mil a R$ 1 milhão",
                  "Acima de R$ 1 milhão",
                ]}
              />
              <SelectField
                label="Tamanho do time"
                name="tamanho"
                options={["Solo", "2–5", "6–20", "20+"]}
              />
              <SelectField
                label="Plano de interesse"
                name="plano"
                options={["ESSENCIAL · R$ 4.997", "COMPLETO · R$ 9.997", "Tenho dúvidas"]}
              />
            </div>

            <label className="block mt-5 text-text2 text-sm">
              <span className="block mb-2 font-mono text-[10px] uppercase tracking-widest text-text3">
                Mensagem (opcional)
              </span>
              <textarea
                name="mensagem"
                rows={3}
                className="w-full bg-black/30 border border-line rounded-md px-4 py-3 text-cream focus:outline-none focus:border-gold/60 transition"
                placeholder="Conta um pouco do seu cenário..."
              />
            </label>

            <button
              type="submit"
              className="btn-gold mt-6 w-full rounded-md py-4 uppercase tracking-widest font-mono text-sm"
            >
              Quero entrar →
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <label className="block text-text2 text-sm">
      <span className="block mb-2 font-mono text-[10px] uppercase tracking-widest text-text3">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-black/30 border border-line rounded-md px-4 py-3 text-cream focus:outline-none focus:border-gold/60 transition"
      />
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block text-text2 text-sm">
      <span className="block mb-2 font-mono text-[10px] uppercase tracking-widest text-text3">{label}</span>
      <select
        name={name}
        className="w-full bg-black/30 border border-line rounded-md px-4 py-3 text-cream focus:outline-none focus:border-gold/60 transition"
        defaultValue=""
      >
        <option value="" disabled>Selecione...</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-navy">{o}</option>
        ))}
      </select>
    </label>
  );
}

/* ============================================================
 * FOOTER · 3 cards tech
 * ========================================================== */

function Footer() {
  return (
    <footer className="border-t border-line bg-navy">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { sym: "[C]",   name: "Claude",       desc: "cérebro estratégico",     c: "#C9A84A" },
            { sym: "{<>}",  name: "OpenClaw",     desc: "infraestrutura fallback", c: "#A78BFA" },
            { sym: "$_",    name: "PulsarH.ai",   desc: "tua operação · teu time", c: "#4ADE80" },
          ].map((t) => (
            <div key={t.name} className="card-glass rounded-xl p-5 text-center">
              <div className="font-mono text-2xl mb-2" style={{ color: t.c }}>{t.sym}</div>
              <div className="font-display text-lg text-cream">{t.name}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-text3 mt-1">{t.desc}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between pt-8 border-t border-line">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-7 h-7 rounded-md bg-gold/15 border border-gold/40 flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5 text-gold" />
              </div>
              <span className="font-display text-base">PulsarOS</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-text3">v2.0</span>
            </div>
            <p className="text-text3 text-sm max-w-md">
              © 2026 Rodrigo Braga · uma empresa em forma de IA · instalada no seu servidor · sem refém.
            </p>
          </div>
          <div className="flex items-center gap-6 text-text3 text-xs uppercase tracking-widest font-mono">
            <a href="mailto:contato@pulsaros.com.br" className="hover:text-gold transition">contato</a>
            <a href="/termos" className="hover:text-gold transition">termos</a>
            <a href="/privacidade" className="hover:text-gold transition">privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
