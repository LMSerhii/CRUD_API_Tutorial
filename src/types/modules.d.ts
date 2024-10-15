declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TEST?: string;
      MONGO_DB_URL: string;
    }
  }
}
export {};
