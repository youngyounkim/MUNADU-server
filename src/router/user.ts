import { Router } from "express";
import * as user from "../controller/user";

const userRouter = Router();

userRouter.get("/info/:userid", user.userId);
userRouter.post("/signin", user.signin);
userRouter.post("/signup", user.signup);
userRouter.get("/signout", user.signout);
userRouter.put("/edit", user.edit);

export default userRouter;
