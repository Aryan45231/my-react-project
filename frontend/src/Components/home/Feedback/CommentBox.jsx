import React from 'react'
import { useState ,useEffect} from 'react'
import "./CommentBox.css"
import axios from "axios"
import {useNavigate} from "react-router"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import { NavLink } from 'react-router-dom'
import { Navigate, useParams } from 'react-router'
const CommentBox = (props)=>{ 
useEffect(()=>{
      data()
},[])
const navigate=useNavigate()
const back=()=>{
  navigate(-1)
}
const params=useParams();
useEffect(()=>{
  data()
},[])
const [privComment,privState]=useState([])
  const [comments,commentState]=useState("")
  const feedbackPrerson=JSON.parse(localStorage.getItem("userinfo"))
  const data=async()=>{
    const priviousComments=await axios.get(`/comment/${params.blog_college_id}/${params.blogId}`)
        privState(priviousComments.data.comments)
  }
 const comment=async()=>{
  if(comments!=""){
    const commmentRes=await axios.post("/comment",{
      blog_college_id:params.blog_college_id,
      user_college_id:feedbackPrerson.college_id,
      blogId:params.blogId, 
      name:feedbackPrerson.name,
      image: feedbackPrerson.profile,
      college_id:feedbackPrerson.college_id,
      comment:comments
      })  
      const blogs=commmentRes.data.blogs
      const targetBlog=blogs.find((ele=>ele.blogId==params.blogId))  
      const targetComment=targetBlog.comment
      privState([...targetComment, privComment])
  }

  }
  return (
    <>  
      <button  onClick={back}>
        <ArrowBackIcon 
        sx={{fontSize:"50px"
      , backgroundColor:"white",
    border:"0px"}}
        className="back"/>
      </button>
    <div className="commentBox">
      <h1> Comments</h1>
           <div className="comments">
             {
               privComment.map((ele)=>{
                 console.log(ele)
                 return(
                   <>
                     <div className="priviousComments" id='priviousComment' >
                   <NavLink to={`/surfuser/${ele.collgege_id}`}className="link blogerDetail com">
                       <img src={ele.image} alt="" className="commentPeopleIamage" />
                       <h3> {ele.name}</h3>
                   </NavLink>
                <div className="theComment">
                   {ele.comment}
                </div>
               </div>
                   </>
                 )
               })
             }
           </div>
           <div className="commentInput">
               <input type="text" onChange={(e)=>{commentState(e.target.value)}} className="commentInput" id='comment' placeholder='Comment' />
                <div className="postbutton">
                <button type="submit" className=" btn-success postComment " onClick={comment}> <SendIcon/> </button>
                </div>
           </div>
    </div>
    </>
  )
}
export default CommentBox