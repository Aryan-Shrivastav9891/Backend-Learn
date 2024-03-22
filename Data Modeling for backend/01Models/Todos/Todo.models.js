import { timeStamp } from "console";
import mongoose from "mongoose";
import { boolean } from "webidl-conversions";

const sub_todoSchema=new mongoose.Schema(
    {
        content:{
            type:String,
            required:true,
        },
        compleat:{
            type:boolean,
            default:false,
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        subTodos:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"sub_todo"
            }
        ] ///  Array of sub-todos   
    } , {timeStamps:true})

export const  Sub_todo= mongoose.model("Sub_todo" , sub_todoSchema) 

