import React, { useState } from 'react'
import {Link,NavLink} from 'react-router-dom'
import  useLogin  from '../../hooks/useLogin'
import { useAuthContext } from '../../Context/AuthContext'
function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {loading,login}=useLogin()
    const {authUser}=useAuthContext()
    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(authUser);
        
        await login(email,password)
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
        bg bg-opacity-0 '>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Login
            <span className=' text-blue-500'> ChatApp</span>
            </h1>

            <form onSubmit={handleSubmit} action="">
                <div>
                    <label htmlFor="" className='label p-2'>
                        <span className='text-base label-text'>Email</span>
                    </label>
                    <input type="email"
                     placeholder='Enter email' 
                     value={email}
                     onChange={(e)=>{
                        setEmail(e.target.value)
                     }}
                     className='w-full input input-bordered h-10' />
                </div>
                <div>
                    <label htmlFor="" className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="text"
                     placeholder='Enter password' 
                     value={password}
                     onChange={(e)=>{
                        setPassword(e.target.value)
                     }}
                     className='w-full input input-bordered h-10' />
                </div>
                <Link to={"/signup"} className='text-sm hover:underline hover: text-blue-600 mt-2 inline-block'>
                    {"Don't"} hava an account?
                </Link>
                <div>
                    <button type='submit' className='btn btn-block btn-sm mt-2'>
                    {loading?(
                    <span className='loading loading-spinner'></span>
                ):"Login"}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login