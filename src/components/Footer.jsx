export default function Footer() {
  return (
    <footer
      style={{
        background: '#000000',
        borderTop: '1px solid #1A1A1A',
        padding: '2rem 0',
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", width: "100%" }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span
            className="font-extrabold tracking-tight"
            style={{ fontSize: '20px', color: '#FFFFFF' }}
          >
            iPAk
          </span>
          <p style={{ color: '#666', fontSize: '13px' }}>
            © {new Date().getFullYear()} iPAK South Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
