import { salesAdRepository } from "../../data-source";
import { Ad } from "../../entities/ads.entity";

const listByIdAdService = async (
  id: number
): Promise<Ad> => {
  const ad: Ad | null = await salesAdRepository.findOne({
    // @ts-ignore
    where: {
      id: id,
    },
    relations: {
        user: true,
        photos:true,
        comments:true,
      },
  });

  return ad!;
};

export { listByIdAdService };
