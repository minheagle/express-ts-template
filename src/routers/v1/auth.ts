import { Router } from "express";
import { RedisUtils } from "@/utils";

const router: Router = Router();

const sleep = (time: number = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const getUserFromDB = async () => {
  await sleep();
  return { name: "John Doe", age: 30 };
};

router.get("/", (req, res) => {
  // const cacheKey = "user_info";
  // const cacheData = await RedisUtils.getString(cacheKey);

  // if (cacheData) {
  //   res.json(cacheData);
  // } else {
  //   const userData = await getUserFromDB();
  //   await RedisUtils.setString(cacheKey, JSON.stringify(userData));
  //   res.json(userData);
  // }
  res.json({ name: "John Doe", age: 30 });
});

export default router;
