import React from 'react';
import { CodeIcon, AiIcon, WebIcon, ServerIcon, AutomationIcon, DataScienceIcon, InstagramIcon, LinkedInIcon, MailIcon } from './components/icons/Icons';

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export const SERVICES = [
  {
    icon: <CodeIcon className="w-10 h-10 text-neon-cyan" />,
    title: 'Custom Software Development',
    description: 'Tailored software solutions to meet your unique business needs, from startups to enterprises.',
  },
  {
    icon: <AiIcon className="w-10 h-10 text-neon-cyan" />,
    title: 'AI & Data Science',
    description: 'Leverage AI for smart automation, predictive analytics, and data-driven decision-making tools.',
  },
  {
    icon: <WebIcon className="w-10 h-10 text-neon-cyan" />,
    title: 'Web Development',
    description: 'Full-stack websites and web apps built with modern technologies like React, Next.js, and Node.js.',
  },
  {
    icon: <ServerIcon className="w-10 h-10 text-neon-cyan" />,
    title: 'Backend Systems',
    description: 'Scalable APIs, robust microservices, and seamless cloud integrations for powerful applications.',
  },
  {
    icon: <AutomationIcon className="w-10 h-10 text-neon-cyan" />,
    title: 'Automation Solutions',
    description: 'Streamline your operations with our process automation services using Python, RPA, and AI agents.',
  },
  {
    icon: <DataScienceIcon className="w-10 h-10 text-neon-cyan" />,
    title: 'Predictive Analytics',
    description: 'Unlock future trends and insights from your data to gain a competitive advantage in your market.',
  },
];

export const PORTFOLIO_PROJECTS = [
    {
        title: 'Project Alpha',
        description: 'An AI-powered analytics dashboard for e-commerce businesses.',
        imageUrl: 'https://picsum.photos/seed/alpha/600/400',
        link: '#',
        tags: ['React', 'AI', 'Data Visualization']
    },
    {
        title: 'Project Beta',
        description: 'A scalable microservices backend for a high-traffic mobile application.',
        imageUrl: 'https://picsum.photos/seed/beta/600/400',
        link: '#',
        tags: ['Node.js', 'Microservices', 'Cloud']
    },
    {
        title: 'Project Gamma',
        description: 'An automated workflow system for a logistics company to optimize delivery routes.',
        imageUrl: 'https://picsum.photos/seed/gamma/600/400',
        link: '#',
        tags: ['Python', 'Automation', 'RPA']
    }
];

export const FAQS = [
    {
        question: 'What types of businesses do you work with?',
        answer: 'We work with a wide range of businesses, from early-stage startups to established enterprises across various industries. Our solutions are scalable and tailored to your specific needs.'
    },
    {
        question: 'How long does a typical project take?',
        answer: 'The project timeline varies depending on the complexity and scope of the work. After an initial consultation, we provide a detailed project plan with estimated timelines.'
    },
    {
        question: 'What is your development process?',
        answer: 'We follow an agile development methodology, which allows for flexibility and collaboration. Our process includes discovery, design, development, testing, and deployment, with regular check-ins to ensure alignment.'
    },
    {
        question: 'Do you provide support after the project is launched?',
        answer: 'Yes, we offer ongoing support and maintenance packages to ensure your software or system runs smoothly and stays up-to-date with the latest technologies.'
    }
];

export const SOCIAL_LINKS = [
    { name: 'Instagram', url: 'https://www.instagram.com/starbridgetechnologies', icon: InstagramIcon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/starbridge-technologies-aa9a59388/', icon: LinkedInIcon },
    { name: 'Email', url: 'mailto:starbridgetechnologies@gmail.com', icon: MailIcon },
];