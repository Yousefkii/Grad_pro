import logincard from '../../assets/images/logincard.png'

const AuthLayout = ({children}) => {
  return (
    <div className='flex justify-between w-full '>
        <div className='w-screen flex flex-col h-screen  md:w-[60vw] px-4 ml-20 pt-8 pb-12'>
        <h2 className='text-lg font-medium text-black'>
            Expenses tracker
        </h2>
        {children}
        </div>

        <div className='hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative '>
        
        <img src={logincard} className='w-90 lg:w-[90%] xl:w-[100%] flex bottom-10 shadow-lg shadow-blue-400/15 '/>
        </div>
    </div>

  )
}

export default AuthLayout;