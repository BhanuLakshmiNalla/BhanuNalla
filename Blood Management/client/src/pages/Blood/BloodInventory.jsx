import { useEffect,useState } from "react";
import API from "../../api/axios";

function BloodInventory(){

const [blood,setBlood] = useState([]);

useEffect(()=>{
loadInventory()
},[])

const loadInventory = async()=>{
const res = await API.get("/blood/inventory")
setBlood(res.data)
}

return(

<div style={{padding:"20px"}}>

<h2>Blood Inventory</h2>

<table border="1" width="100%">

<thead>

<tr>
<th>Blood Group</th>
<th>Units</th>
</tr>

</thead>

<tbody>

{blood.map((b,i)=>(
<tr key={i}>
<td>{b.group}</td>
<td>{b.units}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

export default BloodInventory