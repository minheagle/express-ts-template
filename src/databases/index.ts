import InitializeRedis from "./redis";

export const initDatabases = async () => {
  // Init Redis
  InitializeRedis.initRedis();
};
