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

export type PostData = Post & { content: string };

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
  // 1. Read File Path
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  // 2. Post Path, fileName 비교후, 해당하는 포스트만 받아옴
  const metadata = await getAllPosts() //
    .then((posts) => posts.find((post) => post.path == fileName));
  // 3. slug와 매칭안된거는 Error Handling
  if (!metadata)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없습니다.`);
  // 해당하는 content를 읽고, 기존 metaData객체에 content키를 붙여서 반환
  const content = await readFile(filePath, 'utf-8');

  return { ...metadata, content };
}
