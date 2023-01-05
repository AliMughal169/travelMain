const express=require('express')
const http=require('http')
const app=express()
const port=8081
//creating server

http.createServer(app).listen(port,()=>{
    console.log( `listening at port ${port}`)
})

