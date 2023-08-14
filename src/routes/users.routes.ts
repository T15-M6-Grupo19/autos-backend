import { Router } from 'express';
import { ensureBodyIsValidMW } from '../middlewares/ensureBodyIsValid.middleware';
import { createUserSchema } from '../schemas/user.schema';
import { verifyEmailMiddleware } from '../middlewares/ensureUniqueEmail.middleware';
import { createUserController } from '../controllers/user.controllers';

export const userRoutes: Router = Router();

userRoutes.post(
  '',
  ensureBodyIsValidMW(createUserSchema),
  verifyEmailMiddleware,
  createUserController
);
