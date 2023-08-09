import { Router } from "express";
import { ensureTokenIsValidMW } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureBodyIsValidMW } from "../middlewares/ensureBodyIsValid.middleware";
import { salesAdRequestSchema } from "../schemas/salesAd.schemas";
import { createSalesAdController, deleteSalesAdController, readAllSalesAdController, updateSalesAdController } from "../controllers/salesAd.controllers";
import { ensureSalesAdBelongsToUser } from "../middlewares/ensureSalesAdBelongsToUser.middleware";
import { ensureSalesAdIdExists } from "../middlewares/ensureSalesAdIdExists.middleware";

const salesAdRoutes: Router = Router()


salesAdRoutes.post('',ensureTokenIsValidMW, ensureBodyIsValidMW(salesAdRequestSchema), createSalesAdController )
salesAdRoutes.get('', readAllSalesAdController)
salesAdRoutes.patch('/:id',ensureBodyIsValidMW(salesAdRequestSchema),ensureSalesAdIdExists,ensureTokenIsValidMW, ensureSalesAdBelongsToUser, updateSalesAdController)
salesAdRoutes.delete('/:id',ensureTokenIsValidMW,ensureSalesAdBelongsToUser,ensureSalesAdIdExists,deleteSalesAdController)
export default salesAdRoutes 