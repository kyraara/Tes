import Section from '../components/ui/Section';
import Badge from '../components/ui/Badge';
import { Helmet } from 'react-helmet-async';
import { getMeta } from '../lib/seo';

const skills = ['React', 'TypeScript', 'Node.js', 'Tailwind'];

const About = () => (
  <>
    <Helmet>
      <title>{getMeta({ title: 'About – Kyra Aara' }).title}</title>
    </Helmet>
    <Section title="About Me">
      <div className="flex flex-col items-center text-center md:flex-row md:text-left">
        <img
          src="/images/avatar.svg"
          alt="Kyra Aara"
          className="mb-4 h-40 w-40 rounded-full object-cover md:mr-6"
        />
        <p>
          I'm Kyra Aara, a passionate developer with experience in building
          responsive and accessible web applications.
        </p>
      </div>
    </Section>
    <Section title="Skills">
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>
    </Section>
    <Section title="Experience & Education">
      <ul className="space-y-4">
        <li>
          <strong>2023-Present:</strong> Frontend Developer at Example Corp.
        </li>
        <li>
          <strong>2020-2023:</strong> B.Sc. in Computer Science.
        </li>
      </ul>
    </Section>
  </>
);

export default About;
