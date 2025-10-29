
import React from 'react';
import { PORTFOLIO_PROJECTS } from '../constants';

const PortfolioCard: React.FC<{ title: string; description: string; imageUrl: string; link: string; tags: string[] }> = ({ title, description, imageUrl, link, tags }) => (
    <div className="bg-slate-800/50 rounded-lg overflow-hidden group border border-slate-700 hover:border-electric-cyan transition-all duration-300">
        <div className="relative overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-silver-gray mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map(tag => (
                    <span key={tag} className="bg-electric-cyan/10 text-electric-cyan text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
                ))}
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-electric-cyan font-semibold hover:underline">
                View Project &rarr;
            </a>
        </div>
    </div>
);


const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        Our Portfolio
        <div className="w-24 h-1 bg-electric-cyan mx-auto mt-2"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO_PROJECTS.map((project, index) => (
          <PortfolioCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
