import { profile } from '../data/profile'
import Terminal from './Terminal'

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pb-24 pt-32 sm:pb-32 sm:pt-44">
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_25%,rgba(56,189,248,0.08),transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-canvas"
      />

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
        </div>

        <div className="mx-auto mt-16 max-w-2xl animate-rise [animation-delay:250ms]">
          <Terminal />
        </div>
      </div>
    </section>
  )
}
