import { Bell, Bold, LogOut, UserRound } from 'lucide-react'
import React from 'react'



function NavBar() {
  return (
    <div className=' bg-[#55d6c2] h-full w-full flex justify-between items-center px-4'>
      <div className=' font-bold text-4xl italic text-white'>Helpdesk</div>
      <div className=' flex'>
        <Bell className=' ml-4 cursor-pointer'/>
        <UserRound className=' ml-4 cursor-pointer'/>
        <LogOut className=' ml-4 cursor-pointer'/>
      </div>
    </div>
  )
}

export default NavBar