import { z } from "zod"
import { salesAdSchema, salesAdRequestSchema } from "../schemas/salesAd.schemas"

type TSalesAd = z.infer<typeof salesAdSchema>
type TSalesAdRequest = z.infer<typeof salesAdRequestSchema>

export { TSalesAd, TSalesAdRequest }