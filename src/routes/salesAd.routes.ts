import { Router } from "express";
import { ensureTokenIsValidMW } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureBodyIsValidMW } from "../middlewares/ensureBodyIsValid.middleware";
import { salesAdRequestSchema } from "../schemas/salesAd.schemas";
import { createSalesAdController, deleteSalesAdController, readAllSalesAdController, updateSalesAdController } from "../controllers/salesAd.controllers";
import { ensureSalesAdBelongsToUser } from "../middlewares/ensureSalesadBelongsToUser.middleware";

const salesAdRoutes: Router = Router()


salesAdRoutes.post('',ensureTokenIsValidMW, ensureBodyIsValidMW(salesAdRequestSchema), createSalesAdController )
salesAdRoutes.get('', readAllSalesAdController)
salesAdRoutes.patch('/:id',ensureBodyIsValidMW(salesAdRequestSchema),ensureTokenIsValidMW, ensureSalesAdBelongsToUser, updateSalesAdController)
salesAdRoutes.delete('/:id',ensureTokenIsValidMW,ensureSalesAdBelongsToUser,deleteSalesAdController)
export default salesAdRoutes 