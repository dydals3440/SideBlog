import { Post } from '@/service/posts';

type Props = { posts: Post[] };

const PostsGrid = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.path}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostsGrid;
