const db=require("../db/connection.js")
const cloudinary=require("./profile_cloudinary.js")
const jwt=require("jsonwebtoken")
const content=async(req,res,)=>{
   try{
    const date=new Date()
    const userdata=await db.Bloggers.findOne({college_id:`${req.body.college_id}`})
      const uploadedimage=await cloudinary.uploader.upload(req.file.path)
     const status= await db.Bloggers.updateOne({college_id:`${req.body.college_id}`},{
       blog:[ 
         ...userdata.blog,
          { 
            college_id:userdata.college_id,
            blogId: userdata.blog.length +1,
            time:date.getTime(),
            bloggerName:userdata.name,
            bloggerImage:userdata.url,
             blogTitle:req.body.blogTitle,
             blogContent:req.body.blogContent,
             blogImage:uploadedimage.url,
             like:[],
             comment:[],
             share:[]
           }
      ]
    })
    const newuserdata=await db.Bloggers.findOne({college_id:`${req.body.college_id}`})
    res.json({
     name:userdata.name,
     college_id:userdata.college_id,
     email:userdata.email,
     profile:userdata.url,
     bio:userdata.bio,
     blog:newuserdata.blog,
     token:jwt.sign({_id:userdata._id,
         name:userdata.name,
         email:userdata.email,},`${process.env.jwt_key}`)
    }) 
 
   }catch(err){
     res.json({err:"pleaee the upload image "})
     
   }
}
module.exports=content