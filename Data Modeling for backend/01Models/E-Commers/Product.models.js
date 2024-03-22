import mongoose from "mongoose";



const productSchema= new mongoose.Schema(
    {
        description:{
            type:String,
            required:true,
        },
        name:{
            type:String,
            required:true,
        },
        productImg:{
            type:String,
        },
        Price:{
            Type:Number,
            default:0
        },
        stock:{
            type:Number,
            default:0
        },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category",
            required:true
        },
        Owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    } , {timestamps:true})

export const Product=mongoose.model("Product" , productSchema)
