import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import BlogCard from '../home/BlogCard';
import Navbar from '../Navbar/Navbar';
import "./SurfUser.css"
export default function SurfUser() {
    const  params=useParams()
    useEffect(()=>{
     fetch()
    },[])
    const [userdata,userState]=useState({
        name:"al",blog:[]
    })
    const fetch= async()=>{
       const user=await axios.get(`/user/${params.college_id}`)
       localStorage.setItem("blogger",JSON.stringify(user.data.user))
       console.log(user.data.user)
         userState((e)=>
         e=user.data.user)
      }
  const blogarray=userdata.blog;
   console.log(blogarray)
  return (  
    <>
    <Navbar/>
    <div className="usercont">
      <div className="profilie_id">
          <img src={userdata.url} alt="" className='userProfileImage' />
          <p>
          <h3> {userdata.name} </h3>
          <h5> {userdata.bio}</h5>
          </p>
         
      </div>
      <div className="blogs">
      {blogarray.map((element,index)=>{
           return(
             <>
             <BlogCard 
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
      </div>
    </div>
    </>
  )
}
