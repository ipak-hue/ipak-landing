const STORE_LINK = 'https://store.ipaksouthafrica.co.za'
const WA_LINK    = 'https://wa.me/27000000000'

export default function Hero({ videoUrl, loading }) {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* Background */}
      {!loading && videoUrl ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #3A1800 0%, #0D0D1A 65%)',
          }}
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(13,13,26,0.60)' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-8"
          style={{
            background: 'rgba(243,106,34,0.14)',
            border: '1px solid rgba(243,106,34,0.4)',
            color: '#f36a22',
          }}
        >
          🇿🇦 Now Available in South Africa
        </div>

        {/* Headline */}
        <h1
          className="font-extrabold leading-tight mb-6"
          style={{ fontSize: 'clamp(2.6rem, 8vw, 5rem)', color: '#F0EDE8' }}
        >
          Seal More. Sell More.{' '}
          <span style={{ color: '#f36a22' }}>Stand Out.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="mx-auto mb-10 leading-relaxed"
          style={{
            maxWidth: '620px',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: '#B8B5C8',
          }}
        >
          iPAK gives SA hospitality and retail businesses the power to package
          and sell fresh products in branded sealable cans — on-site, in minutes.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={STORE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl text-base font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{ background: '#f36a22' }}
          >
            Shop Now →
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl text-base font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{ background: '#25D366' }}
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: '#8B8FA8' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
