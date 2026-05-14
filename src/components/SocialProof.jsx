export default function SocialProof() {
  return (
    <section style={{ background: '#000000', padding: '4rem 0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', textAlign: 'center', alignItems: 'center' }}>

          <div>
            <div style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#f36a22', fontWeight: 800, lineHeight: 1, marginBottom: '0.5rem' }}>
              55,000+
            </div>
            <div style={{ color: '#A8A8B3', fontSize: '15px', lineHeight: 1.5 }}>
              Cans sealed at the <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Australian Open</span>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
            <div style={{ color: '#A8A8B3', fontSize: '15px', lineHeight: 1.5 }}>
              Built for <span style={{ color: '#FFFFFF', fontWeight: 600 }}>High-Volume</span> Hospitality
            </div>
          </div>

          <div>
            <div style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#f36a22', fontWeight: 800, lineHeight: 1, marginBottom: '0.5rem' }}>
              6-Month
            </div>
            <div style={{ color: '#A8A8B3', fontSize: '15px', lineHeight: 1.5 }}>
              Machine Warranty
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
