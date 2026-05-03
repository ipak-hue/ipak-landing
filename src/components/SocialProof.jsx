const STATS = [
  { value: '75,000+', label: 'Cans sealed at the', highlight: 'Australian Open' },
  { value: '6-Month', label: 'Machine Warranty', highlight: '' },
  { value: '', label: 'Built for', highlight: 'High-Volume Hospitality', icon: '⚡' },
]

export default function SocialProof() {
  return (
    <section style={{ background: '#000000', padding: '4rem 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* 75,000+ */}
          <div className="text-center">
            <div
              className="font-extrabold mb-2"
              style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#f36a22', lineHeight: 1 }}
            >
              75,000+
            </div>
            <div style={{ color: '#A8A8B3', fontSize: '15px', lineHeight: 1.5 }}>
              Cans sealed at the{' '}
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Australian Open</span>
            </div>
          </div>

          {/* Built for High-Volume */}
          <div className="text-center">
            <div className="mb-2" style={{ fontSize: '2rem' }}>⚡</div>
            <div style={{ color: '#A8A8B3', fontSize: '15px', lineHeight: 1.5 }}>
              Built for{' '}
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>High-Volume</span>{' '}
              Hospitality
            </div>
          </div>

          {/* 6-Month Warranty */}
          <div className="text-center">
            <div
              className="font-extrabold mb-2"
              style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#f36a22', lineHeight: 1 }}
            >
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
