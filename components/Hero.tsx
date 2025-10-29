import React, { useEffect, useState, useMemo } from 'react';

const ParticleBackground: React.FC = () => {
    const particles = useMemo(() => Array.from({ length: 100 }).map((_, i) => {
        const side = Math.random() < 0.5 ? 0 : 1; // 0 for left, 1 for right
        return {
            id: i,
            size: Math.random() * 2.5 + 1,
            duration: Math.random() * 20 + 15,
            delay: Math.random() * 15,
            startX: side === 0 ? `${Math.random() * 20 - 10}vw` : `${Math.random() * 20 + 90}vw`,
            startY: `${Math.random() * 100}vh`,
            endX: side === 0 ? `${Math.random() * 30 + 60}vw` : `${Math.random() * 30 + 10}vw`,
            endY: `${Math.random() * 100}vh`,
        };
    }), []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {particles.map(p => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        top: p.startY,
                        left: p.startX,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                        // @ts-ignore
                        '--x-end': p.endX,
                        '--y-end': p.endY,
                    }}
                />
            ))}
        </div>
    );
};

const KineticText: React.FC<{ text: string; as: 'h1' | 'p'; className?: string; stagger?: number }> = ({ text, as, className, stagger = 50 }) => {
    const Tag = as;
    const letters = text.split('').map((char, i) => (
        <span
            key={i}
            className="inline-block"
            style={{ animation: `fadeInUp 0.8s ease-out forwards`, animationDelay: `${i * stagger}ms`, opacity: 0 }}
        >
            {char === ' ' ? '\u00A0' : char}
        </span>
    ));

    return <Tag className={className}>{letters}</Tag>;
};


const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center -mt-20 relative overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 animated-gradient-bg z-0 opacity-50 dark:opacity-100"></div>
      <div className="relative z-10 max-w-4xl p-4">
        <KineticText 
          as="h1"
          text="Empowering Businesses with AI, Automation & Innovation." 
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal-gray dark:text-mist-white leading-tight mb-4"
        />
        <p className="text-lg md:text-xl text-charcoal-gray/80 dark:text-silver-gray mb-8" style={{ animation: 'fadeInUp 0.8s ease-out 1.5s forwards', opacity: 0 }}>
          We turn complex technology into simple, scalable growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animation: 'fadeInUp 0.8s ease-out 2s forwards', opacity: 0 }}>
          <a 
            href="#contact" 
            className="bg-neon-cyan text-deep-space-navy font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-block w-full sm:w-auto hover:shadow-glow-cyan"
          >
            Let's Build Together
          </a>
          <a 
            href="#portfolio" 
            className="bg-royal-violet text-mist-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-block w-full sm:w-auto hover:shadow-glow-violet"
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;