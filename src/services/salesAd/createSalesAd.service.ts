import {
  photosRepository,
  salesAdRepository,
  userRepository,
} from "../../data-source";
import { Ad } from "../../entities/ads.entity";
import { Photo } from "../../entities/photos.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../error";
import { TSalesAd, TSalesAdRequest } from "../../interfaces/salesAd.interfaces";
import { salesAdSchema } from "../../schemas/salesAd.schemas";

const createSalesAdService = async (
  salesAdData: TSalesAdRequest,
  userId: string
): Promise<any> => {
  const photos = salesAdData.photos;
  Reflect.deleteProperty(salesAdData, "photos");

  console.log(salesAdData);

  const { ...adData } = salesAdData;

  const userData: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!userData) {
    throw new AppError("user not found", 404);
  }

  const salesAd: Ad = salesAdRepository.create({
    brand: salesAdData.brand,
    color: salesAdData.color,
    description: salesAdData.description,
    fuel: salesAdData.fuel,
    good_deal: salesAdData.good_deal,
    kilometers: salesAdData.kilometers,
    model: salesAdData.model,
    price: salesAdData.price,
    published: salesAdData.published,
    year: salesAdData.year,
    user: userData,
  });

  await salesAdRepository.save(salesAd);

  const photosList = [];

  for await (const photo of photos) {
    const photosSaveRep: Photo = photosRepository.create({
      photo_url: photo,
      ad: salesAd,
    });
    await photosRepository.save(photosSaveRep);
    photosList.push(photo);
  }

  const response ={
    salesAd,
    photosList
  }

  return response;
};

export { createSalesAdService };
