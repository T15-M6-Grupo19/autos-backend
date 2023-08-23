import { salesAdRepository } from "../../data-source";
import { Ad } from "../../entities/ads.entity";
import { TSalesAd, TSalesAdUpdate } from "../../interfaces/salesAd.interfaces";
import { salesAdSchema } from "../../schemas/salesAd.schemas";

const listByIdAdService = async (
  id: number
): Promise<Ad> => {
  const ad: Ad | null = await salesAdRepository.findOne({
    // @ts-ignore
    where: {
      id: id,
    },
  });

  return ad!;
};

export { listByIdAdService };
