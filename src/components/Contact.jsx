import { useState } from 'react'
import { Mail, Copy, Check } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import Section from './Section'
import ExtLink from './ExtLink'
import { profile } from '../data/profile'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      // Sem permissão de clipboard: o link mailto continua funcionando
    }
  }

  const cardClass =
    'flex items-center gap-4 rounded-lg border border-line bg-panel p-5 transition-colors hover:border-muted/60'

  return (
    <Section
      id="contato"
      title="Contato"
      description="Aberto a vagas, projetos freelance e conversas sobre web, segurança, desenvolvimento de jogos e design com Unity e Blender."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-line bg-panel p-5 md:col-span-2 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 break-all font-display text-xl font-bold tracking-tight transition-colors hover:text-web sm:text-3xl"
            >
              <Mail size={26} className="shrink-0 text-web" aria-hidden="true" />
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-medium transition-colors hover:border-muted hover:bg-raised"
            >
              {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              {copied ? 'E-mail copiado' : 'Copiar e-mail'}
            </button>
          </div>
          <p className="sr-only" aria-live="polite">
            {copied ? 'E-mail copiado para a área de transferência' : ''}
          </p>
        </div>

        <ExtLink href={profile.github} className={`${cardClass}`}>
          <FaGithub size={24} aria-hidden="true" />
          <span>
            <span className="block font-medium">GitHub</span>
            <span className="text-sm text-muted">Código e projetos</span>
          </span>
        </ExtLink>
        <ExtLink href={profile.linkedin} className={`${cardClass}`}>
          <FaLinkedin size={24} aria-hidden="true" />
          <span>
            <span className="block font-medium">LinkedIn</span>
            <span className="text-sm text-muted">Trajetória profissional</span>
          </span>
        </ExtLink>
      </div>
    </Section>
  )
}
