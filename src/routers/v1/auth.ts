import { Router } from "express";
import { NotFoundException } from "@/exceptions/api.exception";

const router: Router = Router();

router.get("/", (req, res) => {
  throw new NotFoundException(404, "User not found !");
});

export default router;
