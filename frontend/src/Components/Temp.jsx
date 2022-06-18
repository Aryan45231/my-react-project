import React,{useState} from 'react'
import axios from "axios"
function Temp() {
  const [name,setname]=useState("");
  const [file,filestate]=useState()
  const sub=async(even)=>{
        console.log(file)
        const formdata=new FormData();
        formdata.append("name",name);
        formdata.append("testtemp",file)
        
          even.preventDefault()
        const res=await axios.post("/up",formdata)
        
         console.log(res.data)
        const img= document.getElementById("11")
        img.setAttribute("src",res.data.url)
  }
  return (
     <form action="" encType='multipart/form=data'>
         <input name="testtemp"type="file" accept='image/*'onChange={(e)=>{filestate(e.target.files[0])
        console.log(e.target.files[0])}} multiple={false} />
        <img src="." alt="not avalid" id="11" className="lager" />
        <input type="text" name='name' onChange={(e)=>{setname(e.target.value)}} />
         <button onClick={sub}>  submit</button>
     </form>
  )
}

export default Temp