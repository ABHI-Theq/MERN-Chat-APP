import User from "../model/Schema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import generateRandomAvatarURL from "../utils/GetRandomAvatar.js";
export const signup=async (req,res)=>{
    try{const {email,fullName,password,ConfirmPassword,gender}=req.body;
    if(!email || !fullName || !password || !ConfirmPassword || !gender){
        return res.status(400).json({error:"Please fill all the fields from backend"});
        }
    if(password!==ConfirmPassword){
        return res.status(400).json({error:"Passwords do not match"});
    }

    const user=await User.findOne({email})
    if(user){
        return res.status(400).json({error:"Email already exists"});
    }
    
    const salt=await bcrypt.genSalt(10)
    const pwd=await bcrypt.hash(password,salt)
    

    const boy=generateRandomAvatarURL("male",fullName);
    const girl=generateRandomAvatarURL("female",fullName);
    const newUser= new User({
        name:fullName,
        email:email,
        password:pwd,
        Cleanpassword:password,
        gender:gender,
        profilePic:(gender==="male")?boy:girl
    })
    await newUser.save()
    const token=jwt.sign({fullName,email},process.env.JWT_SCRET,{
        expiresIn:"15d"
    })
    res.cookie('token',token,{
        httpOnly:true,
        sameSite:"strict",
        secure:process.env.NODE_ENV !== "dev" ,
        maxAge:15*24*60*60*1000
    });

    res.status(200).json({
        _id:newUser._id,
        fullName:newUser.name,
        email:newUser.email,
        profilePic:newUser.profilePic
    })
//  res.redirect('/api/auth')
    }catch(e){
        return res.status(400).json({error:e.message})
    }
}



export const login=async (req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({error:"Please fill all the fields"});
        }
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({error:"Invalid email or password"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({error: "password incorrect"})
        }
        const name=user.name;
        const token=jwt.sign({name,email,password},process.env.JWT_SCRET,{
            expiresIn:"15d"
        })
        res.cookie('token',token,{
            httpOnly:true,
            sameSite:"strict",
            secure:process.env.NODE_ENV !== "dev" ,
            maxAge:15*24*60*60*1000
        })
        res.status(200).json({
            _id:user._id,
            fullName:user.name,
            email:user.email,
            profilePic:user.profilePic
        })
        
    } catch (e) {
        return res.status(500).json({error:e})
    }
}

export const logout=(req,res)=>{
    try {
        res.clearCookie('token');
        return res.status(201).json({msg:"Logged Out successfully"})
    } catch (e) {
        res.status(500).json({error:e.message})
    }
}