import { salesAdRepository } from "../../data-source"
import { Ad } from "../../entities/ads.entity"
import { TSalesPagination } from "../../interfaces/salesAd.interfaces";

const readAllSalesAdService = async (queries: any): Promise<any> => {

  const salesAds: Ad[] | null = await salesAdRepository.find({
    relations:{
      photos: true
    }
  });

  console.log(salesAds, "não ta carregando é nada")

  const adAmount = await salesAdRepository.count()

  if(adAmount > 9) {

    let page = queries.page ? Number(queries.page) : 1
    let perPage = 9
    

    const pagination: Ad[] | null | TSalesPagination = await salesAdRepository.find({
      order: { price: "asc" },
      skip: perPage * (page - 1),
      take: perPage,
      relations:{
        photos: true
      }
    });

    let nextAmount: string | null
    let prevAmount: string | null

    const baseUrl: string = 'http://localhost:3000'

    prevAmount = page - 1 == 0 ? null : `${baseUrl}/salesAd?page=${page - 1}&perPage=${perPage}`

    nextAmount = adAmount > perPage * page ? `${baseUrl}/salesAd?page=${page + 1}&perPage=${perPage}` : null 
  
    return {
      count: adAmount,
      page: page,
      prevAmount: prevAmount,
      nextAmount: nextAmount,
      data: pagination,
    }
  
  }

  console.log(salesAds, "retorno que deveria acontecer")
  return salesAds
};

export { readAllSalesAdService }
