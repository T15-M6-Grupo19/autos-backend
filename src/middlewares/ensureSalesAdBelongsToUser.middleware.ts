import { NextFunction, Request, Response } from "express";
import { Ad } from "../entities/ads.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const ensureSalesAdBelongsToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const salesAdRepository: Repository<Ad> = AppDataSource.getRepository(Ad);
  const tokenId = res.locals.token.id;
  const salesAdId = req.params.id;

  const dataUserSalesAd: Ad | null = await salesAdRepository.findOne({
    where: {
      id: salesAdId,
    },
    relations: {
      user: true,
    },
  });

  if (dataUserSalesAd!.user.id != tokenId) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export { ensureSalesAdBelongsToUser };
