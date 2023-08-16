import { z } from "zod";
import { salesAdSchema } from "./salesAd.schemas";

export const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().max(120),
  CPF: z.string(),
  mobile: z.string(),
  birth_date: z.string(),
  description: z.string().max(50).nullish(),
  ZIP_code: z.string(),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  number: z.string(),
  additional_details: z.string().max(40).nullish(),
});

export const createdUserSchema = createUserSchema
  .extend({
    id: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
  })
  .omit({
    password: true,
  });

export const toUpdateSchema = createUserSchema.omit({
  password: true,
  ZIP_code: true,
  state: true,
  city: true,
  street: true,
  number: true,
  additional_details: true,
});

export const updateUserSchema = toUpdateSchema.partial();

export const updatedResponseSchema = createdUserSchema;

export const getAllUsersSchema = createdUserSchema
  .extend({
    ads: z.array(salesAdSchema),
  })
  .array();

export const getSpecificUserSchema = createdUserSchema.extend({
  ads: z.array(salesAdSchema),
});
