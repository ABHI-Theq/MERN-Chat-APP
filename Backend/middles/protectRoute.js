import jwt from 'jsonwebtoken'
import User from './../model/Schema.js'
const protectedRoute=async(req,res,next)=>{
    try {
        const token=req.cookies?.token;
        if(!token){
            return res.status(401).json({error:'Please login to access this route'});
        }
        const decoded=jwt.verify(token,process.env.JWT_SCRET);

        if(!decoded){
            return res.status(401).json({msg:'Token is invalid...'});
        }
        const user=await User.findOne({email:decoded.email});

        if(!user){
            return res.status(401).json({msg:'User does not exist'});
        }
        req.user=user;
        next()
    }catch(e){
        console.log(e.message);
        res.status(500).json({message:e.message})
        
    }

}

export default protectedRoute