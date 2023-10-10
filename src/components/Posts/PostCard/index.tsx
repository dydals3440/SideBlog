import { Post } from '@/service/posts';
import Link from 'next/link';
import Image from 'next/image';

type Props = { post: Post };

const PostCard = ({
  post: { title, description, date, category, path },
}: Props) => {
  return (
    <article className='rounded-md overflow-hidden shadow-lg'>
      <Link href={`/posts/${path}`}>
        <Image
          className='w-full'
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className='flex flex-col items-center'>
          {/* time은 flex상태이기에 오른쪽 끝으로 이동 */}
          <time className='self-end'>{date.toString()}</time>
          <h3 className='text-lg font-bold'>{title}</h3>
          <p className='w-full truncate text-center'>{description}</p>
          <span className='text-sm rounded-lg bg-green-100 px-2 my-2'>
            {category}
          </span>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
