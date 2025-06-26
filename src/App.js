import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Reviews from './sections/Reviews';
import Contact from './sections/Contact';
import BackToTop from './components/BackToTop';



function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Projects />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
