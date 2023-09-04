import { z } from "zod";
import {
  salesAdSchema,
  salesAdRequestSchema,
} from "../schemas/salesAd.schemas";
import { DeepPartial } from "typeorm";
import { NewFuelType } from "../entities/ads.entity";

type TSalesAd = z.infer<typeof salesAdSchema>;
type TSalesAdRequest = z.infer<typeof salesAdSchema>;
type TSalesAdUpdate = DeepPartial<typeof salesAdRequestSchema>;
export { TSalesAd, TSalesAdRequest, TSalesAdUpdate };

export type TPhotos = {
  id: string;
  photo_url: string;
};

export type TSaleAdList = {
  id: string;
  brand: string;
  model: string;
  year: string;
  fuel: NewFuelType;
  kilometers: number;
  color: string;
  good_deal: boolean;
  price: number;
  description: string;
  published: boolean;
  photos: TPhotos[];
};

const transformArray = z.array(salesAdSchema.omit({ photos: true }));
type TSalesArray = z.infer<typeof transformArray>;
export type TSalesPagination = {
  count: number;
  page: number;
  prevAmount: string | null;
  nextAmount: string | null;
  data: TSaleAdList;
};
