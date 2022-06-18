const db=require("../db/connection.js")
const getComment=async(req,res)=>{
    const data=await  db.Bloggers.findOne({college_id:req.params.blog_college_id},{"blog":1})
   const blogArrahy=data.blog
   const targetBlog=blogArrahy.find((element)=>element.blogId==req.params.blogId)
   res.json({comments:targetBlog.comment})
 }
 module.exports=getComment