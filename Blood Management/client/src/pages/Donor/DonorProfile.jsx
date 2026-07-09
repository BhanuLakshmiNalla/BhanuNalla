import { useEffect,useState } from "react";
import API from "../../api/axios";

function DonorProfile(){

const [donor,setDonor] = useState(null)

useEffect(()=>{
loadDonor()
},[])

const loadDonor = async()=>{
const res = await API.get("/donor/profile")
setDonor(res.data)
}

if(!donor) return <h3>Loading...</h3>

return(

<div style={{padding:"20px"}}>

<h2>Donor Profile</h2>

<p>Name: {donor.name}</p>
<p>Blood Group: {donor.bloodGroup}</p>
<p>Phone: {donor.phone}</p>
<p>Address: {donor.address}</p>

<h3>Donation History</h3>

<ul>

{donor.history?.map((h,i)=>(
<li key={i}>{h.date} - {h.units} units</li>
))}

</ul>

</div>

)

}

export default DonorProfile;