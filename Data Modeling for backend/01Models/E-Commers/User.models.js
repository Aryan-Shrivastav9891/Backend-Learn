import { Timestamp } from "bson";
import mongoose from "mongoose";

const  userSchema= new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique: true,
            lowercase:true
        },
        email:{
            type:String,
            required:true,
            unique: true,
            lowercase:true
        },
        password:{
            type:String,
            require:true,
            
        }
    } , {Timestamps:false})

export const User= mongoose.model("User" , userSchema)