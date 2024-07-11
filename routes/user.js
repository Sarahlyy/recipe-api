import { Router } from "express";
import { register ,login, profile, logout,} from "../controllers/user.js";
import { checkUserSession } from "../middlewares/auth.js";

//create Router
const userRouter=Router();

//define routes
 userRouter.post("/register",register);

userRouter.post("/login",login);
//export router
userRouter.post("/logout",checkUserSession,logout);


userRouter.get("/profile",checkUserSession, profile)

export default userRouter