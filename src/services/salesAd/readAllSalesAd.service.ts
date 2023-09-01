import { salesAdRepository } from "../../data-source";
import { Ad } from "../../entities/ads.entity";

const readAllSalesAdService = async (): Promise<Ad[] | null> => {
  const salesAds: Ad[] | null = await salesAdRepository.find({
    relations:{
      photos: true
    }
  });

  return salesAds;
};

export { readAllSalesAdService };
