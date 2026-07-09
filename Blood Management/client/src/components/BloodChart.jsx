import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(CategoryScale,LinearScale,BarElement)

function BloodChart(){

const data = {

labels:["A+","B+","O+","AB+"],

datasets:[
{
label:"Blood Units",
data:[10,15,8,5]
}
]

}

return(

<div style={{width:"400px"}}>

<Bar data={data}/>

</div>

)

}

export default BloodChart