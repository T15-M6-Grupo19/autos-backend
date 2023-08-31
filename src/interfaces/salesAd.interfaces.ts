import { z } from "zod";
import {
  salesAdSchema,
  salesAdRequestSchema,
} from "../schemas/salesAd.schemas";
import { DeepPartial } from "typeorm";

type TSalesAd = z.infer<typeof salesAdSchema>;
type TSalesAdRequest = z.infer<typeof salesAdSchema>;
type TSalesAdUpdate = DeepPartial<typeof salesAdRequestSchema>;
export { TSalesAd, TSalesAdRequest, TSalesAdUpdate };
