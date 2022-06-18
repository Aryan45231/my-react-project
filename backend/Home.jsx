import React,{useEffect} from 'react'
import Loader from '../loader/Loader';
import { useNavigate } from 'react-router';
import Navbar from '../Navbar/Navbar'
import BlogBanner from './BlogBanner';
import BlogCard from './BlogCard'
import Temp from '../Temp';
import useAuth from '../Hooks/useAuth';
function Home() {
  const auth=useAuth();
  const navigate=useNavigate();
  useEffect(()=>{
    auth?(navigate("/home")):(navigate("/sing-in")  )
  },[])
return (
    <>
     <Navbar/>
      <Loader/>
      <div className='Surffing' id='Surffing'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          
      </div>   
    </>

  )
}

export default Home