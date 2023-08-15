import { z } from "zod";
import { FuelType } from "../entities/ads.entity";

const salesAdSchema = z.object({
  id: z.string(),
  brand: z.string(),
  model: z.string(),
  year: z.string(),
  fuel: z.nativeEnum(FuelType),
  kilometers: z.number(),
  color: z.string(),
  good_deal: z.boolean().default(false),
  price: z.number(),
  description: z.string(),
  published: z.boolean().default(false),
});

const salesAdRequestSchema = salesAdSchema.omit({
  id: true,
  good_deal: true,
  published: true,
});

export { salesAdSchema, salesAdRequestSchema };
