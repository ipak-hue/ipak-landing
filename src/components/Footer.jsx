export default function Footer() {
  return (
    <footer style={{ background: '#000000', borderTop: '1px solid #1A1A1A', padding: '2.5rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <img src="/images/logo.png" alt="iPAK" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
          <p style={{ color: '#555', fontSize: '13px' }}>© {new Date().getFullYear()} iPAK South Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
