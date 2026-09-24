import {
  SiJavascript, SiTypescript, SiPython, SiGodotengine, SiUnity, SiBlender, SiGit,
  SiGithub, SiHtml5, SiCss, SiReact, SiTailwindcss, SiVite, SiNodedotjs, SiNextdotjs,
  SiLinux, SiGnubash, SiWireshark, SiKalilinux, SiBurpsuite, SiOwasp, SiDocker,
  SiFigma, SiDavinciresolve, SiVercel, SiMetasploit,
} from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'
import {
  Database, Network, Radar, Film, Puzzle, Atom, Workflow, Route, Accessibility, Server, Code,
} from 'lucide-react'

// Chave usada em src/data/skills.js => componente de ícone.
// Para adicionar um novo, importe o ícone acima e registre aqui.
const icons = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,
  csharp: TbBrandCSharp,
  godot: SiGodotengine,
  unity: SiUnity,
  blender: SiBlender,
  git: SiGit,
  github: SiGithub,
  html: SiHtml5,
  css: SiCss,
  react: SiReact,
  tailwind: SiTailwindcss,
  vite: SiVite,
  node: SiNodedotjs,
  nextjs: SiNextdotjs,
  linux: SiLinux,
  bash: SiGnubash,
  wireshark: SiWireshark,
  kali: SiKalilinux,
  burp: SiBurpsuite,
  owasp: SiOwasp,
  docker: SiDocker,
  figma: SiFigma,
  davinci: SiDavinciresolve,
  vercel: SiVercel,
  metasploit: SiMetasploit,
  vscode: VscVscode,
  sql: Database,
  network: Network,
  nmap: Radar,
  video: Film,
  puzzle: Puzzle,
  physics: Atom,
  workflow: Workflow,
  route: Route,
  a11y: Accessibility,
  api: Server,
}

export default function SkillIcon({ name, size = 16, className = '' }) {
  const Icon = icons[name] ?? Code
  return <Icon size={size} className={className} aria-hidden="true" />
}
