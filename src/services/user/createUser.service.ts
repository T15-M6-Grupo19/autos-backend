import { Repository } from 'typeorm';
import { User } from '../../entities/users.entity';
import { AppDataSource } from '../../data-source';
import { TUserRequest, TUserResponse } from '../../interfaces/user.interfaces';
import { createdUserSchema } from '../../schemas/user.schema';

export const createUserService = async (
  payload: TUserRequest
): Promise<TUserResponse> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepo.create(payload);

  await userRepo.save(user);

  const userWithouPWD = createdUserSchema.parse(user);

  return userWithouPWD;
};
