const STATS = [
  { value: '75,000+', label: 'Cans sealed at the Australian Open' },
  { value: '⚡',      label: 'Built for high-volume hospitality' },
  { value: '🇿🇦',     label: 'Local stock, fast turnaround' },
  { value: '6-Month', label: 'Machine warranty, standard' },
]

export default function SocialProof() {
  return (
    <div
      style={{
        background:    'rgba(243,106,34,0.06)',
        borderTop:    '1px solid rgba(243,106,34,0.2)',
        borderBottom: '1px solid rgba(243,106,34,0.2)',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 w-full py-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-8 md:px-16 w-full">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="font-bold mb-1"
                style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', color: '#f36a22' }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '12px', color: '#8B8FA8' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
