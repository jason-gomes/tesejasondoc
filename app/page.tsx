"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Menu,
  X,
  Sun,
  Moon,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  TrendingDown,
  Users,
  Building,
  GraduationCap,
  MessageCircle,
  ArrowRight,
  AlertCircle,
  Search,
  FileText,
  AlertTriangle,
  Target,
  Eye,
  Copy,
  Check,
} from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [expandedConcept, setExpandedConcept] = useState<string | null>(null)
  const [activeTeacherView, setActiveTeacherView] = useState<"approach" | "dynamics">("approach")
  const [activeMedicalizationStep, setActiveMedicalizationStep] = useState<number | null>(null)
  const [activeCitationStyle, setActiveCitationStyle] = useState("abnt")
  const [copied, setCopied] = useState(false)
  const [currentUrl, setCurrentUrl] = useState("")
  const [currentDate, setCurrentDate] = useState("")
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href)
      const today = new Date()
      const day = String(today.getDate()).padStart(2, "0")
      const month = String(today.getMonth() + 1).padStart(2, "0")
      const year = today.getFullYear()
      setCurrentDate(`${day}/${month}/${year}`)
    }
  }, [])

  const handleScroll = useCallback(() => {
    const sections = ["concepts", "schools", "teachers", "logic", "testing", "conclusion", "citation"]
    const scrollPosition = window.scrollY + 100

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const scrollToSection = useCallback((href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }, [])

  const navItems = [
    { href: "#concepts", label: "Conceitos Teóricos" },
    { href: "#schools", label: "As Escolas" },
    { href: "#teachers", label: "As Professoras" },
    { href: "#logic", label: "Lógica da Medicalização" },
    { href: "#testing", label: "Avaliações" },
    { href: "#conclusion", label: "Conclusão" },
    { href: "#citation", label: "Como Citar" },
  ]

  const concepts = [
    {
      id: "total-institution",
      title: "Instituição Total",
      author: "Goffman",
      summary:
        "Local de residência e trabalho onde um grande número de indivíduos em situação semelhante, isolados da sociedade, levam uma vida fechada e formalmente administrada.",
      details:
        'Uma "instituição total" é definida pela quebra das barreiras entre as esferas da vida (dormir, brincar, trabalhar) e pela administração centralizada e formal de todas as atividades diárias para um grande grupo de indivíduos em situações semelhantes, isolados da sociedade mais ampla.',
      color: "blue",
    },
    {
      id: "mortification",
      title: "Mortificação do Eu",
      author: "Goffman",
      summary:
        "Processo que ataca a autoconcepção do indivíduo ao entrar na instituição, forçando-o a abandonar papéis anteriores e submeter-se às novas regras e hierarquias.",
      details:
        'Este processo descreve os ataques à autoconcepção e à "cultura aparente" de um indivíduo ao entrar na instituição, forçando-o a abandonar papéis anteriores e a se submeter às regras institucionais.',
      color: "amber",
    },
    {
      id: "staff-team",
      title: "Equipe Dirigente",
      author: "Goffman",
      summary:
        'Equipe que gerencia a instituição e trata os internos como "objetos" ou "produtos" a serem processados, mantendo uma clara distinção social e de poder.',
      details:
        'Refere-se à equipe responsável pela gestão da instituição, cujo trabalho envolve pessoas como "objetos e produtos". Este conceito é crucial para analisar os papéis da gestão escolar e dos professores.',
      color: "slate",
    },
  ]

  const schools = [
    {
      name: "Escola Alan de Castro",
      ideb: 6.9,
      meta: 5.5,
      status: "high",
      students: "~900",
      infrastructure: 'Favorável, percebida como "escola de elite"',
      staff: "Estável, professores experientes",
      quote:
        'A pressão por resultados leva a um foco no "treinamento" para os testes, como o SARESP, em vez de uma aprendizagem genuína.',
      color: "green",
    },
    {
      name: "Escola Zilma de Alencar",
      ideb: 5.4,
      meta: 5.4,
      status: "low",
      students: "~600",
      infrastructure: "Precária (sala de informática trancada, quadra interditada)",
      staff: "Alta rotatividade, professores temporários e sem experiência",
      quote:
        "A frustração é grande quando as metas não são atingidas. A sensação é de recomeçar do zero a cada ano, como o castigo de Sísifo.",
      color: "red",
    },
  ]

  const teachers = [
    {
      name: "Pamela",
      school: "IDEB Alto",
      color: "blue",
      approach: {
        vision: "Qualquer criança aprende, pode ter a síndrome que for. Ela sempre traz novidades.",
        strategy:
          "Empática e dialógica. Usa a própria história de dificuldade para se conectar e conecta a aprendizagem ao mundo dos alunos.",
      },
      dynamics: {
        keyword:
          'Diálogo. Usa a "palavra internamente persuasiva" (Bakhtin), onde os erros são oportunidades: "Quando erra, aprende".',
        interaction:
          "Incentiva os alunos a explicarem seu raciocínio. Não foca no erro e busca construir a autoconfiança.",
      },
    },
    {
      name: "Fernanda",
      school: "IDEB Baixo",
      color: "amber",
      approach: {
        vision: "Chegam com comportamento bem difícil. Acabou a hora de brincar. Aqui é sentar e fazer.",
        strategy:
          'Foco na disciplina e conformidade. Vê a educação infantil como "brincadeira" e estabelece uma fronteira rígida.',
      },
      dynamics: {
        keyword:
          'Obediência. Usa a "palavra autoritária" (Bakhtin), onde não há diálogo, apenas o cumprimento de ordens.',
        interaction:
          'A atividade é um "pretexto para o uso da palavra autoritária". Questionamentos são redirecionados para seguir regras.',
      },
    },
  ]

  const medicalizationSteps = [
    {
      id: 0,
      title: "Dificuldade de Aprendizagem",
      quotes: [
        {
          text: "A gente identifica as crianças com dificuldades, mas o que fazer com elas?",
          source: "Fala recorrente da gestão e professores. (Página 109)",
        },
      ],
    },
    {
      id: 1,
      title: '"Tateando no Escuro"',
      quotes: [
        {
          text: "A gente fica um pouco perdido [...] tateando no escuro [...] não sou especialista.",
          source: "Discurso da gestão. (Página 46)",
        },
      ],
    },
    {
      id: 2,
      title: "Externalização da Culpa",
      quotes: [
        {
          text: "Muitas vezes, é problema de estruturação de família [...] pais são mais ausentes.",
          source: "Fala da gestão. (Página 45)",
        },
      ],
    },
    {
      id: 3,
      title: 'Busca pelo "Laudo"',
      quotes: [
        {
          text: "Precisa de um diagnóstico médico [...] Tem que ter um laudo.",
          source: "Discurso da gestão. (Página 46)",
        },
      ],
    },
  ]

  const testingImpacts = [
    {
      title: "Interferência e Distorção das Práticas",
      description:
        "A tese evidencia como o uso do IDEB distorce o processo educacional, transformando-o em uma busca por conformidade.",
      quote:
        "Constatamos também que políticas educacionais que utilizam o IDEB como expressão de qualidade e eficácia institucional constituem, nessas escolas, interferências que distorcem suas práticas educativas.",
      source: "Página 5, Resumo",
      color: "red",
    },
    {
      title: "Pressão e Cobrança por Metas",
      description: "Gestores e professores sentem a pressão para que os alunos atinjam as metas das avaliações.",
      quote:
        "O importante é preparar os alunos para a escola atingir as metas. O que a gente pode fazer? É preparar esse aluno para chegar lá.",
      source: "Página 48, Fala da vice-diretora",
      color: "orange",
    },
  ]

  const citations = {
    abnt: `SANTOS, Jason Gomes Rodrigues. **Escola e Instituição Total**: Aproximações e distanciamentos na escolarização de crianças. [S. l.]: [s. n.], 2025. Disponível em: ${currentUrl}. Acesso em: ${currentDate}.`,
    apa: `Santos, J. G. R. (2025). *Escola e Instituição Total: Aproximações e distanciamentos na escolarização de crianças* [Artigo interativo baseado em tese de doutorado]. Disponível em ${currentUrl}.`,
    vancouver: `Santos JGR. Escola e Instituição Total: Aproximações e distanciamentos na escolarização de crianças [Internet]. [S. l.]: [s. n.]; 2025 [citado ${currentDate}]. Disponível em: ${currentUrl}`,
    mla: `Santos, Jason Gomes Rodrigues. "Escola e Instituição Total: Aproximações e distanciamentos na escolarização de crianças." Artigo interativo baseado em tese de doutorado, 2025, ${currentUrl}. Acesso em ${currentDate}.`,
  }

  const copyToClipboard = useCallback(async () => {
    try {
      const citation = citations[activeCitationStyle as keyof typeof citations]
      await navigator.clipboard.writeText(citation)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Falha ao copiar texto: ", err)
    }
  }, [activeCitationStyle])

  // Loading state for theme
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm" aria-hidden="true">
                  ET
                </span>
              </div>
              <span className="font-bold text-gray-900 dark:text-white">Escola e Instituição Total</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible:focus-visible",
                    activeSection === item.href.substring(1)
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800",
                  )}
                  aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
                >
                  {item.label}
                </button>
              ))}
              <div className="ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 focus-visible:focus-visible"
                  aria-label={`Alternar para tema ${theme === "dark" ? "claro" : "escuro"}`}
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 focus-visible:focus-visible"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Abrir menu de navegação"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
              <div className="flex flex-col space-y-2" role="menu">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium text-left transition-colors focus-visible:focus-visible",
                      activeSection === item.href.substring(1)
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800",
                    )}
                    role="menuitem"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Tema</span>
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 focus-visible:focus-visible"
                    aria-label={`Alternar para tema ${theme === "dark" ? "claro" : "escuro"}`}
                  >
                    {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4" aria-labelledby="hero-title">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1
                id="hero-title"
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              >
                Escola e{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Instituição Total
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Aproximações e distanciamentos na escolarização de crianças
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-12">
                Uma análise interativa sobre as práticas de conformidade e a medicalização do fracasso escolar em
                escolas públicas brasileiras, baseada na tese de Jason Gomes Rodrigues Santos.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-4">Acesse a Tese Completa</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Para uma leitura aprofundada e acesso a todos os detalhes da pesquisa original, você pode baixar a tese
                de doutorado completa no repositório da UNIFESP.
              </p>
              <a
                href="https://repositorio.unifesp.br/server/api/core/bitstreams/01145e4e-94e0-4ea9-9717-bb2eaba8a160/content"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors focus-visible:focus-visible"
                aria-label="Baixar tese completa em PDF (abre em nova aba)"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                Baixar Tese (PDF)
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Theoretical Concepts */}
        <section id="concepts" className="py-20 px-4" aria-labelledby="concepts-title">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 id="concepts-title" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                O Dilema da Escola Moderna
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A "forma escolar", por natureza, vive uma tensão fundamental: busca emancipar o indivíduo, mas, ao mesmo
                tempo, precisa conformá-lo às normas sociais.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {concepts.map((concept) => (
                <div
                  key={concept.id}
                  className={cn(
                    "transition-all duration-300 cursor-pointer rounded-lg border p-6 focus-visible:focus-visible",
                    concept.color === "blue"
                      ? "border-blue-200 bg-blue-50 hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-950/50 dark:hover:bg-blue-900/50"
                      : concept.color === "amber"
                        ? "border-amber-200 bg-amber-50 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950/50 dark:hover:bg-amber-900/50"
                        : "border-gray-200 bg-gray-50 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:bg-gray-700/50",
                  )}
                  onClick={() => setExpandedConcept(expandedConcept === concept.id ? null : concept.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      setExpandedConcept(expandedConcept === concept.id ? null : concept.id)
                    }
                  }}
                  aria-expanded={expandedConcept === concept.id}
                  aria-controls={`concept-details-${concept.id}`}
                >
                  <h3
                    className={cn(
                      "text-xl font-bold mb-2",
                      concept.color === "blue"
                        ? "text-blue-800 dark:text-blue-300"
                        : concept.color === "amber"
                          ? "text-amber-800 dark:text-amber-300"
                          : "text-gray-800 dark:text-gray-300",
                    )}
                  >
                    {concept.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">({concept.author})</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{concept.summary}</p>

                  <div className="w-full flex items-center justify-between text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <span>{expandedConcept === concept.id ? "Mostrar Menos" : "Saiba Mais"}</span>
                    {expandedConcept === concept.id ? (
                      <ChevronUp className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    )}
                  </div>

                  {expandedConcept === concept.id && (
                    <div
                      id={`concept-details-${concept.id}`}
                      className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 animate-fade-in"
                    >
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{concept.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* School Comparison */}
        <section id="schools" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/30" aria-labelledby="schools-title">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 id="schools-title" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                As Escolas em Foco: Sucesso no Papel vs. Realidade
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A pesquisa comparou duas escolas com desempenhos muito diferentes no IDEB. Uma, considerada "de
                sucesso", e outra, com dificuldades.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {schools.map((school) => (
                <article
                  key={school.name}
                  className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
                >
                  <header className="flex items-center gap-3 mb-4">
                    <div
                      className={cn(
                        "p-2 rounded-lg",
                        school.color === "green"
                          ? "bg-green-100 dark:bg-green-900/30"
                          : "bg-red-100 dark:bg-red-900/30",
                      )}
                      aria-hidden="true"
                    >
                      {school.color === "green" ? (
                        <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                      ) : (
                        <TrendingDown className="h-6 w-6 text-red-600 dark:text-red-400" />
                      )}
                    </div>
                    <h3
                      className={cn(
                        "text-xl font-bold",
                        school.color === "green"
                          ? "text-green-800 dark:text-green-300"
                          : "text-red-800 dark:text-red-300",
                      )}
                    >
                      {school.name}
                    </h3>
                  </header>

                  <dl className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-gray-500" aria-hidden="true" />
                      <dt className="font-medium text-gray-900 dark:text-white">IDEB:</dt>
                      <dd className="text-gray-700 dark:text-gray-300">
                        {school.ideb} ({school.status === "high" ? "Acima" : "Abaixo"} da meta)
                      </dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-500" aria-hidden="true" />
                      <dt className="font-medium text-gray-900 dark:text-white">Alunos:</dt>
                      <dd className="text-gray-700 dark:text-gray-300">{school.students}</dd>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="h-4 w-4 text-gray-500 mt-1" aria-hidden="true" />
                      <div>
                        <dt className="font-medium text-gray-900 dark:text-white">Infraestrutura:</dt>
                        <dd className="text-sm text-gray-600 dark:text-gray-400 mt-1">{school.infrastructure}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <GraduationCap className="h-4 w-4 text-gray-500 mt-1" aria-hidden="true" />
                      <div>
                        <dt className="font-medium text-gray-900 dark:text-white">Corpo Docente:</dt>
                        <dd className="text-sm text-gray-600 dark:text-gray-400 mt-1">{school.staff}</dd>
                      </div>
                    </div>
                  </dl>

                  <footer className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <blockquote className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">
                      "{school.quote}"
                    </blockquote>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Teacher Analysis */}
        <section id="teachers" className="py-20 px-4" aria-labelledby="teachers-title">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 id="teachers-title" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                O Olhar das Professoras
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                As práticas em sala de aula revelam as tensões entre a pedagogia individual e a pressão institucional.
              </p>

              <div
                className="flex justify-center gap-2"
                role="tablist"
                aria-label="Visualizações da análise das professoras"
              >
                <button
                  onClick={() => setActiveTeacherView("approach")}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors focus-visible:focus-visible",
                    activeTeacherView === "approach"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600",
                  )}
                  role="tab"
                  aria-selected={activeTeacherView === "approach"}
                  aria-controls="teacher-content"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Abordagem Pedagógica
                </button>
                <button
                  onClick={() => setActiveTeacherView("dynamics")}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors focus-visible:focus-visible",
                    activeTeacherView === "dynamics"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600",
                  )}
                  role="tab"
                  aria-selected={activeTeacherView === "dynamics"}
                  aria-controls="teacher-content"
                >
                  <Users className="h-4 w-4" aria-hidden="true" />
                  Dinâmica em Sala
                </button>
              </div>
            </div>

            <div id="teacher-content" className="grid md:grid-cols-2 gap-8" role="tabpanel">
              {teachers.map((teacher) => (
                <article
                  key={teacher.name}
                  className={cn(
                    "transition-all duration-300 rounded-lg border p-6",
                    teacher.color === "blue"
                      ? "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30"
                      : "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30",
                  )}
                >
                  <header className="mb-4">
                    <h3
                      className={cn(
                        "text-2xl font-bold mb-2",
                        teacher.color === "blue"
                          ? "text-blue-800 dark:text-blue-300"
                          : "text-amber-800 dark:text-amber-300",
                      )}
                    >
                      {teacher.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">({teacher.school})</p>
                  </header>

                  {activeTeacherView === "approach" && (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Visão do Aluno:</h4>
                        <blockquote
                          className={cn(
                            "border-l-4 pl-4 italic text-gray-600 dark:text-gray-400",
                            teacher.color === "blue"
                              ? "border-blue-200 dark:border-blue-700"
                              : "border-amber-200 dark:border-amber-700",
                          )}
                        >
                          "{teacher.approach.vision}"
                        </blockquote>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Estratégia:</h4>
                        <p className="text-gray-700 dark:text-gray-300">{teacher.approach.strategy}</p>
                      </div>
                    </div>
                  )}

                  {activeTeacherView === "dynamics" && (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Palavra-Chave:</h4>
                        <blockquote
                          className={cn(
                            "border-l-4 pl-4 italic text-gray-600 dark:text-gray-400",
                            teacher.color === "blue"
                              ? "border-blue-200 dark:border-blue-700"
                              : "border-amber-200 dark:border-amber-700",
                          )}
                        >
                          {teacher.dynamics.keyword}
                        </blockquote>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Interação:</h4>
                        <p className="text-gray-700 dark:text-gray-300">{teacher.dynamics.interaction}</p>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Medicalization Logic */}
        <section id="logic" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/30" aria-labelledby="logic-title">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 id="logic-title" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                A Lógica da Medicalização: Culpando o Indivíduo
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Apesar das diferenças, as escolas convergem em um ponto crucial: como lidam com o fracasso escolar.
                Clique nos passos para ver como essa lógica se desenrola.
              </p>
            </div>

            <div className="mb-12">
              <div
                className="flex flex-col lg:flex-row items-center justify-center gap-4"
                role="group"
                aria-label="Passos da lógica de medicalização"
              >
                {medicalizationSteps.map((step, index) => (
                  <div key={step.id} className="flex items-center gap-4">
                    <button
                      onClick={() => setActiveMedicalizationStep(activeMedicalizationStep === step.id ? null : step.id)}
                      className={cn(
                        "h-24 w-60 flex flex-col items-center justify-center gap-2 rounded-lg border transition-all focus-visible:focus-visible",
                        activeMedicalizationStep === step.id
                          ? "bg-blue-600 text-white border-blue-600 ring-2 ring-blue-300"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700",
                      )}
                      aria-expanded={activeMedicalizationStep === step.id}
                      aria-controls="medicalization-explanation"
                    >
                      {index === 0 && <AlertCircle className="h-6 w-6" aria-hidden="true" />}
                      {index === 1 && <Search className="h-6 w-6" aria-hidden="true" />}
                      {index === 2 && <ExternalLink className="h-6 w-6" aria-hidden="true" />}
                      {index === 3 && <FileText className="h-6 w-6" aria-hidden="true" />}
                      <span className="text-sm font-medium text-center leading-tight">{step.title}</span>
                    </button>
                    {index < medicalizationSteps.length - 1 && (
                      <ArrowRight className="h-6 w-6 text-blue-600 hidden lg:block" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div
              id="medicalization-explanation"
              className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-8 min-h-[300px]"
              role="region"
              aria-live="polite"
            >
              {activeMedicalizationStep !== null ? (
                <div className="animate-fade-in">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    {medicalizationSteps[activeMedicalizationStep].title}
                  </h3>
                  <div className="space-y-6">
                    {medicalizationSteps[activeMedicalizationStep].quotes.map((quote, index) => (
                      <figure key={index} className="border-l-4 border-blue-300 dark:border-blue-700 pl-6">
                        <blockquote className="text-gray-700 dark:text-gray-300 italic mb-2 leading-relaxed">
                          "{quote.text}"
                        </blockquote>
                        <figcaption className="text-sm text-gray-500 dark:text-gray-400">{quote.source}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-center">
                  <p className="text-gray-500 dark:text-gray-400 italic text-lg">
                    Clique em um passo para ver a explicação detalhada.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Standardized Testing Impact */}
        <section id="testing" className="py-20 px-4" aria-labelledby="testing-title">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 id="testing-title" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                O Impacto das Avaliações Padronizadas
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                As políticas educacionais baseadas em métricas como o IDEB exercem uma profunda influência sobre as
                práticas escolares.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testingImpacts.map((impact, index) => (
                <article
                  key={index}
                  className={cn(
                    "rounded-lg border p-6 hover:shadow-lg transition-all duration-300",
                    impact.color === "red"
                      ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30"
                      : "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30",
                  )}
                >
                  <header className="flex items-center gap-3 mb-4">
                    <div
                      className={cn(
                        "p-2 rounded-lg",
                        impact.color === "red"
                          ? "bg-red-100 dark:bg-red-900/50"
                          : "bg-orange-100 dark:bg-orange-900/50",
                      )}
                      aria-hidden="true"
                    >
                      {impact.color === "red" ? (
                        <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
                      ) : (
                        <Target className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                      )}
                    </div>
                    <h3
                      className={cn(
                        "text-xl font-bold",
                        impact.color === "red"
                          ? "text-red-800 dark:text-red-300"
                          : "text-orange-800 dark:text-orange-300",
                      )}
                    >
                      {impact.title}
                    </h3>
                  </header>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{impact.description}</p>

                  <footer className="pt-4 border-t border-gray-200 dark:border-gray-600">
                    <blockquote className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                      "{impact.quote}"
                    </blockquote>
                    <cite className="text-xs text-gray-500 dark:text-gray-500">({impact.source})</cite>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section
          id="conclusion"
          className="py-20 px-4 bg-gray-50 dark:bg-gray-800/30"
          aria-labelledby="conclusion-title"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 id="conclusion-title" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Conclusão: A Convergência para o Totalitarismo
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A descoberta central da tese é que, apesar das diferenças de IDEB, infraestrutura e até de algumas
                práticas pedagógicas, as duas escolas se aproximam em suas estratégias totalizadoras.
              </p>
            </div>

            <article className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-8">
              <header className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/50" aria-hidden="true">
                  <Eye className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-200">O Ponto Cego Institucional</h3>
              </header>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  A professora Pamela, com sua abordagem dialógica, pode suavizar a experiência de seus alunos, mas
                  quando fala sobre aqueles com dificuldades, seu discurso se iguala ao da professora Fernanda e ao da
                  gestão: a culpa é da criança ou da família, e a solução é um diagnóstico externo.
                </p>
                <p>
                  Essa convergência revela o verdadeiro motor da instituição escolar: gerenciar o desempenho, e não
                  necessariamente promover a aprendizagem. As avaliações padronizadas, como o IDEB, intensificam essa
                  tendência, forçando as escolas a adotarem práticas que apagam a singularidade dos alunos em nome de
                  metas e rankings.
                </p>
                <div className="bg-white/50 dark:bg-gray-900/50 p-6 rounded-lg border border-amber-200 dark:border-amber-700">
                  <p className="font-bold text-lg text-center text-amber-800 dark:text-amber-200">
                    No fim, a escola "bem-sucedida" e a "malsucedida" usam a mesma lógica para lidar com quem não se
                    encaixa, negando o direito à aprendizagem e reforçando seu papel de conformação social em detrimento
                    da emancipação.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Citation */}
        <section id="citation" className="py-20 px-4" aria-labelledby="citation-title">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 id="citation-title" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Como Citar este Artigo Interativo
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Este conteúdo é uma adaptação interativa da tese de doutorado de Jason Gomes Rodrigues Santos. Sinta-se
                à vontade para utilizá-lo, desde que cite a fonte conforme as regras de licenciamento.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <article className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Licença Creative Commons</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Este conteúdo está licenciado sob uma Licença Creative Commons
                  Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0).
                </p>
                <a
                  href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium focus-visible:focus-visible"
                >
                  Ver licença <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>

              <article className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Sugestões de Citação</h3>
                <div className="flex flex-wrap gap-2 mb-4" role="tablist" aria-label="Estilos de citação">
                  {["abnt", "apa", "vancouver", "mla"].map((style) => (
                    <button
                      key={style}
                      onClick={() => setActiveCitationStyle(style)}
                      className={cn(
                        "px-3 py-1 rounded text-sm font-medium transition-colors focus-visible:focus-visible",
                        activeCitationStyle === style
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600",
                      )}
                      role="tab"
                      aria-selected={activeCitationStyle === style}
                      aria-controls="citation-content"
                    >
                      {style.toUpperCase()}
                    </button>
                  ))}
                </div>

                <div
                  id="citation-content"
                  className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-4"
                  role="tabpanel"
                  aria-label={`Citação no formato ${activeCitationStyle.toUpperCase()}`}
                >
                  <p className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-300">
                    {citations[activeCitationStyle as keyof typeof citations]}
                  </p>
                </div>

                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors focus-visible:focus-visible"
                  aria-label={copied ? "Citação copiada" : "Copiar citação para área de transferência"}
                >
                  {copied ? (
                    <Check className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Copy className="h-4 w-4" aria-hidden="true" />
                  )}
                  {copied ? "Copiado!" : "Copiar"}
                </button>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="leading-relaxed">
            Aplicação web interativa desenvolvida com base na tese de doutorado de{" "}
            <span className="font-semibold text-gray-900 dark:text-white">Jason Gomes Rodrigues Santos</span> (UNIFESP,
            2021).
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
            Redesenhado para melhor experiência do usuário e acessibilidade.
          </p>
        </div>
      </footer>
    </div>
  )
}
