import { useEffect, useRef, useState, useCallback } from 'react'
import { Code2, ShieldCheck, Gamepad2, ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react'
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
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [currentCol, setCurrentCol] = useState(1)

  const reelRef = useRef(null)
  const tabsRef = useRef({})

  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const hasMovedRef = useRef(false)

  const current = tabs.find((t) => t.key === active)
  const cat = categories[active]
  const totalCols = Math.ceil(current.items.length / 2)

  // Atualiza estado de rolagem (botões, indicadores de borda e coluna ativa)
  const updateScrollState = useCallback(() => {
    const el = reelRef.current
    if (!el) return

    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)

    const firstCard = el.firstElementChild
    const colWidth = firstCard ? firstCard.getBoundingClientRect().width + 16 : 380
    const col = Math.min(totalCols, Math.max(1, Math.round(scrollLeft / colWidth) + 1))
    setCurrentCol(col)
  }, [totalCols])

  useEffect(() => {
    updateScrollState()
    const el = reelRef.current
    if (el) {
      el.scrollTo({ left: 0, behavior: 'instant' })
      updateScrollState()
    }
  }, [active, updateScrollState])

  // Desloca o tambor / cadeado horizontalmente
  function scrollByCols(direction = 1) {
    const el = reelRef.current
    if (!el) return
    const firstCard = el.firstElementChild
    const colWidth = firstCard ? firstCard.getBoundingClientRect().width + 16 : 380
    // Rola 2 colunas por clique ou até o final
    const delta = colWidth * 2 * direction
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  // Interação de puxar/arrastar com o mouse (Drag to scroll)
  function handleMouseDown(e) {
    const el = reelRef.current
    if (!el) return
    isDraggingRef.current = true
    hasMovedRef.current = false
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
    if (Math.abs(walk) > 5) hasMovedRef.current = true
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

        {/* Controles do Tambor / Cilindro (estilo cadeado de segredo) */}
        <div className="hidden items-center gap-3 sm:flex">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
            <MoveHorizontal size={14} className={cat.text} aria-hidden="true" />
            <span>Coluna {currentCol} de {totalCols}</span>
          </span>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scrollByCols(-1)}
              disabled={!canScrollLeft}
              className={`rounded border border-line bg-panel p-2 transition-all ${
                canScrollLeft
                  ? 'text-ink hover:border-white/40 hover:bg-raised'
                  : 'cursor-not-allowed opacity-30 text-muted'
              }`}
              aria-label="Projetos anteriores no tambor"
              title="Girar para os projetos anteriores"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCols(1)}
              disabled={!canScrollRight}
              className={`rounded border border-line bg-panel p-2 transition-all ${
                canScrollRight
                  ? 'text-ink hover:border-white/40 hover:bg-raised'
                  : 'cursor-not-allowed opacity-30 text-muted'
              }`}
              aria-label="Próximos projetos no tambor"
              title="Girar para os próximos projetos"
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
            Arraste para o lado ou use as setas para girar o tambor ↔
          </span>
        </div>

        {/* CONTAINER DO CADEADO DE SEGREDO (2 LINHAS HORIZONTAIS) */}
        <div className="relative -mx-5 px-5 sm:mx-0 sm:px-0">
          {/* Sombra de borda esquerda (efeito de profundidade ao entrar pelo lado) */}
          <div
            className={`pointer-events-none absolute -left-1 top-0 bottom-0 z-20 w-10 sm:w-16 bg-gradient-to-r from-canvas via-canvas/90 to-transparent transition-opacity duration-300 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden="true"
          />

          {/* Sombra de borda direita (efeito de profundidade ao entrar pelo outro lado) */}
          <div
            className={`pointer-events-none absolute -right-1 top-0 bottom-0 z-20 w-10 sm:w-16 bg-gradient-to-l from-canvas via-canvas/90 to-transparent transition-opacity duration-300 ${
              canScrollRight ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden="true"
          />

          {/* Reel Grid Track: 2 LINHAS HORIZONTAIS */}
          <div
            ref={reelRef}
            onScroll={updateScrollState}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="grid grid-rows-2 grid-flow-col auto-cols-[84vw] sm:auto-cols-[340px] lg:auto-cols-[370px] gap-4 sm:gap-5 overflow-x-auto overflow-y-hidden pb-4 pt-1 snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {current.items.map((project) => (
              <div key={project.title} className="snap-start h-full">
                <current.Card project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Controles mobile / rodapé do reel */}
        <div className="mt-3 flex items-center justify-between sm:hidden">
          <span className="font-mono text-xs text-muted">
            Coluna {currentCol} de {totalCols} (puxe para os lados)
          </span>
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => scrollByCols(-1)}
              disabled={!canScrollLeft}
              className={`rounded border border-line bg-panel p-1.5 ${
                canScrollLeft ? 'text-ink' : 'opacity-30 text-muted'
              }`}
              aria-label="Anterior"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCols(1)}
              disabled={!canScrollRight}
              className={`rounded border border-line bg-panel p-1.5 ${
                canScrollRight ? 'text-ink' : 'opacity-30 text-muted'
              }`}
              aria-label="Próximo"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
