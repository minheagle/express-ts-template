export const redisConnectionStatus = {
  CONNECT: "connect",
  END: "end",
  RECONNECT: "reconnecting",
  ERROR: "error",
};

export const redisConnectionTimeout = {
  TIMEOUT: 30 * 1000, // milisecond
  MESSAGE: {
    CODE: -999,
    MSG: "Redis connection timeout !",
  },
};
