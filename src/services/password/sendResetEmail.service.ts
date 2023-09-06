import { userRepository } from '../../data-source';
import { User } from '../../entities/users.entity';
import { AppError } from '../../error';
import { randomUUID } from 'crypto';
import { resetPasswordTemplate, sendEmail } from '../../utils/sendEmail.utils';

const sendResetEmailService = async (email: string) => {
  const user: User | null = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AppError('User not found', 404);
  }

  const resetToken: string = randomUUID();

  const updatedUser: User = userRepository.create({
    ...user,
    reset_token: resetToken,
  });

  await userRepository.save(updatedUser);

  const resetPassTemplate = resetPasswordTemplate(
    updatedUser.email,
    updatedUser.name,
    resetToken
  );

  await sendEmail(resetPassTemplate);
};

export { sendResetEmailService };
