import { Repository } from "typeorm";
import { User } from "../../entities/users.entity";
import { AppDataSource } from "../../data-source";
import { TUserGetSpecificUser } from "../../interfaces/user.interfaces";
import { getSpecificUserSchema } from "../../schemas/user.schema";

const getUserByIdService = async (
  user: User
): Promise<TUserGetSpecificUser> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepo.findOne({
    where: { id: user.id },
    relations: { ads: true },
  });

  return getSpecificUserSchema.parse(findUser);
};

export default getUserByIdService;
