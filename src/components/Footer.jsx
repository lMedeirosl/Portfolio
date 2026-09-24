import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Feito com React, Vite e Tailwind CSS</p>
      </div>
    </footer>
  )
}
