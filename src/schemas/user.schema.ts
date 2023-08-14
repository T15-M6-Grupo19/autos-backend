import { z } from 'zod';

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
