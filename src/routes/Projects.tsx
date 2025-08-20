import Section from '../components/ui/Section';
import ProjectGrid from '../components/projects/ProjectGrid';
import { Helmet } from 'react-helmet-async';
import { getMeta } from '../lib/seo';

const Projects = () => (
  <>
    <Helmet>
      <title>{getMeta({ title: 'Projects – Kyra Aara' }).title}</title>
    </Helmet>
    <Section title="Projects">
      <ProjectGrid />
    </Section>
  </>
);

export default Projects;
