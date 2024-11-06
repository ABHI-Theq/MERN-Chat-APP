import React, { useEffect, useState } from 'react'
import useConversation from '../Zustand/useConversation'

function useGetMessages() {
    const [loading,setLoading]=useState(false)
  const {messages,setMessages, selectedConversation}=useConversation()

  useEffect(()=>{
    const fetchMessages=async()=>{
        setLoading(true)
        try {
            const res=await fetch(`/api/messages/${selectedConversation._id}`)
            if(!res.ok){
                throw new Error(res.statusText)
            }
            const data=await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            setMessages(data)
        } catch (error) {
            alert(error.message)
        }finally{
            setLoading(false);
        }
    }
    if(selectedConversation?._id) fetchMessages()
  },[selectedConversation._id,setMessages])
  return  {messages,loading}
}

export default useGetMessages