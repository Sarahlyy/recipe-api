import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category.js";
import { localUpload } from "../middlewares/upload.js";

// //create upload middleware
// const upload=multer({dest:'uploads'});

//create a router
const categoryRouter=Router()

//Define routes
categoryRouter.get('/categories',getCategories);

categoryRouter.post('/categories',localUpload.single('image'), postCategory);







//expoert router
export default categoryRouter;