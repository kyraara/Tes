import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    excerpt: 'A responsive portfolio website built with React, TypeScript, and Tailwind.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    image: '/images/project1.svg',
    repoUrl: 'https://github.com/example/portfolio',
    demoUrl: 'https://example.com',
    tags: ['web', 'frontend'],
    content: 'Detailed description about the personal portfolio project.',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Store',
    excerpt: 'Full-stack e-commerce application with Stripe integration.',
    tech: ['Next.js', 'Node', 'Stripe'],
    image: '/images/project2.svg',
    repoUrl: 'https://github.com/example/ecommerce',
    demoUrl: 'https://shop.example.com',
    tags: ['fullstack', 'commerce'],
    content: 'Project details for the e-commerce store.',
  },
  {
    id: 'chatapp',
    title: 'Realtime Chat App',
    excerpt: 'Socket.io powered chat application with rooms and private messages.',
    tech: ['React', 'Socket.io'],
    image: '/images/project3.svg',
    repoUrl: 'https://github.com/example/chatapp',
    demoUrl: 'https://chat.example.com',
    tags: ['realtime', 'web'],
    content: 'More details about the realtime chat application.',
  },
];
