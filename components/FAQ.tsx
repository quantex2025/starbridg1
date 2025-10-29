
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
    <div className="border-b border-slate-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <ChevronDownIcon className={`w-6 h-6 text-electric-cyan transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="text-silver-gray pb-4">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        Frequently Asked Questions
        <div className="w-24 h-1 bg-electric-cyan mx-auto mt-2"></div>
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
