import mongoose from 'mongoose'
export const connectToDB=async ()=>{
    try{

        await mongoose.connect(process.env.CONN_STR)
        console.log("connected to DB");
        
    }catch(e){
        console.log(e);
    }
}