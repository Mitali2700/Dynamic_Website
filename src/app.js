// const { request, response } = require("express");
const express = require("express");
const hbs= require("hbs")
const app = express()
const mongoose = require("mongoose")

const routes=require('./routes/main')

app.use('/static',express.static("public"))
app.use('',routes)
//(template engines)
app.set('view engine','hbs')
app.set("views","views")

app.use('',routes)

// app.get("/",(request,response)=>{
//     response.send("Wow this is data from server");
// })

//db connections
mongoose.connect("mongodb://localhost/website_tut",()=>{
    console.log("db connected")
})

app.listen(process.env.PORT | 5555,()=>{
    console.log("server started")
})