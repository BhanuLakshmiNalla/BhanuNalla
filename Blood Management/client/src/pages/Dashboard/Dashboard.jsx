import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Card from "../../components/Card";
import BloodChart from "../../components/BloodChart";

function Dashboard(){

return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={{flex:1}}>

<Header/>

<div style={{
display:"flex",
gap:"20px",
padding:"20px"
}}>

<Card title="Total Donors" value="50"/>

<Card title="Total Patients" value="30"/>

<Card title="Blood Stock" value="120"/>

<Card title="Requests" value="12"/>

</div>

<div style={{padding:"20px"}}>

<BloodChart/>

</div>

</div>

</div>

)

}

export default Dashboard