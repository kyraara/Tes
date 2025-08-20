import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../data/projects';
import { Helmet } from 'react-helmet-async';
import { getMeta } from '../lib/seo';

const Home = () => (
  <>
    <Helmet>
      <title>{getMeta({ title: 'Home – Kyra Aara' }).title}</title>
    </Helmet>
    <Section>
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold">Hi, I'm Kyra Aara</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Full-stack developer crafting web experiences.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/projects"
            className="rounded-md bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
          >
            Lihat Proyek
          </Link>
          <Link
            to="/contact"
            className="rounded-md bg-gray-200 px-4 py-2 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
          >
            Hubungi
          </Link>
        </div>
      </div>
    </Section>
    <Section title="Latest Projects" id="projects">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.slice(0, 3).map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
    <Section>
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </Section>
  </>
);

export default Home;
