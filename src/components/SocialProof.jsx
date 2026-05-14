import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

function StatCard({ children, delay }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} style={{
      textAlign: 'center',
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

function CountUp55k({ inView }) {
  const n = useCountUp(55000, inView)
  return <>{n.toLocaleString()}+</>
}

export default function SocialProof() {
  const [ref, inView] = useInView()
  return (
    <section style={{ background: '#000000', padding: '4rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* subtle orange glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '200px', background: 'radial-gradient(ellipse, rgba(243,106,34,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', textAlign: 'center', alignItems: 'center' }}>

          <StatCard delay={0}>
            <div style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#f36a22', fontWeight: 800, lineHeight: 1, marginBottom: '0.5rem' }}>
              <CountUp55k inView={inView} />
            </div>
            <div style={{ color: '#A8A8B3', fontSize: '15px', lineHeight: 1.5 }}>
              Cans sealed at the <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Australian Open</span>
            </div>
          </StatCard>

          <StatCard delay={150}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
            <div style={{ color: '#A8A8B3', fontSize: '15px', lineHeight: 1.5 }}>
              Built for <span style={{ color: '#FFFFFF', fontWeight: 600 }}>High-Volume</span> Hospitality
            </div>
          </StatCard>

          <StatCard delay={300}>
            <div style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#f36a22', fontWeight: 800, lineHeight: 1, marginBottom: '0.5rem' }}>
              6-Month
            </div>
            <div style={{ color: '#A8A8B3', fontSize: '15px', lineHeight: 1.5 }}>
              Machine Warranty
            </div>
          </StatCard>

        </div>
      </div>
    </section>
  )
}
