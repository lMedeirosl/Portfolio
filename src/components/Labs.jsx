import { useRef, useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Layers } from 'lucide-react'
import Section from './Section'
import { categories } from '../data/categories'
import { labs } from '../data/labs'

const statusStyle = {
  Concluído: 'bg-emerald-400',
  'Em andamento': 'bg-amber-400',
  Ideia: 'bg-zinc-500',
}

export default function Labs() {
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
    el.scrollBy({ left: 360 * direction, behavior: 'smooth' })
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
      id="labs"
      title="Labs e experimentos"
      description="Testes de segurança, mini projetos web e protótipos de jogos. Organizados em tetris modular expansível para os lados."
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
          <Layers size={14} className="text-web" aria-hidden="true" />
          <span>Composição Tetris • Expansão Horizontal</span>
        </span>

        {/* Controles de rolagem do Tetris */}
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
            aria-label="Rolar labs para esquerda"
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
            aria-label="Rolar labs para direita"
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

        {/* Grid Tetris de 3 linhas com preenchimento denso e expansão lateral */}
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="grid grid-rows-3 grid-flow-col-dense auto-cols-[280px] sm:auto-cols-[330px] lg:auto-cols-[360px] gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {labs.map((lab) => {
            const c = categories[lab.area]
            const Icon = lab.icon
            const isWide = lab.span?.includes('col-span-2')

            return (
              <article
                key={lab.slug}
                className={`group relative flex min-h-[11.5rem] flex-col justify-between overflow-hidden rounded-lg border border-line bg-panel p-5 transition-colors duration-200 snap-start ${c.hoverBorder} ${
                  isWide ? 'col-span-2' : 'col-span-1'
                }`}
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.25}
                  className={`absolute -right-3 -top-3 h-24 w-24 opacity-[0.08] transition-opacity duration-300 group-hover:opacity-20 ${c.text}`}
                />

                <div>
                  <p className="flex items-center gap-2 font-mono text-xs text-muted">
                    <span className={`h-2 w-2 rounded-full ${c.bgSolid}`} aria-hidden="true" />
                    <span className="sr-only">{c.label}:</span>
                    labs/{lab.slug}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-bold tracking-tight">{lab.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted line-clamp-2">{lab.note}</p>
                </div>

                <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                  <p className={`font-mono text-xs ${c.text}`}>{lab.log}</p>
                  <p className="flex shrink-0 items-center gap-1.5 text-xs text-muted">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${statusStyle[lab.status] ?? 'bg-muted'}`}
                      aria-hidden="true"
                    />
                    {lab.status}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
