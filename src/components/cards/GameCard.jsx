import { FaGithub } from 'react-icons/fa6'
import { Play } from 'lucide-react'
import CardShell from './CardShell'
import ExtLink from '../ExtLink'

export default function GameCard({ project }) {
  const linkClass =
    'inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-game'
  return (
    <CardShell area="game">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded border border-game/40 bg-game/10 px-2 py-0.5 text-xs font-medium text-game">
          {project.engine}
        </span>
        <span className="font-mono text-xs text-muted">{project.language}</span>
      </div>

      <h3 className="mt-4 font-display text-xl font-bold tracking-tight">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-4 space-y-2 border-t border-line pt-4 text-sm" aria-label="Mecânicas implementadas">
        {project.mechanics.map((m) => (
          <li key={m} className="flex gap-3">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-game" />
            <span>{m}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex gap-5 pt-6">
        {project.github && (
          <ExtLink href={project.github} className={linkClass}>
            <FaGithub size={16} aria-hidden="true" /> Código
          </ExtLink>
        )}
        {project.demo && (
          <ExtLink href={project.demo} className={linkClass}>
            <Play size={16} aria-hidden="true" /> Jogar
          </ExtLink>
        )}
      </div>
    </CardShell>
  )
}
