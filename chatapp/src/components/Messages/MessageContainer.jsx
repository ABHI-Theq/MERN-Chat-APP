import React, { useEffect } from 'react'
import Msgs from './Msgs'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'
import useConversation from '../../Zustand/useConversation';
import { useAuthContext } from '../../Context/AuthContext';

function MessageContainer() {
    const noChatSelected=true;
    const {selectedConversation,setSelectedConversation}=useConversation()
    useEffect(()=>{
        return(
            ()=>{setSelectedConversation(null)}
        )
    },[noChatSelected])
  return (
    <div className="md:min-w-[450px] flex flex-col">
        {!selectedConversation?(<NoChatSelected/>): (
            <>
        <div className='bg-slate-500 px-4 py-2 mb-2'>
        <span className='label-text'>To:</span>{" "}
        <span className='text-gray-900 font-bold'>{selectedConversation.name}</span>
        </div>

        <Msgs/>
        <MessageInput/>
        </>
    )}
        </div>
  )
}
const NoChatSelected=()=>{
    const {authUser}=useAuthContext()
    return(
        <div className='flex justify-center items-center h-full w-full'>
            <div className='px-4 text-center xm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
            <p>Welcome 👋 {authUser.fullName}</p>
            <p>Select a chat to start messaging</p>
            <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}

export default MessageContainer