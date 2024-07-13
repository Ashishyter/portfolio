import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ImageSlider from './components/ImageSlider/ImageSlider';
import About from './components/About/About';
import Skill from './components/Skill/Skill'
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
     <Navbar />
     <ImageSlider />
     <About />
     <Skill />
     <Portfolio />
     <Testimonial />
     <Contact />
     <Footer />
     
    </>
  )
}

export default App
