import { Repository } from "typeorm";
import { User } from "../../entities/users.entity";
import { AppDataSource } from "../../data-source";
import { getAllUsersSchema } from "../../schemas/user.schema";
import { TUserGetAllUsers } from "../../interfaces/user.interfaces";

const getUsersService = async (): Promise<TUserGetAllUsers | null> => {
  const usersRepo: Repository<User> = AppDataSource.getRepository(User);
  const users = await usersRepo.find({
    relations: {
      ads: true,
    },
  });

  return getAllUsersSchema.parse(users);
};

export default getUsersService;