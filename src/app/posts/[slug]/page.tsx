import { MarkdownViewer } from '@/components';
import { getPostData } from '@/service/posts';

type Props = {
  params: {
    slug: string;
  };
};
// 1. 전달된 slug에 해당하는 포스터 데이터 읽기.
// 2. Markdown Viewer (syntax Highlighter) 사용!
const PostPage = async ({ params: { slug } }: Props) => {
  const post = await getPostData(slug);

  return (
    <>
      <h1>{post.title}</h1>
      <MarkdownViewer content={post.content} />
    </>
  );
};

export default PostPage;
