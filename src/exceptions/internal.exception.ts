import { BaseException } from "./api.exception";

export class RedisErrorResponse extends BaseException {
  constructor(status: number, message: string) {
    super(status, message);
  }
}
