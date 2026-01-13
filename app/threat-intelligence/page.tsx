import { Button } from "@/components/ui/button"
import { Shield, Eye, AlertTriangle, Target, FileSearch, Radio, Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ThreatIntelligencePage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-white/10 bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <nav className="flex items-center justify-center gap-8">
            <Link href="/" className="text-text hover:text-white transition-colors font-medium">
              Inteligência de Ameaças
            </Link>
            <Link href="/threat-intelligence" className="text-white font-medium border-b-2 border-primary">
              Threat Intelligence
            </Link>
            <Link href="/risk-assessment" className="text-text hover:text-white transition-colors font-medium">
              Risk Assessment
            </Link>
            <Link href="/security-benchmark" className="text-text hover:text-white transition-colors font-medium">
              Security Benchmark
            </Link>
          </nav>
        </div>
      </header>

      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 inline-block bg-primary px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white">THREAT INTELLIGENCE</span>
              </div>

              <h1 className="mb-8 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-balance">
                <span className="text-white">Inteligência de Ameaças </span>
                <span className="text-primary">(Threat Intelligence)</span>
              </h1>

              <div className="mb-10 space-y-4 text-base md:text-lg text-text/90 leading-relaxed">
                <p>
                  Ataques cibernéticos não acontecem por acaso — eles são{" "}
                  <span className="font-semibold text-white">planejados, organizados</span> e geralmente começam muito
                  antes de atingirem seu alvo.
                </p>
                <p>
                  A Inteligência de Ameaças permite que sua empresa{" "}
                  <span className="font-semibold text-white">
                    identifique riscos antes que eles se tornem incidentes
                  </span>
                  .
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 font-bold text-base px-8 py-6 h-auto"
                >
                  <a href="#cta-final">FALE CONOSCO</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-bold text-base px-8 py-6 h-auto bg-transparent"
                >
                  <a href="#o-que-entregamos">VEJA MAIS</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-transparent rounded-3xl border border-white/10 flex items-center justify-center">
                <Shield className="w-32 h-32 text-primary/50" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-white/10 bg-[#050505]">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-center text-lg md:text-xl text-text/80 leading-relaxed max-w-4xl mx-auto">
            Combinamos fontes de informação de alto nível{" "}
            <span className="text-white font-medium">(dark web, deep web, OSINT, honeypots, feeds privados)</span> para
            entregar uma visão completa da sua superfície de ataque.
          </p>
        </div>
      </section>

      <section id="o-que-entregamos" className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-16 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-center">
            O que entregamos
          </h2>

          <div className="space-y-6">
            {[
              {
                icon: Eye,
                title: "Monitoramento de Vazamentos",
                desc: "Monitoramento contínuo de vazamentos, credenciais e menções à empresa.",
              },
              {
                icon: Target,
                title: "Detecção de Ataques",
                desc: "Identificação de ataques planejados e campanhas de phishing em preparação.",
              },
              { icon: Shield, title: "IOCs e IOAs", desc: "IOCs e IOAs atualizados para alimentar EDR, SIEM e SOAR." },
              {
                icon: FileSearch,
                title: "Relatórios Estratégicos",
                desc: "Relatórios estratégicos para diretoria e relatórios técnicos para o SOC.",
              },
              {
                icon: AlertTriangle,
                title: "Rastreamento de Ransomware",
                desc: "Rastreamento de grupos de ransomware e ameaças em evolução.",
              },
              {
                icon: Radio,
                title: "Superfícies Expostas",
                desc: "Monitoramento de superfícies expostas e vulnerabilidades críticas.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`flex items-center gap-6 p-6 bg-[#0a0a0a] border border-white/10 rounded-xl hover:border-primary/50 transition-all ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-heading mb-2">{item.title}</h3>
                  <p className="text-text leading-relaxed">{item.desc}</p>
                </div>
                <ArrowRight className="w-6 h-6 text-primary/50 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-heading md:text-4xl lg:text-5xl mb-6 lg:sticky lg:top-24">
                Por que sua empresa precisa disso?
              </h2>
              <div className="h-1 w-20 bg-primary" />
            </div>

            <div className="lg:col-span-3 space-y-8">
              {[
                "Detecta ataques antes que cheguem ao seu ambiente",
                "Protege sua marca, reputação e clientes",
                "Ajuda a evitar ransomware, invasões e exfiltração de dados",
                "Reduz custos, riscos e danos operacionais",
                "Permite decisões estratégicas baseadas em inteligência real",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xl text-text leading-relaxed pt-2">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-y border-primary/30">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <p className="text-2xl md:text-4xl font-bold text-white leading-relaxed text-pretty">
            "Inteligência é o que potencializa a prevenção, reduzindo necessidade de reação."
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta-final" className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-balance">
            Com Threat Intelligence, sua empresa deixa de ser alvo fácil
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-lg md:text-xl text-primary font-bold leading-relaxed text-pretty">
            E passa a agir antes do ataque.
          </p>

          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 font-bold text-base md:text-lg px-10 py-6 h-auto"
          >
            FALE CONOSCO
          </Button>
        </div>
      </section>
    </main>
  )
}
