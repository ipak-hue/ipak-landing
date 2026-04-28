import { useInView } from '../hooks/useInView'

const USE_CASES = [
  {
    icon: '☕',
    title: 'Coffee Shops & Cafés',
    desc: 'Seal iced coffees, cold brews, and speciality drinks. Let customers take them to go. Charge more. Move faster.',
  },
  {
    icon: '🍹',
    title: 'Restaurants & Bars',
    desc: 'Package cocktails, mocktails, and fresh juices. Create grab-and-go revenue from your existing bar menu.',
  },
  {
    icon: '🎪',
    title: 'Events & Festivals',
    desc: 'Serve hundreds fast. Sealed cans = no spills, premium feel, and a product people remember.',
  },
]

const BASKET = [
  { label: 'Iced Coffee', before: 45, after: 85,  afterMax: 120 },
  { label: 'Cold Brew',   before: 55, after: 100, afterMax: 130 },
  { label: 'Cocktail',    before: 95, after: 160, afterMax: 200 },
]

export default function Revenue() {
  const [cardsRef,  cardsInView]  = useInView()
  const [basketRef, basketInView] = useInView()

  return (
    <section id="revenue" style={{ background: '#161626', padding: '5rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-semibold uppercase tracking-widest mb-3"
            style={{ fontSize: '11px', color: '#f36a22', letterSpacing: '0.12em' }}
          >
            Revenue Impact
          </p>
          <h2
            className="font-extrabold leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#F0EDE8' }}
          >
            Turn Every Drink Into a{' '}
            <span style={{ color: '#f36a22' }}>Revenue Driver</span>
          </h2>
          <p
            className="mx-auto text-center leading-relaxed"
            style={{ maxWidth: '560px', color: '#8B8FA8', fontSize: '16px' }}
          >
            Venues using iPAK are increasing average order values and creating entirely
            new product lines from their existing setup.
          </p>
        </div>

        {/* Use case cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-5 mb-16 max-w-6xl mx-auto px-6 w-full"
          style={{
            opacity:    cardsInView ? 1 : 0,
            transform:  cardsInView ? 'none' : 'translateY(40px)',
            transition: 'opacity 0.65s ease, transform 0.65s ease',
          }}
        >
          {USE_CASES.map((uc, i) => (
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{
                background:      '#0D0D1A',
                border:          '1px solid #252540',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="text-4xl mb-4">{uc.icon}</div>
              <h3 className="font-bold mb-2" style={{ color: '#F0EDE8', fontSize: '16px' }}>
                {uc.title}
              </h3>
              <p className="leading-relaxed text-center mx-auto max-w-2xl" style={{ color: '#8B8FA8', fontSize: '14px' }}>
                {uc.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Basket builder */}
        <div
          ref={basketRef}
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: '#0D0D1A',
            border:     '1px solid rgba(243,106,34,0.28)',
            opacity:    basketInView ? 1 : 0,
            transform:  basketInView ? 'none' : 'translateY(40px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="text-center mb-8">
            <h3 className="font-bold mb-1" style={{ color: '#F0EDE8', fontSize: '20px' }}>
              The iPAK Basket Builder
            </h3>
            <p style={{ color: '#8B8FA8', fontSize: '13px' }}>
              Average selling price — before and after iPAK
            </p>
          </div>

          <div className="space-y-7">
            {BASKET.map((item, i) => {
              const uplift = Math.round((item.after / item.before - 1) * 100)
              return (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium" style={{ color: '#F0EDE8', fontSize: '14px' }}>
                      {item.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <span style={{ color: '#8B8FA8', fontSize: '13px', textDecoration: 'line-through' }}>
                        R{item.before}
                      </span>
                      <span className="font-bold" style={{ color: '#f36a22', fontSize: '14px' }}>
                        R{item.after}–R{item.afterMax}
                      </span>
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-semibold"
                        style={{ background: 'rgba(243,106,34,0.14)', color: '#f36a22' }}
                      >
                        +{uplift}%
                      </span>
                    </div>
                  </div>
                  <div
                    className="relative h-2 rounded-full overflow-hidden"
                    style={{ background: '#252540' }}
                  >
                    <div
                      className="absolute left-0 top-0 h-full rounded-full"
                      style={{
                        width:      `${(item.before / item.afterMax) * 100}%`,
                        background: 'rgba(139,143,168,0.35)',
                      }}
                    />
                    <div
                      className="absolute left-0 top-0 h-full rounded-full"
                      style={{
                        width:      basketInView ? `${(item.after / item.afterMax) * 100}%` : '0%',
                        background: 'linear-gradient(to right, #f36a22, #f59644)',
                        transition: `width 1.1s cubic-bezier(0.22,1,0.36,1) ${i * 180}ms`,
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <div
            className="mt-8 pt-6 flex flex-wrap items-center justify-center gap-3"
            style={{ borderTop: '1px solid #252540' }}
          >
            <span style={{ color: '#8B8FA8', fontSize: '14px' }}>
              Average basket with iPAK:
            </span>
            <div className="flex items-center gap-2">
              <span style={{ color: '#8B8FA8', fontSize: '15px', textDecoration: 'line-through' }}>R120</span>
              <span style={{ color: '#f36a22', fontSize: '22px', fontWeight: 800 }}>R210+</span>
              <span
                className="px-2.5 py-1 rounded-full text-xs font-bold"
                style={{ background: 'rgba(243,106,34,0.14)', color: '#f36a22' }}
              >
                +75%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
