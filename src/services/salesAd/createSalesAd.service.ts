import { salesAdRepository, userRepository } from '../../data-source';
import { Ad } from '../../entities/ads.entity';
import { User } from '../../entities/users.entity';
import { AppError } from '../../error';
import { TSalesAd, TSalesAdRequest } from '../../interfaces/salesAd.interfaces';

const createSalesAdService = async (
  salesAdData: TSalesAdRequest,
  userId: string
): Promise<TSalesAd> => {
  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError('user not found', 404);
  }

  const salesAd: Ad = salesAdRepository.create({
    ...salesAdData,
    user,
  });
  await salesAdRepository.save(salesAd);

  return salesAd;
};

export { createSalesAdService };
