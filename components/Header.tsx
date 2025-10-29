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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-soft-white/80 dark:bg-midnight-blue/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-2 text-charcoal-gray dark:text-white text-xl font-bold">
            <StarIcon className="w-6 h-6 text-electric-cyan" />
            <span>Starbridge</span>
          </a>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-charcoal-gray dark:text-silver-gray hover:text-electric-cyan dark:hover:text-electric-cyan transition-colors duration-300 font-medium">
                  {link.label}
                </a>
              ))}
            </nav>
            <button onClick={toggleTheme} className="text-charcoal-gray dark:text-silver-gray hover:text-electric-cyan dark:hover:text-electric-cyan transition-colors duration-300 focus:outline-none">
              {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
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
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-soft-white/95 dark:bg-midnight-blue/95 backdrop-blur-lg absolute top-full left-0 w-full`}>
        <nav className="flex flex-col items-center space-y-4 py-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-charcoal-gray dark:text-silver-gray hover:text-electric-cyan dark:hover:text-electric-cyan transition-colors duration-300 text-lg font-medium">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
