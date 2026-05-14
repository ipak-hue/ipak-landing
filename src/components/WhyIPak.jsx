import { useInView } from '../hooks/useInView'

const VALUES = [
  { icon: '💰', title: 'More Profit', desc: 'Double your drink sales. Charge R85–R120+. Move fast. Stand out.' },
  { icon: '✨', title: 'Premium Look', desc: 'Sealed cans = cleaner, modern, Instagram-worthy presentation. Create viral-ready products.' },
  { icon: '📦', title: 'New Revenue Lines', desc: 'Batch, deliver, or grab-and-go. Shelf life = less wastage, more options.' },
  { icon: '⚡', title: 'Easy to Use', desc: 'One button. Minimal maintenance. Built for high-volume service.' },
]

export default function WhyIPak() {
  const [headRef, headInView] = useInView()

  return (
    <section id="why-ipak" style={{ background: '#000000', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: '0', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(ellipse, rgba(243,106,34,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>

        <div ref={headRef} style={{ textAlign: 'center', marginBottom: '4rem', opacity: headInView ? 1 : 0, transform: headInView ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <p style={{ fontSize: '12px', color: '#f36a22', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '1rem' }}>Why iPAK</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', lineHeight: 1.1, color: '#FFFFFF', fontWeight: 800 }}>
            Built for <span style={{ color: '#f36a22' }}>SA Business</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
          {VALUES.map((v, i) => {
            const [ref, inView] = useInView()
            return (
              <div key={i} ref={ref} style={{
                textAlign: 'center', padding: '2.5rem 1.5rem',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '16px',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s ease ${i * 120}ms, transform 0.7s ease ${i * 120}ms`,
              }}
              onMouseEnter={e => { e.currentTarget.style.border = '1px solid rgba(243,106,34,0.3)'; e.currentTarget.style.background = 'rgba(243,106,34,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)' }}
              >
                <div style={{ fontSize: '40px', marginBottom: '1.25rem' }}>{v.icon}</div>
                <h3 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 700, marginBottom: '0.75rem' }}>{v.title}</h3>
                <p style={{ color: '#A8A8B3', fontSize: '14px', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
