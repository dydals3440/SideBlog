'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from '../Banner';

type Form = {
  from: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [form, setForm] = useState<Form>({
    from: '',
    subject: '',
    message: '',
  });
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setBanner({
      message: '성공적으로 메세지가 전달되었습니다!',
      state: 'success',
    });
    setTimeout(() => {
      setBanner(null);
    }, 5000);
  };
  return (
    <>
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className='w-full max-w-md flex flex-col gap-2 m-4 p-4 bg-slate-700 rounded-xl text-white'
      >
        <label htmlFor='from' className='font-semibold'>
          이메일
        </label>
        <input
          className='text-black p-2'
          type='email'
          id='from'
          name='from'
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
        <label htmlFor='subject' className='font-semibold'>
          제목
        </label>
        <input
          className='text-black p-2'
          type='text'
          id='subject'
          name='subject'
          required
          value={form.subject}
          onChange={onChange}
        />
        <label htmlFor='message' className='font-semibold'>
          전달할 내용
        </label>
        <textarea
          className='text-black'
          rows={10}
          id='message'
          name='message'
          required
          autoFocus
          value={form.message}
          onChange={onChange}
        />
        <button className='bg-sky-300 text-black font-bold hover:bg-green-400 p-4 rounded-md'>
          이메일 보내기
        </button>
      </form>
    </>
  );
};

export default ContactForm;
