import { useInView } from '../hooks/useInView'

const STORE_URL = import.meta.env.VITE_STORE_URL || '#'

export default function Products() {
  const [ref, inView] = useInView()

  return (
    <section id="products" style={{ background: '#000000', padding: '6rem 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="font-bold uppercase mb-4"
            style={{ fontSize: '12px', color: '#f36a22', letterSpacing: '0.18em' }}
          >
            The System
          </p>
          <h2
            className="font-extrabold tracking-tight"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              lineHeight: 1.1,
              color: '#FFFFFF',
            }}
          >
            The <span style={{ color: '#f36a22' }}>iPAK</span> System
          </h2>
        </div>

        <div
          ref={ref}
          className="space-y-20"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(40px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >

          {/* The Cans */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h3
                className="font-extrabold mb-4"
                style={{ color: '#FFFFFF', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}
              >
                The Cans
              </h3>
              <p
                className="mb-6"
                style={{ color: '#A8A8B3', fontSize: '16px', lineHeight: 1.7 }}
              >
                Branded sealable cans in multiple sizes, stocked locally in SA for fast turnaround — no overseas waits.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Multiple sizes available',
                  'Fully brandable',
                  'Local SA stock',
                  'Fast turnaround',
                  'BPA-free food-safe materials',
                  'Works with all beverages',
                ].map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                    style={{ color: '#FFFFFF', fontSize: '15px' }}
                  >
                    <span style={{ color: '#f36a22', fontWeight: 700, flexShrink: 0 }}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold transition-all"
                style={{
                  background: '#f36a22',
                  color: '#FFFFFF',
                  padding: '14px 32px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  letterSpacing: '0.04em',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#d4561a'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#f36a22'}
              >
                SHOP NOW
              </a>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/cans-pair.png"
                alt="Two iPAK sealable cans"
                style={{
                  maxWidth: '520px',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>

          {/* The Canning Machine */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="lg:order-2">
              <h3
                className="font-extrabold mb-4"
                style={{ color: '#FFFFFF', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}
              >
                The Canning Machine
              </h3>
              <p
                className="mb-6"
                style={{ color: '#A8A8B3', fontSize: '16px', lineHeight: 1.7 }}
              >
                Portable and powerful — built for high-volume service with one-button operation and minimal maintenance.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Portable & compact design',
                  'High-volume output',
                  'One-button operation',
                  'Minimal maintenance required',
                  '6-month warranty included',
                  'Seals dozens per minute',
                ].map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                    style={{ color: '#FFFFFF', fontSize: '15px' }}
                  >
                    <span style={{ color: '#f36a22', fontWeight: 700, flexShrink: 0 }}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold transition-all"
                style={{
                  background: '#f36a22',
                  color: '#FFFFFF',
                  padding: '14px 32px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  letterSpacing: '0.04em',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#d4561a'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#f36a22'}
              >
                SHOP NOW
              </a>
            </div>
            <div className="lg:order-1 flex justify-center lg:justify-start">
              <img
                src="/images/machine-pair.png"
                alt="iPAK canning machine and accessory"
                style={{
                  maxWidth: '560px',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
