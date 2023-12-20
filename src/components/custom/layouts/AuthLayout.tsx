

const AuthLayout = (props: any) => {
    return (
      <div className=" w-screen h-screen flex flex-col justify-center items-center bg-[#66d6c2]">
        { props.children }
      </div>
    )
  }

export default AuthLayout
  