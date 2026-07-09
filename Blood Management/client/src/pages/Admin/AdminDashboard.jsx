import { useEffect,useState } from "react";
import API from "../../api/axios";

function AdminDashboard(){

const [stats,setStats] = useState({})

useEffect(()=>{
loadStats()
},[])

const loadStats = async()=>{
const res = await API.get("/admin/stats")
setStats(res.data)
}

return(

<div style={{padding:"20px"}}>

<h2>Admin Dashboard</h2>

<p>Total Donors: {stats.donors}</p>
<p>Total Hospitals: {stats.hospitals}</p>
<p>Total Blood Units: {stats.units}</p>

</div>

)

}

export default AdminDashboard