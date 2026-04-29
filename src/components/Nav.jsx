import { useState, useEffect } from 'react'

const LINKS = [
  { href: '#about',        label: 'About' },
  { href: '#revenue',      label: 'How It Works' },
  { href: '#products',     label: 'Products' },
  { href: '#why-ipak',     label: 'Why iPAK' },
  { href: '#consultation', label: 'Free Consultation' },
]

const WA_LINK    = 'https://wa.me/27000000000'
const STORE_LINK = 'https://store.ipaksouthafrica.co.za'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background:     scrolled ? 'rgba(13,13,26,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom:   scrolled ? '1px solid #252540' : 'none',
      }}
    >
      <div
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        style={{ height: '64px' }}
      >
        {/* Logo */}
        <a href="#" className="flex items-baseline gap-1.5 shrink-0">
          <span
            className="font-extrabold tracking-tight"
            style={{ fontSize: '22px', color: '#f36a22' }}
          >
            iPAK
          </span>
          <span style={{ fontSize: '11px', color: '#8B8FA8', letterSpacing: '0.05em' }}>
            South Africa
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm transition-colors duration-150"
              style={{ color: '#8B8FA8' }}
              onMouseEnter={e => (e.target.style.color = '#F0EDE8')}
              onMouseLeave={e => (e.target.style.color = '#8B8FA8')}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={STORE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90 shrink-0"
          style={{ background: '#f36a22', color: '#ffffff' }}
        >
          Shop Now →
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1"
          style={{ color: '#F0EDE8' }}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden flex flex-col px-6 pb-5 gap-1"
          style={{ background: 'rgba(13,13,26,0.97)', borderTop: '1px solid #252540' }}
        >
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="py-3 text-sm border-b"
              style={{ color: '#8B8FA8', borderColor: '#252540' }}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="flex gap-3 mt-4">
            <a
              href={STORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-lg text-center text-sm font-semibold text-white"
              style={{ background: '#f36a22' }}
            >
              Shop Now
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-lg text-center text-sm font-semibold text-white"
              style={{ background: '#25D366' }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
