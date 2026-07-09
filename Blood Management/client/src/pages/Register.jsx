import { useState } from "react";
import API from "../api/axios";

function Register(){

const [user,setUser] = useState({
name:"",
email:"",
password:"",
phone:"",
address:"",
website:"",
role:"donor"
})

const handleChange = (e)=>{
setUser({...user,[e.target.name]:e.target.value})
}

const handleSubmit = async(e)=>{

e.preventDefault()

try{

const res = await API.post("/auth/register",user)

alert(res.data.message)

}catch(err){

alert("Registration Failed")

}

}

return(

<div style={{textAlign:"center",marginTop:"50px"}}>

<h2>Register</h2>

<form onSubmit={handleSubmit}>

<input name="name" placeholder="Name" onChange={handleChange}/>
<br/><br/>

<input name="email" placeholder="Email" onChange={handleChange}/>
<br/><br/>

<input type="password" name="password" placeholder="Password" onChange={handleChange}/>
<br/><br/>

<input name="phone" placeholder="Phone" onChange={handleChange}/>
<br/><br/>

<input name="address" placeholder="Address" onChange={handleChange}/>
<br/><br/>

<input name="website" placeholder="Website" onChange={handleChange}/>
<br/><br/>

<select name="role" onChange={handleChange}>

<option value="donor">Donor</option>

<option value="hospital">Hospital</option>

<option value="admin">Admin</option>

<option value="organization">Organization</option>

</select>

<br/><br/>

<button type="submit">Register</button>

</form>

</div>

)

}

export default Register