
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center -mt-20">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
          Empowering Businesses with <span className="text-electric-cyan">AI, Automation</span> & Innovation.
        </h1>
        <p className="text-lg md:text-xl text-silver-gray mb-8">
          We turn complex technology into simple, scalable solutions.
        </p>
        <a 
          href="#contact" 
          className="bg-electric-cyan text-midnight-blue font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-block"
        >
          Let’s Build Together
        </a>
      </div>
    </section>
  );
};

export default Hero;
