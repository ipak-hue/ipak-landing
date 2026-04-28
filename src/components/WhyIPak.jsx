import { useInView } from '../hooks/useInView'

const VALUES = [
  {
    icon: '💰',
    title: 'More Profit',
    desc: 'Double your iced drink sales. Charge R85–R120+. Move fast. Stand out.',
  },
  {
    icon: '✨',
    title: 'Premium Look',
    desc: 'Sealed cans = cleaner, modern, Instagram-worthy presentation.',
  },
  {
    icon: '📦',
    title: 'New Revenue Lines',
    desc: 'Batch, deliver, or grab-and-go. Shelf life = less wastage, more options.',
  },
  {
    icon: '⚡',
    title: 'Easy to Use',
    desc: 'One button. Minimal maintenance. Built for high-volume service.',
  },
  {
    icon: '📱',
    title: 'Social-First Packaging',
    desc: 'Create viral-ready products that drive demand beyond the counter.',
  },
  {
    icon: '🇿🇦',
    title: 'Local & Fast',
    desc: 'SA stock. Real support. No overseas delays.',
  },
]

export default function WhyIPak() {
  const [ref, inView] = useInView()

  return (
    <section id="why-ipak" style={{ background: '#161626', padding: '5rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="font-semibold uppercase tracking-widest mb-3"
            style={{ fontSize: '11px', color: '#f36a22', letterSpacing: '0.12em' }}
          >
            Why iPAK
          </p>
          <h2
            className="font-extrabold"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#F0EDE8' }}
          >
            Built for <span style={{ color: '#f36a22' }}>SA Business</span>
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl mx-auto px-6 w-full"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(40px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {VALUES.map((v, i) => (
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{
                background: '#0D0D1A',
                border: '1px solid #252540',
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <div className="mb-4" style={{ fontSize: '32px' }}>{v.icon}</div>
              <h3 className="font-bold mb-2" style={{ color: '#F0EDE8', fontSize: '15px' }}>
                {v.title}
              </h3>
              <p className="leading-relaxed text-center mx-auto max-w-2xl" style={{ color: '#8B8FA8', fontSize: '13px' }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
