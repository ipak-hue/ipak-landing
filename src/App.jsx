import Nav from './components/Nav'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import About from './components/About'
import Revenue from './components/Revenue'
import Products from './components/Products'
import WhyIPak from './components/WhyIPak'
import ConsultationForm from './components/ConsultationForm'
import Footer from './components/Footer'
import StickyBar from './components/StickyBar'

export default function App() {
  return (
    <div style={{ background: '#000000', minHeight: '100vh', paddingBottom: '72px' }}>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Revenue />
        <Products />
        <WhyIPak />
        <ConsultationForm />
      </main>
      <Footer />
      <StickyBar />
    </div>
  )
}
