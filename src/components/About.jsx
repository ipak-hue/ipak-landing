import { useInView } from '../hooks/useInView'

export default function About() {
  const [imgRef, imgInView] = useInView()
  const [txtRef, txtInView] = useInView()

  return (
    <section id="about" style={{ background: '#000000', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '40%', left: '-150px', width: '600px', height: '600px', background: 'radial-gradient(ellipse, rgba(243,106,34,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center' }}>

        {/* Image — full bleed left, no container padding */}
        <div ref={imgRef} style={{
          opacity: imgInView ? 1 : 0,
          transform: imgInView ? 'translateX(0) scale(1)' : 'translateX(-120px) scale(0.92)',
          transition: 'opacity 1.1s cubic-bezier(0.22,1,0.36,1), transform 1.1s cubic-bezier(0.22,1,0.36,1)',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          overflow: 'hidden',
        }}>
          <img
            src="/images/can-in-hand.png"
            alt="Hand holding branded iPAK matcha can"
            style={{
              width: '100%',
              maxWidth: '760px',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              marginLeft: '-5%',
              filter: 'drop-shadow(0 0 80px rgba(243,106,34,0.2))',
            }}
          />
        </div>

        {/* Text — padded normally */}
        <div ref={txtRef} style={{
          padding: '0 clamp(1.5rem, 5vw, 5rem) 0 2rem',
          opacity: txtInView ? 1 : 0,
          transform: txtInView ? 'translateX(0)' : 'translateX(100px)',
          transition: 'opacity 1.1s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 1.1s cubic-bezier(0.22,1,0.36,1) 0.1s',
        }}>
          <p style={{ fontSize: '12px', color: '#f36a22', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '1rem' }}>What is iPAK?</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', lineHeight: 1.1, color: '#FFFFFF', fontWeight: 800, marginBottom: '1.5rem' }}>
            Fresh Products.<br />
            <span style={{ color: '#f36a22' }}>Sealed in Seconds.</span>
          </h2>
          <p style={{ color: '#A8A8B3', fontSize: '16px', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            iPAK is revolutionising the way businesses package fresh products with our sealable cans and canning machines. Our innovative system allows you to seal anything on-site — extending freshness and creating an irresistible point-of-sale option.
          </p>
          <p style={{ color: '#A8A8B3', fontSize: '16px', lineHeight: 1.7 }}>
            Whether you're in hospitality, retail or events, iPAK gives you the power to package and sell in a way that's convenient, eye-catching and built for modern consumers.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '2rem' }}>
            {['Hospitality','Retail','Events','Coffee','Bars'].map((tag, i) => (
              <span key={i} style={{
                background: 'rgba(243,106,34,0.1)', border: '1px solid rgba(243,106,34,0.25)',
                color: '#f36a22', fontSize: '12px', fontWeight: 600, padding: '6px 14px',
                borderRadius: '999px', letterSpacing: '0.05em',
                opacity: txtInView ? 1 : 0,
                transform: txtInView ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.5s ease ${0.4 + i * 0.08}s, transform 0.5s ease ${0.4 + i * 0.08}s`,
                display: 'inline-block',
              }}>{tag}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
