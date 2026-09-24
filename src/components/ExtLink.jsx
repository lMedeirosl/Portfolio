// Link que abre em nova aba quando aponta para fora do site.
export default function ExtLink({ href, children, className = '' }) {
  const external = href && href !== '#' && !href.startsWith('#')
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
