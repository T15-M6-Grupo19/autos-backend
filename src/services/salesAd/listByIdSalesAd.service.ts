import { salesAdRepository } from "../../data-source";
import { Ad } from "../../entities/ads.entity";

const listByIdAdService = async (
  id: string
): Promise<any> => {
  const ad: Ad | null= await salesAdRepository.findOne({
    // @ts-ignore
    where: {
      id: id,
    },
    relations: {
        user: true,
        photos:true,
        comments:{user:true},
      },
  });

  console.log("lalala")

  return ad;
};

export { listByIdAdService };
