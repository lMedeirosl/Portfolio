import { profile } from '../data/profile'
import Terminal from './Terminal'

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pb-24 pt-32 sm:pb-32 sm:pt-44">
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />

      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <div className="animate-rise">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-line bg-panel/80 px-3.5 py-1.5 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            {profile.availability}
          </p>

          <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
            {profile.name}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
            {profile.headline}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted">
            {profile.subtext}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#projetos"
              className="w-full rounded-md bg-ink px-6 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-web sm:w-auto"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="w-full rounded-md border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-muted hover:bg-panel sm:w-auto"
            >
              Contato
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl animate-rise [animation-delay:250ms]">
          <Terminal />
        </div>
      </div>
    </section>
  )
}
