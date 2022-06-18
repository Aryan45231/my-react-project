const db=require("../db/connection.js")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const signup=async (req,res)=>{
   try{
     const user =db.Bloggers.find({email:req.body.email})
     console.log(user)
     const exist_college_id=db.Bloggers.findOne({college_id:req.body.college_id})
     if(user.email!=undefined || exist_college_id.college_id!=undefined){
      res.json({err:"email already exist"})
        console.log('email already exist') 
 
      }
   else{
      const data= await  db.Bloggers.create({
         name:req.body.name,
         email:req.body.email,
         college_id:req.body.college_id,
         password: bcrypt.hashSync(req.body.password, 13) ,   // securing the password by hashing it using hashsync of bcrypt 
     })
    await data.save()
    res.json({
      _id:req.body._id,
      name:req.body.name,
      email:req.body.email,
      college_id:req.body.college_id,
      token:jwt.sign({_id:req.body._id,
          name:req.body.name,
          email:req.body.email},`${process.env.jwt_key}`)
     })
     console.log("data saved")
   }
     }
     catch(e){
      res.json({err:"college_id or email is not valid or alreay exist please try again"})
      console.log(e)
   }
}
module.exports=signup