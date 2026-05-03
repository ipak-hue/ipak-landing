import { useEffect, useState } from 'react'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '27000000000'
const STORE_URL = import.meta.env.VITE_STORE_URL || '#'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section
      id="hero"
      style={{
        background: '#000000',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text content */}
          <div
            className="text-center lg:text-left"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <h1
              className="font-extrabold tracking-tight mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: 1.05,
                color: '#FFFFFF',
              }}
            >
              Seal More. Sell More.<br />
              <span style={{ color: '#f36a22' }}>Stand Out.</span>
            </h1>

            <p
              className="mb-8 mx-auto lg:mx-0"
              style={{
                color: '#A8A8B3',
                fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
                lineHeight: 1.6,
                maxWidth: '520px',
              }}
            >
              iPAK gives SA hospitality, retail &amp; events the power to package fresh products in branded sealable cans — on-site, in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-bold transition-all"
                style={{
                  background: '#f36a22',
                  color: '#FFFFFF',
                  padding: '14px 32px',
                  borderRadius: '999px',
                  fontSize: '15px',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#d4561a'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#f36a22'}
              >
                SHOP NOW
              </a>
            </div>
          </div>

          {/* Right: Machine image */}
          <div
            className="flex justify-center lg:justify-end"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
            }}
          >
            <img
              src="/images/machine-front.png"
              alt="iPAK canning machine"
              style={{
                maxWidth: '420px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
