import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import CONFIG from './config/index.js';
import routes from './src/routes/index.js';

Sentry.init({
  dsn: CONFIG.SENTRY_DSN,
  integrations: [nodeProfilingIntegration()],
  tracesSampleRate: 1.0,

  profilesSampleRate: 1.0,
});

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

routes(app);

Sentry.setupExpressErrorHandler(app);

const port = CONFIG.PORT || 3001;

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

app.listen(port, () => {
  console.log('=====================================');
  console.log(` = Server is running on port ${port} =`);
  console.log('=====================================');
});
