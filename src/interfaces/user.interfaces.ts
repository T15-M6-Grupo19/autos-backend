import { z } from 'zod';
import {
  createUserSchema,
  createdUserSchema,
  toUpdateSchema,
  updateUserSchema,
  updatedResponseSchema,
} from '../schemas/user.schema';
import { DeepPartial } from 'typeorm';

export type TUserRequest = z.infer<typeof createUserSchema>;
export type TUserResponse = z.infer<typeof createdUserSchema>;
type TUserUpdate = z.infer<typeof toUpdateSchema>;
export type TUserUpdateRequest = DeepPartial<TUserUpdate>;
export type TUserUpdateReponse = z.infer<typeof updatedResponseSchema>;
