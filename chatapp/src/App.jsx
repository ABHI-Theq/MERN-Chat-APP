import { useState } from 'react'
import './App.css'
// import {Toaster} from 'react-hot-toast'
import Login from './pages/Login/Login'
import Signup from './pages/SignUp/Signup'
import Home from './pages/Home/Home'
import { Toaster } from 'react-hot-toast';
import { Routes,Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './Context/AuthContext'

function App() {
  const [count, setCount] = useState(0)
  const {authUser}= useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser? <Home/> : <Navigate to='/login' />}/>
        <Route path='/login' element={authUser? <Navigate to='/' /> : <Login/>}/>
        <Route path='/signup' element={ authUser? <Navigate to='/' /> : <Signup/>}/>
      </Routes>
      <Toaster />
       </div>
  )
}

export default App
