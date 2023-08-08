import { salesAdRepository } from "../../data-source"
import { Anuncio } from "../../entities/anuncios.entity"

const updateSalesAdService = async (id:number, newSalesAdData:any):Promise<Anuncio> => {

    const salesAdOldData: Anuncio| null = await salesAdRepository.findOne({
        // @ts-ignore
        where:{
            id:id
        },
    })

    const salesAdData ={
        ...salesAdOldData,
        ...newSalesAdData
    }

    await salesAdRepository.save(salesAdData)
    return salesAdData
    
}

export {updateSalesAdService }