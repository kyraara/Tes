import { useParams } from 'react-router-dom';
import Section from '../components/ui/Section';
import { posts } from '../data/posts';
import { Helmet } from 'react-helmet-async';
import { getMeta } from '../lib/seo';

const Post = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === id);
  if (!post)
    return (
      <Section>
        <p>Post not found.</p>
      </Section>
    );
  return (
    <>
      <Helmet>
        <title>{getMeta({ title: `${post.title} – Blog` }).title}</title>
      </Helmet>
      <Section title={post.title}>
        <img src={post.image} alt={post.title} className="mb-4 w-full rounded-md" />
        <p className="mb-4 text-sm text-gray-500">
          {new Date(post.date).toLocaleDateString()}
        </p>
        <div className="space-y-4">
          {post.content.split('\n').map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Post;
