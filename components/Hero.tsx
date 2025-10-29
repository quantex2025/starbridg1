import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center -mt-20 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg z-0"></div>
      <div className="relative z-10 max-w-4xl p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-charcoal-gray dark:text-white leading-tight mb-4 fade-in-up" style={{ animationDelay: '0.2s' }}>
          Empowering Businesses with <span className="text-electric-cyan">AI, Automation</span> & Innovation.
        </h1>
        <p className="text-lg md:text-xl text-charcoal-gray/80 dark:text-silver-gray mb-8 fade-in-up" style={{ animationDelay: '0.4s' }}>
          We turn complex technology into simple, scalable growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#contact" 
            className="bg-electric-cyan text-midnight-blue font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-block w-full sm:w-auto"
          >
            Get Started
          </a>
          <a 
            href="#portfolio" 
            className="bg-neon-purple text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-block w-full sm:w-auto"
          >
            Our Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
