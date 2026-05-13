import { useEffect, useState } from 'react'

const STORE_URL = import.meta.env.VITE_STORE_URL || '#'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section style={{ background: '#000000', height: '100vh', display: 'flex', alignItems: 'center', paddingTop: '5rem', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', width: '100%', height: '100%' }}>

          <div style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(20px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
            <h1 style={{ fontWeight: 800, lineHeight: 1.1, color: '#FFFFFF', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', display: 'block' }}>Package fresh products</span>
              <span style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#f36a22', display: 'block' }}>on-site, in seconds!</span>
            </h1>
            <a href={STORE_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#f36a22', color: '#FFFFFF', padding: '14px 32px', borderRadius: '999px', fontSize: '15px', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.02em' }}>
              SHOP NOW
            </a>
          </div>

          <div className="hero-video-desktop" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', opacity: mounted ? 1 : 0, transition: 'opacity 0.8s ease 0.15s', height: 'calc(100vh - 5rem)' }}>
            <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom' }}>
              <source src="/images/hero-video.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="hero-video-mobile" style={{ display: 'none', justifyContent: 'center', alignItems: 'flex-end', opacity: mounted ? 1 : 0, transition: 'opacity 0.8s ease 0.15s' }}>
            <video autoPlay loop muted playsInline style={{ width: '70%', maxHeight: '40vh', objectFit: 'contain', objectPosition: 'bottom' }}>
              <source src="/images/hero-video.mp4" type="video/mp4" />
            </video>
          </div>

        </div>
      </div>
    </section>
  )
}
