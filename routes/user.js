import { Router } from "express";
import { register } from "../controllers/user.js";

//create Router
const userRouter=Router();

//define routes
 userRouter.post("/register",register)



//export router

export default userRouter