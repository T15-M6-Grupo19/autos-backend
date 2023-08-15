import { NextFunction, Request, Response } from 'express';
import { AppError } from '../error';

export const isOwnerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (res.locals.user.id != req.params.id) {
    throw new AppError('Insufficient permission', 403);
  }
  return next();
};
