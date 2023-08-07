import { Router } from "express";
import { ensureTokenIsValidMW } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureBodyIsValidMW } from "../middlewares/ensureBodyIsValid.middleware";
import { salesAdRequestSchema } from "../schemas/salesAd.schemas";
import { createSalesAdController, readAllSalesAdController } from "../controllers/salesAd.controllers";

const salesAdRoutes: Router = Router()


salesAdRoutes.post('',ensureTokenIsValidMW, ensureBodyIsValidMW(salesAdRequestSchema), createSalesAdController )
salesAdRoutes.get('', readAllSalesAdController)


export default salesAdRoutes 