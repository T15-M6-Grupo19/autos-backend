import { salesAdRepository } from "../../data-source";
import { Ad } from "../../entities/ads.entity";

const deleteSalesAdService = async (id: string): Promise<void> => {

  const salesAd: Ad | null = await salesAdRepository.findOne({
    // @ts-ignore
    where: {
      id: id,
    },
  });

  await salesAdRepository.remove(salesAd!);
};

export { deleteSalesAdService };
