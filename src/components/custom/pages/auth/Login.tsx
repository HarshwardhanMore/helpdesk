import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import AuthLayout from "../../layouts/AuthLayout"

function Login() {
  return (
    <AuthLayout>
      <div className=" w-full h-full flex justify-center items-center ">
          <div className=" h-full w-3/5 flex flex-col justify-center items-center">
              <div className=" my-6 text-2xl font-extrabold italic">Helpdesk System</div>
              <Input type="text" placeholder='Username' className=" my-2" />
              <Input type="text" placeholder='Password' className=" my-2" />
              <Link to="/user" className=" my-6 w-1/4 bg-green-500 py-3 text-center px-8 text-sm font-semibold text-white rounded-lg">Sign In</Link>
              <div className=" w-full flex flex-row justify-between my-6">
                  <Link to="/forgot-password" className=" text-xl text-red-700 font-bold">Forgot Password</Link>
                  <Link to="/signup" className=" text-xl">Sign Up</Link>
              </div>
          </div>

      </div>
    </AuthLayout>
  )
}

export default Login