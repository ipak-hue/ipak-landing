const STORE_LINK = 'https://store.ipaksouthafrica.co.za'
const WA_LINK    = 'https://wa.me/27000000000'

function Instagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Facebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TikTok() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.53V6.77a4.85 4.85 0 0 1-1.02-.08z" />
    </svg>
  )
}

const SOCIALS = [
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'Facebook',  icon: Facebook,  href: '#' },
  { label: 'TikTok',    icon: TikTok,    href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#09091B', borderTop: '1px solid #252540' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="font-extrabold tracking-tight" style={{ fontSize: '24px', color: '#f36a22' }}>
              iPAK
            </span>
            <p style={{ fontSize: '11px', color: '#8B8FA8', marginTop: '2px' }}>South Africa</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href={STORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors"
              style={{ color: '#8B8FA8' }}
              onMouseEnter={e => (e.target.style.color = '#F0EDE8')}
              onMouseLeave={e => (e.target.style.color = '#8B8FA8')}
            >
              Store
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors"
              style={{ color: '#8B8FA8' }}
              onMouseEnter={e => (e.target.style.color = '#F0EDE8')}
              onMouseLeave={e => (e.target.style.color = '#8B8FA8')}
            >
              WhatsApp
            </a>
            <a
              href="#consultation"
              className="text-sm transition-colors"
              style={{ color: '#8B8FA8' }}
              onMouseEnter={e => (e.target.style.color = '#F0EDE8')}
              onMouseLeave={e => (e.target.style.color = '#8B8FA8')}
            >
              Free Consultation
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-colors"
                style={{ color: '#8B8FA8' }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#f36a22'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#8B8FA8'
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-10 pt-6 text-center"
          style={{ borderTop: '1px solid #252540', fontSize: '12px', color: '#8B8FA8' }}
        >
          © 2025 iPAK South Africa. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
