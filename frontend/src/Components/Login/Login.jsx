import React  from 'react'
import {useState, useEffect} from "react"
import {useNavigate}from  "react-router-dom"
import Loader from '../loader/Loader';
import "./Login.css"

function Login(prop) {  
  const navigate=useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("userinfo")){
      const token=JSON.parse(localStorage.getItem("userinfo")).token
      navigate(`/home/${token}`)
    }
  },[] )
  const nav=()=>{
    navigate("/sign-up")
  }                                                                                                                                                                                   
  const [logindata, updated]=useState({  email:"", password:"" })
      const Login= async(e)=>{ 
        e.preventDefault();  
        document.getElementById("loader").style.display="block"
        const {email,password}=logindata; 
        const res=await fetch("/signin",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({email, password})
        }) 
      const data=await res.json();
      
       if(data.email){
         document.getElementById("loader").style.display="none"
        localStorage.setItem("userinfo",JSON.stringify(data))
          navigate(`/home/${data.token}`)
       }else{
        document.getElementById("loader").style.display="none"
          alert("not valid details") }
      }
  return (
    <>   
    <Loader/>
     <div className="cardholder">
          <div className=" custamcard">
              <div className="img">
                  <img className='blogImage' src={process.env.PUBLIC_URL+"login_images/poster.jpeg"} alt="not working" />
              </div>
              <div className="login" id='login'>
              <div className="title">
          <h1>Login</h1>
          <h5> Not having acount ? <button  onClick={nav} className='sign'> sign-up</button> </h5>
          </div>
           <form method="POST" className='login-form'>
             <input type="text"  required mane='email' onChange={(event)=>updated({ ...logindata,email:event.target.value})} placeholder='Email'  />
             <input type="password" required name='password' onChange={(event)=>updated({...logindata,password:event.target.value})} placeholder='Password'  />
             <button onClick={Login} className="btn-success login-button">
                Login
             </button>
             <a href="#" className='link forget'> forget Password</a>
           </form>
              </div>
          </div>
        </div>
    </>
  )
}

export default Login