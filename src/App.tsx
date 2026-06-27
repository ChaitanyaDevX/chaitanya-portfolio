import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Page Load Intro Animation */}
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Portfolio Layout */}
      {!loading && (
        <div className="min-h-screen bg-slate-950 text-gray-100 flex flex-col selection:bg-purple-500/30 selection:text-white">
          <Navbar />
          
          <main className="flex-grow">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Achievements />
            <Contact />
          </main>

          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}
