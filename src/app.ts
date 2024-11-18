import express, { Express } from "express";
import { initDatabases } from "@/databases";
import { initMiddleware } from "@/middlewares";
import { initRouter } from "@/routers";
import { notFoundMiddleware, errorHandler } from "@/middlewares";

export const initApplicaton = () => {
  const app: Express = express();

  // Init middlewares for app
  initMiddleware(app);

  // Init routers for app
  initRouter(app);

  // Handle not found route
  app.use(notFoundMiddleware);

  // Handle unexpected error
  app.use(errorHandler);

  return app;
};
