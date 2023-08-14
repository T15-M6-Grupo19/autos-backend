import { z } from 'zod';
import { createUserSchema, createdUserSchema } from '../schemas/user.schema';

export type TUserRequest = z.infer<typeof createUserSchema>;
export type TUserResponse = z.infer<typeof createdUserSchema>;
