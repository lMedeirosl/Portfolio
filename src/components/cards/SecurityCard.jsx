import { FileText, Wrench, Search } from 'lucide-react'
import CardShell from './CardShell'
import ExtLink from '../ExtLink'
import Tag from '../Tag'

const typeIcon = { 'Write-up': FileText, Análise: Search, Ferramenta: Wrench }

export default function SecurityCard({ project }) {
  const Icon = typeIcon[project.type] ?? FileText
  return (
    <CardShell area="sec">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded border border-sec/40 bg-sec/10 px-2 py-0.5 text-xs font-medium text-sec">
          <Icon size={13} aria-hidden="true" />
          {project.type}
        </span>
        <span className="font-mono text-xs text-muted">{project.difficulty}</span>
      </div>

      <h3 className="mt-4 font-display text-xl font-bold tracking-tight">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

      <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 border-t border-line pt-4 text-sm">
        <dt className="text-muted">Ambiente</dt>
        <dd>{project.environment}</dd>
        <dt className="text-muted">Referência</dt>
        <dd>{project.reference}</dd>
      </dl>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Técnicas">
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </ul>

      {project.note && <p className="mt-4 text-xs leading-relaxed text-muted">{project.note}</p>}

      <div className="mt-auto pt-6">
        <ExtLink
          href={project.link}
          className="text-sm font-medium text-muted transition-colors hover:text-sec"
        >
          {project.type === 'Ferramenta' ? 'Ver código' : 'Ler documentação'}
        </ExtLink>
      </div>
    </CardShell>
  )
}
