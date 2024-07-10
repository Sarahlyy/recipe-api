import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category.js";
import { localUpload, remoteUpload } from "../middlewares/upload.js";
import { checkUserSession } from "../middlewares/auth.js";

// //create upload middleware
// const upload=multer({dest:'uploads'});

//create a router
const categoryRouter=Router()

//Define routes
categoryRouter.get('/categories',getCategories);



categoryRouter.post('/categories',checkUserSession ,remoteUpload.single('image'), postCategory);







//expoert router
export default categoryRouter;