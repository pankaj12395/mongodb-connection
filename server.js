const express=require("express")
const mongoose=require("mongoose")
const userModel = require('./model')

const DbUrl = "mongodb://pt789207_db_user:pinshu@ac-yeghgqk-shard-00-00.r8vqvbf.mongodb.net:27017,ac-yeghgqk-shard-00-01.r8vqvbf.mongodb.net:27017,ac-yeghgqk-shard-00-02.r8vqvbf.mongodb.net:27017/?ssl=true&replicaSet=atlas-z0qp5f-shard-0&authSource=admin&appName=Cluster0"
const connectDB= async() => {
    try{
    await mongoose.connect(DbUrl)
    console.log("mongodb connected")
    }
    catch(error){
        console.log("error in user",error)
    }
}

connectDB();

const app=express()
app.use(express.json())

console.log(userModel)

app.post('/create',async(req,res)=>{
    try{
    let {name,email,mobile}=req.body
    console.log('req is comming')
    console.log(req.body)
        let newUser= await userModel.create({
          name,
          email,
         mobile

})
return res.status(200).json({
    data:newUser,

})}
catch(error){
    console.log(error)
}
})



app.listen(3000,()=>{
    console.log('srevre running on port3000')
})
