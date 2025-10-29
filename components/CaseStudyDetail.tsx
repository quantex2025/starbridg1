import React, { useEffect } from 'react';
import type { CaseStudy } from '../constants';
import { XIcon, CheckCircleIcon } from './icons/Icons';

interface CaseStudyDetailProps {
    caseStudy: CaseStudy;
    onClose: () => void;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ caseStudy, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 bg-deep-space-navy/80 backdrop-blur-lg z-[100] flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="bg-deep-space-navy border border-slate-700/50 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-slide-up"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-silver-gray hover:text-neon-cyan transition-colors"
                    aria-label="Close case study"
                >
                    <XIcon className="w-8 h-8" />
                </button>
                
                <img src={caseStudy.imageUrl} alt={caseStudy.title} className="w-full h-64 md:h-80 object-cover rounded-t-lg"/>

                <div className="p-8 md:p-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-mist-white mb-2 font-display">{caseStudy.title}</h2>
                    <p className="text-silver-gray/80 mb-8">{caseStudy.description}</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-neon-cyan mb-3 font-display">The Challenge</h3>
                            <p className="text-silver-gray">{caseStudy.details.challenge}</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-neon-cyan mb-3 font-display">The Solution</h3>
                            <p className="text-silver-gray">{caseStudy.details.solution}</p>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-2xl font-bold text-royal-violet mb-4 font-display">Results & Impact</h3>
                        <ul className="space-y-3">
                            {caseStudy.details.results.map((result, i) => (
                                <li key={i} className="flex items-start space-x-3">
                                    <CheckCircleIcon className="w-6 h-6 text-neon-cyan flex-shrink-0 mt-1"/>
                                    <span className="text-silver-gray">{result}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-10 pt-6 border-t border-slate-700/50">
                        <h4 className="text-lg font-semibold text-mist-white mb-4">Technology Stack</h4>
                        <div className="flex flex-wrap gap-3">
                            {caseStudy.tags.map(tag => (
                                <span key={tag} className="bg-neon-cyan/10 text-neon-cyan text-sm font-semibold px-3 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }

                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default CaseStudyDetail;
