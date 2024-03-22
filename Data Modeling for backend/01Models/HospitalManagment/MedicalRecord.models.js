import mongoose from "mongoose";

const medialRecordsSchema= new mongoose.Schema({} , {timestamps:true})

export const MedicalRecords=mongoose.model("MedicalRecords" , medialRecordsSchema)