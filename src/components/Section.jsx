import Reveal from './Reveal'

export default function Section({ id, title, description, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-16 border-t border-line/60 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-10 max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          {description && <p className="mt-3 leading-relaxed text-muted">{description}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
