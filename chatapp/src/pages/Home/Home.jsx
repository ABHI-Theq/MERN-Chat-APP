import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer from '../../components/Messages/MessageContainer'

function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-xl overflow-hidden  bg-clip-padding backdrop-filter backdrop-blur-lg bg bg-opactiy-0'>
    <Sidebar/>
    <MessageContainer/>
    </div>
  )
}

export default Home