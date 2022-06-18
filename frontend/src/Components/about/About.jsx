import React from 'react'
import "./About.css"
import Navbar from '../Navbar/Navbar';
function About(){
    return(
        <>
        <Navbar/>
        <div className="container">
        <h1 className='ourTeam'>Our Team Members </h1>
        <div className="Cards">
         
            <div className="card">
                <img src={process.env.PUBLIC_URL+"/Teams/Adarsh.jpg"} alt="Adarsh" />
                <h5>Adarsh Kesarwani</h5>
                <h5>I.d: 97200023</h5>
                <h5>U.I.M (F.U.G.S)</h5>
                <h6>BCA 2nd Year</h6>

            </div>
            <div className="card">
                <img src={process.env.PUBLIC_URL+"/Teams/Aryan2.jpeg"} alt="Aryan" />
                <h5>Aryan Jaiswal</h5>
                <h5>I.d: 97200028</h5>
                <h5>U.I.M (F.U.G.S)</h5>
                <h6>BCA 2nd Year</h6>

            </div>
            <div className="card">
                <img src={process.env.PUBLIC_URL+"/Teams/Avinash.jpeg"} alt="Avinash" />
                <h5>Name:Avinash Saini</h5>
                <h5>I.d: 97200024</h5>
                <h5>U.I.M (F.U.G.S)</h5>
                <h6>BCA 2nd Year</h6>
            </div>

        </div>
        </div>
       

        </>
    )
}

export default About;