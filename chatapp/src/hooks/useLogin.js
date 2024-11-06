import { useState } from "react"
import { useAuthContext } from "../Context/AuthContext";
import {toast} from 'react-hot-toast'
function useLogin(){
    const [loading,setLoading]=useState(false);
    const {authUser,setAuthUser}=useAuthContext();

    const login= async (email,password)=>{
        setLoading(true);
        try {
            
            const res=await fetch('/api/auth/login',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({email,password})
            })
            
            // if(!res.ok){
                
            //     throw new Error("Invalid Email or Password");
            // }

            const data=await res.json();
            // console.log(data);

            if(data.error){
                throw new Error(data.error);
            }
            localStorage.setItem('chat-user',JSON.stringify(data))
            setAuthUser(data)
        } catch (e) {
            toast.error(e.message)
            console.log(e);
            
        }finally{
            setLoading(false);
        }
    }
    return {loading,login}
}
export default useLogin