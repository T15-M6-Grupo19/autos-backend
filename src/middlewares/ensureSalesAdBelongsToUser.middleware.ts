import { NextFunction, Request, Response } from "express";
import "dotenv/config";
import { Anuncio } from "../entities/anuncios.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const ensureSalesAdBelongsToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const salesAdRepository: Repository<Anuncio> =
    AppDataSource.getRepository(Anuncio);
  const tokenId = res.locals.token.id;
  const salesAdId = req.params.id;

  const dataUserSalesAd: Anuncio | null = await salesAdRepository.findOne({
    where: {
      id: salesAdId,
    },
    relations: {
      user: true,
    },
  });

  if (!dataUserSalesAd) {
    throw new AppError("User not found", 404);
  } else if (dataUserSalesAd!.user.id != tokenId) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export { ensureSalesAdBelongsToUser };
