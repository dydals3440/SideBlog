import { EmailData } from './email';

export async function sendContactEmail(email: EmailData) {
  // API ROUTE에 이메일 전송을 위한 요청을 보냄(fetch)
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //   요천 보내고 기다린 후
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || '서버 요청에 실패하였습니다.');
  }
  return data;
}
