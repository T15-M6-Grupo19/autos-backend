import { salesAdRepository } from "../../data-source"
import { Ad } from "../../entities/ads.entity"
import { TSalesPagination } from "../../interfaces/salesAd.interfaces";

const readAllSalesAdService = async (queries: any): Promise<Ad[] | TSalesPagination | null> => {

  const salesAds: Ad[] | null = await salesAdRepository.find({
    relations:{
      photos: true
    }
  });

  const adAmount = await salesAdRepository.count()

  if(adAmount > 9) {

    let page = queries.page ? Number(queries.page) : 1
    let perPage = 9
    

    const pagination: Ad[] | null | TSalesPagination = await salesAdRepository.find({
      order: { price: "asc" },
      skip: perPage * (page - 1),
      take: perPage,
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

  return salesAds
};

export { readAllSalesAdService }
