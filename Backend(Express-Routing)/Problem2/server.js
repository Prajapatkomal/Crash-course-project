const express = require("express")
const app = express()

const PORT = 3000

app.get("/",(req,res)=>{
res.send("Welcome to Home Page")
})

app.get("/users/get",(req,res)=>{
res.status(200).json({ "id": 1, "name": "John Doe", "email": "john@example.com" })
})

app.get("/users/list",(req,res)=>{
res.status(200).json([
  { "id": 1, "name": "John Doe", "email": "john@example.com" },
  { "id": 2, "name": "Jane Doe", "email": "jane@example.com" },
  { "id": 3, "name": "Bob Smith", "email": "bob@example.com" }
]
)
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