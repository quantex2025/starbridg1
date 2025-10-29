import React from 'react';
import { SERVICES } from '../constants';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="group relative bg-white/10 dark:bg-deep-space-navy/30 p-6 rounded-lg border border-white/20 dark:border-slate-700/50 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-md hover:shadow-2xl hover:shadow-neon-cyan/20 [transform-style:preserve-3d]">
     <div className="absolute inset-0 bg-gradient-to-br from-royal-violet/20 to-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
     <div className="relative">
        <div className="text-neon-cyan mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-charcoal-gray dark:text-mist-white mb-2 font-display">{title}</h3>
        <p className="text-charcoal-gray/80 dark:text-silver-gray">{description}</p>
     </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-charcoal-gray dark:text-mist-white text-center mb-12">
        Our Services
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