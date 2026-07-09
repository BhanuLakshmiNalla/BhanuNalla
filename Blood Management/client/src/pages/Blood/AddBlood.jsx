import { useState } from "react";
import API from "../../api/axios";

function AddBlood(){

const [blood,setBlood] = useState({
group:"",
units:"",
donor:""
})

const handleChange=(e)=>{
setBlood({...blood,[e.target.name]:e.target.value})
}

const handleSubmit=async(e)=>{

e.preventDefault()

await API.post("/blood/add",blood)

alert("Blood Added")

}

return(

<div style={{padding:"20px"}}>

<h2>Add Blood</h2>

<form onSubmit={handleSubmit}>

<input name="group" placeholder="Blood Group" onChange={handleChange}/>
<br/><br/>

<input name="units" placeholder="Units" onChange={handleChange}/>
<br/><br/>

<input name="donor" placeholder="Donor" onChange={handleChange}/>
<br/><br/>

<button type="submit">Add</button>

</form>

</div>

)

}

export default AddBlood