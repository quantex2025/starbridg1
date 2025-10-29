
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const recipientEmail = "starbridgetechnologies@gmail.com";
  const subject = `New Inquiry from ${name}`;
  
  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-silver-gray mb-12">
          Have a project in mind? We'd love to hear from you.
        </p>
        <form className="text-left space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-silver-gray mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-electric-cyan"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-silver-gray mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-electric-cyan"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-silver-gray mb-2">Message</label>
            <textarea 
              id="message" 
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-electric-cyan"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <a 
              href={mailtoLink}
              className="bg-electric-cyan text-midnight-blue font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Send Message
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
