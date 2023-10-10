import { getNonFeaturedPosts } from '@/service/posts';
import { MultiCarousel, PostCard } from '..';

const CarouselPosts = async () => {
  const posts = await getNonFeaturedPosts();
  return (
    <section className='my-4'>
      <h2 className='text-2xl font-bold my-4'>당신이 좋아할만한 이야기</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
};

export default CarouselPosts;
