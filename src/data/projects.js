// ============================================================
// CATÁLOGO E ROADMAP DE PROJETOS DO PORTFÓLIO
// Conforme você concluir cada projeto, substitua o link '#'
// pela URL real do seu repositório no GitHub (ex: 'https://github.com/lmedeirosl/...').
// ============================================================

export const webProjects = [
  // --- Projetos Existentes / Em Destaque ---
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
    demo: '#',
  },
  {
    title: 'Design system',
    description:
      'Biblioteca de componentes acessíveis com navegação por teclado, temas claro e escuro e documentação viva.',
    stack: ['React', 'TypeScript', 'Storybook'],
    github: '#',
    demo: '#',
  },

  // --- Novos Projetos do Roadmap ---
  {
    title: 'SaaS de monitoramento de uptime',
    description:
      'Plataforma de monitoramento de disponibilidade de APIs e websites com ping periódico, cálculo de latência e página pública de status.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Redis'],
    github: '#',
    demo: '#',
  },
  {
    title: 'E-commerce headless com checkout seguro',
    description:
      'Loja virtual de alta performance com carrinho persistente, controle de concorrência de estoque e integração de pagamento idempotente.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'Tailwind CSS'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Editor colaborativo em tempo real',
    description:
      'Editor de documentos estilo Notion/Docs com suporte a múltiplos usuários simultâneos, cursores sincronizados e controle de concorrência.',
    stack: ['React', 'WebSockets', 'TipTap', 'Node.js', 'Tailwind CSS'],
    github: '#',
    demo: '#',
  },
  {
    title: 'API Gateway & auth zero-trust',
    description:
      'Serviço central de autenticação com rotação de refresh tokens, hash Argon2, autenticação de dois fatores (2FA) e rate limiting via token bucket.',
    stack: ['Node.js', 'Fastify', 'Redis', 'PostgreSQL', 'Docker'],
    github: '#',
    demo: '#',
  },
  {
    title: 'DevOps & GitHub insights dashboard',
    description:
      'Painel analítico integrado à API do GitHub que calcula lead time de Pull Requests, frequência de commits, burndown e velocidade de equipe.',
    stack: ['React', 'TanStack Query', 'Recharts', 'Tailwind CSS', 'Vite'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Plataforma LMS com upload assíncrono',
    description:
      'Portal de aulas com streaming de vídeo, controle de permissões por perfil (RBAC) e upload direto para Cloudflare R2/S3 via URLs pré-assinadas.',
    stack: ['Next.js', 'TypeScript', 'Cloudflare R2', 'PostgreSQL', 'Prisma'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Showcase interativo 3D Web',
    description:
      'Aplicação web imersiva construída com React Three Fiber renderizando um ambiente 3D estilizado com iluminação dinâmica, sombras e interação com objetos.',
    stack: ['React', 'Three.js', 'React Three Fiber', 'Tailwind CSS'],
    github: '#',
    demo: '#',
  },
]

export const securityProjects = [
  // --- Projetos Existentes / Em Destaque ---
  {
    type: 'Write-up',
    title: 'SQL injection em formulário de login',
    description:
      'Exploração de injeção booleana e baseada em erro, seguida da correção com queries parametrizadas e comparação do antes e depois.',
    environment: 'Laboratório local (DVWA)',
    reference: 'OWASP A03: Injection',
    difficulty: 'Fácil',
    tags: ['SQLi', 'Burp Suite', 'Mitigação'],
    github: '#',
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
    github: '#',
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
    github: '#',
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
    github: '#',
    link: '#',
  },

  // --- Novos Projetos do Roadmap ---
  {
    type: 'Ferramenta',
    title: 'sec-headers-audit',
    description:
      'CLI em Python para auditoria automatizada de cabeçalhos de segurança (HSTS, CSP, X-Frame-Options) e análise de versões TLS com geração de relatório em Markdown.',
    environment: 'Hosts autorizados / CLI',
    reference: 'OWASP A05: Security Misconfiguration',
    difficulty: 'Intermediário',
    tags: ['Python', 'CLI', 'SSL/TLS', 'DevSecOps'],
    github: '#',
    link: '#',
  },
  {
    type: 'Lab',
    title: 'Exploração e mitigação de IDOR / BOLA',
    description:
      'Laboratório prático contendo API com Broken Object Level Authorization, simulação de adulteração de requisições e refatoração com controle de acesso contextual (ABAC).',
    environment: 'Laboratório Docker próprio',
    reference: 'OWASP API1: BOLA',
    difficulty: 'Intermediário',
    tags: ['API Security', 'IDOR', 'Docker', 'Mitigação'],
    github: '#',
    link: '#',
  },
  {
    type: 'Ferramenta',
    title: 'shadow-trap (SSH Honeypot)',
    description:
      'Honeypot leve em Python utilizando sockets e Paramiko para emular serviço SSH, capturar credenciais testadas por botnets e alertar via webhook.',
    environment: 'Ambiente controlado de teste',
    reference: 'MITRE ATT&CK T1110: Brute Force',
    difficulty: 'Intermediário',
    tags: ['Python', 'Honeypot', 'Threat Intelligence', 'Sockets'],
    github: '#',
    link: '#',
  },
  {
    type: 'Análise',
    title: 'Tráfego malicioso e exfiltração por DNS',
    description:
      'Análise forense de arquivo de captura PCAP contendo exfiltração de dados camuflada em requisições de DNS Tunneling, com extração de artefatos e identificação de IoCs.',
    environment: 'Captura de rede de laboratório',
    reference: 'MITRE ATT&CK T1071.004: DNS',
    difficulty: 'Avançado',
    tags: ['Wireshark', 'PCAP', 'Forense', 'Pyshark'],
    github: '#',
    link: '#',
  },
  {
    type: 'Write-up',
    title: 'SSRF contra metadados em cloud',
    description:
      'Demonstração em lab de webhook vulnerável explorado para consultar o endpoint de metadados internos (169.254.169.254), seguido da blindagem com whitelist estrita de IPs e resolução segura.',
    environment: 'Laboratório local com mock AWS',
    reference: 'OWASP A10: SSRF',
    difficulty: 'Intermediário',
    tags: ['SSRF', 'Cloud Security', 'Burp Suite', 'Mitigação'],
    github: '#',
    link: '#',
  },
  {
    type: 'Ferramenta',
    title: 'dep-sentinel (SCA automatizado)',
    description:
      'Script CLI que analisa manifests de dependências (package-lock.json e requirements.txt), consulta a base pública do OSV/NVD e aponta vulnerabilidades por criticidade CVSS.',
    environment: 'Pipelines CI/CD / CLI',
    reference: 'OWASP A06: Outdated Components',
    difficulty: 'Intermediário',
    tags: ['Python', 'SCA', 'DevSecOps', 'OSV API'],
    github: '#',
    link: '#',
  },
  {
    type: 'Write-up',
    title: 'Engenharia reversa e buffer overflow em Linux x86_64',
    description:
      'Desmontagem de binário em Ghidra e GDB/GEF, mapeamento de offset de memória até o registrador RIP, controle de fluxo de execução em laboratório e análise de defesas modernas (Canaries, NX, ASLR).',
    environment: 'VM Linux / GDB',
    reference: 'CWE-121: Buffer Overflow',
    difficulty: 'Avançado',
    tags: ['Ghidra', 'GDB', 'C', 'Reversing', 'Linux'],
    github: '#',
    link: '#',
  },
]

export const gameProjects = [
  // --- Projetos Existentes / Em Destaque ---
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
    demo: '#',
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

  // --- Novos Projetos do Roadmap (Unity & Blender) ---
  {
    engine: 'Unity',
    language: 'C#',
    title: 'Action RPG & combat prototype',
    description:
      'Sistema de combate fluído em terceira pessoa com combos sequenciais, esquiva com invulnerabilidade (i-frames), lock-on e hitboxes sincronizadas.',
    mechanics: [
      'State machine hierárquica para controle do jogador e IA',
      'Sistema de armas e estatísticas com ScriptableObjects',
      'Hitboxes acionadas dinamicamente via Animation Events',
    ],
    github: '#',
    demo: '#',
  },
  {
    engine: 'Unity',
    language: 'C#',
    title: 'Sistema de furtividade & IA sensorial',
    description:
      'Mecânicas de stealth onde guardas possuem campo de visão cônico e audição de passos/ruídos, alternando entre patrulha, suspeita e caça.',
    mechanics: [
      'Detecção visual com cones de visão e checagem de oclusão por Raycasts',
      'Propagação acústica por atenuação esférica de ruídos',
      'Patrulha inteligente e perseguição dinâmica com Unity NavMesh',
    ],
    github: '#',
    demo: '#',
  },
  {
    engine: 'Unity & Blender',
    language: 'C# / 3D Asset Kit',
    title: 'Dungeon crawler modular 3D',
    description:
      'Tileset modular 3D modelado no Blender e integrado na Unity com geração procedural de masmorras e baking de NavMesh em tempo de execução.',
    mechanics: [
      'Modular kit no Blender com snap de vértices e pivot alinhado',
      'Algoritmo de geração procedural por grid e salas conectadas',
      'Otimização com Mesh Combining e Occlusion Culling',
    ],
    github: '#',
    demo: '#',
    githubLabel: 'Repositório & Blend',
    demoLabel: 'Demo WebGL',
  },
  {
    engine: 'Blender 3D',
    language: '3D Art / PBR',
    title: 'Asset pack & diorama sci-fi / cyberpunk',
    description:
      'Conjunto de props detalhados (terminal de dados, drone e servidor de rede) com pipeline padrão da indústria: modelagem High-Poly, retopologia Low-Poly e bake PBR.',
    mechanics: [
      'Topologia limpa sem N-gons com densidade de texel consistente',
      'Unwrap UV otimizado com overlap em elementos simétricos',
      'Mapas PBR completos (Albedo, Normal, Roughness, Metallic, Emission)',
    ],
    github: '#',
    demo: '#',
    githubLabel: 'Arquivos .blend / OBJ',
    demoLabel: 'Visualizar 3D / Renders',
  },
  {
    engine: 'Unity',
    language: 'URP / Shader Graph',
    title: 'Showcase de shaders interativos',
    description:
      'Galeria de efeitos visuais e shaders customizados em Universal Render Pipeline para demonstrar renderização técnica e efeitos visuais avançados.',
    mechanics: [
      'Shader de água interativa com refração, profundidade e espuma',
      'Efeito de dissolução geométrica usando Perlin Noise e glow de emissão',
      'Efeito de holograma sci-fi com fresnel e scanlines dinâmicas',
    ],
    github: '#',
    demo: '#',
  },
  {
    engine: 'Unity',
    language: 'C#',
    title: 'Plataforma 2D de precisão (Custom Physics)',
    description:
      'Controlador de personagem 2D focado em resposta imediata e precisão milimétrica, sem a inércia indesejada da física padrão de Rigidbody2D.',
    mechanics: [
      'Raycast-based Character Controller customizado do zero',
      'Mecânicas de Jump Buffering e Coyote Time para extrema responsividade',
      'Mecânica de wall slide e wall jump com curvas matemáticas customizadas',
    ],
    github: '#',
    demo: '#',
  },
  {
    engine: 'Blender & Unity',
    language: 'Rigging / C#',
    title: 'Pipeline completo de personagem 3D',
    description:
      'Do conceito ao jogo: modelagem de personagem estilizado no Blender, esqueleto com controladores IK/FK, weight painting e configuração no Animator da Unity.',
    mechanics: [
      'Rig completo com controladores de cinemática inversa (IK)',
      'Ciclos de animação criados no Blender: Idle, Walk, Attack e Hit',
      'Configuração de Blend Trees e transições no Animator da Unity',
    ],
    github: '#',
    demo: '#',
    githubLabel: 'Arquivos .blend / Unity',
    demoLabel: 'Demo 3D',
  },
]
