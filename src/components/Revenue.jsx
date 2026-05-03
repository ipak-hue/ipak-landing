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
  { label: 'Iced Coffee', before: 45, after: 85, afterMax: 120, uplift: 89 },
  { label: 'Cold Brew', before: 55, after: 100, afterMax: 130, uplift: 82 },
  { label: 'Cocktail', before: 95, after: 160, afterMax: 200, uplift: 68 },
]

export default function Revenue() {
  const [headerRef, headerInView] = useInView()
  const [casesRef, casesInView] = useInView()
  const [basketRef, basketInView] = useInView()

  return (
    <section id="revenue" style={{ background: '#000000', padding: '6rem 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-14"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p
            className="font-bold uppercase mb-4"
            style={{ fontSize: '12px', color: '#f36a22', letterSpacing: '0.18em' }}
          >
            Revenue Impact
          </p>
          <h2
            className="font-extrabold tracking-tight mb-4"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              lineHeight: 1.1,
              color: '#FFFFFF',
            }}
          >
            Turn Every Drink Into a{' '}
            <span style={{ color: '#f36a22' }}>Revenue Driver</span>
          </h2>
          <p
            className="mx-auto"
            style={{
              maxWidth: '640px',
              color: '#A8A8B3',
              fontSize: '16px',
              lineHeight: 1.6,
            }}
          >
            Venues using iPAK are increasing average order values and creating entirely new product lines from their existing setup.
          </p>
        </div>

        {/* Use cases + can image */}
        <div
          ref={casesRef}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16"
          style={{
            opacity: casesInView ? 1 : 0,
            transform: casesInView ? 'none' : 'translateY(40px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {/* Left: 3 use case rows */}
          <div className="space-y-7">
            {USE_CASES.map((uc, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div
                  style={{
                    fontSize: '32px',
                    flexShrink: 0,
                    width: '48px',
                    textAlign: 'center',
                  }}
                >
                  {uc.icon}
                </div>
                <div>
                  <h3
                    className="font-bold mb-2"
                    style={{ color: '#FFFFFF', fontSize: '18px' }}
                  >
                    {uc.title}
                  </h3>
                  <p style={{ color: '#A8A8B3', fontSize: '15px', lineHeight: 1.6 }}>
                    {uc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Can top image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/can-top.png"
              alt="Sealed can top view"
              style={{
                maxWidth: '380px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>

        {/* Basket Builder */}
        <div
          ref={basketRef}
          style={{
            opacity: basketInView ? 1 : 0,
            transform: basketInView ? 'none' : 'translateY(40px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="text-center mb-8">
            <h3
              className="font-bold mb-1"
              style={{ color: '#FFFFFF', fontSize: '22px' }}
            >
              The iPAK <span style={{ color: '#f36a22' }}>Basket Builder</span>
            </h3>
            <p style={{ color: '#A8A8B3', fontSize: '14px' }}>
              Average selling price — before and after iPAK
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {BASKET.map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <span
                    className="font-semibold"
                    style={{ color: '#FFFFFF', fontSize: '15px' }}
                  >
                    {item.label}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      style={{
                        color: '#666',
                        fontSize: '13px',
                        textDecoration: 'line-through',
                      }}
                    >
                      R{item.before}
                    </span>
                    <span
                      className="font-bold"
                      style={{ color: '#f36a22', fontSize: '15px' }}
                    >
                      R{item.after}–R{item.afterMax}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-bold"
                      style={{ background: 'rgba(243,106,34,0.15)', color: '#f36a22' }}
                    >
                      +{item.uplift}%
                    </span>
                  </div>
                </div>
                <div
                  className="relative h-2 rounded-full overflow-hidden"
                  style={{ background: '#1A1A1A' }}
                >
                  <div
                    className="absolute left-0 top-0 h-full"
                    style={{
                      width: basketInView
                        ? `${(item.after / item.afterMax) * 100}%`
                        : '0%',
                      background: '#f36a22',
                      transition: `width 1.1s cubic-bezier(0.22,1,0.36,1) ${i * 180}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-8 pt-6 flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto"
            style={{ borderTop: '1px solid #1A1A1A' }}
          >
            <span style={{ color: '#A8A8B3', fontSize: '15px' }}>
              Average basket with iPAK:
            </span>
            <div className="flex items-center gap-2">
              <span
                style={{
                  color: '#666',
                  fontSize: '15px',
                  textDecoration: 'line-through',
                }}
              >
                R120
              </span>
              <span
                style={{ color: '#f36a22', fontSize: '24px', fontWeight: 800 }}
              >
                R210+
              </span>
              <span
                className="px-2.5 py-1 rounded-full text-xs font-bold"
                style={{ background: 'rgba(243,106,34,0.15)', color: '#f36a22' }}
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
