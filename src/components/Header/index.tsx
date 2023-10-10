import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex justify-between items-center p-4'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>{'We DevLog'}</h1>
      </Link>
      <nav className='flex gap-5'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/posts'>Posts</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
