import { AiTwotoneCalendar } from 'react-icons/ai';
import { MarkdownViewer } from '..';
import { PostData } from '@/service/posts';

const PostContent = ({ post }: { post: PostData }) => {
  const { title, description, date, content } = post;
  return (
    <section className='flex flex-col p-4'>
      <div className='flex items-center self-end text-blue-600'>
        <AiTwotoneCalendar />
        <p className='font-semibold ml-2'>{date.toString()}</p>
      </div>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='text-xl font-bold'>{description}</p>
      <div className='w-44 border-2 border-pink-600 mt-4 mb-8' />
      <MarkdownViewer content={content} />
    </section>
  );
};

export default PostContent;
