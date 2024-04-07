import { Router } from "express";
const router = Router();
import { loginUser, signupUser } from "../controllers/userController.js";

router.route("/signup").post(signupUser);
router.route("/signin").post(loginUser);

export default router;
