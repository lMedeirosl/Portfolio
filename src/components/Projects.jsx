import { useEffect, useRef, useState, useCallback } from 'react'
import { Code2, ShieldCheck, Gamepad2, ChevronLeft, ChevronRight, RotateCw } from 'lucide-react'
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
  const [currentCol, setCurrentCol] = useState(1)

  const reelRef = useRef(null)
  const tabsRef = useRef({})

  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)

  const current = tabs.find((t) => t.key === active)
  const cat = categories[active]
  const totalCols = Math.ceil(current.items.length / 2)

  // 3 Repetições idênticas para criar a Prateleira Circular Infinita (360° Loop)
  const circularItems = [
    ...current.items.map((item, idx) => ({ ...item, loopKey: `set1-${idx}-${item.title}` })),
    ...current.items.map((item, idx) => ({ ...item, loopKey: `set2-${idx}-${item.title}` })),
    ...current.items.map((item, idx) => ({ ...item, loopKey: `set3-${idx}-${item.title}` })),
  ]

  // Mantém a rolagem sempre no ciclo infinito e calcula a coluna ativa
  const updateScrollState = useCallback(() => {
    const el = reelRef.current
    if (!el) return

    const singleSetWidth = el.scrollWidth / 3
    if (singleSetWidth <= 0) return

    // Reajuste invisível quando o usuário atinge as extremidades (Loop Infinito)
    if (el.scrollLeft < singleSetWidth * 0.25) {
      el.scrollLeft += singleSetWidth
    } else if (el.scrollLeft > singleSetWidth * 1.75) {
      el.scrollLeft -= singleSetWidth
    }

    const firstCard = el.firstElementChild
    const colWidth = firstCard ? firstCard.getBoundingClientRect().width + 16 : 380
    const offsetInSet = ((el.scrollLeft - singleSetWidth) % singleSetWidth + singleSetWidth) % singleSetWidth
    const col = (Math.round(offsetInSet / colWidth) % totalCols) + 1
    setCurrentCol(col)
  }, [totalCols])

  // Ao trocar de aba ou montar, centraliza a prateleira no Set 2 (meio do loop)
  useEffect(() => {
    const el = reelRef.current
    if (!el) return

    const centerScroll = () => {
      const singleSetWidth = el.scrollWidth / 3
      if (singleSetWidth > 0) {
        el.scrollLeft = singleSetWidth
        updateScrollState()
      }
    }

    // Aguarda layout dos cards
    const timer = setTimeout(centerScroll, 40)
    return () => clearTimeout(timer)
  }, [active, updateScrollState])

  // Gira a prateleira circular continuamente
  function scrollByCols(direction = 1) {
    const el = reelRef.current
    if (!el) return

    const singleSetWidth = el.scrollWidth / 3
    // Normalização prévia para garantir que o scrollBy nunca trave
    if (direction < 0 && el.scrollLeft < singleSetWidth * 0.45) {
      el.scrollLeft += singleSetWidth
    } else if (direction > 0 && el.scrollLeft > singleSetWidth * 1.55) {
      el.scrollLeft -= singleSetWidth
    }

    const firstCard = el.firstElementChild
    const colWidth = firstCard ? firstCard.getBoundingClientRect().width + 16 : 380
    const delta = colWidth * 2 * direction
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  // Interação de arrastar com o mouse (Drag to scroll contínuo)
  function handleMouseDown(e) {
    const el = reelRef.current
    if (!el) return
    isDraggingRef.current = true
    startXRef.current = e.pageX - el.offsetLeft
    scrollLeftRef.current = el.scrollLeft
  }

  function handleMouseMove(e) {
    if (!isDraggingRef.current) return
    const el = reelRef.current
    if (!el) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = (x - startXRef.current) * 1.3
    el.scrollLeft = scrollLeftRef.current - walk
    updateScrollState()
  }

  function handleMouseUp() {
    isDraggingRef.current = false
  }

  // Navegação por teclado nas tabs
  function onTabKeyDown(e) {
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
    tabsRef.current[key]?.focus()
  }

  return (
    <Section
      id="projetos"
      title="Projetos"
      description="Web é o meu foco principal. Segurança e jogos completam o repertório."
    >
      {/* Abas das Áreas */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          role="tablist"
          aria-label="Áreas de projeto"
          onKeyDown={onTabKeyDown}
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0"
        >
          {tabs.map(({ key, icon: Icon, items }) => {
            const c = categories[key]
            const selected = key === active
            return (
              <button
                key={key}
                ref={(el) => (tabsRef.current[key] = el)}
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

        {/* Controles da Prateleira Circular 360° */}
        <div className="hidden items-center gap-3 sm:flex">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
            <RotateCw size={13} className={cat.text} aria-hidden="true" />
            <span>Coluna {currentCol} de {totalCols} • 360° Circular</span>
          </span>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scrollByCols(-1)}
              className="rounded border border-line bg-panel p-2 text-ink transition-all hover:border-white/50 hover:bg-raised active:scale-95"
              aria-label="Girar no sentido anti-horário"
              title="Girar para os projetos anteriores (cíclico)"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCols(1)}
              className="rounded border border-line bg-panel p-2 text-ink transition-all hover:border-white/50 hover:bg-raised active:scale-95"
              aria-label="Girar no sentido horário"
              title="Girar para os próximos projetos (cíclico)"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        key={active}
        role="tabpanel"
        id={`painel-${active}`}
        aria-labelledby={`tab-${active}`}
        className="mt-6 animate-rise"
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-muted">{cat.blurb}</p>
          <span className="hidden font-mono text-xs text-muted lg:inline-block">
            Gire para qualquer lado infinitamente como uma prateleira circular ↔
          </span>
        </div>

        {/* CONTAINER DA PRATELEIRA CIRCULAR (2 LINHAS) */}
        <div className="relative -mx-5 px-5 sm:mx-0 sm:px-0">
          {/* Sombras de profundidade finas rente à borda extrema */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-4 sm:w-6 bg-gradient-to-r from-canvas to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-4 sm:w-6 bg-gradient-to-l from-canvas to-transparent"
            aria-hidden="true"
          />

          {/* Grid de 2 Linhas Infinito (scroll circular nos 2 sentidos) */}
          <div
            ref={reelRef}
            onScroll={updateScrollState}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="grid grid-rows-2 grid-flow-col auto-cols-[84vw] sm:auto-cols-[340px] lg:auto-cols-[370px] gap-4 sm:gap-5 overflow-x-auto overflow-y-hidden pb-4 pt-1 snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {circularItems.map((project) => (
              <div key={project.loopKey} className="snap-start h-full">
                <current.Card project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Controles mobile */}
        <div className="mt-3 flex items-center justify-between sm:hidden">
          <span className="font-mono text-xs text-muted">
            Coluna {currentCol} de {totalCols} (Giro circular 360°)
          </span>
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => scrollByCols(-1)}
              className="rounded border border-line bg-panel p-1.5 text-ink active:scale-95"
              aria-label="Anterior (cíclico)"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCols(1)}
              className="rounded border border-line bg-panel p-1.5 text-ink active:scale-95"
              aria-label="Próximo (cíclico)"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
