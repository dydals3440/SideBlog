import Image from 'next/image';
import TeamLogo from '../../../public/images/Profile.jpg';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='text-center'>
      <Image
        className='mx-auto rounded-full'
        src={TeamLogo}
        alt='Pictures Of Team Logo'
        width={250}
        height={250}
        priority
      />
      <h2 className='text-3xl font-bold mt-2'>{'안녕하세요, 00입니다.'}</h2>
      <h3 className='text-xl font-semibold'>Side Project</h3>
      <p>
        개발자/기획자/디자이너를 희망하는 사람들과 함께 진행하는 프로젝트입니다.
      </p>
      <Link href='/contact'>
        <button className='bg-blue-300 font-bold rounded-xl py-1 px-4 mt-3'>
          Contact Me
        </button>
      </Link>
    </section>
  );
};

export default Hero;
