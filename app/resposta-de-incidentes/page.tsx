import { Button } from "@/components/ui/button"
import { Eye, ShieldOff, Wrench, RefreshCw, BookOpen } from "lucide-react"
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

const processos = [
  {
    icon: Eye,
    num: "1",
    title: "Detecção Rápida",
    desc: "Monitoramos continuamente os ambientes para identificar anomalias e sinais de atividade suspeita, reduzindo o tempo entre a ocorrência e a resposta.",
  },
  {
    icon: ShieldOff,
    num: "2",
    title: "Contenção Imediata",
    desc: "Atuamos rapidamente para limitar o alcance do incidente, evitando a propagação e reduzindo danos ao ambiente operacional.",
  },
  {
    icon: Wrench,
    num: "3",
    title: "Erradicação e Remediação",
    desc: "Buscamos a eliminação completa da ameaça, corrigindo vulnerabilidades, restaurando a integridade dos sistemas e reforçando controles de segurança.",
  },
  {
    icon: RefreshCw,
    num: "4",
    title: "Recuperação Segura",
    desc: "Auxiliamos na retomada das operações de forma segura, garantindo que todos os sistemas voltem a funcionar com confiabilidade.",
  },
  {
    icon: BookOpen,
    num: "5",
    title: "Aprendizado e Prevenção",
    desc: "Após cada incidente, realizamos uma análise detalhada para identificar causas raízes e propor melhorias que fortalecem a postura de segurança da organização.",
  },
]

export default function RespostaDeIncidentes() {
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
                  item.href === "/resposta-de-incidentes"
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

      {/* Hero — assimétrico com número grande de fundo */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-bold text-white/[0.02] select-none leading-none pointer-events-none hidden lg:block">
          IR
        </div>
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 border-l-4 border-primary pl-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Resposta de Incidentes
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-white text-balance">
              Compromisso e{" "}
              <span className="text-primary">Prioridades BUNKER</span>
            </h1>
            <p className="mb-6 text-lg md:text-xl text-text leading-relaxed text-pretty">
              A segurança cibernética tornou-se um dos pilares fundamentais para garantir a continuidade operacional e a proteção dos ativos digitais das organizações.
            </p>
            <p className="mb-10 text-lg text-text leading-relaxed">
              Em um cenário onde ameaças evoluem rapidamente, a capacidade de identificar, conter e remediar incidentes com agilidade é{" "}
              <span className="text-white font-semibold">decisiva para minimizar impactos</span> e recuperar ambientes comprometidos.
            </p>
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-base px-8 py-6 h-auto">
              <a href="#cta-final">FALE CONOSCO</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Processos — layout alternado esquerda/direita */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-3xl font-bold text-heading md:text-4xl text-balance">
            Na BUNKER, tratamos Resposta de Incidentes como{" "}
            <span className="text-primary">prioridade estratégica.</span>
          </h2>
          <p className="mb-16 text-text text-lg">Nossos processos seguem as melhores práticas do setor.</p>

          <div className="space-y-0">
            {processos.map((p, i) => {
              const Icon = p.icon
              const isEven = i % 2 === 0
              return (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-stretch border-b border-white/10 last:border-b-0 ${!isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* número + ícone */}
                  <div className="flex md:w-48 shrink-0 items-center justify-center gap-4 bg-primary/5 border-r border-white/10 p-8 md:flex-col md:gap-3">
                    <span className="text-5xl font-bold text-primary">{p.num}</span>
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  {/* conteúdo */}
                  <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-heading mb-3">{p.title}</h3>
                    <p className="text-text text-lg leading-relaxed max-w-xl">{p.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statement final */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-3 items-center">
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-3xl font-bold text-heading md:text-4xl text-balance">
                BUNKER: Liderança e Confiança em Momentos Críticos
              </h2>
              <p className="text-text text-lg leading-relaxed mb-4">
                A BUNKER está à frente dos desafios em segurança cibernética, oferecendo expertise, estrutura e profissionais altamente qualificados para lidar com qualquer situação crítica.
              </p>
              <p className="text-text text-lg leading-relaxed">
                Ao contar com a nossa equipe, sua empresa terá suporte especializado, decisões fundamentadas e respostas rápidas para proteger seus dados, sua reputação e suas operações.
              </p>
            </div>
            <div className="border border-primary p-8 text-center">
              <p className="text-2xl font-bold text-white mb-4 leading-snug">
                Em momentos de incidente, você não estará sozinho.
              </p>
              <p className="text-primary font-bold text-lg">A BUNKER está ao seu lado, preparada para agir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="bg-[#0a0a0a] py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">BUNKER</p>
          <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-balance">
            Resposta rápida quando cada segundo conta.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-text leading-relaxed text-pretty">
            Entre em contato com a equipe BUNKER e conheça nosso processo completo de Resposta a Incidentes.
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-base md:text-lg px-10 py-6 h-auto">
            FALE COM UM ESPECIALISTA
          </Button>
        </div>
      </section>
    </main>
  )
}
