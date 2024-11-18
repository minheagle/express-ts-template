import { StatusCode, ReasonPhrases } from "@/core/httpStatusCode";

export class BaseException extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = this.constructor.name;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export class BadRequestException extends BaseException {
  constructor(
    status: number = StatusCode.BAD_REQUEST,
    message: string = ReasonPhrases.BAD_REQUEST
  ) {
    super(status, message);
  }
}

export class UnauthorizedException extends BaseException {
  constructor(
    status: number = StatusCode.UNAUTHORIZED,
    message: string = ReasonPhrases.UNAUTHORIZED
  ) {
    super(status, message);
  }
}

export class ForbiddenException extends BaseException {
  constructor(
    status: number = StatusCode.FORBIDDEN,
    message: string = ReasonPhrases.FORBIDDEN
  ) {
    super(status, message);
  }
}

export class NotFoundException extends BaseException {
  constructor(
    status: number = StatusCode.NOT_FOUND,
    message: string = ReasonPhrases.NOT_FOUND
  ) {
    super(status, message);
  }
}

export class UnprocessableEntityException extends BaseException {
  constructor(
    status: number = StatusCode.UNPROCESSABLE_ENTITY,
    message: string = ReasonPhrases.UNPROCESSABLE_ENTITY
  ) {
    super(status, message);
  }
}

export class TooManyRequestsException extends BaseException {
  constructor(
    status: number = StatusCode.TOO_MANY_REQUESTS,
    message: string = ReasonPhrases.TOO_MANY_REQUESTS
  ) {
    super(status, message);
  }
}

export class InternalServerErrorException extends BaseException {
  constructor(
    status: number = StatusCode.INTERNAL_SERVER_ERROR,
    message: string = ReasonPhrases.INTERNAL_SERVER_ERROR
  ) {
    super(status, message);
  }
}
