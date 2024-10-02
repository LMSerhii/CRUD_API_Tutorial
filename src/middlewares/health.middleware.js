import { catchAsync } from '../utils/catchAsync.js';

const healthMiddleware = (req, res, next) => {
  console.log('Middleware');

  next();
};

export default healthMiddleware;
