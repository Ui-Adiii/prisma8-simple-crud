import express from 'express'
import { createUser, deleteUser, getUsers, updateUser } from '../controllers/user.controller.js';

const userRouter = express.Router()

userRouter.post("/", createUser);
userRouter.patch("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.get("/", getUsers);

export default userRouter