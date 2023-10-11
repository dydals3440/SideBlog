import { readFile } from 'fs/promises';
import path from 'path';

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};
// 해당 페이지가 없는경우 null
export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

// Post 배열의 데이터를 반환하는 Promise를 리턴.
export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  // .then((data) => JSON.parse(data)) data가 동일하므로 아래와 같이 생략가능
  return (
    readFile(filePath, 'utf-8')
      .then<Post[]>(JSON.parse)
      // 최신 순 정렬
      .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
  );
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => !post.featured));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);

  if (!post)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없습니다.`);

  const index = posts.indexOf(post);
  // 배열이 최신 순이니, index-1이 최신임(다음 페이지)
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;
  const content = await readFile(filePath, 'utf-8');

  return { ...post, content, next, prev };
}
