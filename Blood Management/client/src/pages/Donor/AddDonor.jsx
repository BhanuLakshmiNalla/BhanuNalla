import { useState } from "react";
import API from "../../api/axios";

function AddDonor(){

const [donor,setDonor] = useState({
name:"",
bloodGroup:"",
phone:"",
address:""
});

const handleChange=(e)=>{
setDonor({...donor,[e.target.name]:e.target.value})
}

const handleSubmit = async(e)=>{
e.preventDefault()

await API.post("/donor/add",donor)

alert("Donor Added")
}

return(

<div style={{padding:"20px"}}>

<h2>Add Donor</h2>

<form onSubmit={handleSubmit}>

<input name="name" placeholder="Name" onChange={handleChange}/>
<br/><br/>

<input name="bloodGroup" placeholder="Blood Group"/>
<br/><br/>

<input name="phone" placeholder="Phone" onChange={handleChange}/>
<br/><br/>

<input name="address" placeholder="Address" onChange={handleChange}/>
<br/><br/>

<button type="submit">Add Donor</button>

</form>

</div>

)

}

export default AddDonor;