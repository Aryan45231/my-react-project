import React ,{useState,useEffect}from 'react'
import {useNavigate}from "react-router-dom"
import axios from "axios"
import Loader from '../loader/Loader'
import "./Aboutuser.css"
export default function Aboutuser() {
    const userInfo=JSON.parse(localStorage.getItem("userinfo"))
  const navigate=useNavigate()
   const [userInofo, chagedState]= useState({
       profile:"import Loader from '../loader/Loader'", bio:""
   })    
   const college_id=JSON.parse(localStorage.getItem("userinfo")).college_id
   const  PostProfile =async ()=>{
     try{
      document.getElementById("loader").style.display="block"
      const {profile,bio}=userInofo;
      const formdata=new FormData();
      formdata.append("college_id", college_id)
      formdata.append("profile",profile);
      formdata.append("bio",bio);
      const res=await axios.post("/upload", formdata);
        document.getElementById("loader").style.display="none"
        localStorage.setItem("userinfo",JSON.stringify({...userInfo, ...res.data}))
        navigate("/")
     }catch(e){
          console.log(e)
       alert(e)
     }
   }                          
     const renderimage=(e)=>{
           const choosenFile=e.target.files[0];
           if(choosenFile){
               const img=document.getElementById("userImage")
               const render=new FileReader()
                 render.onload=(er)=>{
                   chagedState({
                     ...userInofo , profile:e.target.files[0]
                   })
                   img.setAttribute("src", render.result)
            }
              render.readAsDataURL(choosenFile)                                                                                                                                                               
           }
     }
  return (
        <>
        <Loader/>
        <div className="aboutContainer">
         <div className="aboutuser">
         <h1> Tell about your self</h1>
             <form method="POST"className="detail" encType='multipart/form-data'>
                 <input name='profile' type="file" className="file" id='file'onChange={renderimage} accept="image/*" multiple={false}/>
                 <label htmlFor="file" className='userImage'>     
                 <img  id="userImage" src={process.env.PUBLIC_URL+"Upload/profile.png"} alt="not valid" className='profileImage' />
                 </label>
                 <input type="text" onChange={(event)=>{chagedState({...userInofo,bio:event.target.value})}} className="userAbout"  placeholder='Add bio'/>
             </form>
             <button type='disable' onClick={PostProfile}className='btn-success uploadButton'> Next</button>
         </div>
        </div>
        </>
  )
}

