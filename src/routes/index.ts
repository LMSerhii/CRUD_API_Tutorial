import { Application } from 'express';
import healthRouter from './healthRoute';

const api = '/api/v1';

export default (app: Application) => {
  app.use(`${api}/health`, healthRouter);
};
