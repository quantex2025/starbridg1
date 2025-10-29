import React from 'react';
import { CASE_STUDIES } from '../constants';
import type { CaseStudy } from '../constants';
import { CaseStudyCard } from './CaseStudyCard';

interface PortfolioProps {
  onCaseStudyClick: (caseStudy: CaseStudy) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onCaseStudyClick }) => {
  return (
    <section id="portfolio" className="py-20 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-charcoal-gray dark:text-mist-white text-center mb-12">
        Our Work & Case Studies
        <div className="w-24 h-1 bg-neon-cyan mx-auto mt-2"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CASE_STUDIES.map((project) => (
          <CaseStudyCard 
            key={project.id} 
            project={project} 
            onClick={() => onCaseStudyClick(project)} 
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
