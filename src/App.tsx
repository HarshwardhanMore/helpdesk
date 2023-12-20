import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserSideBar from './components/custom/UserSideBar'
import { Link, Route, Routes } from 'react-router-dom'
import UserDashboard from './components/custom/pages/user/UserDashboard'
import UserNewTicket from './components/custom/pages/user/UserNewTicket'
import UserMyTicket from './components/custom/pages/user/UserMyTicket'
import NavBar from './components/custom/NavBar'
import User from './components/custom/pages/user/User'
import Auth from './components/custom/pages/auth/Auth'
import Login from './components/custom/pages/auth/Login'
import SignUp from './components/custom/pages/auth/SignUp'
import ForgotPassword from './components/custom/pages/auth/ForgotPassword'
import AuthLayout from './components/custom/layouts/AuthLayout'

function App() {

  return (
    <div className=' w-screen h-screen overflow-hidden'>
      {/* <Routes> */}
        {/* <Route path='/' element={<Auth/>}></Route> */}
        {/* <Route path='/' element={}></Route> */}
        
        {/*  */}
      {/* </Routes> */}

      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        
        <Route path="/user" element={<UserDashboard/>} />
        <Route path="/user/new-ticket" element={<UserNewTicket/>} />
        <Route path="/user/my-ticket" element={<UserMyTicket/>} />
      </Routes>
        
      {/* <User/> */}
    </div>
  )
}

export default App
