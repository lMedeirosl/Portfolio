// Cada área tem cor própria. As classes ficam completas aqui
// para o Tailwind conseguir detectá-las.
export const categories = {
  web: {
    label: 'Web Development',
    blurb:
      'Aplicações React com foco em componentização, desempenho e acessibilidade.',
    text: 'text-web',
    bg: 'bg-web/10',
    bgSolid: 'bg-web',
    border: 'border-web/40',
    hoverBorder: 'hover:border-web/60',
  },
  sec: {
    label: 'Cybersecurity',
    blurb:
      'Estudo e prática: write-ups de CTF, análise de vulnerabilidades e ferramentas próprias, sempre em ambientes autorizados.',
    text: 'text-sec',
    bg: 'bg-sec/10',
    bgSolid: 'bg-sec',
    border: 'border-sec/40',
    hoverBorder: 'hover:border-sec/60',
  },
  game: {
    label: 'Game Development',
    blurb:
      'Protótipos que servem para praticar lógica, física e arquitetura de sistemas.',
    text: 'text-game',
    bg: 'bg-game/10',
    bgSolid: 'bg-game',
    border: 'border-game/40',
    hoverBorder: 'hover:border-game/60',
  },
  neutral: {
    label: 'Geral',
    text: 'text-ink',
    bg: 'bg-raised',
    bgSolid: 'bg-muted',
    border: 'border-line',
    hoverBorder: 'hover:border-muted/60',
  },
}
