const mongoose=require("mongoose");
const  connect =async ()=>{
    try{
    await  mongoose.connect("mongodb+srv://blogging231:Aryan1629@cluster0.usgju.mongodb.net/?retryWrites=true&w=majority" )
     console.log("connection is successful")
    }catch(e){
        console.log(e)
    }
}
connect();
module.exports.Bloggers=require("../models/Bloggers.js");