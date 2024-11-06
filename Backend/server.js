import express from 'express'
import { connectToDB } from './db/connectToDB.js'
import path from 'path'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config()
import authrouter from './routes/authroutes.js'
import messageRoute from './routes/messageRoutes.js'
import userRoute from './routes/userRoutes.js'
import { app,server } from './socket/socket.js'
// const app=express();

const __dirname=path.resolve();
app.use(express.static(path.join(__dirname,"/chatapp/dist")))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.set(express.static('./public'))
const port=process.env.PORT || 5000
app.use('/api/auth',authrouter);
app.use('/api/messages',messageRoute)
app.use('/api/users',userRoute)


app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"chatapp","dist","index.html"))    
})
server.listen(port,()=>{
    connectToDB()
    console.log(`Server running on port ${port}`)
})