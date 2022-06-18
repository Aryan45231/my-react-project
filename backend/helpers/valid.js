const validator=require("../validation.js")
const valid=(req,res,next)=>{
    if(validator){
      res.json({value:true})
    }
  }
module.exports=valid