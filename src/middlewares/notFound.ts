import { Request, Response, NextFunction } from "express";
import { NotFoundException } from "@/exceptions/api.exception";

export const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new NotFoundException(404, "Not found !");
  next(error);
};
