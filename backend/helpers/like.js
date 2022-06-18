const db=require("../db/connection.js")
const like=async(req,res)=>{
    const blogger=await db.Bloggers.findOne({college_id:req.body.blog_college_id},{"blog":1})
    const blogs=blogger.blog
    const indexOfBlog=req.body.blogId-1
    console.log(indexOfBlog)
    const targetBlog=blogs.find((element)=>element.blogId==req.body.blogId)
   const ispresent= targetBlog.like.some((element)=>element.collgege_id==req.body.user_college_id)
   if(ispresent==false){
    targetBlog.like.push({
      collgege_id:req.body.user_college_id,
      name:req.body.name,
      image:req.body.image
    })
   }else{
      targetBlog.like= targetBlog.like.filter((element)=>element.collgege_id!=req.body.user_college_id)
   }
    const newblogs=blogs.splice(indexOfBlog,1,targetBlog)
    console.log(targetBlog)
   const status=await db.Bloggers.updateOne({college_id:req.body.blog_college_id},{
     blog:blogs
   })
    res.json({blogs})  
}
module.exports=like