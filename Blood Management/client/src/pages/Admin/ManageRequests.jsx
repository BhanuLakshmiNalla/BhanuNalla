import { useEffect,useState } from "react";
import API from "../../api/axios";

function ManageRequests(){

const [requests,setRequests] = useState([])

useEffect(()=>{
loadRequests()
},[])

const loadRequests = async()=>{
const res = await API.get("/admin/requests")
setRequests(res.data)
}

const approve = async(id)=>{
await API.put(`/admin/request/approve/${id}`)
loadRequests()
}

const reject = async(id)=>{
await API.put(`/admin/request/reject/${id}`)
loadRequests()
}

return(

<div style={{padding:"20px"}}>

<h2>Blood Requests</h2>

<ul>

{requests.map(r=>(
<li key={r._id}>
{r.patientName} needs {r.bloodGroup}

<button onClick={()=>approve(r._id)}>Approve</button>

<button onClick={()=>reject(r._id)}>Reject</button>

</li>
))}

</ul>

</div>

)

}

export default ManageRequests