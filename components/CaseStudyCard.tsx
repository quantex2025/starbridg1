import React from 'react';
import type { CaseStudy } from '../constants';
import { ArrowRightIcon } from './icons/Icons';

interface CaseStudyCardProps {
    project: CaseStudy;
    onClick: () => void;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ project, onClick }) => (
    <div 
        className="group relative rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-royal-violet/30 transition-all duration-300 transform hover:-translate-y-2"
        onClick={onClick}
    >
        <img src={project.imageUrl} alt={project.title} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 w-full">
            <h3 className="text-2xl font-bold text-mist-white mb-2 font-display">{project.title}</h3>
            <p className="text-silver-gray/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 h-0 group-hover:h-auto">
                {project.description}
            </p>
            <div className="flex items-center text-neon-cyan font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                Read Case Study <ArrowRightIcon className="w-5 h-5 ml-2" />
            </div>
        </div>
    </div>
);
