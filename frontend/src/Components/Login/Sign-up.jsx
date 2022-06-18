import React,{useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom"
import Loader from '../loader/Loader';
import "./Login.css"
export default function Signup() {
  const navigate=useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("userinfo")){
      const token=JSON.parse(localStorage.getItem("userinfo")).token
      navigate(`/home/${token}`)
    }
  },[] )
  const nav=()=>{
    navigate("/")
  }  
    const [userData,  userDataState]=useState({
        name:"", email:"", college_id:"",password:"", confirm_password:""
      })
       const RegisterUser=async(e)=>{
                e.preventDefault();
               try{
                document.getElementById("loader").style.display="block"
                const {name,email,college_id,password, confirm_password}=userData;
                 if(password==confirm_password){
                    const res=await fetch("/signup",{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify({ name,email,college_id,password })
                    })
                   const data =await res.json()
                   console.log(data)
                   if(data.err){
                     alert(data.err)
                   }
                   if(data.email!=undefined){
                    document.getElementById("loader").style.display="none"
                    localStorage.setItem("userinfo",JSON.stringify(data))
                   navigate("/aboutuser")
                  }
                 }else{
                  document.getElementById("loader").style.display="none"
                     alert("password and confirm password does not natck")
                 }     
               }catch(err){
                   console.log(err)
                   alert(err)
               }
       }    
  return (
     <>
     <Loader/>
       <div className="cardholder">
          <div className=" custamcard">
              <div className="img">
                  <img src={process.env.PUBLIC_URL+"login_images/poster.jpeg"} alt="not working" />
              </div>
              <div className="login" id='login'>                                                
       <div className="title">
          <h1>Register</h1>
          <h5> Already having acount ? <button onClick={nav} className='sign'>Log-in</button> </h5>
          </div>
           <form method="POST"className='login-form'>
             <input type="text"required mane='Name' onChange={(event)=>userDataState({ ...userData,name:event.target.value})} placeholder='Name'  />
             <input type="email" required name='email' onChange={(event)=>userDataState({...userData,email:event.target.value})} placeholder='Email' />
             <input type="Number" required mane='college id' onChange={(event)=>userDataState({ ...userData,college_id:event.target.value})} placeholder='College Id'  />
             <input type="password" required name='password' onChange={(event)=>userDataState({...userData,password:event.target.value})} placeholder='Password' />
             <input type="password" required mane='confirm_password' onChange={(event)=>userDataState({ ...userData,confirm_password:event.target.value})} placeholder='ConfirmPassword'  />
               <button type="submit" className="btn-success login-button" onClick={RegisterUser}>
                Register
             </button>
            
           </form>
    
              </div>
          </div>
        </div>
       
     </>
  )
}
