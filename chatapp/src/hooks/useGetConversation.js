import React, { useEffect, useState } from 'react'
import {toast} from 'react-hot-toast'
import { useAuthContext } from '../Context/AuthContext';
function useGetConversation() {
    const [loading,setLoading]=useState(false);
    const [conversations,setConversations]=useState([]);
    const userExist=localStorage.getItem('chat-user')?true:false
    const  {authUser,setAuthUser}=useAuthContext()
    
    useEffect(()=>{
        const getConversations=async()=>{
            setLoading(true);
            if(!userExist || !authUser){
                toast.error('You must be logged in to view conversations')
            }
            try {

                const res=await fetch('/api/users');
                const data=await res.json();
                // if(!res.ok){
                //     throw new Error(res.statusText);
                // }
                if(data.error){
                    localStorage.removeItem('chat-user')
                    setAuthUser(null)
                    throw new Error(data.error);
                }
                setConversations(data);
                // console.log(data);
                
            } catch (error) {
                toast.error(error.message)
            }finally{
                setLoading(false);
            }
        }
        getConversations();
    },[])
    return {loading,conversations}
}

export default useGetConversation