import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Clipboard, TrendingUp, FileCheck, DollarSign, Shield, Target } from "lucide-react"
import Link from "next/link"

export default function SecurityBenchmark() {
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
            <Link href="/risk-assessment" className="text-text hover:text-white transition-colors font-medium">
              Risk Assessment
            </Link>
            <Link href="/security-benchmark" className="text-white font-medium border-b-2 border-primary">
              Security Benchmark
            </Link>
            <Link href="/emulacao-de-ataques" className="text-text hover:text-white transition-colors font-medium">
              Emulação de Ataques
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section - Layout: Centered with emphasis box */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <div className="mb-6 inline-block bg-primary px-4 py-2">
            <span className="text-xs font-bold uppercase tracking-wider text-white">ANÁLISE INDEPENDENTE</span>
          </div>

          <h1 className="mb-8 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-balance">
            <span className="text-white">Avaliação </span>
            <span className="text-primary">Imparcial</span>
            <span className="text-white"> de Soluções de Segurança</span>
          </h1>

          <div className="mx-auto max-w-3xl space-y-6 text-lg md:text-xl text-text/90 leading-relaxed mb-12">
            <p>
              Escolher uma solução de cibersegurança não pode ser uma decisão baseada apenas em apresentações
              comerciais. Boa parte das empresas investe em ferramentas caras que{" "}
              <span className="font-semibold text-white">
                nem sempre resolvem todo problema real, são complexas demais ou não integram com o ambiente existente
              </span>{" "}
              — gerando gasto de tempo e energia, eventuais pontos cegos e com isso uma falsa sensação de segurança.
            </p>
            <p className="text-white font-semibold">
              Nosso serviço oferece um diagnóstico técnico, neutro e baseado em metodologia, comparando fornecedores e
              tecnologias de forma transparente, sem vínculo com fabricantes ou interesses comerciais.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 font-bold text-base md:text-lg px-10 py-6 h-auto"
          >
            <a href="#cta-final">SOLICITE UMA AVALIAÇÃO</a>
          </Button>
        </div>
      </section>

      {/* What We Do Section - Layout: Large feature cards in 2 columns */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-balance">O que fazemos</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-surface border-white/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-10">
                <Clipboard className="mb-6 h-14 w-14 text-primary" />
                <h3 className="mb-4 text-2xl font-bold text-heading">Avaliação técnica independente</h3>
                <p className="text-text text-lg leading-relaxed">
                  Analisamos as soluções do mercado sem vínculo com fabricantes, com foco no que realmente funciona para
                  sua realidade.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-surface border-white/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-10">
                <Target className="mb-6 h-14 w-14 text-primary" />
                <h3 className="mb-4 text-2xl font-bold text-heading">Testes práticos de eficácia</h3>
                <p className="text-text text-lg leading-relaxed">
                  Realizamos testes de integração, desempenho e uso real para validar se a solução entrega o que
                  promete.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-surface border-white/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-10">
                <FileCheck className="mb-6 h-14 w-14 text-primary" />
                <h3 className="mb-4 text-2xl font-bold text-heading">Comparação objetiva lado a lado</h3>
                <p className="text-text text-lg leading-relaxed">
                  Colocamos fornecedores frente a frente com critérios técnicos claros, comparando funcionalidades,
                  desempenho e valor.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-surface border-white/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-10">
                <DollarSign className="mb-6 h-14 w-14 text-primary" />
                <h3 className="mb-4 text-2xl font-bold text-heading">Análise de risco, TCO e ROI</h3>
                <p className="text-text text-lg leading-relaxed">
                  Avaliamos custos totais de propriedade, retorno sobre investimento e aderência ao seu ambiente
                  tecnológico.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-surface border-white/10 hover:border-primary/30 transition-colors md:col-span-2">
              <CardContent className="p-10">
                <TrendingUp className="mb-6 h-14 w-14 text-primary" />
                <h3 className="mb-4 text-2xl font-bold text-heading">Relatório executivo com recomendações neutras</h3>
                <p className="text-text text-lg leading-relaxed">
                  Entregamos um documento completo, claro e 100% imparcial, com recomendações baseadas apenas em dados
                  técnicos e estratégicos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Indicado Para Section - Layout: Numbered list with accent */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-balance">
            Indicado para empresas que
          </h2>

          <div className="space-y-6 max-w-4xl">
            <div className="flex items-start gap-6 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-white font-bold text-xl">
                1
              </div>
              <p className="text-text text-xl leading-relaxed pt-2">
                Estão avaliando{" "}
                <span className="text-white font-semibold">EDR, XDR, SIEM, PAM, BAS, SASE, CASB, DLP</span> ou outras
                soluções
              </p>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-white font-bold text-xl">
                2
              </div>
              <p className="text-text text-xl leading-relaxed pt-2">
                Querem <span className="text-white font-semibold">comprovação técnica antes de comprar</span>
              </p>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-white font-bold text-xl">
                3
              </div>
              <p className="text-text text-xl leading-relaxed pt-2">
                Precisam <span className="text-white font-semibold">justificar investimentos ao board</span>
              </p>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-white font-bold text-xl">
                4
              </div>
              <p className="text-text text-xl leading-relaxed pt-2">
                Querem{" "}
                <span className="text-white font-semibold">evitar sobreposição de tecnologias e reduzir custos</span>
              </p>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-white font-bold text-xl">
                5
              </div>
              <p className="text-text text-xl leading-relaxed pt-2">
                Querem escolher{" "}
                <span className="text-white font-semibold">a melhor solução com base em dados, não em promessas</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Important Section - Layout: Alternating columns with highlight */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-balance">
            Por que isso é importante?
          </h2>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Shield className="h-10 w-10 shrink-0 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold text-heading mb-2">Menos risco</h3>
                  <p className="text-text text-lg leading-relaxed">
                    Evite investir em soluções que não protegem adequadamente sua empresa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <TrendingUp className="h-10 w-10 shrink-0 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold text-heading mb-2">Mais eficiência</h3>
                  <p className="text-text text-lg leading-relaxed">
                    Escolha ferramentas que se integram perfeitamente ao seu ambiente e simplificam operações.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Check className="h-10 w-10 shrink-0 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold text-heading mb-2">Zero influência de fabricantes</h3>
                  <p className="text-text text-lg leading-relaxed">
                    Nossas recomendações são 100% neutras, sem comissões ou parcerias comerciais.
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-primary/10 border-primary/50 h-full">
              <CardContent className="p-10 flex flex-col justify-center h-full">
                <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed text-pretty mb-6">
                  Decisões técnicas, estratégicas e financeiramente sólidas.
                </p>
                <p className="text-xl text-text leading-relaxed">
                  Não deixe o futuro da sua segurança nas mãos de promessas de vendedores. Base suas decisões em fatos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Statement Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <div className="border-l-4 border-primary bg-[#0a0a0a] p-12 text-left">
            <p className="text-3xl md:text-4xl font-bold text-white leading-relaxed text-pretty">
              Avaliação Imparcial é a garantia de que sua empresa escolhe a solução certa — no momento certo, pelo
              motivo certo.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta-final" className="bg-[#0a0a0a] py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-balance">
            Tome decisões com confiança
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-lg md:text-xl text-text leading-relaxed text-pretty">
            Entre em contato e descubra como nossa Avaliação Imparcial pode transformar suas escolhas de segurança em
            investimentos estratégicos de alto valor.
          </p>

          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 font-bold text-base md:text-lg px-10 py-6 h-auto"
          >
            FALE COM UM ESPECIALISTA
          </Button>
        </div>
      </section>
    </main>
  )
}
