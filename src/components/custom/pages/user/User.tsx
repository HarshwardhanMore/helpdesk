import React from 'react'
import NavBar from '../../NavBar'
import UserSideBar from '../../UserSideBar'
import { Route, Routes } from 'react-router-dom'
import UserDashboard from './UserDashboard'
import UserNewTicket from './UserNewTicket'
import UserMyTicket from './UserMyTicket'

function User() {
  return (
    
    
    <div className=' w-screen h-screen overflow-hidden'>

      <div className=" w-full h-full flex flex-col">
        <div className=" h-[90px] w-full">
            <NavBar/>
        </div>
        <div className=" h-[90%] w-full flex flex-row">
            <div className="w-[250px] h-full">
                <UserSideBar/>
            </div>
            <div className="w-full h-full flex flex-col justify-between">
                <div className="">
                <Routes>
                  <Route path='/' element={<UserDashboard/>}/>
                  <Route path='user-new-ticket' element={<UserNewTicket/>}/>
                  <Route path='user-my-ticket' element={<UserMyTicket/>}/>
                </Routes>
                </div>
                <div className=" h-[50px] bg-[#55d6c2]"></div>
            </div>
        </div>
      </div>
    </div>

  )
}

export default User