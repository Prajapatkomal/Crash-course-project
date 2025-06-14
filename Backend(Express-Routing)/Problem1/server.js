const express = require("express")
const app = express()

const PORT = 3000

app.get("/home",(req,res)=>{
res.send("Welcome to Home Page")
})

app.get("/aboutus",(req,res)=>{
res.status(200).json({msg:"Welcome to About Us"})
})

app.get("/contactus",(req,res)=>{
res.status(200).json({msg:"Welcome to contact us page"})
})

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});


app.listen(PORT,(err)=>{
    if(err){
    return console.log("Server failed to start:",err)
    }
    console.log(`server is running on port ${PORT}`)
})