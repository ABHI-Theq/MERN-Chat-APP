import React, { useEffect, useRef } from 'react'
import Msg from './msg'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../Skeletons/MsgSkeleton.';
import useListenMessages from '../../hooks/useListenMessages';

function Msgs() {
  const {messages,loading}=useGetMessages();
  // console.log("Messages:  ",messages);
  useListenMessages()
  const lastMessageRef=useRef()
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior: "smooth"})
    },100)
  },[messages])
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {loading?  
        [...Array(3)].map((_,idx) => <MessageSkeleton key={idx}/>)
      : 
      
        (messages.length===0)? 
        <p className='text-center'>Send a message to start Conversation</p>
         :
         messages.map((message) => <div key={message._id}
         ref={lastMessageRef}>
          <Msg  msg={message}/>
          </div>)
          
       }
    </div>
  )
}

export default Msgs