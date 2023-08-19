import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { User } from '../entities/users.entity';
import { AppDataSource } from '../data-source';
import { AppError } from '../error';

export const VerifyUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);
  const userId: string = res.locals.token.id;

  if (!userId) throw new AppError('An uuid must be provided', 400);

  const user: User | null = await userRepo.findOneBy({
    id: userId,
  });

  if (!user) throw new AppError('User not found', 404);

  res.locals.user = user;

  return next();
};
