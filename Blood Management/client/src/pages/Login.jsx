import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

function Login(){

const navigate = useNavigate()

const [data,setData] = useState({
email:"",
password:"",
role:"donor"
})

const handleChange = (e)=>{
setData({...data,[e.target.name]:e.target.value})
}

const handleSubmit = async(e)=>{

e.preventDefault()

try{

const res = await API.post("/auth/login",data)

alert(res.data.message)

navigate("/dashboard")

}catch(err){

alert("Login Failed")

}

}

return(

<div style={{textAlign:"center",marginTop:"80px"}}>

<h2>Login</h2>

<form onSubmit={handleSubmit}>

<input
name="email"
placeholder="Email"
onChange={handleChange}
/>

<br/><br/>

<input
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
/>

<br/><br/>

<select name="role" onChange={handleChange}>

<option value="donor">Donor</option>

<option value="hospital">Hospital</option>

<option value="admin">Admin</option>

<option value="organization">Organization</option>

</select>

<br/><br/>

<button type="submit">Login</button>

</form>

</div>

)

}

export default Login