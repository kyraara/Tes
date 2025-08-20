import { useNavigate } from 'react-router-dom';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { Project } from '../../types';

const ProjectCard = ({ project }: { project: Project }) => {
  const navigate = useNavigate();
  return (
    <Card className="flex flex-col">
      <img
        src={project.image}
        alt={project.title}
        className="mb-4 h-48 w-full rounded-md object-cover"
        loading="lazy"
      />
      <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
        {project.excerpt}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <div className="mt-auto flex gap-2">
        <Button onClick={() => navigate(`/projects/${project.id}`)}>Details</Button>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-900 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
        >
          Demo
        </a>
      </div>
    </Card>
  );
};

export default ProjectCard;
