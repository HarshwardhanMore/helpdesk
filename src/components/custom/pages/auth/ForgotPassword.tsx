import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import AuthLayout from "../../layouts/AuthLayout"

function ForgotPassword() {
  return (
    <AuthLayout>
      <div className=" w-full h-full flex justify-center items-center ">
          <div className=" h-full w-3/5 flex flex-col justify-center items-center">
              <div className=" text-xl w-1/2 mb-6 text-center">Don't worry, Enter your email below and we will send you a link to change password.</div>
              <Input type="text" placeholder='Email' className=" my-6" />
                  <Button className=" my-6 w-1/4 bg-green-500">Submit</Button>
              <Link to="/" className="w-1/4">
                  <Button className=" w-full bg-blue-500">Sign In</Button>
              </Link>
          </div>

      </div>
    </AuthLayout>
  )
}

export default ForgotPassword