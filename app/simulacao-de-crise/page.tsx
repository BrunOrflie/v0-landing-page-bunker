import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flame, Users, Zap, FileText, TrendingUp, CheckCircle, AlertTriangle } from "lucide-react"
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
  { label: "vCISO", href: "/vciso" },
  { label: "MSP", href: "/msp" },
  { label: "Avaliação de Soluções", href: "/avaliacao-de-solucoes" },
]

const etapas = [
  {
    num: "01",
    title: "Preparação",
    items: ["Definição do cenário", "Identificação das áreas participantes", "Coleta de informações sobre o ambiente do cliente"],
  },
  {
    num: "02",
    title: "Execução da Simulação",
    items: ["Ransomware", "Vazamento de dados", "Ataque interno (insider)", "Comprometimento de credenciais", "Derrubada de sistemas essenciais"],
    highlight: true,
  },
  {
    num: "03",
    title: "Análise e Debriefing",
    items: ["Pontos positivos", "Falhas encontradas", "Impactos previstos", "Recomendações de melhoria", "Plano de ação para resiliência"],
  },
]

const avaliamos = [
  "Comunicação entre equipes e liderança",
  "Velocidade de tomada de decisão",
  "Aderência ao plano de resposta a incidentes",
  "Capacidade técnica e operacional",
  "Estratégias de contenção e mitigação",
  "Nível de documentação e governança",
  "Preparação para LGPD e regulamentações",
]

const beneficios = [
  { icon: Zap, label: "Treinamento prático e realista" },
  { icon: TrendingUp, label: "Redução de impacto em eventos reais" },
  { icon: Users, label: "Equipe mais preparada e confiante" },
  { icon: FileText, label: "Suporte a auditorias e compliance" },
  { icon: CheckCircle, label: "Força maior na continuidade de negócios" },
  { icon: AlertTriangle, label: "Aprimoramento imediato de processos internos" },
]

const entregaveis = [
  "Relatório completo da simulação",
  "Avaliação de maturidade",
  "Plano de resposta aprimorado",
  "Propostas de ajustes estratégicos",
  "Recomendações para fortalecer segurança",
]

export default function SimulacaoDeCrise() {
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
                  item.href === "/simulacao-de-crise"
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

      {/* Hero — full width com imagem de fundo simulada por padrão de pontos */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#ff0909 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <Flame className="h-5 w-5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">SESSÃO EXCLUSIVA</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-white text-balance">
              Simulação de{" "}
              <span className="text-primary">Crise Cibernética</span>
            </h1>
            <p className="mb-4 text-lg md:text-xl text-text leading-relaxed text-pretty">
              Um exercício planejado onde sua empresa testa, na prática, como reagiria a um ataque cibernético real — como se fosse um{" "}
              <span className="text-white font-semibold">"treinamento de incêndio"</span>, só que para segurança digital.
            </p>
            <p className="mb-10 text-lg text-text leading-relaxed">
              Preparamos líderes, TI, segurança, jurídico e áreas estratégicas para responder rapidamente, com menos impacto e mais coordenação diante de um incidente verdadeiro.
            </p>
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-base px-8 py-6 h-auto">
              <a href="#cta-final">AGENDAR SESSÃO</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Objetivo */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="border-l-4 border-primary pl-8 max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-heading md:text-3xl">Objetivo da Sessão Exclusiva</h2>
            <p className="text-text text-lg leading-relaxed mb-4">
              Proporcionar uma experiência imersiva onde líderes, TI, segurança, jurídico e áreas estratégicas vivenciam o caos de um ataque cibernético e aprendem a agir com assertividade.
            </p>
            <p className="text-white font-semibold text-lg">
              Revelar pontos fortes, identificar falhas e entregar recomendações práticas para elevar a maturidade de segurança.
            </p>
          </div>
        </div>
      </section>

      {/* Como funciona — 3 etapas em linha */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-3xl font-bold text-heading md:text-4xl text-balance">
            Como a Sessão Funciona
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {etapas.map((etapa, i) => (
              <div
                key={i}
                className={`p-8 border ${etapa.highlight ? "border-primary bg-primary/5" : "border-white/10 bg-[#0a0a0a]"}`}
              >
                <span className="text-5xl font-bold text-primary/20 block mb-4">{etapa.num}</span>
                <h3 className="text-xl font-bold text-heading mb-4">{etapa.title}</h3>
                <ul className="space-y-2">
                  {etapa.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-text text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que avaliamos + Benefícios */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl text-balance">
                O que Avaliamos
              </h2>
              <ul className="space-y-4">
                {avaliamos.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-text leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl text-balance">
                Benefícios
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {beneficios.map((b, i) => {
                  const Icon = b.icon
                  return (
                    <div key={i} className="flex items-start gap-3 p-4 border border-white/10">
                      <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-text text-sm leading-relaxed">{b.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entregáveis */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-heading md:text-4xl text-balance">
                Entregáveis BUNKER
              </h2>
              <p className="text-text text-lg leading-relaxed mb-8">
                Ao final da sessão, a empresa recebe documentação completa para agir imediatamente.
              </p>
              <ul className="space-y-4">
                {entregaveis.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-primary/40">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="bg-primary border-0">
              <CardContent className="p-10 text-center">
                <Flame className="h-16 w-16 text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Sessão Exclusiva BUNKER</h3>
                <p className="text-white/80 leading-relaxed mb-8">
                  Conduzida por especialistas certificados. Cenários realistas. Recomendações práticas e imediatas.
                </p>
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold w-full py-6 h-auto">
                  <a href="#cta-final">AGENDAR AGORA</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="bg-[#0a0a0a] py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">BUNKER</p>
          <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-balance">
            Sua empresa está preparada para um ataque real?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-text leading-relaxed text-pretty">
            Descubra antes que seja tarde. Agende uma sessão exclusiva de Simulação de Crise Cibernética com a BUNKER.
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-base md:text-lg px-10 py-6 h-auto">
            FALE COM UM ESPECIALISTA
          </Button>
        </div>
      </section>
    </main>
  )
}
