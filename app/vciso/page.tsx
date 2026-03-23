"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Brain, Shield, Clock, BarChart2, Users } from "lucide-react"
import Link from "next/link"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"

const nav = [
  { label: "Inteligência de Ameaças", href: "/" },
  { label: "Threat Intelligence", href: "/threat-intelligence" },
  { label: "Risk Assessment", href: "/risk-assessment" },
  { label: "Security Benchmark", href: "/security-benchmark" },
  { label: "Emulação de Ataques", href: "/emulacao-de-ataques" },
  { label: "Serviços Gerenciados", href: "/servicos-gerenciados" },
  { label: "Simulação de Crise", href: "/simulacao-de-crise" },
  { label: "Resposta de Incidentes", href: "/resposta-de-incidentes" },
  { label: "MDR", href: "/mdr" },
  { label: "vCISO", href: "/vciso" },
  { label: "MSP", href: "/msp" },
  { label: "Avaliação de Soluções", href: "/avaliacao-de-solucoes" },
]

const chartData = [
  { func: "Operações de Segurança", pct: 100 },
  { func: "Gestão de Vulnerabilidades", pct: 100 },
  { func: "Resposta a Incidentes", pct: 90 },
  { func: "Governança / Compliance", pct: 80 },
  { func: "Estratégia Técnica", pct: 80 },
  { func: "Ética / Social / Cultura", pct: 30 },
  { func: "Política Interna", pct: 25 },
  { func: "Responsabilidade Legal", pct: 2 },
]

const beneficios = [
  { icon: BarChart2, title: "Redução de 70–85% nos custos", desc: "Em comparação a um CISO CLT, sem encargos, treinamentos ou turn-over." },
  { icon: Shield, title: "Maturidade imediata", desc: "Políticas e controles baseados em NIST, ISO 27001, CIS e LGPD desde o dia 1." },
  { icon: Clock, title: "Operação 24/7 com IA", desc: "Monitoramento, detecção, gestão de vulnerabilidades e relatórios sem pausa." },
  { icon: Brain, title: "IA + Humano", desc: "Velocidade e precisão da IA com inteligência contextual, ética e estratégica do CISO humano." },
  { icon: Users, title: "Decisões embasadas", desc: "A IA analisa cenários, simula riscos e fornece recomendações técnicas de alto nível." },
  { icon: CheckCircle, title: "Conformidade legal", desc: "Melhoria significativa na conformidade com LGPD e ISO 27001 desde os primeiros meses." },
]

const entregaveis = [
  {
    cat: "Governança e Estratégia",
    items: [
      "Política de Segurança revisada ou construída do zero",
      "Plano Diretor de Segurança (PDS / Roadmap)",
      "Modelos de KPIs e KRIs de segurança",
      "Assessment de maturidade baseado em frameworks globais",
    ],
  },
  {
    cat: "Gestão de Riscos e Compliance",
    items: [
      "Avaliação de riscos contínua",
      "Gap Analysis (ISO / NIST / LGPD)",
      "Preparação para auditorias internas e externas",
    ],
  },
  {
    cat: "Operações e Monitoramento",
    items: [
      "Gestão de vulnerabilidades 24/7",
      "Regras, alertas e dashboards integrados (SIEM/SOAR)",
      "Threat hunting contínuo",
    ],
  },
  {
    cat: "Resposta a Incidentes",
    items: [
      "Plano de resposta e cadeia de acionamento",
      "Suporte técnico imediato por IA",
      "Gestão humana de crise quando necessário",
    ],
  },
]

export default function VCISO() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <header className="border-b border-white/10 bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <nav className="flex items-center justify-center gap-5 flex-wrap">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === "/vciso"
                    ? "text-white font-medium border-b-2 border-primary pb-0.5 text-sm"
                    : "text-text hover:text-white transition-colors font-medium text-sm"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero — fundo com grid de pontos, texto esquerda + card direita */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-5 py-2">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  vCISO Inteligente
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-white text-balance">
                O CISO que sua empresa precisa —{" "}
                <span className="text-primary">sem o custo de um executivo full-time.</span>
              </h1>
              <p className="mb-8 text-lg text-text leading-relaxed text-pretty">
                Um serviço que combina um <span className="text-white font-semibold">CISO Virtual humano</span> com uma{" "}
                <span className="text-white font-semibold">IA especializada em segurança</span>, capaz de executar até{" "}
                <span className="text-primary font-bold">90% das tarefas técnicas e operacionais</span> de um CISO
                tradicional — com muito mais velocidade, precisão e escala.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-base px-8 py-6 h-auto">
                  <a href="#cta-final">QUERO O vCISO BUNKER</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-base px-8 py-6 h-auto">
                  <a href="#grafico">VER COMPARATIVO</a>
                </Button>
              </div>
            </div>

            {/* Card destaque */}
            <Card className="bg-[#0a0a0a] border border-primary/30">
              <CardContent className="p-8">
                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Proposta de Valor</p>
                <p className="text-2xl font-bold text-white leading-snug mb-8 text-pretty">
                  "A sua empresa recebe nível de segurança corporativa de grandes organizações — por uma fração do
                  custo, com mais eficiência, automação e capacidade analítica."
                </p>
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary">80–90%</p>
                    <p className="text-text text-sm mt-1">funções automatizadas pela IA</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary">70–85%</p>
                    <p className="text-text text-sm mt-1">de redução de custos vs CISO CLT</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gráfico IA em funções CISO */}
      <section id="grafico" className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-3xl font-bold text-heading md:text-4xl text-balance">
            Capacidade de Substituição por IA em Funções de CISO
          </h2>
          <p className="mb-12 text-text text-lg">
            A IA assume as tarefas operacionais — o CISO humano foca no que realmente exige julgamento estratégico.
          </p>
          <div className="border border-white/10 bg-background p-6 md:p-10">
            <ResponsiveContainer width="100%" height={380}>
              <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 80 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis
                  dataKey="func"
                  tick={{ fill: "#A7A6A6", fontSize: 11 }}
                  angle={-35}
                  textAnchor="end"
                  interval={0}
                  tickLine={false}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                />
                <YAxis
                  tick={{ fill: "#A7A6A6", fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                  domain={[0, 100]}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip
                  cursor={{ fill: "rgba(255,255,255,0.04)" }}
                  contentStyle={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 0 }}
                  labelStyle={{ color: "#fff", fontWeight: "bold", marginBottom: 4 }}
                  formatter={(value: number) => [`${value}%`, "Substituição por IA"]}
                  labelFormatter={(label) => label}
                />
                <Bar dataKey="pct" radius={0} maxBarSize={56}>
                  {chartData.map((entry, index) => (
                    <Cell key={index} fill={entry.pct >= 80 ? "#FF0909" : entry.pct >= 25 ? "#FF0909CC" : "#FF090966"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Benefícios — grid 3 colunas */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-3xl font-bold text-heading md:text-4xl text-balance">
            Benefícios estratégicos para o cliente
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b, i) => {
              const Icon = b.icon
              return (
                <div key={i} className="border border-white/10 p-6 hover:border-primary/40 transition-colors">
                  <div className="mb-4 h-10 w-10 flex items-center justify-center bg-primary/10 border border-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-heading mb-2">{b.title}</h3>
                  <p className="text-text text-sm leading-relaxed">{b.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Entregáveis — 2x2 grid de cards */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-3xl font-bold text-heading md:text-4xl text-balance">
            O que é entregue à empresa contratada
          </h2>
          <p className="mb-12 text-text text-lg">Cobertura completa em todas as frentes da segurança corporativa.</p>
          <div className="grid gap-6 md:grid-cols-2">
            {entregaveis.map((e, i) => (
              <div key={i} className="border border-white/10 p-8 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-8 bg-primary shrink-0" />
                  <h3 className="text-xl font-bold text-heading">{e.cat}</h3>
                </div>
                <ul className="space-y-3">
                  {e.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-text text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">BUNKER vCISO</p>
          <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-balance">
            Segurança de alto nível. Custo sob controle.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-text leading-relaxed text-pretty">
            Eleve a maturidade de segurança da sua organização com o vCISO Inteligente da BUNKER — sem contratar um
            executivo full-time, sem montar uma equipe grande, sem abrir mão de qualidade.
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-base md:text-lg px-10 py-6 h-auto">
            FALE COM UM ESPECIALISTA
          </Button>
        </div>
      </section>
    </main>
  )
}
