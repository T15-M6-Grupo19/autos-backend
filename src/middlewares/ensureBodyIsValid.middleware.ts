import { NextFunction, Request, Response } from 'express';
import { ZodTypeAny } from 'zod';

const ensureBodyIsValidMW =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    const validateData = schema.parse(req.body);

    req.body = validateData;

    return next();
  };

export { ensureBodyIsValidMW };
