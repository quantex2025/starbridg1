import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { StarIcon, ArrowUpIcon } from './components/icons/Icons';

const ScrollToTopButton: React.FC<{isVisible: boolean}> = ({ isVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-neon-cyan/80 text-deep-space-navy p-3 rounded-full shadow-lg hover:bg-neon-cyan transition-all duration-300 transform hover:scale-110 focus:outline-none z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
};


const App: React.FC = () => {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    const timer = setTimeout(() => setLoading(false), 2000);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-deep-space-navy flex flex-col items-center justify-center z-[100]">
        <StarIcon className="w-16 h-16 text-neon-cyan animate-pulse" />
        <p className="text-mist-white mt-4 text-lg font-semibold font-display">Starbridge Technologies</p>
      </div>
    );
  }

  return (
    <div className="bg-mist-white dark:bg-deep-space-navy text-charcoal-gray dark:text-silver-gray min-h-screen transition-colors duration-500">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="container mx-auto px-6 md:px-12">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton isVisible={showScrollTop} />
    </div>
  );
};

export default App;