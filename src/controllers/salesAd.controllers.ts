import { Request, Response } from "express"
import { TSalesAd } from "../interfaces/salesAd.interfaces"
import { createSalesAdService } from "../services/salesAd/createSalesAd.service"
import { readAllSalesAdService } from "../services/salesAd/readAllSalesAd.service"

const createSalesAdController =async (req:Request, res:Response):Promise<Response> => {
    const userId:string = res.locals.token.id

    const newSalesAd:TSalesAd = await createSalesAdService(req.body, userId)

    return res.status(201).json(newSalesAd)
    
}

const readAllSalesAdController =async (req:Request, res:Response):Promise<Response> => {

    const salesAds = await readAllSalesAdService()

    return res.json(salesAds)
    
}

export { createSalesAdController, readAllSalesAdController }