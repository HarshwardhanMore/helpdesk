import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import UserDashboardLayout from '../../layouts/UserDashboardLayout'

function UserNewTicket() {
  return (
    <UserDashboardLayout>
      <div className=' w-full h-full flex justify-center items-center'>
        <div className=' w-[90%] h-[90%] grid grid-cols-2 gap-8'>
          <div className=' col-span-2 flex justify-center items-center text-2xl font-semibold'>Create New table</div>
          <div className=' flex justify-center items-center'>
            < div className=' w-1/4'>Ticket No.</ div>
            <Input type="text" className=' bg-gray-200'/>
          </div>
          <div className=' flex justify-center items-center'>
            < div className=' w-1/4'>Date</ div>
              <Input type="text" className=' bg-gray-200'/>
          </div>
          <div className=' flex justify-center items-center'>
            < div className=' w-1/4'>Name</ div>
              <Input type="text" className=' bg-gray-200'/>
          </div>
          <div className=' flex justify-center items-center'>
            < div className=' w-1/4'>Department</ div>
              <Input type="text" className=' bg-gray-200'/>
          </div>
          <div className=' flex flex-col justify-center items-start col-span-2'>
            < div className=' mb-1'>Subject</ div>
              <Input type="text" className=' bg-gray-200'/>
          </div>
          <div className=' flex flex-col justify-center items-start'>
            < div className=' mb-1'>Category</ div>
              <Input type="text" className=' bg-gray-200'/>
          </div>
          
          <div className=' flex flex-col justify-start items-start row-span-3'>
            < div className=' mb-1'>Description</ div>
            <Textarea className=' h-full bg-gray-200'/>
          </div>
          <div className=' flex flex-col justify-center items-start'>
            < div className=' mb-1'>Type</ div>
              <Input type="text" className=' bg-gray-200'/>
          </div>
          <div className=' flex flex-col justify-center items-start'>
            < div className=' mb-1'>Priority</ div>
              <Input type="text" className=' bg-gray-200'/>
          </div>
          <div className=' w-full h-full'>
            <img src="/captcha.png" alt="" className='w-1/2'/>
          </div>
          <Button className=' bg-[#55D6C2] w-1/3 text-black justify-self-end self-end hover:bg-[#55D6C2]'>Submit</Button>
        </div>
      </div>
      </UserDashboardLayout>
  )
}

export default UserNewTicket