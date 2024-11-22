import express, { Express } from "express";
import helmet from "helmet";
import compression from "compression";
import morgan from "./morgan";
import cors from "cors";
import corsOption from "./cors";
import sessionMiddleware from "./session";
import limiter from "./rateLimiter";

export { notFoundMiddleware } from "./notFound";
export { errorHandler } from "./errorHandler";

export const initMiddleware = (app: Express) => {
  // Init json and urlencoded
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Init morgan
  app.use(morgan.morganMiddleware);
  // app.use(morgan.errorHandler);

  // Init helemt
  app.use(helmet());

  // Init compression
  app.use(compression());

  // Init cors
  app.use(cors(corsOption));

  // Init session
  app.use(sessionMiddleware);

  // Init rate limiter
  // app.use(limiter);

  // Init passport (Optional)
};
