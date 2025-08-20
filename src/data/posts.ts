import { Post } from '../types';

export const posts: Post[] = [
  {
    id: 'getting-started',
    title: 'Getting Started with React',
    excerpt: 'Introductory guide to building apps with React.',
    date: '2024-01-01',
    image: '/images/project1.svg',
    content: 'This is a short post about React and how to get started.',
    tags: ['react', 'guide'],
  },
  {
    id: 'deploying-vite',
    title: 'Deploying Vite Apps',
    excerpt: 'How to deploy Vite applications to Netlify or Vercel.',
    date: '2024-02-15',
    image: '/images/project2.svg',
    content: 'Step-by-step guide to deploy Vite apps to popular platforms.',
    tags: ['vite', 'deploy'],
  },
];
