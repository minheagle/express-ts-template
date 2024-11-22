import InitializeRedis from "@/databases/redis";

class RedisUtils {
  private static connection = InitializeRedis.getRedis();

  static async getString(key: string) {
    try {
      const value = await this.connection.get(key);
      if (!value) {
        console.log(`No value for key : ${key}`);
        return null;
      }
      return value;
    } catch (error) {
      console.log(`Error when get key : ${key}`);
      return null;
    }
  }

  static async setString(key: string, data: string) {
    try {
      await this.connection.set(key, data);
    } catch (error) {
      console.log(`Error when set key : ${key}`);
    }
  }

  static getHash(key: string) {}

  static setHash(key: string) {}

  static getList(key: string) {}

  static setList(key: string) {}

  static getSet(key: string) {}

  static setSet(key: string) {}
}

export default RedisUtils;
