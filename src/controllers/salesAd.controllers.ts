import { Request, Response } from "express";
import { TSalesAd, TSalesAdUpdate } from "../interfaces/salesAd.interfaces";
import { createSalesAdService } from "../services/salesAd/createSalesAd.service";
import { readAllSalesAdService } from "../services/salesAd/readAllSalesAd.service";
import { updateSalesAdService } from "../services/salesAd/updateSalesAd.service";
import { deleteSalesAdService } from "../services/salesAd/deleteSalesAd.service";
import { Ad } from "../entities/ads.entity";

const createSalesAdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = res.locals.token.id;

  const newSalesAd: TSalesAd = await createSalesAdService(req.body, userId);

  return res.status(201).json(newSalesAd);
};

const readAllSalesAdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const salesAds = await readAllSalesAdService();

  return res.json(salesAds);
};

const updateSalesAdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const salesAdId = Number(req.params.id);
  const newSalesAdData: TSalesAdUpdate = req.body;

  const salesAdUpdated: Ad = await updateSalesAdService(
    salesAdId,
    newSalesAdData
  );

  return res.status(200).json(salesAdUpdated);
};

const deleteSalesAdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const salesAdId = Number(req.params.id);

  const deleteSalesAd: void = await deleteSalesAdService(salesAdId);

  return res.status(204).json();
};

export {
  createSalesAdController,
  readAllSalesAdController,
  updateSalesAdController,
  deleteSalesAdController,
};
