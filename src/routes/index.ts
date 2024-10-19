import { Application } from 'express';
import healthRouter from './health.route';

const api = '/api/v1';

export default (app: Application) => {
  app.use(`${api}/health`, healthRouter);
};
