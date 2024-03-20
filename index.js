console.log("chai aur code");
require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram' , (req,res)=>{
    res.send("Aryan Shrivastav")
} )

app.get('/login' , (req , res)=>{
    res.send("<h1>Plz Teach me backend code faster</h1>")
})
app.get('/youtube' , (req , res)=>{
    res.send("<h1>subscribe to chai aur code</h1>");
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listen on port${process.env.PORT}`);
})


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })