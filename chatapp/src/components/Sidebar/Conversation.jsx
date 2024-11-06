import React from 'react'
import useConversation from '../../Zustand/useConversation'
import { useSocketContext } from '../../Context/SocketContext';

function Conversation({conversation,emoji,lastidx}) {
  const {selectedConversation,setSelectedConversation}= useConversation()

  const isSelected =selectedConversation?.email===conversation.email;
  const {onlineUsers}=useSocketContext()
  const isOnline=onlineUsers.includes(conversation._id)
  return (
    <>
    <div className={`flex gap-2 items-center ${isSelected? `bg-sky-500`: `` }  hover:bg-sky-500 rounded-lg p-2 py-1 cursor-pointer`}
    onClick={()=>{setSelectedConversation(conversation)}}
    >
        <div className={`avatar ${isOnline? 'online':''}`}>
        <div className='w-12 rounded-full'>
            <img src={conversation.profilePic} alt=" user avatar" />
        </div>
        </div>
         <div className='flex flex-col flex-1' >
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>{conversation.name}</p>
                <span  className='text-xl'>{emoji}</span>
            </div>
         </div>
    </div>
    {!lastidx?
        <div className='divider my-0 py-0 h-1'></div> : null }
    </>
  )
}

export default Conversation