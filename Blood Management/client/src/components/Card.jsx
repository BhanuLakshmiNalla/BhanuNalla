function Card({title,value}){

return(

<div style={{
background:"#fff",
padding:"20px",
borderRadius:"8px",
boxShadow:"0 0 10px rgba(0,0,0,0.2)",
width:"200px",
textAlign:"center"
}}>

<h3>{title}</h3>

<h2>{value}</h2>

</div>

)

}

export default Card