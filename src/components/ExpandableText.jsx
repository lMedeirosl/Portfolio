import { useState, useRef, useEffect } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const areaStyles = {
  web: 'text-web hover:text-web/80 focus-visible:outline-web',
  sec: 'text-sec hover:text-sec/80 focus-visible:outline-sec',
  game: 'text-game hover:text-game/80 focus-visible:outline-game',
  neutral: 'text-muted hover:text-ink focus-visible:outline-white',
}

export default function ExpandableText({
  text,
  className = 'mt-2 text-sm leading-relaxed text-muted',
  area = 'web',
  clampLines = 3,
}) {
  const [expanded, setExpanded] = useState(false)
  const [canExpand, setCanExpand] = useState(false)
  const textRef = useRef(null)

  useEffect(() => {
    const el = textRef.current
    if (!el) return

    const checkOverflow = () => {
      // Se não estiver expandido, checa se há overflow no DOM ou texto com tamanho que ultrapassa 3 linhas
      if (!expanded) {
        const isOverflowing = el.scrollHeight > el.clientHeight + 1 || text.length > 115
        setCanExpand(isOverflowing)
      }
    }

    checkOverflow()

    if (document.fonts?.ready) {
      document.fonts.ready.then(checkOverflow)
    }

    window.addEventListener('resize', checkOverflow)
    return () => window.removeEventListener('resize', checkOverflow)
  }, [text, expanded])

  const toggle = (e) => {
    e.stopPropagation()
    setExpanded((prev) => !prev)
  }

  const preventDrag = (e) => {
    e.stopPropagation()
  }

  const areaColor = areaStyles[area] ?? areaStyles.web

  return (
    <div className="relative">
      <p
        ref={textRef}
        onClick={canExpand && !expanded ? toggle : undefined}
        onMouseDown={canExpand && !expanded ? preventDrag : undefined}
        className={`${className} ${
          expanded
            ? 'break-words'
            : clampLines === 2
            ? 'line-clamp-2'
            : 'line-clamp-3'
        } ${canExpand && !expanded ? 'cursor-pointer hover:text-ink/90 transition-colors' : ''}`}
        title={canExpand && !expanded ? 'Clique para expandir a descrição completa' : undefined}
      >
        {text}
      </p>

      {canExpand && (
        <button
          type="button"
          onClick={toggle}
          onMouseDown={preventDrag}
          aria-expanded={expanded}
          className={`mt-1.5 inline-flex items-center gap-1 font-mono text-xs font-medium cursor-pointer transition-colors ${areaColor}`}
        >
          <span>{expanded ? 'Mostrar menos' : 'Ler mais...'}</span>
          {expanded ? <ChevronUp size={13} aria-hidden="true" /> : <ChevronDown size={13} aria-hidden="true" />}
        </button>
      )}
    </div>
  )
}
