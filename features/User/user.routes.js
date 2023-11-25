import express from "express";
import {addUser, loginUser } from "./controllers/User.controller.js";
const userRouter = express.Router();

userRouter.post('/signup', addUser);
userRouter.post('/signin', loginUser);

export default userRouter;