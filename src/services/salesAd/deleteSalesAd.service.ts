import { salesAdRepository } from "../../data-source"
import { Anuncio } from "../../entities/anuncios.entity"

const deleteSalesAdService = async (id:number):Promise<void> => {

    const salesAd: Anuncio| null = await salesAdRepository.findOne({
        // @ts-ignore
        where:{
            id:id
        },
    })

    await salesAdRepository.softRemove(salesAd!)
    
}

export {deleteSalesAdService }