import { useInView } from '../hooks/useInView'

const STORE_LINK = 'https://store.ipaksouthafrica.co.za'

const PRODUCTS = [
  {
    icon: '⚙️',
    title: 'The Canning Machine',
    desc: 'Portable and powerful — built for high-volume service with one-button operation and minimal maintenance.',
    features: [
      'Portable & compact design',
      'High-volume output',
      'One-button operation',
      'Minimal maintenance required',
      '6-month warranty included',
      'Seals dozens per minute',
    ],
  },
  {
    icon: '🥤',
    title: 'The Cans',
    desc: 'Branded sealable cans in multiple sizes, stocked locally in SA for fast turnaround — no overseas waits.',
    features: [
      'Multiple sizes available',
      'Fully brandable',
      'Local SA stock',
      'Fast turnaround',
      'BPA-free food-safe materials',
      'Works with all beverages',
    ],
  },
]

export default function Products() {
  const [ref, inView] = useInView()

  return (
    <section id="products" style={{ padding: '6rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="font-semibold uppercase tracking-widest mb-3"
            style={{ fontSize: '11px', color: '#E8C547', letterSpacing: '0.12em' }}
          >
            The System
          </p>
          <h2
            className="font-extrabold"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#F0EDE8' }}
          >
            The <span style={{ color: '#E8C547' }}>iPAK</span> System
          </h2>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-8"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(40px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {PRODUCTS.map((product, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{ background: '#161626', border: '1px solid #252540' }}
            >
              {/* Image placeholder */}
              <div
                className="flex flex-col items-center justify-center gap-3"
                style={{
                  aspectRatio: '16/9',
                  background: '#1E1E32',
                  borderBottom: '1px solid #252540',
                }}
              >
                <div style={{ fontSize: '52px' }}>{product.icon}</div>
                <span style={{ fontSize: '12px', color: '#8B8FA8' }}>Product Image</span>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-bold mb-2" style={{ color: '#F0EDE8', fontSize: '18px' }}>
                  {product.title}
                </h3>
                <p className="mb-5 leading-relaxed" style={{ color: '#8B8FA8', fontSize: '14px' }}>
                  {product.desc}
                </p>

                <ul className="space-y-2 mb-7">
                  {product.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2" style={{ fontSize: '13px', color: '#B8B5C8' }}>
                      <span style={{ color: '#E8C547', fontWeight: 700 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={STORE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ background: '#E8C547', color: '#0D0D1A' }}
                >
                  View in Store →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
