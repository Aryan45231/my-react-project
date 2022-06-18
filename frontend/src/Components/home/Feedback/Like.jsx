import React ,{useEffect,useState} from 'react'
import "./Like.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {NavLink} from "react-router-dom"
import { useNavigate } from 'react-router'
import {useParams} from "react-router"
import axios from "axios"
export default function Like(props) {
  useEffect(()=>{
    likespeople()
  }
  ,[])
  const navigate=useNavigate()
const back=()=>{
  navigate(-1)
}
  const [likepep,likeState]=useState([])
  const params=useParams()
   const likespeople=async()=>{
    const likes=await axios.get(`/like/${params.blog_college_id}/${params.blogId}`)
    likeState(likes.data.like)
   }
   console.log(likepep)

  return (
     <>
      <button  onClick={back}>
        <ArrowBackIcon 
        sx={{fontSize:"50px"}}
        className="back"/>
      </button>
     <h1 className='likeHead'> LIkes</h1>
     <div className="likeContainer">
     <div className="likepeps">
      { 
        likepep.map((ele)=>{
              return(
                <NavLink to={`/surfuser/${ele.collgege_id}`} className="link blogerDetail lik "> 
                       <div className="likeContainer" id='likeContainer'>
                <div className="likepeople">
                <img src={ele.image}  className="likeProfike" alt="" />
                  <h2> {ele.name}</h2>
                </div>
              </div>
               </NavLink>  
              
              )
        })
      }
      </div>
     </div>
     </>
  )
}
