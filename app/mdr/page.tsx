import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Brain, Zap, Users, BarChart2, DollarSign, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

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
]

const beneficios = [
  {
    icon: Clock,
    title: "Monitoramento 24/7",
    desc: "Supervisão contínua dos seus endpoints, servidores, rede e ambiente em nuvem.",
  },
  {
    icon: Brain,
    title: "Detecção Inteligente AI-Driven",
    desc: "Machine learning, análise comportamental e correlação de eventos avançada.",
  },
  {
    icon: Zap,
    title: "Resposta Rápida e Ativa",
    desc: "Isolamento automático de dispositivos, bloqueio de ações maliciosas e contenção imediata.",
  },
  {
    icon: Users,
    title: "Time de Especialistas",
    desc: "Analistas experientes trabalham como extensão da sua equipe interna.",
  },
  {
    icon: BarChart2,
    title: "Visualização Clara",
    desc: "Relatórios detalhados, dashboards intuitivos e insights estratégicos para decisão.",
  },
  {
    icon: DollarSign,
    title: "Otimização de Custos",
    desc: "Reduza investimentos em SOC próprio e minimize impactos financeiros de ataques.",
  },
]

const funcionamento = [
  { num: "01", title: "Coleta Inteligente de Dados", desc: "Monitoramento contínuo de ativos, redes, servidores e nuvem." },
  { num: "02", title: "Detecção Avançada de Ameaças", desc: "Análise comportamental e Threat Intelligence global para identificar anomalias." },
  { num: "03", title: "Análise Especializada", desc: "Nosso time valida cada incidente para evitar falsos positivos e maximizar a eficácia." },
  { num: "04", title: "Resposta Imediata", desc: "Contenção ativa, isolamento de endpoints, bloqueio de ameaças e suporte guiado." },
  { num: "05", title: "Aprimoramento Constante", desc: "Atualização contínua de regras, políticas e processos conforme o ambiente evolui." },
]

const comparativo = [
  { item: "Resposta ativa e imediata", bunker: true, convencional: false },
  { item: "SOC 24x7 dedicado", bunker: true, convencional: false },
  { item: "Inteligência de ameaças global", bunker: true, convencional: false },
  { item: "Ação direta em incidentes", bunker: true, convencional: false },
  { item: "Análise especializada sênior", bunker: true, convencional: false },
]

const diferenciais = [
  "SOC global e operação 24x7",
  "Atuação imediata em incidentes críticos",
  "Threat Hunting avançado",
  "Dashboards em tempo real",
  "Conformidade com padrões internacionais",
  "Equipe sênior especializada (ransomware, persistência, sequestro de credenciais)",
]

const indicadoPara = [
  "Empresas de todos os portes",
  "Organizações sem SOC interno",
  "Ambientes híbridos ou em nuvem",
  "Empresas com necessidades de conformidade (LGPD, ISO 27001, PCI-DSS)",
]

export default function MDR() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <header className="border-b border-white/10 bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <nav className="flex items-center justify-center gap-6 flex-wrap">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === "/mdr"
                    ? "text-white font-medium border-b-2 border-primary pb-0.5"
                    : "text-text hover:text-white transition-colors font-medium text-sm"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero — centralizado com badge e tagline impactante */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-3 bg-primary/10 border border-primary/30 px-5 py-2.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              PROTEÇÃO ATIVA 24/7
            </span>
          </div>
          <h1 className="mb-4 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl text-white text-balance">
            BUNKER <span className="text-primary">MDR</span>
          </h1>
          <p className="mb-4 text-xl md:text-2xl font-semibold text-white/80">
            Managed Detection and Response
          </p>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-text leading-relaxed text-pretty">
            Combinamos tecnologia avançada, inteligência de ameaças global e equipe altamente especializada para identificar e neutralizar ataques{" "}
            <span className="text-white font-semibold">antes que causem impacto ao seu negócio.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-base px-8 py-6 h-auto">
              <a href="#cta-final">SOLICITAR DEMONSTRAÇÃO</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-base px-8 py-6 h-auto">
              <a href="#como-funciona">COMO FUNCIONA</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefícios — grid 3 colunas */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-3xl font-bold text-heading md:text-4xl text-center text-balance">
            Principais Benefícios
          </h2>
          <p className="mb-12 text-center text-text text-lg">
            O BUNKER MDR não envia apenas alertas — <span className="text-white font-semibold">ele age.</span>
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b, i) => {
              const Icon = b.icon
              return (
                <div key={i} className="border border-white/10 p-6 hover:border-primary/40 transition-colors">
                  <div className="mb-4 h-10 w-10 flex items-center justify-center bg-primary/10 border border-primary/30">
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

      {/* Como funciona — stepper horizontal */}
      <section id="como-funciona" className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-3xl font-bold text-heading md:text-4xl text-balance">
            Como Funciona o BUNKER MDR
          </h2>
          <div className="space-y-4">
            {funcionamento.map((step, i) => (
              <div key={i} className="flex items-start gap-6 p-6 border border-white/10 hover:border-primary/30 transition-colors">
                <span className="text-3xl font-bold text-primary shrink-0">{step.num}</span>
                <div>
                  <h3 className="text-lg font-bold text-heading mb-1">{step.title}</h3>
                  <p className="text-text leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparativo + Diferenciais */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Comparativo */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl text-balance">
                Por que escolher o BUNKER MDR?
              </h2>
              <div className="border border-white/10 overflow-hidden">
                <div className="grid grid-cols-3 bg-white/5 p-4 border-b border-white/10">
                  <span className="text-text text-sm font-medium">Recurso</span>
                  <span className="text-center text-primary text-sm font-bold">BUNKER MDR</span>
                  <span className="text-center text-text text-sm font-medium">Convencional</span>
                </div>
                {comparativo.map((c, i) => (
                  <div key={i} className="grid grid-cols-3 p-4 border-b border-white/10 last:border-b-0 items-center">
                    <span className="text-text text-sm">{c.item}</span>
                    <div className="flex justify-center">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex justify-center">
                      <XCircle className="h-5 w-5 text-white/20" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Diferenciais + Indicado para */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-heading mb-6">Diferenciais da BUNKER</h3>
                <ul className="space-y-3">
                  {diferenciais.map((d, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-text leading-relaxed text-sm">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="bg-primary/5 border border-primary/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-heading mb-4">Indicado Para</h3>
                  <ul className="space-y-3">
                    {indicadoPara.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-text text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">BUNKER MDR</p>
          <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-balance">
            A sua fortaleza digital.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-text leading-relaxed text-pretty">
            Eleve o nível da segurança da sua empresa com um dos serviços MDR mais completos do mercado. Solicite uma demonstração ou avaliação gratuita.
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-base md:text-lg px-10 py-6 h-auto">
            SOLICITAR AVALIAÇÃO GRATUITA
          </Button>
        </div>
      </section>
    </main>
  )
}
