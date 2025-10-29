import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Mock API call
    setTimeout(() => {
        if (name && email && message) {
            setStatus('success');
            setName('');
            setEmail('');
            setMessage('');
        } else {
            setStatus('error');
        }
        setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-gray dark:text-mist-white mb-4">
              Get in Touch
            </h2>
            <p className="text-charcoal-gray/80 dark:text-silver-gray">
              Have a project in mind? We'd love to hear from you.
            </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white/10 dark:bg-deep-space-navy/30 backdrop-blur-md p-8 rounded-lg shadow-lg border border-white/20 dark:border-slate-700/50">
          <div>
            <h3 className="text-2xl font-bold text-charcoal-gray dark:text-mist-white mb-4 font-display">Contact Information</h3>
            <p className="text-charcoal-gray/80 dark:text-silver-gray mb-6">Fill out the form, or reach out to us directly through one of the channels below.</p>
            <div className="space-y-4">
              {SOCIAL_LINKS.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-charcoal-gray dark:text-silver-gray hover:text-neon-cyan transition-colors duration-300">
                  <link.icon className="w-6 h-6" />
                  <span>{link.name === 'Email' ? 'starbridgetechnologies@gmail.com' : link.name}</span>
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-charcoal-gray dark:text-silver-gray mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-mist-white/50 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-700 rounded-md py-2 px-4 text-charcoal-gray dark:text-white focus:outline-none focus:ring-2 focus:ring-royal-violet focus:border-royal-violet transition-shadow duration-300 focus:shadow-glow-violet"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal-gray dark:text-silver-gray mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-mist-white/50 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-700 rounded-md py-2 px-4 text-charcoal-gray dark:text-white focus:outline-none focus:ring-2 focus:ring-royal-violet focus:border-royal-violet transition-shadow duration-300 focus:shadow-glow-violet"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-charcoal-gray dark:text-silver-gray mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
             {status === 'success' && <p className="text-green-500 mt-4">Message sent successfully!</p>}
             {status === 'error' && <p className="text-red-500 mt-4">Please fill out all fields.</p>}
          </form>
        </div>
    </section>
  );
};

export default Contact;