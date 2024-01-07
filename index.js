require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram',(req,res)=>{
    res.send("pratikguha2019")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login and learn the backend properly</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<a href="https://youtu.be/1reZByeUhPY?si=j8B9XxkN8OYLpdu3" target="_blank" >click to visit the youtube video</a>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})