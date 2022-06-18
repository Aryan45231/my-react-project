const db=require("../db/connection.js")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const signin=async(req,res)=>{
 try{
  const userdata=await db.Bloggers.findOne({email:`${req.body.email}`})
  userdata?bcrypt.compareSync(req.body.password, userdata.password)?(
    res.json({
    name:userdata.name,
    college_id:userdata.college_id,
    email:userdata.email,
    profile:userdata.url,
    bio: userdata.bio,
    blog:userdata.blog,
    token:jwt.sign({_id:userdata._id,
        name:userdata.name,
        email:userdata.email,},`${process.env.jwt_key}`)
   }))  // comparing the entered password and the hash password in datadabe using comparesync mathod of bcrypt
  : res.json("invalid email or password"):
  res.json("invalid email or password")  
 }catch(err){
   console.log(err)
   res.json({err})
 }
}
module.exports=signin