import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { StarIcon } from './components/icons/Icons';

const App: React.FC = () => {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set default theme
    document.documentElement.classList.add('dark');
    
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
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
      <div className="fixed inset-0 bg-midnight-blue flex flex-col items-center justify-center z-[100]">
        <StarIcon className="w-16 h-16 text-electric-cyan animate-pulse" />
        <p className="text-silver-gray mt-4 text-lg font-semibold">Starbridge Technologies</p>
      </div>
    );
  }

  return (
    <div className="bg-soft-white dark:bg-midnight-blue text-charcoal-gray dark:text-silver-gray min-h-screen transition-colors duration-500">
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
    </div>
  );
};

export default App;
