const express = require("express")
const app = express()
app.use(express.json())
const fs = require("fs")
const PORT = 3000

app.get("/",(req,res)=>{
    res.send("Welcome to Home Page")
})



app.get("/books",(req,res)=>{
    const data  =  JSON.parse(fs.readFileSync("./Problem4/db.json","utf-8"))
    const bookData = data.books
   res.status(200).json({msg:"book data retrieved successfully", bookData})
})


app.get("/books/:id",(req,res)=>{
    const id = req.params.id
    const data  =  JSON.parse(fs.readFileSync("./Problem4/db.json","utf-8"))
    const Allbooks = data.books
     const book = Allbooks.find((el)=>el.id==id)
     if(!book){
         return res.status(404).json({ msg: "Book not found" })
     }else{
         res.status(200).json({msg:"book data retrieved successfully",book})
     }
})




app.post("/books/add",(req,res)=>{
    let newBooks = req.body
    const data  =  JSON.parse(fs.readFileSync("./Problem4/db.json","utf-8"))
    const Allbooks = data.books
    const exists = Allbooks.find((book) => book.id == req.body.id);
    if (exists) {
    return res.status(400).json({ msg: "Book with this ID already exists" });
    }
    const newId = Allbooks[Allbooks.length-1].id+1
    newBooks = {...newBooks,id:newId}
    Allbooks.push(newBooks)
   fs.writeFileSync("./Problem4/db.json", JSON.stringify(data))
  console.log(data)
    res.status(201).json({msg:"book added successfully"})
})



app.put("/books/update/:id",(req,res)=>{
    const id = req.params.id
    const data  =  JSON.parse(fs.readFileSync("./Problem4/db.json","utf-8"))
    const Allbooks = data.books
    const index = Allbooks.findIndex((book)=>book.id==id)
    if(index==-1){
       return res.status(404).json({msg:"book not found"})
    }
    Allbooks[index] = { ...Allbooks[index], ...req.body };
     fs.writeFileSync("./Problem4/db.json",JSON.stringify(data))
    res.status(200).json({msg:"book updated successfuly"})
})
    


app.delete("/books/delete/:id",(req,res)=>{
    const id = req.params.id
    const data  =  JSON.parse(fs.readFileSync("./Problem4/db.json","utf-8"))
    const Allbooks = data.books
    const index = Allbooks.findIndex((book)=>book.id==id)
    if(index==-1){
        return res.status(404).json({msg:"book not found"})
    }
    const filterdata = Allbooks.filter((el)=>el.id!=id)
    data.books = filterdata
    fs.writeFileSync("./Problem4/db.json",JSON.stringify(data))
    res.status(200).json({msg:"book deleted successfully"})
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
