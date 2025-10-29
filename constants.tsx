import React from 'react';
import { CodeIcon, AiIcon, WebIcon, ServerIcon, AutomationIcon, DataScienceIcon, InstagramIcon, LinkedInIcon, MailIcon } from './components/icons/Icons';

export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    results: string[];
  };
}

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Case Studies' },
  { href: '#testimonials', label: 'Testimonials' },
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

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: 1,
        title: 'Project Alpha',
        description: 'An AI-powered analytics dashboard for e-commerce businesses.',
        imageUrl: 'https://picsum.photos/seed/alpha/600/400',
        tags: ['React', 'AI', 'Data Visualization', 'TypeScript', 'Node.js'],
        details: {
            challenge: 'An e-commerce client was struggling to make sense of vast amounts of sales data. They needed a way to visualize trends, predict customer behavior, and optimize inventory in real-time.',
            solution: 'We developed a custom, AI-driven analytics dashboard. The platform ingests data from multiple sources, uses machine learning models to generate predictive insights, and presents them in an intuitive, interactive interface.',
            results: [
                'Increased sales by 20% through better inventory management.',
                'Reduced marketing spend by 15% by identifying high-value customer segments.',
                'Improved user engagement by 40% on their platform.'
            ]
        }
    },
    {
        id: 2,
        title: 'Project Beta',
        description: 'A scalable microservices backend for a high-traffic mobile application.',
        imageUrl: 'https://picsum.photos/seed/beta/600/400',
        tags: ['Node.js', 'Microservices', 'Cloud', 'Docker', 'Kubernetes'],
        details: {
            challenge: 'A fast-growing mobile app was experiencing performance bottlenecks and downtime due to its monolithic backend architecture, hindering their ability to scale.',
            solution: 'We re-architected their backend into a distributed system of microservices, deployed on a scalable cloud infrastructure using Docker and Kubernetes. This improved resilience, performance, and allowed for independent scaling of services.',
            results: [
                'Achieved 99.99% uptime, even during peak traffic.',
                'Decreased API response times by over 60%.',
                'Enabled faster feature development and deployment cycles.'
            ]
        }
    },
    {
        id: 3,
        title: 'Project Gamma',
        description: 'An automated workflow system for a logistics company to optimize delivery routes.',
        imageUrl: 'https://picsum.photos/seed/gamma/600/400',
        tags: ['Python', 'Automation', 'RPA', 'AI Agents'],
        details: {
            challenge: 'A logistics company was manually planning hundreds of delivery routes daily, a process that was time-consuming, inefficient, and prone to human error.',
            solution: 'We built an intelligent automation system that uses AI agents to analyze traffic data, delivery constraints, and vehicle capacity to generate optimized routes in seconds. The system also automates dispatch and customer notifications.',
            results: [
                'Cut fuel costs by 25% through optimized routing.',
                'Reduced route planning time by 95%.',
                'Improved on-time delivery rate to 98%.'
            ]
        }
    }
];

export const TESTIMONIALS = [
    {
        id: 1,
        name: 'Jane Doe',
        company: 'CEO of Innovate Inc.',
        quote: 'Starbridge Technologies transformed our operations. Their AI solution gave us insights we never thought possible. A true partner in innovation.',
    },
    {
        id: 2,
        name: 'John Smith',
        company: 'CTO at TechForward',
        quote: 'The backend system they built for us is a masterpiece of engineering. Scalable, reliable, and incredibly fast. Our developers love it.',
    },
    {
        id: 3,
        name: 'Emily White',
        company: 'Founder of ConnectApp',
        quote: 'Working with Starbridge was a game-changer. They understood our vision and delivered a product that exceeded all our expectations. Highly recommended!',
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
