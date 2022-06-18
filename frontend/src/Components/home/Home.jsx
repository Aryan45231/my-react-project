import React,{useEffect,useState} from 'react'
import Loader from '../loader/Loader';
import Navbar from '../Navbar/Navbar'
import BlogCard from './BlogCard'
import Temp from '../Temp';
import axios from 'axios';  
const Home=()=>{
  const [arrayfoblogs,blogState]=useState([])
  const getingBlogs=async()=>{
    const temp=[]
    const token=JSON.parse(localStorage.getItem("userinfo")).token
  const blogdata=await axios.get(`/blogs/${token}`)
  const blogArray=blogdata.data.blogs;
  blogArray.forEach((element,index,arrau)=>{
    const arr=element.blog
     arr.map((ele)=>{temp.unshift(ele) })
    }) 
  if(arrayfoblogs.length==0){
    const dt=temp
    temp.sort((a,b)=>b.time-a.time)
    blogState([...dt])  
  }
  }
  getingBlogs()  
 return (
    <>
     <Navbar/>
      <Loader/>
      <div className='Surffing' id='surrfing'> 
         {arrayfoblogs.map((element,index)=>{
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
    </>

  )
}

export default Home