const db=require("../db/connection.js")
const comment=async (req,res)=>{
    const blogger=await db.Bloggers.findOne({college_id:req.body.blog_college_id},{"blog":1})
    const blogs=blogger.blog 
    const targetBlog=blogs.find((element)=>element.blogId==req.body.blogId)
    targetBlog.comment.push({
      comment:req.body.comment,
      collgege_id:req.body.user_college_id,
      name:req.body.name,
      image:req.body.image  
    })
    console.log(req.body.comment)
    const status=await db.Bloggers.updateOne({college_id:req.body.blog_college_id},{
      blog:blogs
    })  
    res.json({blogs})  
  }
  module.exports=comment