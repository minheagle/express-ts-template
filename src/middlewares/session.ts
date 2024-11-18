import session, { SessionOptions } from "express-session";
import RedisConnect from "connect-redis";
import InitializeRedis from "@/databases/redis";
import { profile } from "@/configurations";

const redisStore = new RedisConnect({
  client: InitializeRedis.getRedis(),
});

const sessionOption: SessionOptions = {
  store: redisStore,
  secret: profile.session.secret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: profile.env !== "dev" ? true : false,
    httpOnly: true,
    maxAge: profile.session.maxAge,
  },
};

const sessionMiddleware = session(sessionOption);

export default sessionMiddleware;
