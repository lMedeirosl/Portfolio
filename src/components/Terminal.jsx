import { useEffect, useState } from 'react'

// Sequência mostrada no terminal do hero.
const script = [
  { type: 'cmd', text: 'ls -p areas/' },
  {
    type: 'out',
    parts: [
      { t: 'cybersecurity/', c: 'text-sec' },
      { t: '  ' },
      { t: 'gamedev/', c: 'text-game' },
      { t: '  ' },
      { t: 'web/', c: 'text-web' },
    ],
  },
  { type: 'empty' },
  { type: 'cmd', text: 'cat status.txt' },
  {
    type: 'out',
    parts: [
      { t: 'web           ', c: 'text-web' },
      { t: 'Aplicações em React, foco principal', c: 'text-ink/90' },
    ],
  },
  {
    type: 'out',
    parts: [
      { t: 'cybersecurity ', c: 'text-sec' },
      { t: 'OWASP Top 10, Linux, CTFs', c: 'text-ink/90' },
    ],
  },
  {
    type: 'out',
    parts: [
      { t: 'gamedev       ', c: 'text-game' },
      { t: 'Unity, Blender e sistemas lógicos', c: 'text-ink/90' },
    ],
  },
  { type: 'empty' },
]

const srSummary =
  'Terminal: ~/portfolio $ ls -p areas/ exibe cybersecurity/, gamedev/ e web/. ~/portfolio $ cat status.txt exibe as descrições de web, cybersecurity e gamedev.'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

function Prompt() {
  return (
    <>
      <span className="text-muted">~/portfolio</span> <span className="text-web">$</span>{' '}
    </>
  )
}

function Cursor() {
  return <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-ink" />
}

export default function Terminal() {
  const [step, setStep] = useState(0)
  const [chars, setChars] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let cancelled = false
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    async function run() {
      if (reduce) {
        setStep(script.length)
        setDone(true)
        return
      }
      await sleep(600)
      for (let i = 0; i < script.length; i++) {
        const line = script[i]
        if (line.type === 'cmd') {
          for (let c = 1; c <= line.text.length; c++) {
            if (cancelled) return
            setStep(i)
            setChars(c)
            await sleep(48)
          }
          await sleep(380)
        } else if (line.type === 'empty') {
          await sleep(90)
        } else {
          await sleep(140)
        }
        if (cancelled) return
        setStep(i + 1)
        setChars(0)
      }
      setDone(true)
    }

    run()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-panel text-left shadow-2xl shadow-black/60">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-web" />
        <span className="h-2.5 w-2.5 rounded-full bg-sec" />
        <span className="h-2.5 w-2.5 rounded-full bg-game" />
        <span className="ml-3 font-mono text-xs text-muted">portfolio</span>
      </div>

      <p className="sr-only">{srSummary}</p>
      <div
        aria-hidden="true"
        className="min-h-[16.5rem] overflow-x-auto whitespace-pre px-4 py-4 font-mono text-[13px] leading-7 sm:text-sm"
      >
        {script.map((line, i) => {
          if (i < step) {
            if (line.type === 'cmd') {
              return (
                <div key={i}>
                  <Prompt />
                  {line.text}
                </div>
              )
            }
            if (line.type === 'empty') {
              return <div key={i} className="h-3" />
            }
            return (
              <div key={i}>
                {line.parts.map((p, j) => (
                  <span key={j} className={p.c ?? 'text-muted'}>
                    {p.t}
                  </span>
                ))}
              </div>
            )
          }
          if (i === step && line.type === 'cmd' && !done) {
            return (
              <div key={i}>
                <Prompt />
                {line.text.slice(0, chars)}
                <Cursor />
              </div>
            )
          }
          return null
        })}
        {done && (
          <div>
            <Prompt />
            <Cursor />
          </div>
        )}
      </div>
    </div>
  )
}
