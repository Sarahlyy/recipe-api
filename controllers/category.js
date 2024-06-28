import { categoryModel } from "../models/category.js";

export const getCategories=async(req,res, next) =>{
    try {
        //get all categies from, the database
        const allCategories =await categoryModel.find();
        //
        res.json(allCategories)
    } catch (error) {
        next(error);
    }
};

export const postCategory= async(req,res,next) =>{

   try {
    const newCategory = await categoryModel.create(req.body);
    //return response
    res.status(201).json(newCategory)
   } catch (error) {
    next(error);
   }
};

