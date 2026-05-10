const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '27000000000'
const STORE_URL = import.meta.env.VITE_STORE_URL || '#'

export default function StickyBar() {
  return (
    <div className="mobile-sticky-bar" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(12px)', borderTop: '1px solid #1a1a1a', padding: '12px 2rem', display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center' }}>
      <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
        <img src="/images/shop-now-btn.png" alt="Shop Now" style={{ height: '44px', width: 'auto', objectFit: 'contain' }} />
      </a>
      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
        <img src="/images/whatsapp-btn.png" alt="WhatsApp" style={{ height: '44px', width: 'auto', objectFit: 'contain' }} />
      </a>
    </div>
  )
}
