import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Target, FileSearch, BarChart3, Map, Layers } from "lucide-react"
import Link from "next/link"

export default function RiskAssessment() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b border-white/10 bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <nav className="flex items-center justify-center gap-8">
            <Link href="/" className="text-text hover:text-white transition-colors font-medium">
              Inteligência de Ameaças
            </Link>
            <Link href="/threat-intelligence" className="text-text hover:text-white transition-colors font-medium">
              Threat Intelligence
            </Link>
            <Link href="/risk-assessment" className="text-white font-medium border-b-2 border-primary">
              Risk Assessment
            </Link>
            <Link href="/security-benchmark" className="text-text hover:text-white transition-colors font-medium">
              Security Benchmark
            </Link>
            <Link href="/emulacao-de-ataques" className="text-text hover:text-white transition-colors font-medium">
              Emulação de Ataques
            </Link>
          </nav>
        </div>
      </header>

      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="border-2 border-dashed border-white/30 p-8 md:p-12 lg:p-16 text-center">
            <div className="mb-6 inline-block bg-primary px-4 py-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white">AVALIAÇÃO DE RISCO</span>
            </div>

            <h1 className="mb-8 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-balance mx-auto max-w-4xl">
              <span className="text-white">Avaliação de Risco de </span>
              <span className="text-primary">Fragilidades contra Ataques Cibernéticos</span>
            </h1>

            <p className="mb-6 text-xl md:text-2xl font-bold text-white">
              Sua empresa realmente sabe quais são seus maiores riscos cibernéticos?
            </p>

            <div className="mb-10 max-w-3xl mx-auto space-y-4 text-base md:text-lg text-text/90 leading-relaxed">
              <p>
                A maioria das organizações possui vulnerabilidades críticas —{" "}
                <span className="font-semibold text-white">invisíveis no dia a dia</span> — que podem levar a
                vazamentos, paradas operacionais e ataques de ransomware.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 font-bold text-base md:text-lg px-8 py-6 h-auto"
              >
                <a href="#cta-final">SOLICITAR AVALIAÇÃO</a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 font-bold text-base md:text-lg px-8 py-6 h-auto"
              >
                <a href="#o-que-fazemos">VEJA MAIS</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="o-que-fazemos" className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-3xl font-bold text-heading md:text-4xl lg:text-5xl">O que fazemos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card grande */}
            <Card className="bg-surface border-white/10 hover:border-primary/50 transition-colors md:col-span-2 lg:col-span-1 lg:row-span-2">
              <CardContent className="p-8 h-full flex flex-col justify-between">
                <div>
                  <Map className="mb-6 h-16 w-16 text-primary" />
                  <h3 className="mb-4 text-2xl font-bold text-heading">Mapeamento completo</h3>
                  <p className="text-text text-lg leading-relaxed">
                    Mapeamento completo de ativos e ambientes (local, nuvem e híbrido), identificando cada ponto de
                    entrada e vulnerabilidade potencial.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <span className="text-primary font-bold text-sm uppercase tracking-wider">Base do processo</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-surface border-white/10 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <FileSearch className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-lg font-bold text-heading">Identificação de vulnerabilidades</h3>
                <p className="text-text text-sm leading-relaxed">Vulnerabilidades técnicas e falhas de configuração.</p>
              </CardContent>
            </Card>

            <Card className="bg-surface border-white/10 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <Shield className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-lg font-bold text-heading">Análise baseada em frameworks</h3>
                <p className="text-text text-sm leading-relaxed">
                  NIST, ISO, FAIR, OWASP e outros padrões reconhecidos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-surface border-white/10 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <Target className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-lg font-bold text-heading">Modelagem de ameaças</h3>
                <p className="text-text text-sm leading-relaxed">Simulações de cenários reais de ataque.</p>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/30 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <BarChart3 className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-lg font-bold text-heading">Score de risco</h3>
                <p className="text-text text-sm leading-relaxed">Por área, tecnologia e impacto no negócio.</p>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/30 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <Layers className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-lg font-bold text-heading">Roadmap de mitigação</h3>
                <p className="text-text text-sm leading-relaxed">Priorização prática e executiva.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-16 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-center">
            Indicado para empresas que precisam
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Proteger-se contra ransomware, vazamentos e invasões",
              "Preparar-se para auditorias, certificações ou seguros",
              "Justificar investimentos em segurança com dados concretos",
              "Reduzir exposição sem aumentar complexidade",
              "Entender seu risco real e agir com precisão",
            ].map((item, index) => (
              <div key={index} className={`flex items-start gap-4 ${index === 4 ? "lg:col-start-2" : ""}`}>
                <div className="shrink-0 w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <p className="text-text text-lg leading-relaxed pt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-3xl font-bold text-heading md:text-4xl lg:text-5xl">Benefícios</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {[
                "Visibilidade total das fragilidades críticas",
                "Redução imediata da superfície de ataque",
                "Decisões estratégicas com base em risco",
                "Aumento da maturidade e conformidade",
                "Prevenção de incidentes de alto impacto",
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-6 bg-surface border border-white/10 rounded-xl hover:border-primary/30 transition-colors ${
                    index === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 shrink-0 rounded-full bg-primary mt-2" />
                    <p className="text-text text-lg leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="bg-primary border-0 h-full">
              <CardContent className="p-8 flex flex-col justify-center h-full">
                <p className="text-white text-xl md:text-2xl font-bold leading-relaxed text-pretty">
                  A segurança da sua empresa começa pela clareza. E a clareza começa entendendo seus riscos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta-final" className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-balance">
            A segurança da sua empresa começa pela clareza
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-lg md:text-xl text-text leading-relaxed text-pretty">
            E a clareza começa entendendo seus riscos. Entre em contato e solicite sua Avaliação de Risco de
            Fragilidades.
          </p>

          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 font-bold text-base md:text-lg px-10 py-6 h-auto"
          >
            SOLICITAR AVALIAÇÃO
          </Button>
        </div>
      </section>
    </main>
  )
}
