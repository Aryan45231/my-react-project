import React from "react"
import { Route, Routes, useNavigate} from "react-router-dom"
import Login from "./Components/Login/Login";
import Home from "./Components/home/Home";
import Profile from "./Components/Profile/Profile";
import Edit from "./Components/edit/Edit";
import Signup from "./Components/Login/Sign-up";
import Aboutuser from "./Components/Login/Aboutuser";
import CommentBox from "./Components/home/Feedback/CommentBox";
import { Share } from "@material-ui/icons";
import About from "./Components/about/About";
import SurfUser from "./Components/SurfUser/SurfUser";
import Like from "./Components/home/Feedback/Like";
import Read from "./Components/ReadBlog/Read"
const App=()=>{
 return(
  <Routes>
   
        <Route exact path="/sign-up" element={<Signup/>}/>
      <Route  exact path="/" element={<Login/>}/>   
      <Route exact path="/home/:token" element={<Home/>}/>
      <Route exact path="/about/:token" element={<About/>}/>
     <Route exact path="/profile/:college_id/:token" element={<Profile/>}/>
     <Route exact path="/edit/:token" element={<Edit/>}/>
     <Route  path="/aboutuser" element={<Aboutuser/>}/>
     <Route path="/like/:blogId/:blog_college_id" element={<Like/>} />
     <Route exact path="/commentbox/:blogId/:blog_college_id"  element={<CommentBox/>} />
     <Route path="/shate/:college_id" element={<Share/>}/>
     <Route path="/surfuser/:college_id" element={<SurfUser/>}/>
     <Route path ="/readBlog/:blogId/:college_id" element={<Read/>} />
  </Routes>
 )

}

export default App;
