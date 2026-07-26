import { Router } from "express";
import {
  changeCurrentPassword,
  deleteAccount,
  getAccountDetails,
  loginUser,
  registerUser,
  updateAccountDetails,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const userRouter = Router();

// register
userRouter.post(
  "/register",
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  registerUser
);

// login
userRouter.post("/login", loginUser);

// protected routes :

// get account details
userRouter.get("/account", verifyJWT, getAccountDetails);

// update account
userRouter.put(
  "/account",
  verifyJWT,
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  updateAccountDetails
);

// change password
userRouter.post("/account/change-password", verifyJWT, changeCurrentPassword);

// delete account
userRouter.delete("/account", verifyJWT, deleteAccount);

export default userRouter;
