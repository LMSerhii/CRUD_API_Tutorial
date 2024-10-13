import { NextFunction, Request, Response } from 'express';

const healthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('Middleware');

  next();
};

export default healthMiddleware;
