import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Server, Network, Shield, HardDrive, BarChart2, Headphones, CheckCircle } from "lucide-react"
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

const servicos = [
  { icon: Server, title: "Servidores e Nuvem", desc: "Administração proativa de servidores físicos, virtuais e ambientes em nuvem (AWS, Azure, GCP)." },
  { icon: Network, title: "Redes e Conectividade", desc: "Gestão de roteadores, switches, firewalls e links dedicados com monitoramento em tempo real." },
  { icon: Shield, title: "Segurança Gerenciada", desc: "Patching, EDR/antivírus, hardening de sistemas e controles de acesso contínuos." },
  { icon: HardDrive, title: "Backup e Continuidade", desc: "Políticas de backup automatizadas com testes regulares de recuperação e plano de continuidade." },
  { icon: Headphones, title: "Suporte com SLA", desc: "Atendimento ágil ao usuário com SLA definido, garantindo produtividade e resolução rápida." },
  { icon: BarChart2, title: "Governança e Roadmap", desc: "Relatórios técnicos, dashboards e planejamento contínuo de evolução da infraestrutura." },
]

const indicadoPara = [
  "Reduzir custos e aumentar estabilidade",
  "Ter TI confiável sem montar equipe interna grande",
  "Simplificar nuvem, rede e infraestrutura",
  "Ganhar escala com segurança e previsibilidade",
  "Reforçar segurança e governança",
]

const resultados = [
  { num: "24/7", label: "Monitoramento contínuo de toda infraestrutura" },
  { num: "100%", label: "Disponibilidade máxima dos sistemas críticos" },
  { num: "SLA", label: "Suporte ágil com tempo de resposta garantido" },
]

export default function MSP() {
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
                  item.href === "/msp"
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

      {/* Hero — centralizado com frase impactante */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <div className="mb-6 inline-block border border-primary/40 px-5 py-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">MSP — Managed Service Provider</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-7xl text-white text-balance">
            Sua TI funcionando{" "}
            <span className="text-primary">sempre.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg md:text-xl text-text leading-relaxed text-pretty">
            Manter uma equipe interna completa é caro, complexo e improdutivo. O MSP BUNKER entrega um time especializado que gerencia toda a sua infraestrutura, nuvem, endpoints e redes — garantindo{" "}
            <span className="text-white font-semibold">disponibilidade, desempenho e segurança contínua.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-base px-8 py-6 h-auto">
              <a href="#cta-final">QUERO O MSP BUNKER</a>
            </Button>
          </div>

          {/* Métricas */}
          <div className="grid gap-px bg-white/10 md:grid-cols-3 border border-white/10">
            {resultados.map((r, i) => (
              <div key={i} className="bg-background py-10 px-6">
                <p className="text-4xl font-bold text-primary mb-2">{r.num}</p>
                <p className="text-text text-sm leading-relaxed">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que o MSP faz — grid 3 colunas com cards */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-3xl font-bold text-heading md:text-4xl text-balance">
            O que o MSP faz por você
          </h2>
          <p className="mb-12 text-text text-lg">
            Cobertura completa da sua infraestrutura — do servidor ao usuário final.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicos.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="group border border-white/10 p-6 hover:border-primary/40 transition-colors">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-heading mb-2">{s.title}</h3>
                  <p className="text-text text-sm leading-relaxed">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Indicado para + Resultados lado a lado */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Indicado para */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl text-balance">
                Indicado para empresas que precisam:
              </h2>
              <ul className="space-y-4">
                {indicadoPara.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-b-0">
                    <span className="text-2xl font-bold text-primary shrink-0 leading-none">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-text text-lg leading-relaxed pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resultados para o negócio */}
            <Card className="bg-[#0a0a0a] border border-white/10 h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-1 w-8 bg-primary shrink-0" />
                  <h3 className="text-2xl font-bold text-heading">Resultados para o negócio</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Disponibilidade máxima dos sistemas",
                    "Suporte ágil aos usuários",
                    "Menos falhas e incidentes",
                    "Entorno técnico mais seguro e padronizado",
                    "Economia significativa e redução de riscos",
                  ].map((r, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-text leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statement final */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="border-l-4 border-primary pl-8 py-4">
            <p className="text-2xl md:text-3xl font-bold text-white leading-snug text-pretty">
              Com MSP, sua TI deixa de apagar incêndios e passa a operar com excelência.
            </p>
            <p className="mt-4 text-xl text-primary font-semibold">
              É tecnologia funcionando — sempre.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">BUNKER MSP</p>
          <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-balance">
            Infraestrutura confiável, sem complicações.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-text leading-relaxed text-pretty">
            Entre em contato e descubra como o MSP BUNKER pode transformar a gestão de TI da sua empresa com mais
            eficiência, segurança e previsibilidade de custos.
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-base md:text-lg px-10 py-6 h-auto">
            FALE COM UM ESPECIALISTA
          </Button>
        </div>
      </section>
    </main>
  )
}
