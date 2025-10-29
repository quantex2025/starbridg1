import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray dark:text-white text-center mb-12">
          About Starbridge Technologies
          <div className="w-24 h-1 bg-electric-cyan mx-auto mt-2"></div>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="p-4">
                <img 
                    src="https://picsum.photos/seed/tech/800/600" 
                    alt="Starbridge Technologies Team" 
                    className="rounded-lg shadow-2xl w-full h-auto object-cover"
                />
            </div>
            <div className="text-left">
                <p className="text-lg text-charcoal-gray/80 dark:text-silver-gray mb-4">
                    Starbridge Technologies was founded with a single mission: to bridge the gap between complex technology and business success. We are a passionate team of developers, data scientists, and strategists dedicated to helping startups and established businesses thrive in the digital age.
                </p>
                <p className="text-lg text-charcoal-gray/80 dark:text-silver-gray">
                    Our approach is built on collaboration and innovation. We work closely with our clients to understand their unique challenges and deliver tailored solutions that drive growth, efficiency, and a competitive edge. By transforming businesses with smart tech, we aim to be the catalyst for their next big leap forward.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
