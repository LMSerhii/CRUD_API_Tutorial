import { AsyncHandler } from '@/types/AsyncHandler';
import { CustomError } from '@/types/customError';
import { NextFunction, Request, Response } from 'express';

export const catchAsync = (fn: AsyncHandler) => (req: Request, res: Response, next: NextFunction) => {
  fn(req, res, next).catch((err: CustomError) => next(err));
};
