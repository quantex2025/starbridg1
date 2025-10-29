import React from 'react';
import { SERVICES } from '../constants';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white/60 dark:bg-charcoal-gray/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-electric-cyan transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm hover:shadow-2xl hover:shadow-electric-cyan/20">
    <div className="text-electric-cyan mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-charcoal-gray dark:text-white mb-2">{title}</h3>
    <p className="text-charcoal-gray/80 dark:text-silver-gray">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray dark:text-white text-center mb-12">
        Our Services
        <div className="w-24 h-1 bg-electric-cyan mx-auto mt-2"></div>
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
