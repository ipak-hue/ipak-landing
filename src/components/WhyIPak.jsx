import { useInView } from '../hooks/useInView'

const VALUES = [
  {
    icon: '💰',
    title: 'More Profit',
    desc: 'Double your drink sales. Charge R85–R120+. Move fast. Stand out.',
  },
  {
    icon: '✨',
    title: 'Premium Look',
    desc: 'Sealed cans = cleaner, modern, Instagram-worthy presentation. Create viral-ready products.',
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
]

export default function WhyIPak() {
  const [ref, inView] = useInView()

  return (
    <section id="why-ipak" style={{ background: '#000000', padding: '6rem 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">

        <div className="text-center mb-14">
          <p
            className="font-bold uppercase mb-4"
            style={{ fontSize: '12px', color: '#f36a22', letterSpacing: '0.18em' }}
          >
            Why iPAK
          </p>
          <h2
            className="font-extrabold tracking-tight"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              lineHeight: 1.1,
              color: '#FFFFFF',
            }}
          >
            Built for <span style={{ color: '#f36a22' }}>SA Business</span>
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(40px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {VALUES.map((v, i) => (
            <div key={i} className="text-center px-2">
              <div
                className="mb-4 mx-auto flex items-center justify-center"
                style={{
                  fontSize: '40px',
                  width: '64px',
                  height: '64px',
                }}
              >
                {v.icon}
              </div>
              <h3
                className="font-bold mb-3"
                style={{ color: '#FFFFFF', fontSize: '18px' }}
              >
                {v.title}
              </h3>
              <p style={{ color: '#A8A8B3', fontSize: '14px', lineHeight: 1.6 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
