import { Express } from "express";
import v1Router from "@/routers/v1";

export const initRouter = (app: Express) => {
  // Version 1
  app.use("/api/v1/auth", v1Router.authRouter);
};
