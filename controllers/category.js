import { categoryModel } from "../models/category.js";

export const getCategories=async(req,res, next) =>{
    try {
        //get query params
       
        const { limit, skip, filter,fields } = req.query;
        //get all categies from, the database
        const allCategories =await categoryModel
        .find(JSON.parse(filter))
        .select(JSON.parse(fields))
        .limit(limit)
        .skip(skip);
        
        
        

        res.json(allCategories)
    } catch (error) {
        next(error);
    }
};

export const postCategory= async(req,res,next) =>{
    // console.log(req.body);
    // console.log(req.file);
//add category to database
   try {
    const newCategory = await categoryModel.create({
        ...req.body,
        image:req.file.filename
    });
    //return response
    res.status(201).json(newCategory)
   } catch (error) {
    next(error);
   }
};

