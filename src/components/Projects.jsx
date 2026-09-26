import { useRef, useState } from 'react'
import { Code2, ShieldCheck, Gamepad2 } from 'lucide-react'
import Section from './Section'
import WebCard from './cards/WebCard'
import SecurityCard from './cards/SecurityCard'
import GameCard from './cards/GameCard'
import { categories } from '../data/categories'
import { webProjects, securityProjects, gameProjects } from '../data/projects'

const tabs = [
  { key: 'web', icon: Code2, items: webProjects, Card: WebCard },
  { key: 'sec', icon: ShieldCheck, items: securityProjects, Card: SecurityCard },
  { key: 'game', icon: Gamepad2, items: gameProjects, Card: GameCard },
]

export default function Projects() {
  const [active, setActive] = useState('web')
  const refs = useRef({})
  const current = tabs.find((t) => t.key === active)
  const cat = categories[active]

  // Navegação por teclado no padrão WAI-ARIA para tabs
  function onKeyDown(e) {
    const i = tabs.findIndex((t) => t.key === active)
    let next = i
    if (e.key === 'ArrowRight') next = (i + 1) % tabs.length
    else if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = tabs.length - 1
    else return
    e.preventDefault()
    const key = tabs[next].key
    setActive(key)
    refs.current[key]?.focus()
  }

  return (
    <Section
      id="projetos"
      title="Projetos"
      description="Web é o meu foco principal. Segurança e jogos completam o repertório."
    >
      <div
        role="tablist"
        aria-label="Áreas de projeto"
        onKeyDown={onKeyDown}
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0"
      >
        {tabs.map(({ key, icon: Icon, items }) => {
          const c = categories[key]
          const selected = key === active
          return (
            <button
              key={key}
              ref={(el) => (refs.current[key] = el)}
              role="tab"
              id={`tab-${key}`}
              aria-selected={selected}
              aria-controls={`painel-${key}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(key)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors ${
                selected
                  ? `${c.border} ${c.bg} text-ink`
                  : 'border-line text-muted hover:border-muted/50 hover:text-ink'
              }`}
            >
              <Icon size={16} className={selected ? c.text : ''} aria-hidden="true" />
              {c.label}
              <span className="font-mono text-xs text-muted">{items.length}</span>
            </button>
          )
        })}
      </div>

      <div
        key={active}
        role="tabpanel"
        id={`painel-${active}`}
        aria-labelledby={`tab-${active}`}
        className="mt-8 animate-rise"
      >
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted">{cat.blurb}</p>
        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {current.items.map((project) => (
            <current.Card key={project.title} project={project} />
          ))}
        </div>
      </div>
    </Section>
  )
}
