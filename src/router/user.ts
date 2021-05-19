import { Router } from "express";
import * as user from "../controller/user";
import multer from "multer";
import path from "path";

const userRouter = Router();
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
  limits: { fileSize: 5 * 512 * 512 },
});

userRouter.get("/info/:userid", user.userinfo);
userRouter.post("/signin", user.signin);
userRouter.post("/signup", user.signup);
userRouter.get("/signout", user.signout);
userRouter.put("/edit", user.signout);
userRouter.put("/editimg", upload.single("image"), user.editimg);

export default userRouter;
