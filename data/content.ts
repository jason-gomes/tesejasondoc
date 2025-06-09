// Arquivo para todo o conteúdo textual do site
// Facilita atualizações sem mexer na lógica ou estrutura

export const siteConfig = {
  title: "Escola e Instituição Total",
  subtitle: "Aproximações e distanciamentos na escolarização de crianças",
  description:
    "Uma análise interativa sobre as práticas de conformidade e a medicalização do fracasso escolar em escolas públicas brasileiras, baseada na tese de Jason Gomes Rodrigues Santos.",
  author: "Jason Gomes Rodrigues Santos",
  institution: "UNIFESP",
  year: "2021",
  thesisUrl: "https://repositorio.unifesp.br/server/api/core/bitstreams/01145e4e-94e0-4ea9-9717-bb2eaba8a160/content",
  licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR",
}

export const navItems = [
  { href: "#concepts", label: "Conceitos Teóricos" },
  { href: "#schools", label: "As Escolas" },
  { href: "#teachers", label: "As Professoras" },
  { href: "#logic", label: "Lógica da Medicalização" },
  { href: "#testing", label: "Avaliações" },
  { href: "#conclusion", label: "Conclusão" },
  { href: "#citation", label: "Como Citar" },
]

export const concepts = [
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

export const schools = [
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

export const teachers = [
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

export const medicalizationSteps = [
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

export const testingImpacts = [
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

export const conclusionContent = {
  title: "O Ponto Cego Institucional",
  paragraphs: [
    "A professora Pamela, com sua abordagem dialógica, pode suavizar a experiência de seus alunos, mas quando fala sobre aqueles com dificuldades, seu discurso se iguala ao da professora Fernanda e ao da gestão: a culpa é da criança ou da família, e a solução é um diagnóstico externo.",
    "Essa convergência revela o verdadeiro motor da instituição escolar: gerenciar o desempenho, e não necessariamente promover a aprendizagem. As avaliações padronizadas, como o IDEB, intensificam essa tendência, forçando as escolas a adotarem práticas que apagam a singularidade dos alunos em nome de metas e rankings.",
  ],
  highlight:
    'No fim, a escola "bem-sucedida" e a "malsucedida" usam a mesma lógica para lidar com quem não se encaixa, negando o direito à aprendizagem e reforçando seu papel de conformação social em detrimento da emancipação.',
}

export const getCitations = (currentDate: string) => ({
  abnt: `SANTOS, Jason Gomes Rodrigues. **Escola e Instituição Total**: aproximações e distanciamentos na escolarização de crianças. 2021. 189 f. Tese (Doutorado em Educação) - Escola de Filosofia, Letras e Ciências Humanas, Universidade Federal de São Paulo, Guarulhos, 2021. Disponível em: https://repositorio.unifesp.br/server/api/core/bitstreams/01145e4e-94e0-4ea9-9717-bb2eaba8a160/content. Acesso em: ${currentDate}.`,
  apa: `Santos, J. G. R. (2021). *Escola e Instituição Total: aproximações e distanciamentos na escolarização de crianças* [Tese de doutorado, Universidade Federal de São Paulo]. Repositório Institucional UNIFESP. https://repositorio.unifesp.br/server/api/core/bitstreams/01145e4e-94e0-4ea9-9717-bb2eaba8a160/content`,
  vancouver: `Santos JGR. Escola e Instituição Total: aproximações e distanciamentos na escolarização de crianças [tese]. Guarulhos: Universidade Federal de São Paulo, Escola de Filosofia, Letras e Ciências Humanas; 2021 [citado ${currentDate}]. Disponível em: https://repositorio.unifesp.br/server/api/core/bitstreams/01145e4e-94e0-4ea9-9717-bb2eaba8a160/content`,
  mla: `Santos, Jason Gomes Rodrigues. "Escola e Instituição Total: aproximações e distanciamentos na escolarização de crianças." Tese de doutorado, Universidade Federal de São Paulo, 2021. Repositório Institucional UNIFESP, https://repositorio.unifesp.br/server/api/core/bitstreams/01145e4e-94e0-4ea9-9717-bb2eaba8a160/content. Acesso em ${currentDate}.`,
})
