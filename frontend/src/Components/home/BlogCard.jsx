import React ,{useState}from 'react'
import "./BlogCard.css" 
import {NavLink}from "react-router-dom"   
import { useNavigate } from 'react-router'  
import axios from 'axios'
import { RWebShare } from "react-web-share";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
export default function BlogCard(props) {
  const navigate=useNavigate()
  const [likes,likeState]=useState(props.like)
  const  [content,contentState]=useState( props.Contents.substring(0,300))
  const feedbackPrerson=JSON.parse(localStorage.getItem("userinfo"))
  const like=async()=>{
      const  likeRes=await axios.post("/like",{
        blog_college_id:props.blog_college_id,
        user_college_id:feedbackPrerson.college_id,
        blogId:props.blogId,
         name:feedbackPrerson.name,
         image: feedbackPrerson.profile,
         college_id:feedbackPrerson.college_id
      })
    const bloggerblogs=likeRes.data.blogs
   const targetBlog= bloggerblogs.find((ele)=>ele.blogId==props.blogId)
   console.log(targetBlog)
    likeState(targetBlog.like)
  }
  const displayContent=()=>{
    contentState( props.Contents)
    document.getElementById(`DisplayMore${props.blogId}`).style.display="none"
    document.getElementById(`DisplayLess${props.blogId}`).style.display="block"

  }
 const readLess=()=>{
    contentState( props.Contents.substring(0,300))
    document.getElementById(`DisplayLess${props.blogId}`).style.display="none"
    document.getElementById(`DisplayMore${props.blogId}`).style.display="block"


 }

const readBlog=()=>{
  navigate(`/readblog/${props.blogId}/${props.blog_college_id}`)
}
  return (
    <>
       <div className="main">
    <div className="mainHolder" >
        <div className="bloggerDetail">
           <NavLink to={`/surfuser/${props.blog_college_id}`} className="bloggerDetail">
           <img src={props.bloggerImage} className="BloggerImag" alt=""/>
           <h3> {props.bloggerName}</h3>
           </NavLink>
       </div>
        <div className="mainContainer" style={{
          backgroundImage:`url(${props.image})`
        }} id="heading">
            
            <div className="aboutBlog">
                <div className="blogTitle" id="title">
                    <h1>{props.title} </h1>
                </div>
            </div>
          <div className="readBlog">
              <button onClick={readBlog}> Read BLog</button>
          </div>
         </div>
         <div className="feedback">
        <div className="feetBackData">
            <div className="likeData">
          <NavLink to={`/like/${props.blogId}/${props.blog_college_id}`} className="link" > {likes.length} likes</NavLink>
              </div>
          <div className="commentData"> 
          {props.comment.length} comments
      </div>
    </div>    
</div>
        <div className="feetback">
                                                                                   
<div className="feedBackControl">
<div className="loke">
<button className='LikeButton link' onClick={like}><FavoriteBorderIcon/></button>
</div>
<div className="comment" >
<NavLink  to={`/commentBox/${props.blogId}/${props.blog_college_id}`} className='link'><ChatBubbleIcon/></NavLink>   
</div>
<div className="share">
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
      </div>
   </div>
     </>
  )
}

