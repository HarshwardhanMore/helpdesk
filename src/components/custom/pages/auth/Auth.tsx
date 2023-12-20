
import AuthLayout from '../../layouts/AuthLayout'
import Login from './Login'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'

import { Routes, Route } from 'react-router-dom'

function Auth() {
  return (
    <AuthLayout>
        <div className=' w-3/4 h-3/4 bg-white bg-opacity-50'>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/forgotpassword" element={<ForgotPassword/>}/>
            </Routes>
        </div>
    </AuthLayout>
  )
}

export default Auth