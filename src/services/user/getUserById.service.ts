import { Repository } from "typeorm";
import { User } from "../../entities/users.entity";
import { AppDataSource } from "../../data-source";
import { TUserGetSpecificUser } from "../../interfaces/user.interfaces";
import { getSpecificUserSchema } from "../../schemas/user.schema";
import { AppError } from "../../error";

const getUserByIdService = async (
  id: string
): Promise<TUserGetSpecificUser> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepo.findOne({
    where: { id: id },
    relations: { ads: true },
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  return getSpecificUserSchema.parse(findUser);
};

export default getUserByIdService;
