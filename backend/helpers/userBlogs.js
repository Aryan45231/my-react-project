const db=require("../db/connection.js")
const blogs=async(req,res)=>{
    const userdata=await db.Bloggers.findOne({college_id:`${req.params.college_id}`},{
      "blog":1
    })
     res.json({
       blog:userdata
     })
  }
  module.exports=blogs