import { salesAdRepository } from "../../data-source";
import { Ad } from "../../entities/ads.entity";

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

  const salesAdData:Ad = {
    ...salesAdOldData,
    ...newSalesAdData,
  };

  await salesAdRepository.save(salesAdData);
  return salesAdData;
};

export { updateSalesAdService };
