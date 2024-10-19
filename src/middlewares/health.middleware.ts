import { NextFunction, Request, Response } from 'express';

const healthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  next();
};

export default healthMiddleware;
