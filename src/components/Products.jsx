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
    <section id="products" className="py-24 w-full">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-semibold uppercase tracking-widest mb-3 text-[#f36a22] text-xs">
            The System
          </p>
          <h2 className="font-extrabold text-[#F0EDE8] text-4xl md:text-5xl">
            The <span className="text-[#f36a22]">iPAK</span> System
          </h2>
        </div>

        {/* Grid Layout */}
        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-8 w-full"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(40px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {PRODUCTS.map((product, i) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden bg-[#161626] border border-[#252540] flex flex-col shadow-2xl"
            >
              {/* Image Placeholder */}
              <div className="flex flex-col items-center justify-center gap-3 aspect-[16/9] bg-[#1E1E32] border-b border-[#252540]">
                <div className="text-6xl">{product.icon}</div>
                <span className="text-sm text-[#8B8FA8]">Product Image</span>
              </div>

              {/* Content Box (Massive Padding) */}
              <div className="p-8 md:p-12 flex flex-col flex-1 w-full">
                <h3 className="font-bold mb-3 text-2xl text-[#F0EDE8]">
                  {product.title}
                </h3>
                <p className="mb-8 leading-relaxed text-[#8B8FA8] text-base">
                  {product.desc}
                </p>

                <ul className="space-y-4 mb-10 flex-1">
                  {product.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-[#B8B5C8] text-base">
                      <span className="text-[#f36a22] font-bold mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Full-Width Premium Button */}
                <a
                  href={STORE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center w-full gap-2 px-8 py-5 rounded-xl text-lg font-bold text-white bg-[#f36a22] transition-transform hover:scale-[1.02]"
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
