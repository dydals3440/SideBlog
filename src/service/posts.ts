import { readFile } from 'fs/promises';
import path from 'path';
import { cache } from 'react';

export type Post = {
  title: string;
  author: string;
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

// cache는 호출하는 인자가 지금은 아무것도 없지만, id라는 인자를 받는다면 동일한 id인자로 호출하면, 한번 호출이 되었다면 cache된 값을 반환!
// 서버가 동작하는 모든 시간에 걸쳐서 캐시를 사용하는 것이 아닌, 한번 렌더링 되는 사이클에 한해서만 캐시를함! (한페이지를 렌더링하면, 여러 곳에서 해당함수를 불러올때 이떄 1번만 불러오게 캐시된 걸 사용)
// 다른페이지 렌더링시, 캐시된 데이터 값이 아닌, 다시 읽어와서 하는거임.
export const getAllPosts = cache(async () => {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  // .then((data) => JSON.parse(data)) data가 동일하므로 아래와 같이 생략가능
  return (
    readFile(filePath, 'utf-8')
      .then<Post[]>(JSON.parse)
      // 최신 순 정렬
      .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
  );
});

// Post 배열의 데이터를 반환하는 Promise를 리턴.
// export async function getAllPosts(): Promise<Post[]> {
//   const filePath = path.join(process.cwd(), 'data', 'posts.json');
//   // .then((data) => JSON.parse(data)) data가 동일하므로 아래와 같이 생략가능
//   return (
//     readFile(filePath, 'utf-8')
//       .then<Post[]>(JSON.parse)
//       // 최신 순 정렬
//       .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
//   );
// }

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
