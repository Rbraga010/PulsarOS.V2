/* eslint-disable react/no-unescaped-entities */
import { Section, Eyebrow, H2, Lede, GoldButton, GhostButton } from "@/components/Section";
import { AgentCard, MiniSkillRow, type Agent } from "@/components/AgentCard";
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
  X,
  Quote,
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

const TECH = [
  { icon: Cpu,     title: "Modelo",   txt: "Claude Sonnet/Opus 4.x via Anthropic API · com fallback OpenAI." },
  { icon: Server,  title: "Servidor", txt: "VPS própria (Hostinger, Hetzner, DigitalOcean). Tu escolhe e tu manda." },
  { icon: Layers,  title: "Stack",    txt: "Next.js 14 · Postgres 15 · Prisma · systemd · cron · bash scripts." },
  { icon: Workflow,title: "Hooks",    txt: "UserPromptSubmit · PostToolUse · Stop. Cérebro auto-atualiza a cada ação." },
];

/* ============================================================
 * PAGE
 * ========================================================== */

export default function Page() {
  return (
    <main className="bg-navy text-cream">
      <Nav />
      <Hero />
      <SectionCompare />
      <SectionPulse />
      <SectionDonna />
      <SectionVPs />
      <SectionHeads />
      <SectionWarRoom />
      <SectionArchitecture />
      <SectionGuarantee />
      <SectionPricing />
      <SectionLead />
      <Footer />
    </main>
  );
}

/* ============================================================
 * 0. NAV
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
        </div>
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-widest font-mono text-text2">
          <a href="#pulse" className="hover:text-gold transition">Pulse</a>
          <a href="#donna" className="hover:text-gold transition">Donna</a>
          <a href="#vps" className="hover:text-gold transition">VPs</a>
          <a href="#warroom" className="hover:text-gold transition">War Room</a>
          <a href="#preco" className="hover:text-gold transition">Investimento</a>
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
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 h-grad-radial overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <Eyebrow>PulsarOS · v2.0 · maio 2026</Eyebrow>

            <h1
              className="font-display leading-[0.98] tracking-tight"
              style={{ fontSize: "clamp(44px, 6vw, 84px)", fontWeight: 400 }}
            >
              Não é curso.
              <br />
              <span className="h-grad-gold">É a sua empresa</span>
              <br />
              em forma de IA.
            </h1>

            <p className="mt-8 text-lg md:text-xl text-text2 max-w-2xl leading-relaxed" style={{ fontWeight: 300 }}>
              Pulse, Donna e 6 VPs instalados no <span className="text-cream">seu próprio servidor</span>.
              A mesma stack agêntica que <span className="text-gold">outras empresas cobram R$ 49 mil/ano</span>
              {" · "}
              aqui sai por <span className="font-mono text-gold">R$ 4.997</span> · uma vez · sem refém.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <GoldButton href="#preco" size="lg">
                Quero instalar <ArrowRight className="w-4 h-4" />
              </GoldButton>
              <GhostButton href="#pulse">Conhecer o time</GhostButton>
            </div>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                ["8", "agentes principais"],
                ["28", "heads especializadas"],
                ["1", "War Room completo"],
                ["100%", "no seu servidor"],
              ].map(([n, l]) => (
                <div key={l} className="border-l border-gold/40 pl-4">
                  <div className="font-display text-3xl md:text-4xl font-medium h-grad-gold">{n}</div>
                  <div className="text-[10px] uppercase tracking-widest text-text3 font-mono mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Aside: Terminal mock + foto Pulse */}
          <div className="lg:col-span-5">
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
                  <div className="eyebrow">Pulse · CEO Virtual</div>
                  <div className="font-display text-3xl text-cream mt-1">Orquestra o time</div>
                </div>
              </div>

              {/* Terminal flutuante sobreposto */}
              <div className="absolute -bottom-6 -left-6 md:-left-12 w-64 hidden md:block">
                <div className="bg-black/85 border border-gold/30 rounded-xl p-3 font-mono text-[10px] backdrop-blur shadow-2xl">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-line">
                    <span className="w-2 h-2 rounded-full bg-red/70" />
                    <span className="w-2 h-2 rounded-full bg-gold/70" />
                    <span className="w-2 h-2 rounded-full bg-green/70" />
                    <span className="ml-1.5 text-text3 text-[9px] uppercase tracking-widest">pulse.live</span>
                  </div>
                  <div className="mt-2 space-y-1">
                    <div className="text-gold">$ status --all</div>
                    <div className="text-text2">8 agentes · 28 skills · ok</div>
                    <div className="text-text2">last decision · 12s atrás</div>
                    <div className="text-green">all systems · operational ●</div>
                  </div>
                </div>
              </div>
            </div>
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
 * 2. COMPARAÇÃO NÚCLEO
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
      <Eyebrow>O que o mercado entrega · o que nós entregamos</Eyebrow>
      <H2 className="max-w-3xl">
        Outras empresas <span className="text-text3">vs</span>{" "}
        <span className="h-grad-gold">PulsarOS</span>
      </H2>
      <Lede className="mt-6">
        Consultorias agênticas sérias estão cobrando R$ 25 mil de setup + R$ 2 mil por mês · te entregam
        o sistema operado, dentro do servidor delas. PulsarOS pega a mesma stack agêntica, abre o
        código, te ensina a operar e te entrega a posse total · por uma fração do preço · sem
        mensalidade.
      </Lede>

      <div className="mt-12 card-glass rounded-2xl overflow-hidden">
        <div className="grid grid-cols-12 px-6 py-4 border-b border-line bg-navy/50">
          <div className="col-span-4 eyebrow">Critério</div>
          <div className="col-span-4 eyebrow text-text3">Consultorias agênticas</div>
          <div className="col-span-4 eyebrow" style={{ color: "#C9A84A" }}>
            PulsarOS
          </div>
        </div>
        {rows.map(([k, a, b], i) => (
          <div
            key={k}
            className={`grid grid-cols-12 px-6 py-5 ${i % 2 === 1 ? "bg-white/[0.015]" : ""}`}
          >
            <div className="col-span-4 text-sm md:text-base font-medium text-cream">{k}</div>
            <div className="col-span-4 text-sm text-text2 pr-4">{a}</div>
            <div className="col-span-4 text-sm text-cream pr-4 border-l border-gold/20 pl-4">{b}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-start gap-3 text-text3 text-sm">
        <ShieldCheck className="w-4 h-4 text-gold shrink-0 mt-0.5" />
        <p className="max-w-3xl">
          Sem ataque a ninguém · o mercado de consultoria agêntica é sério e cobra justo pelo serviço
          completo. PulsarOS é a versão pra quem quer{" "}
          <span className="text-cream">posse total e fração do custo</span> · trocando equipe de
          atendimento por uma curva de aprendizado de 7 dias.
        </p>
      </div>
    </Section>
  );
}

/* ============================================================
 * 3. PULSE
 * ========================================================== */

function SectionPulse() {
  return (
    <Section bg="navy" id="pulse">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <Eyebrow>Agente #1 · orquestrador</Eyebrow>
          <H2>
            Conheça o <span className="h-grad-gold">Pulse</span>
            <br />
            seu CEO virtual.
          </H2>
          <Lede className="mt-6">
            Pulse é o cérebro central. Recebe a ordem, decide quem executa, cobra prazo, valida
            entrega e responde com evidência. Não é um chatbot · é o ponto único de comando da
            sua operação.
          </Lede>
          <ul className="mt-8 space-y-3">
            {[
              "Delega para Donna, VPs ou heads conforme o caso",
              "Protocolo de 3 fases: eco em 10s · execução · entrega com evidência",
              "Memória persistente por categoria (context · projects · sessions · feedback)",
              "Tom direto · sem floreio · pensa em margem",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-text2">
                <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-7">
          <div className="relative">
            {/* Avatar Pulse */}
            <div
              className="card-glass rounded-2xl overflow-hidden glow-gold relative aspect-[4/3]"
              style={{ borderColor: "rgba(201,168,74,0.35)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/pulse.jpg"
                alt="Pulse · CEO virtual"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(11,12,31,0.85) 95%)",
                }}
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <div className="eyebrow">Pulse · CEO virtual</div>
                  <div className="font-display text-3xl text-cream">Orquestrador</div>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-gold">
                  <span className="w-2 h-2 rounded-full bg-green animate-pulse-glow" />
                  online
                </div>
              </div>
            </div>

            {/* Terminal log flutuando */}
            <div
              className="mt-4 font-mono text-xs space-y-2 bg-black/60 rounded-xl p-5 border border-gold/25 backdrop-blur"
            >
              <div className="flex items-center gap-2 pb-2 border-b border-line">
                <span className="w-2.5 h-2.5 rounded-full bg-red/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-gold/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green/70" />
                <span className="ml-2 text-text3 text-[10px] uppercase tracking-widest">pulse @ tuaempresa ~ live</span>
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
      </div>
    </Section>
  );
}

/* ============================================================
 * 4. DONNA
 * ========================================================== */

function SectionDonna() {
  return (
    <Section bg="navy2" id="donna">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-7 order-2 md:order-1">
          <div className="relative">
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
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(11,12,31,0.85) 95%)",
                }}
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <div className="eyebrow" style={{ color: "#A78BFA" }}>
                    Donna · secretária executiva
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
                <span className="ml-2 text-text3 text-[10px] uppercase tracking-widest">donna @ tuaempresa ~ live</span>
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
        </div>

        <div className="md:col-span-5 order-1 md:order-2">
          <Eyebrow>Agente #2 · interface humana</Eyebrow>
          <H2>
            Donna ·<br />
            <span style={{ color: "#A78BFA" }}>protege sua agenda.</span>
          </H2>
          <Lede className="mt-6">
            Donna recebe contato, filtra ruído, agenda reunião, lembra prazo, cobra retorno. É a sua
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
                <Check className="w-4 h-4 shrink-0 mt-1" style={{ color: "#A78BFA" }} />
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
 * 5. 6 VPs
 * ========================================================== */

function SectionVPs() {
  return (
    <Section bg="navy" id="vps">
      <Eyebrow>Seis cadeiras na diretoria</Eyebrow>
      <H2 className="max-w-3xl">
        Sua mesa de <span className="h-grad-gold">VPs</span> ·<br />
        seis especialistas alinhados.
      </H2>
      <Lede className="mt-6">
        Cada VP tem soul, skills e tom próprio · reportam ao Pulse, decidem dentro da sua área,
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
 * 6. 28 HEADS
 * ========================================================== */

function SectionHeads() {
  return (
    <Section bg="navy2" id="heads">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Eyebrow>Embaixo dos VPs · time pronto</Eyebrow>
          <H2>
            28 heads especializados ·<br />
            <span className="h-grad-gold">a hierarquia inteira.</span>
          </H2>
          <Lede className="mt-6">
            Cada VP gerencia heads próprios. Caio comanda Dani (SDR) e Flávio (prospec). Alfredo
            comanda Keila (carrossel) e Pedro (tráfego). E assim por diante. Você não tem só seis
            caras · tem time.
          </Lede>
          <div className="mt-8 flex items-center gap-3 text-text3 text-sm">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Lista abaixo é amostra · pacote vem com os 28 ativados.</span>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="card-glass rounded-2xl p-6 md:p-8">
            <div className="eyebrow mb-4">Amostra · 6 heads</div>
            <div>
              {HEADS.map((h) => (
                <MiniSkillRow key={h.name} name={h.name} role={h.role} color={h.color} />
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-line text-text3 text-sm font-mono">
              + 22 outros heads · Rebecca · Simon-aux · Falconi-ops · Dalio-cash · Flávia-ux · etc
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
 * 7. WAR ROOM
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
      <Eyebrow>Onde tu comanda</Eyebrow>
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
              <div className="eyebrow">Tela {String(i + 1).padStart(2, "0")}</div>
              <div className="font-display text-lg leading-tight mt-3">{t}</div>
              <div className="mt-4 h-1 w-12 bg-gold/60 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Três mockups de terminal · pulso vivo */}
      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {/* Activity feed */}
        <div className="card-glass rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse-glow" />
              <span className="eyebrow">activity · live</span>
            </div>
            <span className="text-text3 text-[10px] font-mono">refresh 30s</span>
          </div>
          <div className="font-mono text-[10px] space-y-1.5 leading-snug">
            <div><span className="text-gold/60">14:31</span> <span className="text-gold">PULSE</span> <span className="text-text2">delegou cuidado de carrossel para Caio</span></div>
            <div><span className="text-gold/60">14:30</span> <span className="text-violet2">DONNA</span> <span className="text-text2">filtrou 12 emails · subiu 2</span></div>
            <div><span className="text-gold/60">14:28</span> <span style={{color:'#4ADE80'}}>CAIO</span> <span className="text-text2">qualificou lead · score 87</span></div>
            <div><span className="text-gold/60">14:25</span> <span style={{color:'#E04D6C'}}>ALFREDO</span> <span className="text-text2">aprovou copy do anúncio Meta</span></div>
            <div><span className="text-gold/60">14:22</span> <span style={{color:'#F59E0B'}}>FALCONI</span> <span className="text-text2">flag em SLA · ticket 4421</span></div>
            <div><span className="text-gold/60">14:20</span> <span style={{color:'#60A5FA'}}>DALIO</span> <span className="text-text2">fechou DRE · margem 31%</span></div>
            <div><span className="text-gold/60">14:18</span> <span style={{color:'#EC4899'}}>KEILA</span> <span className="text-text2">subiu carrossel #142</span></div>
          </div>
        </div>

        {/* DRE viva */}
        <div className="card-glass rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="eyebrow">dre · maio/2026</span>
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

        {/* Cérebro · skill registry */}
        <div className="card-glass rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: "#A78BFA" }} />
              <span className="eyebrow" style={{ color: "#A78BFA" }}>cérebro · skills</span>
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
 * 8. ARQUITETURA · POSSE TOTAL
 * ========================================================== */

function SectionArchitecture() {
  return (
    <Section bg="navy2" id="arquitetura">
      <Eyebrow>Posse total · sem refém</Eyebrow>
      <H2 className="max-w-4xl">
        Sua empresa · <span className="h-grad-gold">seu servidor</span> ·<br />
        sua doutrina.
      </H2>
      <Lede className="mt-6">
        PulsarOS não é SaaS. Você compra, instala na sua VPS, edita o cérebro, controla o acesso.
        Se eu sumir amanhã, sua operação continua. Se quiser migrar de cloud, migra. Se quiser
        fechar tudo, fecha.
      </Lede>

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {TECH.map((t) => {
          const Icon = t.icon;
          return (
            <div key={t.title} className="card-glass rounded-2xl p-6 hairline">
              <Icon className="w-5 h-5 text-gold mb-4" />
              <div className="font-display text-xl mb-2">{t.title}</div>
              <p className="text-sm text-text2 leading-relaxed" style={{ fontWeight: 300 }}>
                {t.txt}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 card-glass rounded-2xl p-8 border-gold/30" style={{ borderColor: "rgba(201,168,74,0.3)" }}>
        <div className="flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-gold shrink-0 mt-1" />
          <div>
            <div className="font-display text-2xl mb-3">Princípio inviolável</div>
            <p className="text-text2 leading-relaxed max-w-3xl" style={{ fontWeight: 300 }}>
              Você é dono do código, do banco, do servidor, do domínio, dos prompts e da memória.
              Nada fica trancado num painel proprietário. PulsarOS é uma biblioteca de agentes que
              você instala · não um serviço que você assina.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
 * 9. GARANTIA
 * ========================================================== */

function SectionGuarantee() {
  return (
    <Section bg="navy" id="garantia">
      <div className="card-glass rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto glow-gold">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/15 border border-gold/40 mb-8">
          <ShieldCheck className="w-9 h-9 text-gold" />
        </div>
        <Eyebrow>Garantia · 7 dias</Eyebrow>
        <H2 className="mt-2">
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
 * 10. PRICING · 2 PLANOS
 * ========================================================== */

function SectionPricing() {
  return (
    <Section bg="navy2" id="preco">
      <div className="text-center max-w-3xl mx-auto">
        <Eyebrow>Investimento · dois caminhos</Eyebrow>
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
          <div className="eyebrow">Plano · ESSENCIAL</div>
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
                <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
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

          <div className="eyebrow">Plano · COMPLETO</div>
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
                <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
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
 * 11. LEAD FORM · CADASTRO
 * ========================================================== */

function SectionLead() {
  return (
    <Section bg="radial" id="cadastro">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Eyebrow>Cadastro · vagas limitadas</Eyebrow>
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
              <Field label="Nome completo" name="nome" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="WhatsApp" name="whatsapp" required />
              <Field label="Empresa" name="empresa" />
              <Field label="Setor" name="setor" placeholder="ex: agência, ecommerce, consultoria" />
              <SelectField
                label="Faturamento mensal"
                name="faturamento"
                options={[
                  "Até R$ 50k",
                  "R$ 50k – R$ 200k",
                  "R$ 200k – R$ 1M",
                  "Acima de R$ 1M",
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
              <span className="block mb-2 eyebrow" style={{ color: "rgba(242,239,230,0.5)" }}>
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
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block text-text2 text-sm">
      <span className="block mb-2 eyebrow" style={{ color: "rgba(242,239,230,0.5)" }}>
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

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block text-text2 text-sm">
      <span className="block mb-2 eyebrow" style={{ color: "rgba(242,239,230,0.5)" }}>
        {label}
      </span>
      <select
        name={name}
        className="w-full bg-black/30 border border-line rounded-md px-4 py-3 text-cream focus:outline-none focus:border-gold/60 transition"
        defaultValue=""
      >
        <option value="" disabled>Selecione...</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-navy">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

/* ============================================================
 * FOOTER
 * ========================================================== */

function Footer() {
  return (
    <footer className="border-t border-line bg-navy">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-md bg-gold/15 border border-gold/40 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-gold" />
            </div>
            <span className="font-display text-lg">PulsarOS</span>
          </div>
          <p className="text-text3 text-sm max-w-md">
            Uma empresa em forma de IA · instalada no seu servidor. © 2026 · Rodrigo Braga ·
            todos os direitos reservados.
          </p>
        </div>
        <div className="flex items-center gap-6 text-text3 text-xs uppercase tracking-widest font-mono">
          <a href="mailto:contato@pulsaros.com.br" className="hover:text-gold transition">
            contato@pulsaros.com.br
          </a>
          <a href="/termos" className="hover:text-gold transition">
            termos
          </a>
          <a href="/privacidade" className="hover:text-gold transition">
            privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
