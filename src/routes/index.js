const api = '/api/v1/';

export default (app) => {
  app.use(`${api}/health_test`, (_, res) => {
    res.json({ message: 'Everything is OK, server working' });
  });
};
