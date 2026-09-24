import Section from './Section'
import Reveal from './Reveal'
import { categories } from '../data/categories'
import { about, journey } from '../data/profile'

export default function About() {
  return (
    <Section id="sobre" title="Sobre mim">
      <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <Reveal className="max-w-prose space-y-5 leading-relaxed text-muted">
          {about.map((p, i) => (
            <p key={i} className={i === 0 ? 'text-lg text-ink' : ''}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal>
          <h3 className="sr-only">Trajetória</h3>
          <ol className="relative space-y-8 border-l border-line pl-7">
            {journey.map((step) => {
              const c = categories[step.area]
              return (
                <li key={step.area} className="relative">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[33px] top-1.5 h-3 w-3 rounded-full border-2 border-canvas ${c.bgSolid}`}
                  />
                  <p className={`font-display text-lg font-bold ${c.text}`}>{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                </li>
              )
            })}
          </ol>
        </Reveal>
      </div>
    </Section>
  )
}
