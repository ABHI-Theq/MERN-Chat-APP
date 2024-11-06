import mongoose from 'mongoose'
const UserSchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        // unique:true
    },
    Cleanpassword:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilePic:{
        type:String,
        default:""
    }
},{timestamps:true})
const User=mongoose.model("user",UserSchema);
export default User