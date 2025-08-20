import { ReactNode } from 'react';
import Container from './Container';

const Section = ({
  title,
  children,
  id,
}: {
  title?: string;
  children: ReactNode;
  id?: string;
}) => (
  <section id={id} className="py-12">
    <Container>
      {title && <h2 className="mb-6 text-2xl font-bold">{title}</h2>}
      {children}
    </Container>
  </section>
);

export default Section;
