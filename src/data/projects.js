// ============================================================
// EDITE AQUI: substitua os projetos de exemplo pelos seus.
// Links com '#' aparecem como placeholder até você trocar.
// ============================================================

export const webProjects = [
  {
    title: 'Painel de métricas',
    description:
      'Dashboard com filtros por período, gráficos interativos e estado sincronizado com a URL. Componentes desacoplados e testados.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Recharts'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Plataforma de tarefas',
    description:
      'Aplicação full stack com autenticação, quadro kanban com drag and drop e atualização otimista da interface.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Encurtador de URLs',
    description:
      'Serviço com autenticação JWT, rate limiting e validação de entrada. Construído com a segurança da API como requisito desde o início.',
    stack: ['Node.js', 'Express', 'JWT', 'Redis'],
    github: '#',
  },
  {
    title: 'Design system',
    description:
      'Biblioteca de componentes acessíveis com navegação por teclado, temas claro e escuro e documentação viva.',
    stack: ['React', 'TypeScript', 'Storybook'],
    github: '#',
    demo: '#',
  },
]

export const securityProjects = [
  {
    type: 'Write-up',
    title: 'SQL injection em formulário de login',
    description:
      'Exploração de injeção booleana e baseada em erro, seguida da correção com queries parametrizadas e comparação do antes e depois.',
    environment: 'Laboratório local (DVWA)',
    reference: 'OWASP A03: Injection',
    difficulty: 'Fácil',
    tags: ['SQLi', 'Burp Suite', 'Mitigação'],
    link: '#',
  },
  {
    type: 'Análise',
    title: 'XSS refletido e armazenado',
    description:
      'Mapeamento de vetores, diferença entre contextos de saída (HTML, atributo, JS) e defesa em camadas com encoding, sanitização e CSP.',
    environment: 'Aplicação de teste própria',
    reference: 'OWASP A03: Injection',
    difficulty: 'Intermediário',
    tags: ['XSS', 'CSP', 'Sanitização'],
    link: '#',
  },
  {
    type: 'Ferramenta',
    title: 'port-checker',
    description:
      'Script em Python que verifica portas TCP abertas e identifica serviços por banner. Saída em JSON para uso em outros scripts.',
    environment: 'Somente hosts autorizados',
    reference: 'Reconhecimento de rede',
    difficulty: 'Básico',
    tags: ['Python', 'Sockets', 'CLI'],
    link: '#',
    note: 'Para uso apenas em ambientes próprios ou com autorização por escrito.',
  },
  {
    type: 'Write-up',
    title: 'Escalada de privilégios em Linux',
    description:
      'Enumeração de um host de CTF, identificação de binário SUID e regra de sudo mal configurada, com o caminho até a shell de root documentado.',
    environment: 'Máquina de CTF',
    reference: 'Enumeração e privesc',
    difficulty: 'Intermediário',
    tags: ['Linux', 'SUID', 'Enumeração'],
    link: '#',
  },
]

export const gameProjects = [
  {
    engine: 'Godot 4',
    language: 'GDScript',
    title: 'Dungeon runner 2D',
    description:
      'Roguelike de salas com combate em tempo real. O foco foi separar estado, entrada e animação do personagem.',
    mechanics: [
      'Geração procedural de salas por grafo',
      'Máquina de estados do jogador e dos inimigos',
      'Sistema de inventário baseado em resources',
    ],
    github: '#',
    demo: '#',
  },
  {
    engine: 'Unity',
    language: 'C#',
    title: 'Physics sandbox',
    description:
      'Caixa de areia para experimentar física com Rigidbody, juntas e forças customizadas.',
    mechanics: [
      'Controle de gravidade e atrito por objeto',
      'Corda e ponte com joints',
      'Ferramenta de arrastar com força proporcional',
    ],
    github: '#',
  },
  {
    engine: 'Unity',
    language: 'C#',
    title: 'Tower defense',
    description:
      'Protótipo com ondas configuráveis, economia e inimigos que recalculam rota quando o mapa muda.',
    mechanics: [
      'Pathfinding com A* em grid dinâmico',
      'Ondas definidas por ScriptableObjects',
      'Pool de objetos para projéteis',
    ],
    github: '#',
    demo: '#',
  },
]
