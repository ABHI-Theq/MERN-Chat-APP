import React from 'react'
import { useAuthContext } from '../../Context/AuthContext'
import useConversation from '../../Zustand/useConversation'
import { extractTime } from '../../utils/extractTime'

function Msg({msg}) {
  const {authUser}=useAuthContext()
  const {selectedConversation}=useConversation()
  const fromMe=msg.senderId===authUser._id
  // console.log(fromMe);
  const formattedTime=extractTime(msg.createdAt)

  const profilePic= fromMe ? `${authUser.profilePic}`: `${selectedConversation?.profilePic}`
  // console.log(profilePic);
  
  const chatClassName=fromMe ? 'chat-start' : 'chat-end';
  const bubbleColor=fromMe?'bg-gray-700':'bg-blue-500'
  const Shake=msg.shouldShake?"shake":""
  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
            <img
        alt="Tailwind CSS chat bubble component"
        src={profilePic} />
            </div>
        </div>
        <div className={`chat-bubble text-white text-center mb-5 ${bubbleColor} ${Shake} ${msg.shouldShake==false} text-md`}>{msg.message}</div>
        <div className='chat-footer opacity-50 text-sm flex gap-1 items-center'>{formattedTime}</div>
    </div>
  )
}

export default Msg