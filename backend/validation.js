const jwt=require("jsonwebtoken")
module.exports=(req,res,next)=>{
    token=req.params.token
    jwt.verify(token,process.env.jwt_key,(err,decode)=>{
        if(err){
            console.log(err)
            res.json(err)
        }else{
            next()
        }
    })
}