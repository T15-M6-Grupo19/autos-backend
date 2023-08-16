import { Repository } from 'typeorm';

import { AppDataSource } from '../../data-source';
import { User } from '../../entities/users.entity';

export const deleteUserService = async (user: User): Promise<void> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  await userRepo.remove(user!);
};
