import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" style={{ background: '#000000', padding: '6rem 0' }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", width: "100%" }}>
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(40px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >

          {/* Left: Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/images/can-in-hand.png"
              alt="Branded sealable can held in hand"
              style={{
                maxWidth: '480px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Right: Text */}
          <div>
            <p
              className="font-bold uppercase mb-4"
              style={{
                fontSize: '12px',
                color: '#f36a22',
                letterSpacing: '0.18em',
              }}
            >
              What is iPAK?
            </p>
            <h2
              className="font-extrabold tracking-tight mb-6"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                lineHeight: 1.1,
                color: '#FFFFFF',
              }}
            >
              Fresh Products.<br />
              <span style={{ color: '#f36a22' }}>Sealed in Seconds.</span>
            </h2>
            <p
              className="mb-5"
              style={{ color: '#A8A8B3', fontSize: '16px', lineHeight: 1.7 }}
            >
              iPAK is revolutionising the way businesses package fresh products with our sealable cans and canning machines. Our innovative system allows you to seal anything on-site — extending freshness and creating an irresistible point-of-sale option.
            </p>
            <p style={{ color: '#A8A8B3', fontSize: '16px', lineHeight: 1.7 }}>
              Whether you're in hospitality, retail or events, iPAK gives you the power to package and sell in a way that's convenient, eye-catching and built for modern consumers.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
