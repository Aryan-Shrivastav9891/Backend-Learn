import { timeStamp } from "console";
import mongoose from "mongoose";


const sub_todoSchema=new mongoose.Schema(
    {
        content: {
            type:String,
            required:true,

        },
        compleat:{
            type:true,
            default:true
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"USer"
        }
        
    } , {timeStamps:true})

export const  Sub_todo= mongoose.model("Sub_todo" , sub_todoSchema) 

