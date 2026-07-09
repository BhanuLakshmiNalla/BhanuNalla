const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcryptjs")

const app = express()

app.use(cors())
app.use(express.json())

/* ---------------- DATABASE CONNECTION ---------------- */

mongoose.connect("mongodb://127.0.0.1:27017/bloodbank")
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err))


/* ---------------- SCHEMAS ---------------- */

const userSchema = new mongoose.Schema({
name:String,
email:{type:String,unique:true},
password:String,
phone:String,
address:String,
role:String
})

const donationSchema = new mongoose.Schema({
donorName:String,
disease:String,
age:Number,
bloodGroup:String,
units:Number,
date:{type:Date,default:Date.now},
status:{type:String,default:"Pending"}
})

const requestSchema = new mongoose.Schema({
patientName:String,
age:Number,
reason:String,
bloodGroup:String,
units:Number,
date:{type:Date,default:Date.now},
status:{type:String,default:"Pending"}
})

const inventorySchema = new mongoose.Schema({
bloodGroup:String,
type:String,
quantity:Number,
email:String,
date:{type:Date,default:Date.now}
})

/* ---------------- MODELS ---------------- */

const User = mongoose.model("User",userSchema)
const Donation = mongoose.model("Donation",donationSchema)
const Request = mongoose.model("Request",requestSchema)
const Inventory = mongoose.model("Inventory",inventorySchema)


/* ---------------- AUTH APIs ---------------- */

/* Register */

app.post("/api/auth/register", async(req,res)=>{

try{

const {name,email,password,phone,address,role} = req.body

const exist = await User.findOne({email})

if(exist)
return res.json({message:"User already exists"})

const hash = await bcrypt.hash(password,10)

const user = new User({
name,
email,
password:hash,
phone,
address,
role
})

await user.save()

res.json({
success:true,
message:"User Registered Successfully"
})

}catch(err){

res.status(500).json(err)

}

})



/* Login */

app.post("/api/auth/login", async(req,res)=>{

try{

const {email,password} = req.body

const user = await User.findOne({email})

if(!user)
return res.json({message:"User Not Found"})

const match = await bcrypt.compare(password,user.password)

if(!match)
return res.json({message:"Invalid Password"})

res.json({
success:true,
message:"Login Successful",
user
})

}catch(err){

res.status(500).json(err)

}

})



/* ---------------- DONATION APIs ---------------- */

/* Add Donation */

app.post("/api/donation/add", async(req,res)=>{

try{

const donation = new Donation(req.body)

await donation.save()

res.json({message:"Donation Added"})

}catch(err){

res.status(500).json(err)

}

})



/* Get All Donations */

app.get("/api/donation/list", async(req,res)=>{

try{

const data = await Donation.find()

res.json(data)

}catch(err){

res.status(500).json(err)

}

})



/* Approve Donation */

app.put("/api/donation/approve/:id", async(req,res)=>{

try{

await Donation.findByIdAndUpdate(req.params.id,{status:"Approved"})

res.json({message:"Donation Approved"})

}catch(err){

res.status(500).json(err)

}

})



/* Reject Donation */

app.put("/api/donation/reject/:id", async(req,res)=>{

try{

await Donation.findByIdAndUpdate(req.params.id,{status:"Rejected"})

res.json({message:"Donation Rejected"})

}catch(err){

res.status(500).json(err)

}

})



/* ---------------- BLOOD REQUEST APIs ---------------- */

/* Create Request */

app.post("/api/request/create", async(req,res)=>{

try{

const request = new Request(req.body)

await request.save()

res.json({message:"Blood Request Created"})

}catch(err){

res.status(500).json(err)

}

})



/* Get Requests */

app.get("/api/request/list", async(req,res)=>{

try{

const data = await Request.find()

res.json(data)

}catch(err){

res.status(500).json(err)

}

})



/* Approve Request */

app.put("/api/request/approve/:id", async(req,res)=>{

try{

await Request.findByIdAndUpdate(req.params.id,{status:"Approved"})

res.json({message:"Request Approved"})

}catch(err){

res.status(500).json(err)

}

})



/* Reject Request */

app.put("/api/request/reject/:id", async(req,res)=>{

try{

await Request.findByIdAndUpdate(req.params.id,{status:"Rejected"})

res.json({message:"Request Rejected"})

}catch(err){

res.status(500).json(err)

}

})



/* ---------------- INVENTORY APIs ---------------- */

/* Add Blood Stock */

app.post("/api/inventory/add", async(req,res)=>{

try{

const inventory = new Inventory(req.body)

await inventory.save()

res.json({message:"Inventory Added"})

}catch(err){

res.status(500).json(err)

}

})



/* Get Inventory */

app.get("/api/inventory", async(req,res)=>{

try{

const data = await Inventory.find()

res.json(data)

}catch(err){

res.status(500).json(err)

}

})



/* ---------------- BLOOD HISTORY ---------------- */

app.get("/api/blood/history", async(req,res)=>{

try{

const donations = await Donation.find()

const requests = await Request.find()

res.json({
donations,
requests
})

}catch(err){

res.status(500).json(err)

}

})



/* ---------------- BLOOD REQUEST FROM FRONTEND ---------------- */

app.post("/api/blood/request", async(req,res)=>{

try{

const {patientName,bloodGroup,quantity,hospital} = req.body

const request = new Request({
patientName,
bloodGroup,
units:quantity,
reason:hospital
})

await request.save()

res.json({message:"Blood Request Submitted"})

}catch(err){

res.status(500).json(err)

}

})



/* ---------------- DASHBOARD APIs ---------------- */

app.get("/api/dashboard", async(req,res)=>{

try{

const donors = await Donation.countDocuments()

const requests = await Request.countDocuments()

const approved = await Request.countDocuments({status:"Approved"})

const inventory = await Inventory.aggregate([
{
$group:{
_id:null,
total:{$sum:"$quantity"}
}
}
])

res.json({

totalDonors:donors,
totalRequests:requests,
approvedRequests:approved,
totalBloodUnits:inventory.length ? inventory[0].total : 0

})

}catch(err){

res.status(500).json(err)

}

})



/* ---------------- SERVER ---------------- */

app.listen(5000, ()=>{

console.log("Server running on port 5000")

})