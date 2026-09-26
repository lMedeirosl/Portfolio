// Link que abre em nova aba quando aponta para fora do site.
// Quando o link for '#', previne o salto na página e mostra aviso amigável.
export default function ExtLink({ href, children, className = '', title }) {
  const isPlaceholder = !href || href === '#'
  const external = href && !isPlaceholder && !href.startsWith('#')

  return (
    <a
      href={href || '#'}
      className={`${className} ${isPlaceholder ? 'cursor-pointer opacity-80 hover:opacity-100' : ''}`}
      title={title || (isPlaceholder ? 'Repositório em breve no GitHub (em desenvolvimento)' : undefined)}
      onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
