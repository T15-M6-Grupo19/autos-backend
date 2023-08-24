import { Request, Response } from 'express';
import { resetPasswordService } from '../services/password/resetPassword.service';
import { sendResetEmailService } from '../services/password/sendResetEmail.service';

const sendResetEmailController = async (req: Request, res: Response) => {
  const { email } = req.body;

  await sendResetEmailService(email);

  return res.json({ message: 'token sent!' });
};

const resetPasswordController = async (req: Request, res: Response) => {
  const { password } = req.body;
  const { token } = req.params;

  await resetPasswordService(password, token);

  return res.json({ message: 'password changed!' });
};

export { sendResetEmailController, resetPasswordController };
