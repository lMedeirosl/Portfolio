import { FaGithub } from 'react-icons/fa6'
import { FileText, Wrench, Search, ExternalLink } from 'lucide-react'
import CardShell from './CardShell'
import ExtLink from '../ExtLink'
import Tag from '../Tag'
import ExpandableText from '../ExpandableText'

const typeIcon = { 'Write-up': FileText, Análise: Search, Ferramenta: Wrench, Lab: FileText }

export default function SecurityCard({ project }) {
  const Icon = typeIcon[project.type] ?? FileText
  const linkClass =
    'inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-sec'

  return (
    <CardShell area="sec">
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded border border-sec/40 bg-sec/10 px-2 py-0.5 text-xs font-medium text-sec">
            <Icon size={13} aria-hidden="true" />
            {project.type}
          </span>
          <span className="font-mono text-xs text-muted">{project.difficulty}</span>
        </div>

        <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-ink">{project.title}</h3>
        <ExpandableText text={project.description} area="sec" />

        <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 border-t border-line pt-3 text-xs font-mono">
          <dt className="text-muted">Ambiente</dt>
          <dd className="text-ink truncate">{project.environment}</dd>
          <dt className="text-muted">Referência</dt>
          <dd className="text-ink truncate">{project.reference}</dd>
        </dl>

        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Técnicas">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>

        {project.note && <p className="mt-3 text-xs leading-relaxed text-muted/80">{project.note}</p>}
      </div>

      <div className="mt-auto flex flex-wrap gap-5 pt-5">
        {project.github && (
          <ExtLink href={project.github} className={linkClass}>
            <FaGithub size={16} aria-hidden="true" /> Código
          </ExtLink>
        )}
        {project.link && (
          <ExtLink href={project.link} className={linkClass}>
            <ExternalLink size={15} aria-hidden="true" />
            {project.type === 'Ferramenta' ? 'Repositório' : 'Documentação'}
          </ExtLink>
        )}
      </div>
    </CardShell>
  )
}
