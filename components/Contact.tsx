import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });
  const [status, setStatus] = useState('');
  
  const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; // Replace with your Formspree form ID

  const validate = () => {
    let tempErrors = { name: '', email: '' };
    let isValid = true;
    if (!formData.name) {
      tempErrors.name = 'Name is required.';
      isValid = false;
    }
    if (!formData.email) {
      tempErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid.';
      isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    
    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then(response => {
        if (response.ok) {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setStatus('api_error');
        }
    })
    .catch(() => setStatus('api_error'));
  };

  return (
    <section id="contact" className="py-20">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-gray dark:text-mist-white mb-4">
              Let's Build the Future
            </h2>
            <p className="text-charcoal-gray/80 dark:text-silver-gray max-w-2xl mx-auto">
              Have a project in mind, or just want to explore possibilities? We'd love to connect. Schedule a free discovery call or send us a message.
            </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 glass-card p-8 rounded-lg">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-charcoal-gray dark:text-mist-white mb-4 font-display">Start a Conversation</h3>
            <p className="text-charcoal-gray/80 dark:text-silver-gray mb-6">Fill out the form, or for a more direct approach, schedule a 15-minute introductory call with our team.</p>
            <a 
              href="https://calendly.com/your-username" // Replace with your Calendly link
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-royal-violet text-mist-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-block w-full text-center hover:shadow-glow-violet mb-8"
            >
              Schedule a 15-Min Intro
            </a>
            <div className="space-y-4">
              {SOCIAL_LINKS.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-charcoal-gray dark:text-silver-gray hover:text-neon-cyan transition-colors duration-300">
                  <link.icon className="w-6 h-6" />
                  <span>{link.name === 'Email' ? 'starbridgetechnologies@gmail.com' : link.name}</span>
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 md:col-span-3">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-charcoal-gray dark:text-silver-gray mb-2">Name</label>
              <input 
                type="text" id="name" value={formData.name} onChange={handleChange}
                className="w-full bg-mist-white/50 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-700 rounded-md py-2 px-4 text-charcoal-gray dark:text-white focus:outline-none focus:ring-2 focus:ring-royal-violet focus:border-royal-violet transition-shadow duration-300 focus:shadow-glow-violet"
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal-gray dark:text-silver-gray mb-2">Email</label>
              <input 
                type="email" id="email" value={formData.email} onChange={handleChange}
                className="w-full bg-mist-white/50 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-700 rounded-md py-2 px-4 text-charcoal-gray dark:text-white focus:outline-none focus:ring-2 focus:ring-royal-violet focus:border-royal-violet transition-shadow duration-300 focus:shadow-glow-violet"
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-charcoal-gray dark:text-silver-gray mb-2">Message</label>
              <textarea 
                id="message" rows={5} value={formData.message} onChange={handleChange}
                className="w-full bg-mist-white/50 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-700 rounded-md py-2 px-4 text-charcoal-gray dark:text-white focus:outline-none focus:ring-2 focus:ring-royal-violet focus:border-royal-violet transition-shadow duration-300 focus:shadow-glow-violet"
                required
              ></textarea>
            </div>
            <div className="text-left">
              <button 
                type="submit"
                className="bg-neon-cyan text-deep-space-navy font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-block disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-glow-cyan"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
             {status === 'success' && <p className="text-green-500 mt-4">Message sent! We'll be in touch soon.</p>}
             {status === 'error' && <p className="text-red-500 mt-4">Please correct the errors above.</p>}
             {status === 'api_error' && <p className="text-red-500 mt-4">Something went wrong. Please try again.</p>}
          </form>
        </div>
    </section>
  );
};

export default Contact;