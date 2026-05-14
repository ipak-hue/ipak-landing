import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { useInView } from '../hooks/useInView'

const BUSINESS_TYPES = [
  'Coffee Shop / Café',
  'Restaurant',
  'Bar / Pub',
  'Hotel',
  'Events / Festivals',
  'Retail',
  'Other',
]

const REVENUE_RANGES = [
  'Under R50,000 / month',
  'R50,000 – R150,000 / month',
  'R150,000 – R500,000 / month',
  'R500,000 – R1m / month',
  'R1m+ / month',
]

const SOURCES = [
  'Instagram',
  'Facebook',
  'TikTok',
  'Google',
  'Word of mouth',
  'Other',
]

export default function ConsultationForm() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({
    full_name: '',
    business_name: '',
    business_type: '',
    whatsapp: '',
    revenue_range: '',
    source: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [focused, setFocused] = useState(null)

  const handleChange = (name) => (e) =>
    setForm((prev) => ({ ...prev, [name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { error: insertError } = await supabase
        .from('consultation_leads')
        .insert([form])

      if (insertError) throw insertError
      setSuccess(true)
      setForm({
        full_name: '',
        business_name: '',
        business_type: '',
        whatsapp: '',
        revenue_range: '',
        source: '',
      })
    } catch (err) {
      setError('Something went wrong. Please try again or message us on WhatsApp.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const inputBase = (name) => ({
    background: '#0A0A0A',
    border: `1px solid ${focused === name ? '#f36a22' : '#1F1F1F'}`,
    borderRadius: '10px',
    padding: '14px 16px',
    color: '#FFFFFF',
    fontSize: '15px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  })

  return (
    <section
      id="consultation"
      style={{ background: '#000000', padding: '6rem 0' }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", width: "100%" }}>
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(40px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >

          {/* Header */}
          <div className="text-center mb-10">
            <p
              className="font-bold uppercase mb-4"
              style={{
                fontSize: '12px',
                color: '#f36a22',
                letterSpacing: '0.18em',
              }}
            >
              Free Consultation
            </p>
            <h2
              className="font-extrabold tracking-tight mb-4"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                lineHeight: 1.15,
                color: '#FFFFFF',
              }}
            >
              iPAK wants to{' '}
              <span style={{ color: '#f36a22' }}>grow your business</span>
            </h2>
            <p
              className="mx-auto"
              style={{
                color: '#A8A8B3',
                fontSize: '15px',
                lineHeight: 1.6,
                maxWidth: '520px',
              }}
            >
              Book a free 15-minute consultation and we'll show you exactly how iPAK fits your venue and what it could add to your bottom line.
            </p>
          </div>

          {success ? (
            <div
              className="text-center"
              style={{
                background: 'rgba(243,106,34,0.08)',
                border: '1px solid rgba(243,106,34,0.3)',
                borderRadius: '14px',
                padding: '2rem',
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>✓</div>
              <h3
                className="font-bold mb-2"
                style={{ color: '#FFFFFF', fontSize: '20px' }}
              >
                Got it — talk soon!
              </h3>
              <p style={{ color: '#A8A8B3', fontSize: '15px' }}>
                We'll be in touch via WhatsApp within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" required>
                  <input
                    type="text"
                    value={form.full_name}
                    onChange={handleChange('full_name')}
                    onFocus={() => setFocused('full_name')}
                    onBlur={() => setFocused(null)}
                    placeholder="Your name"
                    required
                    style={inputBase('full_name')}
                  />
                </Field>
                <Field label="Business Name" required>
                  <input
                    type="text"
                    value={form.business_name}
                    onChange={handleChange('business_name')}
                    onFocus={() => setFocused('business_name')}
                    onBlur={() => setFocused(null)}
                    placeholder="Your business"
                    required
                    style={inputBase('business_name')}
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Business Type" required>
                  <select
                    value={form.business_type}
                    onChange={handleChange('business_type')}
                    onFocus={() => setFocused('business_type')}
                    onBlur={() => setFocused(null)}
                    required
                    style={inputBase('business_type')}
                  >
                    <option value="">Select type...</option>
                    {BUSINESS_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </Field>
                <Field label="WhatsApp Number" required>
                  <input
                    type="tel"
                    value={form.whatsapp}
                    onChange={handleChange('whatsapp')}
                    onFocus={() => setFocused('whatsapp')}
                    onBlur={() => setFocused(null)}
                    placeholder="+27 XX XXX XXXX"
                    required
                    style={inputBase('whatsapp')}
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Monthly Revenue Range">
                  <select
                    value={form.revenue_range}
                    onChange={handleChange('revenue_range')}
                    onFocus={() => setFocused('revenue_range')}
                    onBlur={() => setFocused(null)}
                    style={inputBase('revenue_range')}
                  >
                    <option value="">Select range...</option>
                    {REVENUE_RANGES.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </Field>
                <Field label="How did you hear about us?">
                  <select
                    value={form.source}
                    onChange={handleChange('source')}
                    onFocus={() => setFocused('source')}
                    onBlur={() => setFocused(null)}
                    style={inputBase('source')}
                  >
                    <option value="">Select source...</option>
                    {SOURCES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>
              </div>

              {error && (
                <p
                  style={{
                    color: '#FF6B6B',
                    fontSize: '14px',
                    textAlign: 'center',
                  }}
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full font-bold transition-all"
                style={{
                  background: '#f36a22',
                  color: '#FFFFFF',
                  padding: '16px 24px',
                  borderRadius: '10px',
                  fontSize: '15px',
                  letterSpacing: '0.02em',
                  border: 'none',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1,
                }}
                onMouseEnter={(e) => !loading && (e.currentTarget.style.background = '#d4561a')}
                onMouseLeave={(e) => !loading && (e.currentTarget.style.background = '#f36a22')}
              >
                {loading ? 'Sending...' : 'Book My Free Consultation →'}
              </button>

              <p
                className="text-center"
                style={{ color: '#666', fontSize: '12px', marginTop: '8px' }}
              >
                No spam. We'll only contact you to schedule your consultation.
              </p>

            </form>
          )}

        </div>
      </div>
    </section>
  )
}

function Field({ label, required, children }) {
  return (
    <div>
      <label
        className="block mb-2 font-medium"
        style={{ color: '#FFFFFF', fontSize: '13px' }}
      >
        {label} {required && <span style={{ color: '#f36a22' }}>*</span>}
      </label>
      {children}
    </div>
  )
}
