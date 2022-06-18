const db=require("../db/connection.js")

const cloudinary=require(".//profile_cloudinary.js")
const upload =async(req,res)=>{
    console.log(req.body.college_id)
    const imgrest=await cloudinary.uploader.upload(req.file.path,{
      public_id:`${req.body.college_id}_profielImage`,
      width:500,
      height:500,
      crop:"fill"
    })
    const rst= await db.Bloggers.updateOne({college_id:req.body.college_id},{
      url:imgrest.url,
      bio:req.body.bio,
  })
     res.json({
       college_id:req.body.college_id,
        bio:req.body.bio,
        profile:imgrest.url
     })
  }
  module.exports=upload