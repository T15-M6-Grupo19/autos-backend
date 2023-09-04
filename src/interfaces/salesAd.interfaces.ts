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

const transformArray = z.array(salesAdSchema.omit({photos: true}))
type TSalesArray = z.infer<typeof transformArray>
export type TSalesPagination = {
  count: number;
  page: number;
  prevAmount: string | null;
  nextAmount: string | null;
  data: TSalesArray;
};
