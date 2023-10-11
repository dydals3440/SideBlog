import * as yup from 'yup';

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  if (!bodySchema.isValidSync(req.body)) {
    return new Response('유효하지 않은, 이메일 양식입니다', { status: 400 });
  }
  const { from, subject, message } = req.body;
  // Send Mail with nodemailer
}
