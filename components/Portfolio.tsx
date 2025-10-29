import React from 'react';
import { PORTFOLIO_PROJECTS } from '../constants';

const PortfolioCard: React.FC<{ title: string; description: string; imageUrl: string; link: string; tags: string[] }> = ({ title, description, imageUrl, link, tags }) => (
    <div className="flex-shrink-0 w-80 md:w-96 snap-center bg-white dark:bg-deep-space-navy/50 rounded-lg overflow-hidden group border border-white/20 dark:border-slate-700 hover:border-royal-violet transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-royal-violet/20">
        <div className="relative overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center p-4">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-4">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="bg-neon-cyan text-deep-space-navy font-bold py-2 px-6 rounded-full text-sm hover:bg-opacity-90 transition-all">
                        View Project
                    </a>
                </div>
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-charcoal-gray dark:text-mist-white mb-2 font-display">{title}</h3>
            <p className="text-charcoal-gray/80 dark:text-silver-gray mb-4 text-sm">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span key={tag} className="bg-neon-cyan/10 text-neon-cyan text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
                ))}
            </div>
        </div>
    </div>
);


const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-charcoal-gray dark:text-mist-white text-center mb-12">
        Our Portfolio
        <div className="w-24 h-1 bg-neon-cyan mx-auto mt-2"></div>
      </h2>
      <div className="flex overflow-x-auto space-x-8 pb-8 snap-x snap-mandatory container mx-auto px-6 md:px-0">
        {PORTFOLIO_PROJECTS.map((project, index) => (
          <PortfolioCard key={index} {...project} />
        ))}
         {PORTFOLIO_PROJECTS.map((project, index) => (
          <PortfolioCard key={index+3} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;