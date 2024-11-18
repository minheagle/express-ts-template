import dotenv from "dotenv";
import path from "path";
import Joi from "joi";
import {
  AppConfig,
  SessionConfig,
  DatabaseConfig,
  Profile,
  DatabaseType,
} from "@/types/config.type";

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid("dev", "qa", "prod").required(),
    APP_HOST: Joi.string().required(),
    APP_PORT: Joi.number().required(),
    SESSION_SECRET: Joi.string().required(),
    SESSION_MAX_AGE: Joi.number().required(),
    REDIS_USERNAME: Joi.string().required(),
    REDIS_PASSWORD: Joi.string().required(),
    REDIS_HOST: Joi.string().required(),
    REDIS_PORT: Joi.number().required(),
  })
  .unknown();

const { value, error } = envSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Enviroment variables is not match. Result: ${error}`);
}

const app: AppConfig = {
  host: value.APP_HOST,
  port: value.APP_PORT,
};

const session: SessionConfig = {
  secret: value.SESSION_SECRET,
  maxAge: value.SESSION_MAX_AGE,
};

const redis: DatabaseConfig = {
  type: DatabaseType.REDIS,
  host: value.REDIS_HOST,
  port: value.REDIS_PORT,
  username: value.REDIS_USERNAME,
  password: value.REDIS_PASSWORD,
};

const profile: Profile = {
  env: value.NODE_ENV,
  app: app,
  session: session,
  dbs: {
    redis: redis,
  },
};

export default profile;
