import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import HeroSection from "../components/HeroSection/HeroSection"
import UrlShortenerFeatures from '../components/UrlShortenerFeatures/UrlShortenerFeatures'
import Home from "./Home"
import FAQSection from '../components/FAQSection/FAQSection'
import Footer from "../components/Footer/Footer"
const LandingPage = () => {
  return (
    <div>
    <Navbar />
      <HeroSection />
      
      <Home />
      <UrlShortenerFeatures />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default LandingPage
