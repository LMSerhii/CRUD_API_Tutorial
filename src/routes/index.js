import healthRouter from './health.route.js';

const api = '/api/v1/';

export default (app) => {
  app.use(`${api}health`, healthRouter);
};
