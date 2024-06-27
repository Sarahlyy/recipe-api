import { RecipeModel } from "../models/recipe.js";

//Get All Recipes


export const getRecipes = async (req, res, next) => {
    try {
        //Get all recipes from database
        const allRecipes = await RecipeModel.find();
        //Return all recipes as reponse
        res.json(allRecipes);
    } catch (error) {
        next(error);
    }
}

//Post Recipe
export const postRecipe = async (req, res, next) => {
    try {
        //Add recipe to database
        const allRecipes = await RecipeModel.create(req.body);
        //return response
        res.json(allRecipes);
    } catch (error) {
        next(error);
    }
}


//Patch recipe
export const patchRecipe = (req, res) => {
    res.json(`Recipe with ID ${req.params.id} updated`);
}

//delete recipe
export const deleteRecipe = async (req, res, next) => {
    try {
        //delete recipe by id
        const deletedRecipe =await RecipeModel.findByIdAndDelete( req.params.id);
        res.json(deletedRecipe);
        //return response
    } catch (error) {
        next(error);
    }
}
export const getRecipe = (req, res) => {
    res.json(`Get recipe with ID ${req.params.id}`);
}
