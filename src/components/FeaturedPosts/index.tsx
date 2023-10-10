import { getFeaturedPosts } from '@/service/posts';
import { PostsGrid } from '..';

const FeaturedPosts = async () => {
  // 1. 모든 포스트 데이터 읽어오기
  const posts = await getFeaturedPosts();
  // 2. 모든 포스트 데이터를 보여줌
  return (
    <section>
      <h2 className='text-2xl font-bold my-2'>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
