import express from "express";
import recipeRouter from "./routes/recipe.js";
import mongoose from "mongoose";
import categoryRouter from "./routes/category .js";

//connect to database
await mongoose.connect (process.env.MONGO_URL);


//create express app
const app=express();

//Apply Middleware
app.use(express.json());

//Use routes
app.use(recipeRouter);

app.use(categoryRouter);

//Listen for incoming request
const port=process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`App listening on port${port}`);
});