import React, { useEffect, useState, useMemo } from 'react';

const ParticleBackground: React.FC = () => {
    const particles = useMemo(() => Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        xEnd: `${Math.random() * 100}vw`,
        yEnd: `${Math.random() * 100}vh`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
    })), []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {particles.map(p => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        top: p.top,
                        left: p.left,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                        // @ts-ignore
                        '--x-end': p.xEnd,
                        '--y-end': p.yEnd,
                    }}
                />
            ))}
        </div>
    );
};

const AnimatedText: React.FC<{ text: string; className?: string; delay?: number }> = ({ text, className, delay = 0 }) => {
    const [visibleText, setVisibleText] = useState('');

    useEffect(() => {
        // Fix: Use ReturnType<typeof setTimeout> for browser compatibility instead of NodeJS.Timeout
        let timeoutId: ReturnType<typeof setTimeout>;
        const startAnimation = () => {
            let i = 0;
            const intervalId = setInterval(() => {
                if (i < text.length) {
                    setVisibleText(text.substring(0, i + 1));
                    i++;
                } else {
                    clearInterval(intervalId);
                }
            }, 50);
        };
        timeoutId = setTimeout(startAnimation, delay);
        return () => clearTimeout(timeoutId);
    }, [text, delay]);

    return <span className={className}>{visibleText}</span>;
};


const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center -mt-20 relative overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 animated-gradient-bg z-0 opacity-50 dark:opacity-100"></div>
      <div className="relative z-10 max-w-4xl p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal-gray dark:text-mist-white leading-tight mb-4 fade-in-up">
          Empowering Businesses with <span className="text-neon-cyan">AI, Automation</span> & Innovation.
        </h1>
        <p className="text-lg md:text-xl text-charcoal-gray/80 dark:text-silver-gray mb-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <AnimatedText text="We turn complex technology into simple, scalable growth." delay={500} />
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up" style={{ animationDelay: '0.4s' }}>
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