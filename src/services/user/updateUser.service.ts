import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/users.entity';
import {
  TUserUpdateReponse,
  TUserUpdateRequest,
} from '../../interfaces/user.interfaces';
import { updatedResponseSchema } from '../../schemas/user.schema';

export const updateUserService = async (
  payload: TUserUpdateRequest,
  user: User
): Promise<TUserUpdateReponse> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const userToUpdate: User = userRepo.create({
    ...user,
    ...payload,
  });

  const userUpdated: User = await userRepo.save(userToUpdate);

  const parseUpdatedUser: TUserUpdateReponse =
    updatedResponseSchema.parse(userUpdated);

  return parseUpdatedUser;
};
