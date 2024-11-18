export type AppConfig = {
  host: string;
  port: number;
};

export type SessionConfig = {
  secret: string;
  maxAge: number;
};

export enum DatabaseType {
  MYSQL,
  POSTGRESQL,
  MONGODB,
  REDIS,
}

export type DatabaseConfig = {
  type: DatabaseType;
  host: string;
  port: number;
  username?: string;
  password?: string;
  dbName?: string;
};

export type DatabasesConfig = {
  redis: DatabaseConfig;
};

export type Profile = {
  env: string;
  app: AppConfig;
  session: SessionConfig;
  dbs: DatabasesConfig;
};
