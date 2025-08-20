import { posts } from '../../data/posts';
import PostCard from './PostCard';

const PostList = () => (
  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
    {posts.map((p) => (
      <PostCard key={p.id} post={p} />
    ))}
  </div>
);

export default PostList;
