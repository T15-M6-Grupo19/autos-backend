import { salesAdRepository } from "../../data-source";
import { Ad } from "../../entities/ads.entity";
import { TSalesAd, TSalesAdUpdate } from "../../interfaces/salesAd.interfaces";
import { salesAdSchema } from "../../schemas/salesAd.schemas";

const updateSalesAdService = async (
  id: number,
  newSalesAdData: any
): Promise<Ad> => {
  const salesAdOldData: Ad | null = await salesAdRepository.findOne({
    // @ts-ignore
    where: {
      id: id,
    },
  });

  const salesAdData = {
    ...salesAdOldData!,
    ...newSalesAdData,
  };

  await salesAdRepository.save(salesAdData);
  return salesAdData;
};

export { updateSalesAdService };
