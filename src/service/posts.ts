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
