const express = require("express")
const app = express()
app.use(express.json())
const fs = require("fs")
const PORT = 3000

app.get("/",(req,res)=>{
    res.send("Welcome to Home Page")
})



app.get("/dishes",(req,res)=>{
    const data  =  JSON.parse(fs.readFileSync("./Problem3/db.json","utf-8"))
    const dishData = data.dishes
   res.status(200).json({msg:" All dishes retrieved successfully", dishData})
})


app.get("/dishes/:id",(req,res)=>{
    const id = Number(req.params.id)
    const data  =  JSON.parse(fs.readFileSync("./Problem3/db.json","utf-8"))
    const Alldishes = data.dishes
     const dish = Alldishes.find((el)=>el.id===id)
     if(!dish){
         return res.status(404).json({ msg: "dish not found" })
     }else{
         res.status(200).json({msg:"Dish retrieved successfully",dish})
     }
})




app.post("/dishes/add",(req,res)=>{
    let newDish = req.body
    const data  =  JSON.parse(fs.readFileSync("./Problem3/db.json","utf-8"))
    const Alldishes = data.dishes
    const exists = Alldishes.find((dish) => dish.id === req.body.id);
    if (exists) {
    return res.status(400).json({ msg: "dish with this ID already exists" });
    }
    const newId = Alldishes[Alldishes.length-1].id+1
    newDish = {...newDish,id:newId}
    Alldishes.push(newDish)
   fs.writeFileSync("./Problem3/db.json", JSON.stringify(data))
    res.status(201).json({msg:"dish added successfully"})
})



app.put("/dishes/update/:id",(req,res)=>{
      const id = Number(req.params.id)
    const data  =  JSON.parse(fs.readFileSync("./Problem3/db.json","utf-8"))
    const Alldishes = data.dishes
    const index = Alldishes.findIndex((dish)=>dish.id===id)
    if(index==-1){
       return res.status(404).json({msg:"dish not found"})
    }
    Alldishes[index] = { ...Alldishes[index], ...req.body };
     fs.writeFileSync("./Problem3/db.json",JSON.stringify(data))
    res.status(200).json({msg:"Dish updated successfuly"})
})
    


app.delete("/dishes/delete/:id",(req,res)=>{
       const id = Number(req.params.id)
    const data  =  JSON.parse(fs.readFileSync("./Problem3/db.json","utf-8"))
    const Alldishes = data.dishes
    const index = Alldishes.findIndex((dish)=>dish.id===id)
    if(index==-1){
        return res.status(404).json({msg:"dish not found"})
    }
    const filterdata = Alldishes.filter((el)=>el.id!=id)
    data.dishes = filterdata
    fs.writeFileSync("./Problem3/db.json",JSON.stringify(data))
    res.status(200).json({msg:"dish deleted successfully"})
})

app.use((req,res)=>{
    res.status(404).send("404 Not Found")
})






app.listen(PORT,(err)=>{
    if(err){
       return console.log("failed to start server:",err)
    }
    console.log(`server is running on port ${PORT}`)
})
