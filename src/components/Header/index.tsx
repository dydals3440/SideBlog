'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme');
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, [darkMode]);
  return (
    <header className='flex justify-between items-center p-4 mb-10 dark:text-gray-300 dark:bg-gray-700 '>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>{'We DevLog'}</h1>
      </Link>
      <nav className='flex items-center gap-5'>
        {darkMode ? (
          <MdLightMode
            className='text-yellow-500 text-3xl cursor-pointer'
            onClick={handleDarkMode}
          />
        ) : (
          <MdDarkMode
            className='text-yellow-500 text-3xl cursor-pointer'
            onClick={handleDarkMode}
          />
        )}
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/posts'>Posts</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
