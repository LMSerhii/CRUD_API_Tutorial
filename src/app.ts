import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import 'module-alias/register';
import morgan from 'morgan';
import CONFIG from './config';
import routes from './routes';
import { CustomError } from './types/customError';

Sentry.init({
  dsn: CONFIG.SENTRY_DSN,
  integrations: [nodeProfilingIntegration()],
  tracesSampleRate: 1.0,

  profilesSampleRate: 1.0,
});

const app: Application = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

routes(app);

Sentry.setupExpressErrorHandler(app);

const port = CONFIG.PORT || 3001;

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err: CustomError, req: Request, res: Response, _: NextFunction) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

app.listen(port, () => {
  console.log('=====================================');
  console.log(` = Server is running on port ${port} =`);
  console.log('=====================================');
});
