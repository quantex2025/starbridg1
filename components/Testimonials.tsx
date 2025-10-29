import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { QuoteIcon, ChevronLeftIcon, ChevronRightIcon } from './icons/Icons';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg z-0 opacity-10 dark:opacity-20"></div>
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal-gray dark:text-mist-white text-center mb-12">
          What Our Clients Say
          <div className="w-24 h-1 bg-royal-violet mx-auto mt-2"></div>
        </h2>
        
        <div className="relative max-w-3xl mx-auto h-80 flex items-center justify-center">
            {TESTIMONIALS.map((testimonial, index) => {
                const offset = (index - currentIndex + TESTIMONIALS.length) % TESTIMONIALS.length;
                let transformStyle = '';
                let zIndex = 0;
                let opacity = 0;

                if (offset === 0) { // Center item
                    transformStyle = 'translateX(0) scale(1)';
                    zIndex = 3;
                    opacity = 1;
                } else if (offset === 1) { // Right item
                    transformStyle = 'translateX(50%) scale(0.8)';
                    zIndex = 2;
                    opacity = 0.5;
                } else if (offset === TESTIMONIALS.length - 1) { // Left item
                    transformStyle = 'translateX(-50%) scale(0.8)';
                    zIndex = 2;
                    opacity = 0.5;
                } else { // Hidden items
                    transformStyle = `translateX(${offset > TESTIMONIALS.length / 2 ? '-100%' : '100%'}) scale(0.6)`;
                    zIndex = 1;
                    opacity = 0;
                }

                return (
                    <div
                        key={testimonial.id}
                        className="absolute w-full md:w-4/5 p-8 transition-all duration-500 ease-in-out"
                        style={{ transform: transformStyle, zIndex, opacity }}
                    >
                        <div className="glass-card rounded-lg p-8 text-center">
                            <QuoteIcon className="w-12 h-12 text-neon-cyan/50 mx-auto mb-4" />
                            <p className="text-lg italic text-charcoal-gray/90 dark:text-silver-gray mb-6">"{testimonial.quote}"</p>
                            <div className="font-bold text-charcoal-gray dark:text-mist-white">{testimonial.name}</div>
                            <div className="text-sm text-royal-violet">{testimonial.company}</div>
                        </div>
                    </div>
                );
            })}
        </div>

        <div className="flex justify-center items-center mt-8 space-x-4">
            <button onClick={prevTestimonial} aria-label="Previous testimonial" className="p-2 rounded-full bg-white/20 dark:bg-slate-700/50 hover:bg-neon-cyan/20 text-neon-cyan transition-colors">
                <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button onClick={nextTestimonial} aria-label="Next testimonial" className="p-2 rounded-full bg-white/20 dark:bg-slate-700/50 hover:bg-neon-cyan/20 text-neon-cyan transition-colors">
                <ChevronRightIcon className="w-6 h-6" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
