import { useState } from "react";
import API from "../../api/axios";

function AddPatient(){

const [patient,setPatient] = useState({
name:"",
bloodGroup:"",
hospital:"",
phone:""
})

const handleChange=(e)=>{
setPatient({...patient,[e.target.name]:e.target.value})
}

const handleSubmit=async(e)=>{

e.preventDefault()

await API.post("/patient/add",patient)

alert("Patient Added")

}

return(

<div style={{padding:"20px"}}>

<h2>Add Patient</h2>

<form onSubmit={handleSubmit}>

<input name="name" placeholder="Name" onChange={handleChange}/>
<br/><br/>

<input name="bloodGroup" placeholder="Blood Group" onChange={handleChange}/>
<br/><br/>

<input name="hospital" placeholder="Hospital" onChange={handleChange}/>
<br/><br/>

<input name="phone" placeholder="Phone" onChange={handleChange}/>
<br/><br/>

<button type="submit">Add Patient</button>

</form>

</div>

)

}

export default AddPatient