import { AsyncHandler } from '@/types/AsyncHandler';
import { CustomError } from '@/types/customError';
import { NextFunction, Request, Response } from 'express';

const catchAsync = (fn: AsyncHandler) => (req: Request, res: Response, next: NextFunction) => {
  fn(req, res, next).catch((err: CustomError) => next(err));
};

export default catchAsync;
