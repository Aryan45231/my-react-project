 //-----------require modules----------
const express=require("express"),app=express();
const busboy=require("connect-busboy");
app.use(busboy())
require("dotenv").config()
const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
require("mongoose")
app.use(express.json())
const port=process.env.port||5000;
 //-------------require helper function for routes-------
 const validator=require("./validation.js")
 const signin=require("./helpers/signin.js")
 const signup=require("./helpers/signup.js")
 const uploads=require("./helpers/upload.js")
 const content=require("./helpers/uploadContent.js")
 const blogs=require("./helpers/userBlogs.js")
const like=require("./helpers/like.js")
const comment=require("./helpers//comment.js")
const getComment=require("./helpers/getComment.js")
const user=require("./helpers/user.js")
const valid=require("./helpers/valid.js")
const getLike=require("./helpers/getLike.js")
//-------------multer practice-----------
const multer=require("multer");
const { Db } = require("mongodb");
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "./upload")
    },
    filename:(req,file,cb)=>{cb(null, file.fieldname)}
})
const upload=multer({storage:storage})
app.post("/upload", upload.single("profile"),uploads)
//----------------blog routes--------
const blogstorage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"./upload/blogimage")
  },
  filename:(req,file,cb)=>{
    cb(null,file.fieldname)
  }
})
const db=require("./db/connection.js")
app.get("/blogs/:token",validator,async(req,res)=>{
  const blogs=await db.Bloggers.find({},{
    "blog":1
  })
  res.json({
    blogs
  })
})
const uploadBlog=multer({storage:blogstorage})
// --------------post routes-----------

app.post("/signup",signup)
app.post("/signin",signin)
app.post("/uploadContent",uploadBlog.single("blogImage"),content)
app.post("/like",like)
app.post("/comment",comment)
//----------------get requests-------------------
app.get("/validate/:token",validator,valid)   //------authentication---------
app.get("/",(req,res)=>{res.send("ok youa are connected")})
app.get("/userBlogs/:college_id", blogs)
app.get("/comment/:blog_college_id/:blogId",getComment)
app.get("/user/:college_Id", user)
app.get("/like/:blog_college_id/:blogId",getLike)
app.get("/targetBlog/:blogId/:college_id",async(req,res)=>{
    const blogs=await db.Bloggers.findOne({college_id:req.params.college_id},{
     blog:1
    })
    const target=blogs.blog
    const targetBlog=target.find((ele)=>ele.blogId==req.params.blogId)
    res.json({blog:targetBlog})
})
app.listen(port, ()=>console.log(`server is at ${port}`))

