import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { StarIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/50 dark:bg-deep-space-navy/30 border-t border-white/20 dark:border-slate-800/50 py-8">
      <div className="container mx-auto px-6 md:px-12 text-center text-charcoal-gray/80 dark:text-silver-gray">
        <div className="flex justify-center items-center space-x-2 text-charcoal-gray dark:text-mist-white text-xl font-bold mb-4 font-display">
            <StarIcon className="w-6 h-6 text-neon-cyan drop-shadow-[0_0_5px_theme(colors.neon-cyan)]" />
            <span>Starbridge Technologies</span>
        </div>
        <p className="mb-4">"Transforming businesses with smart tech."</p>
        <div className="flex justify-center space-x-6 mb-6">
          {SOCIAL_LINKS.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-charcoal-gray/80 dark:text-silver-gray hover:text-neon-cyan transition-colors duration-300">
              <span className="sr-only">{link.name}</span>
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Starbridge Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;