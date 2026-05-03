export default function Nav() {
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', height: '72px', display: 'flex', alignItems: 'center' }}>
        <a href="#hero" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: 800 }}>iPAk</span>
        </a>
      </div>
    </header>
  )
}
