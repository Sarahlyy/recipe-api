import { Router } from "express";
// import { RecipeModel } from "../models/recipe.js";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipe } from "../controllers/recipe.js";
import { localUpload, remoteUpload } from "../middlewares/upload.js";
import { checkUserSession } from "../middlewares/auth.js";

//
//Create a router

const recipeRouter = Router();

//Apply Middlewares
recipeRouter.use(checkUserSession)

//Define routes

recipeRouter.get('/recipes', getRecipes);



recipeRouter.post('/recipes',checkUserSession,remoteUpload.single('image'),postRecipe);

recipeRouter.patch('/recipes/:id',checkUserSession, patchRecipe);


recipeRouter.delete('/recipes/:id',checkUserSession, deleteRecipe);



recipeRouter.get('/recipes/:id', getRecipe);
// export router

export default recipeRouter;