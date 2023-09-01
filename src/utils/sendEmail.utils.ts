import { createTransport } from 'nodemailer';
import 'dotenv/config';
import Mailgen from 'mailgen';

export interface IEmailRequest {
  to: string;
  subject: string;
  text: string;
}

const sendEmail = async ({ to, subject, text }: IEmailRequest) => {
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter
    .sendMail({
      from: process.env.SMTP_HOST,
      to: to,
      subject: subject,
      html: text,
    })
    .then(() => {
      console.log('Email sent');
    })
    .catch((err) => console.log(err));
};

const resetPasswordTemplate = (
  userEmail: string,
  userName: string,
  resetToken: string
) => {
  const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      name: 'MotorShop',
      link: 'http://localhost:5173',
    },
  });

  const email = {
    body: {
      name: userName,
      intro:
        'You have received this email because a password reset request for your account was received.',
      action: {
        instructions: 'Click the button below to reset your password:',
        button: {
          color: '#DC4D2F',
          text: 'Reset your password',
          link: `http://localhost:5173/recover/resetpwd/${resetToken}`,
        },
      },
      outro:
        'If you did not request a password reset, no further action is required on your part.',
    },
  };

  const emailBody = mailGenerator.generate(email);

  const emailTemplate = {
    to: userEmail,
    subject: 'Reset MotorShop Password',
    text: emailBody,
  };

  return emailTemplate;
};

export { sendEmail, resetPasswordTemplate };
