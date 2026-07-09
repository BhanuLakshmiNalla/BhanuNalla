import { Link } from "react-router-dom";

function Home(){

return(

<div style={{textAlign:"center",marginTop:"100px"}}>

<h1 style={{color:"#d32f2f"}}>Blood Bank Management System</h1>

<h3>Donate Blood Save Lives</h3>

<p>Your small donation can save someone's life</p>

<img
src="https://cdn-icons-png.flaticon.com/512/2069/2069843.png"
width="200"
/>

<br/><br/>

<Link to="/register">
<button style={{
padding:"10px 20px",
background:"#d32f2f",
color:"white",
border:"none",
cursor:"pointer"
}}>
Register as Donor
</button>
</Link>

</div>

)

}

export default Home