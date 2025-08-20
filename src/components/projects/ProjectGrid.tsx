import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import { projects } from '../../data/projects';

const ProjectGrid = () => {
  const [tag, setTag] = useState('all');
  const tags = Array.from(new Set(projects.flatMap((p) => p.tags)));
  const filtered = tag === 'all' ? projects : projects.filter((p) => p.tags.includes(tag));

  return (
    <div>
      <ProjectFilter tags={tags} current={tag} onChange={setTag} />
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
