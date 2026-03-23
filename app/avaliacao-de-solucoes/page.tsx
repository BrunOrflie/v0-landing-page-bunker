import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, FlaskConical, GitCompare, DollarSign, FileText, CheckCircle } from "lucide-react"
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

const oQueFazemos = [
  { icon: Search, title: "Avaliação técnica independente", desc: "Análise neutra das soluções do mercado, sem vínculo com fabricantes ou interesses comerciais." },
  { icon: FlaskConical, title: "Testes práticos", desc: "Eficácia, integração, desempenho e aderência ao uso real testados em ambiente controlado." },
  { icon: GitCompare, title: "Comparação objetiva", desc: "Análise lado a lado entre fornecedores com critérios técnicos claros e mensuráveis." },
  { icon: DollarSign, title: "Análise financeira", desc: "TCO, ROI e adequação ao orçamento e ambiente existente da sua organização." },
  { icon: FileText, title: "Relatório executivo", desc: "Recomendações 100% neutras entregues em formato técnico e executivo para tomada de decisão." },
]

const tecnologias = ["EDR", "XDR", "SIEM", "PAM", "BAS", "SASE", "CASB", "DLP"]

const indicadoPara = [
  "Estão avaliando EDR, XDR, SIEM, PAM, BAS, SASE, CASB, DLP ou outras soluções",
  "Querem comprovação técnica antes de comprar",
  "Precisam justificar investimentos ao board",
  "Evitar sobreposição de tecnologias e reduzir custos",
  "Querem escolher a melhor solução com base em dados, não em promessas",
]

export default function AvaliacaoDeSolucoes() {
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
                  item.href === "/avaliacao-de-solucoes"
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

      {/* Hero — layout dividido: problema à esquerda, solução à direita */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-0 lg:grid-cols-2 border border-white/10">
            {/* Problema */}
            <div className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-text mb-4">O Problema</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-6 text-pretty">
                Boa parte das empresas investe em ferramentas caras que nem sempre resolvem o problema real.
              </h2>
              <p className="text-text leading-relaxed mb-4">
                Soluções complexas demais, que não integram com o ambiente existente — gerando gasto de tempo e energia,
                eventuais pontos cegos e uma{" "}
                <span className="text-white font-semibold">falsa sensação de segurança.</span>
              </p>
              <p className="text-text leading-relaxed">
                Escolher uma solução de cibersegurança não pode ser uma decisão baseada apenas em apresentações
                comerciais.
              </p>
            </div>

            {/* Solução */}
            <div className="p-10 md:p-14 bg-[#0a0a0a]">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">A Solução BUNKER</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 text-balance">
                Avaliação Imparcial de{" "}
                <span className="text-primary">Soluções de Segurança</span>
              </h1>
              <p className="text-text leading-relaxed mb-8">
                Diagnóstico técnico, neutro e baseado em metodologia, comparando fornecedores e tecnologias de forma
                transparente, sem vínculo com fabricantes ou interesses comerciais.
              </p>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-base px-8 py-6 h-auto">
                <a href="#cta-final">SOLICITAR AVALIAÇÃO</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos — lista com ícones grandes */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-3xl font-bold text-heading md:text-4xl text-balance">
            O que fazemos
          </h2>
          <div className="space-y-px bg-white/10">
            {oQueFazemos.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="flex items-start gap-6 bg-background p-6 md:p-8 hover:bg-[#0a0a0a] transition-colors group">
                  <div className="shrink-0 flex h-12 w-12 items-center justify-center bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-heading mb-1">{item.title}</h3>
                    <p className="text-text leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tecnologias avaliadas + Indicado para */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Indicado para */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl text-balance">
                Indicado para empresas que:
              </h2>
              <ul className="space-y-4">
                {indicadoPara.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-text leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tecnologias + Por que importa */}
            <div className="space-y-8">
              <Card className="bg-[#0a0a0a] border border-white/10">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-heading mb-6">Tecnologias que avaliamos</h3>
                  <div className="flex flex-wrap gap-3">
                    {tecnologias.map((t, i) => (
                      <span key={i} className="border border-primary/40 text-primary text-sm font-bold px-4 py-2">
                        {t}
                      </span>
                    ))}
                    <span className="border border-white/20 text-text text-sm px-4 py-2">e outras</span>
                  </div>
                </CardContent>
              </Card>

              <div className="border border-primary p-8">
                <h3 className="text-xl font-bold text-heading mb-6">Por que isso é importante?</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Menos risco" },
                    { label: "Mais eficiência" },
                    { label: "Zero influência de fabricantes" },
                    { label: "Decisões sólidas" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-text text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <p className="text-2xl md:text-3xl font-bold text-white leading-snug text-balance max-w-3xl mx-auto">
            Avaliação Imparcial é a garantia de que sua empresa escolhe a solução certa —
          </p>
          <p className="mt-2 text-2xl md:text-3xl font-bold text-primary">
            no momento certo, pelo motivo certo.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">BUNKER</p>
          <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-balance">
            Escolha com base em dados. Não em promessas.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-text leading-relaxed text-pretty">
            Solicite uma avaliação imparcial e descubra qual solução realmente se encaixa no seu ambiente — com
            metodologia, transparência e zero viés comercial.
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-base md:text-lg px-10 py-6 h-auto">
            FALE COM UM ESPECIALISTA
          </Button>
        </div>
      </section>
    </main>
  )
}
