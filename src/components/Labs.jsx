import Section from './Section'
import { categories } from '../data/categories'
import { labs } from '../data/labs'

const statusStyle = {
  Concluído: 'bg-emerald-400',
  'Em andamento': 'bg-amber-400',
  Ideia: 'bg-muted',
}

export default function Labs() {
  return (
    <Section
      id="labs"
      title="Labs e experimentos"
      description="Testes de segurança, mini projetos web e protótipos de jogos. Nem tudo vira produto, mas tudo ensina algo."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {labs.map((lab) => {
          const c = categories[lab.area]
          const Icon = lab.icon
          return (
            <article
              key={lab.slug}
              className={`group relative flex min-h-[12rem] flex-col overflow-hidden rounded-lg border border-line bg-panel p-5 transition-colors duration-200 ${c.hoverBorder} ${lab.span ?? ''}`}
            >
              <Icon
                aria-hidden="true"
                strokeWidth={1.25}
                className={`absolute -right-3 -top-3 h-24 w-24 opacity-[0.08] transition-opacity duration-300 group-hover:opacity-20 ${c.text}`}
              />

              <p className="flex items-center gap-2 font-mono text-xs text-muted">
                <span className={`h-2 w-2 rounded-full ${c.bgSolid}`} aria-hidden="true" />
                <span className="sr-only">{c.label}:</span>
                labs/{lab.slug}
              </p>

              <h3 className="mt-4 font-display text-lg font-bold tracking-tight">{lab.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{lab.note}</p>

              <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                <p className={`font-mono text-xs ${c.text}`}>{lab.log}</p>
                <p className="flex shrink-0 items-center gap-1.5 text-xs text-muted">
                  <span className={`h-1.5 w-1.5 rounded-full ${statusStyle[lab.status]}`} aria-hidden="true" />
                  {lab.status}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
