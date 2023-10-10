'use client';
import { useState } from 'react';
import { Post } from '@/service/posts';
import { Categories, PostsGrid } from '../';

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = 'All Posts';

const FilterablePosts = ({ posts, categories }: Props) => {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section>
      <PostsGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        // onClick시, 현재 셀렉된것들의 카테고리가 전달되고, setSelected를 호출해서 받아옴
        // onClick={setSelected}
        onClick={setSelected}
      />
    </section>
  );
};

export default FilterablePosts;
