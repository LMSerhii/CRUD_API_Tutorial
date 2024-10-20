import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`),
});

interface Config {
  PORT: string;
  DB_HOST: string;
  DB_NAME: string;
  DB_PSW: string;
  DB_PORT: string;
  DATABASE_URL: string;
  SENTRY_PROJECT_ID: string;
  SENTRY_ORGANIZATION_ID: string;
  SENTRY_KEY: string;
  SENTRY_DSN: string;
}

function createConfig(): Config {
  const { PORT, DB_HOST, DB_NAME, DB_PSW, DB_PORT, SENTRY_PROJECT_ID, SENTRY_ORGANIZATION_ID, SENTRY_KEY } =
    process.env;

  if (
    !PORT ||
    !DB_HOST ||
    !DB_NAME ||
    !DB_PSW ||
    !DB_PORT ||
    !SENTRY_PROJECT_ID ||
    !SENTRY_ORGANIZATION_ID ||
    !SENTRY_KEY
  ) {
    throw new Error('Missing one or more configuration environment variables');
  }

  const DATABASE_URL = `postgresql://${DB_NAME}:${DB_PSW}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

  const SENTRY_DSN = `https://${SENTRY_KEY}@o${SENTRY_ORGANIZATION_ID}.ingest.de.sentry.io/${SENTRY_PROJECT_ID}`;

  return {
    PORT,
    DB_HOST,
    DB_NAME,
    DB_PSW,
    DB_PORT,
    SENTRY_PROJECT_ID,
    SENTRY_ORGANIZATION_ID,
    SENTRY_KEY,
    DATABASE_URL,
    SENTRY_DSN,
  };
}

const CONFIG = createConfig();

export default CONFIG;
