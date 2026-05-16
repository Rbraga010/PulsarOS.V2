# PulsarOS LP v2 · Imersão IA reposicionada

> Landing page modelada no consultorias agênticas tradicionais v2 para vender PulsarOS · não mais "curso", agora produto/instalação.
>
> **Antes:** R$ 697 (curso + bônus inflados)
> **Agora:** R$ 4.997 (ESSENCIAL) ou R$ 9.997 (COMPLETO com assistência)
> **Posicionamento:** consultorias agênticas tradicionais self-service · 10x mais barato

---

## Stack
- Next.js 14 (App Router)
- Tailwind 3 + brand Half-Light (navy · cream · gold · violet)
- Tipografia: Fraunces + Inter + JetBrains Mono + Sora
- Lucide React (ícones)
- Build: ~87 kB first load JS

## Rodar local
```bash
bun install
bun run dev          # http://localhost:3010
bun run build        # produção
```

## 11 seções
1. Hero · "Não é curso. É a sua empresa em forma de IA."
2. Comparação tabela · consultorias agênticas tradicionais vs PulsarOS
3. Pulse · CEO virtual (orquestrador)
4. Donna · secretária executiva
5. 6 VPs · Caio · Alfredo · Dalio · Falconi · Flávia · Simon
6. 28 heads especializados (amostra de 6)
7. War Room · 6 tiles do cockpit
8. Arquitetura · posse total · sem refém
9. Garantia 7 dias
10. Pricing · 2 planos (R$ 4.997 + R$ 9.997)
11. Cadastro · lead form

## Pendências antes de deploy
- [ ] URLs Hotmart reais (placeholders em `app/page.tsx`):
  - `HOTMART_ESSENCIAL` · R$ 4.997
  - `HOTMART_COMPLETO` · R$ 9.997
- [ ] Endpoint do lead form (atual: `https://formspree.io/PLACEHOLDER`)
- [ ] Avatares reais para Pulse / Donna / 6 VPs (atual: monogramas estilizados)
- [ ] Screenshots reais do War Room (atual: 6 tiles textuais)
- [ ] OG image + favicon
- [ ] Domínio definitivo (sugestão: `comprar.pulsaros.com.br` ou `lp.pulsaros.com.br`)

## Deploy
- Vercel: `vercel --prod` (após conectar repo)
- VPS: `pm2 start npm --name imersao-lp-v2 -- start` (porta 3010)
