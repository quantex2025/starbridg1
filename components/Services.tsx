import React from 'react';
import { SERVICES } from '../constants';
import './Services.css'; // We'll create this file for the animation

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="group relative glass-card p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-2 [transform-style:preserve-3d] overflow-hidden">
     <div className="relative z-10">
        <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full bg-neon-cyan/10 animate-pulse-slow"></div>
            <div className="relative icon-orbit-container group-hover:animate-orbit-fast">
                {icon}
            </div>
        </div>
        <h3 className="text-xl font-bold text-charcoal-gray dark:text-mist-white mb-2 font-display">{title}</h3>
        <p className="text-charcoal-gray/80 dark:text-silver-gray">{description}</p>
     </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20">
       <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(10px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(10px) rotate(-360deg); }
        }
        .icon-orbit-container > * {
            animation: orbit 10s linear infinite;
        }
        .group:hover .icon-orbit-container > * {
            animation: orbit 3s linear infinite;
        }
        @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.8; }
        }
        .animate-pulse-slow {
            animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
    `}</style>
      <h2 className="text-4xl md:text-5xl font-bold text-charcoal-gray dark:text-mist-white text-center mb-12">
        Our Core Services
        <div className="w-24 h-1 bg-neon-cyan mx-auto mt-2"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
};

export default Services;
