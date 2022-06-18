const mongoose=require("mongoose")
const validator=require("validator")
const bloggerSchema=new mongoose.Schema({
  name:{
      type:String,
      required:true,
      minlength:3
  },
  email:{
    type:String,
    required:true,
    unique:true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Invalid Email address")
        }
    }
    },
  college_id:{
      type:Number,
      required:true,
      unique:true,
      min:8
  },
  password:{
      type:String,
      required:true,

  },
   profile:{
    data:Buffer,
   contentType:String,
},
bio:{   
   type:String
},
blog:{
   type:Array,
   default:[]
}
},{strict:false})
const Bloggers=new mongoose.model("Blogger",bloggerSchema);
module.exports=Bloggers;