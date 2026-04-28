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
    <section id="products" style={{ padding: '5rem 0' }}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
        <div className="text-center mb-14">
          <p
            className="font-semibold uppercase tracking-widest mb-3"
            style={{ fontSize: '11px', color: '#f36a22', letterSpacing: '0.12em' }}
          >
            The System
          </p>
          <h2
            className="font-extrabold"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#F0EDE8' }}
          >
            The <span style={{ color: '#f36a22' }}>iPAK</span> System
          </h2>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-8 md:px-16 w-full"
          style={{
            opacity:    inView ? 1 : 0,
            transform:  inView ? 'none' : 'translateY(40px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {PRODUCTS.map((product, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden p-6"
              style={{ background: '#161626', border: '1px solid #252540' }}
            >
              {/* Image placeholder */}
              <div
                className="flex flex-col items-center justify-center gap-3"
                style={{
                  aspectRatio:   '16/9',
                  background:    '#1E1E32',
                  borderBottom:  '1px solid #252540',
                }}
              >
                <div style={{ fontSize: '52px' }}>{product.icon}</div>
                <span style={{ fontSize: '12px', color: '#8B8FA8' }}>Product Image</span>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col flex-1 w-full">
                <h3 className="font-bold mb-2" style={{ color: '#F0EDE8', fontSize: '18px' }}>
                  {product.title}
                </h3>
                <p className="mb-5 leading-relaxed" style={{ color: '#8B8FA8', fontSize: '14px' }}>
                  {product.desc}
                </p>

                <ul className="space-y-2 mb-6">
                  {product.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 mb-3" style={{ fontSize: '15px', color: '#B8B5C8', lineHeight: '1.6' }}>
                      <span style={{ color: '#f36a22', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={STORE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full gap-2 px-8 py-4 mt-8 rounded-xl text-base font-bold text-white transition-all hover:bg-[#d4561a] hover:scale-[1.02]"
                  style={{ background: '#f36a22' }}
                >View in Store →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
