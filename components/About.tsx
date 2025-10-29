
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          About Starbridge Technologies
          <div className="w-24 h-1 bg-electric-cyan mx-auto mt-2"></div>
        </h2>
        <p className="text-lg text-silver-gray mb-4">
          Starbridge Technologies was founded with a single mission: to bridge the gap between complex technology and business success. We are a passionate team of developers, data scientists, and strategists dedicated to helping startups and established businesses thrive in the digital age.
        </p>
        <p className="text-lg text-silver-gray">
          Our approach is built on collaboration and innovation. We work closely with our clients to understand their unique challenges and deliver tailored solutions that drive growth, efficiency, and a competitive edge. By transforming businesses with smart tech, we aim to be the catalyst for their next big leap forward.
        </p>
      </div>
    </section>
  );
};

export default About;
