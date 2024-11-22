import { Redis } from "ioredis";
import { profile } from "@/configurations";
import {
  redisConnectionStatus,
  redisConnectionTimeout,
} from "@/constants/redisConstants";
import { RedisErrorResponse } from "@/exceptions/internal.exception";

class InitializeRedis {
  private static client: Redis;
  private static connectionTimeout: NodeJS.Timeout | null = null;

  private static handleConnectionTimeout = () => {
    this.connectionTimeout = setTimeout(() => {
      throw new RedisErrorResponse(
        redisConnectionTimeout.MESSAGE.CODE,
        redisConnectionTimeout.MESSAGE.MSG
      );
    }, redisConnectionTimeout.TIMEOUT);
  };

  private static handleEventConnection = (connectionRedis: Redis) => {
    connectionRedis.on(redisConnectionStatus.CONNECT, () => {
      console.log(`Redis ===> Connection status : Connected`);
      if (this.connectionTimeout) {
        clearTimeout(this.connectionTimeout);
      }
    });

    connectionRedis.on(redisConnectionStatus.END, () => {
      console.log(`Redis ===> Connection status : Disconnected`);
      this.handleConnectionTimeout();
    });

    connectionRedis.on(redisConnectionStatus.RECONNECT, () => {
      console.log(`Redis ===> Connection status : Reconnecting`);
      if (this.connectionTimeout) {
        clearTimeout(this.connectionTimeout);
      }
    });

    connectionRedis.on(redisConnectionStatus.ERROR, (error) => {
      console.log(`Redis ===> Connection status : Error ${error}`);
      this.handleConnectionTimeout();
    });
  };

  static initRedis = () => {
    if (!this.client) {
      this.client = new Redis({
        username: profile.dbs.redis.username,
        password: profile.dbs.redis.password,
        host: profile.dbs.redis.host,
        port: profile.dbs.redis.port,
      });
      this.handleEventConnection(this.client);
    }
  };

  static getRedis = () => {
    if (!this.client) {
      this.initRedis();
    }
    return this.client;
  };

  static closeRedis = () => {
    if (this.client) {
      this.client.disconnect();
      this.handleEventConnection(this.client);
    }
  };
}

export default InitializeRedis;
