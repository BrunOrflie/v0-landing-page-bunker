import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Shield, Server, Wifi, HardDrive, Users, Eye, Lock, Key, BookOpen, AlertTriangle, CheckCircle } from "lucide-react"
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

const mspServices = [
  { icon: Monitor, label: "Suporte técnico (Help Desk e On-site)" },
  { icon: Server, label: "Gerenciamento de computadores e servidores" },
  { icon: Wifi, label: "Administração de redes, Wi-Fi e firewalls" },
  { icon: HardDrive, label: "Backup e recuperação de desastres" },
  { icon: BookOpen, label: "Gestão de licenças e inventário de TI" },
]

const msspServices = [
  { icon: Shield, label: "Firewall gerenciado" },
  { icon: Lock, label: "EDR/Antivírus corporativo gerenciado" },
  { icon: Eye, label: "Monitoramento de logs (SIEM)" },
  { icon: Key, label: "Gestão de identidades e acessos (IAM/MFA)" },
  { icon: Users, label: "Treinamento anti-phishing" },
  { icon: AlertTriangle, label: "Resposta a incidentes" },
]

const plans = [
  {
    name: "Plano Essencial",
    desc: "Suporte + gestão de dispositivos + antivírus",
    items: ["Help Desk e suporte técnico", "Gerenciamento de dispositivos", "Antivírus corporativo"],
  },
  {
    name: "Plano Avançado",
    desc: "Inclui firewall, backup e monitoramento 24/7",
    items: ["Tudo do Essencial", "Firewall gerenciado", "Backup e recuperação", "Monitoramento 24/7"],
    featured: true,
  },
  {
    name: "Plano Segurança Total",
    desc: "Inclui SOC, SIEM, EDR, IAM e resposta a incidentes",
    items: ["Tudo do Avançado", "SOC dedicado", "SIEM e correlação de eventos", "EDR avançado", "IAM e MFA"],
  },
]

const diferenciais = [
  "Equipe certificada (Microsoft, Fortinet, CompTIA, Cisco)",
  "Atendimento 24/7, inclusive feriados",
  "Ferramentas profissionais de monitoramento e segurança",
  "Relatórios mensais de performance e ameaças",
  "Acompanhamento por gerente de conta dedicado",
]

const implantacao = [
  { step: "01", title: "Diagnóstico inicial", desc: "Avaliação completa do ambiente atual de TI" },
  { step: "02", title: "Plano de ação", desc: "Ajustes, melhorias e padronizações definidos" },
  { step: "03", title: "Implantação", desc: "Ferramentas, políticas e integrações configuradas" },
  { step: "04", title: "Operação contínua", desc: "Monitoramento, suporte e relatórios periódicos" },
]

export default function ServicosGerenciados() {
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
                  item.href === "/servicos-gerenciados"
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

      {/* Hero — fundo com grid de linhas, texto centralizado */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(#ff0909 1px, transparent 1px), linear-gradient(90deg, #ff0909 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container mx-auto max-w-6xl px-4 relative z-10 text-center">
          <div className="mb-6 inline-block border border-primary px-4 py-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              MSP / MSSP
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-balance text-white">
            Serviços Gerenciados de{" "}
            <span className="text-primary">TI e Segurança</span>
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg md:text-xl text-text leading-relaxed text-pretty">
            A BUNKER atua como parceiro estratégico, oferecendo visão completa de segurança, continuidade e governança de TI. Mais do que suporte: <span className="text-white font-semibold">inteligência, prevenção e resiliência tecnológica.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-base px-8 py-6 h-auto">
              <a href="#planos">VER PLANOS</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-base px-8 py-6 h-auto">
              <a href="#cta-final">FALE CONOSCO</a>
            </Button>
          </div>
        </div>
      </section>

      {/* MSP vs MSSP — duas colunas lado a lado */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-3xl font-bold text-heading md:text-4xl text-center text-balance">
            O que oferecemos
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* MSP */}
            <div className="border border-white/10 p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-12 w-12 flex items-center justify-center bg-primary">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">Gestão de TI</p>
                  <h3 className="text-xl font-bold text-heading">Serviços Gerenciados (MSP)</h3>
                </div>
              </div>
              <p className="text-text mb-6 leading-relaxed">
                Assumimos a responsabilidade pelo ambiente de TI do cliente, garantindo operações estáveis e seguras com previsibilidade de gastos mensais.
              </p>
              <ul className="space-y-3">
                {mspServices.map((s, i) => {
                  const Icon = s.icon
                  return (
                    <li key={i} className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-text text-sm">{s.label}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* MSSP */}
            <div className="border border-primary/40 p-8 bg-primary/5">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-12 w-12 flex items-center justify-center bg-primary">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">Segurança Avançada</p>
                  <h3 className="text-xl font-bold text-heading">Segurança Gerenciada (MSSP)</h3>
                </div>
              </div>
              <p className="text-text mb-6 leading-relaxed">
                Proteção avançada contra ameaças, ataques cibernéticos e vulnerabilidades com monitoramento contínuo e resposta ativa.
              </p>
              <ul className="space-y-3">
                {msspServices.map((s, i) => {
                  const Icon = s.icon
                  return (
                    <li key={i} className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-text text-sm">{s.label}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Planos — cards em 3 colunas */}
      <section id="planos" className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-3xl font-bold text-heading md:text-4xl text-center text-balance">
            Modelo de Contratação
          </h2>
          <p className="mb-12 text-center text-text text-lg">
            Mensalidade previsível, conforme volume e necessidades do cliente.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <Card
                key={i}
                className={`border ${plan.featured ? "border-primary bg-primary/10" : "border-white/10 bg-[#0a0a0a]"}`}
              >
                <CardContent className="p-8 flex flex-col h-full">
                  {plan.featured && (
                    <div className="mb-4 inline-block bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white self-start">
                      RECOMENDADO
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-heading mb-2">{plan.name}</h3>
                  <p className="text-text text-sm mb-6 leading-relaxed">{plan.desc}</p>
                  <ul className="space-y-3 flex-1">
                    {plan.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-text text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`mt-8 font-bold ${plan.featured ? "bg-primary text-white hover:bg-primary/90" : "bg-white/10 text-white hover:bg-white/20"}`}
                  >
                    <a href="#cta-final">SAIBA MAIS</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl text-balance">
                Nossos Diferenciais
              </h2>
              <ul className="space-y-4">
                {diferenciais.map((d, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-1 h-5 w-5 shrink-0 flex items-center justify-center bg-primary rounded-full">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </span>
                    <span className="text-text leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cronograma */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl text-balance">
                Cronograma de Implantação
              </h2>
              <div className="space-y-6">
                {implantacao.map((item, i) => (
                  <div key={i} className="flex items-start gap-6">
                    <span className="text-4xl font-bold text-primary/30 shrink-0 leading-none">{item.step}</span>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-text text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">BUNKER</p>
          <h2 className="mb-8 text-3xl font-bold text-heading md:text-4xl lg:text-5xl text-balance">
            Transforme sua TI em um ambiente seguro, padronizado e escalável.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-text leading-relaxed text-pretty">
            Fale com a nossa equipe e descubra o plano ideal para o tamanho e necessidade da sua empresa.
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-base md:text-lg px-10 py-6 h-auto">
            FALE COM UM ESPECIALISTA
          </Button>
        </div>
      </section>
    </main>
  )
}
