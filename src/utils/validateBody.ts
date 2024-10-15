import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';
import HttpError from './HttpError.js';

const validateBody = (schema: Schema) => {
  const func = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(new HttpError(400, error.message));
    }
    next();
  };

  return func;
};

export default validateBody;
