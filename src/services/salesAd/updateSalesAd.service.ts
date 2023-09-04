import { photosRepository, salesAdRepository } from "../../data-source";
import { Ad } from "../../entities/ads.entity";
import { Photo } from "../../entities/photos.entity";
import { TSalesAd, TSalesAdUpdate } from "../../interfaces/salesAd.interfaces";
import { salesAdSchema } from "../../schemas/salesAd.schemas";

const updateSalesAdService = async (
  id: string,
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

  const photos = newSalesAdData.photos;

  for await (const photo of photos) {
    const photosSaveRep: Photo = photosRepository.create({
      photo_url: photo,
      ad: salesAdData,
    });
    await photosRepository.save(photosSaveRep);
  }

  return salesAdData;
};

export { updateSalesAdService };
