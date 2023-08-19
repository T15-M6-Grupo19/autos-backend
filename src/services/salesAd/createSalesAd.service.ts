import { salesAdRepository, userRepository } from "../../data-source";
import { Ad } from "../../entities/ads.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../error";
import { TSalesAd, TSalesAdRequest } from "../../interfaces/salesAd.interfaces";
import { salesAdSchema } from "../../schemas/salesAd.schemas";

const createSalesAdService = async (
  salesAdData: TSalesAdRequest,
  userId: string
): Promise<TSalesAd> => {
  const { user, ...adData } = salesAdData;

  const userData: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!userData) {
    throw new AppError("user not found", 404);
  }

  const salesAd: Ad = salesAdRepository.create({
    ...adData,
    user: userData,
  });

  await salesAdRepository.save(salesAd);

  return salesAdSchema.parse(salesAd);
};

export { createSalesAdService };
