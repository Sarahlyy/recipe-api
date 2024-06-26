import { Router } from "express";
// import { RecipeModel } from "../models/recipe.js";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipe } from "../controllers/recipe.js";

//Create a router

const recipeRouter = Router();

//Define routes

recipeRouter.get('/recipes', getRecipes);



recipeRouter.post('/recipes', postRecipe);

recipeRouter.patch('/recipes/:id', patchRecipe);


recipeRouter.delete('/recipes/:id', deleteRecipe);



recipeRouter.get('/recipes/:id', getRecipe);
// export router

export default recipeRouter;