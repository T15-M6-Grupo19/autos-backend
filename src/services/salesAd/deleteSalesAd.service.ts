import { salesAdRepository } from "../../data-source";
import { Ad } from "../../entities/ads.entity";

const deleteSalesAdService = async (id: number): Promise<void> => {
  const salesAd: Ad | null = await salesAdRepository.findOne({
    // @ts-ignore
    where: {
      id: id,
    },
  });

  await salesAdRepository.softRemove(salesAd!);
};

export { deleteSalesAdService };
