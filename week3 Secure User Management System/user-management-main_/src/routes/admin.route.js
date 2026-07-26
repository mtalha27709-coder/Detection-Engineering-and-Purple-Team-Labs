import { Router } from "express";
import { verifyAdmin, verifyJWT } from "../middlewares/auth.middleware.js";
import {
  createAdmin,
  deleteUser,
  getUserById,
  getUsers,
  modifyUser,
} from "../controllers/admin.controller.js";

const adminRouter = Router();

// create an admin user
adminRouter.post("/createAdmin", verifyJWT, verifyAdmin, createAdmin);

// get users per page
adminRouter.get("/users", verifyJWT, verifyAdmin, getUsers);

// get user by id
adminRouter.get("/user", verifyJWT, verifyAdmin, getUserById);

// modify user details
adminRouter.put("/user", verifyJWT, verifyAdmin, modifyUser);

// delete a user
adminRouter.delete("/user", verifyJWT, verifyAdmin, deleteUser);

export default adminRouter;
