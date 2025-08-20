import { Post } from '../../types';
import Card from '../ui/Card';
import { Link } from 'react-router-dom';

const PostCard = ({ post }: { post: Post }) => (
  <Card>
    <img
      src={post.image}
      alt={post.title}
      className="mb-4 h-48 w-full rounded-md object-cover"
      loading="lazy"
    />
    <h3 className="mb-2 text-lg font-semibold">{post.title}</h3>
    <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">{post.excerpt}</p>
    <Link to={`/blog/${post.id}`} className="text-indigo-600 hover:underline">
      Read more →
    </Link>
  </Card>
);

export default PostCard;
