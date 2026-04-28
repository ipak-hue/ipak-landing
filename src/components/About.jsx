import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" style={{ padding: '5rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-16 items-center"
          style={{
            opacity:    inView ? 1 : 0,
            transform:  inView ? 'none' : 'translateY(40px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {/* Text */}
          <div>
            <p
              className="font-semibold uppercase tracking-widest mb-3"
              style={{ fontSize: '11px', color: '#f36a22', letterSpacing: '0.12em' }}
            >
              What Is iPAK?
            </p>
            <h2
              className="font-extrabold leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#F0EDE8' }}
            >
              Fresh Products.<br />
              <span style={{ color: '#f36a22' }}>Sealed in Seconds.</span>
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#B8B5C8', fontSize: '16px' }}>
              iPAK is revolutionising the way businesses package fresh products with our
              sealable cans and canning machines. Our innovative system allows you to seal
              anything on-site — extending freshness and creating an irresistible
              point-of-sale option.
            </p>
            <p className="leading-relaxed" style={{ color: '#B8B5C8', fontSize: '16px' }}>
              Whether you're in hospitality, retail or events, iPAK gives you the power to
              package and sell in a way that's convenient, eye-catching and built for modern
              consumers.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {['Hospitality', 'Retail', 'Events', 'Coffee', 'Bars'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: 'rgba(243,106,34,0.1)',
                    border:     '1px solid rgba(243,106,34,0.28)',
                    color:      '#f36a22',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Visual placeholder */}
          <div
            className="rounded-2xl flex flex-col items-center justify-center gap-6 p-10"
            style={{
              background: '#161626',
              border:     '1px solid #252540',
              minHeight:  '360px',
            }}
          >
            <div style={{ fontSize: '72px' }}>🥤</div>
            <div className="text-center">
              <p className="font-semibold mb-1" style={{ color: '#F0EDE8', fontSize: '15px' }}>
                Branded Sealable Cans
              </p>
              <p style={{ color: '#8B8FA8', fontSize: '13px' }}>Product image coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
