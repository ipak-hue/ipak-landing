import { useInView } from '../hooks/useInView'

const STORE_URL = import.meta.env.VITE_STORE_URL || '#'

export default function Products() {
  const [ref, inView] = useInView()

  return (
    <section id="products" style={{ background: '#000000', padding: '5rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontSize: '11px', color: '#f36a22', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '1rem' }}>The System</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', color: '#FFFFFF', fontWeight: 800, lineHeight: 1.1 }}>
            The <span style={{ color: '#f36a22' }}>iPAK</span> System
          </h2>
        </div>

        <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(40px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>

          {/* The Cans */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '5rem' }}>
            <div>
              <h3 style={{ color: '#FFFFFF', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '1rem' }}>The Cans</h3>
              <p style={{ color: '#A8A8B3', fontSize: '15px', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Branded sealable cans in multiple sizes, stocked locally in SA for fast turnaround — no overseas waits.
              </p>
              <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                {['Multiple sizes available','Fully brandable','Local SA stock','Fast turnaround','BPA-free food-safe materials','Works with all beverages'].map((f, i) => (
                  <li key={i} style={{ color: '#FFFFFF', fontSize: '14px', marginBottom: '0.6rem', display: 'flex', gap: '0.75rem' }}>
                    <span style={{ color: '#f36a22', fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#f36a22', color: '#FFFFFF', padding: '13px 28px', borderRadius: '999px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.04em', textDecoration: 'none' }}>
                SHOP NOW
              </a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="/images/cans-pair.png" alt="iPAK sealable cans" style={{ maxWidth: '380px', maxHeight: '400px', width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>
          </div>

          {/* The Canning Machine */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="/images/machine-pair.png" alt="iPAK canning machine" style={{ maxWidth: '460px', maxHeight: '420px', width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>
            <div>
              <h3 style={{ color: '#FFFFFF', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '1rem' }}>The Canning Machine</h3>
              <p style={{ color: '#A8A8B3', fontSize: '15px', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Portable and powerful — built for high-volume service with one-button operation and minimal maintenance.
              </p>
              <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                {['Portable & compact design','High-volume output','One-button operation','Minimal maintenance required','6-month warranty included','Seals dozens per minute'].map((f, i) => (
                  <li key={i} style={{ color: '#FFFFFF', fontSize: '14px', marginBottom: '0.6rem', display: 'flex', gap: '0.75rem' }}>
                    <span style={{ color: '#f36a22', fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#f36a22', color: '#FFFFFF', padding: '13px 28px', borderRadius: '999px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.04em', textDecoration: 'none' }}>
                SHOP NOW
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
