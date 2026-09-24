import { categories } from '../../data/categories'

// Base visual dos cards. A linha fina no topo indica a área do projeto.
export default function CardShell({ area, children }) {
  const c = categories[area]
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-panel p-5 transition-all duration-200 hover:-translate-y-0.5 sm:p-6 ${c.hoverBorder}`}
    >
      <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-0.5 ${c.bgSolid} opacity-70`} />
      {children}
    </article>
  )
}
