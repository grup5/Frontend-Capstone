import express from "express"
import dotenv from "dotenv"
const app = express()
const port = process.env.PORT || 3000

//Get all route for the related images
app.get('/api/images/related',(req,res)=>{

})

app.use(express.json())
app.listen(port,()=>{console.log("Server Running on Port:",port)})

