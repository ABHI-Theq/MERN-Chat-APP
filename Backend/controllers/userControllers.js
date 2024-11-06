import User from '../model/Schema.js'

export const getUsersForSideBar=async(req,res)=>{
    try {
        const loggedInUserId=req.user.email
        
        const filteredUser=await User.find({email:{$ne:loggedInUserId}}).select("-password")

         return   res.status(200).json(filteredUser)
    } catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
    }
}
