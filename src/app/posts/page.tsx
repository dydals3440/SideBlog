import { FilterablePosts } from '@/components';
import { getAllPosts } from '@/service/posts';

const PostsPage = async () => {
  const posts = await getAllPosts();
  // Unique Category (중복 제거)
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
};

export default PostsPage;
