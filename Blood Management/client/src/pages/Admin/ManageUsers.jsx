import { useEffect,useState } from "react";
import API from "../../api/axios";

function ManageUsers(){

const [users,setUsers] = useState([])

useEffect(()=>{
loadUsers()
},[])

const loadUsers = async()=>{
const res = await API.get("/admin/users")
setUsers(res.data)
}

const deleteUser = async(id)=>{
await API.delete(`/admin/user/${id}`)
loadUsers()
}

return(

<div style={{padding:"20px"}}>

<h2>Manage Users</h2>

<ul>

{users.map(u=>(
<li key={u._id}>
{u.name} - {u.role}

<button onClick={()=>deleteUser(u._id)}>Delete</button>

</li>
))}

</ul>

</div>

)

}

export default ManageUsers