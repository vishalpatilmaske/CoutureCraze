import { Router } from "express";
const router = Router();
import { getUserData } from "../controllers/userController.js";

router.route("/signup").post(getUserData);
router.route("/signin");

export default router;
