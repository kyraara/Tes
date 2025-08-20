import { useParams } from 'react-router-dom';
import Section from '../components/ui/Section';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { projects } from '../data/projects';
import { Helmet } from 'react-helmet-async';
import { getMeta } from '../lib/seo';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return (
      <Section>
        <p>Project not found.</p>
      </Section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{getMeta({ title: `${project.title} – Project` }).title}</title>
      </Helmet>
      <Section title={project.title}>
        <img src={project.image} alt={project.title} className="mb-4 w-full rounded-md" />
        <p className="mb-4">{project.content}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
          >
            Repo
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700"
          >
            Demo
          </a>
        </div>
      </Section>
      <Section>
        <Button onClick={() => window.history.back()}>← Back</Button>
      </Section>
    </>
  );
};

export default ProjectDetail;
