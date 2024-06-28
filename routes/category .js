import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category.js";

//create a router

const categoryRouter=Router()
//Define routes
categoryRouter.get('/categories',getCategories);

categoryRouter.post('/categories',postCategory);







//expoert router
export default categoryRouter;