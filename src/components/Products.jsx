import { useInView } from '../hooks/useInView'

const STORE_URL = import.meta.env.VITE_STORE_URL || '#'

function ProductRow({ imgSrc, imgAlt, title, desc, features, reverse, delay = 0 }) {
  const [imgRef, imgInView] = useInView()
  const [txtRef, txtInView] = useInView()

  const imgEl = (
    <div ref={imgRef} style={{
      display: 'flex', justifyContent: 'center',
      background: '#FFFFFF', borderRadius: '20px', padding: '2rem',
      opacity: imgInView ? 1 : 0,
      transform: imgInView ? 'translateX(0)' : `translateX(${reverse ? '60px' : '-60px'})`,
      transition: `opacity 0.9s ease ${delay}ms, transform 0.9s ease ${delay}ms`,
      boxShadow: '0 0 60px rgba(243,106,34,0.08)',
    }}>
      <img src={imgSrc} alt={imgAlt} style={{ maxWidth: '380px', maxHeight: '400px', width: '100%', height: 'auto', objectFit: 'contain' }} />
    </div>
  )

  const txtEl = (
    <div ref={txtRef} style={{
      opacity: txtInView ? 1 : 0,
      transform: txtInView ? 'translateX(0)' : `translateX(${reverse ? '-60px' : '60px'})`,
      transition: `opacity 0.9s ease ${delay + 100}ms, transform 0.9s ease ${delay + 100}ms`,
    }}>
      <h3 style={{ color: '#FFFFFF', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '1rem' }}>{title}</h3>
      <p style={{ color: '#A8A8B3', fontSize: '15px', lineHeight: 1.7, marginBottom: '1.5rem' }}>{desc}</p>
      <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
        {features.map((f, i) => (
          <li key={i} style={{ color: '#FFFFFF', fontSize: '14px', marginBottom: '0.6rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <span style={{ color: '#f36a22', fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
          </li>
        ))}
      </ul>
      <a href={STORE_URL} target="_blank" rel="noopener noreferrer"
        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', padding: '0', textDecoration: 'none' }}>
        <img src="/images/shop-now-btn.png" alt="Shop Now" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
      </a>
    </div>
  )

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '5rem' }}>
      {reverse ? <>{txtEl}{imgEl}</> : <>{imgEl}{txtEl}</>}
    </div>
  )
}

export default function Products() {
  const [headRef, headInView] = useInView()

  return (
    <section id="products" style={{ background: '#000000', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '300px', background: 'radial-gradient(ellipse, rgba(243,106,34,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        <div ref={headRef} style={{ textAlign: 'center', marginBottom: '4rem', opacity: headInView ? 1 : 0, transform: headInView ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <p style={{ fontSize: '11px', color: '#f36a22', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '1rem' }}>The System</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', color: '#FFFFFF', fontWeight: 800, lineHeight: 1.1 }}>
            The <span style={{ color: '#f36a22' }}>iPAK</span> System
          </h2>
        </div>

        <ProductRow
          imgSrc="/images/cans-pair.png"
          imgAlt="iPAK sealable cans"
          title="The Cans"
          desc="Branded sealable cans in multiple sizes, stocked locally in SA for fast turnaround — no overseas waits."
          features={['Multiple sizes available','Fully brandable','Local SA stock','Fast turnaround','BPA-free food-safe materials','Works with all beverages']}
          reverse={false}
        />

        <ProductRow
          imgSrc="/images/machine-pair.png"
          imgAlt="iPAK canning machine"
          title="The Canning Machine"
          desc="Portable and powerful — built for high-volume service with one-button operation and minimal maintenance."
          features={['Portable & compact design','High-volume output','One-button operation','Minimal maintenance required','6-month warranty included','Seals dozens per minute']}
          reverse={true}
          delay={100}
        />

      </div>
    </section>
  )
}
