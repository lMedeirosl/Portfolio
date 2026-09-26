import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { id: 'projetos', label: 'Projetos' },
  { id: 'labs', label: 'Labs' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'skills', label: 'Skills' },
  { id: 'contato', label: 'Contato' },
]

const initials = profile.name
  .split(/[ ._]/)
  .filter(Boolean)
  .map((n) => n[0])
  .slice(0, 2)
  .join('')
  .toUpperCase()

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-canvas/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Principal"
      >
        <a href="#inicio" className="font-mono text-sm font-medium text-ink" aria-label="Início">
          <span className="text-muted">{'<'}</span>
          {initials}
          <span className="text-muted">{' />'}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors hover:text-ink ${
                  active === l.id ? 'text-ink' : 'text-muted'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-muted hover:text-ink md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul id="menu-mobile" className="border-t border-line/60 bg-canvas px-5 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-3 text-muted hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
