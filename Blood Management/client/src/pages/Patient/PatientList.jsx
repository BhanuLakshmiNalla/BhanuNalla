import { useEffect,useState } from "react";
import API from "../../api/axios";

function PatientList(){

const [patients,setPatients] = useState([]);

useEffect(()=>{
fetchPatients()
},[])

const fetchPatients = async()=>{
const res = await API.get("/patients")
setPatients(res.data)
}

return(

<div style={{padding:"20px"}}>

<h2>Patients</h2>

<table border="1" width="100%">

<thead>

<tr>
<th>Name</th>
<th>Blood Group</th>
<th>Hospital</th>
<th>Contact</th>
</tr>

</thead>

<tbody>

{patients.map((p,i)=>(
<tr key={i}>
<td>{p.name}</td>
<td>{p.bloodGroup}</td>
<td>{p.hospital}</td>
<td>{p.phone}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

export default PatientList