const db=require("../db/connection.js")
const getLike=async(req,res)=>{
    console.log(req.params.blogId)
    console.log(req.params.blog_college_id)
    const data=await  db.Bloggers.findOne({college_id:req.params.blog_college_id},{"blog":1})
  
    const blogArrahy=data.blog
    const targetBlog=blogArrahy.find((element)=>element.blogId==req.params.blogId)
    res.json({like:targetBlog.like})
  }
  module.exports=getLike