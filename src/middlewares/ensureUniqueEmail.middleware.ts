import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { User } from '../entities/users.entity';
import { NextFunction, Request, Response } from 'express';
import { AppError } from '../error';

export const verifyEmailMiddleware = async (
  req: Request,
  _res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);
  const userEmail = req.body.email;

  if (userEmail) {
    const exist: boolean = await userRepo.exist({
      where: { email: userEmail },
    });

    if (exist) throw new AppError('Email already exist', 409);
  }

  return next();
};
