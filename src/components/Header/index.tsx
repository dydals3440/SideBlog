import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href='/'>
        <h1>{'We DevLog'}</h1>
      </Link>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/posts'>Posts</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
