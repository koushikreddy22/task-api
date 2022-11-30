
const express = require("express")
const mongoose = require("mongoose")
require('./models/task.js')
const fileupload=require("express-fileupload")


const app=express()
const PORT= process.env.PORT || 4000
mongoose.connect("mongodb+srv://koushik:Mn1MrKr1L45@cluster0.3t8gajx.mongodb.net/?retryWrites=true&w=majority")
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})
mongoose.connection.on('error',(err)=>{
    console.log("error connecting",err)
})
app.use(fileupload({
    useTempFiles:true
}))
app.use(express.json())
app.use(require('./routes/task.js'))





app.listen(PORT,()=>{
    console.log("the server is running on",4000)
})