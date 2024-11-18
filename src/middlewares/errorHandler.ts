import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { BaseException } from "@/exceptions/api.exception";

export const errorHandler: ErrorRequestHandler = (
  error: BaseException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error?.status || 500;
  res.status(status).json({
    status: "Error",
    code: status,
    message: error.message || "Internal Server Error!",
  });
};
