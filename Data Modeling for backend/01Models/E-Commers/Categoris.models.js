import mongoose from "mongoose";

const category_schema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
    } , {timestamps:true})


export const Category=mongoose.model("Category" , category_schema)