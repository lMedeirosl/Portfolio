// Cada área tem cor própria. As classes ficam completas aqui
// para o Tailwind conseguir detectá-las.
export const categories = {
  web: {
    label: 'Web Development',
    blurb:
      'Aplicações modernas em React com foco em arquitetura, componentização, desempenho e segurança.',
    text: 'text-web',
    bg: 'bg-web/10',
    bgSolid: 'bg-web',
    border: 'border-web/40',
    hoverBorder: 'hover:border-web/80',
  },
  sec: {
    label: 'Cybersecurity',
    blurb:
      'Estudo e prática: write-ups de CTF, análise de tráfego, OWASP Top 10 e ferramentas próprias em ambientes autorizados.',
    text: 'text-sec',
    bg: 'bg-sec/10',
    bgSolid: 'bg-sec',
    border: 'border-sec/40',
    hoverBorder: 'hover:border-sec/80',
  },
  game: {
    label: 'Game Development',
    blurb:
      'Protótipos em Unity e modelagem 3D no Blender para exercitar lógica de sistemas, shaders e física interativa.',
    text: 'text-game',
    bg: 'bg-game/10',
    bgSolid: 'bg-game',
    border: 'border-game/40',
    hoverBorder: 'hover:border-game/80',
  },
  neutral: {
    label: 'Geral',
    text: 'text-ink',
    bg: 'bg-raised',
    bgSolid: 'bg-muted',
    border: 'border-line',
    hoverBorder: 'hover:border-white/40',
  },
}
