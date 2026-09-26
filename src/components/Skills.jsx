import { useRef, useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Cpu } from 'lucide-react'
import Section from './Section'
import SkillIcon from './SkillIcon'
import { categories } from '../data/categories'
import { skillGroups } from '../data/skills'

export default function Skills() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10)
  }, [])

  useEffect(() => {
    updateScrollState()
  }, [updateScrollState])

  function scroll(direction = 1) {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: 420 * direction, behavior: 'smooth' })
  }

  function handleMouseDown(e) {
    const el = scrollRef.current
    if (!el) return
    isDraggingRef.current = true
    startXRef.current = e.pageX - el.offsetLeft
    scrollLeftRef.current = el.scrollLeft
  }

  function handleMouseMove(e) {
    if (!isDraggingRef.current) return
    const el = scrollRef.current
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

  return (
    <Section
      id="skills"
      title="Skills"
      description="Tecnologias, linguagens e ferramentas organizadas em composição modular estilo tetris, expansível horizontalmente para os lados."
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
          <Cpu size={14} className="text-web" aria-hidden="true" />
          <span>Composição Tetris • Expansão Horizontal</span>
        </span>

        {/* Controles de rolagem horizontal */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
            className={`rounded border border-line bg-panel p-1.5 transition-all ${
              canScrollLeft
                ? 'text-ink hover:border-white/40 hover:bg-raised'
                : 'cursor-not-allowed opacity-30 text-muted'
            }`}
            aria-label="Rolar skills para a esquerda"
            title="Rolar para a esquerda"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
            className={`rounded border border-line bg-panel p-1.5 transition-all ${
              canScrollRight
                ? 'text-ink hover:border-white/40 hover:bg-raised'
                : 'cursor-not-allowed opacity-30 text-muted'
            }`}
            aria-label="Rolar skills para a direita"
            title="Rolar para a direita"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Container com Sombras de Borda e Grid Tetris Horizontal */}
      <div className="relative -mx-5 px-5 sm:mx-0 sm:px-0">
        <div
          className={`pointer-events-none absolute -left-1 top-0 bottom-0 z-20 w-10 sm:w-16 bg-gradient-to-r from-canvas via-canvas/90 to-transparent transition-opacity duration-300 ${
            canScrollLeft ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
        <div
          className={`pointer-events-none absolute -right-1 top-0 bottom-0 z-20 w-10 sm:w-16 bg-gradient-to-l from-canvas via-canvas/90 to-transparent transition-opacity duration-300 ${
            canScrollRight ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Grid Tetris de 2 linhas horizontais que se expande para os lados */}
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="grid grid-rows-2 grid-flow-col-dense auto-cols-[310px] sm:auto-cols-[380px] lg:auto-cols-[440px] gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {skillGroups.map((group) => {
            const c = categories[group.area]
            return (
              <section
                key={group.title}
                aria-labelledby={`skill-${group.title}`}
                className={`flex flex-col justify-between rounded-lg border border-line bg-panel p-5 sm:p-6 transition-all snap-start ${c.hoverBorder} ${
                  group.wide ? 'row-span-2' : 'row-span-1'
                }`}
              >
                <div>
                  <h3
                    id={`skill-${group.title}`}
                    className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight"
                  >
                    <span className={`h-2.5 w-2.5 rounded-sm ${c.bgSolid}`} aria-hidden="true" />
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className={`inline-flex items-center gap-2 rounded-md border border-line bg-raised px-3 py-1.5 text-xs font-mono transition-colors ${c.hoverBorder}`}
                      >
                        <SkillIcon name={item.icon} className={c.text} />
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
