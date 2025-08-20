import Section from '../components/ui/Section';
import PostList from '../components/blog/PostList';
import { Helmet } from 'react-helmet-async';
import { getMeta } from '../lib/seo';

const Blog = () => (
  <>
    <Helmet>
      <title>{getMeta({ title: 'Blog – Kyra Aara' }).title}</title>
    </Helmet>
    <Section title="Blog">
      <PostList />
    </Section>
  </>
);

export default Blog;
