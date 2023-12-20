
import UserDashboardLayout from '../../layouts/UserDashboardLayout'

const Card = ({title, num} : any) => {
  return (
    <div className=' w-full flex flex-col items-center bg-red-600 rounded-2xl aspect-square shadow-2xl'>
      <div className=' text-2xl h-1/6  flex justify-center items-center'>{title}</div>
      <div className=' text-9xl h-5/6 text-gray-800 flex justify-center items-center'>{num}</div>
    </div>
  )
}

const lst: any = [
  {
    title: "Total Tickets",
    num: "12"
  },
  {
    title: "Total Solved",
    num: "8"
  },
  {
    title: "Total Awaiting Approval",
    num: "2"
  },
  {
    title: "Total in Progress",
    num: "2"
  },
]

function UserDashboard() {
  return (
    <UserDashboardLayout>
      <div className='w-full h-full flex flex-col items-center'>
        <div className='w-full h-1/6 flex justify-center items-center text-3xl '>Dashboard</div>
        <div className='w-11/12 h-4/6 grid grid-cols-4 gap-8'>
          
          {
            lst.map((item:any)=>{
              return (
                <Card title={item.title} num={item.num} />
              )
            })
          }
          
        </div>


      </div>
    </UserDashboardLayout>
  )
}

export default UserDashboard