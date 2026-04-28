import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { useInView } from '../hooks/useInView'

const fieldStyle = {
  width: '100%',
  padding: '10px 13px',
  borderRadius: '8px',
  background: '#0D0D1A',
  border: '1px solid #252540',
  color: '#F0EDE8',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.15s',
  WebkitAppearance: 'none',
  appearance: 'none',
}

function Field({ label, required, children }) {
  return (
    <div>
      <label
        className="block font-medium mb-1.5"
        style={{ fontSize: '12px', color: '#8B8FA8' }}
      >
        {label}
        {required && <span style={{ color: '#f36a22', marginLeft: '3px' }}>*</span>}
      </label>
      {children}
    </div>
  )
}

export default function ConsultationForm() {
  const [ref, inView] = useInView()

  const [form, setForm] = useState({
    name: '',
    business_name: '',
    business_type: '',
    whatsapp_number: '',
    revenue_range: '',
    referral_source: '',
  })
  const [loading, setLoading]   = useState(false)
  const [success, setSuccess]   = useState(false)
  const [error, setError]       = useState(null)
  const [focused, setFocused]   = useState(null)

  const set = field => e => setForm(prev => ({ ...prev, [field]: e.target.value }))

  function getFieldStyle(name) {
    return {
      ...fieldStyle,
      borderColor: focused === name ? '#f36a22' : '#252540',
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error: err } = await supabase
      .from('consultation_leads')
      .insert([form])

    if (err) {
      setError('Something went wrong. Please try again or WhatsApp us directly.')
    } else {
      setSuccess(true)
    }
    setLoading(false)
  }

  return (
    <section id="consultation" style={{ padding: '5rem 0' }}>
      <div className="max-w-2xl mx-auto px-6">
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(40px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="text-center mb-16 max-w-3xl mx-auto w-full">
            <p
              className="font-semibold uppercase tracking-widest mb-3"
              style={{ fontSize: '11px', color: '#f36a22', letterSpacing: '0.12em' }}
            >
              Free Consultation
            </p>
            <h2
              className="font-extrabold leading-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 2.6rem)', color: '#F0EDE8' }}
            >
              Find Out How Much iPAK Can{' '}
              <span style={{ color: '#f36a22' }}>Add to Your Revenue</span>
            </h2>
            <p style={{ color: '#8B8FA8', fontSize: '15px', lineHeight: 1.6 }}>
              Book a free 15-minute consultation and we'll show you exactly how iPAK fits
              your venue and what it could add to your bottom line.
            </p>
          </div>

          {success ? (
            <div
              className="rounded-2xl p-12 text-center"
              style={{
                background: '#161626',
                border: '1px solid rgba(243,106,34,0.3)',
              }}
            >
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="font-bold mb-2" style={{ color: '#F0EDE8', fontSize: '20px' }}>
                You're booked in!
              </h3>
              <p style={{ color: '#8B8FA8', fontSize: '15px' }}>
                We'll WhatsApp you within 24 hours to schedule your consultation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-7 md:p-9 max-w-2xl mx-auto px-6 w-full"
              style={{ background: '#161626', border: '1px solid #252540' }}
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4 max-w-7xl mx-auto px-8 md:px-16 w-full">
                <Field label="Full Name" required>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={set('name')}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    style={getFieldStyle('name')}
                    required
                  />
                </Field>
                <Field label="Business Name" required>
                  <input
                    type="text"
                    placeholder="Your business"
                    value={form.business_name}
                    onChange={set('business_name')}
                    onFocus={() => setFocused('business_name')}
                    onBlur={() => setFocused(null)}
                    style={getFieldStyle('business_name')}
                    required
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4 max-w-7xl mx-auto px-8 md:px-16 w-full">
                <Field label="Business Type" required>
                  <div className="relative">
                    <select
                      value={form.business_type}
                      onChange={set('business_type')}
                      onFocus={() => setFocused('business_type')}
                      onBlur={() => setFocused(null)}
                      style={{ ...getFieldStyle('business_type'), paddingRight: '32px' }}
                      required
                    >
                      <option value="">Select type…</option>
                      <option>Coffee Shop</option>
                      <option>Restaurant & Bar</option>
                      <option>Events</option>
                      <option>Retail</option>
                      <option>Other</option>
                    </select>
                    <div
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                      style={{ color: '#8B8FA8' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </Field>
                <Field label="WhatsApp Number" required>
                  <input
                    type="tel"
                    placeholder="+27 XX XXX XXXX"
                    value={form.whatsapp_number}
                    onChange={set('whatsapp_number')}
                    onFocus={() => setFocused('whatsapp_number')}
                    onBlur={() => setFocused(null)}
                    style={getFieldStyle('whatsapp_number')}
                    required
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-7 max-w-7xl mx-auto px-8 md:px-16 w-full">
                <Field label="Monthly Revenue Range">
                  <div className="relative">
                    <select
                      value={form.revenue_range}
                      onChange={set('revenue_range')}
                      onFocus={() => setFocused('revenue_range')}
                      onBlur={() => setFocused(null)}
                      style={{ ...getFieldStyle('revenue_range'), paddingRight: '32px' }}
                    >
                      <option value="">Select range…</option>
                      <option>Under R50k</option>
                      <option>R50k–R200k</option>
                      <option>R200k–R500k</option>
                      <option>R500k+</option>
                    </select>
                    <div
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                      style={{ color: '#8B8FA8' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </Field>
                <Field label="How did you hear about us?">
                  <div className="relative">
                    <select
                      value={form.referral_source}
                      onChange={set('referral_source')}
                      onFocus={() => setFocused('referral_source')}
                      onBlur={() => setFocused(null)}
                      style={{ ...getFieldStyle('referral_source'), paddingRight: '32px' }}
                    >
                      <option value="">Select source…</option>
                      <option>Instagram</option>
                      <option>Facebook</option>
                      <option>TikTok</option>
                      <option>Google</option>
                      <option>Word of Mouth</option>
                      <option>Event</option>
                      <option>Other</option>
                    </select>
                    <div
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                      style={{ color: '#8B8FA8' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </Field>
              </div>

              {error && (
                <p className="text-sm text-center mb-4" style={{ color: '#EF4444' }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl text-base font-bold transition-all hover:opacity-90 disabled:opacity-50 p-6"
                style={{ background: '#f36a22', color: '#ffffff', cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? 'Booking…' : 'Book My Free Consultation →'}
              </button>

              <p className="text-center mt-4" style={{ fontSize: '12px', color: '#8B8FA8' }}>
                No spam. We'll only contact you to schedule your consultation.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
