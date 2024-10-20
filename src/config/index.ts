import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`),
});

interface Config {
  PORT: string;
  DATABASE_URL: string;
  SENTRY_DSN: string;
}

function createConfig(): Config {
  const { PORT, DATABASE_URL, SENTRY_DSN } = process.env;

  if (!PORT || !SENTRY_DSN || !DATABASE_URL) {
    throw new Error('Missing one or more configuration environment variables');
  }

  return {
    PORT,
    DATABASE_URL,
    SENTRY_DSN,
  };
}

const CONFIG = createConfig();

export default CONFIG;
