import React,{useState} from 'react'
import Gender from './Gender'
import { Link,NavLink } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'
function Signup() {
    const [inputs,setInputs]=useState({
        fullName:"",
        email:"",
        password:"",
        ConfirmPassword:"",
        gender:""
    })

    const {loading,signup}=useSignup();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        await signup(inputs)
        // console.log(inputs);
        
    }
    const handleGender=(gender)=>{
        setInputs({...inputs,gender});
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-paddinh backdrop-filter backdrop-blur-lg
    bg bg-opacity-0 '>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
        Sign Up
        <span className=' text-blue-500'> ChatApp</span>
        </h1>

        <form action="" onSubmit={handleSubmit}>
        <div>
                <label htmlFor="" className='label p-2'>
                    <span className='text-base label-text'>Fullname</span>
                </label>
                <input type="text" 
                placeholder='Enter fullname'
                value={inputs.fullName}
                onChange={(e)=>{
                    setInputs({...inputs,fullName:e.target.value})
            }}
                 className='w-full input input-bordered h-10' />
            </div>
            <div>
                <label htmlFor="" className='label p-2'>
                    <span className='text-base label-text'>Email</span>
                </label>
                <input type="email" 
                placeholder='Enter email' 
                value={inputs.email}
                onChange={(e)=>{
                    setInputs({...inputs,email:e.target.value})
            }}
                className='w-full input input-bordered h-10' />
            </div>
            <div>
                <label htmlFor="" className='label p-2'>
                    <span className='text-base label-text'>Password</span>
                </label>
                <input type="text"
                 placeholder='Enter password' 
                 value={inputs.password}
                 onChange={(e)=>{
                     setInputs({...inputs,password:e.target.value})
             }}
                 className='w-full input input-bordered h-10' />
            </div>
            <div>
                <label htmlFor="" className='label p-2'>
                    <span className='text-base label-text'>Confirm Password</span>
                </label>
                <input type="text"
                 placeholder='Enter password' 
                 value={inputs.ConfirmPassword}
                 onChange={(e)=>{
                     setInputs({...inputs,ConfirmPassword:e.target.value})
             }}
                 className='w-full input input-bordered h-10' />
            </div>
            <Gender OnGender={handleGender} selectgender={inputs.gender}/>
            <Link to={"/login"} className='text-sm hover:underline hover: text-blue-600 mt-2 inline-block'>
                Already hava an account?
            </Link>
            <div>
                <button type='submit' className='btn btn-block btn-sm mt-2'>
                {loading?(
                    <span className='loading loading-spinner'></span>
                ):"Signup"}
                </button>
            </div>
        </form>
    </div>
</div>
  )
}

export default Signup