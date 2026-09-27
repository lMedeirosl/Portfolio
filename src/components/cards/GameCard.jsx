import { FaGithub } from 'react-icons/fa6'
import { Play, ExternalLink } from 'lucide-react'
import CardShell from './CardShell'
import ExtLink from '../ExtLink'
import ExpandableText from '../ExpandableText'

export default function GameCard({ project }) {
  const linkClass =
    'inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-game'
  const isBlender = project.engine?.toLowerCase().includes('blender')

  return (
    <CardShell area="game">
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="rounded border border-game/40 bg-game/10 px-2 py-0.5 text-xs font-medium text-game">
            {project.engine}
          </span>
          <span className="font-mono text-xs text-muted">{project.language}</span>
        </div>

        <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-ink">{project.title}</h3>
        <ExpandableText text={project.description} area="game" />

        <ul className="mt-4 space-y-2 border-t border-line pt-3 text-xs font-mono" aria-label="Mecânicas implementadas">
          {project.mechanics.map((m) => (
            <li key={m} className="flex gap-2.5">
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-sm bg-game" />
              <span className="text-ink/90">{m}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto flex flex-wrap gap-5 pt-5">
        {project.github && (
          <ExtLink href={project.github} className={linkClass}>
            <FaGithub size={16} aria-hidden="true" /> {project.githubLabel || 'Código'}
          </ExtLink>
        )}
        {project.demo && (
          <ExtLink href={project.demo} className={linkClass}>
            {isBlender ? (
              <ExternalLink size={16} aria-hidden="true" />
            ) : (
              <Play size={16} aria-hidden="true" />
            )}
            {project.demoLabel || (isBlender ? 'Visualizar' : 'Jogar')}
          </ExtLink>
        )}
      </div>
    </CardShell>
  )
}
