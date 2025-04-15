import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturedProducts from './components/FeaturedProducts'
import TeaBenefits from './components/TeaBenefits'
import Testimonials from './components/testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <TeaBenefits />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
