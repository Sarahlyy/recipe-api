import express from "express";
import recipeRouter from "./routes/recipe.js";
import mongoose from "mongoose";

//connect to database
await mongoose.connect (process.env.MONGO_URL);


//create express app
const app=express();

//Apply Middleware
app.use(express.json());

//define routes
app.get('/', (req,res)=>{
    res.json('Welcome Home');
    });
    
    app.post('/login',(req,res)=> {
        res.json('Login successful');
    });
    
    app.patch('/',(req,res) =>{
        res.json('Welcome');
    });

    //Use routes
    app.use(recipeRouter)

//Listen for incoming request
app.listen(3000, ()=> {
    console.log('App listening on port 3000')
})