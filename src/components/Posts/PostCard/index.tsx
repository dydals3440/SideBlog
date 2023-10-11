import { Post } from '@/service/posts';
import Link from 'next/link';
import Image from 'next/image';

type Props = { post: Post };

const MINI_BANNER_STYLE =
  'text-sm font-bold bg-sky-200 px-3 rounded-md text-gray-700';

const PostCard = ({
  post: { title, author, description, date, category, path },
}: Props) => {
  return (
    <article className='rounded-md overflow-hidden shadow-md hover:shadow-xl hover:scale-110 dark:bg-gray-700'>
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
          <div className='w-full flex justify-between p-4'>
            <time className={MINI_BANNER_STYLE}>{date.toString()}</time>
            <h3 className={MINI_BANNER_STYLE}>작성자 {author}</h3>
          </div>
          <h3 className='text-lg font-bold'>{title}</h3>
          <p className='w-full truncate text-center'>{description}</p>
          <span className='text-sm rounded-lg bg-green-200 px-2 my-2 font-bold dark:text-black'>
            {category}
          </span>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
