import { z } from 'zod';
import { NewFuelType } from '../entities/ads.entity';
import { createdUserSchema } from './user.schema';

const salesAdSchema = z.object({
  id: z.string(),
  brand: z.string(),
  model: z.string(),
  year: z.string().or(z.date()),
  fuel: z.nativeEnum(NewFuelType),
  kilometers: z.number(),
  color: z.string(),
  good_deal: z.boolean().default(false),
  price: z.number(),
  description: z.string(),
  published: z.boolean().default(false),
  user: createdUserSchema,
});

const salesAdRequestSchema = salesAdSchema.omit({
  id: true,
  good_deal: true,
  published: true,
});

const salesAdCreationRequestSchema = salesAdSchema.omit({
  id: true,
  user: true,
});

export { salesAdSchema, salesAdRequestSchema, salesAdCreationRequestSchema };
