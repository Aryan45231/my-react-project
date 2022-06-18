import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router'
import axios from "axios"
import "./Edit.css"
import Loader from '../loader/Loader'
function Edit() { 
      const navigate=useNavigate()
      const [blogData,blogDataState]=useState(
      {blogTitle:"",blogContent:"",blogImage:""}
      )
 const renderimage=(e)=>{
     
      const choosenFile=e.target.files[0];
      if(choosenFile){
          const img=document.getElementById("addedImage")
          const render=new FileReader()
            render.onload=(er)=>{
              img.setAttribute("src", render.result)
       }
         render.readAsDataURL(choosenFile)                                                                                                                                                           
      }
      blogDataState({...blogData , blogImage:e.target.files[0]})  
      console.log(blogData)
}
const college_id=JSON.parse(localStorage.getItem("userinfo")).college_id
console.log(college_id)
const postContent=async(e)=>{
      document.getElementById("loader").style.display="block"
      e.preventDefault();
      const {blogTitle, blogContent,blogImage}=blogData
      const formdata=new FormData();
      formdata.append("college_id",college_id)
      formdata.append("blogTitle",blogTitle )
      formdata.append("blogContent",blogContent)
      formdata.append("blogImage", blogImage)
        const res=await axios.post("/uploadContent", formdata)
        console.log(res.data)
       if(res.data.err!=undefined){
                  alert(res.data.err)
            document.getElementById("loader").style.display="none"

       }else{
            localStorage.setItem("userinfo",JSON.stringify(res.data))
            navigate(`/home/${JSON.parse(localStorage.getItem("userinfo")).token}`)
            document.getElementById("loader").style.display="none"
       }
}
  return (       
   <>
   <Loader/>
   <Navbar/>
      <div className="editPage">
            <form method='POST' action='/uploadContent' encType='multipart/form-data' className='blogForm ' >
                  <div className="inputs">
                   <div className="atachments">
                   <input type="textarea" onChange={(e)=>{blogDataState({...blogData ,  blogTitle:e.target.value})}} required className="blogTitle form-check" placeholder='title'/>
                    <input type="file" id='blogImage'name='blogImage' onChange={renderimage} accept='image/*' multiple={false} />
                    <label htmlFor="blogImage" className='blogImagelabel'>
                         <img id="addedImage"src={process.env.PUBLIC_URL+"/icons/addimage.png"} alt="not avalable"/>
                    </label>
                   </div>
                    <div className="mainblog">
                          <textarea  type="text" onChange={(e)=>{blogDataState({...blogData ,  blogContent:e.target.value})}}required placeholder='add content' className='form-check blogData contents'  > 
                          </textarea>
                    </div>
                  </div> 
                  <button  onClick={postContent} className='btn-success blogPost'> POST</button>
            </form>
      </div>
   </>
  )
}

export default Edit