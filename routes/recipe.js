import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";

//Create a router

const recipeRouter =Router();

//Define routes

recipeRouter.get('/recipes',(req,res) =>{
    res.json('All recipes');
});



recipeRouter.post('/recipes',async (req,res) =>{
    //Add recipe to database
    await RecipeModel.create(req.body);
    //return response
    res.json("recipe added");
});         

recipeRouter.patch('/recipes/:id',(req,res) =>{
    res.json(`Recipe with ID ${req.params.id} updated`);
});


recipeRouter.delete('/recipes/:id',(req,res) =>{
    res.json(`Recipe with ID ${req.params.id} deleted`);
});



recipeRouter.get('/recipes/:id',(req,res)=>{
    res.json(`Get recipe with ID ${req.params.id}`);
});
// export router

export default recipeRouter;