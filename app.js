const express=require("express")
const app=express()
const PORT=5000
const mongoose=require("mongoose")
const{MONGOURI}=require("./keys")

require("./models/users")
//mongoose.model("User")
require("./models/post")

mongoose.connect(MONGOURI,()=>{
    useNewUrlParser:true;
    useUnifiedTopology: true;
})

mongoose.connection.on("connected",()=>{
    console.log("Connected Successfully to the database")
})

mongoose.connection.on("error",(err)=>{
    console.log("Error occured",err)
})

app.use(express.json())
app.use(require("./routes/auth"))
app.use(require("./routes/post"))

//app.use(customMiddelware)
app.listen(PORT,()=>{
    console.log("Server is upon port ",PORT)
})
