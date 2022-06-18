const cloudinary=require("cloudinary").v2
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });
//   app.post("/up",uploadBlog.single("testtemp"),async(req,res)=>{
//     const rest=await  cloudinary.uploader.upload(req.file.path,{
//        profile_Id:"556677",
//        width:500,
//        height:500,
//        crop:"fill"
//      })
//      console.log(rest)
//      res.json({url:rest.url})
//        console.log(req.file)
//        console.log(process.env.jwt_key)
//    })
module.exports=cloudinary;