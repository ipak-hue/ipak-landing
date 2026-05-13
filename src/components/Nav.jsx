const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '27000000000'
const STORE_URL = import.meta.env.VITE_STORE_URL || '#'

export default function Nav() {
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
      <div style={{ width: '100%', padding: '0 1rem', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#hero" style={{ textDecoration: 'none' }}>
          <img src="/images/logo.png" alt="iPAK" style={{ height: '44px', width: 'auto', objectFit: 'contain' }} />
        </a>
        <div className="desktop-nav-buttons" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
            <img src="/images/shop-now-btn.png" alt="Shop Now" style={{ height: '22px', width: 'auto', objectFit: 'contain' }} />
          </a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
            <img src="/images/whatsapp-btn.png" alt="WhatsApp" style={{ height: '22px', width: 'auto', objectFit: 'contain' }} />
          </a>
        </div>
      </div>
    </header>
  )
}
