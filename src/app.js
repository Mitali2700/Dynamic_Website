// const { request, response } = require("express");
const express = require("express");
const hbs= require("hbs")
const app = express()

const routes=require('./routes/main')

//(template engines)
app.set('view engine','hbs')
app.set("views","views")

app.use('',routes)

// app.get("/",(request,response)=>{
//     response.send("Wow this is data from server");
// })

app.listen(process.env.PORT | 5555,()=>{
    console.log("server started")
})