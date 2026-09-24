import { Bug, Globe, Lock, Cpu, Network, Atom, Braces, Route, ShieldAlert } from 'lucide-react'

// ============================================================
// EDITE AQUI: experimentos, testes e protótipos rápidos.
// area: 'web' | 'sec' | 'game'
// status: 'Concluído' | 'Em andamento' | 'Ideia'
// span: largura no grid (desktop)
// ============================================================

export const labs = [
  {
    slug: 'xss-playground',
    area: 'sec',
    icon: Bug,
    title: 'Playground de XSS',
    note: 'Ambiente local para testar payloads contra diferentes filtros de sanitização e ver onde cada um falha.',
    log: '14 payloads testados, 3 filtros comparados',
    status: 'Em andamento',
    span: 'lg:col-span-2',
  },
  {
    slug: 'css-grid-lab',
    area: 'web',
    icon: Globe,
    title: 'Layouts com grid',
    note: 'Container queries e subgrid em componentes reais.',
    log: '6 padrões de layout',
    status: 'Concluído',
  },
  {
    slug: 'jwt-inspector',
    area: 'sec',
    icon: Lock,
    title: 'Inspetor de JWT',
    note: 'Decodifica tokens e aponta má configuração, como alg none e expiração ausente.',
    log: '5 checagens implementadas',
    status: 'Em andamento',
  },
  {
    slug: 'boids-godot',
    area: 'game',
    icon: Cpu,
    title: 'Boids em Godot',
    note: 'Simulação de bando com separação, alinhamento e coesão.',
    log: '300 agentes a 60 fps',
    status: 'Concluído',
  },
  {
    slug: 'http-traffic-notes',
    area: 'sec',
    icon: Network,
    title: 'Análise de tráfego HTTP',
    note: 'Capturas no Wireshark para entender handshake TLS, cookies sem flag Secure e redirecionamentos.',
    log: '4 capturas documentadas',
    status: 'Em andamento',
    span: 'lg:col-span-2',
  },
  {
    slug: 'verlet-rope',
    area: 'game',
    icon: Atom,
    title: 'Corda com Verlet',
    note: 'Integração de Verlet em Unity com restrições de distância.',
    log: 'Estável até 200 segmentos',
    status: 'Concluído',
  },
  {
    slug: 'web-audio-synth',
    area: 'web',
    icon: Braces,
    title: 'Sintetizador web',
    note: 'Web Audio API controlada por componentes React.',
    log: '3 osciladores, 1 filtro',
    status: 'Concluído',
  },
  {
    slug: 'astar-visualizer',
    area: 'game',
    icon: Route,
    title: 'Visualizador de A*',
    note: 'Compara heurísticas (Manhattan, Euclidiana, Chebyshev) passo a passo em um grid interativo.',
    log: '3 heurísticas',
    status: 'Em andamento',
    span: 'lg:col-span-2',
  },
  {
    slug: 'csp-generator',
    area: 'sec',
    icon: ShieldAlert,
    title: 'Gerador de CSP',
    note: 'Sugere uma Content-Security-Policy a partir do que a página carrega.',
    log: 'Ainda no papel',
    status: 'Ideia',
  },
]
