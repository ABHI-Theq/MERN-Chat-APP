import React, { useState } from 'react'
import { useAuthContext } from '../Context/AuthContext';

function useLogout() {
    const [loading,setLoading]=useState(false);
    const {authUser,setAuthUser}=useAuthContext();
    const logout=async()=>{
        setLoading(true);
        try {
            const res=await fetch('/api/auth/logout',{
                method:"POST",
                headers:{"Content-Type":"application/text"},
            })
            const data=await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            localStorage.removeItem('chat-user')
            setAuthUser(null);
        } catch (e) {
            alert(e)
        }finally{
            setLoading(false);
        }
    }
    return {loading,logout}
}

export default useLogout