import { useEffect, useState } from "react";
import API from "../../api/axios";

function DonorList(){

const [donors,setDonors] = useState([]);

useEffect(()=>{
fetchDonors();
},[]);

const fetchDonors = async()=>{
const res = await API.get("/donors");
setDonors(res.data);
}

return(

<div style={{padding:"20px"}}>

<h2>Donor List</h2>

<table border="1" width="100%">

<thead>
<tr>
<th>Name</th>
<th>Blood Group</th>
<th>Contact</th>
<th>Address</th>
</tr>
</thead>

<tbody>

{donors.map((d,i)=>(
<tr key={i}>
<td>{d.name}</td>
<td>{d.bloodGroup}</td>
<td>{d.phone}</td>
<td>{d.address}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

export default DonorList;