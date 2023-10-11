import { ContactForm } from '@/components';
import { Metadata } from 'next';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';

export const metadata: Metadata = {
  title: '메일 보내기',
  description: '서비스 메일 보내기',
};

const LINKS = [
  { icon: <AiFillGithub />, url: '' },
  { icon: <AiFillInstagram />, url: '' },
];

const ContactPage = () => {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='text-3xl font-bold my-2'>
        궁금한 점이 있으면 아래 메일로 연락 주세요!
      </h2>
      <p>dydals3440@gmail.com</p>
      <ul className='flex gap-4 my-2'>
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target='_blank'
            rel='noreferrer'
            className='text-5xl hover:text-sky-400'
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className='text-3xl font-bold my-8'>
        아래, 컨택폼을 활용하여 이메일을 보내주세요!
      </h2>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
