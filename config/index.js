import dotenv from 'dotenv';

dotenv.config();

const CONFIG = {
  PORT: process.env.PORT,
  SENTRY_DSN: process.env.SENTRY_DSN,
};

export default CONFIG;
