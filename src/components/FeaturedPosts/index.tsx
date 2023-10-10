import { getAllPosts } from '@/service/posts';
import { PostsGrid } from '..';

const FeaturedPosts = async () => {
  // 1. 모든 포스트 데이터 읽어오기
  const posts = await getAllPosts();
  // 2. 모든 포스트 데이터를 보여줌
  return (
    <section>
      <h2 className=''>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
