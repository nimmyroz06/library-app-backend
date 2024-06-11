const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const library=require("/models/library")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("library app")
})

app.post("/view",(req,res)=>{
    res.send("view books")
})

app.listen(8080,()=>{
    console.log("server started")
})