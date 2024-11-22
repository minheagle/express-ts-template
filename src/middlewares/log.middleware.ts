import { Request, Response, NextFunction } from "express";
import { logger } from "@/configurations";

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  logger.http(`${req.method} ${req.url}`);
  next();
};

export default loggerMiddleware;
