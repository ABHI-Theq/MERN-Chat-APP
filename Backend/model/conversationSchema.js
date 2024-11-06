import mongoose from 'mongoose'
const conversationschema=new mongoose.Schema({
    participants:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        }
    ],
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'message',
            default:[]
        }
    ]

},{
    timestamps:true
})

const Conversation=mongoose.model('conversation',conversationschema)

export default Conversation