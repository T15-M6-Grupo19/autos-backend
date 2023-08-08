import { salesAdRepository } from "../../data-source"
import { Anuncio } from "../../entities/anuncios.entity"

const readAllSalesAdService = async ():Promise<Anuncio[]| null> => {

    const salesAds: Anuncio[] | null = await salesAdRepository.find()

    return salesAds
    
}

export {readAllSalesAdService }