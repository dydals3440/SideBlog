import { FilterablePosts } from '@/components';
import { getAllPosts } from '@/service/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '전체 포스트',
  description: '서비스 개발 관련 블로그 글',
};

const PostsPage = async () => {
  const posts = await getAllPosts();
  // Unique Category (중복 제거)
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
};

export default PostsPage;
