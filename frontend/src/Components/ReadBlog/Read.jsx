import axios from 'axios'
import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { RWebShare } from "react-web-share";
import Navbar from '../Navbar/Navbar'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import "./Read.css"
function Read() {
  useEffect(()=>{
    Blog()
  },[])
  const params=useParams()
  const [targetblog,blogState]=useState({
    college_id:"",  blogId:"", like:[] , comment :[]
  })
  const Blog=async()=>{
    const blog=  await axios.get(`/targetBlog/${params.blogId}/${params.college_id}`)
    blogState(blog.data.blog)
} 
console.log(targetblog.college_id)
  const [likes,likeState]=useState(targetblog.like)
  const feedbackPrerson=JSON.parse(localStorage.getItem("userinfo"))
  const like=async()=>{
      const  likeRes=await axios.post("/like",{
        blog_college_id:targetblog.college_id,
        user_college_id:feedbackPrerson.college_id,
        blogId:targetblog.blogId,
         name:feedbackPrerson.name,
         image: feedbackPrerson.profile,
         college_id:feedbackPrerson.college_id
      })
    const bloggerblogs=likeRes.data.blogs
   const targetBlog= bloggerblogs.find((ele)=>ele.blogId==targetblog.blogId)
   console.log(targetBlog)
    likeState(targetBlog.like)
  }
console.log(likes)
  return (
     <>
     <Navbar/>

     <div className="ReadingBLogContainer">
     <div className="bloggerDetail">
           <NavLink to={`/surfuser/${targetblog.college_id}`} className="bloggerDetail">
           <img src={targetblog.bloggerImage} className="BloggerImag" alt=""/>
           <h3> {targetblog.bloggerName}</h3>
           </NavLink>
       </div>
      <div className="BLogTItle">
           <h1>
          <u> {targetblog.blogTitle}</u>
           </h1>
      </div>
      <div className="blogImage">
          <img src={targetblog.blogImage} alt=""/>
      </div> 
      <dib className="blogContent">
          <pre>
            <div className="contentOfBlog">
            {targetblog.blogContent}
            </div>
          </pre>
      </dib>
      <div className="feetback">
        <div className="feetbackData">
            <NavLink to={`/like/${targetblog.blogId}/${targetblog.college_id}`} className="link"><h5> {likes.length} likes</h5></NavLink>
            <h5> {targetblog.comment.length} Comments</h5>
        </div>
      </div>
      <div className="feetback">
        <div className="feetbackControl">
              <button className='LikeButton link' onClick={like}><FavoriteBorderIcon/></button>
              <NavLink  to={`/commentBox/${targetblog.blogId}/${targetblog .college_id}`} className='link'><ChatBubbleIcon/></NavLink>   
              <RWebShare 
                    data={{
                    text: "Web Share - GfG",
                    url: "https://www.geeksforgeeks.org/how-to-activate-web-share-using-react-web-share-in-reactjs/",
                    title: "GfG",
                    }} >
        <button className='ShareButton link'> <ShareIcon/></button>
    </RWebShare>
        </div>
      </div>
  </div>
     </>
  )
}

export default Read