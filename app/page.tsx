import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Eye, AlertTriangle, Microscope, Check } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b border-white/10 bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <nav className="flex items-center justify-center gap-8">
            <Link href="/" className="text-white font-medium border-b-2 border-primary">
              Inteligência de Ameaças
            </Link>
            <Link href="/threat-intelligence" className="text-text hover:text-white transition-colors font-medium">
              Threat Intelligence
            </Link>
            <Link href="/risk-assessment" className="text-text hover:text-white transition-colors font-medium">
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

      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="border-2 border-dashed border-white/30 p-8 md:p-12 lg:p-16">
            <div className="mb-6 inline-block bg-primary px-4 py-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white">INTELIGÊNCIA DE AMEAÇAS</span>
            </div>

            <h1 className="mb-8 text-4xl font-bold leading-tight md:text-5xl lg:text-7xl text-balance">
              <span className="text-white">Inteligência de Ameaças </span>
              <span className="text-primary">BUNKER</span>
            </h1>

            <p className="mb-6 text-xl md:text-2xl font-bold text-white">
              Antecipe riscos. Proteja sua empresa. Eleve sua segurança.
            </p>

            <div className="mb-10 max-w-3xl space-y-4 text-base md:text-lg text-text/90 leading-relaxed">
              <p>
                A BUNKER oferece uma solução completa de Inteligência de Ameaças, ajudando sua empresa a{" "}
                <span className="font-semibold text-white">
                  prever ataques, identificar riscos reais e agir antes que o problema aconteça.
                </span>
              </p>
              <p>
                Enquanto muitas empresas só descobrem o ataque depois do prejuízo, a BUNKER trabalha em{" "}
                <span className="font-semibold text-white">modo proativo</span>, monitorando ameaças em tempo real e
                bloqueando perigos antes que eles se tornem incidentes.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 font-bold text-base md:text-lg px-8 py-6 h-auto"
              >
                <a href="#cta-final">FALE CONOSCO</a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 font-bold text-base md:text-lg px-8 py-6 h-auto"
              >
                <a href="#cta-final">VEJA MAIS</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl text-balance">
            CENÁRIO DO CIBERCRIME
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-[#0a0a0a] border-white/10">
              <CardContent className="p-8 text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">262</div>
                <div className="text-white font-medium text-lg">Grupos</div>
              </CardContent>
            </Card>

            <Card className="bg-[#0a0a0a] border-white/10">
              <CardContent className="p-8 text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">19.811</div>
                <div className="text-white font-medium text-lg">Vítimas</div>
              </CardContent>
            </Card>

            <Card className="bg-[#0a0a0a] border-white/10">
              <CardContent className="p-8 text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">3.325</div>
                <div className="text-white font-medium text-lg">Esse ano</div>
              </CardContent>
            </Card>

            <Card className="bg-[#0a0a0a] border-white/10">
              <CardContent className="p-8 text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">399</div>
                <div className="text-white font-medium text-lg">Esse mês</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Hire Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-balance">
            Por que contratar Inteligência de Ameaças da BUNKER?
          </h2>

          <div className="mb-10 grid gap-6 md:grid-cols-2 lg:gap-8">
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 shrink-0 translate-y-1 text-primary" />
              <span className="text-text text-lg leading-relaxed">Reduz drasticamente o risco de ataques</span>
            </div>
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 shrink-0 translate-y-1 text-primary" />
              <span className="text-text text-lg leading-relaxed">
                Detecta vulnerabilidades críticas antes dos hackers
              </span>
            </div>
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 shrink-0 translate-y-1 text-primary" />
              <span className="text-text text-lg leading-relaxed">Monitora ameaças em tempo real</span>
            </div>
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 shrink-0 translate-y-1 text-primary" />
              <span className="text-text text-lg leading-relaxed">
                Identifica sinais de que sua empresa pode ser alvo
              </span>
            </div>
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 shrink-0 translate-y-1 text-primary" />
              <span className="text-text text-lg leading-relaxed">Previne vazamentos e fraudes</span>
            </div>
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 shrink-0 translate-y-1 text-primary" />
              <span className="text-text text-lg leading-relaxed">
                Aumenta a maturidade de segurança sem complicar sua operação
              </span>
            </div>
          </div>

          <Card className="border-primary/50 bg-[#0a0a0a] shadow-xl">
            <CardContent className="p-8 md:p-10">
              <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed text-center text-pretty">
                "Com a BUNKER, sua empresa não reage — ela se antecipa."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What We Monitor Section */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-balance">
            O que a BUNKER monitora para você
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            <Card className="bg-surface border-white/10 hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <Eye className="mb-6 h-12 w-12 text-primary" />
                <h3 className="mb-4 text-2xl font-bold text-heading">Dark Web e deep web</h3>
                <p className="text-text text-lg leading-relaxed">
                  Identificamos vendas de dados, planejamentos de ataques e menções à sua empresa.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-surface border-white/10 hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <AlertTriangle className="mb-6 h-12 w-12 text-primary" />
                <h3 className="mb-4 text-2xl font-bold text-heading">Vulnerabilidades</h3>
                <p className="text-text text-lg leading-relaxed">
                  Avisamos imediatamente quando surge uma falha que pode afetar seus sistemas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-surface border-white/10 hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <Shield className="mb-6 h-12 w-12 text-primary" />
                <h3 className="mb-4 text-2xl font-bold text-heading">Atividades suspeitas</h3>
                <p className="text-text text-lg leading-relaxed">
                  Detectamos comportamentos ou conexões que indicam tentativa de intrusão.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-surface border-white/10 hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <Microscope className="mb-6 h-12 w-12 text-primary" />
                <h3 className="mb-4 text-2xl font-bold text-heading">Campanhas de hackers</h3>
                <p className="text-text text-lg leading-relaxed">
                  Mapeamos grupos, métodos e ataques em andamento no mundo inteiro.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Practical Gains Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-balance">
            O que sua empresa ganha na prática
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-3 w-3 shrink-0 translate-y-2 rounded-full bg-primary" />
                  <span className="text-text text-xl leading-relaxed">Previsibilidade sobre riscos</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-3 w-3 shrink-0 translate-y-2 rounded-full bg-primary" />
                  <span className="text-text text-xl leading-relaxed">Resposta mais rápida a ameaças</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-3 w-3 shrink-0 translate-y-2 rounded-full bg-primary" />
                  <span className="text-text text-xl leading-relaxed">Redução de custos com incidentes</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-3 w-3 shrink-0 translate-y-2 rounded-full bg-primary" />
                  <span className="text-text text-xl leading-relaxed">
                    Maior confiança para operação e tomada de decisões
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-3 w-3 shrink-0 translate-y-2 rounded-full bg-primary" />
                  <span className="text-text text-xl leading-relaxed">Proteção contínua, 24h por dia</span>
                </li>
              </ul>
            </div>

            <div>
              <Card className="bg-primary/10 border-primary/50 h-full">
                <CardContent className="p-8 flex items-center h-full">
                  <p className="text-heading text-lg font-medium leading-relaxed text-pretty">
                    A BUNKER transforma informações complexas em alertas simples, diretos e acionáveis para sua equipe.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta-final" className="bg-[#0a0a0a] py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-balance">
            Resultado: segurança elevada ao próximo nível
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-lg md:text-xl text-text leading-relaxed text-pretty">
            Com a Inteligência de Ameaças BUNKER, sua empresa fica um passo à frente dos hackers e mantém seus dados,
            sistemas e clientes protegidos — sempre.
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
