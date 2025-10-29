import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDownIcon } from './icons/Icons';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/20 dark:border-slate-700/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
      >
        <span className="text-lg font-medium text-charcoal-gray dark:text-mist-white">{question}</span>
        <ChevronDownIcon className={`w-6 h-6 text-neon-cyan transform transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} style={{ transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'}} />
      </button>
      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'}}>
        <div className="overflow-hidden">
          <p className="text-charcoal-gray/80 dark:text-silver-gray pb-4">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-charcoal-gray dark:text-mist-white text-center mb-12">
        Frequently Asked Questions
        <div className="w-24 h-1 bg-neon-cyan mx-auto mt-2"></div>
      </h2>
      <div className="max-w-3xl mx-auto">
        {FAQS.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;