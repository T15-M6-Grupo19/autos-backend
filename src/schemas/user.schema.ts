import { z } from "zod";
import { salesAdSchema } from "./salesAd.schemas";
import { UserType } from "../entities/users.entity";
import { Ad } from "../entities/ads.entity";

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
  account_type: z.nativeEnum(UserType).optional().default(UserType.COMPRADOR),
  number: z.string(),
  additional_details: z.string().max(40).nullish(),
});

export const createdUserSchema = createUserSchema
  .extend({
    id: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
    reset_token: z.string().nullable()
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

export const getSpecificUserSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    CPF: z.string(),
    mobile: z.string(),
    birth_date: z.string(),
    description: z.string().max(50).nullish(),
    ZIP_code: z.string(),
    state: z.string(),
    city: z.string(),
    street: z.string(),
    account_type: z.nativeEnum(UserType),
    number: z.string(),
    additional_details: z.string().max(40).nullish(),
    id: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
    reset_token: z.string().nullable()
  })
  .extend({
    ads: z.array(z.instanceof(Ad)),
  });

export const getAllUsersSchema = getSpecificUserSchema.array();
