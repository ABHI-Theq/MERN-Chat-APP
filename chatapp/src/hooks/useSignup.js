import React, { useState } from 'react'
import { useAuthContext } from '../Context/AuthContext';
import {toast} from 'react-hot-toast'
function useSignup() {
    const [loading,setLoading]=useState(false);
    const {authUser,setAuthUser}= useAuthContext()
    const signup=async({fullName,email,password,ConfirmPassword,gender})=>{
        const success=handleInputError({fullName,email,password,ConfirmPassword,gender});
        if(!success) return;
        setLoading(true);
        try {
            const res=await fetch ('api/auth/signup',{
                method:'POST',
                headers:{ 'Content-Type':'application/json'},
                body:JSON.stringify({fullName,email,password,ConfirmPassword,gender})
            })
            const data=await res.json();
            console.log({"data":data})
            if(data.error){
                throw new Error(data.error);
            }

            //localstorage
            //context
            localStorage.setItem('chat-user',JSON.stringify(data));
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message)
            console.error(error.message)
            
        }finally{
            setLoading(false);
        }

    }
    return {loading,signup};
}

export default useSignup

const handleInputError=({fullName,email,password,ConfirmPassword,gender})=>{
    if(!fullName || !email || !password || !gender || !ConfirmPassword){
        // console.log({fullName,email,password,ConfirmPassword,gender});
        
        toast.error('Please fill all the fields');
        return false;
    }

    if(password!==ConfirmPassword) {
        toast.error("password and confirm password don't match from frontend");
        return false;
    }
    if(password.length<6){
        toast.error('password must be greater than or equal 6 characters')
        return false;
    }

    return true;

}