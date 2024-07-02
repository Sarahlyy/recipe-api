import express from "express";
import recipeRouter from "./routes/recipe.js";
import mongoose from "mongoose";
//put this line of code to install swagger might automate though
import expressOasGenerator from "express-oas-generator"
import categoryRouter from "./routes/category .js";

//connect to database
await mongoose.connect(process.env.MONGO_URL);


//create express app
const app = express();
//put the 3 lines of code below to install swagger for documentation ..becareful with your tags/look for the common values in the path
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),
});

//Apply Middleware
app.use(express.json());
app.use(express.static('uploads'));
//Use routes
app.use(recipeRouter);

app.use(categoryRouter);
//Put the 2 lines of code to install express
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));

//Listen for incoming request
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});