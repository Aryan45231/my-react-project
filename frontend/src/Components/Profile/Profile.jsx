import React,{useEffect,useState} from 'react'
import BlogCard from '../home/BlogCard'
import Navbar from '../Navbar/Navbar'
import axios from "axios"
import "./Profile.css"
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
function Profile() {  
  const token=JSON.parse(localStorage.getItem("userinfo")).token
  const navigate=useNavigate() 
  const logout=()=>{
    
      localStorage.removeItem("userinfo")
    navigate("/")
    
  } 
   const info1=JSON.parse(localStorage.getItem("userinfo"))
   const {name,email,college_id,bio ,blog,profile}=info1
   const [arrayfoblogs,blogState]=useState([])
   const getingBlogs=async()=>{
     const temp=[]
   const blogdata=await axios.get(`/userBlogs/${college_id}`)
     const blogs=blogdata.data.blog.blog
     blogState(blogs)
   }
   getingBlogs()  
  return (
        <>
          <Navbar/> 
            <div className="profileContainer">
               <div className="userDetail">
               <img src={profile} id='userImage' alt="not valid" className="userimage" />
                     <h1>{name}</h1>
                 
                <div className="details">  
                <table className='detaiTablel'>
                   <tr>
                   <th> Name</th>
                   <td> {name}</td>
                   </tr>
                   <tr>
                   <th> Email</th>
                   <td> {email}</td>
                   </tr>
                   <tr>
                   <th> Coolege Id</th>
                   <td> {college_id}</td>
                   </tr>
                   <tr>
                   <th> About</th>
                   <td> {bio}</td>
                   </tr>
                   <tr>
                   <th> Phone Number</th>
                   <td>  9935577812</td>
                   </tr>
                   </table>    
                </div>
                 
                  <button className="btn-success editButton"onClick={()=>alert("comming soon")}>Edit Profile</button>
                  <button className="btn-success editButton"  onClick={logout}>
                           Log-out
                        </button>
               </div> 
            <div className="userProfileAndBlog">
         
          {arrayfoblogs.map((element,index)=>{
           return(
             <>
             <BlogCard 
             className="profilBlogs"
             key={index}
             comment={element.comment}
             like={element.like}
             blog_college_id={element.college_id}
             blogId={element.blogId}
             bloggerImage={element.bloggerImage}
             bloggerName={element.bloggerName}
             title={element.blogTitle}
             Contents={element.blogContent}
             image={element.blogImage}/>
             </>
           )
         })}    
            <div className="add">
            
                    <NavLink to={`/edit/${token}`} className="nlink"> 
                     
                      <button className="btn-success editButton"  >
                      Add
                      </button>
                   
                    </NavLink>
                         
              </div>      
             </div>
             
            </div>
        </>
  )
}

export default Profile