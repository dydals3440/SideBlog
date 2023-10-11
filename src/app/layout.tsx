import { Footer, Header } from '@/components';
import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: '함께 공유하는 즐거움 We DevLog',
    template: 'We DevLog | %s',
  },
  description: '프로젝트를 진행하면서, 겪은 일들을 기록해봐요!',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko' className={sans.className}>
      <body className='flex flex-col w-full max-w-screen-2xl mx-auto dark:bg-gray-800'>
        <Header />
        <main className='grow dark:text-gray-300'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
