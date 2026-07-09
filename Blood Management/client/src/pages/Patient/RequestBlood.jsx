import { useState } from "react";
import API from "../../api/axios";

function RequestBlood(){

const [data,setData] = useState({
bloodGroup:"",
quantity:"",
hospital:"",
patientName:""
})

const handleChange=(e)=>{
setData({...data,[e.target.name]:e.target.value})
}

const handleSubmit=async(e)=>{

e.preventDefault()

await API.post("/blood/request",data)

alert("Request Sent")

}

return(

<div style={{padding:"20px"}}>

<h2>Request Blood</h2>

<form onSubmit={handleSubmit}>

<input name="bloodGroup" placeholder="Blood Group" onChange={handleChange}/>
<br/><br/>

<input name="quantity" placeholder="Units" onChange={handleChange}/>
<br/><br/>

<input name="hospital" placeholder="Hospital" onChange={handleChange}/>
<br/><br/>

<input name="patientName" placeholder="Patient Name" onChange={handleChange}/>
<br/><br/>

<button type="submit">Request</button>

</form>

</div>

)

}

export default RequestBlood