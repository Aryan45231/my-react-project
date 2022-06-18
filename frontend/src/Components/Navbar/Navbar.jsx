import React from "react"
import {useNavigate} from "react-router"
import {NavLink} from "react-router-dom"
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import "./navbar.css"
const Navbar=()=>{
  const navigate=useNavigate()
 
  const user=JSON.parse(localStorage.getItem("userinfo"))
        return(
            <>
              <div className="nav">
               
                          <NavLink className="nlink brand" to={`/home/${user.token}`}>
                            <h3>College Blogging</h3>
                          </NavLink>  
                  <div className="menu">
                  <NavLink className="nlink phoneScreen" to={`/home/${user.token}`}>
                            <HomeIcon/>
                          </NavLink>  
                        <NavLink className="nlink" to={`/edit/${user.token}`}>
                        <EditIcon/>
                        </NavLink>
                        <NavLink className="nlink" to={`/about/${user.token}`}>
                             <InfoIcon/>
                        </NavLink>
                        <NavLink className="nlink" to={`/profile/${user.college_id}/${user.token}`}>
                              <img src={user.profile} className="userProfile" alt="no profile" />
                        </NavLink>
                       

                  </div>
              </div>
            </>
        )
}
export default Navbar