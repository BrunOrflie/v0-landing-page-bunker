import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Target, Handshake, Lock } from "lucide-react"
import Link from "next/link"

const nav = [
  { label: "Inteligência de Ameaças", href: "/" },
  { label: "Threat Intelligence", href: "/threat-intelligence" },
  { label: "Risk Assessment", href: "/risk-assessment" },
  { label: "Security Benchmark", href: "/security-benchmark" },
  { label: "Emulação de Ataques", href: "/emulacao-de-ataques" },
]

const gains = [
  {
    icon: Lock,
    title: "Proteção reforçada",
    desc: "Identificação precisa de vulnerabilidades críticas",
  },
  {
    icon: Zap,
    title: "Ação imediata",
    desc: "Recomendações práticas para fortalecer seus sistemas",
  },
  {
    icon: Target,
    title: "Visão estratégica",
    desc: "Análises claras que facilitam decisões rápidas",
  },
  {
    icon: Handshake,
    title: "Confiança total",
    desc: "Metodologia segura, sigilosa e validada pelo mercado",
  },
]

export default function EmulacaoDeAtaques() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b border-white/10 bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <nav className="flex items-center justify-center gap-8 flex-wrap">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === "/emulacao-de-ataques"
                    ? "text-white font-medium border-b-2 border-primary"
                    : "text-text hover:text-white transition-colors font-medium"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero — layout: dois blocos lado a lado, esquerda texto, direita card vermelho */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <div className="mb-6 inline-block bg-primary px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  EMULAÇÃO DE ATAQUES
                </span>
              </div>
              <h1 className="mb-8 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-balance">
                <span className="text-white">Antecipar ameaças é a chave para </span>
                <span className="text-primary">proteger o que realmente importa.</span>
              </h1>
              <p className="mb-10 text-lg md:text-xl text-text leading-relaxed">
                A BUNKER oferece um serviço de Emulação de Ataques criado para empresas que{" "}
                <span className="text-white font-semibold">não podem correr riscos.</span>
              </p>
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
                  className="border-white/30 text-white hover:bg-white/10 font-bold text-base px-8 py-6 h-auto"
                >
                  <a href="#como-funciona">SAIBA MAIS</a>
                </Button>
              </div>
            </div>

            {/* Right — card de destaque */}
            <div className="border-l-4 border-primary bg-[#0a0a0a] p-10">
              <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed text-pretty">
                Imagine sua organização testada pelas mesmas técnicas usadas por hackers — mas de forma totalmente{" "}
                <span className="text-primary">controlada, segura e estratégica.</span>
              </p>
              <p className="mt-6 text-lg text-text leading-relaxed">
                É exatamente isso que a BUNKER entrega: uma visão real do seu nível de exposição, revelando pontos
                fracos antes que eles sejam explorados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que você ganha — layout: timeline vertical com ícones */}
      <section id="como-funciona" className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-16 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-balance">
            Com a BUNKER, você ganha
          </h2>

          <div className="relative">
            {/* linha vertical */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/30 hidden md:block" />

            <div className="space-y-10">
              {gains.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex items-start gap-8 md:pl-16 relative">
                    {/* bolinha na linha */}
                    <div className="absolute left-0 top-1 hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary border-4 border-background">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    {/* ícone mobile */}
                    <div className="flex md:hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-heading mb-2">{item.title}</h3>
                      <p className="text-text text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Statement central */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-3 items-stretch">
            <div className="lg:col-span-2 flex flex-col justify-center">
              <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl text-balance">
                Enquanto o cenário digital evolui, sua empresa não pode ficar parada.
              </h2>
              <p className="text-text text-xl leading-relaxed mb-6">
                A BUNKER garante que você esteja sempre um passo à frente dos ataques — com{" "}
                <span className="text-white font-semibold">segurança, eficiência</span> e a expertise de quem vive
                proteção <span className="text-primary font-bold">24/7</span>.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <Shield className="h-8 w-8 text-primary shrink-0" />
                <div className="h-px flex-1 bg-white/10" />
              </div>
            </div>

            <Card className="bg-primary border-0">
              <CardContent className="p-10 flex flex-col justify-center h-full text-center">
                <p className="text-4xl font-bold text-white mb-2">24/7</p>
                <p className="text-white/80 text-lg font-medium mb-8">Monitoramento contínuo</p>
                <p className="text-3xl font-bold text-white mb-2">100%</p>
                <p className="text-white/80 text-lg font-medium mb-8">Controlado e seguro</p>
                <p className="text-3xl font-bold text-white mb-2">0</p>
                <p className="text-white/80 text-lg font-medium">Surpresas indesejadas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta-final" className="bg-[#0a0a0a] py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">
            BUNKER
          </p>
          <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-balance">
            Segurança que antecipa. Proteção que transforma.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg md:text-xl text-text leading-relaxed text-pretty">
            Entre em contato e descubra como a Emulação de Ataques da BUNKER pode revelar os pontos cegos da sua
            empresa antes que os hackers os encontrem.
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
