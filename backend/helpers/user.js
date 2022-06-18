const db=require("../db/connection.js")
const user=async(req,res)=>{
    const data=await db.Bloggers.findOne({college_id:req.params.college_Id})
    res.json({user:data})
}
module.exports=user