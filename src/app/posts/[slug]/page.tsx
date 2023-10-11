import { PostContent } from '@/components';
import { getPostData } from '@/service/posts';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params: { slug } }: Props) => {
  const post = await getPostData(slug);
  const { title, path } = post;

  return (
    <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4 '>
      <Image
        className='w-full h-60'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      {/* Prev / Next Post */}
    </article>
  );
};

export default PostPage;
