import { NextFunction, Request, Response } from "express";
import { Anuncio } from "../entities/anuncios.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const ensureSalesAdIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const salesAdRepository: Repository<Anuncio> =
    AppDataSource.getRepository(Anuncio);

  const salesAdId = req.params.id;

  const dataUserSalesAd: Anuncio | null = await salesAdRepository.findOne({
    where: {
      id: salesAdId,
    },
  });

  if (!dataUserSalesAd) {
    throw new AppError("User not found", 404);
  }

  return next();
};

export { ensureSalesAdIdExists };