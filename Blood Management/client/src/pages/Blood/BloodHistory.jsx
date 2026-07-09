import { useEffect,useState } from "react";
import API from "../../api/axios";

function BloodHistory(){

const [history,setHistory] = useState([]);

useEffect(()=>{
loadHistory()
},[])

const loadHistory = async()=>{
const res = await API.get("/blood/history")
setHistory(res.data)
}

return(

<div style={{padding:"20px"}}>

<h2>Blood History</h2>

<ul>

{history.map((h,i)=>(
<li key={i}>
{h.type} - {h.bloodGroup} - {h.units} units
</li>
))}

</ul>

</div>

)

}

export default BloodHistory