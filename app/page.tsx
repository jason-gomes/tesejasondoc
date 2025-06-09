"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Menu,
  X,
  Sun,
  Moon,
  Download,
  ExternalLink,
  MessageCircle,
  Users,
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
import { ConceptCard } from "@/components/concept-card"
import { SchoolCard } from "@/components/school-card"
import { TeacherCard } from "@/components/teacher-card"
import { SectionHeader } from "@/components/section-header"
import {
  siteConfig,
  navItems,
  concepts,
  schools,
  teachers,
  medicalizationSteps,
  testingImpacts,
  conclusionContent,
  getCitations,
} from "@/data/content"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [activeTeacherView, setActiveTeacherView] = useState<"approach" | "dynamics">("approach")
  const [activeMedicalizationStep, setActiveMedicalizationStep] = useState<number | null>(null)
  const [activeCitationStyle, setActiveCitationStyle] = useState("abnt")
  const [copied, setCopied] = useState(false)
  const [currentDate, setCurrentDate] = useState("")
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") {
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

  const citations = getCitations(currentDate)

  const copyToClipboard = useCallback(async () => {
    try {
      const citation = citations[activeCitationStyle as keyof typeof citations]
      await navigator.clipboard.writeText(citation)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Falha ao copiar texto: ", err)
    }
  }, [activeCitationStyle, citations])

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
              <span className="font-bold text-gray-900 dark:text-white">{siteConfig.title}</span>
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
                {siteConfig.title.split(" e ")[0]} e{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  {siteConfig.title.split(" e ")[1]}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                {siteConfig.subtitle}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-12">
                {siteConfig.description}
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-4">Acesse a Tese Completa</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Para uma leitura aprofundada e acesso a todos os detalhes da pesquisa original, você pode baixar a tese
                de doutorado completa no repositório da UNIFESP.
              </p>
              <a
                href={siteConfig.thesisUrl}
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
            <SectionHeader
              id="concepts-title"
              title="O Dilema da Escola Moderna"
              description='A "forma escolar", por natureza, vive uma tensão fundamental: busca emancipar o indivíduo, mas, ao mesmo tempo, precisa conformá-lo às normas sociais.'
            />

            <div className="grid md:grid-cols-3 gap-8">
              {concepts.map((concept) => (
                <ConceptCard key={concept.id} {...concept} />
              ))}
            </div>
          </div>
        </section>

        {/* School Comparison */}
        <section id="schools" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/30" aria-labelledby="schools-title">
          <div className="container mx-auto max-w-6xl">
            <SectionHeader
              id="schools-title"
              title="As Escolas em Foco: Sucesso no Papel vs. Realidade"
              description='A pesquisa comparou duas escolas com desempenhos muito diferentes no IDEB. Uma, considerada "de sucesso", e outra, com dificuldades.'
            />

            <div className="grid md:grid-cols-2 gap-8">
              {schools.map((school) => (
                <SchoolCard key={school.name} {...school} />
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
                <TeacherCard key={teacher.name} {...teacher} activeView={activeTeacherView} />
              ))}
            </div>
          </div>
        </section>

        {/* Medicalization Logic */}
        <section id="logic" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/30" aria-labelledby="logic-title">
          <div className="container mx-auto max-w-6xl">
            <SectionHeader
              id="logic-title"
              title="A Lógica da Medicalização: Culpando o Indivíduo"
              description="Apesar das diferenças, as escolas convergem em um ponto crucial: como lidam com o fracasso escolar. Clique nos passos para ver como essa lógica se desenrola."
            />

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
            <SectionHeader
              id="testing-title"
              title="O Impacto das Avaliações Padronizadas"
              description="As políticas educacionais baseadas em métricas como o IDEB exercem uma profunda influência sobre as práticas escolares."
            />

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
            <SectionHeader
              id="conclusion-title"
              title="Conclusão: A Convergência para o Totalitarismo"
              description="A descoberta central da tese é que, apesar das diferenças de IDEB, infraestrutura e até de algumas práticas pedagógicas, as duas escolas se aproximam em suas estratégias totalizadoras."
            />

            <article className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-8">
              <header className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/50" aria-hidden="true">
                  <Eye className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-200">{conclusionContent.title}</h3>
              </header>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {conclusionContent.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <div className="bg-white/50 dark:bg-gray-900/50 p-6 rounded-lg border border-amber-200 dark:border-amber-700">
                  <p className="font-bold text-lg text-center text-amber-800 dark:text-amber-200">
                    {conclusionContent.highlight}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Citation */}
        <section id="citation" className="py-20 px-4" aria-labelledby="citation-title">
          <div className="container mx-auto max-w-6xl">
            <SectionHeader
              id="citation-title"
              title="Como Citar este Artigo Interativo"
              description="Para citar a tese original de doutorado de Jason Gomes Rodrigues Santos, defendida na UNIFESP em 2021, utilize uma das formatações abaixo conforme as normas de sua instituição."
            />

            <div className="grid md:grid-cols-2 gap-8">
              <article className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Licença Creative Commons</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Este conteúdo está licenciado sob uma Licença Creative Commons
                  Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0).
                </p>
                <a
                  href={siteConfig.licenseUrl}
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
            <span className="font-semibold text-gray-900 dark:text-white">{siteConfig.author}</span> (
            {siteConfig.institution},{siteConfig.year}).
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
            Redesenhado para melhor experiência do usuário e acessibilidade.
          </p>
        </div>
      </footer>
    </div>
  )
}
