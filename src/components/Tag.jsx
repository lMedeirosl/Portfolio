export default function Tag({ children }) {
  return (
    <li className="rounded border border-line bg-raised px-2 py-0.5 font-mono text-xs text-muted">
      {children}
    </li>
  )
}
