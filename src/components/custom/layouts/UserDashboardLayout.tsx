import NavBar from "../NavBar"
import UserSideBar from "../UserSideBar"

const UserDashboardLayout = (props: any) => {
    return (
      <div className=" w-full h-full flex flex-col">
        <div className=" h-[90px] w-full">
            <NavBar/>
        </div>
        <div className=" h-[90%] w-full flex flex-row">
            <div className="w-[250px] h-full">
                <UserSideBar/>
            </div>
            <div className="w-full h-full flex flex-col justify-between">
                <div className=" w-full h-full">
                    { props.children }
                </div>
                <div className=" h-[50px] bg-[#55d6c2] "></div>
            </div>
        </div>
      </div>
    )
  }

export default UserDashboardLayout
  