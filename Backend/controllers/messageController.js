import Conversation from "../model/conversationSchema.js";
import Message from "../model/messageSchema.js";
import {getReceiverSocketId, io} from '../socket/socket.js'
export const sendMsg=async (req,res)=>{
    try {
        const {message}=req.body;
        const receiverId=req.params.id;
        const senderId=req.user._id
        // console.log(senderId);
        // console.log(receiverId);
        
        
        let conversation=await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        })
        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,receiverId],
                messages:[],
            })
        }
            const newMsg=await Message.create({
                senderId:senderId,
                receiverId:receiverId,
                message:message
            })

            if(newMsg){
                conversation.messages.push(newMsg._id)
                await conversation.save()
            }
            //socketio functionality over here

            const receiverSocketId=getReceiverSocketId(receiverId)
    
             if(receiverSocketId){ 
               io.to(receiverSocketId).emit("newMsg",newMsg) 
             }

           return res.status(201).json(newMsg)


    } catch (e) {
        console.log(e.message);
        return res.status(400).json({error:e.message})
    }
    
}
export const getMsgs=async (req,res)=>{
    try {
        const {id:userToChat} =req.params;
        const senderId=req.user._id;
        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,userToChat]}
        }).populate('messages')
         if(!conversation){
            return res.status(200).json([])
         }   
        return res.status(200).json(conversation.messages)
    } catch (e) {
        console.log(e.message);
        return res.status(400).json({error:e.message})
    }
}