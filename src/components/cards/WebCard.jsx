import { FaGithub } from 'react-icons/fa6'
import { ExternalLink } from 'lucide-react'
import CardShell from './CardShell'
import ExtLink from '../ExtLink'
import Tag from '../Tag'

export default function WebCard({ project }) {
  const linkClass =
    'inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-web'

  return (
    <CardShell area="web">
      <div>
        <h3 className="font-display text-xl font-bold tracking-tight text-ink">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </ul>
      </div>

      <div className="mt-auto flex flex-wrap gap-5 pt-6">
        {project.github && (
          <ExtLink href={project.github} className={linkClass}>
            <FaGithub size={16} aria-hidden="true" /> Código
          </ExtLink>
        )}
        {project.demo && (
          <ExtLink href={project.demo} className={linkClass}>
            <ExternalLink size={16} aria-hidden="true" /> Demo
          </ExtLink>
        )}
      </div>
    </CardShell>
  )
}
