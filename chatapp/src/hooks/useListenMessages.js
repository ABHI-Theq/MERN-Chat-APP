import React, { useEffect } from 'react'
import { useSocketContext } from '../Context/SocketContext'
import useConversation from '../Zustand/useConversation'
import notification from '../assets/notify.mp3'
function useListenMessages() {
  const {socket}=useSocketContext()
  const {messages,setMessages }=useConversation()

  useEffect(()=>{
    socket?.on("newMsg",(newmsg)=>{
        newmsg.shouldShake=true;
        const sound=new Audio(notification)
        sound.play()
        setMessages([...messages,newmsg])
    })
    return ()=> socket?.off('newMsg')
  },[socket,setMessages,messages])
}

export default useListenMessages