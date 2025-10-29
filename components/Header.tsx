import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { MenuIcon, XIcon, StarIcon, SunIcon, MoonIcon } from './icons/Icons';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-mist-white/80 dark:bg-deep-space-navy/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-2 text-charcoal-gray dark:text-mist-white text-xl font-bold font-display">
            <StarIcon className="w-6 h-6 text-neon-cyan" />
            <span>Starbridge</span>
          </a>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-charcoal-gray dark:text-silver-gray hover:text-neon-cyan dark:hover:text-neon-cyan transition-colors duration-300 font-medium">
                  {link.label}
                </a>
              ))}
            </nav>
            <button onClick={toggleTheme} className="text-charcoal-gray dark:text-silver-gray hover:text-neon-cyan dark:hover:text-neon-cyan transition-colors duration-300 focus:outline-none relative w-6 h-6">
              <SunIcon className={`w-6 h-6 absolute top-0 left-0 transition-all duration-500 ${theme === 'dark' ? 'opacity-100 transform rotate-0 scale-100' : 'opacity-0 transform -rotate-90 scale-0'}`} />
              <MoonIcon className={`w-6 h-6 absolute top-0 left-0 transition-all duration-500 ${theme === 'light' ? 'opacity-100 transform rotate-0 scale-100' : 'opacity-0 transform rotate-90 scale-0'}`} />
            </button>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-charcoal-gray dark:text-white focus:outline-none">
                {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-mist-white/95 dark:bg-deep-space-navy/95 backdrop-blur-lg absolute top-full left-0 w-full`}>
        <nav className="flex flex-col items-center space-y-4 py-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-charcoal-gray dark:text-silver-gray hover:text-neon-cyan dark:hover:text-neon-cyan transition-colors duration-300 text-lg font-medium">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;